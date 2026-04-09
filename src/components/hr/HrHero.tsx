"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme"; // Path to your theme file
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function HRHero() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-28 text-center grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
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
                <button className={theme.buttons.primary}>
                  Explore HR Solutions
                </button>
                <button className={`${theme.buttons.secondary} border border-secondary/20`}>
                  Our Strategy
                </button>
              </div>
            </FadeItem>
          </div>
        </FadeInStagger>

        {/* Right Image Composition */}
        <FadeItem>
          <div className="relative group">
            {/* The Blue Offset Background Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-sm -z-10 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-white/20">
              <Image
                src="/path-to-your-hr-image.jpg" // Replace with your actual image path
                alt="HR Professional"
                width={600}
                height={700}
                className="object-cover w-full h-auto transform transition-transform duration-[2s] group-hover:scale-105"
                priority
              />
              
              {/* Subtle Overlay Gradient for that "Premium" feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </FadeItem>
      </div>
    </section>
  );
}