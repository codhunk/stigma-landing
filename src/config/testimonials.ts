import type { TestimonialItem, MetricItem } from "@/types/testimonial";

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "HyperScale Labs",
    quote:
      "Stigma reduced our release cycle friction from 45 minutes to under 2 minutes. The observability insights caught a critical regression on day one.",
    rating: 5,
  },
  {
    id: "2",
    author: "Marcus Chen",
    role: "Founder & CTO",
    company: "Vortex Financial",
    quote:
      "The zero-trust security architecture was crucial for passing our enterprise compliance audit. We couldn't have closed our Fortune 500 contract without it.",
    rating: 5,
  },
  {
    id: "3",
    author: "Sarah Jenkins",
    role: "Lead Platform Architect",
    company: "CloudNova",
    quote:
      "Developer experience is unmatched. Our engineers actually enjoy deploying changes now. Stigma feels like software designed from the future.",
    rating: 5,
  },
];

export const metricsData: MetricItem[] = [
  { value: "99.999%", label: "Uptime Reliability", sublabel: "Backed by enterprise SLA" },
  { value: "<12ms", label: "Global Edge Latency", sublabel: "Across 35 edge regions" },
  { value: "10x", label: "Deployment Velocity", sublabel: "Average customer acceleration" },
  { value: "$2.4M", label: "Infrastructure Saved", sublabel: "Aggregated client cloud spend" },
];

export const brandLogos = [
  { name: "Acme Corp", label: "ACME" },
  { name: "Pulse Technologies", label: "PULSE" },
  { name: "Apex Data", label: "APEX" },
  { name: "Kinetic AI", label: "KINETIC" },
  { name: "Quantum Systems", label: "QUANTUM" },
  { name: "Vertex Cloud", label: "VERTEX" },
];
