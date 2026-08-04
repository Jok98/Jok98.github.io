# Architettura

## Flussi principali

### Note e navigazione

1. I file in `notes/**/*.md` definiscono contenuto e front matter Jekyll.
2. `scripts/create_content_index.py` produce `assets/data/content-index.json` schema v2 con cartelle virtuali piatte, item compatti e faccette; gli URL restano derivati dai percorsi sorgente.
3. `scripts/create_json.sh` produce `assets/data/directories.json` dalla sola struttura del filesystem.
4. Jekyll applica i layout e genera URL senza estensione grazie a `permalink: pretty`.
5. `assets/js/script.js` accetta schema v2 e v1, costruisce la sidebar contestuale e genera il TOC dal DOM; se il caricamento fallisce, usa l'indice legacy.
6. `/explore/`, `assets/js/catalog.js` e `assets/js/explorer.js` rendono cartelle, breadcrumb, route e ricerca catalogo senza routing SPA.
7. La home usa lo stesso catalogo per cartelle attive e roadmap in evidenza; `note-context.js` aggiunge breadcrumb e navigazione precedente/successiva alle note.
8. `scripts/build_site.py` costruisce Jekyll, genera Pagefind sotto `assets/pagefind/` e ricostruisce il sito; Explorer configura esplicitamente bundle e base URL, conservando la ricerca catalogo se il full-text fallisce.
9. `assets/js/preferences.js` applica il tema prima dei CSS e gestisce `jok98.preferences.v1`; home, note e shell consumano lo stesso stato per preferiti, recenti e disclosure, con fallback in memoria.

### CV

1. `pages/cv.md` è la sorgente Jekyll pubblicata a `/cv/` tramite `_layouts/cv.html`.
2. `scripts/render_cv_pdf.py` rimuove il front matter, converte il Markdown e incorpora `default_style.css` e `cv_style.css` in un HTML autonomo.
3. Chromium headless stampa l'HTML in `dist/cv.pdf`; il renderer normalizza i due timestamp PDF per build ripetibili. `dist/cv.html` e il PDF sono collegati dalla UI e versionati.

### Contenuti specializzati

- `notes/etc/anime_list.md` usa `_layouts/anime.html` e carica `assets/data/anime_list.json` per renderizzare e filtrare le card.
- `_layouts/trip.html` e `assets/js/trip_diary.js` caricano il JSON indicato da `data_source`; il diario Osaka usa `assets/data/trip/osaka_2024.json` e immagini in `assets/utils/trip/`.
- `okanecheck/privacy/index.html` è una pagina HTML autonoma in italiano, copiata e servita come asset statico.

### Pubblicazione

1. Pull request e push su `main` attivano `.github/workflows/execute-sh.yml`.
2. Il job read-only installa le versioni bloccate, esegue `npm run check` e impedisce alle pull request di usare artefatti obsoleti.
3. Solo su `main`, un job separato con permesso di scrittura scarica JSON, Pagefind e output CV già verificati e li committa quando cambiano.
4. GitHub Pages continua a usare la sorgente configurata fuori dal repository; il workflow non la modifica.

## Confini di responsabilità

- `notes/`, `pages/` e le pagine HTML autonome possiedono i contenuti sorgente.
- `_includes/` possiede head, header, footer e controllo back-to-top condivisi; `_layouts/` compone la struttura specifica per tipo di pagina.
- `assets/css/` e `assets/js/` possiedono presentazione e comportamento client.
- `preferences.js` possiede il solo stato personale locale; non esistono cache offline, database browser o sincronizzazione remota.
- `assets/data/` contiene sia dati sorgente specifici sia indici derivati: verificare il produttore prima di modificare un JSON.
- `scripts/` possiede la generazione; `dist/` è la destinazione derivata del CV.
- `.github/workflows/` orchestra quality gate e aggiornamento degli artefatti, ma non implementa un deploy Pages esplicito.

## Pattern da preservare

- Architettura statica e data-driven: il browser legge JSON locali e costruisce la navigazione senza servizi remoti applicativi.
- Fallback progressivo: il catalogo v2 è primario, l'adapter v1 copre la migrazione e l'indice filesystem mantiene una navigazione minima in caso di errore.
- Responsabilità UX separate: la sidebar apre solo il ramo corrente e offre quick find; Explorer possiede cartelle globali, filtri e ricerca full-text.
- Personalizzazione locale minima: lo storage contiene solo preferenze validate e la UI resta utilizzabile quando `localStorage` è bloccato.
- Separazione sorgente/derivato: contenuti e stili sono fonti di verità; indici e CV standalone si rigenerano.
- Layout specializzati solo per esperienze che divergono dalla pagina note standard.

## Dettagli importanti

- Precedenza titolo nell'indice: `navTitle`, `nav_title`, `title`, primo H1, nome file umanizzato.
- Il layout `page` evita il doppio titolo per i file sotto `notes/`; `show_title` forza un H1 dal front matter quando il Markdown non ne possiede uno.
- I layout impostano lingua, description, canonical, skip link e landmark principale tramite la shell condivisa.
- La home imposta `sidebar: false`; le altre pagine con layout predefinito ricevono sidebar contestuale e TOC da JavaScript.
- Su desktop la sidebar è sticky e persiste l'espansione; sotto 1100 px è un drawer che parte chiuso e gestisce backdrop, focus, `inert` ed `Esc`.
- La home e l'header promuovono `/explore/`; la lista statica generata nella pagina Explorer conserva accesso a tutti i 73 URL senza JavaScript o se il catalogo fallisce.
- Su viewport stretti il TOC generato viene spostato subito dopo l'H1 e resta chiuso finché l'utente non lo espande.
- I link a CSS, JavaScript, dati e pagine usano prevalentemente percorsi assoluti dalla root.
- Il renderer CV usa il pacchetto Python `markdown` se presente, altrimenti un convertitore minimo incorporato.

## Integrazioni

- GitHub Pages e GitHub Actions per hosting e automazione.
- Jekyll, Minima, Ruby e Kramdown/GFM per il build del sito.
- Python 3 per gli indici e il CV; Chromium/Chrome headless per il PDF.
- Pagefind per l'indice full-text; Puppeteer Core e Axe per i gate browser/accessibilità.
- CDN cdnjs per Font Awesome; immagini e altri asset esterni possono essere referenziati dai contenuti.
