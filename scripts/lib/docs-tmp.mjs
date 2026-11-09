// Builds components.json (machine-readable component manifest) and llms.txt (docs index for language models)
// from src/components/*.jsx. Pure functions: the caller supplies `readText(path)` and the list of component
// files, so the same code runs in Node (scripts/build-docs.mjs) and anywhere that can fetch text.

// Figma component-set node ids in the "Components" library (file XDwmzlvcfKlbuogKzMMM4G).
export const FIGMA_FILE = "XDwmzlvcfKlbuogKzMMM4G";
export const FIGMA_NODES = {
  Button: "56:111", Filter: "61:13", SegmentedControl: "162:6", Tile: "65:63", Accordion: "69:47",
  BottomSheet: "77:22", Card: "68:27", Carousel: "78:3", Modal: "74:45", Table: "165:251", Checkbox: "58:275",
  DatePicker: "76:3", PhoneField: "101:169", RadioButton: "59:129", Select: "60:197", Switch: "59:275",
  TextArea: "60:105", TextField: "60:78", Alert: "61:80", Chip: "58:75", Loader: "61:141",
  ProgressLine: "61:163", Toast: "61:97", Tooltip: "61:115", Breadcrumbs: "165:204", Link: "59:313",
  Menu: "165:198", Tabs: "165:177", Avatar: "59:345", Divider: "141:2",
};

const kebab = (s) => s.replace(/(?<!^)(?=[A-Z])/g, "-").toLowerCase();
const isPublic = (n) => /^[A-Z][a-z]/.test(n) && !/Impl$/.test(n);

// Split on commas that are not nested inside (), [], {} or strings.
function splitTop(s) {
  const out = [];
  let depth = 0, cur = "", q = null;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { cur += c; if (c === q && s[i - 1] !== "\\") q = null; continue; }
    if (c === '"' || c === "'" || c === "`") { q = c; cur += c; continue; }
    if ("([{".includes(c)) depth++;
    if (")]}".includes(c)) depth--;
    if (c === "," && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += c;
  }
  if (cur.trim()) out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

// Returns the text between the braces that start at `open` (index of "{").
function braceBody(src, open) {
  let depth = 0, q = null;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (q) { if (c === q && src[i - 1] !== "\\") q = null; continue; }
    if (c === '"' || c === "'" || c === "`") { q = c; continue; }
    if (c === "{") depth++;
    if (c === "}") { depth--; if (depth === 0) return src.slice(open + 1, i); }
  }
  return "";
}

// Enum-like options written in doc comments, e.g. "variant: primary|secondary|ghost".
function docOptions(doc) {
  const opts = {};
  for (const m of doc.matchAll(/\b(\w+):\s*((?:[\w-]+\s*\|\s*)+[\w-]+)/g)) opts[m[1]] = m[2].split("|").map((x) => x.trim());
  return opts;
}

