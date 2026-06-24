# Jok98.github.io

The site is reachable at: [https://jok98.github.io](https://jok98.github.io)

It contains my notes about my studies.


---

The deployment is managed through github actions [execute-sh.yml](.github/workflows/execute-sh.yml)

The notes are written in markdown and stored in the `notes` directory that will be converted to html by Jekyll and deployed to github pages.

The structure of the site is based on a json that represents the structure/hierarchy of the `notes` dir that is updated automatically by a script [create_json.sh](scripts/create_json.sh) that is executed by the github action and stored in `assets/data/directories.json`.

---

## CV PDF export

The CV source is [`pages/cv.md`](pages/cv.md).

To generate an application-ready PDF from the Markdown source, run:

```shell
python3 scripts/render_cv_pdf.py
```

The script generates:

- `dist/cv.html`: standalone HTML with the local CSS inlined.
- `dist/cv.pdf`: PDF rendered from that HTML through headless Chromium.

If Chromium is installed under a custom path:

```shell
python3 scripts/render_cv_pdf.py --chromium /path/to/chromium
```

---

For handwritten notes :
- are stored as pdf on my google drive that is synced with my e-ink 
- manually (I'll automate that later) have to copy on this repo into `assets/utils/dev` dir
- then have to convert the pdf to png with the command 
```shell
pdftoppm -png -r 300 input.pdf out
```
where :
- `-png` specifies the output format as PNG
- `-r 300` sets the resolution to 300 DPI (dots per inch)
- `input.pdf` is the name of the input PDF file
- `out` is the prefix for the output files. Each page of the PDF will be saved as a separate PNG file with names like `out-1.png`, `out-2.png
