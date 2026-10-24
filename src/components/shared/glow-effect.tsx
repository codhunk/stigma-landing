import { cn } from "@/lib/utils";

interface GlowEffectProps {
  position?: "top" | "center" | "bottom";
  className?: string;
}

export function GlowEffect({ position = "center", className }: GlowEffectProps) {
  const positions = {
    top: "top-0 -translate-y-1/2",
    center: "top-1/2 -translate-y-1/2",
    bottom: "bottom-0 translate-y-1/2",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 -z-10 h-[380px] w-[600px] sm:w-[800px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-transparent blur-[120px] opacity-70",
        positions[position],
        className
      )}
    />
  );
}
