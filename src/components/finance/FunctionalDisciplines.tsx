import Image from "next/image";
import { theme } from "@/lib/theme";
import { Wallet, FolderCog, FileText, CheckCircle } from "lucide-react";
import finance2 from '../../../public/finance2.svg'

export default function FunctionalDisciplines() {
  return (
    <section className="py-24 bg-neutral">
      <div className="w-full mx-auto px-28 space-y-16">

        {/* HEADER */}
        <div className="w-full">
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.text.brand}`}>
            Functional Disciplines
          </h2>

          <p className={`mt-4 text-lg ${theme.text.muted}`}>
            We bridge the gap between raw transactions and strategic oversight,
            ensuring your operational data is boardroom-ready.
          </p>
        </div>

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Precision Bookkeeping */}
          <div className="lg:col-span-2 bg-white rounded-sm border border-border-light p-10 space-y-6 shadow-sm">

            <Wallet className="text-tertiary w-7 h-7" />

            <h3 className={`text-2xl font-semibold ${theme.text.main}`}>
              Precision Bookkeeping
            </h3>

            <p className={`${theme.text.muted} max-w-xl`}>
              Systematic tracking of all operational expenditures and revenue
              streams. We maintain the daily pulse of your organization's
              liquidity with absolute structural integrity.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">

              <div className="bg-neutral rounded-lg p-6">
                <div className={`text-xl font-bold ${theme.text.brand}`}>
                  99.9%
                </div>
                <p className="text-xs mt-1 text-text-muted uppercase">
                  Accuracy Rate
                </p>
              </div>

              <div className="bg-neutral rounded-lg p-6">
                <div className={`text-xl font-bold ${theme.text.brand}`}>
                  Real-time
                </div>
                <p className="text-xs mt-1 text-text-muted uppercase">
                  Data Syncing
                </p>
              </div>

            </div>
          </div>

          {/* Record Management */}
          <div className="bg-primary text-white rounded-sm p-10 space-y-6 shadow-lg relative overflow-hidden">

            <FolderCog className="w-7 h-7 opacity-90" />

            <h3 className="text-2xl font-semibold">
              Record Management
            </h3>

            <p className="text-sm opacity-80 leading-relaxed">
              Secure, digitized documentation of all financial activities,
              providing an immutable audit trail for internal compliance and
              growth.
            </p>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 opacity-10 text-[120px]">
              ✓
            </div>

          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="bg-slate-100 rounded-sm p-10 space-y-6 shadow-sm grid lg:grid-cols-2 w-full gap-16 items-center">

          {/* Statement Preparation Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              {/* Icon placed in a white card for contrast as per design */}
              <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-border-light">
                <FileText className="text-tertiary w-6 h-6" />
              </div>
              
              <h3 className={`text-3xl font-bold ${theme.text.main}`}>
                Statement Preparation
              </h3>
              
              <p className={`${theme.text.muted} text-lg leading-relaxed max-w-lg`}>
                We synthesize complex ledger data into clear, high-impact account
                statements that provide stakeholders with a comprehensive view
                of fiscal health.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {[
                "Quarterly Performance Reviews",
                "Expenditure Categorization",
                "Liquidity Forecasting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <CheckCircle className="w-5 h-5 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className={`text-base font-medium ${theme.text.main}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chart Image Block */}
          <div className="relative order-1 lg:order-2">
            {/* White outer frame shadow as seen in reference */}
            <div className="bg-white p-4 rounded-2xl shadow-2xl border border-border-light relative z-10">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src={finance2}
                  alt="Financial analytics chart"
                  fill
                  className="object-cover"
                />

                {/* Cinematic overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
                
                {/* Subtle vignetting to keep consistent with FinanceIntro */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(0,0,0,0.3)_100%)]" />
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary/10 blur-3xl rounded-full -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}