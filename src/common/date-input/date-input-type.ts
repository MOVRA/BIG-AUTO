export interface DateInputProps {
  className?: string;
  placeholderText?: string;
  selected?: Date | null | undefined;
  onChange?: (d: Date | null) => void;
}
