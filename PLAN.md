# PLAN: Technical Implementation for ICT171 Cloud Server Project

## Document Context

This file defines how for the ICT171 Cloud Server Project.

Read these files in this order:

1. [SPEC.md](SPEC.md) — intent and why
2. `PLAN.md` — architecture and how (this file)
3. [TASKS.md](TASKS.md) — execution and what

Assessment criteria and marking rubric are defined in `instructions.md`.
This file is not included in the repository.

## 1. Architecture Overview

This document defines the technical architecture for the ICT171 Cloud Server project, structured across four distinct layers, each with defined responsibilities:

1. **IaaS layer** — Azure VM, networking, NSG, public IP, DNS
2. **Server layer** — Ubuntu OS, Nginx web server, HTTPS, TLS
3. **Application layer** — Digital Legacy Vault Phase 1 MVP, Flask backend with frontend UI
4. **Documentation and scripting layer** — overarching project documentation, layer specific documentation, evidence artefacts, automated and manually executed scripts for each layer

## 2. Technology Stack

1. IaaS Layer
   — Azure VM
   — Azure NSG
   — GoDaddy
2. Server Layer
   — Ubuntu OS 24.04 LTS
   — Nginx
   — Certbot
   — fail2ban
   — UFW
3. Application Layer
   — Flask
   — SQLite
   — Python3
   — python-magic
4. Documentation and scripting layer
   — Bash
   — Markdown
   — Git

## 3. Dependencies

1. Accounts
   — Azure
   — Github
2. Local Machine
   — SSH Client (Windows OpenSSH or PuTTY)
   — Powershell or Git Bash (for running CLI commands and bash scripts)
   — Azure CLI
   — Text Editor
3. Repository
   — Fork or clone the project repository from GitHub
4. External Services
   — Registered Domain via GoDaddy

## 4. Design Decisions

1. IaaS Layer:
   — Single VM on Azure
      — Single VM reduces build complexity for beginner level developer, reduces project cost
      — Multiple VMs not required for a proof of concept
   — NSG
      — Inline with security first principle, applies least privilege at network layer, restricts access to SSH, HTTP and HTTPS only
2. Server Layer:
   — Ubuntu OS 24.04 LTS
      — free open-source OS, reduces project costs
      — used in lab tutorials, existing knowledge reduces build risk
   — Nginx
      — free open-source web server, reduce project cost
      — used in lab tutorials, existing knowledge reduces build risk
      — lightweight, fast, and easy to configure for beginner level developer
   — Certbot
      — free open-source certificate issuance and renewal of SSL/TLS certificates.
      — used in lab-tutorials, existing knowledge reduces build risk
   — fail2ban
      — security protection against brute force attacks and other malicious activities
      — open-source to minimise project costs
3. Application Layer:
   — Flask
      — Simple for beginner level developer to use to build backend and basic frontend UI
      — Minimal UI is sufficient for Digital Legacy Vault Phase 1 MVP
   — SQLite
      — Sufficient for Digital Legacy Vault Phase 1 MVP, large unstructured database not required
      — Chosen of PostgreSQL partly because it has no network exposure, reducing attack surface
   — python-magic
      — Prevents application uploading malicious files with a renamed extension, verifies actual file type.
4. Documentation and Scripting Layer:
   — Bash
      — Scripting language for Linux server and IaaS automation, aligns with 3 primitives CLI practice
   — Git
      — Version control for all project artifacts, aligns with 3 primitives Git practice
   — Markdown
      — Documentation required to be written in Markdown specified by unit coordinators
      — Aligns with 3 primitives Markdown practice

## 5. Infrastructure Blueprint

1. Iaas Layer
   — Resource Group
      — name: `rg-dlv-mvp-prod`
      — location: `australiaeast`
   — VNet
      — name: `vnet-dlv-mvp-prod`
      — range: `10.10.0.0/16`
   — Subnet
      — name: `snet-dlv-mvp-prod`
      — range: `10.10.1.0/24`
   — VM
      — name: `vm-dlv-mvp-prod`
      — location: `australiaeast`
      — size: `Standard B1ms`
   — NSG
      — name: `nsg-dlv-mvp-prod`
   — NIC
      — name: `nic-dlv-mvp-prod`
   — Static public IPv4
      — name: `pip-dlv-mvp-prod`
   — GoDaddy DNS
      — A record: mydigitallegacyvault.com.au, 20.5.125.82
      — TTL: 600 seconds
