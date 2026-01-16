import type { InputHTMLAttributes } from "react";

export interface InputPasswordProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
  iconSize?: number;
}
