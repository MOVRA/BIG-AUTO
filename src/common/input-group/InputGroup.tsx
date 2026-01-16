import React from "react";
import { twMerge } from "tailwind-merge";

interface InputGroupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function InputGroup({ children, className }: InputGroupProps) {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full", className)}>{children}</div>
  );
}
