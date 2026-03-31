import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./TertiaryButton.module.css";

export type TertiaryButtonSize = "sm" | "md";

export type TertiaryButtonProps = {
  size?: TertiaryButtonSize;
  /**
   * Optional leading icon (16×16; use `currentColor` for stroke/fill).
   * Icon-only: provide `icon` without `children` and set `aria-label`.
   */
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Tertiary / ghost button from
 * [Figma 8813:40](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-40).
 * Import `tokens/color-palette.css` for `--button-tertiary-*`.
 */
export function TertiaryButton({
  size = "md",
  icon,
  children,
  className = "",
  type = "button",
  disabled,
  ...rest
}: TertiaryButtonProps) {
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
