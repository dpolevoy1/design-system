# Buttons — product rules

Sources in **Assemble — Design system**:

- [Component overview **8249:59**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-59) — usage, copy, icons, layout, spacing.
- [Buttons **8249:244**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-244) — variant matrix (primary, secondary, tertiary, delete, PowerPoint specials).

Implementation nodes:

| Variant | Figma |
|---------|--------|
| Primary | [8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251) |
| Secondary | [8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312) |
| Tertiary | [8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40) |
| Delete | [8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125) |

---

## Purpose

The button (CTA — call to action) **initiates an action**. Use it when you need to **capture attention** for a discrete command (vs. a low-emphasis link).

---

## Use cases (overview 8249:59)

- In modern UIs, buttons and links can look alike; pick a **button** when you need a **strong, obvious** affordance for a command.
- Prefer a button when the goal is to **draw the user’s attention** to a single action.

---

## Interaction (light theme)

- The control reacts to hover and press; enabled buttons **read darker** when interacted with.
- Fire the action **on release**, only if the pointer **pressed and released** over the same button (standard click semantics — use native `<button>` behavior).

---

## Label copy

1. **Sentence case** — capitalize the first word only (e.g. “Generate”, “Save”). Do **not** use ALL CAPS for labels.
2. Prefer **short, result-oriented** verbs / verb phrases (“Generate report”, “Set up in Assemble”). Avoid vague labels (“OK”, “Click here”) unless the consequence is obvious in context.
3. Use an **imperative / infinitive** style that answers “What should I do?” Exceptions: first-person consent patterns (“I agree to the terms”).
4. **One line only** — widen the button or shorten the label; do not stack two lines of text.
5. **Do not abbreviate** with a trailing ellipsis to cram copy. On A.Team surfaces, **do not use “…” in action titles** in most cases; clarify the action in the label instead (see ellipsis section in Figma for nuance and counterexamples).
6. If the name is still ambiguous, add **helper text beside or below** the control rather than over-long button text.

---

## Icons

- Icons may speed up scanning when paired with text.
- In **dense button groups**, icons can add noise — keep icons only for **key** actions or omit them.
- **Icon-only** is allowed when the symbol is **universally understood** (e.g. clear add / edit metaphors) and you expose an **`aria-label`**.

---

## Dimensions (tokens)

Aligned with **8249:59** §17 and component specs:

| | **Base (`md`)** | **Small (`sm`)** |
|--|-----------------|------------------|
| Height | 38px | 32px |
| Padding (y / x) | 8px / 16px | 8px / 12px |
| Gap (icon ↔ label) | 6px | 6px |
| Corner radius | 8px (`--button-*-radius-md`) | 6px (`--button-*-radius-sm`) |
| Icon | 16×16 | 16×16 |
| Body type | 14 / 22, tracking 0.14px | 12 / 16, tracking 0.18px |

`md` **text** and **icon+text** rows set **`min-width: 80px`** to match Figma instances.

**Spacing between adjacent CTAs** in a horizontal row: **`--button-group-gap` (6px)** — §18.

---

## Ellipsis in labels (overview 8249:59 §10–11)

- Desktop HIGs sometimes recommend “…” when more input may follow; that pattern has tradeoffs (unfamiliar users, visual balance, noise when many actions are deferred).
- **A.Team:** avoid ellipsis in action titles in most cases; prefer a **clear verb phrase** or **helper text** next to the control. Do **not** use “…” for irreversible actions like delete.

---

## Components in code

```tsx
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";
```

Pair **Delete** with confirmation patterns where destruction is irreversible.
