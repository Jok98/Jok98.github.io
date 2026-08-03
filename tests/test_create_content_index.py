import json
import sys
import tempfile
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(REPO_ROOT / "scripts"))

import create_content_index as catalog  # noqa: E402


class ContentIndexTest(unittest.TestCase):
    def test_extract_headings_ignores_fenced_code(self) -> None:
        body = """# Visible title

```yaml
# This is a code comment
```

## Visible section
"""

        headings = catalog.extract_headings(body)

        self.assertEqual(
            [(heading["level"], heading["text"]) for heading in headings],
            [(1, "Visible title"), (2, "Visible section")],
        )

    def test_build_index_creates_virtual_archive_and_allows_status_override(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            notes_root = Path(temporary_directory) / "notes"
            self.write_note(
                notes_root / "dev" / "java" / "roadmap_java.md",
                title="Java Roadmap",
                topic="java",
                tags="[java, roadmap]",
            )
            self.write_note(
                notes_root / "dev" / "java" / "old" / "legacy.md",
                title="Legacy Java",
                topic="java",
            )
            self.write_note(
                notes_root / "dev" / "java" / "old" / "current.md",
                title="Current Java",
                topic="java",
                status="active",
            )

            index = catalog.build_index(notes_root)
            items = {item["title"]: item for item in index["items"]}

            self.assertEqual(index["schemaVersion"], 2)
            self.assertEqual(items["Java Roadmap"]["folderId"], "engineering/java")
            self.assertEqual(items["Java Roadmap"]["kind"], "roadmap")
            self.assertEqual(items["Legacy Java"]["folderId"], "archive/engineering/java")
            self.assertEqual(items["Legacy Java"]["status"], "archived")
            self.assertEqual(items["Current Java"]["folderId"], "engineering/java")
            self.assertEqual(items["Current Java"]["status"], "active")
            self.assertIn("archive", {folder["id"] for folder in index["folders"]})

    def test_repository_catalog_is_compact_complete_and_referentially_valid(self) -> None:
        notes_root = REPO_ROOT / "notes"
        index = catalog.build_index(notes_root)
        source_files = list(notes_root.rglob("*.md"))
        item_fields = {
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

        self.assertEqual(len(index["items"]), len(source_files))
        self.assertEqual(len({item["id"] for item in index["items"]}), len(source_files))
        self.assertEqual(len({item["url"] for item in index["items"]}), len(source_files))
        self.assertTrue(all(set(item) == item_fields for item in index["items"]))

        folder_ids = {folder["id"] for folder in index["folders"]}
        self.assertTrue(all(item["folderId"] in folder_ids for item in index["items"]))
        self.assertTrue(
            all(folder["parentId"] is None or folder["parentId"] in folder_ids for folder in index["folders"])
        )
        self.assertLess(len(json.dumps(index, ensure_ascii=False).encode("utf-8")), 150_000)

    @staticmethod
    def write_note(path: Path, **metadata: str) -> None:
        path.parent.mkdir(parents=True, exist_ok=True)
        fields = ["---", "layout: page", "area: dev"]
        fields.extend(f"{key}: {value}" for key, value in metadata.items())
        fields.extend(["---", "", f"# {metadata['title']}", ""])
        path.write_text("\n".join(fields), encoding="utf-8")


if __name__ == "__main__":
    unittest.main()
