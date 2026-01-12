import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "base" | "fill" | "danger";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
}
