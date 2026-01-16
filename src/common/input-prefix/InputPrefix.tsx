"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import type { InputPrefixProps } from "./InputPrefix.types";

export const InputPrefix = React.forwardRef<HTMLInputElement, InputPrefixProps>(
  (
    {
      className,
      disabled,
      prefix,
      prefixClassName,
      placeholder = "Insert Something",
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    return (
      <div
        className={`flex ${focus && "outline-[#2A457E] outline-1"} rounded-sm`}
      >
        <div
          className={twMerge(
            "bg-[#EBEBEB] flex items-center justify-center rounded-l-sm py-2 px-4 text-[#2A457E]",
            focus && "border-[#2A457E] border-r",
            !prefix && "hidden",
            prefixClassName
          )}
        >
          <span>{prefix}</span>
        </div>
        <input
          ref={ref}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={twMerge(
            "h-fit w-full rounded-r-sm border border-[#E0E0E0] inset-shadow-sm bg-[#FFF] pl-4 py-2 focus:outline-none",
            disabled && "cursor-not-allowed",
            !prefix && "rounded-sm",
            className
          )}
          {...props}
          disabled={disabled}
        />
      </div>
    );
  }
);

InputPrefix.displayName = "InputPrefix";
