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
        <FadeInStagger className="flex-1 relative group">
          <FadeItem>
            <div className="relative max-w-125 ml-auto">
              
              {/* 1. The Blue Offset Background - Moves with a delayed spring-like curve */}
              <div className="absolute top-12 -right-6 w-full h-full bg-primary/10 rounded-sm -z-10 transition-transform duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:translate-x-2 group-hover:-translate-y-2" />
              
              {/* 2. The Main Image Container */}
              <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-white/20 bg-muted transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:-translate-y-2">
                <Image
                  src={hr1} 
                  alt="HR Professional"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto transform transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                
                {/* 3. Refined Overlay - Subtle glass effect + Gradient */}
                {/* We use mix-blend-overlay for a more 'integrated' high-end photo look */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-transparent to-transparent opacity-60 pointer-events-none transition-opacity duration-700 group-hover:opacity-30" />
                
                {/* 4. Interactive Border / Inner Glow */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] border border-white/10 rounded-sm" />
              </div>

            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}