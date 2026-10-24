"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";

export type ThemeName = "default" | "emerald" | "violet" | "dark";

interface ThemeOption {
  id: ThemeName;
  name: string;
  colorHex: string;
  dotColor: string;
}

const themeOptions: ThemeOption[] = [
  { id: "default", name: "Royal Blue", colorHex: "#0051d5", dotColor: "bg-[#0051d5]" },
  { id: "emerald", name: "Emerald Campus", colorHex: "#059669", dotColor: "bg-[#059669]" },
  { id: "violet", name: "Cyber Violet", colorHex: "#6366f1", dotColor: "bg-[#6366f1]" },
  { id: "dark", name: "Obsidian Night", colorHex: "#0f172a", dotColor: "bg-[#0f172a]" },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>("default");
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("edumanage_theme") as ThemeName | null;
    if (saved && ["default", "emerald", "violet", "dark"].includes(saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
    localStorage.setItem("edumanage_theme", theme);
    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] flex items-center justify-center opacity-60">
        <Palette className="h-4 w-4 text-[var(--theme-muted)]" />
      </div>
    );
  }

  const activeOption = themeOptions.find((t) => t.id === currentTheme) || themeOptions[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change campus theme"
        className="h-9 px-2.5 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface)] hover:bg-[var(--theme-surface-subtle)] text-[var(--theme-text)] flex items-center gap-2 shadow-xs transition-all cursor-pointer focus:outline-none"
      >
        <span className={`w-3 h-3 rounded-full ${activeOption.dotColor} ring-1 ring-black/10`} />
        <span className="text-xs font-semibold hidden sm:inline-block">{activeOption.name}</span>
        <Palette className="h-3.5 w-3.5 text-[var(--theme-muted)]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-[var(--theme-border)] bg-[var(--theme-surface)] p-1.5 shadow-xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-2 py-1 text-[10px] font-bold uppercase text-[var(--theme-muted)]">
            Select Visual Theme
          </div>
          <div className="space-y-0.5 mt-1">
            {themeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => selectTheme(opt.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  currentTheme === opt.id
                    ? "bg-[var(--theme-surface-subtle)] text-[var(--theme-secondary)] font-bold"
                    : "text-[var(--theme-text)] hover:bg-[var(--theme-surface-subtle)]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-3 h-3 rounded-full ${opt.dotColor} ring-1 ring-black/15`} />
                  <span>{opt.name}</span>
                </div>
                {currentTheme === opt.id && <Check className="h-3.5 w-3.5 text-[var(--theme-secondary)]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
