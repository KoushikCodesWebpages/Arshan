"use client";

import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function OnboardingHeader() {
  return (
    <FadeInStagger className="space-y-4 mb-16">
      
      <FadeItem>
        <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
          Arshan's Social Management
        </span>
      </FadeItem>

      <FadeItem>
        <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${theme.text.brand}`}>
          Brand Onboarding: <br />
          <span className="opacity-70">Let's Build Your Presence</span>
        </h1>
      </FadeItem>

      <FadeItem>
        <p className={`text-lg max-w-2xl ${theme.text.muted}`}>
          To craft a bespoke social strategy that resonates, we need to understand the architecture of your brand identity.
        </p>
      </FadeItem>

    </FadeInStagger>
  );
}