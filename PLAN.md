# PLAN: Technical Implementation for ICT171 Cloud Server Project

## Document Context

This file defines the how for the ICT171 Cloud Server Project.

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
   - Azure VM
   - Azure NSG
   - GoDaddy
2. Server Layer
   - Ubuntu OS 24.04 LTS
   - Nginx
   - Certbot
   - fail2ban
   - UFW
3. Application Layer
   - Flask
   - SQLite
   - Python3
   - python-magic
4. Documentation and scripting layer
   - Bash
   - Markdown
   - Git

## 3. Dependencies

1. Accounts
   - Azure
   - Github
2. Local Machine
   - SSH Client (Windows OpenSSH or PuTTY)
   - Powershell or Git Bash (for running CLI commands and bash scripts)
   - Azure CLI
   - Text Editor
3. Repository
   - Fork or clone the project repository from GitHub
4. External Services
   - Registered Domain via GoDaddy

## 4. Design Decisions

1. IaaS Layer:
   - Single VM on Azure
      - Single VM reduces build complexity for beginner level developer, reduces project cost
      - Multiple VMs not required for a proof of concept
   - NSG
      - Inline with security first principle, applies least privilege at network layer, restricts access to SSH, HTTP and HTTPS only
2. Server Layer:
   - Ubuntu OS 24.04 LTS
      - free open-source OS, reduces project costs
      - used in lab tutorials, existing knowledge reduces build risk
   - Nginx
      - free open-source web server, reduce project cost
      - used in lab tutorials, existing knowledge reduces build risk
      - lightweight, fast, and easy to configure for beginner level developer
   - Certbot
      - free open-source certificate issuance and renewal of SSL/TLS certificates.
      - used in lab-tutorials, existing knowledge reduces build risk
   - fail2ban
      - security protection against brute force attacks and other malicious activities
      - open-source to minimise project costs
3. Application Layer:
   - Flask
      - Simple for beginner level developer to use to build backend and basic frontend UI
      - Minimal UI is sufficient for Digital Legacy Vault Phase 1 MVP
   - SQLite
      - Sufficient for Digital Legacy Vault Phase 1 MVP, large unstructured database not required
      - Chosen of PostgreSQL partly because it has no network exposure, reducing attack surface
   - python-magic
      - Prevents application uploading malicious files with a renamed extension, verifies actual file type.
4. Documentation and Scripting Layer:
   - Bash
      - Scripting language for Linux server and IaaS automation, aligns with 3 primitives CLI practice
   - Git
      - Version control for all project artifacts, aligns with 3 primitives Git practice
   - Markdown
      - Documentation required to be written in Markdown specified by unit coordinators
      - Aligns with 3 primitives Markdown practice

## 5. Infrastructure Blueprint

1. Iaas Layer
   - Resource Group
      - name: `rg-dlv-mvp-prod`
      - location: `australiaeast`
   - VNet
      - name: `vnet-dlv-mvp-prod`
      - range: `10.10.0.0/16`
   - Subnet
      - name: `snet-dlv-mvp-prod`
      - range: `10.10.1.0/24`
   - VM
      - name: `vm-dlv-mvp-prod`
      - location: `australiaeast`
      - size: `Standard B1ms`
   - NSG
      - name: `nsg-dlv-mvp-prod`
   - NIC
      - name: `nic-dlv-mvp-prod`
   - Static public IPv4
      - name: `pip-dlv-mvp-prod`
   - GoDaddy DNS
      - A record: mydigitallegacyvault.com.au, 20.5.125.82
      - TTL: 600 seconds
2. Server Layer
   - Ubuntu image `24.04 LTS`
   - Nginx
      - Listens on port 80 (HTTP) and port 443 (HTTPS after Certbot)
      - Serves static files from `/var/www/dlv`
      - Config files lives at `/etc/nginx/sites-available/dlv`
      - Health endpoint at `/health`
   - Certbot
      - Issues certificate for `mydigitallegacyvault.com.au`
      - Certificate stored at `/etc/letsencrypt/live/mydigitallegacyvault.com.au/`
      - Auto-renewal managed by certbot.timer systemd service
      - Forces HTTP to HTTPS redirect
   - fail2ban
      - enabled as a systemd service `systemctl enable fail2ban`
      - started as a systemd service `systemctl start fail2ban`
      - watches `/var/log/auth.log` for failed SSH attempts, bans IP after repeated failures
   - SSH Configuration
      - Deny password authentication `PasswordAuthentication no`
      - Deny root login `PermitRootLogin no`
      - Config file at `/etc/ssh/sshd_config`
   - Python runtime
      - python3
      - python3-venv
      - python3-pip
      - sqlite3
      - Git
