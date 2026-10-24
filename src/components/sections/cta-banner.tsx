import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="w-full py-24 bg-slate-50/70 border-t border-slate-200/80" id="demo-section">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8">
        <div className="w-full bg-slate-900 text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Ambient glow orbs */}
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-950/80 rounded-full w-fit border border-blue-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 uppercase">
                Immediate Institutional Provisioning
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Bring Your Entire Academic Institution Together.
            </h2>

            <p className="text-base sm:text-lg text-slate-300">
              Eliminate operational silos, accelerate fee cashflow, and empower your educators with the modern operating standard for forward-thinking leadership.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="#pricing"
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto text-center"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Start Institutional Trial</span>
              </Link>
              <Link
                href="#contact"
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-sm transition-all flex items-center justify-center w-full sm:w-auto text-center"
              >
                <span>Consult with Campus Architects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
