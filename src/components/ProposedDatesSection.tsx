import React from 'react';
import {
  Calendar,
  Clock,
  Compass,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PROPOSED_DATE_SLOTS, FSKTM_VENUES, openOnDoubleClick } from '../data/partnershipData';

interface Props {
  onSelectSlot?: (slotTitle: string) => void;
}

export const ProposedDatesSection: React.FC<Props> = ({ onSelectSlot }) => {
  return (
    <section
      id="proposed-dates"
      className="py-12 sm:py-16 border-b border-slate-300/80 bg-gradient-to-b from-slate-100 via-rose-50/40 to-slate-100 text-[#0E0E0E] print-compact"
      aria-labelledby="dates-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444F]/10 border border-[#FF444F]/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
              <Calendar className="h-3.5 w-3.5" />
              CONCRETE TIMING &amp; VENUE OPTIONS
            </span>
            <h2
              id="dates-heading"
              className="mt-2 font-heading text-2xl font-extrabold text-[#0E0E0E] sm:text-3xl print:text-xl"
            >
              3 Proposed Date &amp; Time Slots for FSKTM
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm sm:self-auto">
            <Clock className="h-3.5 w-3.5 text-[#FF444F]" />
            Turnkey Scheduling · Custom Dates Also Welcome
          </span>
        </div>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#334155] sm:text-base print:text-xs">
          To eliminate back-and-forth guessing, Deriv has pre-calculated three high-attendance slots
          specifically aligned with Universiti Malaya&apos;s academic calendar and PEKOM&apos;s
          proven Friday afternoon workshop slots.
        </p>

        {/* 3 Proposed Slots Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 print:grid-cols-3 print:gap-3">
          {PROPOSED_DATE_SLOTS.map((slot) => (
            <div
              key={slot.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-300 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[#FF444F]/50"
            >
              <div>
                <span className="inline-block rounded-md bg-[#FF444F]/10 border border-[#FF444F]/25 px-2.5 py-1 text-[11px] font-bold text-[#FF444F]">
                  {slot.badge}
                </span>

                <h3 className="mt-4 font-heading text-lg font-extrabold text-[#0E0E0E]">
                  {slot.date}
                </h3>

                <div className="mt-2 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-semibold text-[#0E0E0E]">
                    <Clock className="h-3.5 w-3.5 text-[#FF444F] shrink-0" />
                    <span>{slot.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{slot.venue}</span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Why it fits: </strong>
                  {slot.whyFits}
                </div>

                <p className="mt-3 text-[11px] font-medium text-slate-500">
                  📅 {slot.academicContext}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 no-print">
                <a
                  href="#first-step"
                  onClick={() => onSelectSlot && onSelectSlot(`${slot.date} (${slot.time})`)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 px-4 text-xs font-bold text-white transition-colors hover:bg-[#FF444F]"
                >
                  <span>Select This Slot</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FSKTM Real Venues Feature Cards */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF444F]">
                CAMPUS LOCATIONS
              </span>
              <h3 className="mt-1 font-heading text-xl font-extrabold text-[#0E0E0E]">
                Target On-Campus Venues at FSKTM
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs text-slate-500">
              Double-click any image to view on Google Maps
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {FSKTM_VENUES.map((venue) => (
              <div
                key={venue.id}
                className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div
                  onDoubleClick={() => openOnDoubleClick(venue.targetUrl)}
                  title={venue.urlLabel}
                  className="group relative h-40 w-full cursor-pointer overflow-hidden border-b border-slate-200 bg-slate-900"
                >
                  <img
                    src={venue.image}
                    alt={venue.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute top-2.5 right-2.5 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                    2× Click Map
                  </span>
                  <span className="absolute bottom-2.5 left-3 rounded bg-[#FF444F] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    {venue.block}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-heading text-base font-bold text-[#0E0E0E]">
                    {venue.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#FF444F]">
                    {venue.capacity}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {venue.bestFor}
                  </p>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                    ⚡ {venue.specs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
