# DFTS — Design Tokens
<!-- AUTO-GENERATED from Design Token Manager exports. Do not edit by hand. -->
<!-- Source files: Colors.Default, Dimensions.Default, Typography.Default, -->
<!-- Theme.Light, Theme.Dark, Viewport.Desktop/Tablet/Mobile,             -->
<!-- Motion.Default, effect.styles, text.styles, Applied.Default          -->

This file is the single source of truth for all DFTS design tokens.  
It is intended to be injected as context into AI prompts, used as a  
developer reference, and kept in sync with Figma via re-export.

**Reading the table**
- **CSS Variable** — the variable name as declared in your `:root {}` stylesheet  
- **Light** — resolved value in the default (light) theme  
- **Dark** — resolved value in the dark theme (— means identical to light)

---
## 1. Colour Primitives
> Raw palette values. Reference via semantic tokens — never use these directly in components.

### Neutral

| CSS Variable | Value |
| --- | --- |
| `--neutral-50` | `#f2f2f2` |
| `--neutral-100` | `#e5e5e5` |
| `--neutral-200` | `#cccccc` |
| `--neutral-300` | `#b2b2b2` |
| `--neutral-400` | `#999999` |
| `--neutral-500` | `#808080` |
| `--neutral-600` | `#666666` |
| `--neutral-700` | `#4d4d4d` |
| `--neutral-800` | `#333333` |
| `--neutral-900` | `#1a1a1a` |

### Brand

| CSS Variable | Value |
| --- | --- |
| `--brand-50` | `#e8e8fc` |
| `--brand-100` | `#d1d1fa` |
| `--brand-200` | `#9999ff` |
| `--brand-300` | `#6666ff` |
| `--brand-400` | `#3333ff` |
| `--brand-500` | `#0000ff` |
| `--brand-600` | `#0000cc` |
| `--brand-700` | `#000099` |
| `--brand-800` | `#000066` |
| `--brand-900` | `#000033` |

### Alpha — Dark

| CSS Variable | Value |
| --- | --- |
| `--alpha-dark-50` | `#0000000a` |
| `--alpha-dark-100` | `#00000014` |
| `--alpha-dark-200` | `#0000001f` |
| `--alpha-dark-300` | `#00000029` |
| `--alpha-dark-400` | `#0000003d` |
| `--alpha-dark-500` | `#00000052` |
| `--alpha-dark-600` | `#0000007a` |
| `--alpha-dark-700` | `#000000a3` |
| `--alpha-dark-800` | `#000000cc` |
| `--alpha-dark-900` | `#000000f5` |
| `--alpha-dark-1000` | `#000000` |

### Alpha — Light

| CSS Variable | Value |
| --- | --- |
| `--alpha-light-50` | `#ffffff0a` |
| `--alpha-light-100` | `#ffffff14` |
| `--alpha-light-200` | `#ffffff1f` |
| `--alpha-light-300` | `#ffffff29` |
| `--alpha-light-400` | `#ffffff3d` |
| `--alpha-light-500` | `#ffffff52` |
| `--alpha-light-600` | `#ffffff7a` |
| `--alpha-light-700` | `#ffffffa3` |
| `--alpha-light-800` | `#ffffffcc` |
| `--alpha-light-900` | `#fffffff5` |
| `--alpha-light-1000` | `#ffffff` |

### Feedback — Info

| CSS Variable | Value |
| --- | --- |
| `--feedback-info-50` | `#e7f2fe` |
| `--feedback-info-100` | `#cfe5fc` |
| `--feedback-info-200` | `#9eccfa` |
| `--feedback-info-300` | `#6eb2f7` |
| `--feedback-info-400` | `#3d99f5` |
| `--feedback-info-500` | `#0d80f2` |
| `--feedback-info-600` | `#0a66c2` |
| `--feedback-info-700` | `#084d91` |
| `--feedback-info-800` | `#053361` |
| `--feedback-info-900` | `#031a30` |

### Feedback — Success

| CSS Variable | Value |
| --- | --- |
| `--feedback-success-50` | `#e9fbf0` |
| `--feedback-success-100` | `#d3f8e1` |
| `--feedback-success-200` | `#a7f1c2` |
| `--feedback-success-300` | `#7beaa4` |
| `--feedback-success-400` | `#50e285` |
| `--feedback-success-500` | `#24db67` |
| `--feedback-success-600` | `#1daf52` |
| `--feedback-success-700` | `#15843e` |
| `--feedback-success-800` | `#0e5829` |
| `--feedback-success-900` | `#072c15` |

### Feedback — Warning

| CSS Variable | Value |
| --- | --- |
| `--feedback-warning-50` | `#fef5e6` |
| `--feedback-warning-100` | `#feeccd` |
| `--feedback-warning-200` | `#fcd99c` |
| `--feedback-warning-300` | `#fbc66a` |
| `--feedback-warning-400` | `#fab338` |
| `--feedback-warning-500` | `#f9a006` |
| `--feedback-warning-600` | `#c78005` |
| `--feedback-warning-700` | `#956004` |
| `--feedback-warning-800` | `#634003` |
| `--feedback-warning-900` | `#322001` |

### Feedback — Error

| CSS Variable | Value |
| --- | --- |
| `--feedback-error-50` | `#fde9e7` |
| `--feedback-error-100` | `#fbd2d0` |
| `--feedback-error-200` | `#f8a6a0` |
| `--feedback-error-300` | `#f47971` |
| `--feedback-error-400` | `#f14d41` |
| `--feedback-error-500` | `#ed2012` |
| `--feedback-error-600` | `#be1a0e` |
| `--feedback-error-700` | `#8e130b` |
| `--feedback-error-800` | `#5f0d07` |
| `--feedback-error-900` | `#2f0604` |


## 2. Semantic Colour Tokens
> These are the tokens to use in all components. They resolve differently in light vs dark mode.

