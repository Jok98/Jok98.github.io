#!/bin/bash
# chmod +x setup_ubuntu.sh
# ./setup_ubuntu.sh

# Track installed, skipped, and failed components
installed_components=()
skipped_components=()
failed_components=()

# Function to log progress
log() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - $1"
}

# Function to ensure previous command succeeded
check_command() {
    if [ $? -ne 0 ]; then
        log "❌ Error: $1 failed."
        failed_components+=("$1")
        return 1
    fi
    return 0
}

# -----------------------
# Remove Helm APT repo if present
# -----------------------
if [ -f /etc/apt/sources.list.d/helm-stable-debian.list ]; then
    log "🗑 Removing existing Helm APT repository to avoid GPG errors..."
    sudo rm -f /etc/apt/sources.list.d/helm-stable-debian.list
    check_command "Remove Helm APT repository"
fi

# -----------------------
# Update package lists
# -----------------------
log "🔄 Updating package lists..."
sudo apt update -y
if check_command "Package list update"; then
    installed_components+=("apt update")
else
    exit 1
fi

# -----------------------
# Install base utilities
# -----------------------
log "📦 Installing base utilities (curl, zip, unzip)..."
sudo apt install -y curl zip unzip
if check_command "Base utilities installation"; then
    installed_components+=("curl/zip/unzip")
fi

# -----------------------
# Install SDKMAN
# -----------------------
if [ ! -d "$HOME/.sdkman" ]; then
    log "📥 Installing SDKMAN..."
    curl -s "https://get.sdkman.io" | bash
    if check_command "SDKMAN installation"; then
        installed_components+=("SDKMAN")
        source "$HOME/.sdkman/bin/sdkman-init.sh"
    fi
else
    log "✅ SDKMAN already installed."
    skipped_components+=("SDKMAN")
    source "$HOME/.sdkman/bin/sdkman-init.sh"
fi

# -----------------------
# Install Java 17 (Zulu)
# -----------------------
if ! sdk list java | grep -q "17.*zulu.*installed"; then
    log "☕ Installing Java 17 (Zulu)..."
    sdk install java 17.0.6-zulu
    sdk default java 17.0.6-zulu
    if check_command "Java 17 (Zulu) installation"; then
        installed_components+=("Java 17 (Zulu)")
    fi
else
    log "✅ Java 17 (Zulu) already installed."
    skipped_components+=("Java 17 (Zulu)")
fi

# -----------------------
# Install Maven via SDKMAN
# -----------------------
if ! command -v mvn &> /dev/null; then
    log "📦 Installing Maven via SDKMAN..."
    sdk install maven
    if check_command "Maven installation"; then
        installed_components+=("Maven")
    fi
else
    log "✅ Maven already installed."
    skipped_components+=("Maven")
fi

# -----------------------
# Install Git
# -----------------------
if ! command -v git &> /dev/null; then
    log "📥 Installing Git..."
    sudo apt install -y git
    if check_command "Git installation"; then
        installed_components+=("Git")
    fi
else
    log "✅ Git already installed."
    skipped_components+=("Git")
fi

# -----------------------
# Install PostgreSQL
# -----------------------
if ! command -v psql &> /dev/null; then
    log "🐘 Installing PostgreSQL..."
    sudo apt install -y postgresql postgresql-contrib
    if check_command "PostgreSQL installation"; then
        installed_components+=("PostgreSQL")

        # Enable and start PostgreSQL service
        sudo systemctl enable postgresql
        sudo systemctl start postgresql
        check_command "Start PostgreSQL service"

        # Create default user and database
        log "👤 Creating PostgreSQL user and database for $USER..."
        sudo -u postgres psql -c "DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$USER') THEN
      CREATE ROLE $USER WITH SUPERUSER CREATEDB CREATEROLE LOGIN PASSWORD '$USER';
   END IF;
END
\$\$;" 2>/dev/null
        sudo -u postgres createdb $USER 2>/dev/null
        check_command "Create default PostgreSQL user and database"
    fi
else
    log "✅ PostgreSQL already installed."
    skipped_components+=("PostgreSQL")
fi

# -----------------------
# Install DBeaver CE (Snap)
# -----------------------
if ! snap list | grep -q "dbeaver-ce"; then
    log "🛠 Installing DBeaver Community Edition (Snap)..."
    sudo snap install dbeaver-ce
    if check_command "DBeaver CE installation"; then
        installed_components+=("DBeaver CE (Snap)")
    fi
else
    log "✅ DBeaver CE (Snap) already installed."
    skipped_components+=("DBeaver CE (Snap)")
fi

