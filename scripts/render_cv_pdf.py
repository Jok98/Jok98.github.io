#!/usr/bin/env python3
"""
Render the Markdown CV page to a standalone HTML file and a PDF.

The generated HTML inlines the local site CSS, so the PDF is rendered from the
same visual rules used by the CV page instead of from plain Markdown text.
"""

from __future__ import annotations

import argparse
import html
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = REPO_ROOT / "pages" / "cv.md"
DEFAULT_HTML = REPO_ROOT / "dist" / "cv.html"
DEFAULT_PDF = REPO_ROOT / "dist" / "cv.pdf"
CSS_FILES = (
    REPO_ROOT / "assets" / "css" / "default_style.css",
    REPO_ROOT / "assets" / "css" / "cv_style.css",
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Render pages/cv.md to dist/cv.html and dist/cv.pdf."
    )
    parser.add_argument(
        "--source",
        type=Path,
        default=DEFAULT_SOURCE,
        help="Markdown CV source file. Defaults to pages/cv.md.",
    )
    parser.add_argument(
        "--html",
        type=Path,
        default=DEFAULT_HTML,
        help="Standalone HTML output. Defaults to dist/cv.html.",
    )
    parser.add_argument(
        "--pdf",
        type=Path,
        default=DEFAULT_PDF,
        help="PDF output. Defaults to dist/cv.pdf.",
    )
    parser.add_argument(
        "--chromium",
        default=os.environ.get("CHROMIUM_BIN"),
        help="Chromium/Chrome executable. Defaults to CHROMIUM_BIN or auto-detection.",
    )
    parser.add_argument(
        "--html-only",
        action="store_true",
        help="Generate only the standalone HTML file.",
    )
    return parser.parse_args()


def strip_front_matter(markdown_text: str) -> tuple[dict[str, str], str]:
    if not markdown_text.startswith("---\n"):
        return {}, markdown_text

    end = markdown_text.find("\n---\n", 4)
    if end == -1:
        return {}, markdown_text

    metadata: dict[str, str] = {}
    front_matter = markdown_text[4:end].splitlines()
    for line in front_matter:
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        metadata[key.strip()] = value.strip().strip('"')

    return metadata, markdown_text[end + len("\n---\n") :]


def markdown_to_html(markdown_text: str) -> str:
    try:
        import markdown  # type: ignore

        return markdown.markdown(
            markdown_text,
            extensions=("extra", "sane_lists", "smarty"),
            output_format="html5",
        )
    except ModuleNotFoundError:
        return minimal_markdown_to_html(markdown_text)


def minimal_markdown_to_html(markdown_text: str) -> str:
    """Convert the subset of Markdown used by pages/cv.md.

    Raw HTML blocks are preserved. That is intentional: the CV page already uses
    semantic HTML wrappers that carry the CSS classes used for rendering.
    """

    output: list[str] = []
    paragraph: list[str] = []
    lines = markdown_text.splitlines()
    index = 0

    while index < len(lines):
        line = lines[index]
        stripped = line.strip()

        if not stripped:
            flush_paragraph(output, paragraph)
            index += 1
            continue

        block_tag = opening_html_block_tag(stripped)
        if block_tag:
            flush_paragraph(output, paragraph)
            block, index = collect_html_block(lines, index, block_tag)
            output.extend(block)
            continue

        if stripped in {"---", "***", "___"}:
            flush_paragraph(output, paragraph)
            output.append("<hr>")
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.+)$", stripped)
        if heading:
            flush_paragraph(output, paragraph)
            level = len(heading.group(1))
            text = convert_inline_markdown(heading.group(2))
            output.append(f"<h{level}>{text}</h{level}>")
            index += 1
            continue

        paragraph.append(stripped)
        index += 1

    flush_paragraph(output, paragraph)
    return "\n".join(output)


def opening_html_block_tag(stripped_line: str) -> str | None:
    match = re.match(
        r"^<(?P<tag>div|section|article|header|main|footer|ul|ol|table|blockquote|pre)\b",
        stripped_line,
        flags=re.IGNORECASE,
    )
    return match.group("tag").lower() if match else None


def collect_html_block(lines: list[str], start: int, tag: str) -> tuple[list[str], int]:
    block: list[str] = []
    depth = 0
    index = start
    opening_pattern = re.compile(rf"<{tag}\b", flags=re.IGNORECASE)
    closing_pattern = re.compile(rf"</{tag}>", flags=re.IGNORECASE)

    while index < len(lines):
        line = lines[index]
        block.append(line)
        depth += len(opening_pattern.findall(line))
        depth -= len(closing_pattern.findall(line))
        index += 1
        if depth <= 0:
            break

    return block, index


