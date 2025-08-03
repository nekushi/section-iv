export function toTitleCase(label: string): string {
  return label.charAt(0).toUpperCase() + label.slice(1);
}

const COLORS: Record<string, string> = {
  amber: "border-l-amber-500",
  cyan: "border-l-cyan-500",
  pink: "border-l-pink-500",
  rose: "border-l-rose-500",
  zinc: "border-l-zinc-500",
  fuchsia: "border-l-fuchsia-500",
  lime: "border-l-lime-500",
  indigo: "border-l-indigo-500",
  emerald: "border-l-emerald-500",
  neutral: "border-l-neutral-500",
} as const;

export function sideBorderColor(color: string): string {
  return COLORS[color] || COLORS["neutral"];
}
