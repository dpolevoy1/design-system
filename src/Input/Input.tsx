import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md";

export type InputValidation = "default" | "success" | "warning" | "error";

export type InputProps = {
  /**
   * **Base** — 38px row, 8px radius, 14/22 (Figma overview §08).
   * **Small** — 32px row, 6px radius, 12/16 (dense UI / nested fields).
   */
  size?: InputSize;
  /** Renders a `<label>` above the field; associates with the input `id`. */
  label?: ReactNode;
  /**
   * Supporting copy below the field. Color follows `validation` when not `default`.
   * Spacing from field: **`--input-helper-gap`** (4px, overview).
   */
  helperText?: ReactNode;
  /** Drives border + focus ring + helper color for validation states (matrix `8835:688`). */
  validation?: InputValidation;
  /** Trailing control (e.g. clear or search icon); `8px` gap from value (`--input-inner-gap`). */
  endAdornment?: ReactNode;
  className?: string;
  /** Extra class on the bordered field wrapper (not the outer root). */
  fieldClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

/**
 * Single-line text input from
 * [Figma `8835:688`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-688) /
 * [overview `8835:179`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8835-179).
 * Import `tokens/color-palette.css` for `--input-*` tokens.
 *
 * Product rules: **[`docs/INPUT.md`](../../docs/INPUT.md)**.
 */
export function Input({
  size = "md",
  label,
  helperText,
  validation = "default",
  endAdornment,
  className = "",
  fieldClassName = "",
  disabled,
  id: idProp,
  "aria-describedby": ariaDescribedByProp,
  "aria-invalid": ariaInvalidProp,
  ...rest
}: InputProps) {
  const uid = useId().replace(/:/g, "");
  const hasLabel = label != null && label !== "" && label !== false;
  const hasHelper = helperText != null && helperText !== "" && helperText !== false;
  const inputId =
    idProp ??
    (hasLabel || hasHelper ? `assemble-input-${uid}` : undefined);
  const helperId = hasHelper ? `assemble-input-helper-${uid}` : undefined;

  const validationClass =
    validation === "success"
      ? styles.success
      : validation === "warning"
        ? styles.warning
        : validation === "error"
          ? styles.error
          : styles.default;

  const helperClass =
    validation === "success"
      ? styles.helperSuccess
      : validation === "warning"
        ? styles.helperWarning
        : validation === "error"
          ? styles.helperError
          : styles.helperDefault;

  const describedBy =
    [ariaDescribedByProp, helperId].filter(Boolean).join(" ") || undefined;
  const ariaInvalid =
    ariaInvalidProp ??
    (validation === "error" ? true : undefined);

  return (
    <div
      className={`${styles.root} ${
        size === "sm" ? styles.sizeSm : styles.sizeMd
      } ${className}`.trim()}
    >
      {hasLabel ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      <div
        className={`${styles.field} ${validationClass} ${
          disabled ? styles.disabled : ""
        } ${fieldClassName}`.trim()}
      >
        <input
          id={inputId}
          disabled={disabled}
          className={styles.input}
          aria-describedby={describedBy}
          aria-invalid={ariaInvalid}
          {...rest}
        />
        {endAdornment != null ? (
          <span className={styles.adornment}>{endAdornment}</span>
        ) : null}
      </div>
      {hasHelper ? (
        <p
          id={helperId}
          className={`${styles.helper} ${helperClass}`.trim()}
          role={validation === "error" ? "alert" : undefined}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
