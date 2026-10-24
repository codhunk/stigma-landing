export interface PillarItem {
  id: string;
  pillarNumber: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  accentColor: "blue" | "amber" | "emerald" | "purple" | "indigo";
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  badge?: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  colSpan?: string;
  rowSpan?: string;
}
