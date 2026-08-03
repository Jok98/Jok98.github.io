# Stato

## Scopo della track

Realizzare una UX da file explorer virtuale per la knowledge base, mantenendo il sito statico, gli URL pubblici e la proprietà dei contenuti Markdown.

## Stato attuale

- Classificazione: complessa per impatto trasversale su layout, contratto dati, ricerca, build e pubblicazione.
- Modalità: esecuzione autonoma approvata; checkpoint e rivalutazione restano obbligatori dopo ogni milestone.
- Stato della track: completata; M-01..M-06 hanno soddisfatto i rispettivi criteri di completamento.
- Il repository era pulito a `2123997` prima della creazione della track.

## Scope

- In scope: navigazione, explorer, catalogo generato, ricerca statica, layout condivisi, accessibilità, responsive, preferenze locali, build e quality gate.
- In scope: test unitari, browser ed accessibilità necessari a validare i nuovi contratti, autorizzati dall'utente.
- Fuori scope: backend, autenticazione, database runtime, modifica dei contenuti didattici, cambio degli URL pubblici, commit/push/deploy.

## Verificato di recente

- 73 note hanno i metadati principali; 50 si trovano in percorsi fisici contenenti `old`.
- `content-index.json` pesa circa 510 KB e duplica testo di ricerca e 2.532 heading.
- Il TOC mobile della roadmap Java compare prima del titolo e contiene 172 link, rendendo la lettura iniziale impraticabile.
- I filtri topic non vengono ricalcolati dopo la selezione dell'area e possono produrre combinazioni vuote.
- Non esiste una suite di test o una build Jekyll riproducibile dichiarata nel repository.
- Il progetto è GitHub Pages/Jekyll statico; non esiste alcun bisogno confermato di persistenza relazionale runtime.
- Il checker Kiroku strict ha validato la track e i contratti di M-01 senza warning.
- M-02 ha introdotto una shell condivisa, un solo H1 per tutte le 73 note, focus/skip link, stati loading/fallback/error e TOC mobile collassato sotto il titolo.
- La build Jekyll temporanea ha generato tutti i 73 URL con `lang`, canonical e landmark principale; smoke Chromium a 390 e 1440 px riusciti.
- M-03 ha ridotto `content-index.json` da circa 510 KB a 60 KB (circa 8,4 KB gzip), mantenendo lo stesso insieme di 73 URL.
- `/explore/` offre 28 cartelle virtuali, breadcrumb, list/grid, ricerca globale o corrente, filtro tipo e archivio separato; adapter v1 e fallback legacy restano disponibili.
- Tre test Python e cinque test Node coprono schema, classificazione archivio, route, scope ricerca, compatibilità v1 e ID duplicati.
- M-04 ha promosso Explorer in header e home, sostituito i 18 chip iniziali con tre cartelle attive e roadmap in evidenza, mantenuto Archive separato e aggiunto breadcrumb/precedente/successiva a tutte le 73 note.
- Explorer contiene anche 73 link statici generati da Jekyll per il percorso senza JavaScript; smoke home e note a 390/1440 px riusciti.
- M-05 ha versionato Ruby 3.4.8, Jekyll 4.4.1, Minima 2.5.2, Node >=22.12 e le dipendenze Pagefind/Puppeteer/Axe tramite lockfile.
- `npm run check` rigenera indici, CV, sito e Pagefind, poi esegue tre test Python, cinque test catalogo Node, controllo di 73 note/78 HTML/link locali e cinque E2E browser inclusi full-text, no-JavaScript, mobile TOC e Axe.
- Pagefind 1.5.2 indicizza 76 pagine e mantiene la ricerca catalogo come fallback; il termine body-only `sdkman` trova la roadmap Java.
- Due build consecutive producono byte identici per JSON, bundle Pagefind, CV HTML e PDF; il renderer normalizza soltanto `CreationDate` e `ModDate` del PDF.
- Il workflow esegue il gate con permessi read-only e consegna gli artefatti verificati a un job separato con `contents: write`; la sorgente Pages non è stata cambiata.
- M-06 ha introdotto `jok98.preferences.v1`: tema `system/light/dark`, massimo 100 preferiti, 12 visite recenti e stato di sidebar/TOC, con validazione, sincronizzazione tra tab e fallback in memoria.
- Home e note espongono preferiti e recenti senza account o sincronizzazione; nessun contenuto, segreto o dato analitico viene copiato nello storage.
- L'audit non ha rilevato un requisito offline: service worker e IndexedDB non sono stati introdotti.
- Il gate finale esegue 3 test Python, 9 test Node, controllo di 73 note/78 documenti HTML e 7 E2E; Axe copre in entrambi i temi home, Explorer, nota standard, anime, viaggio e CV.
- Due build finali consecutive hanno prodotto byte identici per cataloghi, Pagefind, CV HTML e CV PDF; checker Kiroku strict e audit diff completano la validazione.

## Questioni aperte

- La sorgente GitHub Pages effettiva va verificata prima di cambiare il workflow di pubblicazione.
- La configurazione Pages esterna resta ignota; il workflow conserva il modello di pubblicazione esistente finché non viene verificata.

## Punti da sorvegliare

- Compatibilità temporanea dello schema indice versione 1, da rimuovere solo in una futura attività dedicata.
- Progressive enhancement: note e navigazione essenziale devono restare utilizzabili senza JavaScript.
- Dimensione del catalogo, cache del browser e invalidazione degli asset generati.
- Implementazione completa della tastiera: evitare il ruolo ARIA `tree` finché non è supportato integralmente.
- La build resta rumorosa per template Helm interpretati da Liquid e deprecazioni Sass di Minima; sono warning preesistenti da isolare nel quality gate.
- Non esiste una data editoriale affidabile: la home usa roadmap in evidenza deterministiche e mostra come recenti le note visitate localmente.
- Il browser usato per il PDF resta una dipendenza di sistema: la normalizzazione elimina il tempo di build, ma un upgrade Chromium può modificare il rendering o i metadati di prodotto.
