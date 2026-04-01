import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./PrimaryButton.module.css";

export type PrimaryButtonSize = "sm" | "md";

export type PrimaryButtonProps = {
  /** Row height 32px in Figma “Small”. */
  size?: PrimaryButtonSize;
  /**
   * Optional leading icon (use 16×16 graphic). Omit for text-only.
   * Icon-only: pass `icon` and no `children` (set `aria-label` on the button).
   */
  icon?: ReactNode;
  /** Button label; omit when icon-only. */
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Primary / PowerPoint CTA button from
 * [Figma 8249:251](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-251).
 * Import `tokens/color-palette.css` for `--button-primary-*` and palette aliases.
 *
 * - **sm** — 32px row (icon-only square 32×32; text / icon+text vertically centered).
 * - **md** — 38px row (icon-only 38×38).
 * - Default fill **Primary 600**; hover/focus/active use **5% / 10% black overlays** on the same fill (Figma).
 * - **docs/BUTTONS.md** — copy, grouping, dimensions from overview `8249:59`.
 */
export function PrimaryButton({
  size = "md",
  icon,
  children,
  className = "",
  type = "button",
  disabled,
  ...rest
}: PrimaryButtonProps) {
  const hasText =
    children !== undefined && children !== null && children !== false && children !== "";
  const hasIcon = icon != null;
  const mode = hasIcon && hasText ? "iconText" : hasIcon ? "iconOnly" : "textOnly";
  const sizeClass = size === "sm" ? styles.sizeSm : styles.sizeMd;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${sizeClass} ${styles[mode]} ${className}`.trim()}
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
