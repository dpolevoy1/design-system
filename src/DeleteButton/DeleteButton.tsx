import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./DeleteButton.module.css";

export type DeleteButtonSize = "sm" | "md";

export type DeleteButtonProps = {
  size?: DeleteButtonSize;
  /**
   * Optional leading icon (16×16; use `currentColor` for stroke/fill).
   * Icon-only: provide `icon` without `children` and set `aria-label`.
   */
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Delete / destructive **filled** button from
 * [Figma 8813:125](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8813-125).
 * **Additional red** surface, white label; use for irreversible actions. See **docs/BUTTONS.md**.
 */
export function DeleteButton({
  size = "md",
  icon,
  children,
  className = "",
  type = "button",
  disabled,
  ...rest
}: DeleteButtonProps) {
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
