import Link from "next/link";
import { CheckCircle2, XCircle, Rocket, Star, Check } from "lucide-react";
import { pricingPlans } from "@/config/pricing";

export function PricingSection() {
  return (
    <section className="w-full py-24 bg-slate-50/70 border-t border-slate-200/80" id="pricing">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase">
            Transparent Tiering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Predictable Campus Scale Investment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Transparent student-count licensing with zero hidden transaction surcharges.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? "shadow-2xl shadow-blue-600/15 border-2 border-blue-600 -translate-y-1.5 ring-4 ring-blue-500/10"
                  : "shadow-sm border border-slate-200 hover:shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-xs font-bold uppercase shadow-md flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  MOST POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 pt-1">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      plan.isPopular
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : plan.id === "trust-enterprise"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-black ${
                        plan.isPopular ? "text-blue-600" : "text-slate-900"
                      }`}
                    >
                      {plan.priceDisplay}
                    </span>
                    {plan.periodText && (
                      <span className="text-sm text-slate-500 font-medium">
                        {plan.periodText}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    {plan.isPopular && (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    )}
                    <span>{plan.subPriceText}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-800 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-2.5 ${
                        !feature.included ? "text-slate-400 line-through" : ""
                      }`}
                    >
                      {feature.included ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="h-4 w-4 text-slate-300 shrink-0" />
                      )}
                      <span className={plan.isPopular ? "font-semibold" : ""}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 active:scale-[0.98]"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.isPopular && <Rocket className="h-4 w-4" />}
                  {plan.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
