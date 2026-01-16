export function formatToRupiah(
  value: number | string,
  options?: {
    withPrefix?: boolean;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
) {
  const {
    withPrefix = true,
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
  } = options || {};

  const number =
    typeof value === "string" ? Number(value.replace(/[^0-9.-]+/g, "")) : value;

  if (isNaN(number)) return withPrefix ? "Rp 0" : "0";

  const formatted = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number);

  return withPrefix ? `Rp ${formatted}` : formatted;
}
