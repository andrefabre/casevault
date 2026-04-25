#!/usr/bin/env bash
set -euo pipefail

# Run this script on the Ubuntu VM after SSH login.

Fix UFW SSH rule to restrict to authorised IP only
Update 4-harden-server.sh to fail loudly if SSH_CIDR is not set rather than falling back to open rule

SSH_CIDR="${SSH_CIDR:-}"

if [[ "${EUID}" -eq 0 ]]; then
    echo "Run this script as a non-root user with sudo privileges."
    exit 1
fi

sudo apt update && sudo apt upgrade -y
sudo apt install -y ufw fail2ban nginx git python3 python3-venv python3-pip sqlite3

if [[ -n "${SSH_CIDR}" ]]; then
    sudo ufw allow from "${SSH_CIDR}" to any port 22 proto tcp
else
    sudo ufw allow 22/tcp
fi

for port in 80 443; do
    sudo ufw allow "${port}/tcp"
done

sudo ufw --force enable

sudo systemctl enable fail2ban
sudo systemctl start fail2ban

sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

sudo systemctl enable nginx
sudo systemctl start nginx

echo ""
echo "Hardening complete."
echo "Validation commands:"
echo "  sudo ufw status verbose"
echo "  sudo systemctl status fail2ban --no-pager"
echo "  sudo systemctl status nginx --no-pager"