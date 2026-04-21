# SPEC: ICT171 Cloud Server Project

## Document Context

This file defines intent and why for the ICT171 Cloud Server Project.
The project is structured across four distinct layers:

1. **IaaS layer** — Azure VM, networking, NSG, public IP, DNS
2. **Server layer** — Ubuntu OS, Nginx web server, HTTPS, TLS
3. **Application layer** — Digital Legacy Vault Phase 1 MVP, Flask backend with frontend UI
4. **Documentation and scripting layer** — overarching project documentation, layer specific documentation, evidence artefacts, automated and manually executed scripts for each layer

Read these files in this order:

1. `SPEC.md` — intent and why (this file)
2. [PLAN.md](PLAN.md) — architecture and how
3. [TASKS.md](TASKS.md) — execution and what

Assessment criteria and marking rubric are defined in `instructions.md`.
This file is not included in the repository.

## 1. Purpose

The project must build reproducible cloud-hosted infrastructure, a secure web server, manual and automated scripting, and deploy the Digital Legacy Vault Phase 1 MVP application. The application must be non-custodial, compliance and security-first because it stores personal data and releases it to a nominated executor.

## 2. Problem Statement

Executors are faced with a practical and growing challenge; an obligation to resolve fragmented or non-existent records of digital assets that are distributed across email, cloud apps, devices and paper, creating stress and risk of delays in executing estate instructions. The Digital Legacy Vault Phase 1 MVP is a proof of concept designed to demonstrate a secure digital estate platform.

## 3. Users and Roles

### 3.1 Application Roles

1. Owner: must create account, add/modify/delete asset records, upload documentation, nominate an executor.
   — Access Level: Create, Read, Update, Delete owner records.
   — Conditions: must nominate executor before vault is active
2. Executor: must view owner asset records and documentation.
   — Access Level: Read owner asset records.
   — Conditions: must be approved by Admin to read owner asset records
3. Admin: must manage release of owner asset records to executor and workflow state.
   — Access Level: Read owner asset records. Create, Read, Update workflow state.
   — Conditions: must verify executor identity and confirm probate documentation before approving release

### 3.2 Assessment Roles

1. Assessor/Reviewer:
   — Must validate evidence artefacts produced from automated and manually run scripts
   — Must verify infrastructure is live and accessible
   — Must verify application workflow
   — Must verify project can be reproduced using assignment build document.

## 4. Scope (Current)

### In Scope

1. Public landing page with proposal compliance content.
2. Azure-hosted Ubuntu VM with Nginx.
3. DNS A record mapped to VM public IP.
4. HTTPS via Let's Encrypt.
5. Security baseline hardening and evidence capture.
6. Scripted operational tasks for provisioning, hardening, deploy, DNS/TLS, and backup.
7. Flask backend with frontend UI for account and asset creation, document uploads, executor nomination, manual verification of probate documentation and simulated release of asset records.
8. Security controls: allowlist file types checked by python-magic, file size limit enforced server side, UUID rename on storage, store outside web root

### Out of Scope (Current Iteration)

These items are ruled out of scope to keep complexity low.

1. Payments and advanced legal trigger automation
2. MFA and enterprise IAM
3. Multi-tenant architecture
4. Advanced analytics dashboards
5. Multiple VMs
6. Container deployment — Docker or similar
7. Multi-cloud or cloud-agnostic deployment
8. PostgreSQL or production-grade database
9. Network monitoring
10. Full antivirus scanning via ClamAV
11. Gunicorn production server — Flask built in development server sufficient for Phase 1 proof of concept

## 5. Success Criteria

1. Public endpoint serves project page with required assessment content.
2. DNS resolves correctly to the Azure VM public IP.
3. HTTPS is valid and reachable without certificate warnings.
4. Security controls are applied and verifiable:
   — UFW configured
   — fail2ban active
   — SSH password auth disabled
   — Allowlist file types verified by python-magic
   — File size limit enforced server side
   — UUID rename on storage
   — Store outside web root
5. Scripts execute successfully and produce verifiable output.
6. Backup script produces timestamped verifiable report
7. Project reproduction verified using assignment build document.
8. Git commits clearly describe what changed, why and when
9. Digital Legacy Vault Phase 1 MVP runs on IaaS infrastructure and Nginx web-server
10. Digital Legacy Vault Phase 1 MVP workflow implemented from owner account creation to simulated executor release
  
## 6. Evidence Requirements

1. CLI outputs for provisioning, hardening, and deployment checks.
2. Browser screenshots for landing page, DNS status, and HTTPS lock.
3. Each phase and its tasks has step by step instructions, code blocks showing CLI commands or executed scripts and screenshots of the output.
4. Backup script timestamped report
5. Video explainer of VM launch, webserver installation, DNS linking and Digital Legacy Vault Phase 1 MVP workflow

## 7. Constraints

1. Individual assignment — all work must be completed independently, group collaboration is discussion only
2. Beginner level experience in building IaaS infrastructure
3. Beginner level experience in building Flask Apps with UI front end
4. IaaS infrastructure must be used
5. Costs must be kept to a minimum as project is self-funded
6. Project build must be completed by 29th May 2026
7. Build must be completed in 110 hrs
