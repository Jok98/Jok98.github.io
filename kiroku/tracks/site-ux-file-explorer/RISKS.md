# Rischi

## Rischi aperti

### R-05: Toolchain o deploy non completamente controllabili

Condition:
La sorgente Pages configurata fuori repository è ignota e Chromium è una dipendenza di sistema non bloccata dal lockfile.

Impact:
Un cambio della configurazione Pages può impedire la pubblicazione; un upgrade Chromium può modificare rendering o metadati del PDF.

Mitigation:
Mantenere il gate versionato senza cambiare la sorgente Pages, verificare le impostazioni GitHub prima di un deploy custom e rieseguire il confronto degli artefatti dopo upgrade del browser.

## Rischi accettati

- Durante la migrazione resta temporaneamente il fallback legacy; il costo di codice è accettato per evitare un passaggio distruttivo.

## Rischi chiusi

### R-01: Regressione degli URL pubblici

Resolution:
Il catalogo v2, la lista statica e il sito costruito espongono lo stesso insieme di 73 URL; il quality gate verifica riferimenti e pagine generate.

### R-02: Regressioni dei layout specializzati

Resolution:
CV, anime e diario di viaggio condividono la shell senza duplicazioni; smoke visuali e Axe in tema chiaro/scuro coprono i layout rappresentativi.

### R-03: Catalogo incompatibile o sovradimensionato

Resolution:
Lo schema v2 è coperto da test e adapter v1, contiene 73 item e pesa circa 60 KB invece dei circa 510 KB iniziali; le build ripetute producono file identici.

### R-04: Accessibilità solo apparente

Resolution:
La UI usa controlli nativi, focus visibile e fallback senza JavaScript; i test browser coprono tastiera, TOC mobile e assenza di violazioni Axe serious/critical sui layout rappresentativi.

### R-06: Preferenze o cache obsolete

Resolution:
`jok98.preferences.v1` valida e limita ogni valore, scarta URL estranei alle note e degrada in memoria; nessun service worker o altra cache offline è stato introdotto.
