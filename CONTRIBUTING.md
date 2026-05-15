# Contributing to Aruba Cloud API Portal

Thank you for your interest in contributing! This document explains how to set up the project locally, contribute code or documentation, and follow the project conventions.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Updating OpenAPI Specs](#updating-openapi-specs)
- [Commit Message Convention](#commit-message-convention)
- [Pull Request Process](#pull-request-process)
- [Troubleshooting](#troubleshooting)

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you agree to uphold it. Please report unacceptable behavior to the maintainers.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm >= 10
- [Make](https://www.gnu.org/software/make/) (optional)
- **WSL users:** Clone and work inside your Linux home directory (e.g. `/home/youruser/`) to avoid file permission issues with npm scripts. If you work on `/mnt/c/...`, use a Windows terminal (PowerShell or CMD) for all npm commands.

### Setup

```bash
# Clone the repository
git clone https://github.com/Arubacloud/api.git
cd api

# Install dependencies
npm install

# Generate API docs from OpenAPI specs
npm run gen-api-docs

# Start the development server
npm run start
# → http://localhost:3000
```

To stop the server, press `Ctrl+C`.

---

## Development Workflow

1. **Fork** the repository and create a branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make your changes.
3. Build and test locally before committing:
   ```bash
   npm run build
   ```
4. Commit using the [convention below](#commit-message-convention).
5. Push your branch and open a Pull Request against `main`.

### Branch naming

| Prefix | Use case |
|---|---|
| `feat/` | New feature or content |
| `fix/` | Bug fix |
| `docs/` | Documentation only |
| `openapi/` | OpenAPI spec update |
| `chore/` | Tooling, CI, dependencies |

---

## Updating OpenAPI Specs

All API reference pages are **auto-generated** from the spec files in `static/openapi/`. Do not edit files inside `docs/documents/` directly.

To update an API:

1. Update the relevant file in `static/openapi/` (e.g. `compute-provider.json`).
2. Regenerate the docs:
   ```bash
   make regen-api-docs
   # or
   npm run clean-api-docs && npm run gen-api-docs
   ```
3. For versioned APIs (e.g. Compute v1.1):
   ```bash
   npm run clean-api-docs:version && npm run gen-api-docs:version
   ```
4. Review the generated pages in the dev server.
5. Commit both the updated spec and the regenerated docs.

---

## Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): <short description>

[optional body]

[optional footer]
```

Common types: `feat`, `fix`, `docs`, `chore`, `refactor`, `ci`.

Examples:
```
feat(openapi): add compute v1.2 spec
fix(docs): correct broken link in storage API page
docs: update CONTRIBUTING with versioned API steps
chore(ci): update deploy workflow Node version to 22
```

---

## Pull Request Process

1. Ensure the site builds without errors (`npm run build`).
2. If you updated an OpenAPI spec, confirm you ran `make regen-api-docs`.
3. Fill in the PR template fully.
4. At least one maintainer review is required before merging.
5. Squash-merge is preferred for a clean history.

---

## Troubleshooting

### `Permission denied` when running Docusaurus (WSL)

This happens when working on `/mnt/c/...`. Solutions:
- Move the project to your Linux home directory, or
- Use a Windows terminal for all npm/make commands, or
- Try: `chmod +x node_modules/.bin/docusaurus` (may not work on Windows-mounted paths)

### `Module not found: @theme/ResponseSamples`

The generated API docs are out of sync with the installed theme. Run:
```bash
make regen-api-docs
```

### `node_modules` missing or incomplete

Delete and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

For questions, open a [GitHub Discussion](https://github.com/Arubacloud/api/discussions) or file an issue using the appropriate template.
