#!/usr/bin/env bash
set -euo pipefail

# ====== PARAMETRI PERSONALIZZABILI ======
DISK="/dev/nvme0n1"          # <<-- ATTENZIONE: VERRA' AZZERATO
HOSTNAME="archbox"
USERNAME="jok"
USERPASS="changeme"          # Cambia dopo il primo boot
LOCALE="it_IT.UTF-8"
TIMEZONE="Europe/Rome"
SWAP_SIZE="8G"               # swapfile su Btrfs
WIFI_IF="wlan0"
# ========================================

echo "****************************"
echo "  Arch install FULL DISK"
echo "  Disco target: $DISK"
echo "  Filesystem: Btrfs (subvolumi)"
echo "  Bootloader: systemd-boot"
echo "  Desktop: Hyprland (Wayland)"
echo "  GPU: NVIDIA (driver proprietari)"
echo "****************************"
read -r -p "CONFERMI AZZERAMENTO COMPLETO di $DISK? (yes/no) " yn
[[ "$yn" == "yes" ]] || { echo "Annullato."; exit 1; }

# --- 0) Rete live + iwd con DHCP ---
echo "[0] Configuro iwd per DHCP..."
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
iwctl station "$WIFI_IF" connect "$WIFI_SSID" <<<"$WIFI_PSK" || {
  echo "Connessione Wi-Fi fallita. Riprova manualmente con iwctl e rilancia lo script."
  exit 1
}
ping -c 3 archlinux.org >/dev/null || { echo "Niente rete. Esco."; exit 1; }

# --- 1) Partizionamento GPT: ESP 512M + Btrfs ---
echo "[1] Partiziono $DISK (GPT: ESP 512M + ROOT Btrfs)..."
sgdisk -Z "$DISK"
sgdisk -g "$DISK"
sgdisk -n 1:0:+512M -t 1:ef00 -c 1:"EFI System" "$DISK"
sgdisk -n 2:0:0      -t 2:8300 -c 2:"Linux Btrfs" "$DISK"
partprobe "$DISK"
ESP="${DISK}p1"
ROOT="${DISK}p2"

# --- 2) Formattazione ---
echo "[2] Formatto partizioni..."
mkfs.fat -F32 "$ESP"
mkfs.btrfs -L archroot "$ROOT"

# --- 3) Sottovolumi Btrfs ---
echo "[3] Creo sottovolumi Btrfs..."
mount "$ROOT" /mnt
btrfs subvolume create /mnt/@
btrfs subvolume create /mnt/@home
btrfs subvolume create /mnt/@var
btrfs subvolume create /mnt/@log
btrfs subvolume create /mnt/@pkg
btrfs subvolume create /mnt/@snapshots
umount /mnt

# --- 4) Mount con opzioni ---
echo "[4] Mount sottovolumi..."
mount -o subvol=@,compress=zstd,noatime "$ROOT" /mnt
mkdir -p /mnt/{boot,home,var,log,pkg,.snapshots}
mount -o subvol=@home,compress=zstd,noatime      "$ROOT" /mnt/home
mount -o subvol=@var,compress=zstd,noatime       "$ROOT" /mnt/var
mount -o subvol=@log,compress=zstd,noatime       "$ROOT" /mnt/log
mount -o subvol=@pkg,compress=zstd,noatime       "$ROOT" /mnt/pkg
mount -o subvol=@snapshots,compress=zstd,noatime "$ROOT" /mnt/.snapshots
mount "$ESP" /mnt/boot

# --- 5) Pacstrap base ---
echo "[5] Installo sistema base..."
pacstrap -K /mnt base linux linux-firmware btrfs-progs vim sudo \
  networkmanager iwd git base-devel

# --- 6) Fstab ---
genfstab -U /mnt >> /mnt/etc/fstab

# --- 7) Chroot: config base + microcode + bootloader + swapfile + NVIDIA + Hyprland ---
echo "[7] Configurazioni in chroot..."
arch-chroot /mnt /bin/bash -e <<'EOFCHROOT'
set -euo pipefail

# Parametri passati via env (non disponibili qui), ridefinisco locali
HOSTNAME="archbox"
USERNAME="jok"
USERPASS="changeme"
LOCALE="it_IT.UTF-8"
TIMEZONE="Europe/Rome"
SWAP_SIZE="8G"

