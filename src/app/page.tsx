import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { WorkspacePreviewSection } from "@/components/sections/workspace-preview";
import { PricingSection } from "@/components/sections/pricing";
import { CtaBannerSection } from "@/components/sections/cta-banner";

export default function StigmaLandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Sticky High-Contrast Header */}
      <Navbar />

      {/* Main SaaS Flow */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero & High-Precision Console Grid */}
        <HeroSection />

        {/* Section 2: 8 Essential Operational Pillars */}
        <FeaturesSection />

        {/* Section 3: Interactive Role Stakeholder Workspace Previews */}
        <WorkspacePreviewSection />

        {/* Section 4: Transparent Campus Pricing Tiers */}
        <PricingSection />

        {/* Section 5: Closing Enterprise Provisioning CTA */}
        <CtaBannerSection />
      </main>

      {/* Modern Deep Slate Footer */}
      <Footer />
    </div>
  );
}
