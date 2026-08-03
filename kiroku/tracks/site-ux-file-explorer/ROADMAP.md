# Roadmap UX e file explorer

## Milestone

### M-01: Contratto UX e dati

Status: completed

Objective:
Fissare il modello di navigazione, il contratto del catalogo e i confini di persistenza che guideranno l'implementazione.

Scope:
- Explorer virtuale basato su metadati, route, archivio, schema catalogo v2, stato locale e strategia di compatibilità.

Expected artifacts:
- `kiroku/tracks/site-ux-file-explorer/{STATE,ROADMAP,WORK,DECISIONS,RISKS}.md`.

Dependencies:
- Analisi corrente del repository e approvazione della roadmap.

Validation:
- Checker Kiroku strict e revisione di coerenza tra decisioni, rischi e milestone.

Completion criteria:
- Route, schema, compatibilità URL, persistenza e non-obiettivi sono espliciti e privi di placeholder.

Risks:
- Un contratto troppo rigido potrebbe ostacolare la migrazione incrementale; mantenere adapter v1 temporaneo.

### M-02: Fondamenta P0 di lettura e accessibilità

Status: completed

Objective:
Rimuovere i blocchi principali alla lettura mobile e fornire shell/layout condivisi, semantici e resilienti.

Scope:
- TOC mobile collassabile, gerarchia H1, focus visibile, lingua e metadati, stati loading/error, header/footer condivisi.

Expected artifacts:
- `_includes/`, `_layouts/`, `assets/css/default_style.css`, `assets/js/script.js` e pagine minime coinvolte.

Dependencies:
- M-01 completata.

Validation:
- Diff review, `node --check`, generazione indici, controlli HTML/CSS focalizzati e smoke browser mobile/desktop.

Completion criteria:
- Il titolo precede il TOC su mobile, tastiera e focus sono utilizzabili, errori di caricamento sono visibili e i layout condividono la shell.

Risks:
- Refactor dei layout può introdurre regressioni nelle pagine CV, anime e viaggio.

### M-03: Catalogo v2 ed explorer isolato

Status: completed

Objective:
Generare un catalogo compatto e rendere disponibile un explorer accessibile in una route dedicata.

Scope:
- Schema v2, adapter v1, cartelle virtuali, breadcrumb, list/grid, filtri coerenti, route `/explore/` e ricerca catalogo.

Expected artifacts:
- `create_content_index.py`, cataloghi generati, moduli JS/CSS, pagina explorer e test unitari del generatore/router.

Dependencies:
- M-02 completata; metadati semplici esistenti.

Validation:
- Test Python e JavaScript, size budget, controllo URL, browser smoke desktop/mobile e diff degli artefatti generati.

Completion criteria:
- Tutte le 73 note sono raggiungibili dall'explorer, i filtri non producono stati incompatibili nascosti e lo schema è documentato dal codice/test.

Risks:
- Derivazione automatica delle cartelle può classificare male contenuti legacy; prevedere override espliciti.

### M-04: Integrazione nella home e navigazione contestuale

Status: completed

Objective:
Rendere l'explorer il percorso principale senza trasformare il sito in una SPA.

Scope:
- Home compatta, archivio separato, explorer integrato, breadcrumb e collegamenti contestuali dalle note.

Expected artifacts:
- `index.md`, layout/include di navigazione, CSS/JS e metadati eventualmente aggiunti alle note solo se necessari.

Dependencies:
- M-03 completata e URL explorer stabili.

Validation:
- Navigazione senza/ridotto JavaScript, link check, smoke browser e verifica che gli URL note restino invariati.

Completion criteria:
- La home mostra rapidamente contenuti recenti e percorso explorer; l'archivio non domina; ogni nota offre contesto di navigazione.

Risks:
- Duplicare explorer tra home e route potrebbe aumentare complessità e peso; riusare gli stessi componenti.

### M-05: Build riproducibile, ricerca full-text e quality gate

Status: completed

Objective:
Rendere build e pubblicazione verificabili e aggiungere ricerca statica full-text con fallback.

Scope:
- Toolchain versionata, Jekyll build, Pagefind o equivalente statico, link/accessibility/E2E checks e workflow Pages con gate.

Expected artifacts:
- Manifest di dipendenze, script di build/check, indice ricerca generato, test browser e `.github/workflows/execute-sh.yml` aggiornato.

Dependencies:
- M-04 completata; verifica della sorgente Pages o strategia compatibile con quella attuale.

Validation:
- Build pulita, test esistenti e nuovi, link check, artifact inspection e workflow syntax review.

Completion criteria:
- Una singola procedura riproduce gli artefatti e fallisce prima della pubblicazione in caso di contratto o UX critica rotta.

Risks:
- Dipendenze Ruby/Node o modello Pages non confermato possono richiedere un gate compatibile senza cambiare il deploy.

### M-06: Personalizzazione locale, offline controllato e audit finale

Status: completed

Objective:
Offrire preferenze utili senza backend e chiudere l'attività con audit completo.

Scope:
- Tema, preferiti, recenti e stato UI in `localStorage`; service worker/IndexedDB solo se giustificati da un requisito offline verificato; documentazione finale.

Expected artifacts:
- Moduli UI/persistenza, eventuale manifest/service worker strettamente necessario, README/Kiroku e report di validazione.

Dependencies:
- M-05 completata e catalogo stabile.

Validation:
- Test stato locale, privacy/no-secret review, regressione browser, build completa, diff e checker Kiroku strict.

Completion criteria:
- Preferenze degradano in sicurezza, nessun database runtime è introdotto senza requisito, tutti i gate passano e la memoria riflette lo stato reale.

Risks:
- Cache offline obsoleta o localStorage non disponibile; versionare le chiavi e usare fallback in memoria.
