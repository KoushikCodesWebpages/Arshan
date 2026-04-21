"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import hrachitecture1 from "../../../../public/hrarchitecture1.svg";

interface GlobalArchitectureHeroProps {
  onPricingClick?: () => void;
}

export default function GlobalHero({ onPricingClick }: GlobalArchitectureHeroProps) {
  const router = useRouter();

  const handleNavigation = () => {
    if (onPricingClick) {
      onPricingClick();
    } else {
      router.push("/hr/#hr-pricing");
    }
  };

  return (
    /* py-16 (Mobile) -> lg:py-24 (PC) */
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28"> 
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center order-2 lg:order-1">
            <FadeInStagger className="space-y-6">
              <FadeItem >
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Sovereign Human Capital
                </span>
              </FadeItem>

              <FadeItem >
                {/* Scaled from text-4xl on mobile to text-6xl+ on desktop */}
                <h1 className="flex flex-col text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                  <span className={theme.text.brand}>Global Human</span>
                  <span className="text-slate-400">Capital</span>
                  <span className="text-slate-400">Architecture.</span>
                </h1>
              </FadeItem>

              <FadeItem >
                <p className={`text-sm md:text-lg leading-relaxed max-w-xl ${theme.text.muted}`}>
                  Engineering cross-border talent ecosystems. From the innovation hubs 
                  of the Subcontinent to the precision-driven industries of the Rhine, 
                  we orchestrate your global workforce with absolute cultural and 
                  operational synchronicity.
                </p>
              </FadeItem>

              <FadeItem className="pt-4">
                <button
                  onClick={handleNavigation}
                  className={`${theme.buttons.base} ${theme.buttons.primary} w-full sm:w-auto px-10 py-5 text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all`}
                >
                  View HR Pricing
                </button>
              </FadeItem>
            </FadeInStagger>
          </div>

          {/* RIGHT IMAGE WITH ANIMATION */}
          <div className="lg:col-span-6 relative h-full group order-1 lg:order-2">
            
            <FadeItem className="h-full">
              {/* min-h-[350px] on mobile to maintain vertical impact */}
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full min-h-87.5 md:min-h-125 lg:min-h-150 rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={hrachitecture1}
                    alt="Global Architecture"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply pointer-events-none" />
              </motion.div>
            </FadeItem>

            {/* Overlapping Quote Card - Responsive Positioning */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              /* Adjusted positioning: -bottom-4 (Mobile) vs -bottom-8 (PC) */
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-left-12 max-w-60 md:max-w-[320px] bg-white rounded-brand p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-l-4 border-tertiary z-20"
            >
              <p className={`text-xs md:text-base font-bold italic leading-relaxed ${theme.text.brand}`}>
                "We unify the depth of local expertise with the height of global standards."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-4 h-px bg-slate-300" />
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-slate-400">
                  ARSHAN
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}