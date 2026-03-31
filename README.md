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
"@assemble/design-system": "github:dpolevoy1/design-system#bb669171a4af763ec46fea34c02001a16fc22864"
```

That SHA matches the **`0.2.0`** release on `main`; replace it when you upgrade.

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
| `@assemble/design-system` | `Tooltip`, `ToggleIndicator`, `Spinner`, `PrimaryButton`, `SecondaryButton`, `TertiaryButton`, `DeleteButton`, … |
| `@assemble/design-system/tooltip` | Tooltip |
| `@assemble/design-system/toggle-indicator` | Toggle |
| `@assemble/design-system/spinner` | Spinner |
| `@assemble/design-system/primary-button` | Primary CTA button |
| `@assemble/design-system/secondary-button` | Secondary CTA button |
| `@assemble/design-system/tertiary-button` | Tertiary / ghost button |
| `@assemble/design-system/delete-button` | Delete / destructive button |
| `@assemble/design-system/tokens/color-palette.css` | CSS variables: palette + `--toggle-*` + **`--button-primary-*`** + **`--button-secondary-*`** + **`--button-tertiary-*`** + **`--button-delete-*`** |

Import tokens once in your app shell:

```css
@import "@assemble/design-system/tokens/color-palette.css";
```

### Buttons

All four variants share **`sm`** (32px row) and **`md`** (38px row), **16px** icon slot, **6px** gap, and **6px** corner radius. Import **`color-palette.css`** for `--button-*` tokens.

| Variant | Component | Package subpath | Figma |
|---------|-----------|-----------------|-------|
| Primary | `PrimaryButton` | `@assemble/design-system/primary-button` | [8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251) |
| Secondary | `SecondaryButton` | `@assemble/design-system/secondary-button` | [8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312) |
| Tertiary | `TertiaryButton` | `@assemble/design-system/tertiary-button` | [8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40) |
| Delete | `DeleteButton` | `@assemble/design-system/delete-button` | [8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125) |

---

## Contents

| Path | Description |
|------|-------------|
| [`tokens/color-palette.css`](./tokens/color-palette.css) | Full palette, **`--toggle-*`**, **`--button-primary-*`** ([8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251)), **`--button-secondary-*`** ([8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312)), **`--button-tertiary-*`** ([8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40)), **`--button-delete-*`** ([8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125)). |
| [`src/Tooltip`](./src/Tooltip) | Default tooltip: dark panel, label + optional shortcut; **pointer** to the **right** and **slightly below** the cursor. |
| [`src/ToggleIndicator`](./src/ToggleIndicator) | Pill switch **thumb/track** only. Parent control must spread **`toggleRowDataProps()`** and set **`aria-disabled`** when needed so hover / focus / disabled styles apply (Figma [8096:64](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/%E2%9A%92%EF%B8%8F-Assemble--Design-system?node-id=8096-64&m=dev) matrix). |
| [`docs/TOGGLE.md`](./docs/TOGGLE.md) | **Full spec:** use cases, click targets, immediate apply, layout (`--toggle-label-gap` 8px), no toggle-level errors, disabled as “locked”. |
| [`src/Spinner`](./src/Spinner) | **Line** indeterminate spinner (`0.9s` linear rotation). Variants: **neutral** (`--color-neutral-100`) and **primary** (`--color-primary-600`). Sizes **sm**–**xl** (12–24px). |
| [`src/PrimaryButton`](./src/PrimaryButton) | **PowerPoint primary** — filled CTA; **`sm`** / **`md`**; icon / text / both ([Figma 8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251)). |
| [`src/SecondaryButton`](./src/SecondaryButton) | **PowerPoint secondary** — 1px border, icon-only flat fill or text rows with gradient; same sizes/layout ([Figma 8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312)). |
| [`src/TertiaryButton`](./src/TertiaryButton) | **Tertiary / ghost** — no border, Primary 600 label, light Primary wash on hover ([Figma 8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40)). |
| [`src/DeleteButton`](./src/DeleteButton) | **Delete / destructive** — red outline and label; same layout as secondary ([Figma 8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125)). |

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

[Figma `8249:251`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251) — fill **`#1745f7`**, hover **`#1642eb`**, focus/active **`#153ede`**, disabled **Primary 500** with muted label/icon. Radius **6px**, icon slot **16px**, gap **6px**. Typography: **sm** text 12/16 (0.18px tracking), **md** 14/22 (0.14px).

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

[Figma `8249:312`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312) — border **Secondary 300** (hover **400**, focus/active **Primary 600**, disabled **200**). **Icon-only:** **Neutral 100** fill. **Text / icon+text:** subtle **white → #fafafa** gradient. Label/icon **Neutral 700**; **Primary 600** when focused or pressed; **Secondary 200** when disabled. Use icons that honor **`currentColor`**.

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

[Figma `8813:40`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40) — transparent default fill, **Primary 600** label, **Primary 200** hover wash, **Primary 300 (hover token)** when pressed. Same **`sm`** / **`md`**, icon slot, gap, radius as primary.

```tsx
import { TertiaryButton } from "@assemble/design-system";
import "@assemble/design-system/tokens/color-palette.css";

<TertiaryButton size="md" icon={<MyIcon />} aria-label="Learn more" />
<TertiaryButton size="sm">Cancel</TertiaryButton>
```

### Delete button

[Figma `8813:125`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125) — **Additional Red** border and label; icon-only uses **Neutral 100** fill like secondary; text rows use a subtle rose-tinted gradient. Hover/active add a light red wash.

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

**`0.2.0`** — adds **`TertiaryButton`** and **`DeleteButton`**, with **`--button-tertiary-*`** and **`--button-delete-*`** tokens in `color-palette.css`.

## License

`UNLICENSED` — internal / team use unless otherwise noted in repository settings.
