import {
  UserSearch,
  Fingerprint,
  CreditCard,
  BookOpen,
  CheckCircle,
  MessageSquare,
  Shield,
  BarChart,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { operationalPillars } from "@/config/features";

const iconMap: Record<string, LucideIcon> = {
  UserSearch,
  Fingerprint,
  CreditCard,
  BookOpen,
  CheckCircle,
  MessageSquare,
  Shield,
  BarChart,
};

const colorConfig = {
  blue: {
    border: "border-blue-600/20 hover:border-blue-600/40 hover:shadow-blue-600/10",
    iconBg: "bg-gradient-to-br from-blue-600/15 to-blue-600/5 text-blue-600",
    badge: "text-blue-700 bg-blue-100",
    number: "text-blue-600",
    glow: "from-blue-600/10 to-transparent",
  },
  amber: {
    border: "border-amber-600/20 hover:border-amber-600/40 hover:shadow-amber-600/10",
    iconBg: "bg-gradient-to-br from-amber-600/15 to-amber-600/5 text-amber-600",
    badge: "text-amber-700 bg-amber-100",
    number: "text-amber-600",
    glow: "from-amber-600/10 to-transparent",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-emerald-600/10",
    iconBg: "bg-gradient-to-br from-emerald-600/15 to-emerald-600/5 text-emerald-600",
    badge: "text-emerald-800 bg-emerald-100",
    number: "text-emerald-600",
    glow: "from-emerald-600/10 to-transparent",
  },
  purple: {
    border: "border-purple-600/20 hover:border-purple-600/40 hover:shadow-purple-600/10",
    iconBg: "bg-gradient-to-br from-purple-600/15 to-purple-600/5 text-purple-600",
    badge: "text-purple-800 bg-purple-100",
    number: "text-purple-600",
    glow: "from-purple-600/10 to-transparent",
  },
  indigo: {
    border: "border-indigo-600/20 hover:border-indigo-600/40 hover:shadow-indigo-600/10",
    iconBg: "bg-gradient-to-br from-indigo-600/15 to-indigo-600/5 text-indigo-600",
    badge: "text-indigo-800 bg-indigo-100",
    number: "text-indigo-600",
    glow: "from-indigo-600/10 to-transparent",
  },
};

export function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-white border-t border-slate-200/80" id="modules">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase">
              Core Academic Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              8 Essential Operational Pillars
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              A unified suite replacing disparate point solutions. Zero data silos, instant multi-tenant sync, and frictionless administration.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-slate-800">
              All 8 Pillars Active & Ready
            </span>
          </div>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operationalPillars.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || CheckCircle;
            const theme = colorConfig[pillar.accentColor];

            return (
              <div
                key={pillar.id}
                className={`bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border ${theme.border} group flex flex-col justify-between relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${theme.glow} rounded-full blur-xl pointer-events-none`}
                />

                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${theme.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className={`text-xs font-mono font-bold ${theme.number}`}>
                    {pillar.pillarNumber}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-[#0b1c30] mt-1 mb-2 group-hover:text-[#0051d5] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#45464d]">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 flex items-center justify-between border-t border-[#eff4ff]">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${theme.badge}`}
                  >
                    {pillar.badge}
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 ${theme.number} group-hover:translate-x-1 transition-transform`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
