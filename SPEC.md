# SPEC: ICT171 Cloud Server + Digital Legacy Vault Phase 1 MVP

## 1. Purpose

Build and demonstrate a reproducible cloud-hosted MVP for secure digital legacy workflows, aligned to ICT171 assessment requirements and grounded in security-first operations.

## 2. Problem Statement

Critical personal records are often fragmented across devices and cloud platforms. Executors and trusted contacts can face significant delays or data loss during emergencies and estate events.

This MVP addresses that risk by proving an auditable, role-aware, cloud deployment baseline.

## 3. Users and Roles

1. Owner: submits and manages personal legacy records.
2. Admin: validates submissions and controls release simulation state.
3. Executor: receives read-only access only after admin approval in MVP simulation mode.
4. Assessor/Reviewer: verifies deployment quality, evidence, and reproducibility.

## 4. Scope (Current)

### In Scope

1. Public landing page with proposal compliance content.
2. Azure-hosted Ubuntu VM with Nginx.
3. DNS A record mapped to VM public IP.
4. HTTPS via Let's Encrypt (Phase 2 execution target).
5. Security baseline hardening and evidence capture.
6. Scripted operational tasks for provisioning, hardening, deploy, DNS/TLS, and backup.
7. Flask-first backend workflows behind Nginx for intake, uploads, admin review, and executor simulation.

### Out of Scope (Current Iteration)

1. Payments and advanced legal trigger automation.
2. MFA and enterprise IAM.
3. Multi-tenant architecture.
4. Advanced analytics dashboards.

## 5. Success Criteria

1. Public endpoint serves project page with required assessment content.
2. DNS resolves correctly to the Azure VM public IP.
3. HTTPS is valid and reachable without certificate warnings.
4. Security controls are applied and verifiable:
   - UFW configured
   - fail2ban active
   - SSH password auth disabled
5. Infrastructure commands are captured as reusable scripts.
6. Build can be reproduced by another student using repo documentation.
7. Git history clearly shows intent and progression across phases.

## 6. Evidence Requirements

1. CLI outputs for provisioning, hardening, and deployment checks.
2. Browser screenshots for landing page, DNS status, and HTTPS lock.
3. Version-controlled documentation and script artifacts.
4. Manual evidence records in `docs/evidence/` mapped to each phase.
5. Flask route and health-check outputs once the backend is implemented.

## 7. Constraints

1. Assessment timeline and deliverable deadlines.
2. Keep implementation simple, stable, and marking-friendly.
3. Prioritize baseline completion over feature breadth.

## 8. Definition of Done (Refactor Stage)

1. `SPEC.md`, `PLAN.md`, and `TASKS.md` are complete and internally aligned.
2. Core infrastructure scripts exist and are runnable with clear prerequisites.
3. Existing Phase 1 evidence remains preserved in-place.
4. Repo structure supports direct transition into Phase 2 execution.
