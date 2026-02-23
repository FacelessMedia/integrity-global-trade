import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { CTASection } from "@/components/sections/CTASection";
import { OperationsShowcase } from "@/components/sections/OperationsShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedStats />
      <ServicesSection />
      <CommoditiesSection />
      <WhyChooseUsSection />
      <OperationsShowcase />
      <ComplianceSection />
      <CTASection />
    </>
  );
}
