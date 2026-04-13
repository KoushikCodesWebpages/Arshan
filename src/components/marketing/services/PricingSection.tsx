"use client";

import React from "react";
import { theme } from "@/lib/theme";
import { Check, Zap } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const plans = [
  {
    name: "STARTER",
    subtitle: "Essential Brand Presence",
    price: "250€",
    features: ["8 High-Impact Posts", "Platform-Native Captions", "Monthly Performance Report"],
    buttonText: "SELECT STARTER",
    isDark: false,
  },
  {
    name: "GROWTH",
    subtitle: "Expanding Your Reach",
    price: "320€",
    features: ["15 Posts Per Month", "Active Stories & Engagement", "Bi-Weekly Strategy Review", "Hashtag & Trend Research"],
    buttonText: "SELECT GROWTH",
    isDark: false,
    isRecommended: true,
  },
  {
    name: "PREMIUM",
    subtitle: "Market Leadership",
    price: "600€",
    features: ["Daily Posting (30+ posts)", "Premium Custom Content", "Full Platform Management", "Priority Support Desk"],
    buttonText: "SELECT PREMIUM",
    isDark: true,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="w-full mx-auto px-28">
        {/* Header Section */}
        <FadeInStagger className="text-center mb-16 space-y-4">
          <FadeItem>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
              Service Plans
            </span>
          </FadeItem>
          <FadeItem>
            <h2 className={`text-5xl md:text-6xl font-bold ${theme.text.brand}`}>
              Social Media Pricing.
            </h2>
          </FadeItem>
        </FadeInStagger>

        {/* Pricing Grid */}
        <FadeInStagger className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            /* h-full added to FadeItem to ensure the motion wrapper stretches */
            <FadeItem key={index} className="h-full">
              <div
                className={`relative flex flex-col h-full p-10 rounded-sm transition-all duration-300 ${
                  plan.isDark 
                    ? "bg-primary border-primary shadow-2xl text-white" 
                    : "bg-white border-slate-100 hover:shadow-xl"
                } ${plan.isRecommended ? "ring-2 ring-primary ring-offset-0" : ""}`}
              >
                {plan.isRecommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1 tracking-widest uppercase">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-1 ${plan.isDark ? "text-white" : theme.text.brand}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs opacity-60 ${plan.isDark ? "text-slate-300" : theme.text.muted}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-8 border-b border-slate-100/20 pb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-xs opacity-60">/ MONTH</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-12 grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      {plan.isDark && fIdx === 0 ? (
                        <Zap className="w-4 h-4 text-white fill-white" />
                      ) : (
                        <Check className={`w-4 h-4 ${plan.isDark ? "text-white" : "text-primary"}`} />
                      )}
                      <span className={`text-sm ${plan.isDark ? "text-slate-200" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 text-xs font-bold tracking-widest transition-all ${
                    plan.isDark
                      ? "bg-white text-primary hover:bg-slate-100"
                      : "bg-primary text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}