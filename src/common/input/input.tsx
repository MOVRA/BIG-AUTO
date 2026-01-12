import React from "react";
import { twMerge } from "tailwind-merge";
import type { InputProps } from "./input-types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, disabled, placeholder = "Insert Something", ...props },
    ref
  ) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={twMerge(
          "h-10 w-full rounded-sm border border-[#E0E0E0] inset-shadow-sm bg-[#FFF] pl-3 py-2 placeholder:text-[#C2C2C2] placeholder:font-light",
          disabled && "cursor-not-allowed",
          className
        )}
        {...props}
        disabled={disabled}
      />
    );
  }
);

Input.displayName = "Input";
