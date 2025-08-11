#!/usr/bin/env bash
set -euo pipefail

# ====== PARAMETRI ======
DISK="/dev/nvme0n1"          # VERRA' AZZERATO
HOSTNAME="archbox"
USERNAME="jok"
USERPASS="changeme"          # cambia dopo il primo boot
LOCALE="it_IT.UTF-8"
TIMEZONE="Europe/Rome"
SWAP_SIZE="8G"
WIFI_IF="wlan0"
# ========================

say() { echo -e "\n[+] $*"; }
die() { echo "ERR: $*" >&2; exit 1; }

need_cmd() { command -v "$1" >/dev/null 2>&1 || die "comando mancante: $1"; }
need_cmd sgdisk; need_cmd mkfs.btrfs; need_cmd pacstrap

confirm_wipe() {
  echo "****************************"
  echo "  Arch install FULL DISK"
  echo "  Disco target: $DISK"
  echo "  Filesystem: Btrfs (subvolumi)"
  echo "  Bootloader: systemd-boot"
  echo "  Desktop: Hyprland (Wayland)"
  echo "  GPU: NVIDIA (driver proprietari)"
  echo "****************************"
  read -r -p "CONFERMI AZZERAMENTO COMPLETO di $DISK? (yes/YES/y/Y) " yn
  case "$yn" in
    yes|YES|y|Y) ;;
    *) die "Annullato dall'utente." ;;
  esac
}

online() { ping -c1 -W2 archlinux.org >/dev/null 2>&1; }

ensure_network() {
  if online; then
    say "Rete già attiva, salto configurazione Wi-Fi."
    return
  fi
  say "Configuro iwd per DHCP..."
  mkdir -p /var/lib/iwd
  cat >/var/lib/iwd/main.conf <<'EOF'
[General]
EnableNetworkConfiguration=true
[Network]
NameResolvingService=systemd
EOF
  systemctl restart iwd

  read -r -p "SSID Wi-Fi: " WIFI_SSID
  read -r -s -p "Password Wi-Fi: " WIFI_PSK; echo
  iwctl station "$WIFI_IF" scan || true
  iwctl station "$WIFI_IF" connect "$WIFI_SSID" <<<"$WIFI_PSK" || die "Connessione Wi-Fi fallita"

  say "Attendo assegnazione IP..."
  for i in {1..15}; do
    online && break
    sleep 1
  done
  online || die "Nessuna rete. Verifica SSID/PSK e riprova."
}

get_root_part() { echo "${DISK}p2"; }
get_esp_part()  { echo "${DISK}p1"; }
get_uuid()      { blkid -s UUID -o value "$1"; }

write_arch_entry() {
  local esp="$1" root_uuid="$2" ucode_line=""
  # microcode verrà installato in chroot; l'entry lo gestisce comunque
  [ -f /mnt/boot/intel-ucode.img ] && ucode_line="initrd  /intel-ucode.img"
  [ -f /mnt/boot/amd-ucode.img ]   && ucode_line="initrd  /amd-ucode.img"

  cat >"$esp/loader/entries/arch.conf" <<EOT
title   Arch Linux
linux   /vmlinuz-linux
$ucode_line
initrd  /initramfs-linux.img
options root=UUID=${root_uuid} rw rootflags=subvol=@ nvidia_drm.modeset=1
EOT
}

final_uuid_fix() {
  local rootp rootuuid
  rootp=$(get_root_part)
  rootuuid=$(get_uuid "$rootp") || die "Impossibile leggere UUID di $rootp"
  sed -i "s|root=UUID=[^ ]* |root=UUID=${rootuuid} |" /mnt/boot/loader/entries/arch.conf
  grep -q "root=UUID=${rootuuid}" /mnt/boot/loader/entries/arch.conf || die "Patch UUID fallita"
  say "UUID root verificato in arch.conf: ${rootuuid}"
}

confirm_wipe
ensure_network

# --- 1) Partizionamento ---
say "Partiziono $DISK (GPT: ESP 512M + ROOT Btrfs)..."
sgdisk -Z "$DISK"
sgdisk -g "$DISK"
sgdisk -n 1:0:+512M -t 1:ef00 -c 1:"EFI System" "$DISK"
sgdisk -n 2:0:0      -t 2:8300 -c 2:"Linux Btrfs" "$DISK"
partprobe "$DISK"
ESP=$(get_esp_part)
ROOT=$(get_root_part)

# --- 2) Formattazione ---
say "Formatto partizioni..."
mkfs.fat -F32 "$ESP"
mkfs.btrfs -L archroot "$ROOT"

# --- 3) Sottovolumi ---
say "Creo sottovolumi Btrfs..."
mount "$ROOT" /mnt
btrfs subvolume create /mnt/@
btrfs subvolume create /mnt/@home
btrfs subvolume create /mnt/@var
btrfs subvolume create /mnt/@log
btrfs subvolume create /mnt/@pkg
btrfs subvolume create /mnt/@snapshots
umount /mnt

