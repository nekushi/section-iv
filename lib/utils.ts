export function toTitleCase(label: string): string {
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function sideBorderColor(color: string): string {
  return `border-l-${color}-500`;
}
