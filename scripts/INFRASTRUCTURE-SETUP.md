# Infrastructure Setup Guide

This guide consolidates the script-driven flow

## Run Order

1. Make scripts executable with `chmod +x docs/scripts/*.sh`.
2. Run `docs/scripts/iaas/1-provision-vm.sh` from your local machine with Azure CLI.
   - Optional: set `SUBSCRIPTION_ID=<your-subscription-id>` before running.
3. SSH to VM ssh azureuser@yourIP
4. Sudo apt install git to install git

```bash
ssh azureuser@20.5.125.82
sudo apt update && sudo apt install -y git
```

5. Clone Repository

```bash
cd ~
sudo git clone https://github.com/andrefabre/digitalLegacyVaultPhase1MVP.git
cd YOUR_REPO
```

Run scripts in order

```bash
bash scripts/server/2-dns-setup.sh
bash scripts/server/3-install-packages.sh
SSH_CIDR=<replacewithyourIP>/32 bash scripts/server/4-harden-server.sh
bash scripts/server/5-deploy-nginx.sh
bash scripts/server/6-setup-tls.sh
bash scripts/operations/7-backup-integrity.sh
bash scripts/operations/8-verify-server.sh
```


ssh azureuser@20.5.125.82
Move to azureuser /home directory
Clone repo once
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

Run scripts from repo
bash scripts/server/3-install-packages.sh
SSH_CIDR=203.0.113.45/32 bash scripts/server/4-harden-server.sh
1. Run `/docs/scripts/iass/2-setup-dns.sh` to setup DNS
2. Install required packages, run `/docs/scripts/server/3-install-packages.sh`
3. Harden server run `docs/scripts/server/4-harden-server.sh`.
   - Optional: set `SSH_CIDR=<your-public-ip>/32` to restrict SSH at UFW level.
4. Deploy Nginx server `docs/scripts/server/5-deploy-nginx.sh`
5. Setup TLS `docs/scripts/server/6-setup-tls.sh`
6.  Backup Integrity Complete `docs/scripts/operations/7-backup-integrity.sh`
7.  Verify Server Setup `docs/scripts/operations/8-verify-server.sh`

## Validation Checklist

1. `sudo systemctl status nginx --no-pager`
2. `sudo systemctl status fail2ban --no-pager`
3. `sudo ufw status verbose`
4. `curl -I http://localhost`
5. `curl -I http://localhost/health`
