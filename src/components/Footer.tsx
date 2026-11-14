import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { BRAND_ASSETS, EXTERNAL_LINKS, openOnDoubleClick } from '../data/partnershipData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-8 text-xs text-[#475569] print-compact">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_ASSETS.derivIcon}
              alt="Deriv"
              onDoubleClick={() => openOnDoubleClick(EXTERNAL_LINKS.derivWebsite)}
              title="Double-click to visit deriv.com"
              className="h-7 w-7 cursor-pointer rounded-md object-cover"
            />
            <div>
              <p className="font-bold text-[#0E0E0E]">
                Deriv Services Malaysia Sdn. Bhd. · University &amp; Developer Relations
              </p>
              <a
                href={EXTERNAL_LINKS.derivHqMap}
                target="_blank"
                rel="noreferrer"
                className="mt-0.5 flex items-center gap-1 text-[#475569] hover:text-[#FF444F]"
              >
                <MapPin className="h-3 w-3 text-[#FF444F] shrink-0" />
                <span>Deriv HQ, 3500, Jalan Teknokrat 3, 63000 Cyberjaya, Selangor, Malaysia</span>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 no-print">
            <a
              href={EXTERNAL_LINKS.derivApi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0E0E0E] hover:text-[#FF444F]"
            >
              <span>api.deriv.com</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={EXTERNAL_LINKS.derivHackathon}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0E0E0E] hover:text-[#FF444F]"
            >
              <span>deriv.com/hackathon</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={EXTERNAL_LINKS.fsktmWebsite}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#0E0E0E] hover:text-[#FF444F]"
            >
              <span>fsktm.um.edu.my</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
