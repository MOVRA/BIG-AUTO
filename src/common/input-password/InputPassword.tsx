import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../input";
import type { InputPasswordProps } from "./InputPassword.types";
import { twMerge } from "tailwind-merge";

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>(({ className, inputClassName, iconSize = 24, ...props }, ref) => {
  const [hide, setHide] = useState(true);
  return (
    <div
      className={twMerge(
        "flex h-fit rounded-sm w-full items-center inset-shadow-sm justify-between border border-[#E0E0E0]",
        className
      )}
    >
      <Input
        {...props}
        className={`border-none rounded-none rounded-l-md inset-0 ${inputClassName}`}
        ref={ref}
        type={hide ? "password" : "text"}
      />
      <button
        type="button"
        onClick={() => setHide(!hide)}
        className="cursor-pointer focus:outline-none pl-2 pr-4 py-1.5"
      >
        {hide ? (
          <Eye className="w-[2.335vh] h-[2.335vh]" size={iconSize} />
        ) : (
          <EyeClosed className="w-[2.335vh] h-[2.335vh]" size={iconSize} />
        )}
      </button>
    </div>
  );
});

InputPassword.displayName = "InputPassword";
