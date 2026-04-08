import Image from "next/image";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";

export default function FinanceIntro() {
  return (
    <section className="py-30 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <span className={`uppercase tracking-widest text-xs font-bold ${theme.text.brand} opacity-80`}>
              Strategic Management
            </span>
            
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${theme.text.brand}`}>
              Structural Precision <br />
              for Financial <br />
              Excellence.
            </h2>
            
            <p className={`text-lg leading-relaxed max-w-xl ${theme.text.muted}`}>
              Arshan provides high-fidelity financial record management and
              administrative bookkeeping designed for clarity, scale, and
              uncompromising accuracy.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <button className={theme.buttons.primary}>
                View Solutions
              </button>
              
              <button className={`flex items-center gap-2 font-bold text-sm ${theme.text.main} group`}>
                Our Process 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stacked Image Effect */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-[500px] aspect-square mx-auto">
              
              {/* Back Layer (Navy Accent) */}
              <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 translate-x-4 translate-y-2 opacity-90" />
              
                {/* Middle Layer (Darker Overlay) */}
                {/* <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-2 translate-x-1" /> */}

                {/* Top Layer (The Graph Image) */}
                <div className="absolute inset-0 -rotate-5 translate-x-4 translate-y-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" // Place your graph image in public/images/
                    alt="Financial Growth Chart"
                    fill
                    className="object-cover"
                    />

                    {/* --- ADDED EFFECTS START --- */}
                    
                    {/* 1. THE HOLE: Central clarity with deep black outer blur */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.5)_60%,_rgba(0,0,0,0.9)_100%)] mix-blend-multiply" />

                    {/* 2. VIGNETTE: Heavy blurred black edges */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" />
                    
                    {/* --- ADDED EFFECTS END --- */}

                    {/* Subtle dark gradient to match the design's mood */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
                    </div>

                </div>
            </div>
          </div>    
      </div>
    </section>
  );
}