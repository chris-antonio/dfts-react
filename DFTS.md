# DFTS — UI Generation Guide
<!-- Companion file to DFTS-tokens.md. Pair both files as context when generating UI. -->
<!-- DFTS-tokens.md = the raw values. DFTS.md = the rules for using them. -->

This file tells an LLM (or a developer) **how** to assemble DFTS components and layouts correctly. It assumes `DFTS-tokens.md` is available in the same context — every CSS variable referenced below is defined there. This file does not restate token values; it only restates token **names**, so if a value ever changes, only `DFTS-tokens.md` needs updating.

**Stack assumed:** React (functional components, hooks) + plain CSS using the DFTS custom properties. No CSS-in-JS, no Tailwind, no other design-token layer.

---

## 0. Quick-start checklist for generating UI

Before writing a component or screen, confirm:

1. Every colour, spacing, radius, font, and shadow value is a `var(--...)` reference from `DFTS-tokens.md` — never a raw hex, px, or font name.
2. Semantic tokens only in components (`--surface-*`, `--content-*`, `--border-*`) or component tokens (`--Button-*`, `--Card-*`, etc.) — never primitives (`--brand-500`, `--neutral-200`) directly.
3. Both light and dark values exist for anything colour-related (component tokens already resolve both; if you introduce a new colour use, define both).
4. Every interactive element has a visible `:focus-visible` state using `focus.ring`, a hit target of at least `--size-component-md` (32px) — 40px+ preferred on touch surfaces, and correct ARIA role/attributes per §5.
5. Layout respects the three breakpoints (`--screen-mobile` 390px, `--screen-tablet` 768px, `--screen-desktop` 1440px) — mobile-first CSS, not desktop-first with overrides removed.
6. Spacing between elements uses the `--spacing-*` scale exclusively (§3.3) — no arbitrary gap/margin/padding values.

---

## 1. Core Principles

**Token-first.** If a value isn't a token, don't use it. If a needed value doesn't exist as a token, use the nearest token on the scale rather than inventing a new number.

**Accessibility is not optional.** WCAG 2.1 AA is the floor: 4.5:1 contrast for body text, 3:1 for large text and UI boundaries, visible focus indication, full keyboard operability, correct semantic roles. The `on` tokens (`--surface-brand-on`, `--content-neutral-on`, etc.) exist specifically to guarantee contrast when placing content on a coloured surface — always pair a surface token with its matching `on` token.

**Light/dark parity.** Every screen must work unmodified in both themes. Never hardcode a colour that only makes sense in one theme — that's what the Light/Dark columns in the component tables solve.

**Responsive by default.** Design mobile-first (390px), then adapt upward at the tablet (768px) and desktop (1440px) breakpoints. Components resize via their `sm` / `md` / `lg` size variants rather than custom overrides.

**Composition over customization.** Prefer combining existing components (Card + Button + Chip) over inventing new one-off patterns. If a genuinely new pattern is needed, build it from primitives (spacing, radius, colour, typography tokens) following the same anatomy conventions as the existing components.

---

## 2. Code Conventions

### 2.1 Class naming

BEM-style, scoped with a `dfts-` prefix:

```
.dfts-{component}                    /* base element */
.dfts-{component}--{variant}         /* variant modifier, e.g. --primary, --outlined */
.dfts-{component}--{size}            /* size modifier, e.g. --sm, --md, --lg */
.dfts-{component}__{part}            /* sub-element, e.g. __label, __icon, __track */
```

Example: `.dfts-button.dfts-button--primary.dfts-button--md`

### 2.2 State handling

| State type | Mechanism |
| --- | --- |
| Native interactive states (hover, focus, active, disabled) | CSS pseudo-classes: `:hover`, `:focus-visible`, `:active`, `:disabled` |
| Component-controlled states (open/closed, selected, checked) | `data-state` attribute (e.g. `data-state="open"`) driven by React state, styled via `&[data-state="open"]` |
| Validation state | `data-invalid="true"` + `aria-invalid="true"` together |
| Never | Toggle classes in JS for visual-only states that CSS can express natively (hover/focus/disabled) |

