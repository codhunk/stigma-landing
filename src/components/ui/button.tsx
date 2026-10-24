import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 font-semibold",
      secondary:
        "bg-neutral-800 text-neutral-100 hover:bg-neutral-700 border border-neutral-700/60 shadow-sm",
      outline:
        "border border-neutral-700/80 text-neutral-200 hover:bg-neutral-800/80 hover:text-white backdrop-blur-sm",
      ghost: "text-neutral-300 hover:text-white hover:bg-neutral-800/60",
      glow: "relative bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 font-bold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:brightness-105",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-13 px-7 text-base gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
