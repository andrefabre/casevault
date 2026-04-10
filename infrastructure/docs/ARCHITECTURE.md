# Infrastructure Architecture

## Goal

Provide a simple, secure, and reproducible cloud foundation for the ICT171 Digital Legacy Vault MVP.

## Components

1. Azure Resource Group in `australiaeast`
2. Ubuntu 24.04 VM (`Standard_B1ms`)
3. VNet/Subnet + NSG
4. Static public IPv4
5. Nginx serving static MVP content
6. Flask backend path under `server/` for Phase 2+

## Security Baseline

1. NSG: SSH restricted to current public IP, HTTP/HTTPS public
2. UFW enabled with explicit rules
3. fail2ban active
4. SSH password auth disabled
5. Root SSH login disabled

## Data/Operation Baseline

1. Web content served from `/var/www/dlv`
2. Runtime app area (optional) under `/opt/dlv_mvp`
3. Backup area targeted under `/opt/dlv_mvp/backups`
4. Evidence artifacts maintained in `docs/evidence/`

## Validation Surface

1. `curl -I http://<ip>` returns `200`
2. `curl -I http://localhost/health` returns `200`
3. `nslookup <domain>` resolves to VM public IP
4. `curl -I https://<domain>` returns certificate-backed response