### 2.3 CSS variable resolution order

1. Component token if one exists for this exact use (`--Button-primary-default-background`)
2. Semantic token if no component token exists (`--surface-neutral-subtle`)
3. Never a primitive token (`--brand-500`) inside component or page CSS — primitives only feed semantic/component tokens upstream.

### 2.4 Naming effect tokens as CSS variables

`DFTS-tokens.md` §10 (Effects & Shadows) lists `elevation.*` and `focus.ring` as dot-notation token names only — no `--css-variable` column is exported for that section (unlike every other section in the file). Until the export is updated, convert dot-notation to kebab-case when declaring them in `:root`: `elevation.interactive.default` → `--elevation-interactive-default`, `focus.ring` → `--focus-ring`. This guide uses that convention below (e.g. `var(--focus-ring)`) — flag it to whoever owns the token export so §10 gets real CSS variable names like every other section.

### 2.5 Component file skeleton

```jsx
// Button.jsx
export function Button({
  variant = "primary",   // primary | secondary | ghost | destructive
  size = "md",            // sm | md | lg
  disabled = false,
  children,
  ...props
}) {
  return (
    <button
      className={`dfts-button dfts-button--${variant} dfts-button--${size}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
```

```css
/* Button.css */
.dfts-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--Button-md-border-radius);
  border-width: var(--Button-default-border-width);
  border-style: solid;
  border-color: transparent;
  font: var(--font-weight-medium) var(--font-size-14)/var(--line-height-14) var(--font-family-secondary);
  cursor: pointer;
  transition: background-color var(--duration-150) var(--easing-ease-out);
}

.dfts-button--sm  { height: var(--Button-sm-height); padding: var(--Button-sm-padding-vertical) var(--Button-sm-padding-horizontal); gap: var(--Button-sm-gap); border-radius: var(--Button-sm-border-radius); }
.dfts-button--md  { height: var(--Button-md-height); padding: var(--Button-md-padding-vertical) var(--Button-md-padding-horizontal); gap: var(--Button-md-gap); border-radius: var(--Button-md-border-radius); }
.dfts-button--lg  { height: var(--Button-lg-height); padding: var(--Button-lg-padding-vertical) var(--Button-lg-padding-horizontal); gap: var(--Button-lg-gap); border-radius: var(--Button-lg-border-radius); }

