# Deployment Guide: Phase 1 to Phase 2

## Intent

Use completed Phase 1 infrastructure as the deployment substrate for the next DLV MVP steps.

## Phase 1 (Already Completed)

1. VM provisioned and reachable.
2. Baseline hardening applied.
3. Nginx landing page deployed.
4. DNS configured to VM public IP.

## Phase 2 (Next)

1. Finalize HTTPS setup with certbot script.
2. Implement backup + integrity automation script.
3. Choose app serving model:
   - static-only during assessment checkpoints, or
   - static + backend workflow routes for owner/admin/executor demo.
4. Capture evidence for each milestone under `docs/evidence/phase-2/`.

## Operating Pattern

1. Update `SPEC.md` if scope changes.
2. Update `PLAN.md` for architecture/technical decisions.
3. Update `TASKS.md` before implementation starts.
4. Run scripts.
5. Commit with intent and evidence references.
