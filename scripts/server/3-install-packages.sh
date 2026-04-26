#!/usr/bin/env bash
set -euo pipefail

# Install and update packages for server layer
# Run this script on the Ubuntu VM after SSH login.

if [[ "${EUID}" -eq 0 ]]; then
    echo "Run this script as a non-root user with sudo privileges."
    exit 1
fi

sudo apt update && sudo apt upgrade -y
sudo apt install -y ufw fail2ban nginx python3 python3-venv python3-pip sqlite3 certbot python3-certbot-nginx

echo ""
echo "Package install complete."
echo "Installed Packages:"
echo "  ufw"
echo "  fail2ban"
echo "  nginx"
echo "  python3"
echo "  python3-venv"
echo "  python3-pip"
echo "  sqlite3"
echo "  certbot"
echo "  python3-certbot-nginx"