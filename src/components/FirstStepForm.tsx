import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Check,
  Copy,
  Edit3,
  Mail,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import { TARGET_MONTH_SUGGESTIONS } from '../data/partnershipData';

export const FirstStepForm: React.FC = () => {
  const [clubName, setClubName] = useState('');
  const [targetMonth, setTargetMonth] = useState('');
  const [organizerEmail, setOrganizerEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const trimmedClub = clubName.trim();
  const trimmedMonth = targetMonth.trim();
  const trimmedEmail = organizerEmail.trim();

  const outreachSubject = useMemo(() => {
    const clubLabel = trimmedClub || 'UM FSKTM Student Society';
    const monthLabel = trimmedMonth || 'Upcoming Semester';
    return `Deriv x UM FSKTM Workshop Inquiry — ${clubLabel} (${monthLabel})`;
  }, [trimmedClub, trimmedMonth]);

  const outreachMessage = useMemo(() => {
    return `Hi Deriv Malaysia Campus Team,

I'm reaching out from ${trimmedClub} at the Faculty of Computer Science & Information Technology (FSKTM), Universiti Malaya.

We'd love to explore hosting the 4-hour "Deriv Real-Time API & Algo-Trading Mini-Buildathon" for our FSKTM students around ${trimmedMonth}.

Could we schedule a quick 15-minute alignment call to discuss dates and logistics?

Best regards,
${trimmedClub} Committee
Reply-To: ${trimmedEmail}`;
  }, [trimmedClub, trimmedMonth, trimmedEmail]);

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject: outreachSubject,
      body: outreachMessage,
    });
    return `mailto:partnerships-my@deriv.com?${params.toString().replace(/\+/g, '%20')}`;
  }, [outreachSubject, outreachMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmedClub || !trimmedMonth || !trimmedEmail) {
      setErrorMessage('Please fill in all 3 fields so we can prepare your intro note.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid organizer email address (e.g., name@siswa.um.edu.my).');
      return;
    }
    setErrorMessage(null);
    setIsSubmitted(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outreachMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback copy method if clipboard permissions are restricted
      const textArea = document.createElement('textarea');
      textArea.value = outreachMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="first-step"
      className="py-12 sm:py-16 bg-white print-compact"
      aria-labelledby="first-step-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm sm:p-8 print-card">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444F]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF444F]">
              <Sparkles className="h-3.5 w-3.5" />
              Low-Friction Kickoff
            </span>
            <span className="text-xs font-semibold text-[#475569]">
              Replies within 2 business days · Deriv Cyberjaya
            </span>
          </div>

          <h2
            id="first-step-heading"
            className="mt-3 font-heading text-2xl font-extrabold text-[#0E0E0E] sm:text-3xl print:text-xl"
          >
            One Simple First Step
          </h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-[#475569] sm:text-base print:text-xs">
            No lengthy proposal deck required. Share your club name and target month to lock in a
            quick 15-minute alignment call with our Malaysia campus team.
          </p>

          {/* Print-only static instructions */}
          <div className="hidden print:block mt-3 rounded-lg border border-[#CBD5E1] bg-white p-3 text-xs">
            <p className="font-bold text-[#0E0E0E]">
              How to initiate this partnership (for Club Exco / Faculty Advisor):
            </p>
            <p className="mt-1 text-[#475569]">
              Email <strong>partnerships-my@deriv.com</strong> with your{' '}
              <strong>FSKTM Club / Society Name</strong> and <strong>Target Month</strong> to book
              a 15-minute alignment call with Deriv&apos;s Cyberjaya Campus Outreach team.
            </p>
          </div>

          {/* Interactive Form or Ready-to-Send Confirmation View */}
          <div className="mt-6 no-print">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* Field 1: Club / Society Name */}
                  <div>
                    <label
                      htmlFor="club-name"
                      className="block text-xs font-bold uppercase tracking-wide text-[#0E0E0E]"
                    >
                      1. Club / Society Name
                    </label>
                    <div className="relative mt-1.5">
                      <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="club-name"
                        type="text"
                        required
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}
                        placeholder="e.g., PEKOM, GDG UM, AI Club"
                        className="w-full rounded-xl border border-[#E2E8F0] bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0E0E0E] placeholder:text-slate-400 focus:border-[#FF444F] focus:outline-none focus:ring-2 focus:ring-[#FF444F]/20"
                      />
                    </div>
                  </div>

                  {/* Field 2: Target Month */}
                  <div>
                    <label
                      htmlFor="target-month"
                      className="block text-xs font-bold uppercase tracking-wide text-[#0E0E0E]"
                    >
                      2. Target Month
                    </label>
                    <div className="relative mt-1.5">
                      <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="target-month"
                        type="text"
                        list="target-month-options"
                        required
                        value={targetMonth}
                        onChange={(e) => setTargetMonth(e.target.value)}
                        placeholder="e.g., December 2026 / Semester 1"
                        className="w-full rounded-xl border border-[#E2E8F0] bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0E0E0E] placeholder:text-slate-400 focus:border-[#FF444F] focus:outline-none focus:ring-2 focus:ring-[#FF444F]/20"
                      />
                      <datalist id="target-month-options">
                        {TARGET_MONTH_SUGGESTIONS.map((option) => (
                          <option key={option} value={option} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Field 3: Organizer Email */}
                  <div>
                    <label
                      htmlFor="organizer-email"
                      className="block text-xs font-bold uppercase tracking-wide text-[#0E0E0E]"
                    >
                      3. Organizer Email
                    </label>
                    <div className="relative mt-1.5">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        id="organizer-email"
                        type="email"
                        required
                        value={organizerEmail}
                        onChange={(e) => setOrganizerEmail(e.target.value)}
                        placeholder="name@siswa.um.edu.my"
                        className="w-full rounded-xl border border-[#E2E8F0] bg-white pl-9 pr-3.5 py-2.5 text-sm text-[#0E0E0E] placeholder:text-slate-400 focus:border-[#FF444F] focus:outline-none focus:ring-2 focus:ring-[#FF444F]/20"
                      />
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <p
                    role="alert"
                    className="rounded-lg border border-[#FF444F]/30 bg-[#FF444F]/10 px-3.5 py-2 text-xs font-medium text-[#FF444F]"
                  >
                    {errorMessage}
                  </p>
                )}

                <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
                  <p className="text-xs text-[#475569]">
                    Generates an instant outreach note for email or WhatsApp/Telegram committee chats.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FF444F] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#E63540] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF444F] focus-visible:ring-offset-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Prepare 15-Min Intro Request</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Confirmation View ("Ready to Send") */
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                    </span>
                    <h3 className="font-heading text-sm font-bold text-[#0E0E0E]">
                      Ready to Send — {trimmedClub} × Deriv
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#475569] hover:text-[#0E0E0E] focus:outline-none"
                  >
                    <Edit3 className="h-3 w-3" />
                    <span>Edit details</span>
                  </button>
                </div>

                {/* Pre-formatted Message Preview */}
                <div className="mt-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3.5 font-mono text-xs leading-relaxed text-[#0E0E0E] whitespace-pre-wrap">
                  {outreachMessage}
                </div>

                {/* Dual 1-Click Actions */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={mailtoHref}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FF444F] px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#E63540] sm:text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-xs font-bold text-[#0E0E0E] shadow-sm transition-colors hover:bg-[#F8FAFC] sm:text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#475569]" />
                        <span>Copy Message for WhatsApp / Committee</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
