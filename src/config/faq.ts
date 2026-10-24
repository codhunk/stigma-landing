import type { FaqItem } from "@/types/testimonial";

export const faqList: FaqItem[] = [
  {
    id: "setup-time",
    question: "How long does it take to integrate Stigma into our stack?",
    answer:
      "Most teams are completely integrated in under 15 minutes. We provide single-line SDK imports for Next.js, Node.js, Python, and Go, plus automated GitHub Actions integration.",
  },
  {
    id: "trial-credit-card",
    question: "Do I need a credit card to start the 14-day trial?",
    answer:
      "No. You can spin up a fully featured Sandbox environment with 100,000 free events without entering payment details.",
  },
  {
    id: "compliance",
    question: "Is Stigma SOC-2 and GDPR compliant?",
    answer:
      "Yes. We are SOC-2 Type II certified and fully compliant with GDPR, HIPAA, and ISO 27001 standards. Enterprise customers can request our complete compliance documentation and audit reports.",
  },
  {
    id: "data-residency",
    question: "Can we control where our data is stored?",
    answer:
      "Yes. You can select specific cloud regions (US-East, EU-Frankfurt, AP-Tokyo) to comply with data residency legislation, or deploy our self-hosted VPC cluster on AWS/GCP.",
  },
  {
    id: "migration",
    question: "What does migration from legacy tooling look like?",
    answer:
      "We provide zero-downtime dual-write adapters and automated migration scripts. Our enterprise support team will also assist with custom pipeline validation.",
  },
];
