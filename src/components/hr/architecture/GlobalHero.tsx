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
    // If we're already on the HR page, we scroll. 
    // If not, we navigate to the page with the hash.
    if (onPricingClick) {
      onPricingClick();
    } else {
      router.push("/hr/#hr-pricing");
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-24 bg-white overflow-hidden">
      <div className="w-full mx-auto px-28"> 
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch min-h-[500px] lg:min-h-[600px]">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            <FadeInStagger className="space-y-6">
              <FadeItem >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary">
                  Sovereign Human Capital
                </span>
              </FadeItem>

              <FadeItem >
                <h1 className="flex flex-col text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                  <span className={theme.text.brand}>Global Human</span>
                  <span className="text-slate-400">Capital</span>
                  <span className="text-slate-400">Architecture.</span>
                </h1>
              </FadeItem>

              <FadeItem >
                <p className={`text-base md:text-lg leading-relaxed max-w-xl ${theme.text.muted}`}>
                  Engineering cross-border talent ecosystems. From the innovation hubs 
                  of the Subcontinent to the precision-driven industries of the Rhine, 
                  we orchestrate your global workforce with absolute cultural and 
                  operational synchronicity.
                </p>
              </FadeItem>

              <FadeItem  className="pt-4">
                <button
                  onClick={handleNavigation}
                  className={`${theme.buttons.base} ${theme.buttons.primary} px-10 py-5 text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all`}
                >
                  View HR Pricing
                </button>
              </FadeItem>
            </FadeInStagger>
          </div>

          {/* RIGHT IMAGE WITH ANIMATION */}
          <div className="lg:col-span-6 relative h-full group">
            
            <FadeItem  className="h-full">
              {/* Image Reveal Animation */}
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                {/* Active Hover Zoom */}
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

                {/* Arshan Brand Tint Overlay */}
                <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply pointer-events-none" />
              </motion.div>
            </FadeItem>

            {/* Overlapping Quote Card */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-8 -left-6 md:-left-12 max-w-[280px] md:max-w-[320px] bg-white rounded-brand p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-l-4 border-tertiary z-20"
            >
              <p className={`text-sm md:text-base font-bold italic leading-relaxed ${theme.text.brand}`}>
                "We unify the depth of local expertise with the height of global standards."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-4 h-px bg-slate-300" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
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