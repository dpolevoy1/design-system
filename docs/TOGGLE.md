# Toggle switch — specification

Source: [Assemble Design system — Component overview](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/%E2%9A%92%EF%B8%8F-Assemble--Design-system?node-id=8096-64&m=dev) (`8096:64`). Visual measurements and token wiring align with the **Components / Elements / Toggle** instances in that frame (and related variant nodes, e.g. `8096:163`–`8096:184`).

## What it is

The toggle **changes a single boolean setting** (on/off), e.g. notifications in settings. It is **functionally similar to a checkbox**, but the **usage context** differs.

## Use cases (do / don’t)

| Do | Don’t |
|----|--------|
| One toggle on a page, or **two to three at most** | Multi-select lists (e.g. picking many emails) — use **checkboxes** |
| **Prominent** binary “feature on/off” | Scenarios that need **warning or error** as part of the control — use **checkbox** or **radio** patterns instead |
| **Immediate** effect when flipped | Don’t rely on a separate **Save** to apply the toggle’s meaning |

## Interaction

1. **Click target:** The user may activate the control by clicking **either** the switch **or** its **label** (same commitment as the Figma “Description of how this element operates” section).
2. **Effect is immediate:** Changing the toggle applies the setting **right away** — no “Save” step is required for the toggle itself.
3. **Unavailable:** If the control cannot be used, **disable** it (“lock” in Figma copy). **Do not** add field-style validation (e.g. “required”) for toggles.

## Layout & alignment

- The switch may sit **to the left** or **to the right** of its label.
- With **several** toggles on one screen, prefer **switch left, label right** for readability (Figma recommendation).
- Use token **`--toggle-label-gap`** (**8px**) between switch and label when laying out horizontally (matches `gap-[8px]` in the overview).

## Visual states (required)

Eight combinations: **`on` × `off`** each with **Default · Hover · Focus · Disabled**.

| | Default | Hover | Focus | Disabled |
|--|---------|-------|-------|----------|
| **Off** | `secondary/400` | `#9ba5b2` | `secondary/400` + ring `rgb(167 178 192 / 12%)` | `secondary/100` |
| **On** | `primary/600` (main) | `#143dde` | `primary/600` + ring `rgb(11 65 255 / 12%)` | `primary/500` |

- **Track:** 35×20 px, radius 10 px. **Thumb:** 16 px circle, 2 px inset; off = left, on = translated **15px** right.
- **Motion:** `0.22s`, `cubic-bezier(0.22, 1, 0.36, 1)` (see `--toggle-transition-*`).

Implementation in this package:

- **Tokens:** second `:root` block in [`tokens/color-palette.css`](../tokens/color-palette.css) (`--toggle-*`).
- **React:** [`ToggleIndicator`](../src/ToggleIndicator/) — visual only; parent supplies semantics and must spread **`toggleRowDataProps()`** (or set `[data-assemble-ds-toggle-row]`) and **`aria-disabled`** when disabled so the row-scoped hover/focus styles match the Figma matrix.

## Error / warning semantics

Per Figma: **the toggle does not define warning or error states.** Use other controls (checkbox / radio + messaging) when validation or error affordances are required.
