# Jok98.github.io

Personal knowledge base published at [jok98.github.io](https://jok98.github.io).
It contains technical notes and roadmaps, personal references, travel diaries,
and a generated CV.

The site is static: Jekyll renders the Markdown sources, a compact catalog
drives virtual folders and filters, and Pagefind provides browser-side
full-text search. No runtime database or backend is required.

## Main structure

```text
.
|-- _includes/             # Shared header, footer, note context, and controls
|-- _layouts/              # Jekyll page layouts
|-- assets/
|   |-- css/               # Shared and page-specific styles
|   |-- data/              # Generated catalog v2 and legacy fallback index
|   |-- js/                # Explorer, navigation, TOC, and page behavior
|   `-- pagefind/          # Generated static full-text bundle
|-- explore/               # Virtual file explorer at /explore/
|-- dist/                  # Generated standalone CV HTML and PDF
|-- notes/                 # Published Markdown notes
|-- pages/                 # Main content sources, including the CV
|-- scripts/               # Generators and generated-site checks
|-- tests/                 # Python, JavaScript, browser, and accessibility checks
|-- Gemfile                # Pinned Jekyll toolchain
|-- package.json           # Pinned Pagefind and browser quality tooling
`-- _config.yml            # Jekyll configuration and publication exclusions
```

## Requirements and setup

Use the versions declared by `.ruby-version`, `Gemfile.lock`, and
`package-lock.json`. The supported Node.js baseline is declared in
`package.json`.

Local prerequisites:

- Ruby and Bundler;
- Node.js and npm;
- Python 3;
- Chromium or Chrome for the CV PDF and browser checks.

Install the pinned dependencies:

```shell
bundle install
npm ci
```

If the browser is not auto-detected, set only its executable path:

```shell
export CHROMIUM_BIN=/path/to/chromium
```

## Build and quality gate

Generate every tracked artifact and the complete searchable site:

```shell
npm run build
```

The build performs this ordered pipeline:

1. regenerate `assets/data/directories.json`;
2. regenerate the schema-v2 catalog in `assets/data/content-index.json`;
3. render `dist/cv.html` and the timestamp-normalized `dist/cv.pdf`;
4. build Jekyll into `_site/`;
5. index the built HTML with Pagefind and synchronize `assets/pagefind/`;
6. rebuild Jekyll so the search bundle is present in `_site/`.

Run the complete local gate:

```shell
npm run check
```

It runs the generator/router unit tests, the reproducible build, catalog and
local-link validation, browser navigation checks, the no-JavaScript fallback,
mobile TOC behavior, full-text search, and Axe checks for serious or critical
accessibility violations on representative pages.

Individual commands are also available:

```shell
npm run test:unit
npm run test:site
npm run test:e2e
```

To inspect the already indexed build locally:

```shell
python3 -m http.server 4000 --directory _site
```

Then open `http://127.0.0.1:4000`.

## Catalog and explorer

`assets/data/content-index.json` is a compact schema-v2 catalog. It contains:

- flat virtual `folders` with stable parent relationships and counts;
- one entry per note with `id`, `folderId`, `title`, `summary`, `tags`, `order`,
  `kind`, `status`, `lang`, and the existing public `url`;
- small facet summaries used by the UI.

The folder model is independent from the physical legacy source tree.
`/explore/?path=<folder>&view=list` is shareable, supports list/grid views,
current-folder or global scope, content type filters, a separate Archive, and
full-text search. If Pagefind cannot load, catalog search remains available; if
JavaScript is disabled, Explorer exposes the complete static note list.

`assets/data/directories.json` remains only as a legacy navigation fallback.

## Local preferences and privacy

The header theme control cycles through system, light, and dark modes. Note
pages expose a Save control, while the home page shows favorites and recently
viewed notes. Sidebar and mobile-TOC disclosure choices are also restored.

All of this state is stored under the versioned key
`jok98.preferences.v1` in browser `localStorage`. The value contains only:

- the theme name;
- note URLs selected as favorites;
- recently visited note URLs with local timestamps;
- two UI booleans for sidebar and mobile TOC state.

There is no account, remote synchronization, analytics payload, secret, or
content copy in this state. If storage is unavailable, the same API falls back
to memory for the current page. Clearing site data resets all preferences.

No service worker, IndexedDB store, or offline cache is installed. The current
requirements do not justify cache invalidation complexity beyond normal static
asset delivery.

## Adding or updating notes

Published notes live under `notes/`. Keep exactly one visible H1 and add simple
Jekyll front matter. A typical note is:

```markdown
---
layout: page
title: Kubernetes Roadmap
summary: Roadmap from Kubernetes fundamentals to advanced operations.
area: dev
topic: devops
tags: [kubernetes, devops, roadmap]
kind: roadmap
status: active
lang: en
order: 10
---

# Kubernetes Roadmap
```

Supported catalog metadata:

- `title`, `navTitle`, or `nav_title` for the catalog title;
- `summary`, `tags`, and `order` for presentation and catalog search;
- `area` and `topic` for virtual-folder derivation;
- `kind` for type filtering;
- `status` to override the default `old`-path archive inference;
- `lang` for note language;
- `permalink` only when an established public URL requires it.

Title precedence is `navTitle`, `nav_title`, `title`, first Markdown H1, then
the humanized file name. Keep metadata scalar or list-based: the local parser
does not implement arbitrary nested YAML objects.

After changing notes, run `npm run check` and commit the regenerated catalog,
Pagefind bundle, and CV artifacts when they changed.

## CV

The source of truth is `pages/cv.md`. Generate only the CV artifacts with:

```shell
npm run generate:cv
```

Or provide a browser explicitly:

```shell
python3 scripts/render_cv_pdf.py --chromium /path/to/chromium
```

The outputs are `dist/cv.html` and `dist/cv.pdf`. Chromium's wall-clock PDF
metadata is normalized so repeated builds with the same browser produce the
same bytes.

## Handwritten notes

Handwritten sources are managed separately and selected exports are copied to
`assets/utils/dev/`. A PDF can be converted to 300-DPI PNG files with:

```shell
pdftoppm -png -r 300 input.pdf out
```

## Continuous integration and publication

`.github/workflows/execute-sh.yml` runs the same `npm run check` gate for pull
requests and pushes to `main`.

- Pull requests fail when generated assets are stale or a quality check fails.
- A successful `main` build uploads only verified generated assets to a
  separate write-enabled job.
- That job commits changed generated assets without force-pushing.

The workflow deliberately does not change the repository's GitHub Pages
publishing source. The current branch-based publication behavior is preserved;
switching to a custom Pages deployment requires verifying the repository-level
Pages setting first.

## Known build warnings

Some archived Helm notes contain Go-template expressions such as `{{ ... }}`.
Jekyll reports them as Liquid warnings, but the build succeeds and their URLs
remain valid. Minima 2.5.2 also emits Sass deprecation warnings for upstream
`@import` and color functions. Both warning groups are visible and currently
non-blocking.
