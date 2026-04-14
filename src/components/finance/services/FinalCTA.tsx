"use client";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className=" w-full mx-auto px-6  text-center ">
        <FadeInStagger>
          <div className="space-y-8">
            
            {/* Main Heading */}
            <FadeItem>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${theme.text.brand}`}>
                Ready to secure your <br className="hidden md:block" /> 
                fiscal foundation?
              </h2>
            </FadeItem>

            {/* Supporting Subtext */}
            <FadeItem>
              <p className={`text-lg md:text-xl leading-relaxed ${theme.text.muted} max-w-2xl mx-auto`}>
                Join the organizations that trust Arshan for architectural-grade 
                financial record management.
              </p>
            </FadeItem>

            {/* Final Conversion Button */}
            <FadeItem>
              <div className="pt-6">
                <Link
                  href="/contact-us"
                  className={`${theme.buttons.primary} inline-flex px-10 py-4 text-lg rounded-sm transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-primary/20`}
                >
                  Schedule a Consultation
                </Link>
              </div>
            </FadeItem>
            
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}