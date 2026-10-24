import { brandLogos } from "@/config/testimonials";
import { Container } from "@/components/shared/container";

export function LogosSection() {
  return (
    <div className="border-y border-neutral-800/80 bg-neutral-950/40 py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase text-neutral-500 mb-6">
          Powering data infrastructure for top engineering teams worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 group cursor-default transition-all duration-200 hover:opacity-100"
            >
              <div className="h-6 w-6 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40">
                {brand.label.slice(0, 2)}
              </div>
              <span className="font-mono text-sm font-semibold text-neutral-400 group-hover:text-neutral-200">
                {brand.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
