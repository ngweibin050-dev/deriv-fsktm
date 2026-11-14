import React from 'react';
import { Printer } from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS, openOnDoubleClick } from '../data/partnershipData';

export const Navbar: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md print:static print:border-b-2 print:border-[#0E0E0E] print:pb-2">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
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
          <div className="flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1.5 shadow-sm">
            <div
              onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.fsktmWebsite)}
              title="Double-click to visit fsktm.um.edu.my"
              className="flex cursor-pointer items-center gap-2.5 transition-opacity hover:opacity-85"
            >
              <img
                src={BRAND_ASSETS.umLogo}
                alt="Universiti Malaya Official Logo"
                className="h-6 w-auto object-contain sm:h-7"
              />
              <div className="hidden sm:block border-l border-slate-300 pl-2 leading-tight">
                <p className="text-[9px] font-extrabold uppercase tracking-tight text-[#0E0E0E]">
                  FAKULTI SAINS KOMPUTER &amp; TEKNOLOGI MAKLUMAT
                </p>
                <p className="text-[8.5px] font-medium text-[#475569]">
                  Faculty of Computer Science &amp; Information Technology
                </p>
              </div>
            </div>

            <span className="h-5 w-px bg-[#E2E8F0]" />

            <img
              src={BRAND_ASSETS.pekomLogo}
              alt="PEKOM UM FSKTM Official Logo"
              onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.pekomInstagram)}
              title="Double-click to open @pekomum on Instagram"
              className="h-5 w-auto cursor-pointer object-contain transition-opacity hover:opacity-85 sm:h-6"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0E0E0E] shadow-sm transition-colors hover:border-slate-300 hover:bg-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF444F]"
            title="Print or save a clean 1-page PDF brief for your PEKOM Exco or FSKTM Faculty Advisor"
          >
            <Printer className="h-3.5 w-3.5 text-[#475569]" />
            <span>Save 1-Page Brief</span>
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
