"use client";

import Image from "next/image";
import { theme } from "@/lib/theme";
import { TrendingUp } from "lucide-react";
import finance3 from '../../../../public/finance3.svg'
import finance4 from '../../../../public/finance4.svg'

export default function ProtocolStability() {
  return (
    /* py-16 (Mobile) -> md:py-12 (PC) - Increased mobile padding for breathing room */
    <section className="py-16 md:py-12 bg-primary text-white">
      {/* px-6 (Mobile) -> md:px-28 (PC) */}
      <div className="w-full mx-auto px-6 md:px-28 md:py-10 ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT CONTENT: text-center (Mobile) -> lg:text-left (PC) */}
          <div className="space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A Protocol for Stability.
              </h2>

              <p className="text-base md:text-lg opacity-60 w-full lg:w-[80%] max-w-md mx-auto lg:mx-0">
                Our methodology ensures that your financial operations are
                never a bottleneck for growth.
              </p>
            </div>

            {/* STEP LIST: text-left for readability */}
            <div className="space-y-10 w-full text-left">

              {/* STEP 1 */}
              <div className="flex gap-5 md:gap-6">
                <span className="text-tertiary font-bold text-xl md:text-2xl shrink-0">01</span>

                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Discovery & Onboarding
                  </h4>

                  <p className="opacity-60 text-md md:text-md mt-1 max-w-md">
                    Mapping your existing ledger structure and identifying
                    data capture points across your organization.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-5 md:gap-6">
                <span className="text-tertiary font-bold text-xl md:text-2xl shrink-0">02</span>

                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Systems Integration
                  </h4>

                  <p className="opacity-60 text-md md:text-md mt-1 max-w-md">
                    Automating transaction flows while maintaining manual
                    oversight for complex journal entries.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-5 md:gap-6">
                <span className="text-tertiary font-bold text-xl md:text-2xl shrink-0">03</span>

                <div>
                  <h4 className="font-semibold text-base md:text-lg">
                    Continuous Management
                  </h4>

                  <p className="opacity-60 text-md md:text-md mt-1 max-w-md">
                    Weekly reconciliation cycles to ensure your data is
                    always current and compliant with internal standards.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT VISUAL GRID: Balanced 2x2 grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg mx-auto">

            {/* Chart Laptop */}
            <div className="rounded-xl overflow-hidden shadow-xl aspect-square relative">
              <Image
                src={finance3}
                alt="Analytics dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>

            {/* Data Integrity Card */}
            <div className="bg-white text-primary rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-lg aspect-square">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mb-6" />

              <h4 className="font-semibold text-sm md:text-lg leading-tight">
                Data Integrity
              </h4>
            </div>

            {/* Operational Clarity */}
            <div className="bg-tertiary text-primary rounded-xl p-6 md:p-8 flex items-end font-semibold text-sm md:text-lg shadow-lg aspect-square">
              Operational Clarity
            </div>

            {/* Meeting Image */}
            <div className="rounded-xl overflow-hidden shadow-xl aspect-square relative">
              <Image
                src={finance4}
                alt="Business meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}