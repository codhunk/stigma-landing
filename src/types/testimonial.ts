export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  rating?: number;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
