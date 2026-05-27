import type { LucideIcon } from "lucide-react";

export type IconBrand =
  | "github"
  | "linkedin"
  | "mail"
  | "mapPin"
  | "file"
  | "chevron"
  | "external"
  | "sparkles"
  | "rocket"
  | "code"
  | "users"
  | "arrowDown"
  | "arrowUp"
  | "menu"
  | "close";

export const iconBrandColors: Record<IconBrand, string> = {
  github: "#181717",
  linkedin: "#0A66C2",
  mail: "#EA4335",
  mapPin: "#E11D48",
  file: "#7C3AED",
  chevron: "#2563EB",
  external: "#059669",
  sparkles: "#D97706",
  rocket: "#EA580C",
  code: "#2563EB",
  users: "#7C3AED",
  arrowDown: "#0284C7",
  arrowUp: "#0A66C2",
  menu: "#4F46E5",
  close: "#DC2626",
};

export const highlightIconStyles: Record<
  IconBrand,
  { color: string; background: string; border: string }
> = {
  rocket: { color: "#EA580C", background: "#FFF7ED", border: "#FDBA74" },
  code: { color: "#2563EB", background: "#EFF6FF", border: "#93C5FD" },
  users: { color: "#7C3AED", background: "#F5F3FF", border: "#C4B5FD" },
  github: { color: "#181717", background: "#F4F4F5", border: "#D4D4D8" },
  linkedin: { color: "#0A66C2", background: "#EFF6FF", border: "#93C5FD" },
  mail: { color: "#EA4335", background: "#FEF2F2", border: "#FECACA" },
  mapPin: { color: "#E11D48", background: "#FFF1F2", border: "#FECDD3" },
  file: { color: "#7C3AED", background: "#F5F3FF", border: "#C4B5FD" },
  chevron: { color: "#2563EB", background: "#EFF6FF", border: "#93C5FD" },
  external: { color: "#059669", background: "#ECFDF5", border: "#6EE7B7" },
  sparkles: { color: "#D97706", background: "#FFFBEB", border: "#FCD34D" },
  arrowDown: { color: "#0284C7", background: "#F0F9FF", border: "#7DD3FC" },
  arrowUp: { color: "#0A66C2", background: "#EFF6FF", border: "#93C5FD" },
  menu: { color: "#4F46E5", background: "#EEF2FF", border: "#A5B4FC" },
  close: { color: "#DC2626", background: "#FEF2F2", border: "#FECACA" },
};

export interface ColorIconProps {
  icon: LucideIcon;
  brand: IconBrand;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}
