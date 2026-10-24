import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "outline" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide";

  const variants = {
    default: "bg-neutral-800 text-neutral-200 border border-neutral-700/60",
    success:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    outline: "border border-neutral-700 text-neutral-300",
    accent:
      "bg-teal-500/10 text-teal-300 border border-teal-500/25",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