3. Application Layer
   - Flask app
      - virtual environment at `/opt/dlv_mvp/.venv`
      - pip packages: flask, python-magic
      - app directory `/opt/dlv_mvp`
      - uploads directory `/opt/dlv_mvp/uploads`
   - SQLite
      - DB path `/opt/dlv_mvp/app/dlv_mvp.db`

## 6. Security Controls

1. NSG
   - Allow inbound TCP — port 22 limited to public IP CIDR
   - Allow inbound TCP — port 80 from anywhere, HTTP web traffic
   - Allow inbound TCP — port 443 from anywhere, HTTPS web traffic
2. UFW enabled with explicit allow rules.
   - Allow port 22 SSH — from authorised IP only
   - Allow port 80 HTTP
   - Allow port 443 HTTPS
3. fail2ban enabled and active — scans log files in real-time, looking for repeated failed login attempts, bans IP after repeated failures
   - enabled as a systemd service
   - started as a systemd service
4. SSH hardening:
   - Deny password authentication `PasswordAuthentication no`
   - Deny root login `PermitRootLogin no`
5. TLS certificate via Certbot —— auto-renewal managed by certbot.timer
6. Upload security controls
   - Allowlist file types verified by python-magic
   - File size limit enforced server side
   - UUID rename on storage
   - Store outside web root

## 7. Repository Operating Model

```text
├── docs/
│   ├── architecture/   - architecture diagrams and visual references for the project
│   ├── evidence/       - evidence screenshots for each build phase
│   │   ├── phase-1/
│   │   ├── phase-2/
│   └── testing/        - test plans for DLV App
├── public/             - static web assets served by Nginx, the landing page and its dependencies
│   ├── assets/
│   │   └── images/     - image files used by the landing page
│   ├── css/            - stylesheet for the landing page
│   └── js/             - JavaScript for the landing page
├── scripts/
│   ├── application/    - Flask app deployment scripts
│   ├── iaas/           - Azure provisioning scripts
│   ├── operations/     - DNS and backup scripts
│   ├── server/         - server hardening and Nginx deployment scripts
│   │   └── configs/    - server config files
│   └── INFRASTRUCTURE-SETUP.md
├── server/      - Flask application source code
├── SPEC.md      - intent and why for the ICT171 Cloud Server Project
├── PLAN.md      - defines the how for the ICT171 Cloud Server Project
├── TASKS.md     - tasks to implement the ICT171 Cloud Server Project
├── README.md   - project overview, repository structure, and quick start guide
├── LICENSE
└── .gitmessage.txt - template for commit messages
```

## 8. Script Model

1. IaaS Layer
   - Script name: `1-provision-vm.sh`
     - description: Provisions Resource Group, VM, VNet, SubNet, NSG, NIC and Static public IPv4
     - prerequisites:
       - Azure Subscription and CLI
       - curl
     - expected output:

       ```text
       Provisioning complete.
       VM public IP: ${VM_PUBLIC_IP}
       SSH command: ssh ${ADMIN_USER}@${VM_PUBLIC_IP}
       ```

   - Script name: `2-setup-dns.sh`
     - description: DNS configured and resolving to Static public IPv4
     - prerequisites:
       - A record created in GoDaddy
     - expected output:

       ```text
       DNS setup complete for domain: mydigitallegacyvault.com.au
       ```

