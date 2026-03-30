# A.Team Assemble — Design system

Shared **design tokens** and **React primitives** for [A.Team Assemble](https://github.com/dpolevoy1/SidebarMenu), aligned with the Figma file [**Assemble — Design system**](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/).

## Install

```json
{
  "dependencies": {
    "@assemble/design-system": "github:dpolevoy1/design-system#main"
  }
}
```

Pin a **commit SHA** for reproducible builds:

```json
"@assemble/design-system": "github:dpolevoy1/design-system#eef8a7e"
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
| `@assemble/design-system` | `Tooltip`, `ToggleIndicator`, `Spinner`, `PrimaryButton`, … |
| `@assemble/design-system/tooltip` | Tooltip only |
| `@assemble/design-system/toggle-indicator` | Toggle only |
| `@assemble/design-system/spinner` | Spinner only |
| `@assemble/design-system/primary-button` | Primary CTA button only |
| `@assemble/design-system/tokens/color-palette.css` | CSS variables: palette + `--toggle-*` + **`--button-primary-*`** |

Import tokens once in your app shell:

```css
@import "@assemble/design-system/tokens/color-palette.css";
```

---

## Contents

| Path | Description |
|------|-------------|
| [`tokens/color-palette.css`](./tokens/color-palette.css) | **Primary** (100–700), **Secondary** (100–700), **Neutral** (100–700 + list outline), **Additional**, semantic **`--color-error`**, tooltip panel, **`--toggle-*`**, and **`--button-primary-*`** (primary CTA from [Figma 8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251)). |
| [`src/Tooltip`](./src/Tooltip) | Default tooltip: dark panel, label + optional shortcut; **pointer** to the **right** and **slightly below** the cursor. |
| [`src/ToggleIndicator`](./src/ToggleIndicator) | Pill switch **thumb/track** only. Parent control must spread **`toggleRowDataProps()`** and set **`aria-disabled`** when needed so hover / focus / disabled styles apply (Figma [8096:64](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/%E2%9A%92%EF%B8%8F-Assemble--Design-system?node-id=8096-64&m=dev) matrix). |
| [`docs/TOGGLE.md`](./docs/TOGGLE.md) | **Full spec:** use cases, click targets, immediate apply, layout (`--toggle-label-gap` 8px), no toggle-level errors, disabled as “locked”. |
| [`src/Spinner`](./src/Spinner) | **Line** indeterminate spinner (`0.9s` linear rotation). Variants: **neutral** (`--color-neutral-100`) and **primary** (`--color-primary-600`). Sizes **sm**–**xl** (12–24px). |
| [`src/PrimaryButton`](./src/PrimaryButton) | **PowerPoint primary** button: **`sm`** (32px) / **`md`** (38px); icon-only, text-only, icon+text; default / hover / focus-visible / active / disabled ([Figma 8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251)). |

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

## License

`UNLICENSED` — internal / team use unless otherwise noted in repository settings.
