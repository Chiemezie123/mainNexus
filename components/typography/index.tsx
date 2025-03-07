"use client";
import React, { JSX } from "react";
import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { TypographyProps, variantMapping } from "./index.types";

export const colorClasses = {
  "blackOne": "text-blackOne",
  "blackTwo": "text-blackTwo",
  "greyOne": "text-greyOne",
  "blackOriginal": "text-blackOriginal",
  "lemon": "text-lemon",
  "whiteOne": "text-whiteOne",
}

export const typography = cva("", {
  variants: {
    intent: {
      // heading
      "h-xxl": "text-h-xxl mmd:text-h-xl mxs:text-h-lxxr",
      "h-xl": "text-h-xl mmd:text-h-lx mxs:text-h-xlr ",
      "h-lx": "text-h-l mmd:text-h-lxr mxs:text-h-lxr",
      "h-lm": "text-h-lm mmd:text-h-lmr mxs:text-h-lmr",
      "h-ls": "text-h-ls mmd:text-h-l mxs:text-h-lsr",
      "h-l":"text-h-l mmd:text-h-m mxs:text-h-lr",
      "h-m": "text-h-m mmd:text-h-mr mxs:text-h-mr",
      "h-s": "text-h-s mmd:text-h-sr mxs:text-h-sr",
      "h-c":"text-h-c",

    //  paragraph
      "p-xxl": "text-p-xxl mmd:text-p-xxlr mxs:text-p-xxlr",
      "p-xl": "text-p-xl mmd:text-p-xl mxs:text-p-xl",
      "p-l": "text-p-l mmd:text-p-l mxs:text-p-l",
      span: "",
      div: "",
    },

    font: {
      instrument: "font-instrument",
      inter: "font-inter",
    },
    color:colorClasses,
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

// Typography component
function Typography(props: TypographyProps) {
  const {
    variant="div",
    tag,
    underline = "none",
    fontWeight = "regular",
    gutterBottom,
    noWrap,
    align = "left",
    color = "blackOne",
    font = "inter",
    children,
    className,
    ...rest
  } = props;

  // Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as React.ElementType;

  // Classes
  const classNameI = cn(
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
    className && className,
  );
 
  return (
    <Tag
      className={typography({
        intent: variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: cn(
          classNameI && classNameI,
        ),
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
  
}
 

export { Typography };

