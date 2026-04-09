"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme"; // Path to your theme file
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import hr1 from '../../../public/hr1.svg'

export default function HRHero() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-28 text-start grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <FadeInStagger>
          <div className="flex flex-col space-y-6">
            <FadeItem>
              <span className={`uppercase tracking-[0.2em] text-xs font-bold ${theme.brand.accent}`}>
                Global HR Strategy
              </span>
            </FadeItem>

            <FadeItem>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-primary tracking-tight">
                Human Capital <br />
                <span className="text-primary/90">Architecture.</span>
              </h1>
            </FadeItem>

            <FadeItem>
              <p className="text-lg lg:text-xl text-secondary max-w-md leading-relaxed">
                We engineer global workforces with structural precision. From 
                India-based talent acquisition to complex payroll integration.
              </p>
            </FadeItem>

            <FadeItem>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className={`text-sm ${theme.buttons.primary} w-50 py-4 shadow-xl hover:shadow-primary/20 rounded-sm transition-all`}>
                  Explore HR Solutions
                </button>
              </div>
            </FadeItem>
          </div>
        </FadeInStagger>

        {/* Right Image Composition */}
        <FadeItem>
          <div className="relative group max-w-[500px] ml-auto">
            {/* 1. The Blue Offset Background - Adjusted for better alignment */}
            <div className="absolute top-12 -right-6 w-full h-full bg-primary/10 rounded-sm -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-[-8px]" />
            
            {/* 2. The Main Image Container */}
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-white/20 bg-muted">
              <Image
                src={hr1} 
                alt="HR Professional"
                width={500}
                height={600}
                // Using "w-full" here because the parent container now controls the size
                className="object-cover w-full h-auto transform transition-transform duration-[2s] ease-out group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              
              {/* 3. Refined Overlay - Subtle glass effect + Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
              
              {/* 4. Interactive Border (Optional "Premium" touch) */}
              <div className="absolute inset-0 border-2 border-white/0 transition-colors duration-700 group-hover:border-white/10 pointer-events-none" />
            </div>
          </div>
        </FadeItem>
      </div>
    </section>
  );
}