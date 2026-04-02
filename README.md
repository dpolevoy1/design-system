# A.Team Assemble — Design system

Shared **design tokens** and **React primitives** for [A.Team Assemble](https://github.com/dpolevoy1/SidebarMenu), aligned with the Figma file [**Assemble — Design system**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/).

**Repository:** [github.com/dpolevoy1/design-system](https://github.com/dpolevoy1/design-system)

## Install

```json
{
  "dependencies": {
    "@assemble/design-system": "github:dpolevoy1/design-system#main"
  }
}
```

Pin a **full commit SHA** for reproducible builds (copy from [commits on `main`](https://github.com/dpolevoy1/design-system/commits/main)):

```json
"@assemble/design-system": "github:dpolevoy1/design-system#<full-commit-sha>"
```

Copy the SHA from [commits on `main`](https://github.com/dpolevoy1/design-system/commits/main) (for example after release **`0.2.4`**); replace when you upgrade.

To work on this package **inside a monorepo** next to a consumer app, point at a folder instead:

```json
"@assemble/design-system": "file:../design-system"
```

```bash
npm install
```

### Vite

If you consume **TypeScript + CSS modules** from this package, exclude it from dependency pre-bundling so Vite transforms it correctly:

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    exclude: ["@assemble/design-system"],
  },
});
```

## Package exports

| Subpath | Contents |
|---------|----------|
| `@assemble/design-system` | `Tooltip`, `ToggleIndicator`, `Spinner`, `Input`, `InputSearch`, `DropdownTrigger`, `DropdownList`, `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `DeleteButton`, … |
| `@assemble/design-system/tooltip` | Tooltip |
| `@assemble/design-system/toggle-indicator` | Toggle |
| `@assemble/design-system/spinner` | Spinner |
| `@assemble/design-system/primary-button` | Primary CTA button |
| `@assemble/design-system/secondary-button` | Secondary CTA button |
| `@assemble/design-system/tertiary-button` | Tertiary CTA button / Ghost button |
| `@assemble/design-system/delete-button` | Delete CTA button / Destructive button |
| `@assemble/design-system/input` | Single-line text field (`Input`) |
| `@assemble/design-system/input-search` | Search field (`InputSearch`) |
| `@assemble/design-system/dropdown-menu` | Dropdown trigger + list primitives |
| `@assemble/design-system/tokens/color-palette.css` | Palette + **`--toggle-*`** + **`--button-*`** + **`--input-*`** |

Import tokens once in your app shell:

```css
@import "@assemble/design-system/tokens/color-palette.css";
```

### Buttons

Shared layout: **`sm`** / **`md`**, **16px** icon, **6px** icon–label gap, **`md` min-width 80px**, radii **8px** (`md`) / **6px** (`sm`). **Product rules** (copy, spacing, ellipsis): **[`docs/BUTTONS.md`](./docs/BUTTONS.md)** · Figma [overview **8249:59**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-59) · [Buttons hub **8249:244**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-244).

| Variant | Component | Figma node |
|---------|-----------|------------|
| Primary | `PrimaryButton` | [8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251) |
| Secondary | `SecondaryButton` | [8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312) |
| Tertiary | `TertiaryButton` | [8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40) |
| Delete | `DeleteButton` | [8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125) |

### Input

**`sm`** (32px) and **`md`** (38px) per Figma overview [**8835:179**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-179) §08; borders, shadows, and validation match the state matrix [**8835:688**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688). Component hub: [**8835:682**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-682). **Product rules:** **[`docs/INPUT.md`](./docs/INPUT.md)**.

```tsx
import { Input } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<Input
  size="md"
  label="Workspace name"
  placeholder="e.g. Design review"
  helperText="Shown on the share link."
/>

<Input
  size="sm"
  validation="error"
  helperText="Enter a valid email."
  aria-label="Email"
/>
```

### InputSearch

Leading search icon, **6px** icon–text gap, **12px** before trailing actions (e.g. clear). Figma: [**8855:2590**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2590) · rules [**8855:2126**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2126). **Product rules:** **[`docs/INPUT_SEARCH.md`](./docs/INPUT_SEARCH.md)**.

```tsx
import { InputSearch } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<InputSearch
  size="md"
  placeholder="Search…"
  aria-label="Search"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  clearable
/>
```

### Dropdown menu

Trigger + list primitives from [**8866:1480**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1480) with usage rules from [**8866:1112**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1112). Product guidance: **[`docs/DROPDOWN.md`](./docs/DROPDOWN.md)**.

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
  Select priority
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

---

## Contents

| Path | Description |
|------|-------------|
| [`tokens/color-palette.css`](./tokens/color-palette.css) | Full palette, **`--toggle-*`**, **`--button-*`**, **`--input-*`**, **`--dropdown-*`** (buttons [8249:59](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-59); inputs [8835:179](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-179) / [8835:688](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688) / search [8855:2590](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2590) / dropdown [8866:1480](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1480)). |
| [`src/Tooltip`](./src/Tooltip) | Default tooltip: dark panel, label + optional shortcut; **pointer** to the **right** and **slightly below** the cursor. |
| [`src/ToggleIndicator`](./src/ToggleIndicator) | Pill switch **thumb/track** only. Parent control must spread **`toggleRowDataProps()`** and set **`aria-disabled`** when needed so hover / focus / disabled styles apply (Figma [8096:64](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/%E2%9A%92%EF%B8%8F-Assemble--Design-system?node-id=8096-64&m=dev) matrix). |
| [`docs/TOGGLE.md`](./docs/TOGGLE.md) | **Full spec:** use cases, click targets, immediate apply, layout (`--toggle-label-gap` 8px), no toggle-level errors, disabled as “locked”. |
| [`docs/BUTTONS.md`](./docs/BUTTONS.md) | **Button usage** from Figma [**8249:59**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-59): labels, icons, dimensions, group gap. |
| [`docs/INPUT.md`](./docs/INPUT.md) | **Input usage** from [**8835:179**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-179) + states [**8835:688**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688); hub [**8835:682**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-682). |
| [`docs/INPUT_SEARCH.md`](./docs/INPUT_SEARCH.md) | **InputSearch** rules from [**8855:2126**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2126). |
| [`docs/DROPDOWN.md`](./docs/DROPDOWN.md) | **Dropdown trigger + list** rules from [**8866:1112**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1112) and component node [**8866:1480**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1480). |
| [`src/Input`](./src/Input) | **`<Input />`** — label, helper, `validation`, `startAdornment`, `endAdornment`, `layout`. |
| [`src/InputSearch`](./src/InputSearch) | **`<InputSearch />`** — leading icon, optional **`clearable`**, Figma [**8855:2590**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2590). |
| [`src/DropdownMenu`](./src/DropdownMenu) | **`<DropdownTrigger />`**, **`<DropdownList />`**, item/title/footer primitives. |
| [`src/Spinner`](./src/Spinner) | **Line** indeterminate spinner (`0.9s` linear rotation). Variants: **neutral** (`--color-neutral-100`) and **primary** (`--color-primary-600`). Sizes **sm**–**xl** (12–24px). |
| [`src/PrimaryButton`](./src/PrimaryButton) | **PowerPoint primary** — filled CTA; **`sm`** / **`md`**; icon / text / both ([Figma 8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251)). |
| [`src/SecondaryButton`](./src/SecondaryButton) | **Secondary** — bordered, flat surface, elevation shadows; focus ring ([8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312)). |
| [`src/TertiaryButton`](./src/TertiaryButton) | **Tertiary / ghost** — no border; **Secondary 600/700** text; **Primary 100/200** hover & focus wash ([8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40)). |
| [`src/DeleteButton`](./src/DeleteButton) | **Delete** — **Additional red** filled surface, white label, overlay states ([8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125)). |

### Toggle — interaction states

| | Default | Hover (row) | Focus-visible (row) | Disabled (`aria-disabled` on row) |
|--|---------|-------------|----------------------|-----------------------------------|
| **Off** | Secondary/400 | `#9ba5b2` | Secondary/400 + ring `rgb(167 178 192 / 12%)` | Secondary/100 |
| **On** | Primary/600 | `#143dde` | Primary/600 + ring `rgb(11 65 255 / 12%)` | Primary/500 |

Layout: **35×20** px track, **16** px thumb, **15** px travel; **0.22s**, `cubic-bezier(0.22, 1, 0.36, 1)`. Label spacing: **`--toggle-label-gap`** (8px).

**Product rules** (when to use a toggle, label hit-area, positioning, no “Save”, no toggle-level errors, disabled = locked): see **[docs/TOGGLE.md](./docs/TOGGLE.md)**.

```tsx
import {
  ToggleIndicator,
  toggleRowDataProps,
} from "@assemble/design-system";

<button
  type="button"
  role="menuitemcheckbox"
  aria-checked={darkMode}
  {...toggleRowDataProps()}
  onClick={() => setDarkMode((v) => !v)}
>
  <span>Dark mode</span>
  <ToggleIndicator on={darkMode} aria-hidden />
</button>
```

### Spinner

Arc stroke uses `currentColor` from palette tokens. Default variant is **primary** (on light surfaces); use **neutral** on dark fills.

```tsx
import { Spinner } from "@assemble/design-system";

import "@assemble/design-system/tokens/color-palette.css";

<Spinner variant="primary" size="md" label="Loading workspaces" />

<Spinner variant="neutral" size="md" aria-hidden />
```

### Primary button

[Figma `8249:251`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251) — **Primary 600** fill; hover/focus/active use **5% / 10% black overlays** on that fill; disabled **Primary 500**. Radius **`md` 8px** / **`sm` 6px**.

```tsx
import { PrimaryButton } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<PrimaryButton size="md" icon={<MyIcon />} aria-label="Add" />
<PrimaryButton size="sm">Placeholder</PrimaryButton>
<PrimaryButton size="md" icon={<MyIcon />}>
  Placeholder
</PrimaryButton>
```

### Secondary button

[Figma `8249:312`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312) — **Neutral 100** surface, **Secondary 300** border, light shadows; hover **Neutral 200**; focus **Primary 600** border + tinted shadow; **sm** focus adds **Primary 100** fill wash.

```tsx
import { SecondaryButton } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<SecondaryButton size="md" icon={<MyIcon />} aria-label="More" />
<SecondaryButton size="sm">Placeholder</SecondaryButton>
<SecondaryButton size="md" icon={<MyIcon />}>
  Placeholder
</SecondaryButton>
```

### Tertiary button

[Figma `8813:40`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40) — transparent by default; **Secondary 600** label → **700** on hover/focus; **Primary 100** / **200** background wash.

```tsx
import { TertiaryButton } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<TertiaryButton size="md" icon={<MyIcon />} aria-label="Learn more" />
<TertiaryButton size="sm">Cancel</TertiaryButton>
```

### Delete button

[Figma `8813:125`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125) — **filled Additional red** (`#ff3b4b`), **white** label; hover / focus / disabled use semi-transparent overlays on the fill.

```tsx
import { DeleteButton } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<DeleteButton size="md" icon={<TrashIcon />} aria-label="Delete" />
<DeleteButton size="sm">Remove</DeleteButton>
```

### Tooltip

Requires **React 18+**, **react-dom**, and a bundler with **CSS modules** (e.g. Vite).

```tsx
import { Tooltip } from "@assemble/design-system";

import "@assemble/design-system/tokens/color-palette.css";

<Tooltip label="Collapse sidebar" shortcut="⌘.">
  <button type="button" aria-label="Collapse sidebar">…</button>
</Tooltip>
```

Load **Inter** in the host app for Body/Small typography to match specs.

---

## Developing this repo

```bash
git clone git@github.com:dpolevoy1/design-system.git
cd design-system
npm install
npx tsc --noEmit
```

---

## Versioning

**`0.x`** — tokens and components evolve with the Assemble product; breaking changes are possible until **`1.0`**. Prefer **pinning a git SHA** in consuming apps.

**`0.2.x`** — four button variants + **`docs/BUTTONS.md`**; tokens track Figma **8249:251**, **8249:312**, **8813:40**, **8813:125**, overview **8249:59**, buttons hub **8249:244**.

## License

`UNLICENSED` — internal / team use unless otherwise noted in repository settings.
