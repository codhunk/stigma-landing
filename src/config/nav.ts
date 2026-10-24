import type { NavItem, FooterSection } from "@/types/nav";

export const mainNav: NavItem[] = [
  { title: "Product", href: "#hero" },
  { title: "Modules", href: "#modules" },
  { title: "Live Demo", href: "#workspace-preview" },
  { title: "Pricing", href: "#pricing" },
];

export const footerNav: FooterSection[] = [
  {
    title: "Product",
    items: [
      { title: "Core Platform", href: "#hero" },
      { title: "Academic Modules", href: "#modules" },
      { title: "Cloud Infrastructure", href: "#hero" },
      { title: "Enterprise Tiers", href: "#pricing" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "Research Universities", href: "#" },
      { title: "Community Colleges", href: "#" },
      { title: "State Systems", href: "#" },
      { title: "Deans & Provosts", href: "#" },
    ],
  },
  {
    title: "Governance",
    items: [
      { title: "Data Residency", href: "#" },
      { title: "Security Whitepapers", href: "#" },
      { title: "Compliance Matrix", href: "#" },
      { title: "Audit Log Access", href: "#" },
    ],
  },
  {
    title: "Access",
    items: [
      { title: "Staff Login", href: "#" },
      { title: "Registrar Portal", href: "#" },
      { title: "Schedule Briefing", href: "#demo-section" },
      { title: "Sandbox Instance", href: "#demo-section" },
    ],
  },
];