# -----------------------
# Install Helm (binary version)
# -----------------------
install_helm() {
    if command -v helm &> /dev/null; then
        log "✅ Helm already installed: $(helm version --short)"
        skipped_components+=("Helm")
        return
    fi

    log "📥 Downloading and installing Helm..."
    HELM_VERSION=$(curl -s https://api.github.com/repos/helm/helm/releases/latest | grep tag_name | cut -d '"' -f 4)
    if [ -z "$HELM_VERSION" ]; then
        log "❌ Failed to fetch latest Helm version."
        failed_components+=("Helm")
        return
    fi
    log "ℹ️ Latest Helm version is ${HELM_VERSION}"

    # Download Helm tarball
    curl -LO "https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz"
    if ! check_command "Download Helm ${HELM_VERSION}"; then
        failed_components+=("Helm")
        return
    fi

    # Verify checksum
    curl -LO "https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz.sha256sum"
    sha256sum -c "helm-${HELM_VERSION}-linux-amd64.tar.gz.sha256sum" --quiet
    if [ $? -ne 0 ]; then
        log "❌ Helm checksum verification failed."
        failed_components+=("Helm")
        rm -f "helm-${HELM_VERSION}-linux-amd64.tar.gz"*
        return
    fi

    # Extract and install
    tar -zxvf "helm-${HELM_VERSION}-linux-amd64.tar.gz"
    sudo mv linux-amd64/helm /usr/local/bin/helm
    sudo chmod +x /usr/local/bin/helm
    if check_command "Helm installation"; then
        installed_components+=("Helm ${HELM_VERSION}")
        log "✅ Helm ${HELM_VERSION} installed successfully."
    else
        failed_components+=("Helm")
    fi

    # Cleanup
    rm -rf "helm-${HELM_VERSION}-linux-amd64.tar.gz"*
    rm -rf linux-amd64
}
install_helm

# -----------------------
# Install Docker
# -----------------------
if ! command -v docker &> /dev/null; then
    log "🐳 Installing Docker..."
    sudo apt install -y \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    check_command "Docker dependencies installation"

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg
    check_command "Docker GPG key import"

    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    check_command "Docker repository add"

    sudo apt update -y
    check_command "Package list update for Docker"
    sudo apt install -y docker-ce docker-ce-cli containerd.io
    if check_command "Docker installation"; then
        installed_components+=("Docker")
    fi
else
    log "✅ Docker already installed."
    skipped_components+=("Docker")
fi

# -----------------------
# Ask for Docker Hub login
# -----------------------
read -p "🔑 Do you want to log in to Docker Hub now? [y/N]: " docker_login_choice
if [[ "$docker_login_choice" =~ ^[Yy]$ ]]; then
    log "🔐 Docker Hub login..."
    read -p "📝 Enter Docker Hub username: " docker_username
    read -s -p "🔑 Enter Docker Hub password: " docker_password
    echo    # move to new line after password input
    echo "$docker_password" | docker login --username "$docker_username" --password-stdin
    if check_command "Docker Hub login"; then
        installed_components+=("Docker Hub login")
        log "✅ Docker Hub login successful."
    else
        log "⚠️ Docker Hub login failed. You can try manually with: docker login"
        failed_components+=("Docker Hub login")
    fi
else
    log "ℹ️ Skipping Docker Hub login."
    skipped_components+=("Docker Hub login")
fi

# -----------------------
# Install microk8s
# -----------------------
if ! command -v microk8s &> /dev/null; then
    log "📦 Installing microk8s..."
    sudo snap install microk8s --classic
    if check_command "microk8s installation"; then
        installed_components+=("microk8s")
    fi
else
    log "✅ microk8s already installed."
    skipped_components+=("microk8s")
fi

# Add user to microk8s group
if groups $USER | grep -qv "microk8s"; then
    log "👤 Adding $USER to microk8s group..."
    sudo usermod -aG microk8s $USER
    check_command "Add user to microk8s group"
    log "⚠️ Please log out and back in or run: newgrp microk8s"
fi

# -----------------------
# Install IntelliJ IDEA Community
# -----------------------
if ! command -v intellij-idea-community &> /dev/null; then
    log "📝 Installing IntelliJ IDEA Community Edition..."
    sudo snap install intellij-idea-community --classic
    if check_command "IntelliJ IDEA installation"; then
        installed_components+=("IntelliJ IDEA")
    fi
else
    log "✅ IntelliJ IDEA already installed."
    skipped_components+=("IntelliJ IDEA")
fi

# -----------------------
# Install graphical libraries for IntelliJ IDEA
# -----------------------
log "📦 Installing graphical libraries for IntelliJ IDEA..."
sudo apt install -y libgtk-3-dev libcanberra-gtk3-module
if check_command "Graphical libraries installation"; then
    installed_components+=("Graphical libraries for IDEA")
fi

# -----------------------
# Set up useful aliases
# -----------------------
if ! grep -q "alias k8=" ~/.bashrc; then
    log "⚙️ Adding microk8s alias to ~/.bashrc..."
    echo "alias k8='microk8s kubectl'" >> ~/.bashrc
    check_command "Alias k8 setup"
fi

if ! grep -q "alias idea=" ~/.bashrc; then
    log "⚙️ Adding IntelliJ alias to ~/.bashrc..."
    echo "alias idea='intellij-idea-community'" >> ~/.bashrc
    check_command "Alias idea setup"
fi

# -----------------------
# Final summary
# -----------------------
echo -e "\n================== ✅ INSTALLATION SUMMARY ✅ =================="
echo "🟢 Installed components:"
for item in "${installed_components[@]}"; do
    echo "   - $item"
done

echo -e "\n🟡 Already present components:"
for item in "${skipped_components[@]}"; do
    echo "   - $item"
done

if [ ${#failed_components[@]} -ne 0 ]; then
    echo -e "\n🔴 Failed components:"
    for item in "${failed_components[@]}"; do
        echo "   - $item"
    done
else
    echo -e "\n✅ No failed components."
fi
echo "===============================================================\n"

log "✅ All specified components are installed and configured."
log "ℹ️ Restart your terminal or run: source ~/.bashrc"
