import type { InputHTMLAttributes } from "react";

export interface InputPrefixProps
  extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  prefixClassName?: string;
  className?: string;
}
