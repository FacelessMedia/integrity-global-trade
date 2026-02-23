import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { ServicesSection } from "@/components/sections/ServicesSection";

const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork").then(m => ({ default: m.HowWeWork })));
const CommoditiesSection = dynamic(() => import("@/components/sections/CommoditiesSection").then(m => ({ default: m.CommoditiesSection })));
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection").then(m => ({ default: m.WhyChooseUsSection })));
const OperationsShowcase = dynamic(() => import("@/components/sections/OperationsShowcase").then(m => ({ default: m.OperationsShowcase })));
const ComplianceSection = dynamic(() => import("@/components/sections/ComplianceSection").then(m => ({ default: m.ComplianceSection })));
const PartnerLogos = dynamic(() => import("@/components/sections/PartnerLogos").then(m => ({ default: m.PartnerLogos })));
const WhyChooseIGTC = dynamic(() => import("@/components/sections/WhyChooseIGTC").then(m => ({ default: m.WhyChooseIGTC })));
const CTASection = dynamic(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedStats />
      <ServicesSection />
      <HowWeWork />
      <CommoditiesSection />
      <WhyChooseUsSection />
      <OperationsShowcase />
      <ComplianceSection />
      <PartnerLogos />
      <WhyChooseIGTC />
      <CTASection />
    </>
  );
}
