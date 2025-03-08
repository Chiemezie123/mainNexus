import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";
import {
  TypographyColors,
  TypographyFont,
  TypographyFontWeight,
} from "./typography/index.types";
import { colorClasses } from "./typography";
import { Typography } from "./typography";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.625rem] whitespace-nowrap rounded-[100px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blackOne text-white shadow hover:bg-white hover:text-black",
      },
      size: {
        default: "w-[11.0625rem] h-[2.5rem]  p-[0.625rem]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "w-[13.0625rem] h-[3.125rem] py-[10px] px-[28px]",
        md: "w-[12.8125rem] h-[3.125rem]  py-[10px] px-[24px]",
        icon: "h-9 w-9",
      },
      font: {
        inter: "font-inter",
        instrument: "font-instrument",
      },

      color: colorClasses,
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
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IconProps {
  fill?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: TypographyColors;
  font?: TypographyFont;
  fontWeight?: TypographyFontWeight;
  icon?: React.ReactElement<IconProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      color,
      font = "inter",
      variant,
      fontWeight,
      icon,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, color, font, fontWeight })
        )}
        ref={ref}
       
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <Typography
          color="whiteOne"
          fontWeight="semibold"
          font="inter"
          className="text-[1rem] hover:text-black"
        >
          {" "}
          <div>{children}</div>
        </Typography>
        {icon && (
          <div className="flex items-center justify-center">
            {React.cloneElement(icon, {
              fill: isHovered ? "black" : "white", 
            })}
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
