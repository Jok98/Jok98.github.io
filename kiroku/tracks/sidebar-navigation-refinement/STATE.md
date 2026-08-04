# Stato

## Scopo della track

Rendere la navigazione laterale delle note più leggibile e contestuale senza ricostruire un secondo Explorer.

## Stato attuale

- Classificazione standard; M-01 completata e track chiusa.
- Le modifiche ai test browser/accessibilità erano approvate e sono state realizzate.

## Scope

- In scope: markup sidebar, selezione del ramo corrente, ricerca rapida, responsive, focus, CSS ed E2E/Axe.
- Fuori scope: catalogo, Pagefind, URL, contenuti delle note, backend e pubblicazione.

## Verificato di recente

- La sidebar finale rimuove filtri area/topic e relativo codice morto, riduce la colonna desktop a 260-300 px e apre solo gli antenati della nota attiva.
- Quick find sostituisce temporaneamente l'albero e cerca titolo/summary; Explorer resta il percorso globale/full-text.
- Il drawer mobile usa backdrop, `inert`, focus trap, `Esc` e ritorno del focus; lo stato desktop persiste, ma il drawer non si riapre automaticamente.
- `npm run check` è verde: 3 test Python, 9 Node, site check su 73 note/78 HTML e 9 E2E inclusi Axe e fallback senza JavaScript.
- Smoke visuali a 1440x1000 e 390x844 confermano densità ridotta e drawer completo dopo la transizione.

## Questioni aperte

- Nessuna.

## Punti da sorvegliare

- Il titolo `SSH Key` resta duplicato tra titolo pagina e primo heading del contenuto; è un difetto separato, fuori scope.
- Conservare la distinzione: sidebar contestuale, Explorer globale/full-text.
