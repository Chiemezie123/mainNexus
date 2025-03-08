import { JSX } from "react";

export const variantMapping = {
  // Headings
  "h-xxl": "h1", // Largest heading
  "h-xl": "h2", // Second largest heading
  "h-lx": "h3", // Large heading
  "h-lm": "h4", // Medium-large heading
  "h-ls": "h5", // Small-large heading
  "h-l": "h6", // Smallest heading
  "h-m": "h6", // Medium heading (fallback to h6)
  "h-s": "h6", // Small heading (fallback to h6)
  "h-c": "h6", // Caption heading (fallback to h6)

  // Headings (Responsive)
  // "h-xxlr": "h1", // Responsive largest heading
  // "h-xlr": "h2", // Responsive second largest heading
  // "h-lxr": "h3", // Responsive large heading
  // "h-lmr": "h4", // Responsive medium-large heading
  // "h-lsr": "h5", // Responsive small-large heading
  // "h-lr": "h6", // Responsive smallest heading
  // "h-mr": "h6", // Responsive medium heading (fallback to h6)
  // "h-sr": "h6", // Responsive small heading (fallback to h6)

  // Paragraphs
  "p-xxl": "p", // Extra large paragraph
  "p-xl": "p", // Large paragraph
  "p-l": "p", // Medium paragraph

  // Paragraphs (Responsive)
  // "p-xxlr": "p", // Responsive extra large paragraph

  // Other elements
  span: "span", // Inline element
  div: "div", // Block-level container
} as const;

export type TypographyVariant = keyof typeof variantMapping;

export type TypographyColors =

| "blackOne"
| "blackTwo"
| "greyOne"
| "blackOriginal"
| "lemon"
| "whiteOne";


export type TypographyAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify";

export type TypographyFontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "black";

export type TypographyFont = "instrument" | "inter";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  tag?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  color?: TypographyColors;
  fontWeight?: TypographyFontWeight;
  gutterBottom?: boolean;
  align?: TypographyAlign;
  noWrap?: boolean;
  underline?: "none" | "always" | "hover";
  customClassName?: string;
  children?: React.ReactNode;
  font?: TypographyFont;
}