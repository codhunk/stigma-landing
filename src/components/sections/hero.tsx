"use client";

import * as React from "react";
import Link from "next/link";
import {
  Rocket,
  PlayCircle,
  ArrowRight,
  Wallet,
  Shield,
  Network,
  Zap,
  Lock,
  RefreshCw,
  Receipt,
  Radio,
  Star,
  CheckCircle2,
  Building,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type ConsoleTab = "overview" | "attendance" | "ledger" | "exams";

export function HeroSection() {
  const [activeTab, setActiveTab] = React.useState<ConsoleTab>("overview");
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/60 pt-32 pb-20 md:pt-36 md:pb-28" id="hero">
      {/* Background ambient gradient orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-100/80 via-indigo-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-2/3 -right-32 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle modern dot matrix pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-8">
        {/* STAGE 1: Centered Headline & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/90 rounded-full border border-blue-200/80 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-bold text-blue-700 uppercase">
              {siteConfig.pillText}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900">
            One Unified OS. Every Institution.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Complete Control.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
            {siteConfig.description}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="#demo-section"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Rocket className="h-4 w-4" />
              <span>Start Free 30-Day Trial</span>
            </Link>
            <Link
              href="#workspace-preview"
              className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlayCircle className="h-4 w-4 text-blue-600" />
              <span>Watch Interactive Demo</span>
            </Link>
            <Link
              href="#modules"
              className="px-4 py-3 text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust Social Proof Avatar Bar */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                GV
              </div>
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                SD
              </div>
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                AP
              </div>
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                KL
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <div className="flex items-center text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9 / 5.0</span>
              <span className="text-slate-400">•</span>
              <span>Trusted by 140+ Academic Institutions</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">CBSE</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">ICSE</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">NEP 2020</span>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-semibold">NAAC Grade-A</span>
            </div>
          </div>
        </div>

        {/* STAGE 2: Full-Width High-Precision Campus Cloud Console */}
        <div className="mt-14 max-w-6xl mx-auto relative">
          {/* Subtle floating badge: Top Right */}
          <div className="absolute -top-4 right-6 z-20 hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-500/30 shadow-lg animate-float">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-900">Auto-Reconciliation Active</p>
              <p className="text-[10px] text-emerald-600 font-medium">100% Bank Settlement Verified</p>
            </div>
          </div>

          {/* Main Browser Window */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 overflow-hidden">
            {/* Browser Chrome Header */}
            <div className="bg-slate-100/90 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between border-b border-slate-200 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="ml-1 sm:ml-3 text-[11px] sm:text-xs text-slate-600 font-mono flex items-center gap-1.5 bg-white px-2.5 sm:px-3 py-1 rounded-md border border-slate-200 truncate">
                  <Lock className="h-3 w-3 text-blue-600 shrink-0" />
                  <span className="truncate">edumanage.cloud/console/v4.2</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] bg-blue-100 text-blue-700 font-bold font-mono border border-blue-200">
                  AP-SOUTH-1 (Active)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Console Workspace */}
            <div className="p-3.5 sm:p-6 bg-slate-50/50 flex flex-col gap-4 sm:gap-5">
              {/* Institutional Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shrink-0">
                    GVS
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                        Green Valley Public Campus
                      </h2>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 shrink-0">
                        Tenant Live
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-500 block truncate">
                      K-12 & Junior College • Affiliation #CBSE-213084 • Schema: tenant_gv_prod
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRefresh}
                  className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors self-start sm:self-auto cursor-pointer shrink-0"
                >
                  <RefreshCw className={`h-3.5 w-3.5 text-blue-600 ${isRefreshing ? "animate-spin" : ""}`} />
                  <span>Sync Status: 48ms Normal</span>
                </button>
              </div>

              {/* 4 Stat KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Active Students</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">2,450</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">+12% vs last term</div>
                </div>

                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Staff on Duty</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">128 / 130</div>
                  <div className="text-[10px] text-blue-600 font-semibold mt-0.5">2 auto-substitutes</div>
                </div>

                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Attendance Rate</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-600 mt-0.5">96.4%</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 truncate">Edge RFID sync</div>
                </div>

                <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Fees Realized</div>
                  <div className="text-lg sm:text-xl font-bold text-blue-600 mt-0.5">₹18.52 Lakh</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">94% target met</div>
                </div>
              </div>

              {/* Chart & Telemetry Area */}
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2.5">
                  <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setActiveTab("overview")}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                        activeTab === "overview"
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("attendance")}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                        activeTab === "attendance"
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      Attendance Heatmap
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("ledger")}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                        activeTab === "ledger"
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      Fee Ledger
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("exams")}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                        activeTab === "exams"
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      Exam Matrix
                    </button>
                  </div>

                  <span className="text-xs text-blue-600 font-mono font-semibold flex items-center gap-1 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    Live Telemetry Ingress
                  </span>
                </div>

                <div className="pt-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 mb-2 gap-1">
                    <span className="font-semibold text-slate-800">
                      {activeTab === "overview" && "Weekly Attendance & Fee Cashflow Realization"}
                      {activeTab === "attendance" && "Daily Turnstile RFID Punch Distribution (3 Turnstiles)"}
                      {activeTab === "ledger" && "UPI & Netbanking Daily Ingress Velocity"}
                      {activeTab === "exams" && "Automated Grading & Digital Transcript Issuance"}
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full text-[11px] self-start sm:self-auto shrink-0">
                      +18.4% WoW Spike
                    </span>
                  </div>

                  <div className="w-full h-24 relative bg-blue-50/40 rounded-lg p-2 overflow-hidden flex items-end border border-blue-100">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 70">
                      <defs>
                        <linearGradient id="heroGradientClean" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,55 Q50,45 100,50 T200,30 T300,35 T400,10 L400,70 L0,70 Z"
                        fill="url(#heroGradientClean)"
                      />
                      <path
                        d="M0,55 Q50,45 100,50 T200,30 T300,35 T400,10"
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                      />
                      <circle cx="100" cy="50" fill="#2563eb" r="3.5" />
                      <circle cx="200" cy="30" fill="#2563eb" r="3.5" />
                      <circle cx="300" cy="35" fill="#2563eb" r="3.5" />
                      <circle cx="400" cy="10" fill="#10b981" r="4.5" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-500 font-mono pt-1.5">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span className="font-bold text-blue-600">Sat (Peak)</span>
                  </div>
                </div>
              </div>

              {/* Ingress Stream List */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Radio className="h-3.5 w-3.5 text-blue-600" />
                    Live Ingress Stream
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Listening for Edge Events
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 px-3 py-2 sm:py-1.5 rounded-lg border border-slate-100 gap-1 sm:gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="text-slate-800 font-medium truncate">Payment verified: ₹14,200 via UPI</span>
                      <span className="text-slate-500 text-[11px] shrink-0">(Grade 10-B)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 self-end sm:self-auto shrink-0">Just now</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 px-3 py-2 sm:py-1.5 rounded-lg border border-slate-100 gap-1 sm:gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-slate-800 font-medium truncate">Edge Bio-Sync: 420 gate punches synced</span>
                      <span className="text-slate-500 text-[11px] shrink-0">(Turnstile 03)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 self-end sm:self-auto shrink-0">12s ago</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 px-3 py-2 sm:py-1.5 rounded-lg border border-slate-100 gap-1 sm:gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                      <span className="text-slate-800 font-medium truncate">Hall Ticket batch issued: 340 students</span>
                      <span className="text-slate-500 text-[11px] shrink-0">(Sem IV)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 self-end sm:self-auto shrink-0">45s ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
