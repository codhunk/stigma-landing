import { bentoGridItems } from "@/config/features";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";

import type { BentoItem } from "@/types/feature";

export function BentoGridSection() {
  return (
    <Section id="solutions">
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Modular Infrastructure for Modern Scale"
          description="Designed to slot seamlessly into your existing CI/CD pipelines, cloud providers, and container environments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bentoGridItems.map((item: BentoItem) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/70 flex flex-col justify-between ${item.colSpan || ""}`}
            >
              <div>
                <Badge variant="outline" className="mb-4">
                  {item.tag}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>MODULE://{item.id.toUpperCase()}</span>
                <span className="text-emerald-400">STATUS: ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
