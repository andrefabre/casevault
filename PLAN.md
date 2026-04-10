# PLAN: Technical Implementation for ICT171 + DLV MVP

## 1. Architecture Overview

This repository delivers a unified model:

1. Infrastructure Layer: Azure VM, networking, Nginx, DNS/TLS, system hardening.
2. Application Layer: Flask backend in `server/` behind Nginx, with static public assets for the landing page and evidence content.
3. Operations Layer: scripted verification, backup, and evidence routines.

## 2. Design Decisions

1. Single VM on IaaS:
   - Meets rubric requirements with minimal complexity.
   - Reduces integration overhead for Phase 1 and early Phase 2.
2. Flask-first deployment:
   - Small server-side app is easier to explain and ship by 29 May.
   - Nginx fronts Flask and still serves the static public content.
   - Keeps the UI lightweight and avoids spending weeks on React work.
3. Script-first operations:
   - Moves from ad-hoc terminal history to repeatable CLI artifacts.
4. Markdown-first execution:
   - `SPEC.md` is intent, this plan is architecture, `TASKS.md` is execution.

## 3. Infrastructure Blueprint

1. Azure resource group in `australiaeast`.
2. VNet + subnet + NSG with minimal inbound ports:
   - 22 limited to current public IP CIDR.
   - 80 and 443 public.
3. Static public IPv4.
4. Ubuntu 24.04 LTS VM (B1ms).
5. Nginx site serving `public/` content from `/var/www/dlv`.
6. Flask app serving protected workflows from `server/` via Gunicorn behind Nginx.

## 4. Security Controls

1. UFW enabled with explicit allow rules.
2. fail2ban enabled and active.
3. SSH hardening:
   - `PasswordAuthentication no`
   - `PermitRootLogin no`
4. TLS certificate and auto-renewal in Phase 2 execution.

## 5. Repository Operating Model

1. Preserve evidence in `docs/evidence/phase-1/`.
2. Execute infrastructure from `infrastructure/scripts/`.
3. Keep implementation and governance artifacts at the repo root:
   - `SPEC.md`
   - `PLAN.md`
   - `TASKS.md`

## 6. Script Model

1. Production-ready:
   - `1-provision-vm.sh`
   - `2-harden-server.sh`
   - `3-deploy-nginx.sh`
2. Guided next-phase scripts:
   - `4-setup-dns-tls.sh`
   - `5-backup-integrity.sh`

## 7. Validation Strategy

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

## 8. Risks and Mitigations

1. Risk: command drift between docs and actual state.
   - Mitigation: centralize reusable commands in scripts.
2. Risk: over-scoping Phase 2 too early.
   - Mitigation: keep feature gates in `TASKS.md` and execute in sequence.
3. Risk: evidence gaps.
   - Mitigation: maintain manifest and explicit checklist per phase.
4. Risk: spending time on a React UI instead of the assessment-critical backend.
   - Mitigation: keep the app layer Flask-first and use minimal HTML/CSS.

## 9. Exit Criteria for Refactor

1. All baseline scripts and docs are present.
2. Existing evidence remains untouched and discoverable.
3. Team can start Phase 2 implementation directly from `TASKS.md`.
