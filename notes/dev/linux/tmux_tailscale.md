---
layout: default
title: Tmux and Tailscale
navTitle: Tmux and Tailscale
summary: Practical guide for stable remote work with SSH, tmux sessions, and Tailscale connectivity.
area: dev
topic: linux
tags:
  - linux
  - ssh
  - tmux
  - tailscale
  - remote-work
order: 30
---

# Tmux e Tailscale

Guida pratica per lavorare su una macchina remota in modo stabile:

- Tailscale crea una rete privata tra i dispositivi.
- SSH entra sulla macchina remota usando IP Tailscale o MagicDNS.
- tmux mantiene vivi shell, editor e processi anche se la connessione SSH cade.


Workflow tipico:

```shell
ssh user@nome-macchina
tmux new -A -s work
```

`tmux new -A -s work` crea la sessione `work` se non esiste, oppure si ricollega a quella esistente.

## Installazione

### tmux

Ubuntu/Debian:

```shell
sudo apt update
sudo apt install tmux
```

Arch Linux:

```shell
sudo pacman -S tmux
```

Fedora:

```shell
sudo dnf install tmux
```

### Tailscale

Installazione rapida su Linux:

```shell
curl -fsSL https://tailscale.com/install.sh | sh
```

Avvio e login:

```shell
sudo tailscale up
```

Mostra IP e dispositivi della tailnet:

```shell
tailscale ip -4
tailscale status
```

Test verso un altro dispositivo:

```shell
tailscale ping nome-macchina
```

## Connessione remota con SSH

Con MagicDNS attivo:

```shell
ssh user@nome-macchina
```

Con IP Tailscale:

```shell
ssh user@100.x.y.z
```

Se vuoi usare Tailscale SSH invece dello SSH classico:

```shell
sudo tailscale up --ssh
tailscale ssh user@nome-macchina
```

Nota: Tailscale SSH richiede policy della tailnet che permettano l'accesso SSH alla destinazione.
Se la macchina e' multiutente o usi regole particolari in `authorized_keys`, valuta se usare SSH classico sopra la rete Tailscale.

## Uso base di tmux

### Sessioni

Creare una sessione:

```shell
tmux new -s work
```

Creare o agganciare una sessione:

```shell
tmux new -A -s work
```

Elencare le sessioni:

```shell
tmux ls
```

Agganciare una sessione:

```shell
tmux attach -t work
```

Rinominare una sessione:

```shell
tmux rename-session -t old-name new-name
```

Chiudere una sessione:

```shell
tmux kill-session -t work
```

### Tasti principali

Il prefisso default e':

```text
Ctrl+b
```

Comandi utili:

| Tasto              | Azione                         |
|--------------------|--------------------------------|
| `Ctrl+b d`         | detach dalla sessione          |
| `Ctrl+b c`         | nuova finestra                 |
| `Ctrl+b ,`         | rinomina finestra              |
| `Ctrl+b n`         | finestra successiva            |
| `Ctrl+b p`         | finestra precedente            |
| `Ctrl+b 0..9`      | vai alla finestra per numero   |
| `Ctrl+b %`         | split verticale                |
| `Ctrl+b "`         | split orizzontale              |
| `Ctrl+b frecce`    | cambia pane                    |
| `Ctrl+b z`         | zoom del pane corrente         |
| `Ctrl+b [`         | copy mode / scrollback         |
| `Ctrl+b ?`         | lista keybinding               |

Per uscire da copy mode:

```text
q
```

## Configurazione tmux utile

File:

```shell
~/.tmux.conf
```

Esempio minimale:

```tmux
set -g mouse on
set -g history-limit 50000
setw -g mode-keys vi

bind r source-file ~/.tmux.conf \; display-message "tmux config reloaded"
bind | split-window -h
bind - split-window -v
```

Ricarica:

```text
Ctrl+b r
```

Oppure:

```shell
tmux source-file ~/.tmux.conf
```

## Tailscale: comandi ricorrenti

| Comando                         | Uso                                      |
|---------------------------------|------------------------------------------|
| `tailscale status`              | mostra dispositivi e stato connessione   |
| `tailscale ip -4`               | mostra IPv4 Tailscale locale             |
| `tailscale ping <host>`         | test specifico sulla rete Tailscale      |
| `tailscale ssh user@host`       | SSH tramite Tailscale SSH                |
| `sudo tailscale up`             | connette o riconfigura il nodo           |
| `sudo tailscale down`           | disconnette il nodo dalla tailnet        |
| `tailscale netcheck`            | diagnostica connettivita' di rete        |
| `tailscale whois <ip>`          | mostra macchina e utente legati a un IP  |


## Riferimenti

- [Tailscale CLI](https://tailscale.com/docs/reference/tailscale-cli)
- [Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)
- [Install Tailscale on Linux](https://tailscale.com/download/linux)
- [tmux manual](https://man.openbsd.org/tmux)
