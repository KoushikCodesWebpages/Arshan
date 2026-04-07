import Hero from "@/components/home/Hero";
import { theme } from "@/lib/theme";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Block 1: The Hero (White Background Block) */}
      <Hero />

      {/* Block 2: The Core Pillars (Grey Background Block) */}
      <section className="w-full bg-gray-100 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Finance", 
                desc: "Precision-engineered financial management and auditing for growth.",
                icon: "01" 
              },
              { 
                title: "Marketing", 
                desc: "Data-driven strategies designed to scale digital authority.",
                icon: "02" 
              },
              { 
                title: "HR Systems", 
                desc: "Scalable human resource infrastructure for modern SMBs.",
                icon: "03" 
              }
            ].map((item, i) => (
              <div key={i} className={`${theme.ui.card} p-8 hover:shadow-xl transition-all`}>
                <span className="text-[10px] font-bold text-tertiary tracking-widest mb-6 block uppercase">
                  Service_Line_{item.icon}
                </span>
                <h3 className={`${theme.text.brand} text-xl mb-3 tracking-tight`}>
                  {item.title}
                </h3>
                <p className={`${theme.text.muted} text-sm leading-relaxed`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}