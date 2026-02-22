import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";
import { OperationsShowcase } from "@/components/sections/OperationsShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CommoditiesSection />
      <WhyChooseUsSection />
      <OperationsShowcase />
      <ComplianceSection />
      <CTASection />
    </>
  );
}
