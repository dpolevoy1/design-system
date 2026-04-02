import type { InputSize } from "../Input";

type SearchGlyphProps = {
  size: InputSize;
};

/**
 * Search magnifier aligned to Figma **Icon / Search** slots (`8855:2590`): **16×16** (`md`), **12×12** (`sm`).
 */
export function SearchGlyph({ size }: SearchGlyphProps) {
  const px = size === "sm" ? 12 : 16;
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="7"
        cy="7"
        r="4.25"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10.5 10.5 14 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
