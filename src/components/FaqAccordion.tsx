import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/partnershipData';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 border-b border-[#E2E8F0] print-compact"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
            <HelpCircle className="h-3.5 w-3.5" />
            COMMITTEE LOGISTICS
          </span>
          <h2
            id="faq-heading"
            className="mt-1 font-heading text-2xl font-extrabold text-[#0E0E0E] sm:text-3xl print:text-xl"
          >
            Questions Your Advisor &amp; Exco Will Ask
          </h2>
          <p className="mt-2 text-sm text-[#475569] no-print">
            Quick answers before you bring this to your next PEKOM, GDG UM, or club committee meeting.
          </p>
        </div>

        <div className="mt-6 space-y-3 print:space-y-2 print:mt-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-colors print-card"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-sm font-bold text-[#0E0E0E] hover:bg-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FF444F] sm:text-base print:py-1 print:px-0"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#475569] transition-transform duration-200 no-print ${
                      isOpen ? 'rotate-180 text-[#FF444F]' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-5 pb-4 text-sm leading-relaxed text-[#475569] print:block print:px-0 print:pb-0 print:text-xs ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="max-w-prose border-t border-[#E2E8F0] pt-3 print:border-0 print:pt-1">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
