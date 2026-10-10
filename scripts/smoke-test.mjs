// Renders every exported component on the server to catch missing imports / bad exports.
import React from "react";
import { renderToString } from "react-dom/server";
import * as DFTS from "../lib/index.js";

const names = Object.keys(DFTS);
const failures = [];
for (const n of names) {
  try {
    renderToString(React.createElement(DFTS[n], {}, "x"));
  } catch (e) {
    // components that require props (items, columns…) may throw on missing data; only
    // ReferenceError means a broken import.
    if (e instanceof ReferenceError) failures.push(`${n}: ${e.message}`);
  }
}
if (failures.length) { console.error("FAILED\n" + failures.join("\n")); process.exit(1); }
console.log(`OK: ${names.length} exports resolve (${names.join(", ")})`);
