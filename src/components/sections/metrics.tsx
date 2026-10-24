import { metricsData } from "@/config/testimonials";
import { Container } from "@/components/shared/container";

export function MetricsSection() {
  return (
    <div id="metrics" className="border-y border-neutral-800/80 bg-neutral-900/30 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {metricsData.map((metric) => (
            <div key={metric.label} className="p-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="mt-3 text-base sm:text-lg font-semibold text-white">
                {metric.label}
              </div>
              {metric.sublabel && (
                <div className="mt-1 text-xs sm:text-sm text-neutral-400">
                  {metric.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
