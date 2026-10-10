# DFTS React Component Kit

A React implementation of all 24 components documented in `DFTS.md`, built against
the tokens in `DFTS-tokens.md`, plus an interactive demo page with a light/dark
theme switch.

## Quick start

Unzip and double-click `index.html`. No build step, no `npm install`, no local
server required. It needs internet access once, to load the Material Symbols
icon font and Inter typeface from Google Fonts — everything else (React, all
components) is bundled locally and works offline.

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
