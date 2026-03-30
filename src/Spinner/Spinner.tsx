import type { HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg" | "xl";

export type SpinnerProps = {
  /** Stroke uses palette **Neutral 100** (e.g. on dark surfaces). */
  variant?: "neutral" | "primary";
  size?: SpinnerSize;
  /** Sets `aria-label`; when omitted and not decorative, pass `aria-hidden` via rest or wrap in a labeled region. */
  label?: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const SIZE_PX: Record<SpinnerSize, number> = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

/**
 * Indeterminate **line** spinner (rotating arc). Import `tokens/color-palette.css`
 * for `--color-neutral-100` and `--color-primary-600`.
 *
 * - **neutral** — `var(--color-neutral-100)`
 * - **primary** — `var(--color-primary-600)`
 */
export function Spinner({
  variant = "primary",
  size = "md",
  label,
  className = "",
  ...rest
}: SpinnerProps) {
  const px = SIZE_PX[size];
  const variantClass =
    variant === "neutral" ? styles.variantNeutral : styles.variantPrimary;

  return (
    <span
      className={`${styles.root} ${variantClass} ${className}`.trim()}
      aria-label={label}
      {...rest}
    >
      <svg
        className={styles.spinner}
        width={px}
        height={px}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden={label ? undefined : true}
      >
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDashoffset="40"
          strokeDasharray="100"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
