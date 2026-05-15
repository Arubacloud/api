/**
 * Postinstall script: fix docusaurus-theme-openapi-docs@4.1.0 compatibility
 * with Docusaurus 3.10.x.
 *
 * In Docusaurus 3.10.x the internal tabs API changed:
 *   - `useTabs(props)` is now a context READER (throws if not inside TabsContext)
 *   - `useTabsContextValue(props)` is the new state-creation hook
 *   - `TabsProvider` must explicitly wrap children to provide context
 *
 * The openapi theme@4.1.0 was written against the OLD API where `useTabs(props)`
 * was the state creator, so two fixes are needed in each tab component:
 *   1. Replace `useTabs(props)` → `useTabsContextValue(props)`
 *   2. Wrap the returned JSX in `<TabsProvider value={tabs}>` so TabItem children
 *      can read the context via `useTabs()` without throwing.
 */

const fs = require("fs");
const path = require("path");

const components = [
  "SchemaTabs",
  "MimeTabs",
  "OperationTabs",
  "DiscriminatorTabs",
  "ApiTabs",
  path.join("ApiExplorer", "CodeTabs"),
];

// Fix 1: useTabs(props) → useTabsContextValue(props)
const OLD_HOOK = "(0, internal_1.useTabs)(props)";
const NEW_HOOK = "(0, internal_1.useTabsContextValue)(props)";

// Fix 2a: inject TabsProvider wrapper at the start of TabsComponent's return.
// Standard components (SchemaTabs, MimeTabs, etc.) go directly to the return.
// CodeTabs is special: it has "const { className } = props;" before the return.
const OLD_RETURN_START =
  "  const tabs = (0, internal_1.useTabsContextValue)(props);\n  return react_1.default.createElement(\n    \"div\",";
const NEW_RETURN_START =
  "  const tabs = (0, internal_1.useTabsContextValue)(props);\n  return react_1.default.createElement(\n    internal_1.TabsProvider,\n    { value: tabs },\n    react_1.default.createElement(\n    \"div\",";

// CodeTabs-specific pattern (has extra "const { className } = props;" line)
const OLD_RETURN_START_CODETABS =
  "  const tabs = (0, internal_1.useTabsContextValue)(props);\n  const { className } = props;\n  return react_1.default.createElement(\n    \"div\",";
const NEW_RETURN_START_CODETABS =
  "  const tabs = (0, internal_1.useTabsContextValue)(props);\n  const { className } = props;\n  return react_1.default.createElement(\n    internal_1.TabsProvider,\n    { value: tabs },\n    react_1.default.createElement(\n    \"div\",";

// Fix 2b: close the extra TabsProvider createElement at the end of TabsComponent
const OLD_RETURN_END =
  "    react_1.default.createElement(TabContent, { ...props, ...tabs })\n  );\n}";
const NEW_RETURN_END =
  "    react_1.default.createElement(TabContent, { ...props, ...tabs })\n    )\n  );\n}";

let patchedCount = 0;

for (const component of components) {
  const filePath = path.join(
    __dirname,
    "node_modules",
    "docusaurus-theme-openapi-docs",
    "lib",
    "theme",
    component,
    "index.js"
  );

  if (!fs.existsSync(filePath)) {
    console.warn(`[postinstall] Warning: ${filePath} not found, skipping.`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");
  // Normalize to LF so patterns work on both Windows (CRLF) and Linux (LF)
  content = content.replace(/\r\n/g, "\n");
  let changed = false;

  // Fix 1
  if (content.includes(OLD_HOOK)) {
    content = content.replaceAll(OLD_HOOK, NEW_HOOK);
    changed = true;
    console.log(`[postinstall] ${component}: patched useTabs -> useTabsContextValue`);
  } else if (!content.includes(NEW_HOOK)) {
    console.log(`[postinstall] ${component}: useTabs fix not needed.`);
  }

  // Fix 2a
  if (content.includes(OLD_RETURN_START)) {
    content = content.replace(OLD_RETURN_START, NEW_RETURN_START);
    changed = true;
    console.log(`[postinstall] ${component}: injected TabsProvider wrapper (start)`);
  } else if (content.includes(OLD_RETURN_START_CODETABS)) {
    content = content.replace(OLD_RETURN_START_CODETABS, NEW_RETURN_START_CODETABS);
    changed = true;
    console.log(`[postinstall] ${component}: injected TabsProvider wrapper (start, CodeTabs variant)`);
  } else if (!content.includes(NEW_RETURN_START) && !content.includes(NEW_RETURN_START_CODETABS)) {
    console.warn(`[postinstall] ${component}: could not find TabsProvider start pattern — skipping.`);
  }

  // Fix 2b
  if (content.includes(OLD_RETURN_END)) {
    content = content.replace(OLD_RETURN_END, NEW_RETURN_END);
    changed = true;
    console.log(`[postinstall] ${component}: injected TabsProvider wrapper (end)`);
  } else if (!content.includes(NEW_RETURN_END)) {
    console.warn(`[postinstall] ${component}: could not find TabsProvider end pattern — skipping.`);
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
    patchedCount++;
  } else {
    console.log(`[postinstall] ${component}: already patched or not affected.`);
  }
}

console.log(`[postinstall] Done. Patched ${patchedCount} component(s).`);

// Fix 3: @docusaurus/plugin-content-docs@3.10.x introduced a strict check that
// throws when multiple sidebar items share the same translation key. The sidebar
// in this project has unavoidable duplicates (e.g. "Backup" in both the Storage
// and Container API generated sidebars). Downgrade the error to a warning so
// the `it` locale build does not fail while preserving all other behaviour.
const translationsFilePath = path.join(
  __dirname,
  "node_modules",
  "@docusaurus",
  "plugin-content-docs",
  "lib",
  "translations.js"
);

if (fs.existsSync(translationsFilePath)) {
  let tContent = fs.readFileSync(translationsFilePath, "utf8");
  tContent = tContent.replace(/\r\n/g, "\n");

  const OLD_THROW =
    "    if (duplicates.length > 0) {\n        throw new Error(`Multiple docs sidebar items produce the same translation key.";
  const NEW_THROW =
    "    if (duplicates.length > 0) {\n        console.warn(`[postinstall] Multiple docs sidebar items produce the same translation key.";

  if (tContent.includes(OLD_THROW)) {
    tContent = tContent.replace(OLD_THROW, NEW_THROW);
    fs.writeFileSync(translationsFilePath, tContent, "utf8");
    console.log("[postinstall] translations.js: downgraded duplicate-sidebar-key error to warning.");
  } else if (tContent.includes(NEW_THROW)) {
    console.log("[postinstall] translations.js: already patched.");
  } else {
    console.warn("[postinstall] translations.js: could not find duplicate-key throw pattern — skipping.");
  }
} else {
  console.warn(`[postinstall] Warning: ${translationsFilePath} not found, skipping.`);
}
