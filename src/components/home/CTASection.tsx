import Image from "next/image";
import { theme } from "@/lib/theme";
import { BarChartHorizontal } from "lucide-react";
import home3 from '../../../public/home3.svg'
export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full mx-auto px-28">
        <div className="relative overflow-hidden rounded-2xl bg-primary shadow-2xl flex flex-col md:flex-row items-stretch">
          
          {/* Subtle Hexagon Pattern Overlay (Optional enhancement) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern-hex.png')] bg-repeat" />

          {/* Left Content Side */}
          <div className="flex-1 p-10 md:p-16 z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Request a Technical <br /> 
              Business Infrastructure <br /> 
              Audit
            </h2>
            
            <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
              Our technical audit provides a 360-degree review of your current 
              business infrastructure, identifying critical vulnerabilities in 
              finance, marketing, and HR. Gain actionable insights to improve 
              compliance and operational efficiency.
            </p>

            <div>
              <button className={`${theme.buttons.tertiary} flex items-center gap-3 px-8 py-4 text-base group`}>
                Start Your Free Audit
                <BarChartHorizontal className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="flex-1 min-h-100 relative">
            <Image
              src={home3} // Add your desk/office image here
              alt="Professional Office Setup"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay for mobile to ensure text readability if it stacks */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent md:hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}