| CSS Variable | Light | Dark |
| --- | --- | --- |
| `--surface-neutral-default` | `#f2f2f2` | `#1a1a1a` |
| `--surface-neutral-subtle` | `#e5e5e5` | `#333333` |
| `--surface-neutral-strong` | `#cccccc` | `#4d4d4d` |
| `--surface-neutral-on` | `#1a1a1a` | `#f2f2f2` |
| `--surface-brand-default` | `#0000ff` | `#3333ff` |
| `--surface-brand-subtle` | `#e8e8fc` | `#000033` |
| `--surface-brand-strong` | `#0000cc` | `#6666ff` |
| `--surface-brand-on` | `#f2f2f2` | `#1a1a1a` |
| `--surface-info-default` | `#0d80f2` | `#3d99f5` |
| `--surface-info-subtle` | `#e7f2fe` | `#084d91` |
| `--surface-info-strong` | `#0a66c2` | `#6eb2f7` |
| `--surface-info-on` | `#f2f2f2` | `#1a1a1a` |
| `--surface-success-default` | `#24db67` | `#50e285` |
| `--surface-success-subtle` | `#e9fbf0` | `#15843e` |
| `--surface-success-strong` | `#1daf52` | `#7beaa4` |
| `--surface-success-on` | `#f2f2f2` | `#1a1a1a` |
| `--surface-warning-default` | `#f9a006` | `#fab338` |
| `--surface-warning-subtle` | `#fef5e6` | `#956004` |
| `--surface-warning-strong` | `#c78005` | `#fbc66a` |
| `--surface-warning-on` | `#1a1a1a` | — |
| `--surface-error-default` | `#ed2012` | `#f14d41` |
| `--surface-error-subtle` | `#fde9e7` | `#8e130b` |
| `--surface-error-strong` | `#be1a0e` | `#f47971` |
| `--surface-error-on` | `#f2f2f2` | `#1a1a1a` |
| `--content-neutral-default` | `#1a1a1a` | `#f2f2f2` |
| `--content-neutral-subtle` | `#666666` | `#999999` |
| `--content-neutral-strong` | `#4d4d4d` | `#cccccc` |
| `--content-neutral-on` | `#f2f2f2` | `#1a1a1a` |
| `--content-brand-default` | `#0000cc` | `#6666ff` |
| `--content-brand-subtle` | `#3333ff` | `#0000ff` |
| `--content-brand-strong` | `#000099` | `#9999ff` |
| `--content-brand-on` | `#f2f2f2` | `#1a1a1a` |
| `--content-info-default` | `#0a66c2` | `#6eb2f7` |
| `--content-info-subtle` | `#3d99f5` | `#0d80f2` |
| `--content-info-strong` | `#084d91` | `#9eccfa` |
| `--content-info-on` | `#f2f2f2` | `#1a1a1a` |
| `--content-success-default` | `#1daf52` | `#7beaa4` |
| `--content-success-subtle` | `#50e285` | `#24db67` |
| `--content-success-strong` | `#15843e` | `#a7f1c2` |
| `--content-success-on` | `#f2f2f2` | `#1a1a1a` |
| `--content-warning-default` | `#c78005` | `#fbc66a` |
| `--content-warning-subtle` | `#fab338` | `#f9a006` |
| `--content-warning-strong` | `#956004` | `#fcd99c` |
| `--content-warning-on` | `#1a1a1a` | — |
| `--content-error-default` | `#be1a0e` | `#f47971` |
| `--content-error-subtle` | `#f14d41` | `#ed2012` |
| `--content-error-strong` | `#8e130b` | `#f8a6a0` |
| `--content-error-on` | `#f2f2f2` | `#1a1a1a` |
| `--border-neutral-default` | `#b2b2b2` | `#666666` |
| `--border-neutral-subtle` | `#cccccc` | `#4d4d4d` |
| `--border-neutral-strong` | `#808080` | `#999999` |
| `--border-neutral-on` | `#1a1a1a` | `#f2f2f2` |
| `--border-brand-default` | `#0000ff` | `#3333ff` |
| `--border-brand-subtle` | `#9999ff` | `#000099` |
| `--border-brand-strong` | `#000099` | `#9999ff` |
| `--border-brand-on` | `#f2f2f2` | `#1a1a1a` |
| `--border-info-default` | `#0d80f2` | `#3d99f5` |
| `--border-info-subtle` | `#9eccfa` | `#084d91` |
| `--border-info-strong` | `#084d91` | `#9eccfa` |
| `--border-info-on` | `#f2f2f2` | `#1a1a1a` |
| `--border-success-default` | `#24db67` | `#50e285` |
| `--border-success-subtle` | `#a7f1c2` | `#15843e` |
| `--border-success-strong` | `#15843e` | `#a7f1c2` |
| `--border-success-on` | `#f2f2f2` | `#1a1a1a` |
| `--border-warning-default` | `#f9a006` | `#fab338` |
| `--border-warning-subtle` | `#fcd99c` | `#956004` |
| `--border-warning-strong` | `#956004` | `#fcd99c` |
| `--border-warning-on` | `#1a1a1a` | — |
| `--border-error-default` | `#ed2012` | `#f14d41` |
| `--border-error-subtle` | `#f8a6a0` | `#8e130b` |
| `--border-error-strong` | `#8e130b` | `#f8a6a0` |
| `--border-error-on` | `#f2f2f2` | `#1a1a1a` |


## 3. Spacing

> Desktop spacing scale (spacing tokens are identical across all three viewports).

| CSS Variable | Token Name | Value |
| --- | --- | --- |
| `--spacing-none` | `spacing.none` | `0px` |
| `--spacing-3xs` | `spacing.3xs` | `2px` |
| `--spacing-2xs` | `spacing.2xs` | `4px` |
| `--spacing-xs` | `spacing.xs` | `8px` |
| `--spacing-sm` | `spacing.sm` | `12px` |
| `--spacing-md` | `spacing.md` | `16px` |
| `--spacing-lg` | `spacing.lg` | `24px` |
| `--spacing-xl` | `spacing.xl` | `32px` |
| `--spacing-2xl` | `spacing.2xl` | `40px` |
| `--spacing-3xl` | `spacing.3xl` | `48px` |
| `--spacing-4xl` | `spacing.4xl` | `64px` |
| `--spacing-5xl` | `spacing.5xl` | `80px` |
| `--spacing-6xl` | `spacing.6xl` | `96px` |
| `--spacing-7xl` | `spacing.7xl` | `112px` |
| `--spacing-8xl` | `spacing.8xl` | `128px` |


## 4. Border Radius

| CSS Variable | Token Name | Value |
| --- | --- | --- |
| `--radius-none` | `radius.none` | `0px` |
| `--radius-xs` | `radius.xs` | `2px` |
| `--radius-sm` | `radius.sm` | `4px` |
| `--radius-md` | `radius.md` | `8px` |
| `--radius-lg` | `radius.lg` | `12px` |
| `--radius-xl` | `radius.xl` | `16px` |
| `--radius-2xl` | `radius.2xl` | `24px` |
| `--radius-3xl` | `radius.3xl` | `32px` |
| `--radius-4xl` | `radius.4xl` | `40px` |
| `--radius-5xl` | `radius.5xl` | `48px` |
| `--radius-6xl` | `radius.6xl` | `64px` |
| `--radius-7xl` | `radius.7xl` | `80px` |
| `--radius-8xl` | `radius.8xl` | `128px` |
| `--radius-full` | `radius.full` | `9999px` |


## 5. Border Width

| CSS Variable | Token Name | Value |
| --- | --- | --- |
| `--border-width-none` | `border-width.none` | `0px` |
| `--border-width-thin` | `border-width.thin` | `1px` |
| `--border-width-medium` | `border-width.medium` | `2px` |
| `--border-width-thick` | `border-width.thick` | `4px` |


## 6. Typography

### 6a. Font Families

| CSS Variable | Value | Fallback |
| --- | --- | --- |
| `--font-family-primary` | `Gill Sans` | `Arial` |
| `--font-family-secondary` | `Inter` | `Arial` |

