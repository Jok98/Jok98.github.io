#!/usr/bin/env bash
set -euo pipefail

# ====== CONFIG ======
HOSTNAME="archbox"
USERNAME="jok"
USERPASS="changeme"          # change after first boot
LOCALE="en_US.UTF-8"         # system language
KEYMAP="us"                  # console keyboard
TIMEZONE="Europe/Rome"
SWAP_SIZE="8G"
# ====================

say() { echo -e "\n[+] $*"; }
die() { echo "ERR: $*" >&2; exit 1; }
need_cmd() { command -v "$1" >/dev/null 2>&1 || die "missing command: $1"; }
online() { ping -c1 -W2 archlinux.org >/dev/null 2>&1; }

need_cmd sgdisk; need_cmd mkfs.btrfs; need_cmd pacstrap; need_cmd lsblk

# Build partition path that works for /dev/sdX and /dev/nvmeYpn
partpath() {
  local disk="$1" num="$2"
  if [[ "$disk" =~ (nvme|mmcblk|loop|nbd) ]]; then
    echo "${disk}p${num}"
  else
    echo "${disk}${num}"
  fi
}

choose_disk() {
  say "Detecting disks (excluding live USB)..."
  local iso_src iso_parent
  iso_src=$(findmnt -n -o SOURCE /run/archiso/bootmnt 2>/dev/null || true)
  if [[ -n "${iso_src:-}" ]]; then
    iso_parent="/dev/$(lsblk -no PKNAME "$iso_src" 2>/dev/null || true)"
  fi

  mapfile -t ROWS < <(lsblk -dpno NAME,SIZE,MODEL,TYPE | awk '$4=="disk"{print}')
  if ((${#ROWS[@]}==0)); then die "No disks found."; fi

  local idx=0
  declare -a DISKS
  for row in "${ROWS[@]}"; do
    dev=$(awk '{print $1}' <<<"$row")
    size=$(awk '{print $2}' <<<"$row")
    model=$(awk '{$1=$2=""; sub(/^  */,""); print}' <<<"$row")
    if [[ -n "${iso_parent:-}" && "$dev" == "$iso_parent" ]]; then
      continue
    fi
    printf "  [%d] %-20s  %-8s  %s\n" "$idx" "$dev" "$size" "$model"
    DISKS[$idx]="$dev"
    ((idx++))
  done

  if ((${#DISKS[@]}==0)); then
    die "Only the live USB disk is visible; cannot proceed."
  fi

  read -r -p "Select disk index to WIPE and install Arch on: " CHOICE
  DISK="${DISKS[$CHOICE]:-}"
  [[ -z "${DISK:-}" ]] && die "Invalid selection."

  echo -e "\n>>> You selected: $DISK"
  read -r -p "Type EXACTLY 'YES' to confirm FULL WIPE of $DISK: " CONF
  [[ "$CONF" == "YES" ]] || die "Aborted."
}

get_uuid() { blkid -s UUID -o value "$1"; }

write_arch_entry() {
  local esp="$1" root_uuid="$2" ucode_line=""
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
  local rootp="$1" rootuuid
  rootuuid=$(get_uuid "$rootp") || die "Cannot read UUID of $rootp"
  sed -i "s|root=UUID=[^ ]*|root=UUID=${rootuuid}|" /mnt/boot/loader/entries/arch.conf
  grep -q "root=UUID=${rootuuid}" /mnt/boot/loader/entries/arch.conf || die "UUID patch failed"
  say "Root UUID verified in arch.conf: ${rootuuid}"
}

# ---- MAIN ----
say "Checking network..."
online || die "No network. Connect with 'iwctl' first (station <iface> connect <SSID>)."

choose_disk
ESP=$(partpath "$DISK" 1)
ROOT=$(partpath "$DISK" 2)

say "Partitioning $DISK (GPT: ESP 512M + ROOT Btrfs)..."
sgdisk -Z "$DISK"
sgdisk -g "$DISK"
sgdisk -n 1:0:+512M -t 1:ef00 -c 1:"EFI System" "$DISK"
sgdisk -n 2:0:0      -t 2:8300 -c 2:"Linux Btrfs" "$DISK"
partprobe "$DISK"

say "Formatting..."
mkfs.fat -F32 "$ESP"
mkfs.btrfs -f -L archroot "$ROOT"

say "Creating Btrfs subvolumes..."
mount "$ROOT" /mnt
btrfs subvolume create /mnt/@
btrfs subvolume create /mnt/@home
btrfs subvolume create /mnt/@var
btrfs subvolume create /mnt/@log
btrfs subvolume create /mnt/@pkg
btrfs subvolume create /mnt/@snapshots
umount /mnt

say "Mounting subvolumes..."
mount -o subvol=@,compress=zstd,noatime "$ROOT" /mnt
mkdir -p /mnt/{boot,home,var,log,pkg,.snapshots}
mount -o subvol=@home,compress=zstd,noatime      "$ROOT" /mnt/home
mount -o subvol=@var,compress=zstd,noatime       "$ROOT" /mnt/var
mount -o subvol=@log,compress=zstd,noatime       "$ROOT" /mnt/log
mount -o subvol=@pkg,compress=zstd,noatime       "$ROOT" /mnt/pkg
mount -o subvol=@snapshots,compress=zstd,noatime "$ROOT" /mnt/.snapshots
mount "$ESP" /mnt/boot

say "Installing base system..."
pacstrap -K /mnt base linux linux-firmware btrfs-progs vim sudo \
  networkmanager iwd git base-devel

genfstab -U /mnt >> /mnt/etc/fstab

say "Configuring system (chroot)..."
arch-chroot /mnt /bin/bash -e <<EOFCHROOT
set -euo pipefail
HOSTNAME="$HOSTNAME"; USERNAME="$USERNAME"; USERPASS="$USERPASS"
LOCALE="$LOCALE"; TIMEZONE="$TIMEZONE"; SWAP_SIZE="$SWAP_SIZE"; KEYMAP="$KEYMAP"

ln -sf /usr/share/zoneinfo/\$TIMEZONE /etc/localtime
hwclock --systohc
sed -i 's/^#\('\$LOCALE'\)/\1/' /etc/locale.gen
locale-gen
echo "LANG=\$LOCALE" > /etc/locale.conf
echo "KEYMAP=\$KEYMAP" > /etc/vconsole.conf

echo "\$HOSTNAME" > /etc/hostname
cat >> /etc/hosts <<EOT
127.0.0.1   localhost
::1         localhost
127.0.1.1   \$HOSTNAME.localdomain \$HOSTNAME
EOT

echo "root:\$USERPASS" | chpasswd
useradd -m -G wheel,audio,video,storage -s /bin/bash "\$USERNAME"
echo "\$USERNAME:\$USERPASS" | chpasswd
sed -i 's/^# %wheel ALL=(ALL:ALL) ALL/%wheel ALL=(ALL:ALL) ALL/' /etc/sudoers

# Network stack
mkdir -p /etc/NetworkManager/conf.d
cat >/etc/NetworkManager/conf.d/wifi_backend.conf <<EOT
[device]
wifi.backend=iwd
EOT
mkdir -p /var/lib/iwd
cat >/var/lib/iwd/main.conf <<'EOT'
[General]
EnableNetworkConfiguration=true
[Network]
NameResolvingService=systemd
EOT
systemctl enable NetworkManager iwd
systemctl enable fstrim.timer

# microcode
if lscpu | grep -qi intel; then pacman --noconfirm -S intel-ucode; fi
if lscpu | grep -qi amd;   then pacman --noconfirm -S amd-ucode;   fi

# Bootloader
bootctl install

# swapfile on Btrfs
mkdir -p /swap
btrfs filesystem mkswapfile --size \$SWAP_SIZE --uuid clear /swap/swapfile
swapon /swap/swapfile
echo '/swap/swapfile none swap defaults 0 0' >> /etc/fstab

# Audio + BT
pacman --noconfirm -S pipewire pipewire-alsa pipewire-pulse wireplumber bluez bluez-utils
systemctl enable bluetooth

# NVIDIA + initramfs
pacman --noconfirm -S nvidia nvidia-utils nvidia-settings
mkinitcpio -P

# Hyprland + tools + Firefox
pacman --noconfirm -S hyprland xdg-desktop-portal-hyprland xdg-desktop-portal \
  waybar hyprpaper rofi-wayland kitty firefox \
  noto-fonts noto-fonts-cjk ttf-jetbrains-mono ttf-font-awesome

# greetd (agreety)
pacman --noconfirm -S greetd
cat >/etc/greetd/config.toml <<'EOT'
[terminal]
vt = 1
[default_session]
command = "agreety --cmd Hyprland"
user = "greeter"
EOT
systemctl enable greetd

# Hyprland user config (US layout + basic binds)
mkdir -p /home/\$USERNAME/.config/{hypr,waybar,rofi,hyprpaper}
cat >/home/\$USERNAME/.config/hypr/hyprland.conf <<'EOT'
# Hyprland config
monitor=,preferred,auto,1
exec-once = waybar &
exec-once = hyprpaper &
exec-once = nm-applet --indicator &

input { kb_layout = us }

# Keybinds
bind = SUPER, Return, exec, kitty
bind = SUPER, D, exec, rofi -show drun
bind = SUPER, Q, killactive
bind = SUPER, M, exit
bind = SUPER, V, togglefloating
bind = SUPER, F, fullscreen
EOT

# Waybar minimal config
cat >/home/\$USERNAME/.config/waybar/config <<'EOT'
{
  "layer": "top",
  "position": "top",
  "modules-left": ["clock"],
  "modules-center": ["window"],
  "modules-right": ["network", "battery", "tray"]
}
EOT

# Hyprpaper wallpaper config (fallback path; you can change later)
cat >/home/\$USERNAME/.config/hyprpaper/hyprpaper.conf <<'EOT'
wallpaper = ,/usr/share/pixmaps/archlinux-logo.png
EOT

chown -R \$USERNAME:\$USERNAME /home/\$USERNAME/.config
EOFCHROOT

say "Writing boot entry..."
ROOT_UUID=$(get_uuid "$ROOT") || die "Root UUID not found"
mkdir -p /mnt/boot/loader/entries
write_arch_entry "/mnt/boot" "$ROOT_UUID"
final_uuid_fix "$ROOT"
arch-chroot /mnt bootctl update || true
chmod 600 /mnt/boot/loader/random-seed 2>/dev/null || true

# Optional Wi-Fi profile via NM (so you're online at first boot)
echo
read -r -p "Create Wi-Fi autoconnect profile now? (y/N) " W
if [[ "${W:-N}" =~ ^[yY]$ ]]; then
  read -r -p "SSID: " SSID
  read -r -s -p "Password: " PSK; echo
  arch-chroot /mnt nmcli connection add type wifi ifname "*" con-name home-wifi ssid "$SSID"
  arch-chroot /mnt nmcli connection modify home-wifi wifi-sec.key-mgmt wpa-psk wifi-sec.psk "$PSK"
  arch-chroot /mnt nmcli connection modify home-wifi connection.autoconnect yes ipv4.method auto ipv6.method auto
  say "Wi-Fi profile 'home-wifi' created with autoconnect."
else
  say "Skipped Wi-Fi profile creation."
fi

say "All done. Unmounting and rebooting..."
swapoff /mnt/swap/swapfile 2>/dev/null || true
umount -R /mnt || true
reboot