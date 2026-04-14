"use client";

import React from "react";
import WorkflowHero from "@/components/marketing/workflow/WorkflowHero";
import StrategicOnboarding from "@/components/marketing/workflow/StrageticOnBoarding";
import ContentArchitecture from "@/components/marketing/workflow/ContentArchitecture";
import CreativityGeneration from "@/components/marketing/workflow/CreativityGeneration";
import OptimizationGrid from "@/components/marketing/workflow/OptimizationGrid";
import WorkflowCTA from "@/components/marketing/workflow/WorkflowCTA";

export default function WorkflowPage() {
  return (
    <main className="flex flex-col w-full bg-white">
      
      {/* 01. The Architecture of Influence Hero */}
      <WorkflowHero />

      <StrategicOnboarding />

      <ContentArchitecture />

      <CreativityGeneration />

      <OptimizationGrid />

      <WorkflowCTA />
    </main>
  );
}