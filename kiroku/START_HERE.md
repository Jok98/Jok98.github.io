# Inizia qui

## Missione

- Mantenere `Jok98.github.io` come knowledge base personale e sito pubblico di Matteo Moi.
- Pubblicare note tecniche, roadmap, riferimenti, diario di viaggio, CV e pagine informative tramite Jekyll e GitHub Pages.

## Stato attuale

- Il repository è un sito statico Jekyll senza backend, database o autenticazione.
- Le note Markdown in `notes/` alimentano pagine con permalink leggibili e la navigazione client-side.
- `assets/data/content-index.json` è l'indice principale; `directories.json` resta il fallback legacy.
- `/explore/` usa il catalogo v2 e Pagefind; la lista statica conserva l'accesso alle note senza JavaScript.
- `pages/cv.md` è la sorgente del CV; `dist/cv.html` e `dist/cv.pdf` sono artefatti generati e tracciati.
- `npm run check` è il gate locale e CI per indici, CV, Jekyll, Pagefind, link, E2E e accessibilità.
- Il push su `main` può aggiornare gli artefatti verificati tramite un job GitHub Actions separato; la sorgente Pages resta esterna al repository.
- La track chiusa `site-ux-file-explorer` documenta la revisione UX, il catalogo, la ricerca, le preferenze locali e il quality gate del sito.
- La track chiusa `sidebar-navigation-refinement` documenta sidebar contestuale, quick find e drawer responsive.

## Prossima azione

- Per comprendere la UX completata aprire `tracks/site-ux-file-explorer/START_HERE.md` e, per la sidebar, `tracks/sidebar-navigation-refinement/START_HERE.md`.
- Per altre richieste identificare prima se coinvolgono contenuti, UI/layout, generatori, CV o pubblicazione.

## Vincoli inderogabili

- Non modificare manualmente indici o file in `dist/` senza aggiornare la rispettiva sorgente e rigenerarli.
- Il parser locale del front matter supporta solo scalari e liste semplici, non YAML annidato.
- I percorsi pubblici sono assoluti dalla root e presuppongono la pubblicazione su `jok98.github.io`.
- Ogni contenuto committato è pubblico: non inserire segreti o materiale privato.
- Dopo modifiche a note o CV eseguire il flusso di rigenerazione descritto in `README.md`.

## Leggi solo se necessario

- `STATE.md` per stato verificato, copertura dei contenuti e questioni aperte.
- `ARCHITECTURE.md` prima di modificare layout, JavaScript, generatori o flussi di pubblicazione.
- `DECISIONS.md` e `CONSTRAINTS.md` prima di cambiare fonti di verità o formati.
- `WORK.md` per distinguere backlog del repository da checklist didattiche.
- `RISKS.md` per riproducibilità, validazione, dipendenze esterne e contenuti sensibili al contesto.
- `IDEAS.md` solo per proposte non ancora adottate; `LOG.md` solo per la storia della memoria.