2. Server Layer
   - Script name: `3-install-packages.sh`
     - description: Install and update —— ufw, fail2ban, nginx, git, python3, python3-venv, python3-pip, sqlite3,certbot and python3-certbot-nginx
     - prerequisites:
       - ssh to VM — ${ADMIN_USER}@${VM_PUBLIC_IP}
     - expected output:

       ```text
       Package install complete.
       Installed Packages:
         ufw
         fail2ban
         nginx
         git
         python3
         python3-venv
         python3-pip
         sqlite3
         certbot
         python3-certbot-nginx
       ```

   - Script name: `4-harden-server.sh`
     - description: Harden nginx server prior to deployment
       - UFW — allow ports 22, 80 and 443
       - Nginx — enable and start
       - fail2ban — enable and start
       - Denies password authenication and root login
     - prerequisites:
       - ssh to VM — ${ADMIN_USER}@${VM_PUBLIC_IP}
       - Run this script as a non-root user with sudo privileges.
       - Run 1-provision-vm.sh first or set SSH_CIDR manually — SSH_CIDR format: x.x.x.x/32
     - expected output:

       ```text
       Hardening complete.
       Validation commands:
         sudo ufw status verbose
         sudo systemctl status fail2ban --no-pager
         sudo systemctl status nginx --no-pager"
       ```

   - Script name: `5-deploy-nginx.sh`
     - description: Deploys Nginx web server
     - prerequisites:
       - Nginx config file — `nginx.conf`
       - App source directory — `/public`
       - Run this script as a non-root user with sudo privileges.
     - expected output:

       ```text
       Nginx deploy complete."
       Validation commands:"
        curl -I http://localhost"
        curl -I http://localhost/health"
       ```

   - Script name: `6-setup-tls.sh`
     - description: Setup tls certificate with certbot
     - prerequisites:
       - certbot and python3-certbot-nginx installed
       - Nginx config file — `nginx.conf`
       - App source directory — `/public`
       - Run this script as a non-root user with sudo privileges.
     - expected output:

       ```text
       TLS setup complete for mydigitallegacyvault.com.au
       HTTPS validation output:
        curl -I "https://${DOMAIN}" | sed -n '1,10p'
       Admin email setup complete for youemail@example.com
       ```

