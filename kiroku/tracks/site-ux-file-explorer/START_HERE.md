# Inizia qui

## Missione

- Trasformare la navigazione della knowledge base in un file explorer virtuale basato sui metadati.
- Migliorare lettura mobile, accessibilità, ricerca, affidabilità della build e personalizzazione locale.

## Stato attuale

- La roadmap completa è stata approvata il 2026-08-03 in modalità autonoma.
- M-01..M-06 sono completate e la track è chiusa.
- `content-index.json` schema v2 alimenta 28 cartelle virtuali e 73 note; `directories.json` e la lista statica Explorer sono fallback.
- Pagefind gestisce il full-text; `npm run check` è verde e copre build, link, E2E e accessibilità.
- Gli URL delle 73 note restano contratti pubblici preservati.
- `jok98.preferences.v1` mantiene tema, preferiti, recenti e disclosure UI con fallback in memoria; nessun service worker o IndexedDB è presente.
- Il gate finale, la riproducibilità degli artefatti e il checker Kiroku strict sono verdi.

## Prossima azione

- Nessuna nello scope della track; una nuova modifica non banale deve essere instradata come attività distinta.

## Vincoli inderogabili

- Restare su Jekyll e JavaScript vanilla; nessuna SPA o dipendenza runtime non necessaria.
- Conservare tutti gli URL esistenti e separare l'archivio senza spostare subito le note.
- Non introdurre un database runtime: URL e `localStorage` coprono lo stato previsto.
- Gli indici sono artefatti generati; modificare generatore e sorgenti, poi rigenerare.
- Le modifiche ai test sono autorizzate per i comportamenti definiti nella roadmap.
- Non eseguire commit, push o deploy senza una richiesta separata.

## Leggi solo se necessario

- `STATE.md` e `ROADMAP.md` per stato, scope, milestone, criteri ed evidenze.
- `WORK.md` per il lavoro granulare; `DECISIONS.md` per i contratti approvati.
- `RISKS.md` per le aree fragili; memoria globale solo per i vincoli condivisi.
