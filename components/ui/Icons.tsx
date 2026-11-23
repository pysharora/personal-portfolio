import type { SVGProps } from "react";

/**
 * Small hand-rolled glyphs for the mode switch. Kept as plain SVG rather
 * than an icon-library dependency since the site needs exactly these two.
 * Both use `currentColor` so they follow the button's own text colour,
 * including the pressed/unpressed pill states.
 */

const EngineerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <path d="M9 6 3 12l6 6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
);

const PmIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="square"
    strokeLinejoin="miter"
    {...props}
  >
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 16h6" />
  </svg>
);

export { EngineerIcon, PmIcon };
