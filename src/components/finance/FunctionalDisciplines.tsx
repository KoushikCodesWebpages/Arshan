"use client";

import React from "react";
import Image from "next/image";
import { theme } from "@/lib/theme";
import { Wallet, FolderCog, FileText, CheckCircle } from "lucide-react";
import { FadeInStagger, FadeItem } from "@/components/animations/FadeIn";
import finance2 from '../../../public/finance2.svg';

export default function FunctionalDisciplines() {
  return (
    <section className="py-24 bg-neutral/50">
      <div className="container mx-auto px-6 lg:px-28 space-y-16">

        {/* HEADER */}
        <FadeInStagger>
          <div className="w-full max-w-3xl">
            <FadeItem>
              <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${theme.text.brand}`}>
                Functional Disciplines
              </h2>
            </FadeItem>

            <FadeItem>
              <p className={`mt-6 text-lg lg:text-xl ${theme.text.muted} leading-relaxed`}>
                We bridge the gap between raw transactions and strategic oversight,
                ensuring your operational data is boardroom-ready.
              </p>
            </FadeItem>
          </div>
        </FadeInStagger>

        {/* TOP GRID */}
        <FadeInStagger className="grid lg:grid-cols-3 gap-8">
          {/* Precision Bookkeeping */}
          <FadeItem className="lg:col-span-2">
            <div className="bg-white rounded-sm border border-border-light p-10 h-full space-y-6 shadow-sm group">
              <Wallet className="text-tertiary w-8 h-8 transition-transform group-hover:scale-110" />

              <h3 className={`text-2xl lg:text-3xl font-bold ${theme.text.main}`}>
                Precision Bookkeeping
              </h3>

              <p className={`${theme.text.muted} text-lg max-w-xl leading-relaxed`}>
                Systematic tracking of all operational expenditures and revenue
                streams. We maintain the daily pulse of your organization's
                liquidity with absolute structural integrity.
              </p>

              {/* Stats Row */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-background rounded-lg p-6 border border-border-light/50">
                  <div className={`text-2xl font-bold ${theme.text.brand}`}>99.9%</div>
                  <p className="text-xs mt-1 text-secondary uppercase font-bold tracking-widest">
                    Accuracy Rate
                  </p>
                </div>

                <div className="bg-background rounded-lg p-6 border border-border-light/50">
                  <div className={`text-2xl font-bold ${theme.text.brand}`}>Real-time</div>
                  <p className="text-xs mt-1 text-secondary uppercase font-bold tracking-widest">
                    Data Syncing
                  </p>
                </div>
              </div>
            </div>
          </FadeItem>

          {/* Record Management (Dark Card) */}
          <FadeItem>
            <div className="bg-primary text-white rounded-sm p-10 h-full space-y-6 shadow-lg relative overflow-hidden group">
              <FolderCog className="w-8 h-8 opacity-90 transition-opacity group-hover:opacity-100" />

              <h3 className="text-2xl lg:text-3xl font-bold">Record Management</h3>

              <p className="text-blue-100/80 leading-relaxed">
                Secure, digitized documentation of all financial activities,
                providing an immutable audit trail for internal compliance and growth.
              </p>

              {/* Background Decoration */}
              <div className="absolute -bottom-5 -right-2.5 opacity-10 text-[140px] font-bold select-none group-hover:-translate-y-2.5 transition-transform duration-700">
                ✓
              </div>
            </div>
          </FadeItem>
        </FadeInStagger>

        {/* BOTTOM GRID: Statement Preparation */}
        <FadeInStagger className="bg-white rounded-sm p-10 lg:p-16 border border-border-light shadow-sm grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <FadeItem className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-neutral flex items-center justify-center border border-border-light">
                <FileText className="text-tertiary w-7 h-7" />
              </div>
              
              <h3 className={`text-3xl lg:text-4xl font-bold ${theme.text.main} tracking-tight`}>
                Statement Preparation
              </h3>
              
              <p className={`${theme.text.muted} text-lg leading-relaxed max-w-lg`}>
                We synthesize complex ledger data into clear, high-impact account
                statements that provide stakeholders with a comprehensive view
                of fiscal health.
              </p>
            </div>

            <ul className="space-y-5">
              {[
                "Quarterly Performance Reviews",
                "Expenditure Categorization",
                "Liquidity Forecasting"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className={`text-lg font-medium ${theme.text.main}`}>{item}</span>
                </li>
              ))}
            </ul>
          </FadeItem>

          {/* Image Block */}
          <FadeItem className="relative order-1 lg:order-2">
            <div className="bg-white p-4 rounded-2xl shadow-2xl border border-border-light relative z-10 group overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-4/3">
                <Image
                  src={finance2}
                  alt="Financial analytics chart"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tertiary/10 blur-[80px] rounded-full -z-10" />
          </FadeItem>

        </FadeInStagger>

      </div>
    </section>
  );
}