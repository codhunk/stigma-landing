"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/nav";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="p-2 text-[#45464d] hover:text-[#0b1c30] transition-colors cursor-pointer"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-[#f8f9ff]/98 backdrop-blur-2xl px-6 py-8 flex flex-col justify-between border-t border-[#d3e4fe] animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#0b1c30] hover:text-[#0051d5] transition-colors py-2 border-b border-[#e5eeff]"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="#portal"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-[#45464d] hover:text-[#0051d5] transition-colors py-2 border-b border-[#e5eeff]"
            >
              Institution Portal
            </Link>
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#d3e4fe]">
            <Link href="#demo-section" onClick={() => setIsOpen(false)}>
              <div className="w-full py-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-semibold text-center text-sm">
                Book a Demo
              </div>
            </Link>
            <Link href="#demo-section" onClick={() => setIsOpen(false)}>
              <div className="w-full py-3 rounded-xl bg-[#0051d5] text-white font-semibold text-center text-sm shadow-md">
                Start Free Trial
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
