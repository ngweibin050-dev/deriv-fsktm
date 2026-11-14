import React, { useState, useMemo } from 'react';
import { Check, CheckCircle2, Gift, Sparkles, Users } from 'lucide-react';
import { CLUB_RESOURCES, DERIV_BASE_COMMITMENTS } from '../data/partnershipData';

export const ResourceMatcher: React.FC = () => {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>(() =>
    CLUB_RESOURCES.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.defaultChecked }),
      {} as Record<string, boolean>
    )
  );

  const toggleItem = (id: string) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const needsSnacksCovered = !checkedMap.snacks;
  const needsVenueSupport = !checkedMap.venue;
  const needsPromoSupport = !checkedMap.outreach;

  const readyCount = useMemo(
    () => Object.values(checkedMap).filter(Boolean).length,
    [checkedMap]
  );

  return (
    <section
      id="resource-matcher"
      className="py-12 sm:py-16 border-b border-slate-800 bg-hero-mesh text-white print-compact"
      aria-labelledby="matcher-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B74]">
              CLEAR ROLE BREAKDOWN
            </span>
            <h2
              id="matcher-heading"
              className="mt-1 font-heading text-2xl font-extrabold text-white sm:text-3xl print:text-xl print:text-[#0E0E0E]"
            >
              How We Split the Work
            </h2>
          </div>
          <p className="text-xs font-medium text-slate-300 no-print">
            Toggle what your committee has ready to see how Deriv fills the gap
          </p>
        </div>

        <p className="mt-2 max-w-prose text-sm text-slate-300 print:text-xs print:text-[#475569]">
          Running a technical event shouldn&apos;t burn out your committee. You handle the campus
          basics; Deriv handles the engineering content, platform tooling, and sponsorship.
        </p>

        {/* 2-Column Card */}
        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2 print:grid-cols-2 print:gap-3 print:mt-3">
          {/* Left Column: What Your Club Brings */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/85 p-6 shadow-xl backdrop-blur-sm print-card">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-white">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white print:text-[#0E0E0E]">
                      What Your Club Brings
                    </h3>
                    <p className="text-xs text-slate-400">
                      Check off what your FSKTM committee already has
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-white">
                  {readyCount}/{CLUB_RESOURCES.length} Ready
                </span>
              </div>

              <div className="mt-4 space-y-3 print:space-y-1.5">
                {CLUB_RESOURCES.map((item) => {
                  const isChecked = !!checkedMap[item.id];
                  return (
                    <label
                      key={item.id}
                      className={`flex cursor-pointer items-start gap-3.5 rounded-xl border p-3.5 transition-all select-none print:p-2 ${
                        isChecked
                          ? 'border-[#FF444F]/60 bg-[#FF444F]/10'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(item.id)}
                        className="sr-only"
                      />
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isChecked
                            ? 'border-[#FF444F] bg-[#FF444F] text-white'
                            : 'border-slate-600 bg-slate-900 text-transparent'
                        }`}
                        aria-hidden="true"
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <div className="flex-1">
                        <span className="block text-sm font-semibold text-white print:text-xs print:text-[#0E0E0E]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-slate-300 print:text-[#475569]">
                          {item.detail}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-950/80 border border-slate-800 px-4 py-3 text-xs text-slate-300 no-print">
              <strong className="text-white">Missing an item above?</strong> Uncheck it—Deriv&apos;s
              campus team can cover refreshments, co-marketing assets, or backup venue arrangements.
            </div>
          </div>

          {/* Right Column: What Deriv Covers Automatically */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/85 p-6 shadow-xl backdrop-blur-sm print-card">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF444F]/20 text-[#FF444F]">
                    <Gift className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white print:text-[#0E0E0E]">
                      What Deriv Covers Automatically
                    </h3>
                    <p className="text-xs text-slate-400">
                      Zero invoice or sponsorship paperwork required from students
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#FF444F]/20 px-2.5 py-1 text-xs font-bold text-[#FF6B74]">
                  100% Sponsored
                </span>
              </div>

              <div className="mt-4 space-y-3 print:space-y-1.5">
                {DERIV_BASE_COMMITMENTS.map((commitment) => (
                  <div
                    key={commitment.id}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/65 p-3.5 print:p-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF444F]" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white print:text-xs print:text-[#0E0E0E]">
                          {commitment.title}
                        </h4>
                        <span className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                          {commitment.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300 print:text-[#475569]">
                        {commitment.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Dynamic Conditional Highlight when "Event Snacks or Refreshments" is unchecked */}
                {needsSnacksCovered ? (
                  <div className="flex items-start gap-3 rounded-xl border-2 border-[#FF444F] bg-[#FF444F]/15 p-3.5 transition-all print:p-2">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#FF444F]" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#FF444F] px-2.5 py-0.5 text-xs font-bold text-white">
                          + Refreshments &amp; Pizza Covered by Deriv
                        </span>
                        <span className="text-[11px] font-semibold text-[#FF6B74]">
                          Auto-Added
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-200 print:text-[#0E0E0E]">
                        Since your club left refreshments unchecked, Deriv will directly sponsor food
                        and drinks for all registered student builders.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-950/50 px-3.5 py-2.5 text-xs text-emerald-300">
                    <span className="font-medium">
                      Your club is handling snacks — Deriv will redirect extra budget into bonus
                      hackathon prizes!
                    </span>
                  </div>
                )}

                {/* Additional dynamic helpers if Venue or Outreach is unchecked */}
                {(needsVenueSupport || needsPromoSupport) && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-xs text-slate-300">
                    {needsVenueSupport && (
                      <p>
                        <strong className="text-white">+ Venue Backup:</strong> We can provide an
                        official industry speaker letter for your FSKTM Dean&apos;s office room
                        booking or host you at Deriv Cyberjaya HQ.
                      </p>
                    )}
                    {needsPromoSupport && (
                      <p className={needsVenueSupport ? 'mt-1' : ''}>
                        <strong className="text-white">+ Co-Marketing Kit:</strong> Deriv provides
                        ready-to-post Instagram/Telegram posters and an RSVP link.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
