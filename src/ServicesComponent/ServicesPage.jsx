import React from "react";
import CallToActionSection from "./CallToAction";
import StrategicConsultancySection from "./ConsultancyService";
import HeroSection from "./HeroSection";
import ResearchServicesSection from "./ResearchService";
import WhyChooseUsSection from "./WhyChooseUs";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background-dark text-[#111418] dark:text-white transition-colors duration-300">
      <HeroSection />
      <ResearchServicesSection />
      <StrategicConsultancySection />
      <WhyChooseUsSection />
      <CallToActionSection />
    </main>
  );
}