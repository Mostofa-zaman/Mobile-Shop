import React from "react";

import Container from "@/components/common/Container";
import Sidebar from "@/components/services/phoneRepair/Sidebar";
import SingleRepairHero from "@/components/services/phoneRepair/SingleRepairHero";

export default function Page() {
  return (
    <main className="min-h-screen pb-16">
      {/* Hero Banner Section */}
      <SingleRepairHero />

      {/* Main Content Layout */}
      <Container className="mt-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Sidebar - 30% */}
          <div className="w-full min-w-0 lg:w-[30%] lg:shrink-0">
            <Sidebar />
          </div>

          {/* Phone Repair Content - 70% */}
          <div className="w-full min-w-0 flex-1"></div>
        </div>
      </Container>
    </main>
  );
}
