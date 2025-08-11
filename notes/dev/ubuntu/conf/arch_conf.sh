#!/usr/bin/env bash
set -euo pipefail

# Optional toggles
: "${SKIP_UPGRADE:=0}"                   # set to 1 to avoid full system upgrade
: "${SDK_JAVA_ID:=17.0.6-zulu}"          # change to your preferred zulu 17 id, e.g. 17.0.12-zulu

installed_components=()
skipped_components=()
failed_components=()

log() { echo "$(date +'%Y-%m-%d %H:%M:%S') - $*"; }
check_command() {
  if [ $? -ne 0 ]; then
    log "❌ Error: $1 failed."
    failed_components+=("$1")
    return 1
  fi
  return 0
}

need_cmd() { command -v "$1" >/dev/null 2>&1 || { log "❌ missing command: $1"; exit 1; }; }

# -----------------------
# Sanity checks
# -----------------------
if [ ! -f /etc/arch-release ]; then
  log "⚠️  This script targets Arch Linux. /etc/arch-release not found."
  log "    Continue anyway? (Ctrl+C to abort)"; sleep 2
fi
need_cmd sudo
need_cmd bash

# -----------------------
# Sync/upgrade package db
# -----------------------
if [ "${SKIP_UPGRADE}" = "1" ]; then
  log "🔄 Refreshing package databases (no full upgrade)..."
  sudo pacman -Sy --noconfirm
  check_command "pacman -Sy" && installed_components+=("pacman -Sy")
else
  log "🔄 Full system upgrade (pacman -Syu)..."
  sudo pacman -Syu --noconfirm
  check_command "pacman -Syu" && installed_components+=("pacman -Syu")
fi

# Helper to install pacman packages idempotently
install_pkgs() {
  local label="$1"; shift
  local pkgs=("$@")
  log "📦 Installing ${label}: ${pkgs[*]}"
  sudo pacman -S --needed --noconfirm "${pkgs[@]}" && installed_components+=("${label}") || failed_components+=("${label}")
}

# -----------------------
# Base utilities
# -----------------------
install_pkgs "base utilities (curl zip unzip)" curl zip unzip

# -----------------------
# Git
# -----------------------
if ! command -v git &>/dev/null; then
  install_pkgs "Git" git
else
  log "✅ Git already installed."
  skipped_components+=("Git")
fi

# -----------------------
# SDKMAN
# -----------------------
if [ ! -d "$HOME/.sdkman" ]; then
  log "📥 Installing SDKMAN..."
  curl -s "https://get.sdkman.io" | bash
  if check_command "SDKMAN installation"; then
    installed_components+=("SDKMAN")
    # shellcheck source=/dev/null
    source "$HOME/.sdkman/bin/sdkman-init.sh"
  fi
else
  log "✅ SDKMAN already installed."
  skipped_components+=("SDKMAN")
  # shellcheck source=/dev/null
  source "$HOME/.sdkman/bin/sdkman-init.sh"
fi

# -----------------------
# Java 17 (Zulu via SDKMAN)
# -----------------------
if command -v sdk &>/dev/null; then
  if ! sdk current java | grep -q "^Using.*17"; then
    log "☕ Installing Java (SDKMAN) ${SDK_JAVA_ID}..."
    sdk install java "${SDK_JAVA_ID}" || true
    sdk default java "${SDK_JAVA_ID}" || true
    if check_command "Java ${SDK_JAVA_ID} installation"; then
      installed_components+=("Java ${SDK_JAVA_ID}")
    else
      failed_components+=("Java ${SDK_JAVA_ID}")
    fi
  else
    log "✅ A Java 17 is already active: $(sdk current java || true)"
    skipped_components+=("Java 17")
  fi
else
  log "⚠️ SDKMAN not available; skipping Java via SDKMAN."
  skipped_components+=("Java via SDKMAN")
fi

# -----------------------
# Maven via SDKMAN
# -----------------------
if ! command -v mvn &>/dev/null; then
  if command -v sdk &>/dev/null; then
    log "📦 Installing Maven via SDKMAN..."
    sdk install maven
    if check_command "Maven installation"; then
      installed_components+=("Maven")
    fi
  else
    log "⚠️ SDKMAN missing; installing Maven via pacman."
    install_pkgs "Maven" maven
  fi
else
  log "✅ Maven already installed."
  skipped_components+=("Maven")
fi

