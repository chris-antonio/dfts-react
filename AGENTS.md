# DFTS React: instructions for AI assistants

This repo is the DFTS design system as a React kit (`@chris-antonio/dfts-react`): components, CSS design tokens (light and dark) and usage guidelines. Follow these rules when you build UI with it or change it.

## Where to look

- `components.json`: every component, its props, defaults and allowed values, plus its Figma node. Read this before using a component; never guess prop names.
- `DFTS.md`: conventions, accessibility rules, anatomy and states per component, composition patterns, do's and don'ts.
- `DFTS-tokens.md` and `styles/tokens.css`: every design token (CSS custom property) with light and dark values.
- `llms.txt`: index of the above.
- MCP server (`npx dfts-mcp`, see `mcp/`): query components, tokens and guidelines live.

## Using the components

```jsx
import "@chris-antonio/dfts-react/styles.css"; // once, at the app root
import { Button, Alert, TextField } from "@chris-antonio/dfts-react";
```

- Load the Inter and Material Symbols Outlined fonts (see `index.html`).
- Dark mode: set `data-theme="dark"` on `<html>`.
- Pick sizes with the `size` prop (`sm`, `md`, `lg`) and styles with `variant`; do not restyle components with ad hoc CSS.
- Colours, spacing, radii, type sizes and motion come from tokens (`var(--...)`). Never hardcode hex values or pixel sizes that a token covers. Use semantic and component tokens, not raw colour primitives.
- Keep accessibility intact: label every field, keep visible focus styles, use `error` plus `helperText` for validation messages, and do not remove ARIA attributes the components set.

## Changing the kit

- `src/components/*.jsx` is the source of truth. Components are plain function declarations in global scope with no imports, so the double-click demo (`index.html`) keeps working. Do not add `import` statements there; `npm run build` adds them when it generates `lib/`.
- Components use `dfts-*` BEM-style class names and styles in `styles/<component>.css`. Style only through tokens.
- When you add or rename a component or prop: update the component's doc comment (it feeds the manifest, for example `variant: primary|secondary`), add or update its demo in `src/demo.jsx`, and rebuild `dist/` (Babel, classic JSX runtime: `React.createElement`, no `jsx-runtime` imports).
- Run `npm run build`, `npm test` (renders every export) and `npm run docs` (regenerates `components.json` and `llms.txt`). Commit the regenerated files; do not edit them by hand.
- `DFTS-tokens.md` is generated from the Figma token exports. Do not edit it by hand.
- Each component maps to a Figma component set in the "Components" library; the node ids are in `components.json`. Keep names and variants aligned with Figma.
- Code ownership is in `.github/CODEOWNERS`.
