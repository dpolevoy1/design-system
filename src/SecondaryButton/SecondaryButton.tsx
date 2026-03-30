import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SecondaryButton.module.css";

export type SecondaryButtonSize = "sm" | "md";

export type SecondaryButtonProps = {
  size?: SecondaryButtonSize;
  /**
   * Optional leading icon (16×16; use `currentColor` for stroke/fill).
   * Icon-only: provide `icon` without `children` and set `aria-label`.
   */
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Secondary / PowerPoint outline button from
 * [Figma 8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312).
 * Import `tokens/color-palette.css` for `--button-secondary-*`.
 *
 * - **Icon-only** — flat **Neutral 100** fill, **Secondary 300** border (hover **400**, focus **Primary 600**).
 * - **Text / icon+text** — light **gradient** (white ↔ #fafafa) with the same border rules; label **Neutral 700**,
 *   **Primary 600** when focused/active, **Secondary 200** when disabled.
 */
export function SecondaryButton({
  size = "md",
  icon,
  children,
  className = "",
  type = "button",
  disabled,
  ...rest
}: SecondaryButtonProps) {
  const hasText =
    children !== undefined && children !== null && children !== false && children !== "";
  const hasIcon = icon != null;
  const mode = hasIcon && hasText ? "iconText" : hasIcon ? "iconOnly" : "textOnly";
  const sizeClass = size === "sm" ? styles.sizeSm : styles.sizeMd;
  const fillClass = mode === "iconOnly" ? styles.fillSolid : styles.fillGradient;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${fillClass} ${sizeClass} ${styles[mode]} ${className}`.trim()}
      {...rest}
    >
      {hasIcon ? (
        <span className={styles.iconWrap} aria-hidden={hasText ? true : undefined}>
          {icon}
        </span>
      ) : null}
      {hasText ? <span className={styles.label}>{children}</span> : null}
    </button>
  );
}
