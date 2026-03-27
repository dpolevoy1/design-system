import type { HTMLAttributes } from "react";
import styles from "./ToggleIndicator.module.css";

export type ToggleIndicatorProps = {
  /** Visually on (track filled with primary). */
  on: boolean;
  /** Merged onto the thumb span (rare). */
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

/**
 * Data attribute the **parent control** (e.g. `menuitemcheckbox`) must set so
 * hover / focus / disabled track styles apply (Figma 8096:162).
 */
export const ASSEMBLE_DS_TOGGLE_ROW = "data-assemble-ds-toggle-row";

/**
 * Spread onto the interactive row that wraps `ToggleIndicator`.
 *
 * @example
 * <button type="button" role="menuitemcheckbox" aria-checked={on} {...toggleRowDataProps()}>
 *   <span>Dark mode</span>
 *   <ToggleIndicator on={on} aria-hidden />
 * </button>
 */
export function toggleRowDataProps(): Record<
  typeof ASSEMBLE_DS_TOGGLE_ROW,
  true
> {
  return { [ASSEMBLE_DS_TOGGLE_ROW]: true };
}

/**
 * Non-interactive pill + knob; parent handles click and ARIA. Import
 * `tokens/color-palette.css` (includes toggle tokens).
 */
export function ToggleIndicator({
  on,
  className = "",
  ...rest
}: ToggleIndicatorProps) {
  return (
    <span
      className={`${styles.track} ${on ? styles.trackOn : ""} ${className}`.trim()}
      {...rest}
    />
  );
}
