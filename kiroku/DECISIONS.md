# Decisioni

## Decisioni attive

### Decisione: catalogo compatto con fallback legacy

Stato: active
Area: navigazione

Decisione:
Usare `content-index.json` schema v2 come contratto primario della navigazione e `directories.json` come fallback basato sul filesystem.

Razionale:
Il catalogo compatto separa cartelle virtuali e item, abilita faccette, ricerca e ordinamento senza duplicare heading e testo; il TOC deriva dal DOM e il fallback conserva accesso minimo se il contratto principale non viene caricato.

Conseguenze:
- Le modifiche strutturali alle note devono rigenerare entrambi gli indici.
- Gli URL degli item restano invariati rispetto allo schema v1.
- `script.js` mantiene temporaneamente l'adapter v1 durante la migrazione della UI.

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
Tracciare nel repository i due indici, il bundle Pagefind e gli output CV; rigenerarli con la stessa pipeline locale/CI e scriverli su `main` solo dopo il quality gate.

Razionale:
La UI consuma file statici e il workflow assicura che gli artefatti pubblicabili siano disponibili senza una pipeline applicativa separata.

Conseguenze:
- Gli artefatti non sono fonti di verità e non vanno corretti manualmente.
- Un push può essere seguito da un commit automatico `chore: update generated site assets`.
- Il job che esegue codice e test resta read-only; il job di commit riceve solo gli artefatti verificati.

### Decisione: preferenze versionate senza layer offline

Stato: active
Area: client

Decisione:
Usare `jok98.preferences.v1` per tema, URL preferiti, recenti e disclosure UI, con validazione e fallback in memoria; non introdurre service worker o IndexedDB.

Razionale:
Il sito è statico e non esiste un requisito verificato di account, sincronizzazione o accesso offline ai contenuti.

Conseguenze:
- La personalizzazione resta privata al browser e non contiene contenuti, segreti o analytics.
- Un futuro supporto offline richiederà una decisione separata e una strategia esplicita di invalidazione.

### Decisione: sidebar contestuale, Explorer globale

Stato: active
Area: navigazione

Decisione:
Usare la sidebar delle note per il ramo corrente e il salto rapido per titolo/summary; mantenere cartelle globali, filtri e full-text in `/explore/`.

Razionale:
Duplicare l'intero Explorer in una colonna stretta produce densità, rami aperti e scroll annidati che sottraggono spazio alla lettura.

Conseguenze:
- Solo gli antenati della nota attiva vengono espansi automaticamente.
- Sotto 1100 px lo stesso `aside` diventa drawer accessibile; senza JavaScript il link Explorer nell'header resta disponibile.

## Decisioni sostituite o obsolete

- Nessuna decisione sostituita è documentata nel repository analizzato.
