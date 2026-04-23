"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { CheckCircle2, Zap, Camera, Rocket, Crown } from "lucide-react";

interface SocialMediaPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  isDark: boolean;
  badge: string;
  icon: React.ReactNode;
  desc: string;
}

const plans: SocialMediaPlan[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Essential Brand Presence",
    price: "250",
    badge: "ESSENTIAL",
    desc: "Perfect for emerging brands looking to establish a professional baseline.",
    icon: <Camera className="w-10 h-10 stroke-[1.5px]" />,
    features: [
      "8 High-Impact Posts",
      "Platform-Native Captions",
      "Monthly Performance Report",
    ],
    isDark: false,
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Expanding Your Reach",
    price: "320",
    badge: "MOST SELECTED",
    desc: "Bridges the gap between presence and engagement with active strategy.",
    icon: <Rocket className="w-10 h-10 stroke-[1.5px]" />,
    features: [
      "15 Posts Per Month",
      "Active Stories & Engagement",
      "Bi-Weekly Strategy Review",
      "Full Profile Makeover & Trend Research",
    ],
    isDark: true,
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Market Leadership",
    price: "600",
    badge: "EXPERT",
    desc: "Total platform dominance with daily custom content and priority management.",
    icon: <Crown className="w-10 h-10 stroke-[1.5px]" />,
    features: [
      "Daily Posting (30+ posts)",
      "Premium Custom Content",
      "Full Platform Management",
      "Priority Support Desk",
    ],
    isDark: false,
  },
];

export default function PricingGrid() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#social-media-pricing") {
      const el = document.getElementById("social-media-pricing");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  const handlePlanSelection = (plan: SocialMediaPlan) => {
    const { icon, ...planData } = plan;
    localStorage.setItem("selectedOnboardingPlan", JSON.stringify(planData));
    router.push("/marketing/onboarding");
  };

  return (
    <section id="social-media-pricing" className="py-16 md:py-16 bg-background overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-28">
        
        <FadeInStagger className="text-center mb-8 space-y-4">
          <FadeItem>
            <span className={`${theme.text.brand} text-[13px] font-bold tracking-[0.2em] uppercase`}>
              Service Plans
            </span>
          </FadeItem>
          <FadeItem>
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
              Social Media Pricing
            </h2>
          </FadeItem>
        </FadeInStagger>

        {/* items-stretch ensures all columns are equal height */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <FadeItem key={plan.id} className="flex">
              <div
                onClick={() => handlePlanSelection(plan)}
                className={`relative flex flex-col w-full p-8 md:p-10 rounded-brand transition-all duration-500 cursor-pointer group shadow-sm ${
                  plan.isDark
                    ? `${theme.brand.primary} text-white z-10 shadow-2xl lg:scale-100`
                    : `${theme.ui.card} text-foreground border border-border-light hover:shadow-md hover:-translate-y-1`
                }`}
              >
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full ${
                    plan.isDark ? "bg-white/10 text-white" : "bg-neutral text-tertiary border border-border-light"
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`mb-6 ${plan.isDark ? "text-tertiary" : "text-secondary"}`}>
                  <div className="w-10 h-10 flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className={`text-[22px] md:text-[24px] font-bold tracking-tight mb-1 uppercase ${
                    plan.isDark ? "text-white" : theme.text.brand
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-[36px] md:text-[40px] font-bold tracking-tighter">€{plan.price}</span>
                    <span className="text-sm md:text-base ml-1 opacity-60 font-medium uppercase">/mo</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className={`text-[12px] md:text-[13px] font-bold uppercase tracking-widest mb-2 ${
                    plan.isDark ? "text-tertiary" : "text-primary"
                  }`}>
                    Target & Goal:
                  </p>
                  <p className={`text-[14px] leading-relaxed italic font-medium min-h-10 ${
                    plan.isDark ? "text-white/70" : theme.text.muted
                  }`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Features - grow class pushes the button to the bottom */}
                <ul className="space-y-4 mb-10 grow">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-3 items-start">
                      {plan.isDark && fIdx === 0 ? (
                        <Zap className="w-4 h-4 mt-0.5 shrink-0 text-tertiary fill-tertiary" />
                      ) : (
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 stroke-[2px] ${
                          plan.isDark ? "text-tertiary" : "text-secondary"
                        }`} />
                      )}
                      <span className={`text-[14px] md:text-[15px] leading-snug ${
                        plan.isDark ? "text-white/90" : theme.text.main
                      }`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button stays at bottom */}
                <button className={`w-full py-3 text-[12px] md:text-[13px] font-bold uppercase tracking-widest rounded-brand transition-all active:scale-[0.97] mt-auto ${
                  plan.isDark ? "bg-tertiary text-white hover:brightness-110 shadow-lg shadow-tertiary/20" : `${theme.buttons.primary}`
                }`}>
                  Select {plan.name}
                </button>
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}