# Makefile for Docusaurus Project

# Variables
NPM=npm
DOCUSAURUS=docusaurus

.PHONY: install build start clean lint format docs gen-api-docs clean-api-docs regen-api-docs pre-pr

install:
	$(NPM) install

build:
	$(NPM) run build

start:
	@if [ ! -d node_modules ] || [ -z "$(shell ls -A node_modules)" ]; then \
	  $(MAKE) install; \
	fi
	$(NPM) run start

clean:
	$(NPM) run clear || $(NPM) run clean || rm -rf build .docusaurus node_modules

lint:
	$(NPM) run lint || echo "No lint script defined."

format:
	$(NPM) run format || echo "No format script defined."

gen-api-docs:
	$(NPM) run gen-api-docs

clean-api-docs:
	$(NPM) run clean-api-docs

regen-api-docs: clean-api-docs gen-api-docs
	$(NPM) run clean-api-docs:version
	$(NPM) run gen-api-docs:version

docs:
	$(NPM) run docs || echo "No docs script defined."

##
## pre-pr: run all checks locally before raising a Pull Request.
## Mirrors the CI pipeline: install → regen API docs → build.
## A successful run means the CI is very likely to pass.
##
pre-pr: install regen-api-docs build
	@echo ""
	@echo "✅  pre-pr checks passed. Safe to open a Pull Request."

