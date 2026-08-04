# Roadmap sidebar

## Milestones

### M-01: Sidebar contestuale e responsive

Status: completed

Objective:
Offrire una navigazione laterale compatta, focalizzata sul ramo della nota corrente e utilizzabile con mouse, tastiera e viewport mobili.

Scope:
- Rimuovere i filtri globali dalla sidebar, mantenere ricerca rapida e link all'Explorer.
- Aprire soltanto antenati e cartella della nota corrente; mantenere le altre aree collassate.
- Integrare controlli open/close, backdrop e gestione focus responsive.
- Aggiornare E2E/Axe e memoria della track.

Expected artifacts:
- `_layouts/default.html`, `assets/js/script.js`, `assets/css/default_style.css`.
- `tests/site.e2e.test.js` e file della track Kiroku.

Dependencies:
- Catalogo v2, preferenze locali e shell condivisa già disponibili.

Validation:
- Test unitari esistenti, build completa, site check, E2E/Axe desktop/mobile, smoke visuale, diff review e Kiroku strict.

Completion criteria:
- Il ramo corrente è l'unico aperto per default, i filtri globali non occupano la sidebar e non esistono scroll annidati permanenti.
- Il drawer mobile gestisce backdrop, `Esc`, focus iniziale/ritorno e la navigazione resta raggiungibile senza JavaScript tramite Explorer.
- Tutti i gate risultano verdi e la track riflette lo stato verificato.

Risks:
- Regressioni su focus, stato persistito, note archiviate o layout sotto 1100 px.
