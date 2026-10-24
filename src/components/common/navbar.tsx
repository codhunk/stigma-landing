"use client";

import * as React from "react";
import Link from "next/link";
import { Rocket, ShieldCheck, User } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { mainNav } from "@/config/nav";
import { BrandLogo } from "@/components/common/brand-logo";
import { MobileNav } from "@/components/common/mobile-nav";

export function Navbar() {
  const isScrolled = useScroll(10);

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/80 backdrop-blur-md border-slate-100"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand & Desktop Navigation */}
        <div className="flex items-center gap-10">
          <BrandLogo />

          <nav className="hidden xl:flex items-center gap-7">
            {mainNav.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  idx === 0 ? "text-blue-600 font-semibold" : "text-slate-600"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#portal"
            className="hidden md:inline-flex px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
          >
            Institution Portal
          </Link>

          <Link
            href="#demo-section"
            className="hidden sm:inline-flex px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-xs transition-all"
          >
            Book a Demo
          </Link>

          <Link
            href="#demo-section"
            className="inline-flex px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all items-center gap-1.5 sm:gap-2 shrink-0"
          >
            <Rocket className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden xs:inline sm:inline">Start Free Trial</span>
            <span className="inline xs:hidden sm:hidden">Free Trial</span>
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
