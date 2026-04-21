"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import aboutImg from "../../../public/aboutus1.svg"; // Replace with your actual path

export default function AboutIntegrity() {
  return (
    <section className="relative py-42 overflow-hidden bg-primary text-white">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(164,134,38,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left Side: Content */}
          <FadeInStagger className="flex-1 space-y-8 z-10">
            <div className="space-y-6">
              <FadeItem>
                <div className="flex items-center gap-4">
                 
                  <span className={`uppercase tracking-[0.2em] text-[10px] md:text-[12px] font-bold ${theme.brand.accent} border-l-2 border-tertiary pl-3`}>
                    Established 2024
                  </span>
                </div>
              </FadeItem>
              
              <FadeItem>
                <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Architects of <br />
                  Business <br />
                  Integrity.
                </h2>
              </FadeItem>
              
              <FadeItem>
                <p className={`text-base md:text-lg leading-relaxed text-slate-300 w-full md:w-[90%] mb-8 md:mb-10`}>
                  We combine traditional fiscal discipline with modern 
                  technological agility to build sustainable corporate legacies 
                  across the DACH region and beyond.
                </p>
              </FadeItem>
            </div>

          </FadeInStagger>

          {/* Right Side: Cinematic Image Composition */}
          <FadeInStagger className="flex-1 relative group">
            <FadeItem>
              <div className="relative w-full max-w-xl aspect-4/3 mx-auto">
                
                {/* The "Arshan" Offset Shadow - Gold Glow on Dark */}
                {/* <div className="absolute inset-0 bg-tertiary/10 rounded-sm translate-x-4 translate-y-4 transition-transform duration-1000 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:translate-x-2 group-hover:translate-y-2" /> */}

                {/* Main Image Container */}
                <div className="rotate-2 relative h-full w-full rounded-sm overflow-hidden transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) ">
                <Image
                    src={aboutImg}
                    alt="Corporate Architecture"
                    fill
                    className="
                    object-cover 
                    /* THE UPDATE: Tilting the source image counter-clockwise by -3 degrees */
                    /* Increased scale to 1.25 to provide enough 'bleed' for the corners at this rotation */
                    -rotate-2 scale-[1.25] 
                    transition-transform duration-[3s] ease-out 
                    /* On hover, the image 'settles' and zooms slightly for a parallax feel */
                    group-hover:scale-[1.4] group-hover:-rotate-2
                    "
                    priority
                />

                {/* Cinematic Overlays stay straight within the container */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" /> */}
                
                {/* Arshan Gold Light Leak */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(164,134,38,0.15)_0%,transparent_50%)] mix-blend-screen pointer-events-none" /> */}

                {/* Internal Glow Polish */}
                {/* <div className="absolute inset-0 border border-white/5 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" /> */}
                </div>

              </div>
            </FadeItem>
          </FadeInStagger>

        </div>
      </div>
    </section>
  );
}