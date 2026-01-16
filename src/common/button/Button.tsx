import React from "react";
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./Button.types";

const sizeStyles = {
  xl: "py-3 px-5",
  lg: "py-2.5 px-4.5",
  xs: "py-1 px-2.5 text-sm",
  sm: "py-2 px-3.5 text-sm",
  md: "py-2.5 px-4 text-sm",
  xxs: "py-0.5 px-2.5 text-sm",
};

const variantStyles = {
  fill: "bg-black text-white font-semibold ",
  danger: "bg-[#CB3A31] text-white font-medium",
  base: "bg-white border-[1.5px] border-[#E0E0E0] text-black shadow-sm font-medium",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "base", size = "md", children, disabled, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twMerge(
          "cursor-pointer rounded-lg",
          sizeStyles[size],
          variantStyles[variant],
          disabled == true && "cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
