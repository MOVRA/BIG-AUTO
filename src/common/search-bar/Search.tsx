import { Input } from "../input";
import { twMerge } from "tailwind-merge";
import type { SearchProps } from "./search-type";

export default function Search({ className, ...props }: SearchProps) {
  return (
    <div className="relative">
      <img src="/search-icon.svg" className="w-4 h-4 absolute top-3 left-3" />
      <Input
        {...props}
        className={twMerge("h-10 rounded-md text-sm pl-9", className)}
      />
    </div>
  );
}
