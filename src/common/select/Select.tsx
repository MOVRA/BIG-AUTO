import {
  type SelectProps,
  type SelectBoxProps,
  type SelectItemProps,
  type SelectContextType,
  type SelectButtonProps,
} from "./Select.types";
import { twMerge } from "tailwind-merge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const SelectContext = createContext<SelectContextType>({
  open: false,
  selected: "",
  setOpen: () => {},
  onSelect: () => {},
  onSearch: () => {},
  setSelected: () => {},
  defaultValue: "",
});

export function Select({
  children,
  className,
  onSelect,
  onSearch,
  value,
  defaultValue,
}: SelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(defaultValue || value || "");
  const selectRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (value !== undefined) setSelected(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <div ref={selectRef} className={twMerge("relative w-full", className)}>
      <SelectContext.Provider
        value={{
          open,
          setOpen,
          selected,
          setSelected,
          onSelect,
          onSearch,
          defaultValue,
        }}
      >
        {children}
      </SelectContext.Provider>
    </div>
  );
}

export function SelectButton({
  disabled,
  children,
  className,
  textClassName,
}: SelectButtonProps) {
  const c = useContext(SelectContext);
  return (
    <button
      type="button"
      disabled={disabled}
      className={twMerge(
        "border-[#E0E0E0] inset-shadow-sm h-10 items-center border w-full py-2 px-4 flex justify-between cursor-pointer rounded-sm",
        className,
        disabled && "cursor-not-allowed"
      )}
      onClick={() => c.setOpen(!c.open)}
    >
      <span
        className={`${twMerge(
          "text-start truncate",
          textClassName,
          !c.selected && "text-gray-400",
          !c.selected && disabled && "text-gray-300"
        )}`}
      >
        {c.selected ? c.selected : children}
      </span>
      {!disabled && (
        <span className="flex w-fit justify-end">
          {c.open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      )}
    </button>
  );
}

export function SelectBox({
  value,
  children,
  className,
  placeholder,
  search = true,
}: SelectBoxProps) {
  const c = useContext(SelectContext);
  return (
    <div
      className={`${c.open ? "flex" : "hidden"} ${twMerge(
        "flex-col absolute bg-white border z-50 border-[#E9E9E9] w-full mt-2 h-fit overflow-y-auto rounded-sm",
        className
      )}`}
    >
      {search && (
        <input
          defaultValue={value}
          placeholder={placeholder}
          onChange={(e) =>
            search && c.onSearch ? c.onSearch(e.target.value) : null
          }
          className="bg-white border border-[#E9E9E9] px-4 py-2 m-2 rounded-sm text-sm"
        />
      )}
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export function SelectItem({
  label,
  value,
  className,
  onSelect,
}: SelectItemProps) {
  const c = useContext(SelectContext);

  const onClick = () => {
    c.setOpen(false);
    c.onSelect(value);
    c.setSelected(label);
    onSelect?.();
  };

  useEffect(() => {
    if (c.defaultValue == "") return c.setSelected("");
    if (value == c.defaultValue) return c.setSelected(label);
  }, [c.defaultValue, value, c.setSelected]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "p-2 hover:bg-gray-200 text-start cursor-pointer",
        className,
        c.selected == label && "bg-gray-200"
      )}
    >
      {label}
    </button>
  );
}
