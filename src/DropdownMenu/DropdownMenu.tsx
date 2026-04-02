import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./DropdownMenu.module.css";

export type DropdownTriggerSize = "sm" | "md";
export type DropdownTriggerValidation = "default" | "warning";

export type DropdownTriggerProps = {
  /**
   * Trigger size from Figma rules (`8866:1112`):
   * - `md`: 38px height, 8px radius
   * - `sm`: 32px height, 6px radius
   */
  size?: DropdownTriggerSize;
  /**
   * Optional leading icon (16x16). Use `currentColor`.
   */
  icon?: ReactNode;
  /**
   * Validation styling for warning use-cases.
   */
  validation?: DropdownTriggerValidation;
  /**
   * Whether the related list is currently open.
   * Rotates chevron and applies expanded state attributes.
   */
  open?: boolean;
  /**
   * Placeholder when no `children` is provided.
   */
  placeholder?: ReactNode;
  /**
   * Optional helper line under the trigger.
   */
  helperText?: ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    children?: ReactNode;
  };

function DropdownChevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`.trim()}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.667 10L8 6.667 11.333 10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.667 6L8 9.333 11.333 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Dropdown trigger from
 * [Figma `8866:1480`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1480).
 * Usage/rules in
 * [Figma `8866:1112`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8866-1112).
 */
export function DropdownTrigger({
  size = "md",
  icon,
  validation = "default",
  open = false,
  placeholder = "Placeholder",
  helperText,
  className = "",
  children,
  disabled,
  type = "button",
  ...rest
}: DropdownTriggerProps) {
  const hasValue =
    children !== undefined && children !== null && children !== false && children !== "";

  return (
    <div className={styles.triggerRoot}>
      <button
        type={type}
        disabled={disabled}
        aria-expanded={open}
        className={`${styles.trigger} ${
          size === "sm" ? styles.triggerSm : styles.triggerMd
        } ${
          validation === "warning" ? styles.triggerWarning : styles.triggerDefault
        } ${className}`.trim()}
        {...rest}
      >
        <span className={styles.triggerContent}>
          <span className={styles.triggerLabelRow}>
            {icon != null ? <span className={styles.leadingIcon}>{icon}</span> : null}
            <span
              className={`${styles.triggerLabel} ${hasValue ? "" : styles.placeholder}`.trim()}
            >
              {hasValue ? children : placeholder}
            </span>
          </span>
          <DropdownChevron open={open} />
        </span>
      </button>
      {helperText != null ? (
        <p
          className={`${styles.helperText} ${
            validation === "warning" ? styles.helperWarning : styles.helperDefault
          }`.trim()}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export type DropdownListProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Dropdown list shell from Figma (`8867:63093`, `8871:64919`).
 * Includes the shared radius, border, and shadow treatment.
 */
export function DropdownList({
  className = "",
  children,
  ...rest
}: DropdownListProps) {
  return (
    <div className={`${styles.list} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export type DropdownListItemProps = {
  className?: string;
  children?: ReactNode;
  /**
   * Optional supporting explanation text line (`Secondary-500`).
   */
  description?: ReactNode;
  /**
   * Optional leading/trailing slot (icon, checkbox, etc.).
   */
  leading?: ReactNode;
  trailing?: ReactNode;
  /**
   * Selected state uses Primary-200 background.
   */
  selected?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function DropdownListItem({
  className = "",
  children,
  description,
  leading,
  trailing,
  selected = false,
  disabled,
  type = "button",
  ...rest
}: DropdownListItemProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.item} ${selected ? styles.itemSelected : ""} ${
        disabled ? styles.itemDisabled : ""
      } ${className}`.trim()}
      {...rest}
    >
      <span className={styles.itemMain}>
        <span className={styles.itemRow}>
          {leading != null ? <span className={styles.leadingSlot}>{leading}</span> : null}
          <span className={styles.itemLabel}>{children}</span>
        </span>
        {description != null ? <span className={styles.itemDescription}>{description}</span> : null}
      </span>
      {trailing != null ? <span className={styles.trailingSlot}>{trailing}</span> : null}
    </button>
  );
}

export type DropdownListTitleProps = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Group title row (32px) used for non-interactive section labels in long lists.
 */
export function DropdownListTitle({
  className = "",
  children,
  ...rest
}: DropdownListTitleProps) {
  return (
    <div className={`${styles.listTitle} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export type DropdownListScrollFooterProps = {
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

/**
 * Optional scrolling footer row (32px) for list pagination affordance.
 */
export function DropdownListScrollFooter({
  className = "",
  type = "button",
  ...rest
}: DropdownListScrollFooterProps) {
  return (
    <button
      type={type}
      className={`${styles.scrollFooter} ${className}`.trim()}
      aria-label="Show more options"
      {...rest}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M4.667 6.667L8 10l3.333-3.333"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