### 6b. Font Weights

| CSS Variable | Name | Value |
| --- | --- | --- |
| `--font-weight-light` | `light` | `300` |
| `--font-weight-regular` | `regular` | `400` |
| `--font-weight-medium` | `medium` | `500` |
| `--font-weight-semibold` | `semibold` | `600` |
| `--font-weight-bold` | `bold` | `700` |
| `--font-weight-black` | `black` | `900` |

### 6c. Font Sizes

| CSS Variable | Value |
| --- | --- |
| `--font-size-10` | `10px` |
| `--font-size-11` | `11px` |
| `--font-size-12` | `12px` |
| `--font-size-13` | `13px` |
| `--font-size-14` | `14px` |
| `--font-size-15` | `15px` |
| `--font-size-16` | `16px` |
| `--font-size-18` | `18px` |
| `--font-size-20` | `20px` |
| `--font-size-22` | `22px` |
| `--font-size-24` | `24px` |
| `--font-size-28` | `28px` |
| `--font-size-32` | `32px` |
| `--font-size-36` | `36px` |
| `--font-size-40` | `40px` |
| `--font-size-48` | `48px` |
| `--font-size-56` | `56px` |
| `--font-size-64` | `64px` |
| `--font-size-72` | `72px` |
| `--font-size-80` | `80px` |
| `--font-size-92` | `92px` |

### 6d. Line Heights

| CSS Variable | Font size | Line Height |
| --- | --- | --- |
| `--line-height-10` | `10px` | `14px` |
| `--line-height-11` | `11px` | `16px` |
| `--line-height-12` | `12px` | `16px` |
| `--line-height-13` | `13px` | `18px` |
| `--line-height-14` | `14px` | `20px` |
| `--line-height-15` | `15px` | `22px` |
| `--line-height-16` | `16px` | `24px` |
| `--line-height-18` | `18px` | `26px` |
| `--line-height-20` | `20px` | `28px` |
| `--line-height-22` | `22px` | `32px` |
| `--line-height-24` | `24px` | `32px` |
| `--line-height-28` | `28px` | `36px` |
| `--line-height-32` | `32px` | `40px` |
| `--line-height-36` | `36px` | `44px` |
| `--line-height-40` | `40px` | `48px` |
| `--line-height-48` | `48px` | `56px` |
| `--line-height-56` | `56px` | `64px` |
| `--line-height-64` | `64px` | `72px` |
| `--line-height-72` | `72px` | `80px` |
| `--line-height-80` | `80px` | `96px` |
| `--line-height-92` | `92px` | `108px` |

### 6e. Letter Spacing

| CSS Variable | Value |
| --- | --- |
| `--letter-spacing-0` | `0px` |
| `--letter-spacing-neg-0_5` | `-0.5px` |
| `--letter-spacing-neg-1` | `-1px` |
| `--letter-spacing-neg-1_5` | `-1.5px` |
| `--letter-spacing-neg-2` | `-2px` |
| `--letter-spacing-neg-4` | `-4px` |


## 7. Text Styles (Composite)

> Composite typography tokens. Each maps to a set of CSS properties.

| Token | Font Family | Size | Line Height | Weight | Letter Spacing |
| --- | --- | --- | --- | --- | --- |
| `text.display.lg` | `Gill Sans` | `64px` | `72px` | `700` | `-2px` |
| `text.display.md` | `Gill Sans` | `56px` | `64px` | `600` | `-2px` |
| `text.display.sm` | `Gill Sans` | `48px` | `56px` | `600` | `-1px` |
| `text.title.lg` | `Inter` | `40px` | `48px` | `600` | `-1px` |
| `text.title.md` | `Inter` | `32px` | `40px` | `600` | `-1px` |
| `text.title.sm` | `Inter` | `28px` | `36px` | `600` | `0px` |
| `text.body.lg` | `Inter` | `18px` | `26px` | `400` | `0px` |
| `text.body.md` | `Inter` | `16px` | `24px` | `400` | `0px` |
| `text.body.sm` | `Inter` | `14px` | `20px` | `400` | `0px` |
| `text.label.lg` | `Inter` | `16px` | `24px` | `500` | `0px` |
| `text.label.md` | `Inter` | `14px` | `20px` | `500` | `0px` |
| `text.label.sm` | `Inter` | `12px` | `16px` | `500` | `0px` |
| `text.caption.lg` | `Inter` | `13px` | `18px` | `400` | `0px` |
| `text.caption.md` | `Inter` | `12px` | `16px` | `400` | `0px` |
| `text.caption.sm` | `Inter` | `10px` | `14px` | `400` | `0px` |
| `text.hero.lg` | `Gill Sans` | `92px` | `108px` | `700` | `-4px` |
| `text.hero.md` | `Gill Sans` | `80px` | `96px` | `700` | `-4px` |
| `text.hero.sm` | `Gill Sans` | `72px` | `80px` | `700` | `-2px` |


## 8. Sizes

### 8a. Icon Sizes

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--size-icon-xs` | `size.icon.xs` | `12px` |
| `--size-icon-sm` | `size.icon.sm` | `16px` |
| `--size-icon-md` | `size.icon.md` | `20px` |
| `--size-icon-lg` | `size.icon.lg` | `24px` |
| `--size-icon-xl` | `size.icon.xl` | `32px` |
| `--size-icon-2xl` | `size.icon.2xl` | `40px` |
| `--size-icon-3xl` | `size.icon.3xl` | `48px` |

### 8b. Component Sizes (min-height scale)

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--size-component-sm` | `size.component.sm` | `24px` |
| `--size-component-md` | `size.component.md` | `32px` |
| `--size-component-lg` | `size.component.lg` | `40px` |
| `--size-component-xl` | `size.component.xl` | `48px` |
| `--size-component-2xl` | `size.component.2xl` | `64px` |


## 9. Breakpoints

| CSS Variable | Value |
| --- | --- |
| `--screen-mobile` | `390px` |
| `--screen-tablet` | `768px` |
| `--screen-desktop` | `1440px` |


## 10. Effects & Shadows

| Token | box-shadow value | Usage |
| --- | --- | --- |
| `elevation.interactive.default` | `0px 1px 3px 0px rgba(0,0,0,0.16)` | Cards, interactive elements at rest |
| `elevation.interactive.hover` | `0px 3px 6px 0px rgba(0,0,0,0.16)` | Cards, interactive elements on hover |
| `elevation.interactive.overlay` | `0px 10px 20px 0px rgba(0,0,0,0.16)` | Dropdowns, menus, tooltips |
| `elevation.content.overlay` | `0px 14px 28px 0px rgba(0,0,0,0.16)` | Modals, dialogs |
| `elevation.content.style` | `0px 0px 38px 0px rgba(0,0,0,0.16)` | Ambient glow effect |
| `focus.ring` | `0px 0px 0px 4px #0000ff, 0px 0px 0px 2px #f5f7f7` | All interactive elements on :focus-visible |


