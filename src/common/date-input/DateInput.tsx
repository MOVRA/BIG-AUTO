import { twMerge } from "tailwind-merge";
import DatePicker from "react-datepicker";
import type { DateInputProps } from "./date-input-type";

export default function DateInput({
  selected,
  onChange,
  className,
  placeholderText,
}: DateInputProps) {
  return (
    <div
      className={twMerge(
        "flex h-10 w-full rounded-sm border border-[#E0E0E0] inset-shadow-sm bg-[#FFF] justify-between items-center",
        className
      )}
    >
      <DatePicker
        selected={selected}
        onChange={onChange}
        className="pl-3 focus:outline-none placeholder:text-[#C2C2C2] placeholder:font-light"
        placeholderText={placeholderText}
      />
      <img src="/calendar-icon.svg" className="pr-3" />
    </div>
  );
}
