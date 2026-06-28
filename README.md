# Jok98.github.io

Personal website published with GitHub Pages:
[https://jok98.github.io](https://jok98.github.io)

This project contains study notes, technical roadmaps, personal references,
travel diaries, and my CV. Pages are generated with Jekyll from Markdown files
and JSON indexes used by the site's navigation.

## Structure

```text
.
|-- _layouts/              # Shared Jekyll layouts
|-- assets/
|   |-- css/               # Site styles and page-specific styles
|   |-- data/              # Generated JSON indexes for navigation and search
|   |-- js/                # Navigation, search, filters, and TOC behavior
|   `-- utils/             # Images, PDFs, and supporting assets
|-- dist/                  # Generated CV HTML/PDF output
|-- notes/                 # Markdown notes published on the site
|-- pages/                 # Main pages, including the CV source
|-- scripts/               # Asset generation scripts
|-- index.html             # Home page
`-- _config.yml            # Jekyll configuration
```

The main generated indexes are:

- `assets/data/content-index.json`: metadata-rich index used by search,
  filters, the directory tree, and page TOCs.
- `assets/data/directories.json`: legacy/fallback index based on the filesystem
  structure.

## Local Requirements

You need:

- Ruby
- Python 3
- Jekyll and the Minima theme
- Chromium or Chrome, only when regenerating the CV PDF

This repository does not use a `Gemfile`, so the Ruby gems can be installed
directly in the user environment:

```shell
gem install --user-install jekyll minima erb
```

If `jekyll` is not found after installation, add the user gem binary directory
to the current shell `PATH`:

```shell
export PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"
```

Verify the setup:

```shell
jekyll --version
python3 --version
```

## Run Locally

First regenerate the navigation indexes:

```shell
./scripts/create_json.sh
python3 scripts/create_content_index.py
```

Then start Jekyll:

```shell
jekyll serve --host 127.0.0.1 --port 4000
```

Open:

```text
http://127.0.0.1:4000
```

If `jekyll` is not available in `PATH`, run it through the user gem directory:

```shell
"$(ruby -e 'print Gem.user_dir')/bin/jekyll" serve --host 127.0.0.1 --port 4000
```

Static build without the local server:

```shell
jekyll build
```

The generated site is written to `_site/`.

## Notes Workflow

Published notes live in `notes/`.

Every Markdown note should include Jekyll front matter, at minimum:

```markdown
---
layout: page
---
# Note Title
```

After adding, moving, or renaming notes:

```shell
./scripts/create_json.sh
python3 scripts/create_content_index.py
jekyll build
```

Quick check that all indexed URLs were generated:

```shell
python3 - <<'PY'
import json
from pathlib import Path

index = json.loads(Path("assets/data/content-index.json").read_text())
missing = [
    item["url"]
    for item in index["items"]
    if not (Path("_site") / item["url"].strip("/") / "index.html").exists()
]

if missing:
    print("Missing generated pages:")
    print("\n".join(missing))
    raise SystemExit(1)

print(f"All indexed URLs generated: {len(index['items'])}")
PY
```

## CV

The CV source is:

```text
pages/cv.md
```

Generate the standalone HTML and PDF outputs:

```shell
python3 scripts/render_cv_pdf.py
```

Outputs:

- `dist/cv.html`
- `dist/cv.pdf`

If Chromium/Chrome is not detected automatically:

```shell
python3 scripts/render_cv_pdf.py --chromium /path/to/chromium
```

Generate only the standalone HTML:

```shell
python3 scripts/render_cv_pdf.py --html-only
```

## Handwritten Notes

Handwritten notes are handled separately:

1. Source PDFs are stored on Google Drive and synced with an e-ink device.
2. Files to publish are copied manually into `assets/utils/dev/`.
3. PDFs can be converted to PNG with:

```shell
pdftoppm -png -r 300 input.pdf out
```

Parameters:

- `-png`: PNG output format.
- `-r 300`: 300 DPI resolution.
- `input.pdf`: source PDF.
- `out`: generated file prefix, for example `out-1.png`.

## Deploy

Deployment is handled by GitHub Pages.

The workflow is:

```text
.github/workflows/execute-sh.yml
```

It runs on pushes to `main` and:

1. regenerates `assets/data/directories.json`;
2. regenerates `assets/data/content-index.json`;
3. regenerates `dist/cv.html` and `dist/cv.pdf`;
4. commits generated assets when they changed.

## Build Notes

Jekyll builds may show Liquid warnings for some Helm notes containing Go/Helm
templates with `{{ ... }}`. These warnings are known and do not currently block
the build.

Sass warnings from the Minima theme may also appear for deprecated `@import`
rules and color functions. These warnings do not block site generation either.
