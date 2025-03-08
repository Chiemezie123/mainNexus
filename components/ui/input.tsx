import * as React from "react";
import { cn } from "@/utils/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative border flex " style={{ padding: "12px 20px" }}>
        {leftIcon && (
          <div className="inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex  w-full rounded-md border border-input bg-transparent  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
            {
              "pl-10": leftIcon, // Add padding if leftIcon is present
              "pr-10": rightIcon, // Add padding if rightIcon is present
            }
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className=" inset-y-0  flex items-center pr-3">{rightIcon}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
