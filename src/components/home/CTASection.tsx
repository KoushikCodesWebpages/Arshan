"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ChartColumn } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import home3 from '../../../public/home3.svg';

export default function CTASection() {
  return (
    /* py-12 (Mobile) -> md:py-20 (PC) */
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28">
        <FadeInStagger>
          <FadeItem>
            <div className="relative overflow-hidden rounded-2xl bg-primary shadow-2xl flex flex-col md:flex-row items-stretch">
              
              {/* Subtle Hexagon Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern-hex.png')] bg-repeat" />

              {/* Left Content Side: 
                  - p-8 (Mobile) -> md:p-24 (PC)
                  - text-center (Mobile) -> md:text-left (PC)
              */}
              <div className="flex-1 p-8 md:p-24 z-10 flex flex-col justify-center text-center md:text-left">
                <FadeInStagger className="space-y-6">
                  <FadeItem>
                    {/* The <br /> tags are hidden on mobile to prevent awkward spacing */}
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                      Request a Technical <span className="hidden md:block" /> 
                      Business Infrastructure <span className="hidden md:block" /> 
                      Audit
                    </h2>
                  </FadeItem>
                  
                  <FadeItem>
                    <p className="text-slate-300 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                      Our technical audit provides a 360-degree review of your current 
                      business infrastructure, identifying critical vulnerabilities in 
                      finance, marketing, and HR. Gain actionable insights to improve 
                      compliance and operational efficiency.
                    </p>
                  </FadeItem>

                  <FadeItem>
                    <Link
                      href="/contact-us"
                      /* w-full (Mobile) -> md:w-auto (PC) */
                      className={`${theme.buttons.tertiary} inline-flex items-center justify-center gap-3 px-8 py-4 text-base group active:scale-95 transition-all w-full sm:w-auto`}
                    >
                      Start Your Free Audit
                      <ChartColumn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </FadeItem>
                </FadeInStagger>
              </div>

              {/* Right Image Side: 
                  - h-64 (Mobile) -> md:min-h-100 (PC) 
              */}
              <FadeItem className="flex-1 h-64 md:min-h-100 relative group overflow-hidden">
                <Image
                  src={home3}
                  alt="Professional Office Setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay for mobile to ensure text readability if it stacks */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent md:hidden" />
                
                {/* Subtle Lens Overlay for consistency with other intro sections */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] mix-blend-multiply" />
              </FadeItem>

            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}