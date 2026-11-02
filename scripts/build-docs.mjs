// Generates components.json and llms.txt from src/components/*.jsx.  Usage: npm run docs
import fs from "node:fs";
import path from "node:path";
import { buildDocs } from "./lib/docs.mjs";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const componentFiles = fs.readdirSync(path.join(root, "src/components")).filter((f) => f.endsWith(".jsx"));

const out = await buildDocs({
  readText: async (p) => fs.readFileSync(path.join(root, p), "utf8"),
  componentFiles,
  stylesExist: (p) => fs.existsSync(path.join(root, p)),
  version: pkg.version,
});
for (const [name, text] of Object.entries(out)) {
  fs.writeFileSync(path.join(root, name), text);
  console.log("wrote", name, `(${text.length} bytes)`);
}