.dfts-button--primary { background: var(--Button-primary-default-background); color: var(--Button-primary-default-content); }
.dfts-button--primary:hover   { background: var(--Button-primary-hover-background); }
.dfts-button--primary:active  { background: var(--Button-primary-pressed-background); }
.dfts-button--primary:focus-visible { box-shadow: var(--focus-ring); border-color: var(--Button-primary-focused-border); border-width: var(--Button-focused-border-width); }
.dfts-button--primary:disabled { background: var(--Button-primary-disabled-background); color: var(--Button-primary-disabled-content); cursor: not-allowed; }
```

Every component in §5 follows this same two-file (`.jsx` + `.css`) pattern. To keep this guide scannable, full CSS is only spelled out for a few representative components; the rest list anatomy, variants, states, and a11y — apply the identical variable-mapping pattern shown above using the component's own `--{Component}-*` tokens from `DFTS-tokens.md` §12.

---

## 3. Layout & Grid System

> The breakpoint values (`--screen-mobile`, `--screen-tablet`, `--screen-desktop`) are exported tokens. Column counts and margins below are DFTS layout conventions built on top of those tokens — apply them consistently but treat them as guidance, not exported values.

### 3.1 Breakpoints

| Breakpoint | Token | Range | Columns | Margin | Gutter |
| --- | --- | --- | --- | --- | --- |
| Mobile | `--screen-mobile` (390px) | 0–767px | 4 | `--spacing-md` (16px) | `--spacing-md` (16px) |
| Tablet | `--screen-tablet` (768px) | 768–1439px | 8 | `--spacing-xl` (32px) | `--spacing-md` (16px) |
| Desktop | `--screen-desktop` (1440px) | ≥1440px | 12 | `--spacing-3xl` (48px), capped by a `1280px`–`1440px` content max-width | `--spacing-lg` (24px) |

Write CSS mobile-first: base styles target mobile, then layer up with `@media (min-width: 768px)` and `@media (min-width: 1440px)`.

### 3.2 Containers

```css
.dfts-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--spacing-md);
}
@media (min-width: 768px)  { .dfts-container { padding-inline: var(--spacing-xl); } }
@media (min-width: 1440px) { .dfts-container { max-width: 1440px; padding-inline: var(--spacing-3xl); } }
```

### 3.3 Spacing usage patterns

Use the spacing scale by *purpose*, not by picking whatever number looks close:

| Purpose | Token |
| --- | --- |
| Gap between an icon and adjacent label | `--spacing-2xs` / `--spacing-xs` |
| Gap between related inline elements (form label→input, chip icon→text) | `--spacing-xs` / `--spacing-sm` |
| Internal component padding (buttons, chips, inputs) | Use the component's own dimension tokens (`--Button-md-padding-*`, etc.), not raw spacing tokens |
| Gap between items in a list/stack (Card list, Menu items) | `--spacing-sm` / `--spacing-md` |
| Gap between distinct components in a form or panel | `--spacing-lg` |
| Gap between major page sections | `--spacing-2xl` – `--spacing-4xl` |
| Page-level top/bottom section padding | `--spacing-4xl` – `--spacing-6xl` on desktop, `--spacing-2xl` – `--spacing-3xl` on mobile |

### 3.4 Responsive behavior rules

- Multi-column layouts (card grids, form rows) collapse to a single column below tablet unless content is explicitly two-up at mobile size (e.g. a 2-column icon grid).
- Navigation: full nav bar at desktop → condensed/hamburger or bottom navigation at mobile. Use `Bottom-Sheet` (§5.21) for mobile action panels that would be a `Modal` (§5.16) or `Menu` (§5.18) at desktop.
- Tables (§5.20) that don't fit mobile width become horizontally scrollable within their container, or restructure into stacked key/value cards — don't shrink font size below `--font-size-12` to force a fit.
- Typography: use the `sm` tier of `text.*` styles (§6 in tokens file) at mobile, `md`/`lg` tiers at desktop, for `display`, `title`, and `hero` styles specifically. Body/label/caption sizes stay constant across breakpoints.
- Touch targets: any interactive element on a viewport ≤768px wide must resolve to at least 40px (`--size-component-xl`) in its tappable area, even if the visual size is smaller (pad the hit area).

---

## 4. Global Accessibility Rules

- **Focus indication.** Every focusable element gets `box-shadow: var(--focus-ring)` (or the component's own `*-focused-border` token plus the ring) on `:focus-visible`. Never remove `outline`/focus styling without replacing it.
- **Colour is never the only signal.** Error states pair a border/background token change with an icon and/or text (see Alert, Input-Fields, Table error states) — don't rely on red alone.
- **Contrast pairing.** Any time you set a `--surface-*` token, set its matching `--content-*-on` (or component `*-content` token) for text/icons placed on it — this is how the palette guarantees AA contrast in both themes.
- **Keyboard operability** — minimum expected patterns:

| Component | Key | Action |
| --- | --- | --- |
| Button, Chip, Tab, Menu item | `Enter` / `Space` | Activate |
| Tabs | `←` `→` | Move between tabs; `Home`/`End` to jump to first/last |
| Menu | `↑` `↓` | Move between items; `Esc` closes; `Enter` activates |
| Modal, Bottom-Sheet | `Esc` | Close; focus is trapped inside while open, returns to trigger on close |
| Accordion | `Enter` / `Space` | Toggle section; `↑` `↓` optional to move between headers |
| Date-Picker | `←` `→` `↑` `↓` | Move between days; `Enter` selects; `Esc` closes |
| Carousel | `←` `→` | Move between slides |
| Tooltip | `Focus` / `Esc` | Show on focus (not just hover); dismiss on `Esc` or blur |

- **Touch targets.** Minimum 24×24px (WCAG AA), but DFTS defaults to `--size-component-md` (32px) as the practical floor and `--size-component-xl` (48px, via `lg`) on primary mobile actions.
- **Live regions.** Toast (§5.7) uses `role="status"` + `aria-live="polite"` (or `"assertive"` for error toasts) so screen readers announce it without stealing focus.

---

## 5. Component Library

Each entry: **Purpose**, **Anatomy**, **Variants / Sizes**, **States**, **Accessibility**, **Example**. Token prefixes reference `DFTS-tokens.md` §12 unless noted.

### 5.1 Button — `--Button-*`

**Purpose:** Primary call-to-action element for triggering an action.
**Anatomy:** optional leading icon → label → optional trailing icon.
**Variants:** `primary` / `secondary` / `ghost` / `destructive`. **Sizes:** `sm` / `md` / `lg`.
**States:** default, hover, pressed, focused, disabled.
**Accessibility:** native `<button>` element (never a styled `<div>`); `aria-disabled` mirrors the `disabled` attribute; icon-only buttons require `aria-label`.
**Example:** see §2.5 (full JSX + CSS reference implementation).

### 5.2 Chip — `--Chip-*`

**Purpose:** Compact, often removable, label for tags, filters, or selections.
**Anatomy:** optional leading icon → label → optional dismiss icon.
**Variants:** `filled` / `outlined`, plus an `error` state variant. **Sizes:** `sm` / `md` / `lg`. All corners `radius.full` (pill).
**States:** default, hover, pressed, disabled.
**Accessibility:** if dismissible, dismiss icon is a real `<button aria-label="Remove {label}">`; if selectable/toggleable, use `aria-pressed` on the chip itself.

```jsx
function Chip({ variant = "filled", size = "md", removable, onRemove, children }) {
  return (
    <span className={`dfts-chip dfts-chip--${variant} dfts-chip--${size}`}>
      {children}
      {removable && (
        <button className="dfts-chip__dismiss" aria-label={`Remove ${children}`} onClick={onRemove}>×</button>
      )}
    </span>
  );
}
```

### 5.3 Form-Controls — `--Form-Controls-*`

**Purpose:** Checkbox, radio, and switch inputs plus their labels.
**Anatomy:** control (box/circle/track+thumb) → label text.
**Variants:** `checkbox` / `radio` / `switch`. **Sizes:** `sm` / `md` / `lg` (switch has its own track-width scale).
**States:** default, hover, focused, checked, error, disabled.
**Accessibility:** use native `<input type="checkbox">` / `<input type="radio">` / (for switch) `<input type="checkbox" role="switch">`, visually hidden but present for keyboard/screen-reader support — never a `<div>` with click handlers. Always pair with a `<label>` (wrapping or `htmlFor`). Error state adds `aria-invalid="true"` and `aria-describedby` pointing to the error message.

```jsx
function Checkbox({ id, label, checked, onChange, error, disabled, size = "md" }) {
  return (
    <span className="dfts-form-control">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={error ? "true" : undefined}
        className={`dfts-form-control__input dfts-form-control--${size}`}
      />
      <label htmlFor={id} className="dfts-form-control__label">{label}</label>
    </span>
  );
}
```

### 5.4 Input-Fields — `--Input-Fields-*`

**Purpose:** Single/multi-line text entry.
**Anatomy:** label → input box (with optional leading/trailing icon) → helper or error text.
**Sizes:** `sm` / `md` / `lg`.
**States:** default, hover, focused, error, disabled; placeholder is a distinct visual state.
**Accessibility:** `<label>` linked via `htmlFor`/`id`; helper/error text linked via `aria-describedby`; error state sets `aria-invalid="true"`.

```jsx
function TextField({ id, label, value, onChange, error, helperText, size = "md" }) {
  const describedBy = error || helperText ? `${id}-help` : undefined;
  return (
    <div className="dfts-input-field">
      <label htmlFor={id} className="dfts-input-field__label">{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy}
        className={`dfts-input-field__control dfts-input-field--${size} ${error ? "dfts-input-field--error" : ""}`}
      />
      {(error || helperText) && (
        <span id={describedBy} className={error ? "dfts-input-field__helper--error" : "dfts-input-field__helper"}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}
```

```css
.dfts-input-field__control {
  width: 100%;
  border: var(--Input-Fields-md-border-width) solid var(--Input-Fields-default-border);
  border-radius: var(--Input-Fields-md-border-radius);
  height: var(--Input-Fields-md-height);
  padding: var(--Input-Fields-md-padding-vertical) var(--Input-Fields-md-padding-horizontal);
  background: var(--Input-Fields-default-background);
  color: var(--Input-Fields-default-content);
  font: var(--font-size-14)/var(--line-height-14) var(--font-family-secondary);
}
.dfts-input-field__control::placeholder { color: var(--Input-Fields-default-placeholder); }
.dfts-input-field__control:hover  { border-color: var(--Input-Fields-hover-border); }
.dfts-input-field__control:focus-visible { border-color: var(--Input-Fields-focused-border); border-width: var(--Input-Fields-focused-border-width); box-shadow: var(--focus-ring); }
.dfts-input-field--error         { border-color: var(--Input-Fields-error-border); }
.dfts-input-field__helper--error { color: var(--Input-Fields-helper-error); }
.dfts-input-field__control:disabled { background: var(--Input-Fields-disabled-background); color: var(--Input-Fields-disabled-content); }
```

### 5.5 Alert — `--Alert-*`

**Purpose:** Persistent, inline, contextual message about page/section state.
**Anatomy:** icon → title (optional) → content → optional dismiss button.
**Variants:** `info` / `success` / `warning` / `error`.
**States:** default, dismissible/dismissed.
**Accessibility:** `role="alert"` for error/warning (interrupts screen reader), `role="status"` for info/success (polite); dismiss button gets `aria-label="Dismiss alert"`.

### 5.6 Toast — `--Toast-*`

**Purpose:** Transient, non-blocking notification, auto-dismissing.
**Anatomy:** optional icon (by variant) → message → optional dismiss icon.
**Variants:** `default` / `info` / `success` / `warning` / `error`.
**States:** entering, visible, exiting.
**Accessibility:** container `role="status"` `aria-live="polite"` (`"assertive"` + no auto-dismiss for errors); never trap focus; auto-dismiss timing should be pausable on hover/focus.

### 5.7 Tooltip — `--Tooltip-*`

**Purpose:** Short supplementary text shown on hover/focus of a trigger element.
**Anatomy:** trigger → floating panel with arrow.
**States:** hidden, visible.
**Accessibility:** trigger has `aria-describedby` pointing to the tooltip's `id`; tooltip shows on both `:hover` and `:focus-visible` of the trigger (never hover-only); dismiss on `Esc`; tooltip itself is not focusable and not interactive.

### 5.8 Loader — `--Loader-*`

**Purpose:** Indeterminate loading indicator.
**Anatomy:** circular track + animated fill (spinner), or animated dot variant.
**Sizes:** `sm` / `md` / `lg`.
**Accessibility:** `role="status"` with `aria-label="Loading"` (or context-specific label) on the container; don't rely on the spinning animation alone to convey "loading" to assistive tech.

### 5.9 Progress-Line — `--Progress-Line-*`

**Purpose:** Determinate progress indicator.
**Anatomy:** track → fill → optional label (e.g. "60%").
**Accessibility:** `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`.

### 5.10 Link — `--Link-*`

**Purpose:** Inline or standalone navigational text element.
**Anatomy:** optional leading/trailing icon → text.
**Sizes:** `sm` / `md` / `lg` (icon gap only — text size inherits from surrounding `text.*` style).
**States:** default, hover, pressed, focused, error, disabled.
**Accessibility:** native `<a href>` for navigation (never a styled `<button>` or `<span>` with an onClick for actual navigation); `disabled` links use `aria-disabled="true"` and are removed from tab order only if truly inert.

### 5.11 Avatar — `--Avatar-*`

**Purpose:** Represents a user or entity via image, initials, or icon.
**Anatomy:** circular container with image, initials text, or fallback icon.
**Sizes:** `sm` / `md` / `lg` / `xl` / `xxl`.
**Accessibility:** if image, `alt` describes the person/entity; if initials/icon fallback, container gets `aria-label` with the entity's name (avatar is decorative only when adjacent visible text already names the entity — then use `alt=""`/`aria-hidden`).

### 5.12 Divider — `--Divider-*`

**Purpose:** Visual separation between content groups.
**Anatomy:** single rule line, horizontal or vertical.
**Accessibility:** decorative by default (`role="none"` / `aria-hidden="true"`); use `role="separator"` only if it carries semantic meaning between sections in a list/menu.

### 5.13 Tile — `--Tile-*`

**Purpose:** Compact clickable surface, typically icon/title/description, for navigation choices (e.g. dashboard shortcuts).
**Anatomy:** optional icon → title → description.
**States:** default, hover, pressed, focused, disabled.
**Accessibility:** if the whole tile navigates, wrap in `<a>` or use `<button>` with `role` implied natively — not a `<div onClick>`.

### 5.14 Card — `--Card-*`

**Purpose:** General-purpose content container.
**Anatomy:** optional media → title → description → optional footer/actions.
**States:** default, hover (only if interactive), focused (only if interactive).
**Accessibility:** static cards need no special role; interactive cards (whole card is a link/button) follow the same rule as Tile — real `<a>`/`<button>`, not a `<div>` click handler.

```jsx
function Card({ title, description, interactive, children, ...props }) {
  const Tag = interactive ? "a" : "div";
  return (
    <Tag className={`dfts-card ${interactive ? "dfts-card--interactive" : ""}`} {...props}>
      <h3 className="dfts-card__title">{title}</h3>
      <p className="dfts-card__description">{description}</p>
      {children}
    </Tag>
  );
}
```

### 5.15 Accordion — `--Accordion-*`

**Purpose:** Progressive disclosure of grouped content.
**Anatomy:** header (title + chevron icon) → collapsible content panel → divider between items.
**States:** collapsed, expanded, hover, focused, disabled.
**Accessibility:** header is a `<button aria-expanded={open} aria-controls="{panelId}">`; panel has `id="{panelId}"` and `role="region"` with `aria-labelledby` pointing to the header.

### 5.16 Modal — `--Modal-*`

**Purpose:** Blocking overlay dialog for focused tasks or critical decisions.
**Anatomy:** scrim/backdrop → header (title + close icon) → content → footer (actions).
**Accessibility:** `role="dialog"` `aria-modal="true"` `aria-labelledby` pointing to the title; focus moves into the modal on open and is trapped there; `Esc` and backdrop click close it; focus returns to the trigger element on close. Backdrop uses `--alpha-dark-*` (light theme) / `--alpha-light-*` (dark theme) at `700`–`800` over the page; the modal surface itself uses `elevation.content.overlay`.

### 5.17 Tabs — `--Tabs-*`

**Purpose:** Switch between sibling views within the same context.
**Anatomy:** tab list → individual tabs → active indicator bar → associated panel.
**States:** default, hover, active, disabled.
**Accessibility:** `role="tablist"` on the container, `role="tab"` + `aria-selected` on each tab, `role="tabpanel"` + `aria-labelledby` on the content; arrow-key navigation moves between tabs (see §4).

### 5.18 Menu — `--Menu-*`

**Purpose:** Floating list of actions/options, typically from a trigger button.
**Anatomy:** panel → items (optional icon + label), optional `danger` item styling.
**States (per item):** default, hover, active/selected, disabled, danger.
**Accessibility:** trigger has `aria-haspopup="menu"` and `aria-expanded`; panel `role="menu"`; items `role="menuitem"`; `↑`/`↓` moves focus, `Esc` closes and returns focus to trigger.

### 5.19 Breadcrumbs — `--Breadcrumbs-*`

**Purpose:** Shows hierarchical location within the app.
**Anatomy:** sequence of links separated by a separator glyph; final item is the current page (not a link).
**States:** default, hover, active (current page), disabled.
**Accessibility:** wrap in `<nav aria-label="Breadcrumb">` containing an `<ol>`; current page item gets `aria-current="page"` and is plain text, not a link.

### 5.20 Navigation-Controls — `--Navigation-Controls-*`

**Purpose:** Two related controls — pill-shaped `filter` toggles and a `segment` (segmented control / tab-like switch).
**Anatomy (filter):** pill with optional icon + label. **Anatomy (segment):** track containing segment buttons with a sliding active background.
**States:** default, hover, active, disabled.
**Accessibility:** filters that toggle selection use `aria-pressed`; segmented control is a `role="radiogroup"` with each segment as `role="radio"` (single-select) — reflects that only one segment is active at a time.

### 5.21 Table — `--Table-*`

**Purpose:** Structured tabular data display.
**Anatomy:** header row (sortable columns) → body rows → cells.
**States (cell/header):** default, hover, selected, error, sorted.
**Accessibility:** native `<table>` with `<thead>`/`<tbody>`, `<th scope="col">` for headers; sortable headers are buttons inside the `<th>` with `aria-sort="ascending|descending|none"`; selected rows/cells use `aria-selected="true"`.

### 5.22 Date-Picker — `--Date-Picker-*`

**Purpose:** Calendar-based date selection.
**Anatomy:** header (month/year label + prev/next nav) → weekday row → day grid.
**States (day cell):** default, hover, today, selected, disabled.
**Accessibility:** grid uses `role="grid"`/`role="row"`/`role="gridcell"` (or a `<table>` equivalent); selected day gets `aria-selected="true"`; today gets `aria-current="date"`; arrow keys move focus across days (see §4); month nav buttons have `aria-label` ("Previous month" / "Next month").

### 5.23 Bottom-Sheet — `--Bottom-Sheet-*`

**Purpose:** Mobile-first overlay panel sliding up from the bottom edge; the touch-friendly counterpart to Modal/Menu at small viewports.
**Anatomy:** drag handle → header (title + close icon) → content.
**Accessibility:** same dialog semantics as Modal (`role="dialog"` `aria-modal="true"`, focus trap, `Esc` to close); drag handle is supplementary to, never a replacement for, a visible close button.

### 5.24 Carousel — `--Carousel-*`

**Purpose:** Horizontally paged content (images, cards, promos).
**Anatomy:** slide track → individual slides → pagination dots → prev/next nav controls.
**States (dot):** default, active. **Nav controls:** default, hover, disabled (at first/last slide, if not looping).
**Accessibility:** container `role="region"` `aria-roledescription="carousel"` `aria-label`; each slide `aria-roledescription="slide"` with `aria-label="{n} of {total}"`; nav buttons have `aria-label` ("Previous slide"/"Next slide"); avoid autoplay, or provide a visible pause control if autoplay is used.

---

## 6. Composition Patterns

### 6.1 Form pattern

Stack `Input-Fields` / `Form-Controls` vertically with `--spacing-lg` between fields, `--spacing-xs` between a field's label and control (handled internally by `--Input-Fields-label-gap`), and group related fields (e.g. First/Last name) side-by-side only at tablet+ using the grid (§3). Submit actions go in a `Button` row at the end, primary action last (reading-order-right in LTR), aligned to `--spacing-lg` above the nearest divider or container edge.

### 6.2 Page shell pattern

```
Container (§3.2)
 └─ Header section        (Navigation-Controls / Tabs, if present)
 └─ Content section(s)    (Card / Table / Accordion, separated by --spacing-2xl–4xl)
 └─ Footer / actions       (Divider + Button row, --spacing-lg padding)
```

### 6.3 Card grid pattern

`display: grid` with `gap: var(--spacing-lg)`; `grid-template-columns: repeat(1, 1fr)` at mobile, `repeat(2, 1fr)` at tablet, `repeat(3, 1fr)` (or 4, if cards are compact) at desktop. Each `Card` keeps consistent height via `align-items: stretch`.

### 6.4 Empty / loading / error state pattern

- **Loading:** `Loader` (md) centered in the content area, or skeleton blocks using `--surface-neutral-subtle` if the layout shape is already known.
- **Empty:** icon (`--content-neutral-subtle`) + short title (`text.title.sm`) + description (`text.body.sm`, `--content-neutral-subtle`) + optional primary `Button` to resolve the empty state.
- **Error:** `Alert` (`error` variant) inline, or a full-section version of the empty pattern using `--content-error-default` for the icon/title if the entire section failed to load.

---

## 7. Do's and Don'ts

**Do** reference tokens by name in generated code — `var(--Button-primary-default-background)` — so the output stays in sync if `DFTS-tokens.md` is regenerated.
**Do** implement both the light and dark value for every colour decision, even if dark mode isn't visibly toggled in the immediate task.
**Do** use the component's own dimension tokens for internal padding/sizing rather than the raw spacing scale.
**Do** default to semantic HTML elements (`button`, `a`, `input`, `table`, `nav`) before reaching for ARIA — ARIA supplements semantics, it doesn't replace them.

**Don't** hardcode hex colours, pixel values, or font names anywhere in component code.
**Don't** use primitive palette tokens (`--brand-500`, `--neutral-200`, `--feedback-error-400`, etc.) directly in components — always go through semantic or component tokens.
**Don't** build interactive elements out of non-interactive tags (`<div onClick>`) — use the native element with the matching role.
**Don't** introduce a new visual size/spacing/radius value outside the documented scales, even if "just one pixel off" — snap to the nearest token.
**Don't** ship a component without a defined `:focus-visible` state.

---

## 8. Appendix — Component → Token Prefix Quick Reference

| Component | CSS Variable Prefix |
| --- | --- |
| Button | `--Button-*` |
| Chip | `--Chip-*` |
| Form-Controls (checkbox/radio/switch) | `--Form-Controls-*` |
| Input-Fields | `--Input-Fields-*` |
| Alert | `--Alert-*` |
| Toast | `--Toast-*` |
| Tooltip | `--Tooltip-*` |
| Loader | `--Loader-*` |
| Progress-Line | `--Progress-Line-*` |
| Link | `--Link-*` |
| Avatar | `--Avatar-*` |
| Divider | `--Divider-*` |
| Tile | `--Tile-*` |
| Card | `--Card-*` |
| Accordion | `--Accordion-*` |
| Modal | `--Modal-*` |
| Tabs | `--Tabs-*` |
| Menu | `--Menu-*` |
| Breadcrumbs | `--Breadcrumbs-*` |
| Navigation-Controls | `--Navigation-Controls-*` |
| Table | `--Table-*` |
| Date-Picker | `--Date-Picker-*` |
| Bottom-Sheet | `--Bottom-Sheet-*` |
| Carousel | `--Carousel-*` |

---

*Companion to DFTS-tokens.md — DFTS Design System. Paste both files as context when prompting an LLM to build DFTS UI.*
