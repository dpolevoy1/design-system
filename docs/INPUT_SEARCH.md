# InputSearch — product rules

Sources:

- Component hub: [Figma **8855:2590**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2590)
- Component overview (rules): [Figma **8855:2126**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2126)

Shared tokens and base field behavior match **`Input`** — see **[`INPUT.md`](./INPUT.md)** and matrix [**8835:688**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688).

---

## Purpose

Single-line field with a **search affordance** (leading icon). Use for **in-context filtering** and quick lookup (`8855:2126` description).

---

## Layout (8855:2590)

| | **Base (`md`)** | **Small (`sm`)** |
|--|-----------------|------------------|
| Search icon | **16×16** | **12×12** |
| Icon ↔ text | **6px** (`--input-search-icon-gap`) | same |
| Text block ↔ trailing (e.g. clear) | **12px** (`--input-search-trailing-gap`) | same |

Heights, radii, padding, and border/shadow states match **`Input`** for the same `size`.

---

## Placeholder & focus (8855:2126 §02)

- Prefer the term **placeholder** (not “watermark”) — aligns with the HTML attribute.
- If the field name is unclear, use placeholder as **guidance**.
- On focus, the placeholder **brightens** (token: `--input-placeholder-focus` → Neutral 500); it **disappears** once the user types.

---

## Clearing (`ic_clear_form`, §03)

- If users often **replace** the query, offer a **clear** control (`clearable` on `InputSearch`).
- Clear appears when there is **at least one character** and stays visible **without focus**.
- Clicking clear **empties** the value and **focuses** the field again.
- Use **`/ic_clear_form/`** (16×16 in `md`) as the trailing icon; the implementation uses an equivalent SVG with `currentColor`.

`clearable` is intended for **controlled** usage: pass **`value`** and **`onChange`** so the parent can reset state when clear fires.

---

## Code

```tsx
import { InputSearch } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<InputSearch
  size="md"
  placeholder="Search…"
  aria-label="Search workspaces"
  value={q}
  onChange={(e) => setQ(e.target.value)}
  clearable
/>
```

Optional: `searchIcon` to replace the default glyph; `endAdornment` for extra trailing actions (after the clear button when `clearable`).
