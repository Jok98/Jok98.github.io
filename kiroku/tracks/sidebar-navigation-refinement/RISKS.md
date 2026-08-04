# Rischi

## Rischi aperti

- Nessuno nello scope completato.

## Rischi accettati

- La ricerca laterale resta basata sul catalogo e non full-text: il link Explorer rende esplicita la funzione completa.

## Rischi chiusi

### R-01: Focus intrappolato o perso nel drawer

Resolution:
Il drawer sposta il focus dopo essere visibile, rende inerte lo sfondo, cicla Tab, chiude con `Esc` e restituisce il focus; E2E e Axe sono verdi.

### R-02: Contesto corrente non individuato

Resolution:
Nota attiva e archiviata espandono soltanto i propri antenati; breadcrumb contestuale e link Explorer coprono il fallback globale.