# -----------------------
# Helm (pacman first, then fallback to binary)
# -----------------------
install_helm_binary() {
  if command -v helm &>/dev/null; then
    log "✅ Helm already installed: $(helm version --short 2>/dev/null || echo '?')"
    skipped_components+=("Helm")
    return
  fi
  log "📥 Installing Helm (binary fallback)..."
  local HELM_VERSION
  HELM_VERSION=$(curl -s https://api.github.com/repos/helm/helm/releases/latest | grep tag_name | cut -d '"' -f 4)
  if [ -z "${HELM_VERSION:-}" ]; then
    log "❌ Failed to fetch latest Helm version."
    failed_components+=("Helm")
    return
  fi
  log "ℹ️ Latest Helm version is ${HELM_VERSION}"
  curl -LO "https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz"
  check_command "Download Helm ${HELM_VERSION}" || { failed_components+=("Helm"); return; }
  curl -LO "https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz.sha256sum"
  sha256sum -c "helm-${HELM_VERSION}-linux-amd64.tar.gz.sha256sum" --quiet || {
    log "❌ Helm checksum verification failed."
    failed_components+=("Helm")
    rm -f "helm-${HELM_VERSION}-linux-amd64.tar.gz"*
    return
  }
  tar -zxf "helm-${HELM_VERSION}-linux-amd64.tar.gz"
  sudo mv linux-amd64/helm /usr/local/bin/helm
  sudo chmod +x /usr/local/bin/helm
  check_command "Helm installation" && installed_components+=("Helm ${HELM_VERSION}") || failed_components+=("Helm")
  rm -rf "helm-${HELM_VERSION}-linux-amd64.tar.gz"* linux-amd64
}

if ! command -v helm &>/dev/null; then
  if sudo pacman -S --needed --noconfirm helm; then
    installed_components+=("Helm (pacman)")
  else
    log "⚠️ pacman Helm failed; using binary fallback."
    install_helm_binary
  fi
else
  log "✅ Helm already installed."
  skipped_components+=("Helm")
fi

# -----------------------
# Docker (enable service + group)
# -----------------------
if ! command -v docker &>/dev/null; then
  install_pkgs "Docker" docker
  log "⚙️ Enabling Docker service..."
  sudo systemctl enable --now docker && installed_components+=("Docker service enabled") || failed_components+=("Docker service enable")
else
  log "✅ Docker already installed."
  skipped_components+=("Docker")
  # ensure service is running
  sudo systemctl enable --now docker || true
fi

# add user to docker group (idempotent)
if groups "$USER" | grep -qw docker; then
  log "✅ User '$USER' already in 'docker' group."
  skipped_components+=("docker group membership")
else
  log "👤 Adding '$USER' to 'docker' group..."
  sudo usermod -aG docker "$USER" && installed_components+=("docker group membership") || failed_components+=("docker group membership")
fi

# -----------------------
# kubectl
# -----------------------
if ! command -v kubectl &>/dev/null; then
  install_pkgs "kubectl" kubectl
else
  log "✅ kubectl already installed."
  skipped_components+=("kubectl")
fi

# -----------------------
# k3d (pacman first, fallback to upstream)
# -----------------------
install_k3d_fallback() {
  log "📥 Installing k3d (upstream script)..."
  curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
  check_command "k3d installation" && installed_components+=("k3d") || failed_components+=("k3d")
}

if ! command -v k3d &>/dev/null; then
  if sudo pacman -S --needed --noconfirm k3d; then
    installed_components+=("k3d (pacman)")
  else
    log "⚠️ pacman k3d failed; using upstream installer."
    install_k3d_fallback
  fi
else
  log "✅ k3d already installed."
  skipped_components+=("k3d")
fi

# -----------------------
# Node.js + npm
# -----------------------
if ! command -v npm &>/dev/null; then
  install_pkgs "Node.js and npm" nodejs npm
else
  log "✅ Node.js and npm already installed."
  skipped_components+=("Node.js and npm")
fi

# -----------------------
# Aliases (bash)
# -----------------------
if [ -f "$HOME/.bashrc" ]; then
  if ! grep -q "^alias k='kubectl'" "$HOME/.bashrc"; then
    log "⚙️ Adding kubectl alias to ~/.bashrc..."
    echo "alias k='kubectl'" >> "$HOME/.bashrc"
    check_command "Alias k setup (~/.bashrc)"
  else
    log "✅ kubectl alias already present in ~/.bashrc."
    skipped_components+=("alias k (bash)")
  fi
fi

# -----------------------
# Final summary
# -----------------------
echo -e "\n================== ✅ INSTALLATION SUMMARY ✅ =================="
echo "🟢 Installed components:"
for item in "${installed_components[@]}"; do echo "   - $item"; done
echo -e "\n🟡 Already present components:"
for item in "${skipped_components[@]}"; do echo "   - $item"; done
if [ ${#failed_components[@]} -ne 0 ]; then
  echo -e "\n🔴 Failed components:"; for item in "${failed_components[@]}"; do echo "   - $item"; done
else
  echo -e "\n✅ No failed components."
fi
echo "===============================================================\n"

log "✅ All specified components are installed and configured."
log "ℹ️ If 'docker' group was added, re-login or run: newgrp docker"
log "ℹ️ To load alias now: source ~/.bashrc"
