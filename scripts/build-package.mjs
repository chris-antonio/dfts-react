// Builds the npm package (lib/) from the existing global-scope sources in src/components.
// The sources stay untouched so the double-click demo (index.html + dist/) keeps working.
// For each component file this script:
//   1. adds `import React from "react"`
//   2. adds imports for any other DFTS components it uses (detected from JSX tags)
//   3. exports the public components
//   4. compiles JSX with esbuild (classic runtime, react stays external)
// It also writes lib/index.js (barrel) and lib/styles.css (tokens + base + all components).
import fs from "node:fs";
import path from "node:path";
import { transform } from "esbuild";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const srcDir = path.join(root, "src/components");
const out = path.join(root, "lib");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "components"), { recursive: true });

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".jsx")).sort();

// public names per file: top-level PascalCase function/var/const that are not ALL_CAPS or *Impl
const isPublic = (n) => /^[A-Z][a-z]/.test(n) && !/Impl$/.test(n);
const owners = {}; // name -> file (without ext)
const declared = {};
for (const f of files) {
  const base = f.replace(/\.jsx$/, "");
  const src = fs.readFileSync(path.join(srcDir, f), "utf8");
  const names = [...src.matchAll(/^(?:function|var|const|let)\s+([A-Za-z_$][\w$]*)/gm)].map((m) => m[1]).filter(isPublic);
  declared[base] = names;
  for (const n of names) {
    if (owners[n]) throw new Error(`Duplicate component name ${n} in ${owners[n]} and ${base}`);
    owners[n] = base;
  }
}

for (const f of files) {
  const base = f.replace(/\.jsx$/, "");
  let src = fs.readFileSync(path.join(srcDir, f), "utf8");
  const deps = {};
  for (const [name, file] of Object.entries(owners)) {
    if (file === base) continue;
    if (new RegExp(`<${name}(?=[\\s/>.])|createElement\\(\\s*${name}\\b`).test(src)) (deps[file] ||= []).push(name);
  }
  const header = [
    'import React from "react";',
    ...Object.entries(deps).map(([file, names]) => `import { ${names.sort().join(", ")} } from "./${file}.js";`),
  ].join("\n");
  const footer = `\nexport { ${declared[base].join(", ")} };\n`;
  const { code } = await transform(`${header}\n${src}${footer}`, { loader: "jsx", jsx: "transform", format: "esm", target: "es2019" });
  fs.writeFileSync(path.join(out, "components", `${base}.js`), code);
}

// barrel
const barrel = files
  .map((f) => f.replace(/\.jsx$/, ""))
  .map((b) => `export { ${declared[b].join(", ")} } from "./components/${b}.js";`)
  .join("\n");
fs.writeFileSync(path.join(out, "index.js"), barrel + "\n");

// stylesheet bundle, in the same order index.html loads them (demo.css excluded)
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const order = [...html.matchAll(/href="styles\/([^"]+\.css)"/g)].map((m) => m[1]).filter((n) => n !== "demo.css");
const all = fs.readdirSync(path.join(root, "styles")).filter((n) => n.endsWith(".css") && n !== "demo.css");
const missing = all.filter((n) => !order.includes(n));
const css = [...order, ...missing].map((n) => `/* ${n} */\n` + fs.readFileSync(path.join(root, "styles", n), "utf8")).join("\n");
fs.writeFileSync(path.join(out, "styles.css"), css);

// minimal type declarations so TypeScript projects can import without errors
const names = Object.keys(owners).sort();
fs.writeFileSync(
  path.join(out, "index.d.ts"),
  `import type { ComponentType } from "react";\n` + names.map((n) => `export const ${n}: ComponentType<any>;`).join("\n") + "\n"
);
console.log(`Built ${files.length} files, ${names.length} exports -> lib/`);
