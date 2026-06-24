#!/usr/bin/env python3
"""
Generate a metadata-aware content index for the notes section.

This index is intentionally richer than assets/data/directories.json: it keeps
filesystem compatibility while exposing titles, inferred topics, headings, tags,
and search text for future topic navigation and page TOCs.
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

AREA_LABELS = {
    "dev": "Engineering",
    "etc": "Personal",
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

    items = [
        build_item(path, notes_root)
        for path in sorted(notes_root.rglob("*.md"), key=lambda item: item.as_posix().lower())
    ]

    index = {
        "schemaVersion": 1,
        "sourceRoot": notes_root.relative_to(REPO_ROOT).as_posix(),
        "items": items,
        "tree": build_tree(items),
        "facets": build_facets(items),
    }

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Generated content index: {output.relative_to(REPO_ROOT)} ({len(items)} items)")
    return 0


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
        first_h1(headings),
        front_matter.get("title"),
        humanize(path.stem),
    )
    summary = value_or_default(front_matter.get("summary"), first_paragraph(body), "")
    tags = normalize_list(front_matter.get("tags"))
    order = normalize_order(front_matter.get("order"))

    link_without_extension = relative_path.with_suffix("").as_posix()
    breadcrumbs = [humanize(part) for part in relative_path.with_suffix("").parts[:-1]]

    return {
        "id": slugify(link_without_extension),
        "title": title,
        "summary": summary,
        "area": {
            "slug": slugify(area_slug),
            "label": AREA_LABELS.get(area_slug, humanize(area_slug)),
        },
        "topic": {
            "slug": slugify(topic_slug),
            "label": humanize(topic_slug),
        },
        "tags": tags,
        "order": order,
        "layout": front_matter.get("layout", ""),
        "sourcePath": f"{notes_root.name}/{relative_path.as_posix()}",
        "url": f"/notes/{link_without_extension}/",
        "breadcrumbs": breadcrumbs,
        "headings": headings,
        "searchText": build_search_text(title, summary, tags, breadcrumbs, headings),
    }


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

    for line in body.splitlines():
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


def build_tree(items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    root: dict[str, Any] = {"children": {}, "items": []}

    for item in items:
        parts = Path(item["sourcePath"]).parts[1:-1]
        node = root
        for part in parts:
            children = node.setdefault("children", {})
            node = children.setdefault(part, {"name": part, "children": {}, "items": []})
        node.setdefault("items", []).append(item["id"])

    return [tree_node_to_json(slug, node) for slug, node in sorted(root["children"].items())]


def tree_node_to_json(slug: str, node: dict[str, Any]) -> dict[str, Any]:
    children = [
        tree_node_to_json(child_slug, child_node)
        for child_slug, child_node in sorted(node.get("children", {}).items())
    ]
    return {
        "slug": slugify(slug),
        "label": humanize(slug),
        "items": sorted(node.get("items", [])),
        "children": children,
    }


def build_facets(items: list[dict[str, Any]]) -> dict[str, list[dict[str, Any]]]:
    areas = Counter(item["area"]["slug"] for item in items)
    topics = Counter(item["topic"]["slug"] for item in items)
    tags = Counter(tag for item in items for tag in item["tags"])

    return {
        "areas": counter_to_facets(areas, {item["area"]["slug"]: item["area"]["label"] for item in items}),
        "topics": counter_to_facets(topics, {item["topic"]["slug"]: item["topic"]["label"] for item in items}),
        "tags": counter_to_facets(tags, {tag: humanize(tag) for tag in tags}),
    }


def counter_to_facets(counter: Counter[str], labels: dict[str, str]) -> list[dict[str, Any]]:
    return [
        {"slug": slug, "label": labels.get(slug, humanize(slug)), "count": count}
        for slug, count in sorted(counter.items())
    ]


def build_search_text(
    title: str,
    summary: str,
    tags: list[str],
    breadcrumbs: list[str],
    headings: list[dict[str, Any]],
) -> str:
    parts = [title, summary, *tags, *breadcrumbs, *(heading["text"] for heading in headings)]
    return " ".join(part for part in parts if part).lower()


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
