# GitHub Copilot Instructions — Aruba Cloud API Portal

## Project overview

This is **arubacloud-api-portal**, a [Docusaurus v3](https://docusaurus.io/) static site that publishes interactive API reference documentation for the Aruba Cloud platform. API pages are **auto-generated** from OpenAPI 3.0 spec files using `docusaurus-plugin-openapi-docs` v4.x.

- **Repo:** `Arubacloud/api`
- **License:** Apache 2.0
- **Node.js:** >= 18 | **npm:** >= 10
- **Build output:** `dist/`
- **Deployed to:** GitHub Pages via `.github/workflows/deploy.yml`

---

## Project structure

```
.
├── docs/
│   ├── documents/        ← AUTO-GENERATED — never edit manually
│   └── *.md              ← Hand-written conceptual docs (intro, filters, pagination, etc.)
├── static/
│   └── openapi/          ← Source of truth for all API specs (JSON)
├── src/
│   ├── components/       ← Custom React components (HomepageFeatures, etc.)
│   ├── pages/            ← Custom Docusaurus pages (index.js homepage)
│   ├── css/              ← Global CSS (custom.css)
│   └── theme/            ← Swizzled Docusaurus theme components (Layout.js — GTM/dataLayer)
├── plugins/
│   └── custom-encoding/  ← Custom plugin: injects GTM noscript tag and requestInterceptor.js
├── i18n/
│   ├── en/               ← English translations
│   └── it/               ← Italian translations
├── .github/
│   ├── workflows/deploy.yml       ← CI/CD: build + deploy to GitHub Pages
│   ├── ISSUE_TEMPLATE/            ← Bug, feature, docs, openapi issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── docusaurus.config.js  ← Main Docusaurus config
├── sidebars.js           ← Sidebar config
├── Makefile              ← Developer convenience commands
└── package.json
```

---

## Critical rules

1. **Never edit files inside `docs/documents/`** — they are auto-generated from OpenAPI specs. After any spec change, run:
   ```bash
   make regen-api-docs
   ```
2. **OpenAPI specs live in `static/openapi/`** — these are the source of truth. Editing these and regenerating is the correct workflow.
3. **Versioned compute API:** Compute has two versions (`1.0` in `docs/documents/compute/` and `1.1` in `docs/documents/compute/1.1/`). Regenerate versioned docs separately:
   ```bash
   npm run clean-api-docs:version && npm run gen-api-docs:version
   ```
4. **Build output is `dist/`**, not the default `build/`. Always reference `dist/` for deployment and artifact paths.

---

## Key commands

| Command | What it does |
|---|---|
| `make install` | `npm install` |
| `make start` | Start dev server (auto-installs if needed) |
| `make build` | Build static site to `dist/` |
| `make clean` | Clear Docusaurus cache |
| `make regen-api-docs` | Clean + regenerate ALL API docs (main + versioned) |
| `make pre-pr` | Full local CI check: install → regen-api-docs → build |

Always suggest `make pre-pr` before opening a Pull Request.

---

## API services and their spec files

| Key in config | Spec file | Output dir |
|---|---|---|
| `auditing` | `static/openapi/auditing.json` | `docs/documents/auditing` |
| `baremetal` | `static/openapi/baremetal-provider.json` | `docs/documents/baremetal` |
| `compute` (v1.0) | `static/openapi/compute-provider.json` | `docs/documents/compute` |
| `compute` (v1.1) | `static/openapi/compute-provider_v1.1.json` | `docs/documents/compute/1.1` |
| `container` | `static/openapi/container-provider.json` | `docs/documents/container` |
| `databse` (sic) | `static/openapi/database-provider.json` | `docs/documents/database` |
| `metering` | `static/openapi/metering.json` | `docs/documents/metering` |
| `network` | `static/openapi/network-provider.json` | `docs/documents/network` |
| `project` | `static/openapi/project.json` | `docs/documents/project` |
| `schedule` | `static/openapi/schedule-provider.json` | `docs/documents/schedule` |
| `security` | `static/openapi/security-provider.json` | `docs/documents/security` |
| `storage` | `static/openapi/storage-provider.json` | `docs/documents/storage` |

> Note: the config key for database is `databse` (typo in `docusaurus.config.js`). Do not rename it without also updating the output dir and regenerating.

---

## Docusaurus config highlights

- **Theme registered:** `docusaurus-theme-openapi-docs` — required for `@theme/ApiItem` and all OpenAPI components.
- **Plugin ID:** `"openapi"` (used for `gen-api-docs`/`clean-api-docs` commands).
- **`docItemComponent`:** `"@theme/ApiItem"` — set in the `docs` preset options.
- **Webpack fallback:** A custom inline plugin in `docusaurus.config.js` sets `resolve.fallback: { path: false }` to suppress webpack 5 errors from `postman-code-generators`.
- **Custom plugins:** `custom-encoding` (GTM), `webpack-fallback-plugin` (inline).
- **i18n locales:** `en` (default), `it`.
- **Sidebar:** hideable, configured in `sidebars.js`.
- **Environment variables:** `URL` and `BASE_URL` control the site URL (used in CI via GitHub repo variables).

---

## Custom theme components

- **`src/theme/Layout.js`** — swizzled Layout that pushes `pageview` events to `window.dataLayer` (GTM integration) on every route change. Uses `useLocation` from `@docusaurus/router`.

---

## i18n workflow

Translations are in `i18n/en/` and `i18n/it/`. To extract new translatable strings after adding content:
```bash
npm run write-translations -- --locale it
```

---

## Common issues and fixes

| Error | Cause | Fix |
|---|---|---|
| `Module not found: @theme/ResponseSamples` | Generated docs out of sync with theme version | `make regen-api-docs` |
| `Module not found: path` (postman-code-generators) | webpack 5 no longer polyfills Node core modules | Already fixed via `webpack-fallback-plugin` in `docusaurus.config.js` |
| `Permission denied` on Docusaurus binary (WSL) | Working on `/mnt/c/...` path | Run npm commands from Windows terminal, or work inside WSL home |
| `error: missing required argument 'id'` on gen-api-docs | Missing `all` argument | Scripts already fixed: `docusaurus gen-api-docs all` |
| `node_modules` empty/incomplete | Failed install (often EPERM on Windows paths) | `rm -rf node_modules package-lock.json && npm install` from Windows terminal |

---

## Conventions

- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) — `feat`, `fix`, `docs`, `chore`, `refactor`, `ci`, `openapi`
- **Branches:** `feat/`, `fix/`, `docs/`, `openapi/`, `chore/`
- **PR:** fill in `.github/PULL_REQUEST_TEMPLATE.md`; run `make pre-pr` before opening
- **No manual edits** to `docs/documents/` — always go through OpenAPI spec + regen

---

## CI/CD pipeline (`.github/workflows/deploy.yml`)

Triggers on push to `main` and `workflow_dispatch`. Steps:
1. `npm ci`
2. `npm run clean-api-docs && npm run gen-api-docs` (main configs)
3. `npm run clean-api-docs:version && npm run gen-api-docs:version` (compute v1.1)
4. `npm run build` (outputs to `dist/`)
5. Upload `dist/` as Pages artifact and deploy

Environment variables `SITE_URL` and `BASE_URL` are set via GitHub repository variables (`vars.SITE_URL`, `vars.BASE_URL`).
