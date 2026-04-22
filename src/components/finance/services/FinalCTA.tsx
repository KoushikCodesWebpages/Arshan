"use client";
import Link from "next/link";
import { theme } from "@/lib/theme";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className=" w-full mx-auto px-6  text-center ">
        <FadeInStagger>
          <div className="space-y-8 w-full">
            
            {/* Main Heading */}
            <FadeItem>
              <h2 className={`w-full text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight ${theme.text.brand}`}>
                Ready to secure your 
                fiscal foundation?
              </h2>
            </FadeItem>

            {/* Supporting Subtext */}
            <FadeItem>
              <p className={`font-medium text-md w-full md:text-md leading-relaxed text-secondary mx-auto`}>
                Join the organizations that trust Arshan for architectural-grade 
                financial record management.
              </p>
            </FadeItem>

            {/* Final Conversion Button */}
            <FadeItem>
              <div className="pt-6">
                <Link
                  href="/contact-us"
                  className={`${theme.buttons.primary} inline-flex px-10 py-3 text-lg rounded-sm transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-primary/20`}
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