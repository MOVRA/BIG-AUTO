export interface item {
  label: string;
  value: string;
}

export interface SelectContextType {
  open: boolean;
  selected: string;
  defaultValue?:string;
  setOpen: (o: boolean) => void;
  onSearch?: (s: string) => void;
  onSelect: (s: string) => void;
  setSelected: (s: string) => void;
}

export interface SelectProps {
  className?: string;
  children: React.ReactNode;
  value?: string;
  defaultValue?:string;
  onSearch?: (s: string) => void;
  onSelect: (a: string) => void;
}

export interface SelectButtonProps {
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

export interface SelectBoxProps {
  value?: string;
  search?: boolean;
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export interface SelectItemProps {
  label: string;
  value: string;
  className?: string;
  onSelect?: () => void;
}
