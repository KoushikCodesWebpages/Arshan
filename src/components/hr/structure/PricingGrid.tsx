"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import { CheckCircle2, User, Users, BrainCircuit } from "lucide-react";

// Import the interface to ensure data consistency across the app
import type { HRPlan } from "@/components/hr/onboarding/HRPlanSelectionModal";

// Define the local tier type including UI-specific properties
type PricingTier = HRPlan & {
  id: string;
  badge: string;
  icon: React.ReactNode;
  isDark: boolean;
};

const tiers: PricingTier[] = [
  {
    id: "junior",
    name: "Junior Full-time",
    price: "500",
    badge: "ENTRY LEVEL",
    subtitle: "Administrative Support",
    desc: "Ideal for high-volume execution, data processing, and foundational technical tasks.",
    icon: <User className="w-7 h-7 stroke-[1.5px]" />, 
    features: [
      "Execution of standardized workflows and operational protocols.",
      "High-speed data synthesis and elementary problem solving.",
      "Full integration into management systems.",
    ],
    isDark: false,
  },
  {
    id: "mid-senior",
    name: "Mid-Senior Full-time",
    price: "999",
    badge: "MOST SELECTED",
    subtitle: "Institutional Management",
    desc: "Bridges the gap between strategy and execution; capable of autonomous project management.",
    icon: <Users className="w-7 h-7 stroke-[1.5px]" />, 
    features: [
      "Advanced technical specialization and complex project ownership.",
      "Direct stakeholder communication and progress reporting.",
      "Mentorship for junior staff and process optimization.",
    ],
    isDark: true,
  },
  {
    id: "senior",
    name: "Senior Full-time",
    price: "2,199",
    badge: "EXPERT",
    subtitle: "Strategic Oversight",
    desc: "Strategic leaders who architect solutions and manage entire functional departments.",
    icon: <BrainCircuit className="w-7 h-7 stroke-[1.5px]" />,
    features: [
      "Strategic roadmap development and architectural leadership.",
      "High-impact procurement and vendor management oversight.",
      "Governance of quality standards and institutional compliance.",
    ],
    isDark: false,
  },
];

export default function PricingGrid() {
  const router = useRouter();

  const handlePlanSelection = (tier: PricingTier) => {
    /** * FIX: Destructure 'icon' out of the object. 
     * React components (JSX) cannot be stringified into localStorage 
     * and cause the 'Cyclic object value' error.
     */
    const { icon, ...planData } = tier;

    // 1. Persist the plain data for the onboarding forms
    localStorage.setItem("selectedOnboardingPlan", JSON.stringify(planData));
    
    // 2. Route to the HR specific onboarding flow
    router.push("/hr/onboarding");
  };

  return (
    <section className="py-20 bg-background">
      {/* 20% Smaller Look: max-w-[1120px] */}
      <div className="w-full mx-auto px-28">
        
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <FadeItem 
              key={tier.id} 
              className="h-full"
            >
              <div
                onClick={() => handlePlanSelection(tier)}
                className={`relative flex flex-col h-full p-8 rounded-brand transition-all duration-500 cursor-pointer group shadow-sm ${
                  tier.isDark
                    ? `${theme.brand.primary} text-white z-10 shadow-2xl`
                    : `${theme.ui.card} text-foreground border-border-light hover:shadow-md hover:-translate-y-1`
                }`}
              >
                {/* Badge Tag */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`text-[9px] font-bold tracking-widest px-2 py-1 rounded-brand ${
                      tier.isDark
                        ? "bg-white/10 text-white"
                        : "bg-neutral text-tertiary border border-border-light"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                {/* Brand Icon */}
                <div className={`mb-6 ${tier.isDark ? "text-tertiary" : "text-secondary"}`}>
                  {tier.icon}
                </div>

                {/* Title & Price Block */}
                <div className="mb-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={`text-[22px] font-bold tracking-tight mb-1 ${
                      tier.isDark ? "text-white" : theme.text.brand
                    }`}
                  >
                    {tier.name}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-baseline"
                  >
                    <span className="text-[36px] font-bold tracking-tighter">
                      €{tier.price}
                    </span>
                    <span className="text-xs ml-1 opacity-60 font-medium">/mo</span>
                  </motion.div>
                </div>

                {/* Role Capability Header */}
                <div className="mb-6">
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${
                      tier.isDark ? "text-tertiary" : "text-secondary"
                    }`}
                  >
                    Role & Capability:
                  </p>
                  <p className={`text-[12px] leading-relaxed italic font-medium ${
                      tier.isDark ? "text-white/70" : theme.text.muted
                    }`}
                  >
                    {tier.desc}
                  </p>
                </div>

                {/* Features List (grow pushes the button to the bottom) */}
                <ul className="space-y-4 mb-10 grow">
                  {tier.features.map((feat, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIdx * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 shrink-0 stroke-[2px] ${
                          tier.isDark ? "text-tertiary" : "text-secondary"
                        }`}
                      />
                      <span className={`text-[13px] leading-snug ${
                          tier.isDark ? "text-white/90" : theme.text.main
                        }`}
                      >
                        {feat}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button using theme variables */}
                <button
                  className={`w-full py-4 text-[11px] font-bold uppercase tracking-widest rounded-brand transition-all active:scale-[0.97] ${
                    tier.isDark
                      ? "bg-tertiary text-white hover:brightness-110 shadow-lg shadow-tertiary/20"
                      : `${theme.buttons.primary}`
                  }`}
                >
                  Select Tier
                </button>
              </div>
            </FadeItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}