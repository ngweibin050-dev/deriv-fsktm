import React from 'react';
import {
  Banknote,
  CheckCircle2,
  Coffee,
  Sparkles,
  Utensils,
} from 'lucide-react';
import {
  FNB_DETAILS,
  SPONSORSHIP_BUDGET,
  WHY_CHOOSE_DERIV,
} from '../data/partnershipData';

export const SponsorshipBudget: React.FC = () => {
  return (
    <section
      id="sponsorship-budget"
      className="py-12 sm:py-16 border-b border-slate-800 bg-[#0A0E1A] text-white print-compact"
      aria-labelledby="sponsorship-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444F]/15 border border-[#FF444F]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6B74]">
              <Banknote className="h-3.5 w-3.5" />
              100% DERIV SPONSORED · RM 0 TO PEKOM
            </span>
            <h2
              id="sponsorship-heading"
              className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl print:text-xl print:text-[#0E0E0E]"
            >
              RM 5,000 Sponsorship &amp; Budget Breakdown
            </h2>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
            Zero Club Out-of-Pocket Cost
          </div>
        </div>

        <p className="mt-3 max-w-prose text-sm text-slate-300 sm:text-base print:text-xs print:text-[#475569]">
          Student societies should not worry about budget deficits or chasing reimbursements. Deriv
          funds the entire RM 5,000 event package up-front—including cash awards for students,
          certified Halal catering, hot beverage stations, and developer swag.
        </p>

        {/* 4-Item Budget Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 print:gap-2">
          {SPONSORSHIP_BUDGET.map((item) => (
            <div
              key={item.category}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/90 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {item.category}
                </span>
                <p className="mt-1 font-heading text-2xl font-extrabold text-white">
                  {item.amount}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF6B74]">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span>{item.coveredBy}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FnB & Catering Deep-Dive Banner */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF444F]/15 border border-[#FF444F]/30 text-[#FF6B74]">
                <Utensils className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Halal Food &amp; Beverage Schedule (FnB)
                </h3>
                <p className="text-xs text-slate-400">
                  {FNB_DETAILS.catererStatus} · {FNB_DETAILS.headcount}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
              Deriv On-Campus Catering
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {FNB_DETAILS.schedule.map((slot) => (
              <div
                key={slot.timing}
                className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF6B74]">
                  <Coffee className="h-3.5 w-3.5" />
                  <span>{slot.timing}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  {slot.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Deriv Grid */}
        <div className="mt-12">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#FF444F]" />
            <h3 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
              Why FSKTM &amp; PEKOM Choose Deriv
            </h3>
          </div>
          <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
            Not just another corporate sponsor—we are your local tech neighbor in Cyberjaya.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_DERIV.map((point) => (
              <div
                key={point.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800/90 bg-slate-900/70 p-5 transition-all hover:border-[#FF444F]/50 hover:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-[#FF444F]/15 border border-[#FF444F]/25 px-2 py-0.5 text-[10px] font-bold text-[#FF6B74]">
                      {point.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {point.stat}
                    </span>
                  </div>
                  <h4 className="mt-3 font-heading text-sm font-bold text-white">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