3. Operations Layer
   - Script name: `7-back-integrity.sh`
     - description:
       - Create backup directory
       - Generate checksum
       - Create backup report
       - Apply file retention policy
       - Create cron job for backups
     - prerequisites:
       - Scripts 1-6 must have run successfully
       - `/var/www/dlv` must exist
       - `/opt/dlv_mvp` directory must exist
       - Run as non-root user with sudo privileges
     - expected output:

       ```text
       Backup and integrity workflow complete."
       Archive: ${ARCHIVE_FILE}"
       Checksum: ${CHECKSUM_FILE}"
       Report: ${REPORT_FILE}"
       ```

   - Script name: `8-verify-server.sh`
     - description: Verifies and checks web server, server hardening, DNS, TLS and Backup Report
       - nginx running
       - fail2ban running
       - UFW rules
       - HTTP response
       - HTTPS response and certificate validity
       - DNS resolution
       - Backup report exists
     - prerequisites:
       - Scripts 1-7 must have run successfully
       - Run as non-root user with sudo privileges
     - expected output:

      ```text
      1. IaaS Layer

      Step 1. Provision Azure VM:

      Status: Success
      Details: VM public IP: ${VM_PUBLIC_IP}
      =========================

      Step 2. DNS configured and resolving to Static public IPv4

      Status: Success
      Details: DNS setup complete for domain: mydigitallegacyvault.com.au
      =========================

      2. Server Layer

      Step 1. Install and update —— ufw, fail2ban, nginx, git, python3, python3-venv, python3-pip, sqlite3,certbot and python3-certbot-nginx

      Status: Success
      Details: Packages successfully installed

      fail2ban 1.0.2-3ubuntu0.1
      git 1:2.43.0-1ubuntu7.3
      nginx 1.24.0-2ubuntu7.6
      python3 3.12.3-0ubuntu2.1
      python3-pip 24.0+dfsg-1ubuntu1.3
      python3-venv 3.12.3-0ubuntu2.1
      sqlite3 3.45.1-1ubuntu2.5
      ufw 0.36.2-6
      certbot 2.6.0-1
      ==========================

      Step 2. Harden nginx server prior to deployment

      Status: Success
      
      Nginx Service
      ===========================
      nginx.service - A high performance web server and a reverse proxy server
      Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled; preset: enabled)
      Active: active (running) since Fri 2026-04-24 11:31:23 UTC; 12min ago
      Docs: man:nginx(8)
      Process: 857 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
      Process: 897 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
      Main PID: 909 (nginx)
      Tasks: 2 (limit: 2245)
      Memory: 3.3M (peak: 3.5M)
      CPU: 20ms
      CGroup: /system.slice/nginx.service
             ├─909 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             └─911 "nginx: worker process"

      Apr 24 11:31:22 vm-dlv-mvp-prod systemd[1]: Starting nginx.service - A high performance web server and a reverse…rver...
      Apr 24 11:31:23 vm-dlv-mvp-prod systemd[1]: Started nginx.service - A high performance web server and a reverse …server.
      ============================

      Fail2ban
      =============================
      fail2ban.service - Fail2Ban Service
      Loaded: loaded (/usr/lib/systemd/system/fail2ban.service; enabled; preset: enabled)
      Active: active (running) since Fri 2026-04-24 11:31:21 UTC; 5min ago
      Docs: man:fail2ban(1)
      Main PID: 820 (fail2ban-server)
      Tasks: 5 (limit: 2245)
      Memory: 55.6M (peak: 57.3M)
      CPU: 501ms
       CGroup: /system.slice/fail2ban.service
               └─820 /usr/bin/python3 /usr/bin/fail2ban-server -xf start
      =============================

      UFW 
      =============================
      Status: active
      Logging: on (low)
      Default: deny (incoming), allow (outgoing), disabled (routed)
      New profiles: skip

      To                         Action      From
      --                         ------      ----
      22/tcp                     ALLOW IN    Anywhere
      80/tcp                     ALLOW IN    Anywhere
      443/tcp                    ALLOW IN    Anywhere
      22/tcp (v6)                ALLOW IN    Anywhere (v6)
      80/tcp (v6)                ALLOW IN    Anywhere (v6)
      443/tcp (v6)               ALLOW IN    Anywhere (v6)
      
      HTTP
      =============================
      HTTP/1.1 200 OK
      Server: nginx/1.24.0 (Ubuntu)
      Date: Fri, 24 Apr 2026 11:45:59 GMT
      Content-Type: text/html
      Content-Length: 16156
      Last-Modified: Sat, 11 Apr 2026 05:11:47 GMT
      Connection: keep-alive
      ETag: "69d9d813-3f1c"
      Accept-Ranges: bytes

      HTTP/1.1 200 OK
      Server: nginx/1.24.0 (Ubuntu)
      Date: Fri, 24 Apr 2026 11:47:05 GMT
      Content-Type: application/octet-stream
      Content-Length: 2
      Connection: keep-alive
      Content-Type: text/plain

      Step 3. TLS Setup with Certbot

      Status: Success
      Details:

      HTTPS
      ==============================
      Placeholder for output from nslookup "https://mydigitallegacyvault.com.au"

      Placeholder for output from curl -I "https://mydigitallegacyvault.com.au"
      ==============================

      2. Operations Layer

      Step 1. Backup Integrity
      Details:

      Backup and integrity workflow complete."
      Archive: ${ARCHIVE_FILE}"
      Checksum: ${CHECKSUM_FILE}"
      Report: ${REPORT_FILE}"
      ```

4. Application Layer
   Placeholder for future Flask deployment scripts

## 9. Validation Strategy

1. IaaS Layer

   - Resource Group, VM, VNet, SubNet, NSG, NIC and Static public IPv4
     - Verify AZ CLI output and Azure Portal config matches
   - DNS configured and resolving to Static public IPv4
     - GoDaddy Portal screenshot of configured A record
     - Verify DNS resolves to Static public IP from CLI
   - Security Controls
     - Verify NSG port rules using CLI output
       - Allow inbound TCP — port 22 limited to public IP CIDR
       - Allow inbound TCP — port 80 from anywhere, HTTP web traffic
       - Allow inbound TCP — port 443 from anywhere, HTTPS web traffic
   - Script `1-provision-vm.sh` runs as designed and completes without errors
   - Script `2-setup-dns.sh` runs as designed and completes without errors

