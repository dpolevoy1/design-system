# A.Team Assemble — Design system

Design tokens and shared React primitives for **A.Team Assemble**, aligned with the [Figma design system](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/).

## Contents

| Path | Description |
|------|-------------|
| [`tokens/color-palette.css`](./tokens/color-palette.css) | Full palette: **Primary** (100–700), **Secondary** (100–700), **Neutral** (100–700 + list outline), **Additional** (blue light/dark, green, orange, red), **semantic error**, **tooltip panel** (`--color-tooltip-panel-background`, not Neutral/600) |
| [`src/Tooltip`](./src/Tooltip) | Default tooltip: dark surface, label + optional shortcut, follows pointer (to the right and slightly below) |

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
