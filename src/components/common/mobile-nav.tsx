"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/config/nav";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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

  const drawerContent = isOpen && mounted ? (
    <div
      className="fixed inset-x-0 top-20 bottom-0 z-[100] bg-white px-6 py-6 flex flex-col justify-between border-t border-slate-200 overflow-y-auto shadow-2xl animate-in fade-in duration-150"
      style={{ backgroundColor: "#ffffff" }}
    >
      <nav className="flex flex-col space-y-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
          Navigation
        </span>
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors py-3.5 px-3 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between"
          >
            <span>{item.title}</span>
            <span className="text-slate-400 text-xs font-mono">→</span>
          </Link>
        ))}
        <Link
          href="#portal"
          onClick={() => setIsOpen(false)}
          className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors py-3.5 px-3 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between"
        >
          <span>Institution Portal</span>
          <span className="text-blue-600 text-xs font-mono font-bold">Login</span>
        </Link>
      </nav>

      <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-slate-200">
        <Link href="#demo-section" onClick={() => setIsOpen(false)} className="w-full">
          <div className="w-full py-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-center text-sm shadow-xs transition-colors">
            Book an Interactive Demo
          </div>
        </Link>
        <Link href="#demo-section" onClick={() => setIsOpen(false)} className="w-full">
          <div className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-sm shadow-lg shadow-blue-600/25 transition-colors">
            Start Free 30-Day Trial
          </div>
        </Link>
        <p className="text-[11px] text-center text-slate-400 mt-1">
          No credit card required • Instant provisioning
        </p>
      </div>
    </div>
  ) : null;

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

      {drawerContent && typeof document !== "undefined"
        ? createPortal(drawerContent, document.body)
        : null}
    </div>
  );
}
