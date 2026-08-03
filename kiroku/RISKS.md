# Rischi

## Rischi aperti

### Rischio: build Jekyll non riproducibile

Condizione:
Il repository non contiene `Gemfile` o lockfile e non fissa versioni di Ruby, Jekyll o Minima.

Impatto:
Ambienti diversi possono produrre output o warning differenti; un nuovo agente potrebbe non riuscire a costruire il sito.

Mitigazione:
Verificare le versioni disponibili prima del build e seguire i prerequisiti in `README.md`; trattare l'introduzione di dipendenze bloccate come decisione separata.

### Rischio: assenza di quality gate Jekyll in CI

Condizione:
Il workflow rigenera asset ma non esegue `jekyll build`, la verifica delle URL indicizzate o un test browser.

Impatto:
Liquid non valido, link rotti o regressioni client-side possono raggiungere `main` nonostante la generazione riesca.

Mitigazione:
Eseguire localmente build e controllo URL descritti nel README per modifiche rilevanti; non dichiarare validato ciò che l'ambiente non consente di eseguire.

### Rischio: divergenza tra indici

Condizione:
La navigazione dipende da due generatori e contratti distinti.

Impatto:
Il fallback può mostrare struttura o titoli diversi dall'esperienza primaria.

Mitigazione:
Rigenerare e revisionare sempre entrambi gli output dopo cambi strutturali a `notes/`.

### Rischio: nomi file con spazi

Condizione:
`create_json.sh` usa espansioni basate su word splitting per risultati di `find`.

Impatto:
Un file o una directory con spazi può produrre link incompleti o interrompere la generazione legacy.

Mitigazione:
Mantenere nomi path senza spazi finché il generatore non viene reso path-safe.

### Rischio: rendering CV dipendente dall'ambiente Python

Condizione:
`render_cv_pdf.py` usa il pacchetto `markdown` quando presente e un renderer minimo quando assente.

Impatto:
Lo stesso sorgente può generare HTML o PDF differenti tra locale e CI.

Mitigazione:
Controllare quale renderer è attivo, confrontare gli output e standardizzare l'ambiente prima di richiedere riproducibilità byte-per-byte.

### Rischio: output alternativi confinati al repository

Condizione:
`create_content_index.py` e `render_cv_pdf.py` accettano path di output configurabili, ma nel messaggio finale applicano `relative_to(REPO_ROOT)`.

Impatto:
Un output sotto `/tmp` o fuori dal repository viene scritto correttamente ma il comando termina poi con `ValueError` e codice non zero.

Mitigazione:
Per confronti temporanei usare path interni al repository e rimuoverli dopo il controllo, oppure correggere separatamente il logging prima di supportare output esterni.

### Rischio: dipendenze e percorsi del browser

Condizione:
Font Awesome arriva da cdnjs e molte risorse usano percorsi assoluti dalla root.

Impatto:
Un disservizio CDN degrada le icone; hosting offline o sotto sottopercorso può rompere asset e link.

Mitigazione:
Conservare l'attuale modello di hosting oppure pianificare una migrazione coordinata di asset, `baseurl` e link.

### Rischio: privacy policy non sincronizzata

Condizione:
`okanecheck/privacy/index.html` descrive manualmente trattamento dati, notifiche e backup Drive di un'app esterna.

Impatto:
Una modifica dell'app non riflessa nella pagina può rendere l'informativa inaccurata.

Mitigazione:
Revisionare la pagina insieme a ogni release OkaneCheck che cambia dati raccolti, permessi, trasferimenti, conservazione o destinatari.

## Rischi accettati

- Il README classifica come non bloccanti i warning Liquid delle note Helm e i warning Sass deprecati del tema Minima; rivalutarli se diventano errori o alterano l'output.

## Rischi chiusi

- Nessun rischio chiuso con storia ancora rilevante è documentato.
