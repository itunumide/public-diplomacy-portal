import HeroSection from "./AboutHeroSection";
import CodeOfConductSection from "./CodeOfConductSection";
import CoreValuesSection from "./CoreValueSection";
import GoverningCouncilSection from "./GoverningCouncilSection";
import StateBranchesSection from "./StateBranchesSection";
import React from "react";
import "../Styles/about.css"

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[var(--background-light)]">
      <HeroSection/>
      <CoreValuesSection />
      <GoverningCouncilSection />
      <StateBranchesSection />
      <CodeOfConductSection />
    </main>
  );
}