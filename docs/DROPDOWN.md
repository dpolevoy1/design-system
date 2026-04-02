# Dropdown menu — product rules

Sources:

- Trigger component: [Figma **8866:1480**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1480)
- Rules / usage: [Figma **8866:1112**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1112)

---

## Purpose

`DropdownTrigger` opens a `DropdownList` so users can pick one or more values from a bounded set of options. It should not be shipped as an isolated control without an attached list.

---

## Trigger sizes and shell

- **Base (`md`)**: height `38px`, padding `8px 12px`, radius `8px`
- **Small (`sm`)**: height `32px`, padding `7px 12px`, radius `6px`
- Content spacing:
  - trigger content cluster gap: `12px`
  - icon/value gap: `6px`
- Border: `1px solid`

States:

- **Default**: Neutral 100 bg, Secondary 300 border, subtle 1px/2px shadow
- **Hover**: Neutral 200 bg, Secondary 400 border, stronger hover shadow
- **Focus / expanded**: Primary 600 border + 3px primary ring tint
- **Disabled**: Secondary 200 border + disabled text
- **Warning**: Additional orange border + warning shadow/ring

---

## List shell and item rows

- List surface:
  - background: Neutral 100
  - radius: `12px`
  - shadow: `0 0 10px 0 rgba(0,0,0,0.08)`
- Item row:
  - height: `38px`
  - padding: `7px 8px`
  - radius: `6px`
  - text: 14/22
- Group title row:
  - height: `32px`
  - text: 12/16, Secondary 500

State behavior:

- selected item bg: `Primary-200`
- hovered item bg: `Primary-100`
- disabled item text: `Secondary-200` and non-interactive cursor

---

## Interaction rules

- Clicking the trigger opens/closes the list.
- Clicking outside closes the list without blocking page interactions.
- Selecting an item updates trigger label and closes the list (single-select pattern).
- Keyboard:
  - collapsed: open via Enter/Space/ArrowDown
  - expanded: ArrowUp/ArrowDown move hover target, Enter selects
- For lists with many options (rule guidance: >15), prefer searchable variant (`InputSearch` in list header / combo pattern).

---

## Width and layout guidance

- Trigger width should fit most expected values in the list.
- When trigger is paired with an adjacent button in one cluster, keep trigger at least button width and ideally `30–40px` wider.
- Long lists may include:
  - group titles
  - explanatory secondary lines (`Secondary-500`)
  - optional scrolling footer row

---

## Code

```tsx
import {
  DropdownTrigger,
  DropdownList,
  DropdownListItem,
  DropdownListTitle,
} from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<DropdownTrigger
  open={open}
  onClick={() => setOpen((v) => !v)}
  aria-haspopup="listbox"
>
  Priority
</DropdownTrigger>

{open ? (
  <DropdownList role="listbox" aria-label="Priority">
    <DropdownListItem selected>High priority</DropdownListItem>
    <DropdownListItem>Medium priority</DropdownListItem>
    <DropdownListItem>Low priority</DropdownListItem>
    <DropdownListTitle>Blocked</DropdownListTitle>
    <DropdownListItem disabled>Archived value</DropdownListItem>
  </DropdownList>
) : null}
```
