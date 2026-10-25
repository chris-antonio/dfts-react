# DFTS React Component Kit

A React implementation of all 24 components documented in `DFTS.md` (plus the `TextArea`, `Select` and `PhoneField` input variants from the Figma Components library, in `InputFields.jsx`), built against
the tokens in `DFTS-tokens.md`, plus an interactive demo page with a light/dark
theme switch.

## Quick start

Unzip and double-click `index.html`. No build step, no `npm install`, no local
server required. It needs internet access once, to load the Material Symbols
icon font and Inter typeface from Google Fonts — everything else (React, all
components) is bundled locally and works offline.

## Use as an npm package

```bash
npm install @chris-antonio/dfts-react react react-dom
# or straight from GitHub, no npm account needed:
npm install github:chris-antonio/dfts-react react react-dom
```

```jsx
import "@chris-antonio/dfts-react/styles.css"; // tokens + base + all component styles, once at the app root
import { Button, Alert, Table } from "@chris-antonio/dfts-react";
```

Dark mode: set `data-theme="dark"` on `<html>`. Load the Inter and Material Symbols fonts
(see `index.html`) in your app.

### How the package is built

`src/components/*.jsx` stays the source of truth and keeps the no-build demo working.
`npm run build` (also run automatically on install from GitHub) generates `lib/`: it adds the
`react` import, the imports between components and the exports, compiles JSX and bundles the CSS.
`npm test` renders every export to catch broken imports.

### Publishing a release

1. Bump `version` in `package.json` (semver: breaking change = major) and commit.
2. `npm login`, then `npm publish --access public`, or create a GitHub Release tagged `vX.Y.Z`
   and let `.github/workflows/publish.yml` publish (needs an `NPM_TOKEN` repo secret).
3. Tag every version on GitHub: design system health tools read releases to track adoption and outdated usage.

If you publish under another name, change `name` in `package.json`. The npm scope must match your npm username or organisation.

## What's in the box

```
index.html                 ← open this
vendor/                     React 18 + ReactDOM 18 (UMD, bundled locally)
styles/
  tokens.css                 All DFTS design tokens as CSS custom properties (light + dark)
  base.css                   Resets + text-style utility classes
  demo.css                   Layout chrome for the demo page only (not a DFTS component)
  <component>.css             One stylesheet per component, e.g. button.css, modal.css
src/
  components/*.jsx            ← the actual deliverable: one JSX source file per component
  demo.jsx                    The demo app (renders every component with live interactions)
dist/
  components/*.js             Pre-compiled (JSX → React.createElement) versions of src/components
  demo.js                     Pre-compiled version of demo.jsx
```

`index.html` loads the files in `dist/`, not `src/`, because browsers can't run
JSX directly. `src/` is the source of truth — read and edit those files; `dist/`
is generated output (see "Rebuilding" below).

## Using components in your own project

Each file in `src/components/` is a standalone React function component with no
import statements — written for the no-build setup in this kit, where all
components share the global scope. To use one in a real bundler-based project
(Vite, Next.js, CRA, etc.):

1. Copy the `.jsx` file and its matching `.css` file from `styles/`.
2. Add `export` to the component function(s).
3. Add `import` statements for anything the file references from another
   component (e.g. `Chip.jsx` doesn't need anything, but `Table.jsx` uses
   `Checkbox` from `FormControls.jsx`, and most components use the shared
   `Icon` helper from `Icon.jsx`).
4. Import `tokens.css` and `base.css` once at your app root, then import each
   component's CSS file alongside its `.jsx` file.

See `DFTS.md` §2 for the naming/state conventions these components follow.

## Rebuilding dist/ after editing src/

If you edit a file in `src/components/` or `src/demo.jsx`, regenerate `dist/`
with Babel (JSX → `React.createElement`, classic runtime so components stay
global-scope, no ES modules — required for the double-click-to-open workflow):

```bash
npm install --no-save @babel/core @babel/cli @babel/preset-react
npx babel src/components --out-dir dist/components --extensions ".jsx" --out-file-extension .js --presets=@babel/preset-react
npx babel src/demo.jsx --out-file dist/demo.js --presets=@babel/preset-react
```

Note: this kit's `babel.config.json`-equivalent setting is
`{ "runtime": "classic" }` for `@babel/preset-react` — without it Babel emits
`import { jsx } from "react/jsx-runtime"`, which breaks the no-build, open-via-`file://`
setup. If you add a config file, keep that option.

## Icons

Icons use Google's Material Symbols Outlined font via the shared `Icon` helper
(`src/components/Icon.jsx`), referenced as ligature text (e.g. `<Icon name="close" />`).
Full glyph list: https://fonts.google.com/icons

## Notes

- `focus.ring` and `elevation.*` tokens are declared in `tokens.css` using a
  kebab-case convention (`--focus-ring`, `--elevation-content-overlay`) since
  `DFTS-tokens.md` §10 doesn't export CSS variable names for those — see
  `DFTS.md` §2.4.
- Dark mode is driven by `[data-theme="dark"]` on `<html>`, toggled by the
  Switch in the demo header.