## 11. Motion

### 11a. Easing

| CSS Variable | Value |
| --- | --- |
| `--easing-linear` | `linear` |
| `--easing-ease` | `ease` |
| `--easing-ease-in` | `ease-in` |
| `--easing-ease-out` | `ease-out` |
| `--easing-ease-in-out` | `ease-in-out` |
| `--easing-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

### 11b. Duration (ms)

> Note: DTM exports duration as px — treat the number as milliseconds (e.g. `200px` = `200ms`).

| CSS Variable | Value |
| --- | --- |
| `--duration-0` | `0ms` |
| `--duration-100` | `100ms` |
| `--duration-150` | `150ms` |
| `--duration-200` | `200ms` |
| `--duration-250` | `250ms` |
| `--duration-300` | `300ms` |
| `--duration-400` | `400ms` |
| `--duration-500` | `500ms` |
| `--duration-700` | `700ms` |
| `--duration-1000` | `1000ms` |
| `--duration-1500` | `1500ms` |
| `--duration-2000` | `2000ms` |
| `--duration-2500` | `2500ms` |

### 11c. Delay (ms)

| CSS Variable | Value |
| --- | --- |
| `--delay-0` | `0ms` |
| `--delay-50` | `50ms` |
| `--delay-100` | `100ms` |
| `--delay-150` | `150ms` |
| `--delay-200` | `200ms` |
| `--delay-250` | `250ms` |
| `--delay-300` | `300ms` |


## 12. Component Tokens (Applied)

> These are semantic tokens scoped to specific components.
> Colour values show resolved light / dark.


### Button

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Button-sm-padding-horizontal` | `sm.padding-horizontal` | `8px` |
| `--Button-sm-padding-vertical` | `sm.padding-vertical` | `2px` |
| `--Button-sm-gap` | `sm.gap` | `4px` |
| `--Button-sm-height` | `sm.height` | `32px` |
| `--Button-sm-border-radius` | `sm.border-radius` | `8px` |
| `--Button-md-padding-horizontal` | `md.padding-horizontal` | `12px` |
| `--Button-md-padding-vertical` | `md.padding-vertical` | `4px` |
| `--Button-md-gap` | `md.gap` | `8px` |
| `--Button-md-height` | `md.height` | `40px` |
| `--Button-md-border-radius` | `md.border-radius` | `8px` |
| `--Button-lg-padding-horizontal` | `lg.padding-horizontal` | `16px` |
| `--Button-lg-padding-vertical` | `lg.padding-vertical` | `8px` |
| `--Button-lg-gap` | `lg.gap` | `12px` |
| `--Button-lg-height` | `lg.height` | `48px` |
| `--Button-lg-border-radius` | `lg.border-radius` | `8px` |
| `--Button-default-border-width` | `default.border-width` | `1px` |
| `--Button-focused-border-width` | `focused.border-width` | `2px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Button-primary-default-background` | `primary.default.background` | `#0000ff` | `#3333ff` |
| `--Button-primary-default-content` | `primary.default.content` | `#f2f2f2` | `#1a1a1a` |
| `--Button-primary-hover-background` | `primary.hover.background` | `#0000cc` | `#6666ff` |
| `--Button-primary-pressed-background` | `primary.pressed.background` | `#0000cc` | `#6666ff` |
| `--Button-primary-focused-background` | `primary.focused.background` | `#0000ff` | `#3333ff` |
| `--Button-primary-focused-border` | `primary.focused.border` | `#000099` | `#9999ff` |
| `--Button-primary-disabled-background` | `primary.disabled.background` | `#e5e5e5` | `#333333` |
| `--Button-primary-disabled-content` | `primary.disabled.content` | `#666666` | `#999999` |
| `--Button-secondary-default-background` | `secondary.default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Button-secondary-default-border` | `secondary.default.border` | `#0000ff` | `#3333ff` |
| `--Button-secondary-default-content` | `secondary.default.content` | `#0000cc` | `#6666ff` |
| `--Button-secondary-hover-background` | `secondary.hover.background` | `#e5e5e5` | `#333333` |
| `--Button-secondary-pressed-background` | `secondary.pressed.background` | `#cccccc` | `#4d4d4d` |
| `--Button-secondary-focused-border` | `secondary.focused.border` | `#000099` | `#9999ff` |
| `--Button-secondary-disabled-content` | `secondary.disabled.content` | `#666666` | `#999999` |
| `--Button-secondary-disabled-border` | `secondary.disabled.border` | `#cccccc` | `#4d4d4d` |
| `--Button-ghost-default-content` | `ghost.default.content` | `#0000cc` | `#6666ff` |
| `--Button-ghost-hover-background` | `ghost.hover.background` | `#e5e5e5` | `#333333` |
| `--Button-ghost-pressed-background` | `ghost.pressed.background` | `#cccccc` | `#4d4d4d` |
| `--Button-ghost-focused-border` | `ghost.focused.border` | `#000099` | `#9999ff` |
| `--Button-ghost-disabled-content` | `ghost.disabled.content` | `#666666` | `#999999` |
| `--Button-destructive-default-background` | `destructive.default.background` | `#ed2012` | `#f14d41` |
| `--Button-destructive-default-content` | `destructive.default.content` | `#f2f2f2` | `#1a1a1a` |
| `--Button-destructive-hover-background` | `destructive.hover.background` | `#be1a0e` | `#f47971` |
| `--Button-destructive-pressed-background` | `destructive.pressed.background` | `#be1a0e` | `#f47971` |
| `--Button-destructive-focused-background` | `destructive.focused.background` | `#ed2012` | `#f14d41` |
| `--Button-destructive-focused-border` | `destructive.focused.border` | `#8e130b` | `#f8a6a0` |
| `--Button-destructive-disabled-background` | `destructive.disabled.background` | `#e5e5e5` | `#333333` |
| `--Button-destructive-disabled-content` | `destructive.disabled.content` | `#666666` | `#999999` |

