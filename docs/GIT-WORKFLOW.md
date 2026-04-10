# Git Workflow

## 1. Branch Strategy

Use short-lived branches aligned to deliverable chunks.

1. `refactor/spec-plan-tasks`
2. `refactor/infrastructure-scripts`
3. `phase2/dns-tls`
4. `phase2/backup-integrity`
5. `phase2/app-workflows`

## 2. Commit Rules

1. One intent per commit.
2. Subject format:
   - `phase: concise change summary`
   - Example: `phase2: add certbot validation checks`
3. Body must answer:
   - why this change exists
   - what was validated
   - what evidence was captured

## 3. Suggested Tags

1. `v1.0-assessment1-submitted`
2. `v1.1-refactor-complete`
3. `v1.2-dns-tls-complete`
4. `v1.3-backup-integrity-complete`

## 4. Setup Commit Template

From repo root:

```bash
git config commit.template .gitmessage.txt
```

Then commit normally:

```bash
git commit
```

## 5. Review Discipline

Before every commit:

```bash
git status
git diff --staged
```

Do not commit without reviewing the staged diff.
