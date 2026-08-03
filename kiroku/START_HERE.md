# Inizia qui

## Missione

- Mantenere `Jok98.github.io` come knowledge base personale e sito pubblico di Matteo Moi.
- Pubblicare note tecniche, roadmap, riferimenti, diario di viaggio, CV e pagine informative tramite Jekyll e GitHub Pages.

## Stato attuale

- Il repository è un sito statico Jekyll senza backend, database o autenticazione.
- Le note Markdown in `notes/` alimentano pagine con permalink leggibili e la navigazione client-side.
- `assets/data/content-index.json` è l'indice principale; `directories.json` resta il fallback legacy.
- `pages/cv.md` è la sorgente del CV; `dist/cv.html` e `dist/cv.pdf` sono artefatti generati e tracciati.
- Il push su `main` attiva la rigenerazione degli indici e del CV tramite GitHub Actions.
- Non è documentato alcun lavoro di prodotto attivo; le checklist nelle roadmap sono contenuto didattico.

## Prossima azione

- Per ogni nuova richiesta, identificare prima se coinvolge contenuti, UI/layout, generatori, CV o pubblicazione.
- Aprire il file di dettaglio pertinente e validare anche gli artefatti derivati interessati dalla modifica.

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