### Chip

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Chip-sm-padding-horizontal` | `sm.padding-horizontal` | `4px` |
| `--Chip-sm-padding-vertical` | `sm.padding-vertical` | `2px` |
| `--Chip-sm-gap` | `sm.gap` | `4px` |
| `--Chip-sm-border-radius` | `sm.border-radius` | `9999px` |
| `--Chip-sm-border-width` | `sm.border-width` | `1px` |
| `--Chip-md-padding-horizontal` | `md.padding-horizontal` | `8px` |
| `--Chip-md-padding-vertical` | `md.padding-vertical` | `4px` |
| `--Chip-md-gap` | `md.gap` | `4px` |
| `--Chip-md-border-radius` | `md.border-radius` | `9999px` |
| `--Chip-md-border-width` | `md.border-width` | `1px` |
| `--Chip-lg-padding-horizontal` | `lg.padding-horizontal` | `12px` |
| `--Chip-lg-padding-vertical` | `lg.padding-vertical` | `8px` |
| `--Chip-lg-gap` | `lg.gap` | `4px` |
| `--Chip-lg-border-radius` | `lg.border-radius` | `9999px` |
| `--Chip-lg-border-width` | `lg.border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Chip-filled-default-background` | `filled.default.background` | `#e8e8fc` | `#000033` |
| `--Chip-filled-default-content` | `filled.default.content` | `#0000cc` | `#6666ff` |
| `--Chip-filled-hover-background` | `filled.hover.background` | `#0000ff` | `#3333ff` |
| `--Chip-filled-hover-content` | `filled.hover.content` | `#f2f2f2` | `#1a1a1a` |
| `--Chip-filled-pressed-background` | `filled.pressed.background` | `#0000ff` | `#3333ff` |
| `--Chip-filled-pressed-content` | `filled.pressed.content` | `#f2f2f2` | `#1a1a1a` |
| `--Chip-outlined-default-background` | `outlined.default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Chip-outlined-default-border` | `outlined.default.border` | `#0000ff` | `#3333ff` |
| `--Chip-outlined-default-content` | `outlined.default.content` | `#0000cc` | `#6666ff` |
| `--Chip-outlined-hover-background` | `outlined.hover.background` | `#e5e5e5` | `#333333` |
| `--Chip-outlined-hover-content` | `outlined.hover.content` | `#0000cc` | `#6666ff` |
| `--Chip-outlined-hover-border` | `outlined.hover.border` | `#0000ff` | `#3333ff` |
| `--Chip-outlined-pressed-background` | `outlined.pressed.background` | `#e5e5e5` | `#333333` |
| `--Chip-outlined-pressed-border` | `outlined.pressed.border` | `#0000ff` | `#3333ff` |
| `--Chip-outlined-pressed-content` | `outlined.pressed.content` | `#0000cc` | `#6666ff` |
| `--Chip-error-background` | `error.background` | `#fde9e7` | `#8e130b` |
| `--Chip-error-border` | `error.border` | `#ed2012` | `#f14d41` |
| `--Chip-error-content` | `error.content` | `#be1a0e` | `#f47971` |
| `--Chip-disabled-background` | `disabled.background` | `#e5e5e5` | `#333333` |
| `--Chip-disabled-content` | `disabled.content` | `#666666` | `#999999` |

### Form-Controls

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Form-Controls-sm-size` | `sm.size` | `16px` |
| `--Form-Controls-sm-gap` | `sm.gap` | `8px` |
| `--Form-Controls-sm-border-width` | `sm.border-width` | `2px` |
| `--Form-Controls-sm-border-radius` | `sm.border-radius` | `4px` |
| `--Form-Controls-md-size` | `md.size` | `20px` |
| `--Form-Controls-md-gap` | `md.gap` | `8px` |
| `--Form-Controls-md-border-width` | `md.border-width` | `2px` |
| `--Form-Controls-md-border-radius` | `md.border-radius` | `4px` |
| `--Form-Controls-lg-size` | `lg.size` | `24px` |
| `--Form-Controls-lg-gap` | `lg.gap` | `8px` |
| `--Form-Controls-lg-border-width` | `lg.border-width` | `2px` |
| `--Form-Controls-lg-border-radius` | `lg.border-radius` | `4px` |
| `--Form-Controls-switch-sm-track-width` | `switch.sm.track-width` | `24px` |
| `--Form-Controls-switch-sm-border-radius` | `switch.sm.border-radius` | `9999px` |
| `--Form-Controls-switch-md-track-width` | `switch.md.track-width` | `32px` |
| `--Form-Controls-switch-md-border-radius` | `switch.md.border-radius` | `9999px` |
| `--Form-Controls-switch-lg-track-width` | `switch.lg.track-width` | `40px` |
| `--Form-Controls-switch-lg-border-radius` | `switch.lg.border-radius` | `9999px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Form-Controls-switch-on-track` | `switch.on.track` | `#0000ff` | `#3333ff` |
| `--Form-Controls-switch-off-track` | `switch.off.track` | `#cccccc` | `#4d4d4d` |
| `--Form-Controls-switch-off-border` | `switch.off.border` | `#808080` | `#999999` |
| `--Form-Controls-switch-thumb` | `switch.thumb` | `#f2f2f2` | `#1a1a1a` |
| `--Form-Controls-default-border` | `default.border` | `#808080` | `#999999` |
| `--Form-Controls-checked-background` | `checked.background` | `#0000ff` | `#3333ff` |
| `--Form-Controls-checked-content` | `checked.content` | `#f2f2f2` | `#1a1a1a` |
| `--Form-Controls-hover-border` | `hover.border` | `#0000ff` | `#3333ff` |
| `--Form-Controls-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Form-Controls-error-border` | `error.border` | `#ed2012` | `#f14d41` |
| `--Form-Controls-error-background` | `error.background` | `#ed2012` | `#f14d41` |
| `--Form-Controls-disabled-background` | `disabled.background` | `#e5e5e5` | `#333333` |
| `--Form-Controls-disabled-border` | `disabled.border` | `#cccccc` | `#4d4d4d` |
| `--Form-Controls-disabled-content` | `disabled.content` | `#666666` | `#999999` |
| `--Form-Controls-label-default` | `label.default` | `#1a1a1a` | `#f2f2f2` |

### Input-Fields

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Input-Fields-sm-padding-horizontal` | `sm.padding-horizontal` | `8px` |
| `--Input-Fields-sm-padding-vertical` | `sm.padding-vertical` | `8px` |
| `--Input-Fields-sm-height` | `sm.height` | `32px` |
| `--Input-Fields-sm-border-radius` | `sm.border-radius` | `8px` |
| `--Input-Fields-sm-gap` | `sm.gap` | `8px` |
| `--Input-Fields-sm-border-width` | `sm.border-width` | `1px` |
| `--Input-Fields-md-padding-horizontal` | `md.padding-horizontal` | `12px` |
| `--Input-Fields-md-padding-vertical` | `md.padding-vertical` | `8px` |
| `--Input-Fields-md-height` | `md.height` | `40px` |
| `--Input-Fields-md-border-radius` | `md.border-radius` | `8px` |
| `--Input-Fields-md-gap` | `md.gap` | `8px` |
| `--Input-Fields-md-border-width` | `md.border-width` | `1px` |
| `--Input-Fields-lg-padding-horizontal` | `lg.padding-horizontal` | `16px` |
| `--Input-Fields-lg-padding-vertical` | `lg.padding-vertical` | `12px` |
| `--Input-Fields-lg-height` | `lg.height` | `48px` |
| `--Input-Fields-lg-border-radius` | `lg.border-radius` | `8px` |
| `--Input-Fields-lg-gap` | `lg.gap` | `8px` |
| `--Input-Fields-lg-border-width` | `lg.border-width` | `1px` |
| `--Input-Fields-label-gap` | `label.gap` | `4px` |
| `--Input-Fields-focused-border-width` | `focused.border-width` | `2px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Input-Fields-label-color` | `label.color` | `#666666` | `#999999` |
| `--Input-Fields-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Input-Fields-default-background` | `default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Input-Fields-default-border` | `default.border` | `#b2b2b2` | `#666666` |
| `--Input-Fields-default-content` | `default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Input-Fields-default-placeholder` | `default.placeholder` | `#666666` | `#999999` |
| `--Input-Fields-hover-border` | `hover.border` | `#808080` | `#999999` |
| `--Input-Fields-error-border` | `error.border` | `#ed2012` | `#f14d41` |
| `--Input-Fields-error-content` | `error.content` | `#be1a0e` | `#f47971` |
| `--Input-Fields-disabled-background` | `disabled.background` | `#e5e5e5` | `#333333` |
| `--Input-Fields-disabled-content` | `disabled.content` | `#666666` | `#999999` |
| `--Input-Fields-helper-color` | `helper.color` | `#666666` | `#999999` |
| `--Input-Fields-helper-error` | `helper.error` | `#be1a0e` | `#f47971` |

