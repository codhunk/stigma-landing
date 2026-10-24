"use client";

import * as React from "react";
import { faqList } from "@/config/faq";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Container } from "@/components/shared/container";
import { AccordionItem } from "@/components/ui/accordion";

export function FaqSection() {
  const [openId, setOpenId] = React.useState<string | null>("setup-time");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id="faq">
      <Container size="md">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about the product, licensing, and enterprise onboarding."
        />

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
          {faqList.map((item) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
