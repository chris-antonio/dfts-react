#!/usr/bin/env node
// DFTS MCP server (stdio, no dependencies). Lets AI assistants query components, tokens and guidelines.
// Run: npx dfts-mcp   (or: node mcp/server.mjs)
// Tools: list_components, get_component, search_tokens, get_guidelines
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");
const manifest = () => JSON.parse(read("components.json"));

function parseTokens() {
  const css = read("styles/tokens.css");
  const dark = css.indexOf('[data-theme="dark"]');
  const grab = (s) => Object.fromEntries([...s.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
  const light = grab(dark === -1 ? css : css.slice(0, dark));
  const darkMap = dark === -1 ? {} : grab(css.slice(dark));
  return Object.keys(light).map((name) => ({ name: `--${name}`, light: light[name], dark: darkMap[name] ?? light[name] }))
    .concat(Object.keys(darkMap).filter((n) => !(n in light)).map((n) => ({ name: `--${n}`, light: undefined, dark: darkMap[n] })));
}

function sections() {
  const md = read("DFTS.md");
  const parts = md.split(/^(?=#{1,3} )/m).filter((s) => s.trim());
  return parts.map((s) => ({ title: s.split("\n", 1)[0].replace(/^#+\s*/, ""), text: s.trim() }));
}

const text = (t) => ({ content: [{ type: "text", text: typeof t === "string" ? t : JSON.stringify(t, null, 2) }] });
const fail = (m) => ({ isError: true, content: [{ type: "text", text: m }] });

const tools = {
  list_components: {
    description: "List every DFTS component with a one-line description and its source file.",
    inputSchema: { type: "object", properties: {} },
    run: () => text(manifest().components.map((c) => ({ name: c.name, description: c.description.slice(0, 160), source: c.source }))),
  },
  get_component: {
    description: "Get one component: props with defaults and allowed values, source and style files, and its Figma component.",
    inputSchema: { type: "object", properties: { name: { type: "string", description: "Component name, e.g. Button" } }, required: ["name"] },
    run: ({ name }) => {
      const c = manifest().components.find((x) => x.name.toLowerCase() === String(name || "").toLowerCase());
      return c ? text(c) : fail(`No component named "${name}". Call list_components for the available names.`);
    },
  },
  search_tokens: {
    description: "Search design tokens (CSS custom properties) by substring, e.g. 'Button-md' or 'content-brand'. Returns light and dark values.",
    inputSchema: { type: "object", properties: { query: { type: "string" }, limit: { type: "number", description: "Max results, default 50" } }, required: ["query"] },
    run: ({ query, limit = 50 }) => {
      const q = String(query || "").replace(/^--/, "").toLowerCase();
      const hits = parseTokens().filter((t) => t.name.toLowerCase().includes(q));
      return text({ total: hits.length, tokens: hits.slice(0, limit) });
    },
  },
  get_guidelines: {
    description: "Read DFTS.md usage guidelines. Pass a heading keyword (e.g. 'Accessibility', 'Button', 'Do') to get matching sections; omit it to list all headings.",
    inputSchema: { type: "object", properties: { topic: { type: "string" } } },
    run: ({ topic }) => {
      const all = sections();
      if (!topic) return text(all.map((s) => s.title));
      const hits = all.filter((s) => s.title.toLowerCase().includes(String(topic).toLowerCase()));
      return hits.length ? text(hits.map((s) => s.text).join("\n\n")) : fail(`No guideline heading matches "${topic}".`);
    },
  },
};

const send = (m) => process.stdout.write(JSON.stringify({ jsonrpc: "2.0", ...m }) + "\n");

function handle(msg) {
  const { id, method, params } = msg;
  if (id === undefined) return; // notification, e.g. notifications/initialized
  try {
    if (method === "initialize") {
      return send({ id, result: { protocolVersion: params?.protocolVersion || "2024-11-05", capabilities: { tools: {} }, serverInfo: { name: "dfts", version: "0.1.0" } } });
    }
    if (method === "ping") return send({ id, result: {} });
    if (method === "tools/list") {
      return send({ id, result: { tools: Object.entries(tools).map(([name, t]) => ({ name, description: t.description, inputSchema: t.inputSchema })) } });
    }
    if (method === "tools/call") {
      const t = tools[params?.name];
      if (!t) return send({ id, error: { code: -32602, message: `Unknown tool: ${params?.name}` } });
      return send({ id, result: t.run(params.arguments || {}) });
    }
    return send({ id, error: { code: -32601, message: `Method not found: ${method}` } });
  } catch (e) {
    return send({ id, result: fail(`Error: ${e.message}`) });
  }
}

readline.createInterface({ input: process.stdin }).on("line", (line) => {
  if (!line.trim()) return;
  try { handle(JSON.parse(line)); } catch { send({ id: null, error: { code: -32700, message: "Parse error" } }); }
});
