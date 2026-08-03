# Stato

## Scopo del progetto

`Jok98.github.io` è il sito personale pubblico di Matteo Moi: raccoglie conoscenza tecnica, percorsi di studio, riferimenti personali, contenuti di viaggio, CV e pagine informative per altri progetti.

## Stato attuale

- Il ramo operativo è `main`; la pubblicazione dichiarata dal progetto è GitHub Pages.
- Jekyll usa il tema `minima`, Markdown Kramdown/GFM e `permalink: pretty` da `_config.yml`.
- Le aree della knowledge base sono `dev`, `etc` e `uni`; layout specializzati gestiscono CV, anime e diario di viaggio.
- Gli indici JSON e gli output CV sono versionati per poter essere serviti come asset statici.
- Non risultano backend, persistenza, API applicative, autenticazione, package JavaScript o suite di test.
- Nessun task applicativo attivo è confermato; non serve ancora il livello opzionale delle track Kiroku.

## Verificato di recente

Snapshot 2026-08-03:

- 73 file Markdown sotto `notes/`, tutti con `layout`, `title` e `summary`; 73 elementi in `content-index.json`.
- L'indice espone schema versione 1, tre aree, 18 topic e 171 tag.
- Il workflow `.github/workflows/execute-sh.yml` rigenera due indici e due output CV e li committa su `main` se cambiano.
- Python 3 e Chromium sono disponibili nell'ambiente locale analizzato; Jekyll non lo è e il modulo Python `markdown` non è installato.
- Lo stato Git iniziale non mostrava modifiche tracciate; `.gitignore` e `old_cv.pdf` erano file utente non tracciati e fuori dallo scope Kiroku.

## Questioni aperte

- La configurazione effettiva della sorgente GitHub Pages non è presente nel repository e va verificata nelle impostazioni GitHub prima di cambiare il modello di pubblicazione.
- Non è documentato un requisito formale su versioni Ruby, Jekyll, Minima, Python o Chromium.

## Punti da sorvegliare

- Allineamento tra sorgenti Markdown/JSON e artefatti generati.
- Validita delle URL dopo spostamenti o rinomine sotto `notes/`.
- Coerenza della privacy policy OkaneCheck con il comportamento reale dell'app.
