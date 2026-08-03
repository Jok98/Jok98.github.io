#!/usr/bin/env python3
"""Generate every tracked artifact and build the searchable Jekyll site."""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DESTINATION = REPO_ROOT / "_site"
PAGEFIND_OUTPUT = REPO_ROOT / "assets" / "pagefind"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate indexes and CV, build Jekyll, index with Pagefind, and rebuild."
    )
    parser.add_argument(
        "--destination",
        type=Path,
        default=DEFAULT_DESTINATION,
        help="Jekyll output directory. Defaults to _site.",
    )
    return parser.parse_args()


def run(command: list[str], *, env: dict[str, str] | None = None) -> None:
    print(f"+ {' '.join(command)}", flush=True)
    subprocess.run(command, cwd=REPO_ROOT, env=env, check=True)


def require_executable(name: str) -> str:
    executable = shutil.which(name)
    if executable:
        return executable
    raise RuntimeError(
        f"Required executable '{name}' was not found. Install the versioned dependencies first."
    )


def main() -> int:
    args = parse_args()
    destination = args.destination.resolve()
    bundle = require_executable("bundle")
    pagefind = REPO_ROOT / "node_modules" / ".bin" / "pagefind"
    if not pagefind.is_file():
        raise RuntimeError("Pagefind is missing. Run 'npm ci' before building the site.")

    run(["bash", "scripts/create_json.sh"])
    run([sys.executable, "scripts/create_content_index.py"])
    run([sys.executable, "scripts/render_cv_pdf.py"])

    jekyll_command = [
        bundle,
        "exec",
        "jekyll",
        "build",
        "--destination",
        str(destination),
    ]
    run(jekyll_command, env=os.environ.copy())
    run(
        [
            str(pagefind),
            "--site",
            str(destination),
            "--output-subdir",
            "assets/pagefind",
        ]
    )
    generated_pagefind = destination / "assets" / "pagefind"
    if not (generated_pagefind / "pagefind.js").is_file():
        raise RuntimeError(f"Pagefind did not generate its browser bundle: {generated_pagefind}")
    if PAGEFIND_OUTPUT.exists():
        shutil.rmtree(PAGEFIND_OUTPUT)
    shutil.copytree(generated_pagefind, PAGEFIND_OUTPUT)
    run(jekyll_command, env=os.environ.copy())

    pagefind_entry = destination / "assets" / "pagefind" / "pagefind.js"
    if not pagefind_entry.is_file():
        raise RuntimeError(f"Search bundle was not copied into the site: {pagefind_entry}")

    print(f"Built searchable site: {destination}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, subprocess.CalledProcessError) as error:
        print(f"error: {error}", file=sys.stderr)
        raise SystemExit(1)