# --- 4) Mount ---
say "Monto sottovolumi..."
mount -o subvol=@,compress=zstd,noatime "$ROOT" /mnt
mkdir -p /mnt/{boot,home,var,log,pkg,.snapshots}
mount -o subvol=@home,compress=zstd,noatime      "$ROOT" /mnt/home
mount -o subvol=@var,compress=zstd,noatime       "$ROOT" /mnt/var
mount -o subvol=@log,compress=zstd,noatime       "$ROOT" /mnt/log
mount -o subvol=@pkg,compress=zstd,noatime       "$ROOT" /mnt/pkg
mount -o subvol=@snapshots,compress=zstd,noatime "$ROOT" /mnt/.snapshots
mount "$ESP" /mnt/boot

# --- 5) Pacstrap base ---
say "Installo sistema base..."
pacstrap -K /mnt base linux linux-firmware btrfs-progs vim sudo \
  networkmanager iwd git base-devel

# --- 6) Fstab ---
genfstab -U /mnt >> /mnt/etc/fstab

# --- 7) Config in chroot ---
say "Configuro sistema in chroot..."
arch-chroot /mnt /bin/bash -e <<'EOFCHROOT'
set -euo pipefail
HOSTNAME="archbox"; USERNAME="jok"; USERPASS="changeme"
LOCALE="it_IT.UTF-8"; TIMEZONE="Europe/Rome"; SWAP_SIZE="8G"

ln -sf /usr/share/zoneinfo/$TIMEZONE /etc/localtime
hwclock --systohc
sed -i 's/^#\('"$LOCALE"'\)/\1/' /etc/locale.gen
sed -i 's/^#\(en_US.UTF-8\)/\1/' /etc/locale.gen
locale-gen
echo "LANG=$LOCALE" > /etc/locale.conf
echo "KEYMAP=it" > /etc/vconsole.conf

echo "$HOSTNAME" > /etc/hostname
cat >> /etc/hosts <<EOT
127.0.0.1   localhost
::1         localhost
127.0.1.1   $HOSTNAME.localdomain $HOSTNAME
EOT

echo "root:${USERPASS}" | chpasswd
useradd -m -G wheel,audio,video,storage -s /bin/bash "$USERNAME"
echo "${USERNAME}:${USERPASS}" | chpasswd
sed -i 's/^# %wheel ALL=(ALL:ALL) ALL/%wheel ALL=(ALL:ALL) ALL/' /etc/sudoers

mkdir -p /etc/NetworkManager/conf.d
cat >/etc/NetworkManager/conf.d/wifi_backend.conf <<EOT
[device]
wifi.backend=iwd
EOT
systemctl enable NetworkManager iwd
systemctl enable fstrim.timer

# microcode
if lscpu | grep -qi intel; then pacman --noconfirm -S intel-ucode; fi
if lscpu | grep -qi amd;   then pacman --noconfirm -S amd-ucode;   fi

# systemd-boot
bootctl install

# swapfile Btrfs
mkdir -p /swap
btrfs filesystem mkswapfile --size $SWAP_SIZE --uuid clear /swap/swapfile
swapon /swap/swapfile
echo '/swap/swapfile none swap defaults 0 0' >> /etc/fstab

# Audio + BT
pacman --noconfirm -S pipewire pipewire-alsa pipewire-pulse wireplumber bluez bluez-utils
systemctl enable bluetooth

# NVIDIA
pacman --noconfirm -S nvidia nvidia-utils nvidia-settings
mkinitcpio -P

# Hyprland stack
pacman --noconfirm -S hyprland xdg-desktop-portal-hyprland xdg-desktop-portal \
  waybar hyprpaper rofi-wayland alacritty \
  noto-fonts noto-fonts-cjk ttf-jetbrains-mono

# greetd + tuigreet
pacman --noconfirm -S greetd tuigreet
cat >/etc/greetd/config.toml <<'EOT'
[terminal]
vt = 1
[default_session]
command = "tuigreet --time --cmd Hyprland"
user = "greeter"
EOT
systemctl enable greetd

# pacman QoL
sed -i 's/^#Color/Color/' /etc/pacman.conf
sed -i 's/^#ParallelDownloads = .*/ParallelDownloads = 10/' /etc/pacman.conf
EOFCHROOT

# --- 8) Entry di boot robusta con UUID certo ---
say "Scrivo entry systemd-boot con UUID certo..."
ROOT_UUID=$(get_uuid "$ROOT") || die "UUID root non trovato"
mkdir -p /mnt/boot/loader/entries
write_arch_entry "/mnt/boot" "$ROOT_UUID"

# --- 9) Verifica/Patch UUID e aggiornamento bootloader ---
final_uuid_fix
arch-chroot /mnt bootctl update || true
chmod 600 /mnt/boot/loader/random-seed 2>/dev/null || true

say "Installazione completata. Smonto e riavvio..."
swapoff /mnt/swap/swapfile 2>/dev/null || true
umount -R /mnt || true
reboot