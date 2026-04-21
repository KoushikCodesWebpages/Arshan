"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { ChartColumn } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import home3 from '../../../public/home3.svg';

export default function CTASection() {
  return (
    /* Removed large vertical padding on section to let the card sit more naturally */
    <section className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeInStagger>
          <FadeItem>
            {/* FIX: 'items-stretch' on the flex container ensures the image div 
              is ALWAYS the same height as the text div.
            */}
            <div className="relative rounded-3xl bg-[#0F2648] shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/images/pattern-hex.png')] bg-repeat" />

              {/* LEFT CONTENT: 50% width */}
              <div className="w-full md:w-1/2 p-10 md:p-20 z-10 flex flex-col justify-center text-left">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                    Request a Technical <br className="hidden lg:block" /> 
                    Business Infrastructure <br className="hidden lg:block" /> 
                    Audit
                  </h2>
                  
                  <p className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
                    Our technical audit provides a 360-degree review of your current 
                    business infrastructure, identifying critical vulnerabilities in 
                    finance, marketing, and HR.
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/contact-us"
                      className={`${theme.buttons.tertiary} h-16 inline-flex items-center justify-center gap-4 px-10 text-lg font-semibold group active:scale-95 transition-all w-full md:w-auto shadow-lg`}
                    >
                      Start Your Free Audit
                      <ChartColumn className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE: 50% width
                  FIX: Removed 'min-h-[400px]' and replaced with 'self-stretch' 
                  to ensure it goes all the way to the bottom of the parent card.
              */}
              <div className="w-full md:w-1/2 relative self-stretch min-h-[350px] md:min-h-0 overflow-hidden">
                <Image
                  src={home3}
                  alt="Professional Office Setup"
                  fill
                  /* object-cover + object-bottom ensures the image sits "full down" */
                  className="object-cover object-center md:object-bottom transition-transform duration-1000 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)]" />
              </div>

            </div>
          </FadeItem>
        </FadeInStagger>
      </div>
    </section>
  );
}