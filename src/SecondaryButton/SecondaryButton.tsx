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
 * Secondary outline from
 * [Figma 8249:312](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8249-312).
 * Flat **Neutral 100** surface, subtle shadows; hover **Neutral 200**; focus **Primary 600** border (small size
 * adds **Primary 100** wash). See **docs/BUTTONS.md** for product rules (`8249:59`).
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
