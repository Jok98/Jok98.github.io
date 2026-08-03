# Vincoli

## Vincoli attivi

### Vincolo: front matter semplice

Stato: active

Regola:
Usare valori scalari e liste semplici nei metadati delle note; mantenere almeno `layout` e preferibilmente `title`, `summary`, `area`, `topic`, `tags` e `order`.

Perché:
`create_content_index.py` implementa un parser locale ridotto e non interpreta oggetti YAML annidati o costrutti complessi.

### Vincolo: rispettare fonti e derivati

Stato: active

Regola:
Modificare `notes/` o `pages/cv.md` come fonti e rigenerare gli artefatti interessati; non applicare correzioni isolate a `content-index.json`, `directories.json` o `dist/cv.*`.

Perché:
La successiva esecuzione locale o CI sovrascriverebbe la correzione e ripristinerebbe il risultato prodotto dalla sorgente.

### Vincolo: pubblicazione dalla root

Stato: active

Regola:
Preservare l'hosting alla root `https://jok98.github.io/` oppure migrare esplicitamente tutti i percorsi assoluti e la configurazione Jekyll.

Perché:
Layout, script e dati usano URL come `/assets/...`, `/cv` e `/notes/...`; un deploy sotto sottopercorso li renderebbe errati.

### Vincolo: repository pubblico

Stato: active

Regola:
Trattare contenuti, cronologia Git e artefatti come pubblici; non aggiungere segreti, token, backup privati o dati personali non destinati alla pubblicazione.

Perché:
Il repository alimenta direttamente il sito personale e include già contenuti pubblici come CV e privacy policy.

### Vincolo: validare per tipo di modifica

Stato: active

Regola:
Dopo note aggiunte, spostate o rinominate rigenerare entrambi gli indici e costruire Jekyll; dopo modifiche al CV rigenerare HTML e PDF; dopo layout o script eseguire anche un controllo runtime nel browser quando pratico.

Perché:
Le dipendenze tra sorgenti, URL e artefatti non sono coperte da una suite automatica completa.

## Fuori ambito permanente

- Nessun backend o servizio runtime è richiesto dall'architettura corrente.
- Le fonti private delle note manoscritte restano esterne; nel repository entrano solo gli asset scelti per la pubblicazione.

## Modifiche vietate

- Correggere artefatti generati senza correggere la sorgente o il generatore.
- Usare Kiroku come store canonico alternativo a codice, configurazione o contenuti del sito.
- Interpretare checklist didattiche come autorizzazione a implementare funzionalità nel repository.
