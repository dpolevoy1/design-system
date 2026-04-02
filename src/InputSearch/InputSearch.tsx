import {
  forwardRef,
  useRef,
  useCallback,
  type ChangeEvent,
  type MutableRefObject,
  type ReactNode,
  type MouseEvent,
} from "react";
import {
  Input,
  type InputProps,
} from "../Input";
import { SearchGlyph } from "./SearchGlyph";
import styles from "./InputSearch.module.css";

export type InputSearchProps = Omit<InputProps, "startAdornment" | "layout"> & {
  /** Override default search icon (still sized for `sm` / `md` in Figma). */
  searchIcon?: ReactNode;
  /**
   * Show **ic_clear_form** when `value` is a non-empty string (controlled).
   * Clears via `onChange` with `''` and refocuses the field (`8855:2126` §03).
   */
  clearable?: boolean;
  /** Accessible name for the clear control (default: “Clear search”). */
  clearLabel?: string;
};

function ClearGlyph({ size }: { size: NonNullable<InputProps["size"]> }) {
  const px = size === "sm" ? 12 : 16;
  return (
    <svg
      className={styles.clearIcon}
      width={px}
      height={px}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 4l8 8M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Search field with leading icon and optional clear — Figma
 * [`8855:2590`](https://www.figma.com/design/MHT2FB3YBrO2auBzNTbCkD/?node-id=8855-2590).
 * Rules: **[`docs/INPUT_SEARCH.md`](../../docs/INPUT_SEARCH.md)** (`8855:2126`).
 */
export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  function InputSearch(
    {
      searchIcon,
      clearable = false,
      clearLabel = "Clear search",
      size = "md",
      disabled,
      endAdornment,
      value,
      onChange,
      ...rest
    },
    ref,
  ) {
    const innerRef = useRef<HTMLInputElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [ref],
    );

    const strValue = typeof value === "string" ? value : undefined;
    const showClear =
      clearable &&
      strValue !== undefined &&
      strValue.length > 0 &&
      !disabled &&
      typeof onChange === "function";

    const handleClearMouseDown = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleClearClick = () => {
      const el = innerRef.current;
      if (onChange) {
        onChange({
          target: { value: "", name: el?.name ?? "" } as HTMLInputElement,
          currentTarget: (el ?? { value: "", name: "" }) as HTMLInputElement,
        } as ChangeEvent<HTMLInputElement>);
      }
      innerRef.current?.focus();
    };

    const clearButton = showClear ? (
      <button
        type="button"
        className={styles.clearButton}
        aria-label={clearLabel}
        disabled={disabled}
        onMouseDown={handleClearMouseDown}
        onClick={handleClearClick}
      >
        <ClearGlyph size={size} />
      </button>
    ) : null;

    const mergedEnd =
      clearButton != null || endAdornment != null ? (
        <>
          {clearButton}
          {endAdornment}
        </>
      ) : undefined;

    return (
      <Input
        ref={setRefs}
        size={size}
        disabled={disabled}
        layout="search"
        startAdornment={searchIcon ?? <SearchGlyph size={size} />}
        endAdornment={mergedEnd}
        {...rest}
        value={value}
        onChange={onChange}
      />
    );
  },
);
