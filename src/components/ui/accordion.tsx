"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-800/80 last:border-b-0 py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left font-medium text-neutral-200 hover:text-white transition-colors duration-150 py-2 group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-200 group-hover:text-emerald-400",
            isOpen && "rotate-180 text-emerald-400"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out text-sm text-neutral-400 leading-relaxed overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 pt-2 pb-2" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
}
