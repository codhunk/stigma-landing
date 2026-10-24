import type { PillarItem } from "@/types/feature";

export const operationalPillars: PillarItem[] = [
  {
    id: "pillar-1",
    pillarNumber: "PILLAR 01",
    title: "Student Lifecycle & CRM",
    description:
      "Single dossier spanning inquiries, merit pipelines, behavioral records, and permanent alumni registries.",
    badge: "360° Profiles",
    iconName: "UserSearch",
    accentColor: "blue",
  },
  {
    id: "pillar-2",
    pillarNumber: "PILLAR 02",
    title: "Smart Attendance & Edge Bio",
    description:
      "Sub-second edge turnstile sync, facial recognition, dynamic QR kiosk checks, and automatic parent SMS triggers.",
    badge: "Sub-Second Sync",
    iconName: "Fingerprint",
    accentColor: "amber",
  },
  {
    id: "pillar-3",
    pillarNumber: "PILLAR 03",
    title: "Automated Fee & Gateway",
    description:
      "Zero reconciliation lag with direct UPI, Razorpay & Stripe gateways, smart installment splits, and automated receipts.",
    badge: "99.98% SLA",
    iconName: "CreditCard",
    accentColor: "emerald",
  },
  {
    id: "pillar-4",
    pillarNumber: "PILLAR 04",
    title: "Academic Curriculum & Timetable",
    description:
      "Conflict-free AI room and faculty scheduling, CBCS syllabus tracking, and multi-period elective assignment.",
    badge: "AI Conflict Detection",
    iconName: "BookOpen",
    accentColor: "blue",
  },
  {
    id: "pillar-5",
    pillarNumber: "PILLAR 05",
    title: "Exams & Verifiable Gradebooks",
    description:
      "Automated grading rubrics, hall ticket issuance, and tamper-proof cryptographic QR digital transcripts.",
    badge: "Verifiable Credentials",
    iconName: "CheckCircle",
    accentColor: "indigo",
  },
  {
    id: "pillar-6",
    pillarNumber: "PILLAR 06",
    title: "Omnichannel Comms Engine",
    description:
      "Official WhatsApp Business API integration, instant batch SMS notifications, and targeted mobile push alerts.",
    badge: "Official WhatsApp API",
    iconName: "MessageSquare",
    accentColor: "emerald",
  },
  {
    id: "pillar-7",
    pillarNumber: "PILLAR 07",
    title: "Multi-Tenant Trust Network",
    description:
      "Sovereign isolated schemas with dedicated subdomains and centralized parent trust oversight.",
    badge: "Zero Data Leakage",
    iconName: "Shield",
    accentColor: "purple",
  },
  {
    id: "pillar-8",
    pillarNumber: "PILLAR 08",
    title: "Executive BI & Compliance",
    description:
      "Automated NAAC, NIRF, CBSE & NEP 2020 exports with real-time financial and enrollment telemetry.",
    badge: "Pre-built Templates",
    iconName: "BarChart",
    accentColor: "blue",
  },
];

export const bentoGridItems = [
  {
    id: "tenant-isolation",
    tag: "Multi-Tenant Schema",
    title: "Zero Cross-Tenant Leakage",
    description: "Every institution enjoys dedicated PostgreSQL schema isolation with separate encryption keys.",
    colSpan: "lg:col-span-2",
  },
  {
    id: "edge-biometric",
    tag: "Sub-Second Ingress",
    title: "Real-time Biometric Ingress",
    description: "Hardware RFID & Turnstile integration syncing 1,000+ gate punches per second.",
    colSpan: "lg:col-span-1",
  },
];

