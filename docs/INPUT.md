# Input — product rules

Sources:

- Component hub (Inputs): [Figma **8835:682**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-682)
- State matrix: [Figma **8835:688**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688)
- Component overview: [Figma **8835:179**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-179)

---

## Purpose

The input lets people **enter a value** with desktop or mobile keyboards. Use it for **short text or numbers** that do not follow a strict, predictable format (overview).

---

## Sizes (overview §08 — “Dimensions and position”)

The field has **two sizes**, similar to buttons. Prefer **Small** when the control sits **inside another surface** (for example, inside a dropdown).

| | **Base (`md`)** | **Small (`sm`)** |
|--|-----------------|------------------|
| Height | 38px | 32px |
| Padding (y / x) | 7px / 12px (fits overview height with 14/22 type + 1px border) | 7px / 12px |
| Inner gap (text ↔ icon) | 8px (`--input-inner-gap`) | 8px |
| Corner radius | 8px | 6px |
| Typography | 14px / 22px, tracking 0.14px | 12px / 16px, tracking 0.18px |

---

## Layout: label, field, helper

- **Label → field:** `6px` (`--input-label-gap`). Keep labels **short and specific**.
- **Field → helper:** `4px` (`--input-helper-gap`); **warning / error** stacks use **`8px`** (`--input-helper-gap-validation`, hub + matrix).
- **Placeholder:** hint only; it should **not replace** a visible label when the label adds real context.
- **Helper text:** use for **extra context**, **success**, **warning**, or **error** messages (`validation` + `helperText` in code).

---

## States (light theme, matrix)

- **Default:** Neutral surface, **Secondary 300** border, light elevation shadow.
- **Hover:** **Secondary 400** border, slightly stronger shadow.
- **Focus:** **Primary 600** border and **3px** primary-tinted focus ring (use keyboard or pointer; native focus moves into the `<input>`).
- **Filled:** value color **Neutral 700**; placeholder styling is for empty fields only.
- **Disabled:** **Secondary 200** border, no shadow, **Secondary 200** value/placeholder tone.
- **Success:** **Additional green** border; neutral shadow; focused ring uses green tint.
- **Warning / Error:** **Orange** / **Additional red** border; dedicated shadow; helper line matches the state color.

---

## Icons (overview)

Optional **start** (`startAdornment`) or **end** (`endAdornment`) adornments. Trailing gap is **`--input-inner-gap` (8px)** by default; use **`layout="search"`** (or **`InputSearch`**) for **12px** before trailing controls per [InputSearch rules **8855:2126**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2126). Interactive controls need an accessible name (e.g. `aria-label` on `<button>`).

Dedicated search field: **`InputSearch`** — see **[`INPUT_SEARCH.md`](./INPUT_SEARCH.md)**.

---

## Tokens

Import once in the app shell:

```css
@import "@assemble/design-system/tokens/color-palette.css";
```

All input visuals are driven by **`--input-*`** in [`tokens/color-palette.css`](../tokens/color-palette.css).