2. Server Layer

   - Package Install — ufw, fail2ban, nginx, git, python3, python3-venv, python3-pip, sqlite3,certbot and python3-certbot-nginx
     - Verify packages installed from CLI, minimum output returned is package name and version
   - Ubuntu OS 24.04 LTS
   - Nginx
     - Verify nginx server is Active and Running from CLI
   - HTTP
     - Verify from command line and returns  HTTP/1.1 200 OK
   - Certbot — verify valid certificate
     - Verify in browser — click padlock icon in address bar and view certificate details
     - Verify domain is reachable from Edge, Chrome and Firefox browsers
   - HTTPS
     - Verify domain [mydigitallegacyvault.com.au](https://mydigitallegacyvault.com.au) using nslookup in CLI returns success and IP
   - fail2ban — verify enabled and started as a systemd service using CLI
   - UFW
     - Verify UFW is Active and Running from CLI
   - Security Controls
     - Verify UFW enabled and explicit allow rules from CLI
       - Allow port 22 SSH — from authorised IP only
       - Allow port 80 HTTP
       - Allow port 443 HTTPS
     - Verify SSH hardening configured using CLI
       - Deny password authentication
       - Deny root login
   - Script `3-install-packages.sh` runs as designed and completes without errors
   - Script `4-harden-server.sh` runs as designed and completes without errors
   - Script `5-deploy-nginx.sh` runs as designed and completes without errors
   - Script `6-setup-tls.sh` runs as designed and completes without errors

3. Operations Layer

   - Backup Reports
     - Verify using CLI the following files exist on the servier
       - Archive: ${ARCHIVE_FILE}
       - Checksum: ${CHECKSUM_FILE}
       - Report: ${REPORT_FILE}"
   - Script `7-backup-integrity.sh` runs as designed and completes without errors

4. Applications Layer

   - App deployment from github repo
     - Verify app can be deployed from github repo
   - App workflow  — account creation to manual approval for executor release
     - Verify each step in workflow completes successfully from account creation to manual approval for executor release
   - Application Roles
     - Owner:
       - verify actions — account creation, add/modify/delete asset records, upload documentation, nominate an executor.
       - verify access level  —  Create, Read, Update, Delete owner records.
       - verify conditions — must nominate executor before vault is active
     - Executor
       - verify actions — must view owner asset records and documentation.
       - verify access level — Read owner asset records.
       - verify conditions — must be approved by Admin to read owner asset records
     - Admin:
       - verify actions — must manage release of owner asset records to executor and workflow state.
       - verify access level — Read owner asset records. Create, Read, Update workflow state.
       - verify conditions — must verify executor identity and confirm probate documentation before approving release
   - Package install
     - Verify packages in requiresments.txt are installed using CLI
   - Security Controls
     - Verify upload security controls are configured using CLI
       - Allowlist file types verified by python-magic
       - File size limit enforced server side
       - UUID rename on storage
       - Store outside web root
   - Public landing page with proposal compliance content.
     - Renders without errors in Edge, Chrome and Firefox browers
5. Documentation and Scripting Layer

   - Git
     - Verify commits — compare CLI output with github portal in browser
   - Scripts
     - Script `8-verify-server.sh` runs as designed and completes without errors
     - All manual and automated scripting executes and completes without errors
   - Evidence
     - Screenshots are taken for each task of validation strategy
     - List of evidence screenshots at minimum meet the assignment documentation requirements
   - Full deployment
     - Verify reproducibility by following build documentation from start to finish

## 10. Risks and Mitigations

1. Risk: command drift between docs and actual state

   - Mitigation: centralize reusable commands in scripts

2. Risk: over-scoping each build phase

   - Mitigation: keep feature gates in `TASKS.md` and execute in sequence

3. Risk: evidence gaps

   - Mitigation: maintain manifest, screenshots and explicit checklist per phase

4. Risk: current basic skill level in bash scripting, networks and flask app builds

   - Mitigation: focus on simple scripts, refer to tutorial materials and external resources to manage skill gaps
  
5. Risk: Time constraint of 110 hrs for build

   - Mitigation: ininclude estimated build time per phase, track hours spent,
  flag early if a phase is running over estimate
  
6. Risk: Documentation and evidence requirements not completed for submission

   - Mitigation: regular git commits, document and build in parallel, confirm all documentation completed at the end of each build phase

7. Risk: Flask app being built from scratch may result in build time estimate inaccuracies

   - Mitigation: Build in small increments with regular testing to identify bugs and issues early and easily identifiable
  
8. Risk: Project costs exceed minimum costs

   - Mitigation: Start VM for testing and stop when not is use, build app locally before deploying for final testing
