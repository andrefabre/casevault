# TASKS: Master Execution Board (Phase 1 to Phase 5)

## 1. Refactor Workstream (Completed)

### 1.1 Structure and governance

- [x] Add SPEC.md.
- [x] Add PLAN.md.
- [x] Add TASKS.md.
- [x] Update README.md for 3-primitives operating model.
- [x] Add Git workflow guidance and commit template.

### 1.2 Infrastructure work packaging

- [x] Add infrastructure/scripts/1-provision-vm.sh (production-ready).
- [x] Add infrastructure/scripts/2-harden-server.sh (production-ready).
- [x] Add infrastructure/scripts/3-deploy-nginx.sh (production-ready).
- [x] Implement infrastructure/scripts/4-setup-dns-tls.sh.
- [x] Implement infrastructure/scripts/5-backup-integrity.sh.
- [x] Add infrastructure/scripts/verify-all.sh.
- [x] Add infrastructure/configs/nginx.conf baseline config.

### 1.3 Evidence and traceability

- [x] Add docs/evidence/phase-1/00_evidence_manifest.md.
- [x] Preserve existing Phase 1 docs and screenshots in place.

## 2. Phase 1: Foundation and Proposal Readiness (Completed)

### 2.1 Infrastructure baseline

- [x] Provision Azure resource group, VNet/subnet, NSG, static public IP, and Ubuntu VM.
- [x] Restrict SSH and open HTTP/HTTPS in NSG.
- [x] Validate SSH access to VM.

### 2.2 Host hardening

- [x] Install and validate Nginx, UFW, fail2ban, Git, and runtime packages.
- [x] Enable UFW and confirm 22/80/443 rules.
- [x] Disable password authentication and root SSH login.

### 2.3 Landing page and compliance content

- [x] Deploy static site to /var/www/dlv.
- [x] Configure Nginx site and health endpoint.
- [x] Publish student number, proposal content, and license rationale sections.

### 2.4 Evidence package

- [x] Capture VM/IP, DNS, HTTP reachability, and page content screenshots.
- [x] Store artifacts in docs/evidence/phase-1/.
- [ ] Add group discussion evidence artifact if still pending.

## 3. Phase 2: Core Application Build (Current Focus)

### 3.1 DNS and TLS completion

- [ ] Run infrastructure/scripts/4-setup-dns-tls.sh with DOMAIN and ADMIN_EMAIL set.
- [ ] Capture terminal output for nslookup, certbot, and curl https checks.
- [ ] Add/update docs/evidence/phase-2/02_https.md with command outputs and screenshots.
- [ ] Commit and tag phase milestone when HTTPS evidence is complete.

### 3.2 Intake and upload workflow

- [ ] Confirm Flask-first app serving model for assessment and keep the UI lightweight.
- [ ] Implement owner intake form and server-side validation.
- [ ] Implement secure upload allowlist, file size check, and UUID rename.
- [ ] Store uploads outside public web root and metadata in DB.

### 3.3 Admin and executor workflow

- [ ] Implement admin authentication/session flow.
- [ ] Implement admin review/status update workflow.
- [ ] Implement executor read-only release simulation.
- [ ] Add audit events for submission, upload, review, and status changes.

### 3.4 Phase 2 deliverable gate

- [ ] Demonstrate end-to-end owner to admin path.
- [ ] Demonstrate executor read-only release simulation.
- [ ] Record evidence set and commit history for this phase.

## 4. Phase 3: Automation and Quality Hardening

### 4.1 Backup and integrity automation

- [ ] Run infrastructure/scripts/5-backup-integrity.sh on VM.
- [ ] Verify archive, checksum, and report outputs are generated.
- [ ] Validate checksum verification results and keep report artifacts.
- [ ] Optionally enable cron schedule and capture installed cron proof.

### 4.2 Operational reliability

- [ ] Add app and web log rotation policy as a separate guided Phase 3 task.
- [ ] Confirm health endpoint behavior and uptime checks.
- [ ] Run infrastructure/scripts/verify-all.sh and capture output artifact.

### 4.3 Security review pass

- [ ] Recheck HTTPS-only behavior and redirects.
- [ ] Recheck upload restrictions and storage boundaries.
- [ ] Recheck UFW, fail2ban, and SSH settings.

## 5. Phase 4: TCO and Documentation Production

### 5.1 TCO build

- [ ] Estimate monthly and annual cost for IaaS option.
- [ ] Build SaaS and on-prem comparison baseline.
- [ ] Add non-cost factors: control, flexibility, and security responsibility.

### 5.2 Reproducibility documentation

- [ ] Update setup and deployment docs with exact command sequence.
- [ ] Document config files and troubleshooting notes.
- [ ] Validate that another student can reproduce using repo docs alone.

### 5.3 TCO milestone

- [ ] Finalize TCO presentation content by due date.
- [ ] Store final deck and supporting references in docs.

## 6. Phase 5: Final Packaging and Submission Readiness

### 6.1 Evidence finalization

- [ ] Capture final screenshots for intake/upload/admin/DNS/HTTPS/script outputs.
- [ ] Confirm evidence is indexed and linked in docs/evidence.
- [ ] Confirm commit history shows iterative progress over multiple weeks.

### 6.2 Video and narrative

- [ ] Create video run sheet covering infra, DNS/TLS, app flow, and scripts.
- [ ] Record explainer video with command and browser proof.

### 6.3 Final verification gate

- [ ] Validate public accessibility and all links.
- [ ] Validate docs completeness against acceptance criteria.
- [ ] Freeze release tag for final submission package.

## 7. Practical Learning Track (3 Primitives)

### 7.1 CLI

- [ ] Run each script manually before changing it.
- [ ] Explain each command block and expected output in commit notes.
- [ ] Record one lesson learned per script execution.

### 7.2 Git

- [ ] Use one branch per task cluster.
- [ ] Use commit template for intent + validation + evidence.
- [ ] Tag milestones at phase boundaries.

### 7.3 Markdown

- [ ] Keep SPEC.md, PLAN.md, and TASKS.md synchronized after major changes.
- [ ] Update acceptance criteria when scope changes.
- [ ] Keep evidence index up to date when artifacts are added.

## 8. Suggested Branch Sequence

1. refactor/spec-plan-tasks
2. refactor/infrastructure-scripts
3. phase2/dns-tls
4. phase2/intake-upload
5. phase2/admin-executor
6. phase3/backup-hardening
7. phase4/tco-docs
8. phase5/final-package
