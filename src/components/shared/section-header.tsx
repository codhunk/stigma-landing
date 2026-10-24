import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className={cn("mb-4 flex", isCenter ? "justify-center" : "justify-start")}>
          <Badge variant="accent">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
