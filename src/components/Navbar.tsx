import React from 'react';
import { Mail, Printer } from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS, openOnDoubleClick } from '../data/partnershipData';

export const Navbar: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md print:static print:border-b-2 print:border-[#0E0E0E] print:pb-2">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2.5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Official Deriv Icon + Wordmark (Double-click -> deriv.com) */}
          <div
            onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.derivWebsite)}
            title="Double-click to visit deriv.com"
            className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-0.5 transition-opacity hover:opacity-85"
          >
            <img
              src={BRAND_ASSETS.derivIcon}
              alt="Deriv Logo"
              className="h-8 w-8 rounded-lg object-cover shadow-sm"
            />
            <span className="font-heading text-xl font-extrabold italic tracking-tight text-[#FF444F] sm:text-2xl">
              deriv
            </span>
          </div>

          <span className="text-slate-300 font-light text-lg">×</span>

          {/* Official UM FSKTM Lockup + PEKOM Logo */}
          <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-2 py-1 shadow-sm">
            <div
              onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.fsktmWebsite)}
              title="Double-click to visit fsktm.um.edu.my"
              className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-85"
            >
              <img
                src={BRAND_ASSETS.umLogo}
                alt="Universiti Malaya Official Logo"
                className="h-6 w-auto object-contain sm:h-6"
              />
              <div className="hidden lg:block border-l border-slate-300 pl-2 leading-tight">
                <p className="text-[9px] font-extrabold uppercase tracking-tight text-[#0E0E0E]">
                  FSKTM UNIVERSITI MALAYA
                </p>
                <p className="text-[8px] font-medium text-[#475569]">
                  Faculty of Computer Science &amp; IT
                </p>
              </div>
            </div>

            <span className="h-4 w-px bg-[#E2E8F0]" />

            <img
              src={BRAND_ASSETS.pekomLogo}
              alt="PEKOM UM FSKTM Official Logo"
              onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.pekomInstagram)}
              title="Double-click to open @pekomum on Instagram"
              className="h-5 w-auto cursor-pointer object-contain transition-opacity hover:opacity-85"
            />
          </div>
        </div>

        {/* Quick Nav Anchors & CTA */}
        <div className="flex items-center gap-2 sm:gap-3 no-print">
          <nav className="hidden md:flex items-center gap-3 text-xs font-semibold text-slate-600">
            <a href="#activity" className="hover:text-[#FF444F] transition-colors">
              The Activity
            </a>
            <a href="#proposed-dates" className="hover:text-[#FF444F] transition-colors">
              Dates &amp; Venues
            </a>
            <a href="#sponsorship-budget" className="hover:text-[#FF444F] transition-colors">
              RM 5k Budget
            </a>
            <a href="#contact-us" className="hover:text-[#FF444F] transition-colors">
              Contact Us
            </a>
          </nav>

          <a
            href="#contact-us"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm hover:border-[#FF444F] hover:text-[#FF444F]"
          >
            <Mail className="h-3.5 w-3.5 text-[#FF444F]" />
            <span>Contact</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#FF444F] focus:outline-none"
            title="Print or save a clean 1-page PDF brief for your PEKOM Exco or FSKTM Faculty Advisor"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Save Brief</span>
          </button>
        </div>

        <div className="hidden print:block text-right text-xs text-[#475569]">
          <p className="font-semibold text-[#0E0E0E]">PEKOM &amp; FSKTM Advisor 1-Page Brief</p>
          <p>partnerships-my@deriv.com · 3500 Jalan Teknokrat 3, Cyberjaya</p>
        </div>
      </div>
    </header>
  );
};
