import React from 'react';
import {
  Building2,
  Clock,
  Cpu,
  CheckCircle2,
  Layers,
  MapPin,
  MousePointerClick,
  Sparkles,
  Users,
} from 'lucide-react';
import {
  ACTIVITY_SPOTLIGHT,
  BRAND_ASSETS,
  EXTERNAL_LINKS,
  FSKTM_VENUES,
  REAL_TRACK_RECORD,
  openOnDoubleClick,
} from '../data/partnershipData';

export const ActivitySpotlight: React.FC = () => {
  return (
    <section
      id="activity"
      className="py-12 sm:py-16 border-b border-[#E2E8F0] print-compact"
      aria-labelledby="activity-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
              <Layers className="h-3.5 w-3.5" />
              {ACTIVITY_SPOTLIGHT.badge}
            </span>
            <h2
              id="activity-heading"
              className="mt-1.5 font-heading text-2xl font-extrabold text-[#0E0E0E] sm:text-3xl print:text-xl"
            >
              {ACTIVITY_SPOTLIGHT.title}
            </h2>
          </div>

          <span className="inline-flex items-center gap-1.5 self-start rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-semibold text-[#475569] sm:self-auto">
            <Clock className="h-3.5 w-3.5 text-[#FF444F]" />
            Half-Day (4 Hrs) or Friday 2:30–5:00 PM Slot
          </span>
        </div>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-[#475569] sm:text-base print:text-xs">
          {ACTIVITY_SPOTLIGHT.subtitle}
        </p>

        {/* 3-Step Run-of-Show Grid with Real Photos (Double-Click Enabled) */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 print:grid-cols-3 print:gap-3 print:mt-4">
          {ACTIVITY_SPOTLIGHT.stages.map((stage, index) => (
            <div
              key={stage.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-shadow hover:shadow-md print-card"
            >
              <div>
                {/* Real Photo Banner (Double-Click opens Map / API / Careers) */}
                <div
                  onDoubleClick={() => openOnDoubleClick(stage.targetUrl)}
                  title={stage.urlLabel}
                  className="group relative h-40 w-full cursor-pointer overflow-hidden border-b border-[#E2E8F0] bg-slate-100 no-print"
                >
                  <img
                    src={stage.image}
                    alt={stage.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-[#FF444F] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      {stage.timeBlock}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-black/65 backdrop-blur-sm px-2 py-0.5 font-heading text-[10px] font-bold text-white">
                      <MousePointerClick className="h-2.5 w-2.5 text-[#FF444F]" />
                      Stage 0{index + 1} · 2× Click
                    </span>
                  </div>
                  <p className="absolute bottom-2 left-3 right-3 text-[11px] font-medium text-white/95 truncate">
                    {stage.imageCaption}
                  </p>
                </div>

                <div className="p-5 pb-0 print:p-0">
                  {/* Print-only Stage Header */}
                  <div className="hidden print:flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-xs text-[#FF444F]">{stage.timeBlock}</span>
                    <span className="text-[10px] uppercase text-slate-500">Stage 0{index + 1}</span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-heading text-lg font-bold text-[#0E0E0E] print:text-sm">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="mt-2 text-sm leading-relaxed text-[#475569] print:text-xs">
                    {stage.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-4 mt-4 border-t border-[#E2E8F0] print:p-0 print:mt-2 print:pt-2">
                {/* Student Outcome */}
                <div className="flex items-start gap-2 text-xs text-[#0E0E0E]">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF444F]" />
                  <span className="font-medium">{stage.deliverable}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-3 flex flex-wrap gap-1.5 no-print">
                  {stage.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-0.5 text-[11px] font-medium text-[#475569]"
                    >
                      <Cpu className="h-2.5 w-2.5 text-[#FF444F]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready-to-Host FSKTM Campus Venues (DK1 Block B & Block A Labs - Double-Click Enabled) */}
        <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm no-print">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[#E2E8F0] pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
                <Building2 className="h-3.5 w-3.5" />
                ON-CAMPUS AT FSKTM UNIVERSITI MALAYA
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-[#0E0E0E] sm:text-xl">
                Ready for Block B Lecture Halls (DK1) or Block A Computer Labs
              </h3>
            </div>
            <span className="text-xs font-medium text-[#475569]">
              Double-click any venue photo to view on Google Maps / FSKTM portal
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FSKTM_VENUES.map((venue) => (
              <div
                key={venue.id}
                onDoubleClick={() => openOnDoubleClick(venue.targetUrl)}
                title={venue.urlLabel}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all hover:border-[#FF444F]/50"
              >
                <div>
                  <div className="relative h-32 w-full overflow-hidden border-b border-[#E2E8F0]">
                    <img
                      src={venue.image}
                      alt={venue.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-2 left-2 rounded bg-black/70 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-white">
                      {venue.block}
                    </span>
                    <span className="absolute bottom-2 right-2 rounded bg-black/65 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                      2× Click Map
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-heading text-xs font-bold text-[#0E0E0E]">
                      {venue.name}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#475569]">
                      {venue.bestFor}
                    </p>
                  </div>
                </div>
                <div className="px-3 pb-3 pt-1">
                  <span className="inline-flex items-center gap-1 rounded-md border border-[#E2E8F0] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#0E0E0E]">
                    <Users className="h-2.5 w-2.5 text-[#FF444F]" />
                    {venue.capacity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real PEKOM x FSKTM Workshop Series Alignment Showcase */}
        <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm no-print">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#E2E8F0] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-[#FF444F]/10 px-2.5 py-1 text-xs font-bold text-[#FF444F]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>PROVEN FIT WITH PEKOM (@pekomum) INITIATIVES</span>
              </div>
              <h3 className="mt-1.5 font-heading text-lg font-bold text-[#0E0E0E] sm:text-xl">
                Designed Around How PEKOM Already Runs FCSIT Events
              </h3>
            </div>

            {/* Official UM FSKTM + PEKOM Lockup Pill */}
            <div className="flex items-center gap-2.5 self-start rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2 sm:self-auto">
              <img
                src={BRAND_ASSETS.umLogo}
                alt="Universiti Malaya"
                onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.fsktmWebsite)}
                title="Double-click to visit fsktm.um.edu.my"
                className="h-6 w-auto cursor-pointer object-contain"
              />
              <span className="h-4 w-px bg-slate-300" />
              <img
                src={BRAND_ASSETS.pekomLogo}
                alt="PEKOM"
                onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.pekomInstagram)}
                title="Double-click to visit @pekomum on Instagram"
                className="h-5 w-auto cursor-pointer object-contain"
              />
            </div>
          </div>

          <p className="mt-3 max-w-prose text-xs leading-relaxed text-[#475569] sm:text-sm">
            Whether you schedule this buildathon in a{' '}
            <strong>Friday 2:30 PM – 5:00 PM slot at DK1, Block B</strong> (like{' '}
            <em>Enterprise AI Beyond the Hype</em>), run it as a hands-on builder session (like{' '}
            <em>Introduction to Vibe Coding</em>), or host it in{' '}
            <strong>Bilik Kuliah 2, Block A</strong>, our Cyberjaya engineering team adapts to your
            committee’s exact workflow.
          </p>

          {/* 4-Card Real Event Gallery (Double-Click opens @pekomum / Google Map) */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {REAL_TRACK_RECORD.fsktmSide.cards.map((card) => (
              <div
                key={card.id}
                onDoubleClick={() => openOnDoubleClick(card.targetUrl)}
                title={card.urlLabel}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] transition-all hover:border-[#FF444F]/50"
              >
                <div>
                  <div className="relative overflow-hidden border-b border-[#E2E8F0]">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="h-36 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-black/65 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                      2× Click
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#FF444F]">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{card.tag}</span>
                    </p>
                    <h4 className="mt-1 font-heading text-xs font-bold text-[#0E0E0E]">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#475569]">
                      {card.subtitle}
                    </p>
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
