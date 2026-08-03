#!/usr/bin/env python3
"""Validate the generated catalog, HTML structure, and local asset links."""

from __future__ import annotations

import argparse
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


REPO_ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = REPO_ROOT / "assets" / "data" / "content-index.json"
ITEM_FIELDS = {
    "id",
    "folderId",
    "title",
    "summary",
    "tags",
    "order",
    "kind",
    "status",
    "lang",
    "url",
}
SKIPPED_SCHEMES = {"data", "http", "https", "javascript", "mailto", "tel"}


class DocumentParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.h1_count = 0
        self.main_count = 0
        self.pagefind_main_count = 0
        self.canonical_count = 0
        self.html_lang = ""
        self.has_note_context = False
        self.links: list[str] = []
        self.missing_image_alt = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        classes = set((attributes.get("class") or "").split())
        if tag == "html":
            self.html_lang = (attributes.get("lang") or "").strip()
        elif tag == "h1":
            self.h1_count += 1
        elif tag == "main":
            self.main_count += 1
            if "data-pagefind-body" in attributes:
                self.pagefind_main_count += 1
        elif tag == "nav" and "note-context" in classes:
            self.has_note_context = True
        elif tag == "link" and (attributes.get("rel") or "").lower() == "canonical":
            self.canonical_count += 1
        elif tag == "img" and "alt" not in attributes:
            self.missing_image_alt += 1

        if tag in {"a", "link"} and attributes.get("href"):
            self.links.append(attributes["href"] or "")
        if tag in {"img", "script", "source"} and attributes.get("src"):
            self.links.append(attributes["src"] or "")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", type=Path, help="Generated Jekyll site directory.")
    return parser.parse_args()


def load_catalog(errors: list[str]) -> dict:
    try:
        catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        errors.append(f"catalog cannot be read: {error}")
        return {"folders": [], "items": []}

    if catalog.get("schemaVersion") != 2:
        errors.append("catalog schemaVersion must be 2")
    folders = catalog.get("folders")
    items = catalog.get("items")
    if not isinstance(folders, list) or not isinstance(items, list):
        errors.append("catalog folders and items must be arrays")
        return {"folders": [], "items": []}

    folder_ids = [str(folder.get("id", "")) for folder in folders]
    item_ids = [str(item.get("id", "")) for item in items]
    item_urls = [str(item.get("url", "")) for item in items]
    if len(folder_ids) != len(set(folder_ids)) or "" in folder_ids:
        errors.append("catalog folder ids must be non-empty and unique")
    if len(item_ids) != len(set(item_ids)) or "" in item_ids:
        errors.append("catalog item ids must be non-empty and unique")
    if len(item_urls) != len(set(item_urls)) or "" in item_urls:
        errors.append("catalog item URLs must be non-empty and unique")

    known_folders = set(folder_ids)
    for folder in folders:
        parent_id = folder.get("parentId")
        if parent_id is not None and parent_id not in known_folders:
            errors.append(f"folder {folder.get('id')} references unknown parent {parent_id}")
    for item in items:
        if set(item) != ITEM_FIELDS:
            errors.append(f"catalog item {item.get('id')} has an invalid field contract")
        if item.get("folderId") not in known_folders:
            errors.append(f"catalog item {item.get('id')} references an unknown folder")
    return catalog


def html_url(html_file: Path, site: Path) -> str:
    relative = html_file.relative_to(site).as_posix()
    if relative == "index.html":
        return "/"
    if relative.endswith("/index.html"):
        return f"/{relative[:-len('index.html')]}"
    return f"/{relative}"


def path_candidates(site: Path, url_path: str) -> list[Path]:
    clean_path = unquote(url_path).lstrip("/")
    target = site / clean_path
    if not clean_path or url_path.endswith("/"):
        return [target / "index.html"]
    candidates = [target]
    if not target.suffix:
        candidates.extend([target.with_suffix(".html"), target / "index.html"])
    return candidates


def local_target_exists(site: Path, page_url: str, target: str) -> bool:
    parsed = urlsplit(target)
    if parsed.scheme.lower() in SKIPPED_SCHEMES or parsed.netloc:
        return True
    if not parsed.path:
        return True
    resolved_path = urlsplit(urljoin(page_url, parsed.path)).path
    return any(candidate.is_file() for candidate in path_candidates(site, resolved_path))


def parse_document(html_file: Path, errors: list[str]) -> DocumentParser | None:
    parser = DocumentParser()
    try:
        parser.feed(html_file.read_text(encoding="utf-8"))
    except (OSError, UnicodeDecodeError) as error:
        errors.append(f"{html_file}: cannot parse HTML: {error}")
        return None
    return parser


def main() -> int:
    args = parse_args()
    site = args.site.resolve()
    errors: list[str] = []
    if not site.is_dir():
        print(f"error: generated site does not exist: {site}", file=sys.stderr)
        return 1

    catalog = load_catalog(errors)
    parsed_documents: dict[Path, DocumentParser] = {}
    html_files = sorted(site.rglob("*.html"))
    for html_file in html_files:
        document = parse_document(html_file, errors)
        if not document:
            continue
        parsed_documents[html_file] = document
        page_url = html_url(html_file, site)
        if document.missing_image_alt:
            errors.append(
                f"{page_url}: {document.missing_image_alt} image(s) do not provide alt text"
            )
        for target in document.links:
            if not local_target_exists(site, page_url, target):
                errors.append(f"{page_url}: missing local target {target}")

    for item in catalog.get("items", []):
        candidates = path_candidates(site, str(item.get("url", "")))
        note_file = next((candidate for candidate in candidates if candidate.is_file()), None)
        if not note_file:
            errors.append(f"catalog note was not built: {item.get('url')}")
            continue
        document = parsed_documents.get(note_file)
        if not document:
            errors.append(f"catalog note could not be inspected: {item.get('url')}")
            continue
        note_url = item.get("url")
        if document.h1_count != 1:
            errors.append(f"{note_url}: expected one h1, found {document.h1_count}")
        if document.main_count != 1:
            errors.append(f"{note_url}: expected one main landmark, found {document.main_count}")
        if document.pagefind_main_count != 1:
            errors.append(f"{note_url}: main landmark is not marked for Pagefind")
        if document.canonical_count != 1:
            errors.append(f"{note_url}: expected one canonical link, found {document.canonical_count}")
        if not document.html_lang:
            errors.append(f"{note_url}: html lang is missing")
        if not document.has_note_context:
            errors.append(f"{note_url}: contextual note navigation is missing")

    pagefind_entry = site / "assets" / "pagefind" / "pagefind.js"
    if not pagefind_entry.is_file():
        errors.append("Pagefind browser bundle is missing from the generated site")

    if errors:
        print("Site quality check failed:", file=sys.stderr)
        for error in sorted(set(errors)):
            print(f"- {error}", file=sys.stderr)
        return 1

    print(
        f"Site quality check passed: {len(catalog.get('items', []))} catalog notes, "
        f"{len(html_files)} HTML documents, local links and Pagefind bundle verified."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
