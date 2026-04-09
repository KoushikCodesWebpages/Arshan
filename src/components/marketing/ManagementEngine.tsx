import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";

export default function ManagementEngine() {
  const stats = [
    { label: "BRAND CONSISTENCY", value: "100%" },
    { label: "ACCOUNT MONITORING", value: "24/7" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full mx-auto px-28">
        <div className="flex flex-col lg:flex-row min-h-[500px] rounded-sm overflow-hidden shadow-2xl border border-slate-100">
          
          {/* Left: Text & Metrics */}
          <div className="flex-1 bg-primary p-12 lg:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Data-Driven <br />
                Management <br />
                Engine.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Our management approach uses real-time platform data to ensure 
                your content is always delivered at the optimal time for maximum engagement.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8 py-4 border-y border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase group transition-all hover:gap-5">
              Explore Our Workflow 
              <ArrowRight className="w-5 h-5 text-tertiary" />
            </button>
          </div>

          {/* Right: Cinematic Visualization */}
          <div className="flex-[1.2] relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" // Representing a high-end data engine/dashboard
              alt="Real-time analytics engine"
              fill
              className="object-cover"
              priority
            />
            
            {/* Arshan Lens Overlays */}
            {/* 1. Deep Shadow Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent hidden lg:block" />
            
            {/* 2. The "Hole" and Black Blurs */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.9)_100%)] mix-blend-multiply" />
            
            {/* 3. Cyan Depth Layer to match the visualization */}
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </div>

        </div>
      </div>
    </section>
  );
}