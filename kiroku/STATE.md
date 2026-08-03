# Stato

## Scopo del progetto

`Jok98.github.io` è il sito personale pubblico di Matteo Moi: raccoglie conoscenza tecnica, percorsi di studio, riferimenti personali, contenuti di viaggio, CV e pagine informative per altri progetti.

## Stato attuale

- Il ramo operativo è `main`; la pubblicazione dichiarata dal progetto è GitHub Pages.
- Jekyll usa il tema `minima`, Markdown Kramdown/GFM e `permalink: pretty` da `_config.yml`.
- Le aree della knowledge base sono `dev`, `etc` e `uni`; layout specializzati gestiscono CV, anime e diario di viaggio.
- Gli indici JSON e gli output CV sono versionati per poter essere serviti come asset statici.
- Non risultano backend, persistenza, API applicative o autenticazione; la toolchain JavaScript è solo di build/test e non introduce dipendenze runtime remote.
- La track `site-ux-file-explorer` è completata e documenta la roadmap realizzata per UX, catalogo, ricerca, build e preferenze locali.

## Verificato di recente

Snapshot 2026-08-03:

- 73 file Markdown sotto `notes/`, tutti con `layout`, `title` e `summary`; 73 elementi in `content-index.json`.
- L'indice espone schema versione 2: 28 cartelle virtuali, 73 item, 23 note attive e 50 archiviate; conserva 171 tag come faccette.
- Ruby/Jekyll e Node sono bloccati da `.ruby-version`, `Gemfile.lock` e `package-lock.json`; Python 3 e Chromium completano la toolchain locale.
- `npm run check` rigenera due indici, due output CV, Pagefind e `_site`, poi valida test unitari, 73 URL/link, browser e accessibilità.
- Il workflow esegue il gate read-only su pull request e `main`; un job di scrittura separato committa solo artefatti verificati.
- Le preferenze locali usano `jok98.preferences.v1`, con fallback in memoria; non esistono service worker, IndexedDB, account, analytics o sincronizzazione applicativa.
- Il gate finale copre 3 test Python, 9 Node, 73 note/78 HTML e 7 E2E, inclusi Axe su tutti i layout rappresentativi in tema chiaro e scuro.
- Lo stato Git iniziale era pulito al commit `2123997`; la track non ha creato commit, push o deploy.

## Questioni aperte

- La configurazione effettiva della sorgente GitHub Pages non è presente nel repository e va verificata nelle impostazioni GitHub prima di cambiare il modello di pubblicazione.
- Chromium resta individuato dal sistema e non è bloccato dal lockfile; un upgrade può modificare il PDF anche se i timestamp sono normalizzati.

## Punti da sorvegliare

- Allineamento tra sorgenti Markdown/JSON e artefatti generati.
- Validita delle URL dopo spostamenti o rinomine sotto `notes/`.
- Coerenza della privacy policy OkaneCheck con il comportamento reale dell'app.