# Locale, timezone, keymap
ln -sf /usr/share/zoneinfo/$TIMEZONE /etc/localtime
hwclock --systohc
sed -i 's/^#\('"$LOCALE"'\)/\1/' /etc/locale.gen
sed -i 's/^#\(en_US.UTF-8\)/\1/' /etc/locale.gen
locale-gen
echo "LANG=$LOCALE" > /etc/locale.conf
echo "KEYMAP=it" > /etc/vconsole.conf

# Hostname
echo "$HOSTNAME" > /etc/hostname
cat >> /etc/hosts <<EOT
127.0.0.1   localhost
::1         localhost
127.0.1.1   $HOSTNAME.localdomain $HOSTNAME
EOT

# Utente e sudo
echo "root:${USERPASS}" | chpasswd
useradd -m -G wheel,audio,video,storage -s /bin/bash "$USERNAME"
echo "${USERNAME}:${USERPASS}" | chpasswd
sed -i 's/^# %wheel ALL=(ALL:ALL) ALL/%wheel ALL=(ALL:ALL) ALL/' /etc/sudoers

# Network: NM + iwd backend
mkdir -p /etc/NetworkManager/conf.d
cat >/etc/NetworkManager/conf.d/wifi_backend.conf <<EOT
[device]
wifi.backend=iwd
EOT
systemctl enable NetworkManager iwd
systemctl enable fstrim.timer

# CPU microcode (auto)
if lscpu | grep -qi intel; then
  pacman --noconfirm -S intel-ucode
elif lscpu | grep -qi amd; then
  pacman --noconfirm -S amd-ucode
fi

# Bootloader: systemd-boot
bootctl install
ROOT_UUID=$(blkid -s UUID -o value "$(lsblk -no UUID /dev/disk/by-partlabel/'Linux Btrfs' 2>/dev/null || true)")
if [[ -z "\$ROOT_UUID" ]]; then
  ROOT_UUID=$(blkid -s UUID -o value $(find /dev -maxdepth 1 -regex '.*/nvme0n1p2\|.*/sda2' 2>/dev/null | head -n1))
fi

# Scelgo initrd microcode se presente
UCODE=""
if pacman -Qq intel-ucode >/dev/null 2>&1; then UCODE="initrd  /intel-ucode.img"; fi
if pacman -Qq amd-ucode   >/dev/null 2>&1; then UCODE="initrd  /amd-ucode.img";   fi

# Entry (abilito anche nvidia_drm.modeset=1 per Wayland)
cat >/boot/loader/entries/arch.conf <<EOT
title   Arch Linux
linux   /vmlinuz-linux
$UCODE
initrd  /initramfs-linux.img
options root=UUID=${ROOT_UUID} rw rootflags=subvol=@ nvidia_drm.modeset=1
EOT

cat >/boot/loader/loader.conf <<EOT
default arch.conf
timeout 3
editor  no
console-mode max
EOT

# Swapfile su Btrfs (senza CoW, tool dedicato)
mkdir -p /swap
btrfs filesystem mkswapfile --size $SWAP_SIZE --uuid clear /swap/swapfile
swapon /swap/swapfile
echo '/swap/swapfile none swap defaults 0 0' >> /etc/fstab

# Audio (PipeWire) + Bluetooth (opz)
pacman --noconfirm -S pipewire pipewire-alsa pipewire-pulse wireplumber bluez bluez-utils
systemctl enable bluetooth
# Avvio wireplumber lato utente dopo login grafico

# NVIDIA driver proprietari
pacman --noconfirm -S nvidia nvidia-utils nvidia-settings
# mkinitcpio (per sicurezza se moduli cambiano)
mkinitcpio -P

# Hyprland + tools
pacman --noconfirm -S hyprland xdg-desktop-portal-hyprland xdg-desktop-portal \
  waybar hyprpaper rofi-wayland alacritty \
  noto-fonts noto-fonts-cjk ttf-jetbrains-mono

# Display manager minimale: greetd + tuigreet per sessione Hyprland
pacman --noconfirm -S greetd tuigreet
cat >/etc/greetd/config.toml <<'EOT'
[terminal]
vt = 1

[default_session]
command = "tuigreet --time --cmd Hyprland"
user = "greeter"
EOT
systemctl enable greetd

# Qualità di vita pacman
sed -i 's/^#Color/Color/' /etc/pacman.conf
sed -i 's/^#ParallelDownloads = .*/ParallelDownloads = 10/' /etc/pacman.conf

EOFCHROOT

# --- 8) Fine: smonta e riavvia ---
echo "[8] Installazione completata. Smonto e riavvio..."
umount -R /mnt || true
swapoff /mnt/swap/swapfile 2>/dev/null || true
reboot