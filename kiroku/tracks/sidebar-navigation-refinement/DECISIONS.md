# Decisioni

## Decisioni attive

### D-01: Sidebar contestuale, Explorer globale

Status: active
Area: track

Decision:
La sidebar mostra il percorso e i vicini della nota corrente; filtri globali e navigazione completa restano responsabilità di `/explore/`.

Rationale:
La UI attuale duplica ricerca, faccette e albero globale in 350 px, riducendo spazio e leggibilità dell'articolo.

Consequences:
- La ricerca laterale resta un salto rapido per titolo; il full-text continua a vivere nell'Explorer.
- Aree non correnti restano raggiungibili come nodi collassati e tramite il link all'Explorer.

### D-02: Drawer responsive sullo stesso aside

Status: active
Area: accessibility

Decision:
Sotto 1100 px usare lo stesso `aside` come drawer con backdrop, `Esc`, focus iniziale e ritorno al trigger; su desktop mantenerlo sticky.

Rationale:
Riutilizzare un solo DOM evita contenuti duplicati e preserva gli elementi nativi `details` già accessibili.

Consequences:
- Il comportamento modale richiede E2E focalizzati e nessun ruolo ARIA `tree`.
- Il link statico Explorer nell'header mantiene la navigazione disponibile senza JavaScript.

## Decisioni sostituite o obsolete

- Nessuna.
