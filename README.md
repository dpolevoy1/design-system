# A.Team Assemble — Design system

Design tokens and shared React primitives for **A.Team Assemble**, aligned with the [Figma design system](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/).

## Contents

| Path | Description |
|------|-------------|
| [`tokens/color-palette.css`](./tokens/color-palette.css) | Full palette + **toggle tokens** (second `:root` block): `--toggle-*` geometry, motion, track/thumb colors for off/on × default, hover, focus, disabled |
| [`src/Tooltip`](./src/Tooltip) | Default tooltip: dark surface, label + optional shortcut, follows pointer (to the right and slightly below) |
| [`src/ToggleIndicator`](./src/ToggleIndicator) | Pill switch **knob only** (Figma **8096:162**); parent row supplies `toggleRowDataProps()` + `aria-disabled` when needed |

### Toggle indicator — states

| | Default | Hover (row) | Focus-visible (row) | Disabled (`aria-disabled` on row) |
|--|---------|-------------|----------------------|-----------------------------------|
| **Off** | Secondary/400 (`--toggle-track-off`) | `#9ba5b2` | Secondary/400 + ring `rgb(167 178 192 / 12%)` | Secondary/100 |
| **On** | Primary/600 | `#143dde` | Primary/600 + ring `rgb(11 65 255 / 12%)` | Primary/500 |

Layout: **35×20** px track, **16** px thumb, **15** px travel; easing `cubic-bezier(0.22, 1, 0.36, 1)`, **0.22s**.

React usage:

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

## Using tokens

Import the palette once in your app entry (or root layout):

```css
@import "@assemble/design-system/tokens/color-palette.css";
```

If you depend on this repo via Git (no package alias), use a relative path or configure your bundler’s `resolve.alias`.

## Using the Tooltip (React)

Requires React 18+ and a bundler that supports CSS modules (e.g. Vite).

```tsx
import { Tooltip } from "@assemble/design-system";
// or: import { Tooltip } from "@assemble/design-system/tooltip";

import "@assemble/design-system/tokens/color-palette.css";

<Tooltip label="Collapse sidebar" shortcut="⌘.">
  <button type="button" aria-label="Collapse sidebar">…</button>
</Tooltip>
```

Ensure **Inter** is loaded in your app for typography that matches the spec.

## Consuming from GitHub

Add to your app’s `package.json`:

```json
{
  "dependencies": {
    "@assemble/design-system": "github:dpolevoy1/design-system#main"
  }
}
```

Adjust the branch or pin a commit SHA as needed.

## Versioning

`0.x` — initial extraction from the Assemble product; breaking changes may occur until a stable `1.0`.