### Alert

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Alert-padding-horizontal` | `padding-horizontal` | `16px` |
| `--Alert-padding-vertical` | `padding-vertical` | `12px` |
| `--Alert-gap` | `gap` | `12px` |
| `--Alert-border-radius` | `border-radius` | `12px` |
| `--Alert-icon-size` | `icon-size` | `20px` |
| `--Alert-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Alert-info-background` | `info.background` | `#e7f2fe` | `#084d91` |
| `--Alert-info-border` | `info.border` | `#0d80f2` | `#3d99f5` |
| `--Alert-info-icon` | `info.icon` | `#0a66c2` | `#6eb2f7` |
| `--Alert-info-title` | `info.title` | `#0a66c2` | `#6eb2f7` |
| `--Alert-info-content` | `info.content` | `#1a1a1a` | `#f2f2f2` |
| `--Alert-success-background` | `success.background` | `#e9fbf0` | `#15843e` |
| `--Alert-success-border` | `success.border` | `#24db67` | `#50e285` |
| `--Alert-success-icon` | `success.icon` | `#1daf52` | `#7beaa4` |
| `--Alert-success-title` | `success.title` | `#1daf52` | `#7beaa4` |
| `--Alert-success-content` | `success.content` | `#1a1a1a` | `#f2f2f2` |
| `--Alert-warning-background` | `warning.background` | `#fef5e6` | `#956004` |
| `--Alert-warning-border` | `warning.border` | `#f9a006` | `#fab338` |
| `--Alert-warning-icon` | `warning.icon` | `#c78005` | `#fbc66a` |
| `--Alert-warning-title` | `warning.title` | `#c78005` | `#fbc66a` |
| `--Alert-warning-content` | `warning.content` | `#1a1a1a` | `#f2f2f2` |
| `--Alert-error-background` | `error.background` | `#fde9e7` | `#8e130b` |
| `--Alert-error-border` | `error.border` | `#ed2012` | `#f14d41` |
| `--Alert-error-icon` | `error.icon` | `#be1a0e` | `#f47971` |
| `--Alert-error-title` | `error.title` | `#be1a0e` | `#f47971` |
| `--Alert-error-content` | `error.content` | `#1a1a1a` | `#f2f2f2` |
| `--Alert-dismiss-icon` | `dismiss.icon` | `#666666` | `#999999` |

### Toast

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Toast-padding-horizontal` | `padding-horizontal` | `16px` |
| `--Toast-padding-vertical` | `padding-vertical` | `12px` |
| `--Toast-gap` | `gap` | `12px` |
| `--Toast-border-radius` | `border-radius` | `12px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Toast-default-background` | `default.background` | `#e5e5e5` | `#333333` |
| `--Toast-default-content` | `default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Toast-info-background` | `info.background` | `#e7f2fe` | `#084d91` |
| `--Toast-info-content` | `info.content` | `#1a1a1a` | `#f2f2f2` |
| `--Toast-success-background` | `success.background` | `#e9fbf0` | `#15843e` |
| `--Toast-success-content` | `success.content` | `#1a1a1a` | `#f2f2f2` |
| `--Toast-warning-background` | `warning.background` | `#fef5e6` | `#956004` |
| `--Toast-warning-content` | `warning.content` | `#1a1a1a` | `#f2f2f2` |
| `--Toast-error-background` | `error.background` | `#fde9e7` | `#8e130b` |
| `--Toast-error-content` | `error.content` | `#1a1a1a` | `#f2f2f2` |
| `--Toast-dismiss-icon` | `dismiss.icon` | `#666666` | `#999999` |

### Tooltip

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Tooltip-padding-horizontal` | `padding-horizontal` | `8px` |
| `--Tooltip-padding-vertical` | `padding-vertical` | `4px` |
| `--Tooltip-border-radius` | `border-radius` | `4px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Tooltip-background` | `background` | `#1a1a1a` | `#f2f2f2` |
| `--Tooltip-content` | `content` | `#f2f2f2` | `#1a1a1a` |
| `--Tooltip-arrow` | `arrow` | `#1a1a1a` | `#f2f2f2` |

### Loader

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Loader-sm-size` | `sm.size` | `16px` |
| `--Loader-sm-border-width` | `sm.border-width` | `2px` |
| `--Loader-md-size` | `md.size` | `24px` |
| `--Loader-md-border-width` | `md.border-width` | `2px` |
| `--Loader-lg-size` | `lg.size` | `32px` |
| `--Loader-lg-border-width` | `lg.border-width` | `2px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Loader-track` | `track` | `#e8e8fc` | `#000033` |
| `--Loader-fill` | `fill` | `#0000ff` | `#3333ff` |
| `--Loader-dot` | `dot` | `#0000ff` | `#3333ff` |

### Progress-Line

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Progress-Line-height` | `height` | `8px` |
| `--Progress-Line-border-radius` | `border-radius` | `9999px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Progress-Line-track` | `track` | `#e5e5e5` | `#333333` |
| `--Progress-Line-fill` | `fill` | `#0000ff` | `#3333ff` |
| `--Progress-Line-label` | `label` | `#666666` | `#999999` |

### Link

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Link-sm-gap` | `sm.gap` | `4px` |
| `--Link-md-gap` | `md.gap` | `4px` |
| `--Link-lg-gap` | `lg.gap` | `4px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Link-default-content` | `default.content` | `#0000cc` | `#6666ff` |
| `--Link-hover-content` | `hover.content` | `#0000cc` | `#6666ff` |
| `--Link-pressed-content` | `pressed.content` | `#f2f2f2` | `#1a1a1a` |
| `--Link-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Link-error-content` | `error.content` | `#be1a0e` | `#f47971` |
| `--Link-disabled-content` | `disabled.content` | `#666666` | `#999999` |

