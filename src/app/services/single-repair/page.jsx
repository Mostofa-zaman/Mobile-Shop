
"use client";

import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import Container from "@/components/common/Container";
import Sidebar from "@/components/services/phoneRepair/Sidebar";
import SingleRepairHero from "@/components/services/phoneRepair/SingleRepairHero";
import PhoneRepairHeroSection from "@/components/services/phoneRepair/PhoneRepairHeroSection";
import RepaireGrid from "@/components/services/phoneRepair/RepaireGrid";
import RepWhyChooseUs from "@/components/services/phoneRepair/RepWhyChooseUs";
import RepairCTA from "@/components/services/serviceRepair/RepairCTA";



export default function Page() {
  const searchParams = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "Phone Repair";
  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <SingleRepairHero />

      {/* Main Content Layout */}
      <Container className="mt-8">
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Sidebar */}
          <div className="w-full min-w-0 lg:w-[25%] lg:shrink-0">
          <Sidebar
  selectedCategory={selectedCategory}
  onCategoryChange={(category) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);

    window.history.pushState(
      null,
      "",
      `?${params.toString()}`
    );
  }}
/>
          </div>

          {/* Main Content */}
          <div className="w-full min-w-0 flex-1">
           <PhoneRepairHeroSection
  selectedCategory={selectedCategory}
/>
            <RepaireGrid />
            <RepWhyChooseUs />
          </div>
        </div>
      </Container>

      <RepairCTA />
    </main>
  );
}