def flush_paragraph(output: list[str], paragraph: list[str]) -> None:
    if paragraph:
        text = convert_inline_markdown(" ".join(paragraph))
        output.append(f"<p>{text}</p>")
        paragraph.clear()


def convert_inline_markdown(text: str) -> str:
    escaped = html.escape(text)
    escaped = re.sub(r"`([^`]+)`", r"<code>\1</code>", escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", escaped)
    escaped = re.sub(
        r"\[([^\]]+)\]\(([^)]+)\)",
        r'<a href="\2">\1</a>',
        escaped,
    )
    return escaped


def build_standalone_html(content_html: str, title: str) -> str:
    css = "\n\n".join(read_css_file(path) for path in CSS_FILES)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{html.escape(title)}</title>
  <style>
{css}

/* PDF rendering: keep the generated document focused on the CV content. */
html,
body.cv-page {{
  background: #ffffff !important;
  margin: 0;
}}

body.cv-page::before {{
  content: none !important;
  display: none !important;
}}
  </style>
</head>
<body class="cv-page">
<main class="cv-main" role="main">
{content_html}
</main>
</body>
</html>
"""


def read_css_file(path: Path) -> str:
    if not path.exists():
        raise FileNotFoundError(f"Missing CSS file: {path}")
    return f"/* {path.relative_to(REPO_ROOT)} */\n{path.read_text(encoding='utf-8')}"


def find_chromium(configured_binary: str | None) -> str:
    candidates = [
        configured_binary,
        "chromium",
        "chromium-browser",
        "google-chrome",
        "google-chrome-stable",
    ]
    for candidate in candidates:
        if not candidate:
            continue
        resolved = shutil.which(candidate)
        if resolved:
            return resolved
    raise RuntimeError(
        "Chromium/Chrome executable not found. Install chromium or pass --chromium /path/to/chrome."
    )


def render_pdf(chromium: str, html_file: Path, pdf_file: Path) -> None:
    pdf_file.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="cv-chromium-") as temp_dir:
        temp_path = Path(temp_dir)
        user_data_dir = temp_path / "profile"
        config_dir = temp_path / "config"
        cache_dir = temp_path / "cache"
        user_data_dir.mkdir()
        config_dir.mkdir()
        cache_dir.mkdir()

        command = [
            chromium,
            "--headless",
            "--disable-gpu",
            "--disable-dev-shm-usage",
            "--disable-crash-reporter",
            "--disable-extensions",
            "--no-first-run",
            "--no-sandbox",
            "--allow-file-access-from-files",
            f"--user-data-dir={user_data_dir}",
            f"--print-to-pdf={pdf_file}",
            "--no-pdf-header-footer",
            "--print-to-pdf-no-header",
            html_file.resolve().as_uri(),
        ]
        env = os.environ.copy()
        env.update(
            {
                "HOME": str(temp_path),
                "XDG_CONFIG_HOME": str(config_dir),
                "XDG_CACHE_HOME": str(cache_dir),
            }
        )
        result = subprocess.run(
            command,
            cwd=REPO_ROOT,
            env=env,
            text=True,
            capture_output=True,
        )
        if result.returncode != 0:
            sys.stdout.write(result.stdout)
            sys.stderr.write(result.stderr)
            raise subprocess.CalledProcessError(
                result.returncode,
                command,
                output=result.stdout,
                stderr=result.stderr,
            )


def main() -> int:
    args = parse_args()
    source = args.source.resolve()
    html_file = args.html.resolve()
    pdf_file = args.pdf.resolve()

    markdown_text = source.read_text(encoding="utf-8")
    metadata, markdown_body = strip_front_matter(markdown_text)
    content_html = markdown_to_html(markdown_body)
    document_title = metadata.get("title", source.stem)

    html_file.parent.mkdir(parents=True, exist_ok=True)
    html_file.write_text(
        build_standalone_html(content_html, document_title),
        encoding="utf-8",
    )
    print(f"Generated HTML: {html_file.relative_to(REPO_ROOT)}")

    if not args.html_only:
        chromium = find_chromium(args.chromium)
        render_pdf(chromium, html_file, pdf_file)
        print(f"Generated PDF: {pdf_file.relative_to(REPO_ROOT)}")

    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"error: {exc}", file=sys.stderr)
        raise SystemExit(1)
