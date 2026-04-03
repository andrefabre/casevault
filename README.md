# ICT171 Cloud Server Project: MyDigitalLegacyVault Phase 1 MVP

The Digital Legacy Vault Phase 1 MVP is a strategic response to the difficulty of managing digital estates. Currently, important assets are often lost in a disorganized mix of local devices and disparate cloud accounts, creating significant hurdles for retrieval during a crisis. This project provides a functional foundation by establishing a streamlined core workflow. Through a secure web portal, owners can build vault profiles, upload critical files, and designate executors while monitoring their status. An administrative layer provides necessary oversight, ensuring that all submissions meet specific requirements and that the lifecycle of each record is correctly managed through the platform’s backend.

Security is integrated into every layer of the technical stack. Deployed on an IaaS virtual machine, the platform utilizes a controlled domain and HTTPS for secure communication. The system separates sensitive document storage, which is fully encrypted, from the relational database used for metadata. A robust role-based access control system ensures that owners, executors, and administrators operate strictly within their designated permissions. To maintain a transparent security posture, audit logs record all significant activities, including permission updates and file access. A key feature of Phase 1 is the release simulation mode, which permits executors read-only access only after admin authorization. This provides a safe environment for testing the user experience without implementing automated legal triggers.

The project also features a custom scripting component designed to automate maintenance tasks like daily backups and integrity checks. These scripts produce verifiable reports on storage usage and security events, moving beyond simple lab exercises to provide real-world utility. By successfully implementing SSL/TLS, Linux hosting, and secure file handling, this MVP creates a solid architectural blueprint. It sets the stage for a future SaaS product that will include advanced encryption governance, automated compliance checks, and a scalable service model built on professional delivery and trust.

## Project Purpose

The project addresses a common real-world risk: critical personal records are distributed across devices and services, making access and continuity difficult during emergency or estate events.

This Cloud Server Project provides:

1. A hosted web interface for presenting project functionality.
2. A security-focused architecture baseline suitable for staged MVP delivery.
3. Evidence-oriented operational practices such as backup, logging, and integrity verification.

## Scope

Current scope includes:

1. Front-end project pages served from the application and public assets.
2. Deployment-ready Next.js structure for cloud-hosted delivery.
3. Foundation controls for HTTPS-first hosting, access separation, and auditability.

## Architecture Summary

1. Application layer: Next.js application with static/public asset delivery.
2. Hosting layer: Cloud virtual server (IaaS) with web server and TLS termination.
3. Data handling model: Sensitive-file workflow design with secure handling principles.
4. Operations layer: Scheduled backup, log lifecycle management, and integrity checks.

## Security and Reliability Baseline

The project is managed with a security-first approach:

1. HTTPS/TLS for transport confidentiality and integrity.
2. Role-aware access model (owner/executor/admin design intent).
3. Audit logging for key events and state transitions.
4. Automation for backup verification and basic operational health evidence.
5. Modular structure to support controlled feature expansion.

## Technology Stack

1. Next.js
2. React
3. TypeScript
4. Static public assets for project content

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open browser:

http://localhost:3000

## Repository Structure

1. app/: Next.js app router files and global styling.
2. public/: Static assets including html, css, js, and images.
3. Configuration files: package.json, tsconfig.json, next.config.js.

## Delivery Intent

This repository is the clean documentation and implementation base for the Cloud Server Project submission and ongoing iteration.

Planned delivery progression:

1. Establish secure cloud deployment baseline.
2. Demonstrate hosting and domain/TLS configuration.
3. Add staged feature slices with traceable security controls.
4. Maintain evidence artifacts for backup, logging, and integrity outcomes.

## License

This project is licensed under the MIT License. See LICENSE for details.
