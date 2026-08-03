# Architettura

## Flussi principali

### Note e navigazione

1. I file in `notes/**/*.md` definiscono contenuto e front matter Jekyll.
2. `scripts/create_content_index.py` produce `assets/data/content-index.json` con titoli, sommari, aree, topic, tag, heading, albero e testo di ricerca.
3. `scripts/create_json.sh` produce `assets/data/directories.json` dalla sola struttura del filesystem.
4. Jekyll applica i layout e genera URL senza estensione grazie a `permalink: pretty`.
5. `assets/js/script.js` carica l'indice ricco, costruisce albero, filtri, ricerca e TOC; se il caricamento fallisce, usa l'indice legacy.

### CV

1. `pages/cv.md` è la sorgente Jekyll pubblicata a `/cv/` tramite `_layouts/cv.html`.
2. `scripts/render_cv_pdf.py` rimuove il front matter, converte il Markdown e incorpora `default_style.css` e `cv_style.css` in un HTML autonomo.
3. Chromium headless stampa l'HTML in `dist/cv.pdf`; `dist/cv.html` e il PDF sono collegati dalla UI e versionati.

### Contenuti specializzati

- `notes/etc/anime_list.md` usa `_layouts/anime.html` e carica `assets/data/anime_list.json` per renderizzare e filtrare le card.
- `_layouts/trip.html` e `assets/js/trip_diary.js` caricano il JSON indicato da `data_source`; il diario Osaka usa `assets/data/trip/osaka_2024.json` e immagini in `assets/utils/trip/`.
- `okanecheck/privacy/index.html` è una pagina HTML autonoma in italiano, copiata e servita come asset statico.

### Pubblicazione

1. Un push su `main` attiva `.github/workflows/execute-sh.yml`.
2. GitHub Actions rigenera indici e CV, confronta gli output e committa solo i quattro artefatti previsti quando cambiano.
3. GitHub Pages serve il repository come sito Jekyll; la configurazione Pages effettiva vive fuori dal repository.

## Confini di responsabilità

- `notes/`, `pages/` e le pagine HTML autonome possiedono i contenuti sorgente.
- `_layouts/` possiede la struttura HTML per tipo di pagina; `assets/css/` e `assets/js/` possiedono presentazione e comportamento client.
- `assets/data/` contiene sia dati sorgente specifici sia indici derivati: verificare il produttore prima di modificare un JSON.
- `scripts/` possiede la generazione; `dist/` è la destinazione derivata del CV.
- `.github/workflows/` orchestra la rigenerazione, non implementa un deploy Pages esplicito ne un quality gate Jekyll.

## Pattern da preservare

- Architettura statica e data-driven: il browser legge JSON locali e costruisce la navigazione senza servizi remoti applicativi.
- Fallback progressivo: l'indice ricco è primario, quello filesystem mantiene una navigazione minima in caso di errore.
- Separazione sorgente/derivato: contenuti e stili sono fonti di verità; indici e CV standalone si rigenerano.
- Layout specializzati solo per esperienze che divergono dalla pagina note standard.

## Dettagli importanti

- Precedenza titolo nell'indice: `navTitle`, `nav_title`, `title`, primo H1, nome file umanizzato.
- Il layout `page` evita il doppio titolo per i file sotto `notes/`; `show_title` può forzare il comportamento.
- La home imposta `sidebar: false`; le altre pagine con layout predefinito ricevono sidebar collassabile e TOC da JavaScript.
- I link a CSS, JavaScript, dati e pagine usano prevalentemente percorsi assoluti dalla root.
- Il renderer CV usa il pacchetto Python `markdown` se presente, altrimenti un convertitore minimo incorporato.

## Integrazioni

- GitHub Pages e GitHub Actions per hosting e automazione.
- Jekyll, Minima, Ruby e Kramdown/GFM per il build del sito.
- Python 3 per gli indici e il CV; Chromium/Chrome headless per il PDF.
- CDN cdnjs per Font Awesome; immagini e altri asset esterni possono essere referenziati dai contenuti.
