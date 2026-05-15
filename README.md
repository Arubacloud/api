# Aruba Cloud API Portal

[![Deploy to GitHub Pages](https://github.com/Arubacloud/api/actions/workflows/deploy.yml/badge.svg)](https://github.com/Arubacloud/api/actions/workflows/deploy.yml)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)

The **Aruba Cloud API Portal** is the official developer documentation site for the [Aruba Cloud](https://arubacloud.com) platform APIs. It is built with [Docusaurus v3](https://docusaurus.io/) and auto-generates interactive API reference pages from OpenAPI specifications.

## Features

- Interactive API reference for all Aruba Cloud services
- Auto-generated from OpenAPI 3.0 specs using [docusaurus-plugin-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)
- Versioned API documentation (e.g. Compute API v1.0 and v1.1)
- Multilingual support (English and Italian)
- Full-text search powered by [docusaurus-lunr-search](https://github.com/praveenn77/docusaurus-lunr-search)
- Deployed automatically to GitHub Pages on every push to `main`

## Covered APIs

| Service | Spec file |
|---|---|
| Auditing | `static/openapi/auditing.json` |
| Bare Metal | `static/openapi/baremetal-provider.json` |
| Compute (v1.0, v1.1) | `static/openapi/compute-provider.json` |
| Container | `static/openapi/container-provider.json` |
| Database (DBaaS) | `static/openapi/database-provider.json` |
| Metering | `static/openapi/metering.json` |
| Network | `static/openapi/network-provider.json` |
| Project | `static/openapi/project.json` |
| Schedule | `static/openapi/schedule-provider.json` |
| Security | `static/openapi/security-provider.json` |
| Storage | `static/openapi/storage-provider.json` |

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm >= 10
- [Make](https://www.gnu.org/software/make/) (optional, for convenience commands)

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Arubacloud/api.git
cd api

# 2. Install dependencies
npm install

# 3. Generate API docs from OpenAPI specs
npm run gen-api-docs

# 4. Start the development server
npm run start
```

The site will be available at **http://localhost:3000**.

## Available Commands

| Command | Description |
|---|---|
| `make install` / `npm install` | Install all dependencies |
| `make start` / `npm run start` | Start local development server |
| `make build` / `npm run build` | Build the static site to `dist/` |
| `make clean` / `npm run clear` | Clear the Docusaurus build cache |
| `make gen-api-docs` | Generate API docs from OpenAPI specs |
| `make clean-api-docs` | Remove all generated API doc files |
| `make regen-api-docs` | Clean and regenerate all API docs (including versioned) |

## Project Structure

```
.
├── docs/                  # Documentation pages
│   └── documents/         # Auto-generated API reference pages (do not edit manually)
├── static/
│   └── openapi/           # OpenAPI spec files (source of truth for API docs)
├── src/                   # Custom React components and pages
├── plugins/               # Custom Docusaurus plugins
├── i18n/                  # Translations (en, it)
├── docusaurus.config.js   # Docusaurus configuration
├── sidebars.js            # Sidebar configuration
└── Makefile               # Convenience commands
```

> **Note:** Files inside `docs/documents/` are auto-generated from the OpenAPI specs. Do not edit them manually — update the spec files in `static/openapi/` instead, then run `make regen-api-docs`.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute, report bugs, or request features.

## License

This project is licensed under the [Apache License 2.0](LICENSE).

---

© Aruba S.p.A. — via San Clemente, 53 — 24036 Ponte San Pietro (BG) — All rights reserved.
