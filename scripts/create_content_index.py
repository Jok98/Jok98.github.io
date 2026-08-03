#!/usr/bin/env python3
"""
Generate the compact, metadata-aware catalog used by the notes explorer.

The public URLs still follow the source files, while navigation folders are
virtual and intentionally decoupled from the physical legacy tree.
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[1]
NOTES_ROOT = REPO_ROOT / "notes"
DEFAULT_OUTPUT = REPO_ROOT / "assets" / "data" / "content-index.json"

SCHEMA_VERSION = 2

AREA_FOLDERS = {
    "dev": ("engineering", "Engineering", 10),
    "etc": ("personal", "Personal", 20),
    "uni": ("university", "University", 30),
}

ROOT_FOLDER_LABELS = {
    "archive": "Archive",
    **{folder_id: label for folder_id, label, _ in AREA_FOLDERS.values()},
}

ROOT_FOLDER_ORDER = {
    "archive": 90,
    **{folder_id: order for folder_id, _, order in AREA_FOLDERS.values()},
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate assets/data/content-index.json from notes/*.md."
    )
    parser.add_argument(
        "--notes-root",
        type=Path,
        default=NOTES_ROOT,
        help="Root folder containing Markdown notes. Defaults to notes/.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help="Output JSON file. Defaults to assets/data/content-index.json.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    notes_root = args.notes_root.resolve()
    output = args.output.resolve()

    index = build_index(notes_root)

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    try:
        output_label = output.relative_to(REPO_ROOT)
    except ValueError:
        output_label = output
    print(
        f"Generated content index: {output_label} "
        f"({len(index['items'])} items, schema v{SCHEMA_VERSION})"
    )
    return 0


def build_index(notes_root: Path) -> dict[str, Any]:
    items = [
        build_item(path, notes_root)
        for path in sorted(notes_root.rglob("*.md"), key=lambda item: item.as_posix().lower())
    ]
    try:
        source_root = notes_root.relative_to(REPO_ROOT).as_posix()
    except ValueError:
        source_root = notes_root.name

    return {
        "schemaVersion": SCHEMA_VERSION,
        "sourceRoot": source_root,
        "folders": build_folders(items),
        "items": items,
        "facets": build_facets(items),
    }


def build_item(path: Path, notes_root: Path) -> dict[str, Any]:
    relative_path = path.relative_to(notes_root)
    raw_text = path.read_text(encoding="utf-8", errors="replace")
    front_matter, body = split_front_matter(raw_text)

    headings = extract_headings(body)
    area_slug = value_or_default(front_matter.get("area"), relative_path.parts[0])
    topic_slug = value_or_default(front_matter.get("topic"), infer_topic(relative_path))
    title = value_or_default(
        front_matter.get("navTitle"),
        front_matter.get("nav_title"),
        front_matter.get("title"),
        first_h1(headings),
        humanize(path.stem),
    )
    summary = value_or_default(front_matter.get("summary"), first_paragraph(body), "")
    tags = normalize_list(front_matter.get("tags"))
    order = normalize_order(front_matter.get("order"))
    status = infer_status(front_matter, relative_path)
    kind = infer_kind(front_matter, relative_path, tags)
    lang = slugify(value_or_default(front_matter.get("lang"), "en")) or "en"

    link_without_extension = relative_path.with_suffix("").as_posix()
    folder_id = virtual_folder_id(area_slug, topic_slug, status)

    return {
        "id": slugify(link_without_extension),
        "folderId": folder_id,
        "title": title,
        "summary": summary,
        "tags": tags,
        "order": order,
        "kind": kind,
        "status": status,
        "lang": lang,
        "url": f"/notes/{link_without_extension}/",
    }


def infer_status(front_matter: dict[str, Any], relative_path: Path) -> str:
    explicit = slugify(value_or_default(front_matter.get("status")))
    if explicit in {"active", "archived"}:
        return explicit
    return "archived" if any(part.lower() == "old" for part in relative_path.parts) else "active"


def infer_kind(front_matter: dict[str, Any], relative_path: Path, tags: list[str]) -> str:
    explicit = slugify(value_or_default(front_matter.get("kind")))
    if explicit:
        return explicit
    if relative_path.stem.lower().startswith("roadmap") or "roadmap" in tags:
        return "roadmap"
    return "note"


def virtual_folder_id(area_slug: str, topic_slug: str, status: str) -> str:
    normalized_area = slugify(area_slug) or "uncategorized"
    area_folder = AREA_FOLDERS.get(normalized_area, (normalized_area, humanize(normalized_area), 50))[0]
    topic_folder = slugify(topic_slug) or "uncategorized"
    prefix = f"archive/{area_folder}" if status == "archived" else area_folder
    return f"{prefix}/{topic_folder}"


def split_front_matter(raw_text: str) -> tuple[dict[str, Any], str]:
    if not raw_text.startswith("---\n"):
        return {}, raw_text

    end = raw_text.find("\n---\n", 4)
    if end == -1:
        return {}, raw_text

    front_matter = parse_front_matter(raw_text[4:end])
    body = raw_text[end + len("\n---\n") :]
    return front_matter, body


def parse_front_matter(text: str) -> dict[str, Any]:
    result: dict[str, Any] = {}
    current_key: str | None = None

    for raw_line in text.splitlines():
        line = raw_line.rstrip()
        if not line.strip() or line.lstrip().startswith("#"):
            continue

        list_item = re.match(r"^\s*-\s+(.+)$", line)
        if list_item and current_key:
            result.setdefault(current_key, []).append(clean_scalar(list_item.group(1)))
            continue

        if ":" not in line:
            continue

        key, value = line.split(":", 1)
        current_key = key.strip()
        stripped_value = value.strip()
        if stripped_value == "":
            result[current_key] = []
        else:
            result[current_key] = parse_scalar_or_list(stripped_value)

    return result


def parse_scalar_or_list(value: str) -> Any:
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [clean_scalar(part) for part in inner.split(",")]
    return clean_scalar(value)


def clean_scalar(value: str) -> str:
    return value.strip().strip("\"'")


def extract_headings(body: str) -> list[dict[str, Any]]:
    headings = []
    seen: Counter[str] = Counter()
    in_code_block = False

    for line in body.splitlines():
        if line.lstrip().startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue

        match = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if not match:
            continue

        level = len(match.group(1))
        text = strip_inline_markdown(match.group(2))
        base_slug = slugify(text)
        seen[base_slug] += 1
        anchor = base_slug if seen[base_slug] == 1 else f"{base_slug}-{seen[base_slug]}"
        headings.append({"level": level, "text": text, "anchor": anchor})

    return headings


def first_h1(headings: list[dict[str, Any]]) -> str:
    for heading in headings:
        if heading["level"] == 1:
            return heading["text"]
    return ""


def first_paragraph(body: str) -> str:
    in_code_block = False
    paragraph_lines: list[str] = []

    for line in body.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if not stripped:
            if paragraph_lines:
                break
            continue
        if stripped.startswith("#") or stripped.startswith("<") or stripped.startswith("|"):
            continue
        if stripped.startswith(("-", "*", ">", "```")):
            continue
        paragraph_lines.append(strip_inline_markdown(stripped))

    return " ".join(paragraph_lines)


def infer_topic(relative_path: Path) -> str:
    parts = relative_path.parts
    if len(parts) >= 3:
        return parts[1]
    return relative_path.stem


def build_folders(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    counts: Counter[str] = Counter()

    for item in items:
        parts = item["folderId"].split("/")
        for index in range(1, len(parts) + 1):
            counts["/".join(parts[:index])] += 1

    folders = []
    for path, count in counts.items():
        parts = path.split("/")
        parent_id = "/".join(parts[:-1]) or None
        folders.append(
            {
                "id": path,
                "parentId": parent_id,
                "path": path,
                "label": folder_label(parts[-1]),
                "order": folder_order(parts),
                "count": count,
            }
        )

    return sorted(
        folders,
        key=lambda folder: (
            folder["path"].count("/"),
            root_sort_order(folder["path"]),
            folder["order"],
            folder["label"].lower(),
        ),
    )


def folder_label(segment: str) -> str:
    return ROOT_FOLDER_LABELS.get(segment, humanize(segment))


def folder_order(parts: list[str]) -> int:
    if len(parts) == 1:
        return ROOT_FOLDER_ORDER.get(parts[0], 50)
    if parts[0] == "archive" and len(parts) == 2:
        return ROOT_FOLDER_ORDER.get(parts[1], 50)
    return 100


def root_sort_order(path: str) -> int:
    return ROOT_FOLDER_ORDER.get(path.split("/", 1)[0], 50)


def build_facets(items: list[dict[str, Any]]) -> dict[str, list[dict[str, Any]]]:
    statuses = Counter(item["status"] for item in items)
    kinds = Counter(item["kind"] for item in items)
    tags = Counter(tag for item in items for tag in item["tags"])

    return {
        "statuses": counter_to_facets(statuses, {status: humanize(status) for status in statuses}),
        "kinds": counter_to_facets(kinds, {kind: humanize(kind) for kind in kinds}),
        "tags": counter_to_facets(tags, {tag: humanize(tag) for tag in tags}),
    }


def counter_to_facets(counter: Counter[str], labels: dict[str, str]) -> list[dict[str, Any]]:
    return [
        {"slug": slug, "label": labels.get(slug, humanize(slug)), "count": count}
        for slug, count in sorted(counter.items())
    ]


def normalize_list(value: Any) -> list[str]:
    if not value:
        return []
    if isinstance(value, list):
        return [slugify(str(item)) for item in value if str(item).strip()]
    return [slugify(part) for part in str(value).split(",") if part.strip()]


def normalize_order(value: Any) -> int | None:
    if value in (None, ""):
        return None
    try:
        return int(str(value))
    except ValueError:
        return None


def value_or_default(*values: Any) -> str:
    for value in values:
        if isinstance(value, str) and value.strip():
            return value.strip()
    return ""


def strip_inline_markdown(text: str) -> str:
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    text = re.sub(r"<[^>]+>", "", text)
    return text.strip()


def humanize(value: str) -> str:
    value = str(value).split("/")[-1]
    if value.endswith(".md"):
        value = value[:-3]
    value = re.sub(r"^\d+(?:[._-]\d+)*[._-]?", "", value)
    value = value.replace("_", " ").replace("-", " ")
    value = re.sub(r"\s+", " ", value).strip()
    if not value:
        return ""
    full_replacements = {
        "devops": "DevOps",
        "springboot": "Spring Boot",
        "rabbitmq": "RabbitMQ",
        "kubernetes services": "Kubernetes Services",
    }
    if value.lower() in full_replacements:
        return full_replacements[value.lower()]
    replacements = {
        "api": "API",
        "dsa": "DSA",
        "jwt": "JWT",
        "ssh": "SSH",
        "ci": "CI",
        "cd": "CD",
        "rest": "REST",
        "yaml": "YAML",
        "json": "JSON",
    }
    words = [replacements.get(word.lower(), word.capitalize()) for word in value.split()]
    return " ".join(words)


def slugify(value: str) -> str:
    value = strip_inline_markdown(str(value)).lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


if __name__ == "__main__":
    raise SystemExit(main())
