import React from 'react';
import {
  ArrowRight,
  Award,
  Building2,
  Code2,
  ExternalLink,
  MapPin,
  MousePointerClick,
  Sparkles,
} from 'lucide-react';
import {
  BRAND_ASSETS,
  EXTERNAL_LINKS,
  PARTNER_PERSONA,
  openOnDoubleClick,
} from '../data/partnershipData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-white pt-8 pb-12 sm:pt-12 sm:pb-14 print-compact">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left 7 Columns: Core Pitch (<60s scan) */}
          <div className="lg:col-span-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF444F]/25 bg-[#FF444F]/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>{PARTNER_PERSONA.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#0E0E0E] sm:text-5xl sm:leading-[1.12] print:text-2xl">
              {PARTNER_PERSONA.headline}
            </h1>

            {/* Subheadline constrained to 65ch */}
            <p className="mt-4 max-w-prose text-base leading-relaxed text-[#475569] sm:text-lg print:text-xs print:mt-2">
              {PARTNER_PERSONA.subheadline}
            </p>

            {/* Primary CTA & Location Note */}
            <div className="mt-6 flex flex-col items-start gap-3.5 sm:flex-row sm:items-center no-print">
              <a
                href="#first-step"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF444F] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#E63540] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF444F] focus-visible:ring-offset-2"
              >
                <span>{PARTNER_PERSONA.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={EXTERNAL_LINKS.derivHqMap}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#FF444F]"
              >
                <MapPin className="h-4 w-4 text-[#FF444F] shrink-0" />
                <span>30 mins away · Deriv HQ, 3500 Jalan Teknokrat 3, Cyberjaya</span>
              </a>
            </div>

            {/* Co-Branding Trust Strip */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#475569]">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 font-medium text-[#0E0E0E]">
                <Award className="h-3.5 w-3.5 text-[#FF444F]" />
                LinkedIn Top Company Malaysia (2025)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 font-medium text-[#0E0E0E]">
                <Building2 className="h-3.5 w-3.5 text-[#FF444F]" />
                4 MY Offices: Cyberjaya · Labuan · Melaka · Ipoh
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Real Visual Co-Branding Card (Double-Click Enabled) */}
          <div className="lg:col-span-5 no-print">
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-sm">
              {/* Top Main Photo: Deriv Cyberjaya HQ -> Double-Click opens Google Maps */}
              <div
                onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.derivHqMap)}
                title="Double-click to open Deriv HQ (3500 Jalan Teknokrat 3, Cyberjaya) in Google Maps"
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E2E8F0] bg-slate-900"
              >
                <img
                  src={BRAND_ASSETS.derivHq}
                  alt="Deriv Malaysia Operational HQ at 3500 Jalan Teknokrat 3, Cyberjaya"
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-md bg-black/65 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-white">
                  <MousePointerClick className="h-3 w-3 text-[#FF444F]" />
                  2× Click for Map
                </span>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <span className="inline-block rounded bg-[#FF444F] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Deriv Malaysia HQ
                    </span>
                    <p className="mt-1 font-heading text-xs font-bold">
                      3500 Jalan Teknokrat 3, Cyberjaya
                    </p>
                  </div>
                  <img
                    src={BRAND_ASSETS.derivIcon}
                    alt="Deriv"
                    className="h-7 w-7 rounded-md border border-white/20 shadow"
                  />
                </div>
              </div>

              {/* Bottom 2-Tile Visual Bridge: Deriv <AI> Hackathon x FSKTM DK1 */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                <div
                  onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.derivHackathon)}
                  title="Double-click to visit deriv.com/hackathon"
                  className="group cursor-pointer overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 transition-colors hover:border-[#FF444F]/50"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={BRAND_ASSETS.derivAiHackathon}
                      alt="Deriv AI Hackathon Cyberjaya"
                      className="h-24 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-1.5 flex items-center justify-between text-[11px] font-bold text-[#0E0E0E]">
                    <span className="truncate">Deriv &lt;AI&gt; Hackathon</span>
                    <ExternalLink className="h-2.5 w-2.5 text-[#475569] shrink-0" />
                  </p>
                  <p className="text-[10px] text-[#475569] truncate">
                    2× Click · deriv.com/hackathon
                  </p>
                </div>

                <div
                  onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.fsktmMap)}
                  title="Double-click to open FSKTM Universiti Malaya in Google Maps"
                  className="group cursor-pointer overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 transition-colors hover:border-[#FF444F]/50"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={BRAND_ASSETS.fsktmDk1Hall}
                      alt="Dewan Kuliah 1 (DK1) Block B at FSKTM"
                      className="h-24 w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-1.5 flex items-center justify-between text-[11px] font-bold text-[#0E0E0E]">
                    <span className="truncate">DK1 Block B &amp; Block A</span>
                    <MapPin className="h-2.5 w-2.5 text-[#FF444F] shrink-0" />
                  </p>
                  <p className="text-[10px] text-[#475569] truncate">
                    2× Click · FSKTM Google Map
                  </p>
                </div>
              </div>

              <p className="mt-2 text-center text-[10px] font-medium text-[#475569]">
                Tip: Double-click any photo or logo to open its Google Map or official page
              </p>
            </div>
          </div>
        </div>

        {/* Quick 3-Pillar Summary Bar */}
        <div className="mt-9 grid grid-cols-1 gap-3 border-t border-[#E2E8F0] pt-6 sm:grid-cols-3 print:grid-cols-3 print:mt-4 print:pt-3">
          {PARTNER_PERSONA.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 print-card"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF444F]/10 text-[#FF444F] no-print">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#475569]">
                  {fact.label}
                </p>
                <p className="font-heading text-sm font-bold text-[#0E0E0E]">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-xs text-[#475569]">{fact.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
