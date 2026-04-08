import Image from "next/image";
import { theme } from "@/lib/theme";
import { TrendingUp } from "lucide-react";

export default function ProtocolStability() {
  return (
    <section className="py-28 bg-primary text-white">
      <div className="w-full mx-auto px-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                A Protocol for Stability.
              </h2>

              <p className="text-secondary max-w-lg">
                Our methodology ensures that your financial operations are
                never a bottleneck for growth.
              </p>
            </div>

            {/* STEP LIST */}
            <div className="space-y-10">

              {/* STEP 1 */}
              <div className="flex gap-6">
                <span className="text-tertiary font-bold text-2xl">01</span>

                <div>
                  <h4 className="font-semibold text-lg">
                    Discovery & Onboarding
                  </h4>

                  <p className="text-secondary text-sm mt-1 max-w-md">
                    Mapping your existing ledger structure and identifying
                    data capture points across your organization.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-6">
                <span className="text-tertiary font-bold text-2xl">02</span>

                <div>
                  <h4 className="font-semibold text-lg">
                    Systems Integration
                  </h4>

                  <p className="text-secondary text-sm mt-1 max-w-md">
                    Automating transaction flows while maintaining manual
                    oversight for complex journal entries.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-6">
                <span className="text-tertiary font-bold text-2xl">03</span>

                <div>
                  <h4 className="font-semibold text-lg">
                    Continuous Management
                  </h4>

                  <p className="text-secondary text-sm mt-1 max-w-md">
                    Weekly reconciliation cycles to ensure your data is
                    always current and compliant with internal standards.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT VISUAL GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* Chart Laptop */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Analytics dashboard"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Data Integrity Card */}
            <div className="bg-white text-primary rounded-xl p-8 flex flex-col justify-between shadow-lg">
              <TrendingUp className="w-6 h-6 mb-6" />

              <h4 className="font-semibold text-lg">
                Data Integrity
              </h4>
            </div>

            {/* Operational Clarity */}
            <div className="bg-tertiary text-primary rounded-xl p-8 flex items-end font-semibold text-lg shadow-lg">
              Operational Clarity
            </div>

            {/* Meeting Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="Business meeting"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}