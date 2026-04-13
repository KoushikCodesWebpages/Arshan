"use client";
import { theme } from "@/lib/theme";

export default function OnboardingHeader() {
  return (
    <div className="space-y-4 mb-16">
      <span className={`uppercase tracking-[0.25em] text-xs font-bold ${theme.brand.accent}`}>
        Arshan's Social Management
      </span>
      <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${theme.text.brand}`}>
        Brand Onboarding: <br />
        <span className="opacity-70">Let's Build Your Presence</span>
      </h1>
      <p className={`text-lg max-w-2xl ${theme.text.muted}`}>
        To craft a bespoke social strategy that resonates, we need to understand the architecture of your brand identity.
      </p>
    </div>
  );
}