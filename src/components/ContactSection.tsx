import React from 'react';
import {
  Building2,
  Clock,
  ExternalLink,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS, openOnDoubleClick } from '../data/partnershipData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-us"
      className="py-12 sm:py-16 border-b border-slate-800 bg-[#0A0D18] text-white print-compact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444F]/15 border border-[#FF444F]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6B74]">
              <MessageSquare className="h-3.5 w-3.5" />
              DIRECT LIAISONS &amp; HOTLINES
            </span>
            <h2
              id="contact-heading"
              className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl print:text-xl print:text-[#0E0E0E]"
            >
              Contact Us &amp; Campus Relations
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300">
            <Clock className="h-3.5 w-3.5 text-[#FF444F]" />
            Response Time: Within 24–48 Hours
          </span>
        </div>

        <p className="mt-3 max-w-prose text-sm text-slate-300 sm:text-base print:text-xs print:text-[#475569]">
          Have questions regarding room endorsement, custom sponsorship packages, or dietary
          catering? Reach out directly to Deriv’s campus relations team or connect with PEKOM’s
          faculty liaison.
        </p>

        {/* 2 Contact Cards: Deriv HQ vs PEKOM UM */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Deriv Malaysia Campus Outreach */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_ASSETS.derivIcon}
                  alt="Deriv"
                  className="h-9 w-9 rounded-lg object-cover shadow"
                />
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    Deriv Campus Relations Team
                  </h3>
                  <p className="text-xs text-[#FF6B74] font-semibold">
                    Deriv Services Sdn. Bhd. (Cyberjaya HQ)
                  </p>
                </div>
              </div>
              <span className="rounded bg-[#FF444F]/20 border border-[#FF444F]/30 px-2 py-0.5 text-[10px] font-bold uppercase text-[#FF6B74]">
                Official Partner
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Campus Outreach Email</p>
                  <a
                    href="mailto:partnerships-my@deriv.com"
                    className="text-[#FF6B74] underline hover:text-white"
                  >
                    partnerships-my@deriv.com
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    For partnership proposals, speaker clearance &amp; sponsorship approvals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Malaysia Office Hotline</p>
                  <a
                    href="tel:+60386862888"
                    className="text-slate-200 hover:text-[#FF444F]"
                  >
                    +60 3-8686 2888
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Mon – Fri · 9:00 AM – 6:00 PM MYT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Operational Engineering HQ</p>
                  <p className="text-slate-300">
                    3500, Jalan Teknokrat 3, 63000 Cyberjaya, Selangor
                  </p>
                  <a
                    href={EXTERNAL_LINKS.derivHqMap}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#FF6B74] hover:underline mt-1"
                  >
                    <span>View Driving Route from UM (25 mins) on Google Maps</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Developer &amp; Career Portals</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <a
                      href={EXTERNAL_LINKS.derivApi}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[11px] text-slate-300 hover:text-white"
                    >
                      api.deriv.com ↗
                    </a>
                    <a
                      href={EXTERNAL_LINKS.derivCareers}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[11px] text-slate-300 hover:text-white"
                    >
                      deriv.com/careers ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 no-print">
              <a
                href="mailto:partnerships-my@deriv.com?subject=Inquiry%20from%20FSKTM%20Student%20Exco&body=Hi%20Deriv%20Campus%20Team%2C%0A%0AWe%20would%20like%20to%20connect%20regarding%20the%20FSKTM%20buildathon%20partnership.%0A%0AThank%20you!"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF444F] py-2.5 px-4 text-xs font-bold text-white transition-all hover:bg-[#E63540]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Deriv Campus Team</span>
              </a>
            </div>
          </div>

          {/* Right Card: PEKOM Universiti Malaya (Host Society) */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_ASSETS.pekomLogo}
                  alt="PEKOM UM"
                  className="h-9 w-9 rounded-lg object-cover shadow"
                />
                <div>
                  <h3 className="font-heading text-base font-bold text-white">
                    PEKOM Universiti Malaya
                  </h3>
                  <p className="text-xs text-slate-400">
                    Persatuan Komputer · FSKTM Universiti Malaya
                  </p>
                </div>
              </div>
              <span className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-300">
                Host Club
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Instagram className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Official Instagram &amp; Announcements</p>
                  <a
                    href={EXTERNAL_LINKS.pekomInstagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FF6B74] underline hover:text-white"
                  >
                    @pekomum (Instagram)
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Official student announcements, event updates &amp; Dean’s Cup coverage
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Faculty Affiliation</p>
                  <p className="text-slate-300">
                    Fakulti Sains Komputer &amp; Teknologi Maklumat (FSKTM)
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Universiti Malaya, 50603 Kuala Lumpur, Malaysia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Campus Venues</p>
                  <p className="text-slate-300">
                    Block B (Dewan Kuliah 1) &amp; Block A (Makmal Multimedia)
                  </p>
                  <a
                    href={EXTERNAL_LINKS.fsktmMap}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#FF6B74] hover:underline mt-1"
                  >
                    <span>View FSKTM Campus on Google Maps</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-[#FF444F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Faculty Website</p>
                  <a
                    href={EXTERNAL_LINKS.fsktmWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white mt-0.5"
                  >
                    <span>fsktm.um.edu.my</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 no-print">
              <a
                href={EXTERNAL_LINKS.pekomInstagram}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 py-2.5 px-4 text-xs font-bold text-white transition-all hover:bg-slate-700"
              >
                <Instagram className="h-3.5 w-3.5 text-[#FF444F]" />
                <span>Visit @pekomum on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
