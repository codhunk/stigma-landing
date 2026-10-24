import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  hasPattern?: boolean;
}

export function Section({
  id,
  className,
  children,
  hasPattern = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-24 lg:py-32 overflow-hidden scroll-mt-20",
        className
      )}
      {...props}
    >
      {hasPattern && (
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      )}
      {children}
    </section>
  );
}