### Avatar

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Avatar-sm-size` | `sm.size` | `16px` |
| `--Avatar-sm-border-radius` | `sm.border-radius` | `9999px` |
| `--Avatar-md-size` | `md.size` | `20px` |
| `--Avatar-md-border-radius` | `md.border-radius` | `9999px` |
| `--Avatar-lg-size` | `lg.size` | `24px` |
| `--Avatar-lg-border-radius` | `lg.border-radius` | `9999px` |
| `--Avatar-xl-size` | `xl.size` | `40px` |
| `--Avatar-xl-border-radius` | `xl.border-radius` | `9999px` |
| `--Avatar-xxl-size` | `xxl.size` | `48px` |
| `--Avatar-xxl-border-radius` | `xxl.border-radius` | `9999px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Avatar-background` | `background` | `#e8e8fc` | `#000033` |
| `--Avatar-content` | `content` | `#0000cc` | `#6666ff` |
| `--Avatar-icon` | `icon` | `#0000cc` | `#6666ff` |

### Divider

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Divider-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Divider-color` | `color` | `#b2b2b2` | `#666666` |

### Tile

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Tile-padding` | `padding` | `16px` |
| `--Tile-gap` | `gap` | `12px` |
| `--Tile-border-radius` | `border-radius` | `12px` |
| `--Tile-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Tile-default-background` | `default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Tile-default-border` | `default.border` | `#b2b2b2` | `#666666` |
| `--Tile-hover-background` | `hover.background` | `#e5e5e5` | `#333333` |
| `--Tile-pressed-background` | `pressed.background` | `#cccccc` | `#4d4d4d` |
| `--Tile-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Tile-disabled-border` | `disabled.border` | `#cccccc` | `#4d4d4d` |
| `--Tile-title` | `title` | `#1a1a1a` | `#f2f2f2` |
| `--Tile-description` | `description` | `#666666` | `#999999` |

### Card

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Card-padding` | `padding` | `16px` |
| `--Card-gap` | `gap` | `12px` |
| `--Card-border-radius` | `border-radius` | `16px` |
| `--Card-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Card-default-background` | `default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Card-default-border` | `default.border` | `#b2b2b2` | `#666666` |
| `--Card-hover-background` | `hover.background` | `#e5e5e5` | `#333333` |
| `--Card-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Card-title` | `title` | `#1a1a1a` | `#f2f2f2` |
| `--Card-description` | `description` | `#666666` | `#999999` |

### Accordion

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Accordion-header-padding-h` | `header-padding-h` | `16px` |
| `--Accordion-header-padding-v` | `header-padding-v` | `12px` |
| `--Accordion-content-padding` | `content-padding` | `16px` |
| `--Accordion-border-radius` | `border-radius` | `12px` |
| `--Accordion-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Accordion-background` | `background` | `#f2f2f2` | `#1a1a1a` |
| `--Accordion-border` | `border` | `#b2b2b2` | `#666666` |
| `--Accordion-hover-background` | `hover.background` | `#e5e5e5` | `#333333` |
| `--Accordion-focused-border` | `focused.border` | `#000099` | `#9999ff` |
| `--Accordion-disabled-background` | `disabled.background` | `#e5e5e5` | `#333333` |
| `--Accordion-title` | `title` | `#1a1a1a` | `#f2f2f2` |
| `--Accordion-content` | `content` | `#1a1a1a` | `#f2f2f2` |
| `--Accordion-icon` | `icon` | `#666666` | `#999999` |
| `--Accordion-divider` | `divider` | `#cccccc` | `#4d4d4d` |

### Modal

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Modal-header-padding` | `header-padding` | `24px` |
| `--Modal-content-padding` | `content-padding` | `24px` |
| `--Modal-footer-padding` | `footer-padding` | `24px` |
| `--Modal-border-radius` | `border-radius` | `16px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Modal-background` | `background` | `#f2f2f2` | `#1a1a1a` |
| `--Modal-title` | `title` | `#1a1a1a` | `#f2f2f2` |
| `--Modal-divider` | `divider` | `#cccccc` | `#4d4d4d` |
| `--Modal-close-icon` | `close-icon` | `#666666` | `#999999` |

### Tabs

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Tabs-padding-horizontal` | `padding-horizontal` | `16px` |
| `--Tabs-padding-vertical` | `padding-vertical` | `12px` |
| `--Tabs-indicator-height` | `indicator-height` | `2px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Tabs-default-content` | `default.content` | `#666666` | `#999999` |
| `--Tabs-hover-background` | `hover.background` | `#e5e5e5` | `#333333` |
| `--Tabs-active-content` | `active.content` | `#0000cc` | `#6666ff` |
| `--Tabs-active-indicator` | `active.indicator` | `#0000ff` | `#3333ff` |
| `--Tabs-disabled-content` | `disabled.content` | `#666666` | `#999999` |
| `--Tabs-border` | `border` | `#b2b2b2` | `#666666` |

### Menu

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Menu-item-padding-h` | `item-padding-h` | `12px` |
| `--Menu-item-height` | `item-height` | `24px` |
| `--Menu-item-gap` | `item-gap` | `8px` |
| `--Menu-item-border-radius` | `item-border-radius` | `8px` |
| `--Menu-panel-padding` | `panel-padding` | `8px` |
| `--Menu-panel-border-radius` | `panel-border-radius` | `16px` |
| `--Menu-panel-border-width` | `panel-border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Menu-panel-background` | `panel.background` | `#f2f2f2` | `#1a1a1a` |
| `--Menu-panel-border` | `panel.border` | `#b2b2b2` | `#666666` |
| `--Menu-item-default-content` | `item.default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Menu-item-hover-background` | `item.hover.background` | `#e5e5e5` | `#333333` |
| `--Menu-item-active-background` | `item.active.background` | `#e8e8fc` | `#000033` |
| `--Menu-item-active-content` | `item.active.content` | `#0000cc` | `#6666ff` |
| `--Menu-item-disabled-content` | `item.disabled.content` | `#666666` | `#999999` |
| `--Menu-item-danger-content` | `item.danger.content` | `#be1a0e` | `#f47971` |
| `--Menu-item-icon` | `item.icon` | `#666666` | `#999999` |

### Breadcrumbs

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Breadcrumbs-gap` | `gap` | `4px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Breadcrumbs-default-content` | `default.content` | `#0000cc` | `#6666ff` |
| `--Breadcrumbs-hover-content` | `hover.content` | `#0000cc` | `#6666ff` |
| `--Breadcrumbs-active-content` | `active.content` | `#1a1a1a` | `#f2f2f2` |
| `--Breadcrumbs-disabled-content` | `disabled.content` | `#666666` | `#999999` |
| `--Breadcrumbs-separator` | `separator` | `#666666` | `#999999` |

