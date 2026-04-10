# Infrastructure Setup Guide

This guide consolidates the script-driven flow and points to existing detailed evidence docs.

## Run Order

1. Make scripts executable with `chmod +x infrastructure/scripts/*.sh`.
2. Run `infrastructure/scripts/1-provision-vm.sh` from your local machine with Azure CLI.
   - Optional: set `SUBSCRIPTION_ID=<your-subscription-id>` before running.
3. SSH to VM and run `infrastructure/scripts/2-harden-server.sh`.
   - Optional: set `SSH_CIDR=<your-public-ip>/32` to restrict SSH at UFW level.
4. On VM, from repo root, run `infrastructure/scripts/3-deploy-nginx.sh`.
5. Complete and run `4-setup-dns-tls.sh` and `5-backup-integrity.sh` during Phase 2.

## Existing Evidence References

1. Provisioning evidence:
   - `docs/evidence/phase-1/01_provision_secure_azure_base_infrastructure/01_provision_secure_azure_base_infrastructure.md`
2. Hardening evidence:
   - `docs/evidence/phase-1/02_harden_ubuntu_server/02_harden_ubuntu_server.md`
3. Nginx landing page evidence:
   - `docs/evidence/phase-1/03_publish_initial-nginx_landing_page/03_publish_initial_nginx_landing_page.md`
4. Proposal compliance evidence:
   - `docs/evidence/phase-1/04_proposal_compliance_content.md`
5. Evidence checklist:
   - `docs/evidence/phase-1/05_evidence_capture_phase1.md`

## Validation Checklist

1. `sudo systemctl status nginx --no-pager`
2. `sudo systemctl status fail2ban --no-pager`
3. `sudo ufw status verbose`
4. `curl -I http://localhost`
5. `curl -I http://localhost/health`
