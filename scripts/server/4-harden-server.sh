#!/usr/bin/env bash
set -euo pipefail

# Harden server prior to deployment
# Run this script on the Ubuntu VM after SSH login.
# Requires: SSH_CIDR environment variable (format: x.x.x.x/32)

if [[ "${EUID}" -eq 0 ]]; then
    echo "Run this script as a non-root user with sudo privileges."
    exit 1
fi

# Validate SSH_CIDR is set - fail loudly if not
if [[ -z "${SSH_CIDR:-}" ]]; then
    echo "ERROR: SSH_CIDR is not set."
    echo "SSH_CIDR must be set to restrict SSH access to your IP address."
    echo "Format: SSH_CIDR=x.x.x.x/32"
    echo ""
    echo "Example: SSH_CIDR=203.0.113.45/32 bash $0"
    exit 1
fi

# Configure UFW firewall
sudo ufw allow from "${SSH_CIDR}" to any port 22 proto tcp

for port in 80 443; do
    sudo ufw allow "${port}/tcp"
done

sudo ufw --force enable

# Enable and start fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Disable password authentication and root SSH login
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh

# Enable and start Nginx
sudo systemctl enable nginx
sudo systemctl start nginx

echo ""
echo "Hardening complete."
echo "Validation commands:"
echo "  sudo ufw status verbose"
echo "  sudo systemctl status fail2ban --no-pager"
echo "  sudo systemctl status nginx --no-pager"