### Navigation-Controls

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Navigation-Controls-filter-padding-h` | `filter.padding-h` | `12px` |
| `--Navigation-Controls-filter-padding-v` | `filter.padding-v` | `4px` |
| `--Navigation-Controls-filter-border-radius` | `filter.border-radius` | `9999px` |
| `--Navigation-Controls-filter-border-width` | `filter.border-width` | `1px` |
| `--Navigation-Controls-segment-padding-h` | `segment.padding-h` | `16px` |
| `--Navigation-Controls-segment-height` | `segment.height` | `24px` |
| `--Navigation-Controls-segment-border-radius` | `segment.border-radius` | `8px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Navigation-Controls-filter-default-background` | `filter.default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Navigation-Controls-filter-default-border` | `filter.default.border` | `#b2b2b2` | `#666666` |
| `--Navigation-Controls-filter-default-content` | `filter.default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Navigation-Controls-filter-active-background` | `filter.active.background` | `#e8e8fc` | `#000033` |
| `--Navigation-Controls-filter-active-border` | `filter.active.border` | `#0000ff` | `#3333ff` |
| `--Navigation-Controls-filter-active-content` | `filter.active.content` | `#0000cc` | `#6666ff` |
| `--Navigation-Controls-filter-hover-background` | `filter.hover.background` | `#e5e5e5` | `#333333` |
| `--Navigation-Controls-filter-disabled-content` | `filter.disabled.content` | `#666666` | `#999999` |
| `--Navigation-Controls-segment-track-background` | `segment.track.background` | `#e5e5e5` | `#333333` |
| `--Navigation-Controls-segment-track-border` | `segment.track.border` | `#b2b2b2` | `#666666` |
| `--Navigation-Controls-segment-active-background` | `segment.active.background` | `#f2f2f2` | `#1a1a1a` |
| `--Navigation-Controls-segment-active-content` | `segment.active.content` | `#0000cc` | `#6666ff` |
| `--Navigation-Controls-segment-default-content` | `segment.default.content` | `#666666` | `#999999` |
| `--Navigation-Controls-segment-disabled-content` | `segment.disabled.content` | `#666666` | `#999999` |

### Table

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Table-cell-padding-h` | `cell-padding-h` | `12px` |
| `--Table-cell-height` | `cell-height` | `24px` |
| `--Table-cell-border-width` | `cell-border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Table-header-background` | `header.background` | `#cccccc` | `#4d4d4d` |
| `--Table-header-content` | `header.content` | `#1a1a1a` | `#f2f2f2` |
| `--Table-header-hover-background` | `header.hover.background` | `#e5e5e5` | `#333333` |
| `--Table-header-sorted-content` | `header.sorted.content` | `#0000cc` | `#6666ff` |
| `--Table-cell-default-background` | `cell.default.background` | `#f2f2f2` | `#1a1a1a` |
| `--Table-cell-default-content` | `cell.default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Table-cell-hover-background` | `cell.hover.background` | `#e5e5e5` | `#333333` |
| `--Table-cell-selected-background` | `cell.selected.background` | `#e8e8fc` | `#000033` |
| `--Table-cell-selected-content` | `cell.selected.content` | `#0000cc` | `#6666ff` |
| `--Table-cell-error-background` | `cell.error.background` | `#fde9e7` | `#8e130b` |
| `--Table-cell-error-content` | `cell.error.content` | `#be1a0e` | `#f47971` |
| `--Table-border` | `border` | `#b2b2b2` | `#666666` |

### Date-Picker

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Date-Picker-padding` | `padding` | `16px` |
| `--Date-Picker-border-radius` | `border-radius` | `16px` |
| `--Date-Picker-cell-size` | `cell-size` | `24px` |
| `--Date-Picker-cell-radius` | `cell-radius` | `8px` |
| `--Date-Picker-border-width` | `border-width` | `1px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Date-Picker-background` | `background` | `#f2f2f2` | `#1a1a1a` |
| `--Date-Picker-border` | `border` | `#b2b2b2` | `#666666` |
| `--Date-Picker-header-content` | `header.content` | `#1a1a1a` | `#f2f2f2` |
| `--Date-Picker-nav-content` | `nav.content` | `#0000cc` | `#6666ff` |
| `--Date-Picker-weekday-content` | `weekday.content` | `#666666` | `#999999` |
| `--Date-Picker-day-default-content` | `day.default.content` | `#1a1a1a` | `#f2f2f2` |
| `--Date-Picker-day-hover-background` | `day.hover.background` | `#e5e5e5` | `#333333` |
| `--Date-Picker-day-today-background` | `day.today.background` | `#e8e8fc` | `#000033` |
| `--Date-Picker-day-today-content` | `day.today.content` | `#0000cc` | `#6666ff` |
| `--Date-Picker-day-selected-background` | `day.selected.background` | `#0000ff` | `#3333ff` |
| `--Date-Picker-day-selected-content` | `day.selected.content` | `#f2f2f2` | `#1a1a1a` |

### Bottom-Sheet

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Bottom-Sheet-border-radius-top` | `border-radius-top` | `16px` |
| `--Bottom-Sheet-header-padding` | `header-padding` | `24px` |
| `--Bottom-Sheet-handle-width` | `handle-width` | `32px` |
| `--Bottom-Sheet-handle-height` | `handle-height` | `2px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Bottom-Sheet-background` | `background` | `#f2f2f2` | `#1a1a1a` |
| `--Bottom-Sheet-handle` | `handle` | `#b2b2b2` | `#666666` |
| `--Bottom-Sheet-title` | `title` | `#1a1a1a` | `#f2f2f2` |
| `--Bottom-Sheet-close-icon` | `close-icon` | `#666666` | `#999999` |

### Carousel

**Dimensions**

| CSS Variable | Token | Value |
| --- | --- | --- |
| `--Carousel-gap` | `gap` | `16px` |
| `--Carousel-slide-radius` | `slide-radius` | `12px` |
| `--Carousel-dot-size` | `dot-size` | `8px` |
| `--Carousel-dot-radius` | `dot-radius` | `9999px` |

**Colours**

| CSS Variable | Token | Light | Dark |
| --- | --- | --- | --- |
| `--Carousel-slide-background` | `slide.background` | `#e5e5e5` | `#333333` |
| `--Carousel-dot-default` | `dot.default` | `#e8e8fc` | `#000033` |
| `--Carousel-dot-active` | `dot.active` | `#0000ff` | `#3333ff` |
| `--Carousel-nav-content` | `nav.content` | `#0000cc` | `#6666ff` |
| `--Carousel-nav-background` | `nav.background` | `#e5e5e5` | `#333333` |


---

## How to use this file

### In CSS (`:root`)
```css
:root {
  --surface-brand-default: #0000ff;
  --content-neutral-default: #1a1a1a;
  /* ... all tokens above ... */
}

[data-theme="dark"] {
  --surface-brand-default: #3333ff;
  --content-neutral-default: #f2f2f2;
  /* ... only overrides ... */
}
```

### In an AI prompt
Paste this entire file (or the relevant sections) as context before asking Claude or Copilot to generate DFTS UI. The model will use the exact token names and resolved values.

### As a developer reference
Search this file by CSS variable name to find the resolved value for any token without opening Figma.

---
*Generated from Design Token Manager exports — DFTS Design System*
