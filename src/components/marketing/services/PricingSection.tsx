"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { theme } from "@/lib/theme";
import { Check, Zap } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

const plans = [
  {
    name: "Starter",
    subtitle: "Essential Brand Presence",
    price: "250",
    features: ["8 High-Impact Posts", "Platform-Native Captions", "Monthly Performance Report"],
    buttonText: "SELECT STARTER",
    isDark: false,
  },
  {
    name: "Growth",
    subtitle: "Expanding Your Reach",
    price: "320",
    features: ["15 Posts Per Month", "Active Stories & Engagement", "Bi-Weekly Strategy Review", "Full Profile makeover & Trend Research"],
    buttonText: "SELECT GROWTH",
    isDark: false,
    isRecommended: true,
  },
  {
    name: "Premium",
    subtitle: "Market Leadership",
    price: "600",
    features: ["Daily Posting (30+ posts)", "Premium Custom Content", "Full Platform Management", "Priority Support Desk"],
    buttonText: "SELECT PREMIUM",
    isDark: true,
  },
];

export default function PricingSection() {
  const router = useRouter();

  const handlePlanSelection = (plan: typeof plans[0]) => {
    localStorage.setItem("selectedOnboardingPlan", JSON.stringify(plan));
    router.push("/marketing/onboarding");
  };

  useEffect(() => {
    if (window.location.hash === "#social-media-pricing") {
      const el = document.getElementById("social-media-pricing");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <section
      id="social-media-pricing"
      className="py-16 md:py-24" 
    >
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        
        {/* Header */}
        <FadeInStagger className="text-center mb-12 md:mb-16 space-y-4">
          <FadeItem>
            <span className={`${theme.text.brand} text-[11px] md:text-[13px] font-bold tracking-[0.2em] uppercase `}>
              Service Plans
            </span>
          </FadeItem>

          <FadeItem>
            {/* text-4xl (Mobile) -> md:text-6xl (PC) */}
            <h2 className={`text-4xl md:text-6xl font-bold ${theme.text.brand}`}>
              Social Media Pricing.
            </h2>
          </FadeItem>
        </FadeInStagger>

        {/* Grid: Stacks on mobile, 3-cols on desktop */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <FadeItem key={index} className="h-full">
              
              <div
                onClick={() => handlePlanSelection(plan)}
                className={`relative flex flex-col h-full p-8 md:p-10 rounded-sm transition-all duration-300 cursor-pointer group border ${
                  plan.isDark
                    ? "bg-primary border-primary shadow-2xl text-white"
                    : "bg-white border-slate-100 hover:shadow-xl"
                } ${plan.isRecommended ? "ring-2 ring-primary" : ""}`}
              >
                
                {plan.isRecommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[9px] md:text-[10px] font-bold px-4 py-1 tracking-widest uppercase">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl md:text-2xl font-bold mb-1 ${plan.isDark ? "text-white" : theme.text.brand}`}>
                    {plan.name.toUpperCase()}
                  </h3>

                  <p className={`text-xs md:text-sm ${plan.isDark ? "text-slate-300" : "text-secondary"}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-8 border-b border-slate-100/20 pb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl md:text-4xl font-bold">€{plan.price}</span>
                    <span className="text-xs md:text-sm text-secondary">/ MONTH</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 md:mb-12 grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0">
                        {plan.isDark && fIdx === 0 ? (
                          <Zap className="w-4 h-4 text-white fill-white" />
                        ) : (
                          <Check className={`w-4 h-4 ${plan.isDark ? "text-white" : "text-primary"}`} />
                        )}
                      </div>
                      
                      <span 
                        className={`text-sm md:text-md ${
                          fIdx === 0 
                            ? (plan.isDark ? "text-white font-semibold" : "text-slate-950 font-bold") 
                            : (plan.isDark ? "text-slate-300" : "text-slate-600")
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 text-xs md:text-sm font-bold tracking-widest transition-all ${
                    plan.isDark
                      ? "bg-white text-primary group-hover:bg-slate-100"
                      : "bg-primary text-white group-hover:bg-slate-800"
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