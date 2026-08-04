# Inizia qui

## Missione

- Trasformare la sidebar delle note da Explorer duplicato a navigazione contestuale del ramo corrente.
- Ridurre densità e scroll annidati, mantenendo tastiera, responsive e fallback statici.

## Stato attuale

- La track nasce come rifinitura separata dopo la chiusura di `site-ux-file-explorer`.
- La sidebar inizializza l'aggregato `current`, mostra filtri globali e apre tutti i livelli area/topic.
- M-01 è completata e la track è chiusa.
- La sidebar apre solo il ramo corrente, offre quick find e delega filtri/full-text all'Explorer.
- Sotto 1100 px lo stesso `aside` diventa drawer con backdrop, focus ed `Esc`.

## Prossima azione

- Nessuna nello scope della track; usare questo handoff per future rifiniture della navigazione note.

## Vincoli inderogabili

- Conservare URL, catalogo v2, JavaScript vanilla e link HTML reali.
- Lasciare filtri globali e ricerca full-text all'Explorer; nessun ruolo ARIA `tree` incompleto.
- Non creare commit, push o deploy.

## Leggi solo se necessario

- `STATE.md` e `ROADMAP.md` per evidenze, milestone e criteri di completamento.
- `WORK.md` per i task granulari; `DECISIONS.md` e `RISKS.md` per scelte e fragilità locali.
- `site-ux-file-explorer/DECISIONS.md` per i contratti UX e architetturali ereditati.
