# Copilot instructions

Follow `AGENTS.md` at the repo root. In short:

- Build UI with components from `@chris-antonio/dfts-react`. Look up props, defaults and allowed values in `components.json` instead of guessing.
- Style with design tokens only (`var(--...)` from `styles/tokens.css`); never hardcode colours, spacing or radii.
- `src/components/*.jsx` are global-scope function components with no imports; keep them that way.
- After changing components run `npm run build`, `npm test` and `npm run docs`.
