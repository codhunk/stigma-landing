import { Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/shared/container";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeader
          eyebrow="Wall of Love"
          title="Loved by Fast-Moving Engineering Teams"
          description="Read how engineering leads and founders rely on Stigma to run their mission-critical production pipelines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-8 border-neutral-800 bg-neutral-900/40 hover:border-neutral-700"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4 text-emerald-400">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-emerald-400" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-sm sm:text-base italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </CardContent>

              <div className="mt-6 pt-6 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-neutral-950 text-sm">
                  {item.author[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {item.role} • {item.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
