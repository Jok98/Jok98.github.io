# Decisioni

## Decisioni attive

### D-01: Explorer virtuale basato sui metadati

Status: active
Area: track

Decision:
Derivare cartelle e contenuti logici dal catalogo, senza esporre l'albero fisico `notes/` come modello UX.

Rationale:
I percorsi fisici includono fino a nove livelli e 50 note sotto directory `old`; rappresentano storia editoriale, non una tassonomia adatta alla navigazione.

Consequences:
- Lo schema v2 espone cartelle con `id`, `parentId`, `path`, `label`, `order`, `count` e item con `id`, `folderId`, `title`, `summary`, `url`, `tags`, `order`, `kind`, `status`, `lang`.
- Gli override restano scalari nel front matter e il generatore conserva compatibilità con i metadati attuali.

### D-02: Route e URL progressivi

Status: active
Area: navigation

Decision:
Usare `/explore/?path=engineering/java&view=list`, `history.pushState` e link HTML reali; preservare invariati tutti gli URL delle note.

Rationale:
La query rende lo stato condivisibile senza richiedere routing SPA o rewrite del server.

Consequences:
- Back/forward del browser devono ripristinare cartella, vista e filtri.
- La navigazione essenziale deve degradare a link standard.

### D-03: Archivio separato ma ricercabile

Status: active
Area: content

Decision:
Marcare `status: archived` per default quando il percorso fisico contiene `old`, consentendo override esplicito; escludere l'archivio dalla vista primaria ma includerlo nella ricerca globale.

Rationale:
L'archivio contiene la maggioranza delle note e dominerebbe una home esplorabile, ma resta patrimonio informativo pubblico.

Consequences:
- Nessuno spostamento fisico è richiesto in questa track.
- UI e conteggi devono distinguere contenuti attivi e archiviati.

### D-04: Nessun database runtime

Status: active
Area: persistence

Decision:
Usare URL per stato condivisibile e `localStorage` versionato per tema, preferiti, recenti e preferenze UI; non introdurre SQLite o backend.

Rationale:
Il dominio è un catalogo statico generato in build; non esistono transazioni, relazioni mutate dal client o sincronizzazione multiutente.

Consequences:
- La chiave `jok98.preferences.v1` contiene solo tema, URL di note preferite, visite recenti e stato UI validati.
- Ogni accesso allo storage ha fallback in memoria e non contiene dati sensibili.
- L'audit M-06 non ha rilevato un requisito offline: IndexedDB e service worker restano fuori dall'architettura.

### D-05: Home ibrida e accessibilità semantica

Status: active
Area: ux

Decision:
Ridurre hero e filtri, mostrare contenuti recenti e accesso all'explorer; implementare struttura con liste, breadcrumb e disclosure native, non con ruolo ARIA `tree` incompleto.

Rationale:
La home mobile attuale antepone molti chip al contenuto e un tree ARIA richiederebbe un modello tastiera complesso non ancora presente.

Consequences:
- Il file explorer è una metafora visuale, non una replica del desktop.
- Focus visibile, reduced motion, lingua e gerarchia heading sono criteri di completamento.
- Finché non esiste una data editoriale affidabile, la home mostra roadmap attive ordinate; M-06 userà la cronologia locale per i contenuti realmente recenti.

### D-06: Ricerca e validazione in build

Status: active
Area: delivery

Decision:
Mantenere una ricerca catalogo immediata e usare Pagefind 1.5.2 come indice full-text statico, con fallback e quality gate riproducibile.

Rationale:
L'indice v1 è gonfiato da heading e testo duplicato; una fase di build specializzata separa navigazione compatta e ricerca dei contenuti.

Consequences:
- Test Python, JavaScript, browser e accessibilità approvati coprono i contratti critici.
- Il workflow non deve pubblicare artefatti non validati.
- `npm run check` è il comando canonico condiviso tra sviluppo locale e CI.

### D-07: Gate read-only e scrittura separata degli artefatti

Status: active
Area: delivery

Decision:
Eseguire build e test in un job con `contents: read`, quindi trasferire solo gli artefatti verificati a un job `main` separato con `contents: write`; non cambiare la sorgente Pages non verificata.

Rationale:
Il codice di una pull request non deve essere eseguito con un token di scrittura e la configurazione Pages vive fuori dal repository.

Consequences:
- Le pull request falliscono se JSON, Pagefind o output CV sono obsoleti.
- Su `main` il job di scrittura sincronizza esattamente il bundle Pagefind e committa senza force push.
- Un passaggio futuro a un deploy Pages custom richiede prima evidenza della relativa impostazione GitHub.

### D-08: Personalizzazione locale senza cache offline

Status: active
Area: client state

Decision:
Applicare il tema prima del caricamento dei fogli di stile e mantenere preferiti, recenti e disclosure UI in uno storage locale versionato; degradare allo stato in memoria quando lo storage è indisponibile.

Rationale:
Le preferenze sono personali, reversibili e legate a URL pubblici; non richiedono account, sincronizzazione o disponibilità offline dei contenuti.

Consequences:
- Il sistema non promette sincronizzazione tra dispositivi né lettura offline.
- I valori malformati o non appartenenti a `/notes/` vengono scartati e le collezioni hanno limiti espliciti.
- Un futuro requisito offline richiederà una nuova decisione con strategia di invalidazione e test dedicati.

## Decisioni sostituite o obsolete

- Nessuna.
