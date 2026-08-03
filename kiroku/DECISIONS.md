# Decisioni

## Decisioni attive

### Decisione: indice di contenuto ricco con fallback legacy

Stato: active
Area: navigazione

Decisione:
Usare `content-index.json` come contratto primario della navigazione e `directories.json` come fallback basato sul filesystem.

Razionale:
L'indice ricco abilita metadati, faccette, ricerca, ordinamento e TOC, mentre il fallback conserva accesso minimo alle note se il contratto principale non viene caricato.

Conseguenze:
- Le modifiche strutturali alle note devono rigenerare entrambi gli indici.
- `script.js` deve mantenere compatibilità con lo schema versione 1 finché il contratto non viene migrato esplicitamente.

### Decisione: una sorgente Markdown per CV web e PDF

Stato: active
Area: CV

Decisione:
Mantenere `pages/cv.md` come sorgente del CV e riusare gli stessi CSS per la pagina Jekyll e l'output standalone/PDF.

Razionale:
Il renderer dichiara e implementa il riuso delle regole visuali del sito, evitando due contenuti CV indipendenti.

Conseguenze:
- Aggiornare il CV solo nella sorgente e rigenerare `dist/cv.html` e `dist/cv.pdf` insieme.
- Una modifica ai CSS condivisi può cambiare sia il sito sia il documento PDF.

### Decisione: versionare gli artefatti generati

Stato: active
Area: delivery

Decisione:
Tracciare nel repository i due indici e gli output CV e rigenerarli con GitHub Actions a ogni push su `main`.

Razionale:
La UI consuma file statici e il workflow assicura che gli artefatti pubblicabili siano disponibili senza una pipeline applicativa separata.

Conseguenze:
- Gli artefatti non sono fonti di verità e non vanno corretti manualmente.
- Un push può essere seguito da un commit automatico `Update generated site assets [CI]`.

## Decisioni sostituite o obsolete

- Nessuna decisione sostituita è documentata nel repository analizzato.
