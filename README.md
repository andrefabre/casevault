# ICT171 Cloud Server Project + Digital Legacy Vault MVP

This repository is the single delivery repo for:

1. ICT171 Cloud Server Project infrastructure and evidence
2. Digital Legacy Vault Phase 1 MVP application layer

The refactor applies the 3 primitives workflow:

1. CLI: executable infrastructure scripts in `infrastructure/scripts/`
2. Git: traceable delivery strategy in `docs/GIT-WORKFLOW.md`
3. Markdown: spec-driven files `SPEC.md`, `PLAN.md`, and `TASKS.md`

The app layer is Flask-first behind Nginx. Static public content remains in `public/` for the landing page and assessment evidence, but the protected workflows are intended to live in `server/`.

## Start Here

Read these files in order:

1. `SPEC.md` (what and why)
2. `PLAN.md` (architecture and technical decisions)
3. `TASKS.md` (implementation sequence)

## Current Delivery Status

1. Phase 1 baseline complete:
   - Azure VM provisioned
   - Hardened Ubuntu + Nginx
   - Landing page deployed
   - DNS record resolves to VM
   - Evidence captured in `docs/evidence/phase-1/`
2. Refactor complete for Phase 2 kickoff:
   - Spec-driven files added
   - Infrastructure scripts added
   - Git workflow defined

## Repository Structure

```text
.
|-- SPEC.md
|-- PLAN.md
|-- TASKS.md
|-- infrastructure/
|   |-- configs/
|   |-- docs/
|   `-- scripts/
|-- docs/
|   |-- architecture/
|   |-- evidence/
|   `-- GIT-WORKFLOW.md
|-- app/
|-- public/
|-- scripts/
`-- server/
```

## Infrastructure Scripts

Production-ready scripts:

1. `infrastructure/scripts/1-provision-vm.sh`
2. `infrastructure/scripts/2-harden-server.sh`
3. `infrastructure/scripts/3-deploy-nginx.sh`

Phase 2 guided stubs:

1. `infrastructure/scripts/4-setup-dns-tls.sh`
2. `infrastructure/scripts/5-backup-integrity.sh`

Optional orchestration:

1. `infrastructure/scripts/verify-all.sh`

## Local App Development

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r server/requirements.txt
python server/app.py
```

Open `http://127.0.0.1:5000` once the Flask app exists.

## Evidence

1. Phase 1 evidence artifacts: `docs/evidence/phase-1/`
2. Evidence manifest: `docs/evidence/phase-1/00_evidence_manifest.md`
3. Phase 2 evidence placeholders: `docs/evidence/phase-2/`

## License

MIT License. See `LICENSE`.
