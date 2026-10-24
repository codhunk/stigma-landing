"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/common/brand-logo";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top Newsletter Card */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 mb-16">
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold text-blue-400 uppercase">
              Institutional Intelligence Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Stay ahead of accreditation & campus tech architectures.
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Monthly executive insights on NAAC, NEP 2020 compliance, and multi-tenant cloud governance.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-4 py-2.5 rounded-xl border border-emerald-800">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                Thank you! You are subscribed to the Institutional Intelligence Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-2 w-full max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  required
                  placeholder="registrar@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 px-4 rounded-xl border border-slate-700 bg-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 shadow-xs"
                />
                <button
                  type="submit"
                  className="h-11 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Directory Links */}
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mb-16">
          {/* Brand & Mission Statement */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
                <span className="font-black text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-bold text-blue-400 uppercase mt-0.5">
                  {siteConfig.badge}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm mt-1">
              Unified high-precision operating system engineered for universities, colleges, and multi-campus institutions. Modernizing governance, registration, and academic workflows.
            </p>

            {/* Certifications badges */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> SOC2 Type II
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-700 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" /> FERPA Compliant
              </span>
            </div>

            {/* Real-time status */}
            <div className="mt-2 flex items-center gap-2 p-2.5 rounded-xl border border-slate-800 bg-slate-900 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200">
                All Core Services Operational
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                (18ms Ingress)
              </span>
            </div>
          </div>

          {/* 4 Directory Columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase text-slate-200">
                {col.title}
              </span>
              <div className="flex flex-col space-y-2.5">
                {col.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400 text-center md:text-left">
          <div>
            <span>{siteConfig.copyright}</span>
          </div>

          {/* Social media icons */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href="#"
              aria-label="Stigma Twitter"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-xs"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Stigma LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-xs"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Stigma GitHub"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-xs"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Stigma YouTube"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors shadow-xs"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 font-medium">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Trust Center
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Security Matrix
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