2. Server Layer
   — Ubuntu image `24.04 LTS`
   — Nginx
      — Listens on port 80 (HTTP) and port 443 (HTTPS after Certbot)
      — Serves static files from `/var/www/dlv`
      — Config files lives at `/etc/nginx/sites-available/dlv`
      — Health endpoint at `/health`
   — Certbot
      — Issues certificate for `mydigitallegacyvault.com.au`
      — Certificate stored at `/etc/letsencrypt/live/mydigitallegacyvault.com.au/`
      — Auto-renewal managed by certbot.timer systemd service
      — Forces HTTP to HTTPS redirect
   — fail2ban
      — enabled as a systemd service `systemctl enable fail2ban`
      — started as a systemd service `systemctl start fail2ban`
      — watches `/var/log/auth.log` for failed SSH attempts, bans IP after repeated failures
   — SSH Configuration
      — Deny password authentication `PasswordAuthentication no`
      — Deny root login `PermitRootLogin no`
      — Config file at `/etc/ssh/sshd_config`
   — Python runtime
      — python3
      — python3-venv
      — python3-pip
      — sqlite3
      — Git
3. Application Layer
   — Flask app
      — virtual environment at `/opt/dlv_mvp/.venv`
      — pip packages: flask, python-magic
      — app directory `/opt/dlv_mvp`
      — uploads directory `/opt/dlv_mvp/uploads`
   — SQLite
      — DB path `/opt/dlv_mvp/app/dlv_mvp.db`

## 6. Security Controls

1. NSG
   — Allow inbound TCP on port 22 limited to public IP CIDR
   — Allow inbound TCP on port 80 from anywhere, HTTP web traffic
   — Allow inbound TCP on port 443 from anywhere, HTTPS web traffic
2. UFW enabled with explicit allow rules.
   — Allow port 22 SSH from authorised IP only
   — Allow port 80 HTTP
   — Allow port 443 HTTPS
3. fail2ban enabled and active, scans log files in real-time, looking for repeated failed login attempts, bans IP after repeated failures
   — enabled as a systemd service
   — started as a systemd service
4. SSH hardening:
   — Deny password authentication `PasswordAuthentication no`
   — Deny root login `PermitRootLogin no`
5. TLS certificate via Certbot — auto-renewal managed by certbot.timer
6. Upload security controls
   — Allowlist file types verified by python-magic
   — File size limit enforced server side
   — UUID rename on storage
   — Store outside web root

## 7. Repository Operating Model

1. Preserve evidence in `docs/evidence/phase-1/`.
2. Execute infrastructure from `infrastructure/scripts/`.
3. Keep implementation and governance artifacts at the repo root:
   - `SPEC.md`
   - `PLAN.md`
   - `TASKS.md`

## 8. Script Model

1. Production-ready:
   - `1-provision-vm.sh`
   - `2-harden-server.sh`
   - `3-deploy-nginx.sh`
2. Guided next-phase scripts:
   - `4-setup-dns-tls.sh`
   - `5-backup-integrity.sh`
Prerequisites:
- Run 1-provision-vm.sh first or set SSH_CIDR manually
- SSH_CIDR format: x.x.x.x/32
  
## 9. Validation Strategy

1. CLI checks:
   - `az` resource and network checks.
   - `systemctl` status checks for nginx and fail2ban.
   - `curl -I` checks for HTTP/HTTPS and `/health`.
   - Flask health and app route checks once the backend is enabled.
2. Browser checks:
   - live page rendering
   - DNS correctness
   - certificate validity
3. Documentation checks:
   - all artifacts linked in evidence manifest.

## 10. Risks and Mitigations

1. Risk: command drift between docs and actual state.
   - Mitigation: centralize reusable commands in scripts.
2. Risk: over-scoping Phase 2 too early.
   - Mitigation: keep feature gates in `TASKS.md` and execute in sequence.
3. Risk: evidence gaps.
   - Mitigation: maintain manifest and explicit checklist per phase.
4. Risk: spending time on a React UI instead of the assessment-critical backend.
   - Mitigation: keep the app layer Flask-first and use minimal HTML/CSS.
