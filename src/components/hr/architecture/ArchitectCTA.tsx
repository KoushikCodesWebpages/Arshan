"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function ArchitectCTA() {
  return (
    <section className={`relative py-24 overflow-hidden ${theme.brand.primary}`}>
      
      {/* Animated Light Sweep */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.4)_50%,transparent_60%)] pointer-events-none" 
      />

      <div className="w-full mx-auto px-28 relative z-10 text-center">
        
        <FadeInStagger className="space-y-8">
          
          {/* TEXT */}
          <FadeItem className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Architect Your Global Workforce Today
            </h2>

            <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our human capital strategists to architect 
              your global workforce.
            </p>
          </FadeItem>

          {/* ✅ NORMAL BUTTON (NO MOTION) */}
          <FadeItem className="pt-4">
            <button
              className="
                px-10 py-4
                rounded-md 
                border border-white/20
                text-xs font-bold tracking-widest uppercase 
                text-white
                bg-transparent

                
                
                transition-all duration-300
                hover:bg-white hover:text-primary hover:border-white
              "
            >
              Contact Us
            </button>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}