"use client";

import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function MissionStatement() {
  return (
    <section className="py-32 bg-neutral/30 border-y border-border-light">
      <div className="container mx-auto px-6 lg:px-28">
        <FadeInStagger className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          
          {/* Left Side: Anchor Heading */}
          <FadeItem className="flex-1">
            <div className="flex items-center gap-6 group">
              {/* Vertical Accent Bar */}
              <div className="h-16 w-1.5 bg-primary transition-transform duration-700 group-hover:scale-y-110 origin-center" />
              
              <h2 className={`text-4xl md:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
                Our Mission
              </h2>
            </div>
          </FadeItem>

          {/* Right Side: Mission Text */}
          <FadeItem className="flex-[1.5]">
            <p className={`text-xl md:text-xl leading-relaxed font-light ${theme.text.muted} max-w-3xl`}>
              To empower global enterprises through precision-engineered 
              financial strategies and human-centric HR management. We believe 
              that <span className={`${theme.text.brand} font-bold border-b-2 border-tertiary/30 pb-1`}>
                clarity is the ultimate luxury
              </span> in the modern business environment.
            </p>
          </FadeItem>

        </FadeInStagger>
      </div>
    </section>
  );
}