function cleanDoc(raw) {
  return raw
    .replace(/^\/\*\*|\*\/$/g, "")
    .split("\n")
    .map((l) => l.replace(/^\s*\*\s?/, "").trim())
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function parseComponentFile(file, src) {
  const base = file.replace(/\.jsx$/, "");
  const comps = [];
  const fileDoc = (src.match(/^\s*(\/\*\*[\s\S]*?\*\/)/) || [])[1];
  const re = /^function\s+([A-Z][A-Za-z0-9_]*)\s*\(\s*\{/gm;
  let m;
  while ((m = re.exec(src))) {
    const rawName = m[1];
    const name = rawName.replace(/Impl$/, "");
    if (!isPublic(rawName) && !/Impl$/.test(rawName)) continue;
    if (!/^[A-Z][a-z]/.test(name)) continue;
    const open = src.indexOf("{", m.index + m[0].length - 1);
    const params = splitTop(braceBody(src, open));
    // JSDoc block directly above the function, else the file header comment.
    const before = src.slice(0, m.index);
    const direct = (before.match(/(\/\*\*[\s\S]*?\*\/)\s*$/) || [])[1];
    const docRaw = direct || fileDoc || "";
    const doc = cleanDoc(docRaw);
    const options = docOptions(doc);
    const props = params.map((p) => {
      if (p.startsWith("...")) return { name: p.slice(3), rest: true };
      const eq = p.indexOf("=");
      const pname = (eq === -1 ? p : p.slice(0, eq)).trim();
      const def = eq === -1 ? undefined : p.slice(eq + 1).trim();
      const prop = { name: pname };
      if (def !== undefined) {
        prop.required = false;
        try { prop.default = JSON.parse(def.replace(/^'(.*)'$/, '"$1"')); } catch { prop.default = def; }
      } else {
        prop.required = false; // JS component: every prop is optional at runtime
      }
      if (options[pname]) prop.options = options[pname];
      if (typeof prop.default === "boolean") prop.type = "boolean";
      else if (typeof prop.default === "number") prop.type = "number";
      else if (typeof prop.default === "string") prop.type = prop.options ? "enum" : "string";
      else if (/^(on[A-Z]|set[A-Z])/.test(pname)) prop.type = "function";
      else if (pname === "children") prop.type = "node";
      return prop;
    }).filter((p) => !p.rest);
    comps.push({
      name,
      description: doc,
      source: `src/components/${base}.jsx`,
      styles: `styles/${kebab(base)}.css`,
      props,
    });
  }
  return comps;
}

// One-line summary for llms.txt: drop the "§" reference and cut at ~160 characters on a sentence/word boundary.
function short(d) {
  const t = d.replace(/\s*DFTS\.md §[\d.]+\s*[—-]?\s*/g, " ").trim();
  if (t.length <= 160) return t;
  const cut = t.slice(0, 160);
  const dot = cut.lastIndexOf(". ");
  return dot > 60 ? cut.slice(0, dot + 1) : cut.slice(0, cut.lastIndexOf(" ")) + "…";
}

export async function buildDocs({ readText, componentFiles, stylesExist = () => true, repo = "chris-antonio/dfts-react", version = "0.1.0" }) {
  const components = [];
  for (const f of [...componentFiles].sort()) {
    const src = await readText(`src/components/${f}`);
    for (const c of parseComponentFile(f, src)) {
      if (!stylesExist(c.styles)) delete c.styles;
      if (FIGMA_NODES[c.name]) {
        c.figma = { file: FIGMA_FILE, node: FIGMA_NODES[c.name], url: `https://www.figma.com/design/${FIGMA_FILE}/Components?node-id=${FIGMA_NODES[c.name].replace(":", "-")}` };
      }
      components.push(c);
    }
  }
  components.sort((a, b) => a.name.localeCompare(b.name));
  const manifest = {
    $comment: "Generated by scripts/build-docs.mjs from src/components/*.jsx. Do not edit by hand; run `npm run docs`.",
    name: "@chris-antonio/dfts-react",
    version,
    usage: {
      package: 'import { Button } from "@chris-antonio/dfts-react"; import "@chris-antonio/dfts-react/styles.css";',
      noBuild: "Open index.html: all components are plain globals loaded with script tags (no imports).",
      darkMode: 'Set data-theme="dark" on <html>.',
    },
    docs: { guidelines: "DFTS.md", tokens: "DFTS-tokens.md", tokensCss: "styles/tokens.css" },
    components,
  };

  const raw = (p) => `https://raw.githubusercontent.com/${repo}/main/${p}`;
  const lines = [
    "# DFTS React",
    "",
    "> DFTS is a token-driven design system: React components, CSS design tokens (light and dark) and usage guidelines. Components are function components styled with `dfts-*` class names and CSS custom properties from `styles/tokens.css`. Package: `@chris-antonio/dfts-react`.",
    "",
    "Import components from the package and load `styles.css` once at the app root. Set `data-theme=\"dark\"` on `<html>` for dark mode. Never hardcode colours, spacing or radii: use the tokens.",
    "",
    "## Docs",
    "",
    `- [UI generation guide](${raw("DFTS.md")}): conventions, accessibility rules, anatomy and states for every component, composition patterns, do's and don'ts`,
    `- [Design tokens](${raw("DFTS-tokens.md")}): every CSS variable with its light and dark value`,
    `- [Component manifest](${raw("components.json")}): JSON description of every component, its props, defaults and allowed values`,
    `- [README](${raw("README.md")}): install, build and publish`,
    `- [Agent instructions](${raw("AGENTS.md")}): rules for AI coding assistants working with this kit`,
    "",
    "## Components",
    "",
    ...components.map((c) => `- [${c.name}](${raw(c.source)}): ${short(c.description) || c.name}`),
    "",
    "## Optional",
    "",
    `- [Styles](${raw("styles/tokens.css")}): token definitions as CSS custom properties`,
    `- [Figma library](https://www.figma.com/design/${FIGMA_FILE}/Components): the design source for every component`,
    "",
  ];
  return { "components.json": JSON.stringify(manifest, null, 2) + "\n", "llms.txt": lines.join("\n") };
}
