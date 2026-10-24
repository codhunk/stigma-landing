export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tag: string;
  description: string;
  priceDisplay: string;
  periodText: string;
  subPriceText: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: PricingFeature[];
}
