import React from "react";

import Container from "@/components/common/Container";
import Sidebar from "@/components/services/phoneRepair/Sidebar";
import SingleRepairHero from "@/components/services/phoneRepair/SingleRepairHero";
import PhoneRepairHeroSection from "@/components/services/phoneRepair/PhoneRepairHeroSection";
import RepaireGrid from "@/components/services/phoneRepair/RepaireGrid";
import RepWhyChooseUs from "@/components/services/phoneRepair/RepWhyChooseUs";

export default function Page() {
  return (
    <main className="min-h-screen pb-16">
      {/* Hero Banner Section */}
      <SingleRepairHero />

      {/* Main Content Layout */}
      <Container className="mt-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Sidebar - 30% */}
          <div className="w-full min-w-0 lg:w-[25%] lg:shrink-0">
            <Sidebar />
          </div>

          {/* Phone Repair Content - 70% */}
          <div className="w-full min-w-0 flex-1">
            <PhoneRepairHeroSection/>
            <RepaireGrid/>
            <RepWhyChooseUs/>
          </div>
        </div>
      </Container>
    </main>
  );
}
