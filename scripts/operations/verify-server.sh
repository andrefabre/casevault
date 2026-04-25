#!/usr/bin/env bash
set -euo pipefail

dpkg -l ufw fail2ban nginx git python3 python3-venv python3-pip sqlite3 certbot python3-certbot-nginx | grep "^ii" | awk '{print $2, $3}'

DOMAIN="${DOMAIN:-mydigitallegacyvault.com.au}"

echo "== Service checks =="
sudo systemctl status nginx --no-pager | sed -n '1,10p'
sudo systemctl status fail2ban --no-pager | sed -n '1,10p'

echo ""
echo "== Firewall check =="
sudo ufw status verbose

echo ""
echo "== HTTP checks =="
curl -I http://localhost || true
curl -I http://localhost/health || true

echo ""
echo "== DNS/HTTPS checks =="
nslookup "$DOMAIN" || true
curl -I "https://$DOMAIN" || true

echo ""
echo "Verification run complete."
