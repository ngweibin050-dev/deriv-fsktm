import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  Download,
  FileText,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';
import { PROPOSED_DATE_SLOTS } from '../data/partnershipData';

interface Props {
  selectedSlot?: string;
}

export const FirstStepForm: React.FC<Props> = ({ selectedSlot: externalSlot }) => {
  const [clubName, setClubName] = useState('PEKOM (Persatuan Komputer Universiti Malaya)');
  const [selectedSlotId, setSelectedSlotId] = useState<string>(PROPOSED_DATE_SLOTS[0].id);
  const [customSlot, setCustomSlot] = useState('');
  const [venuePreference, setVenuePreference] = useState('Dewan Kuliah 1 (DK1), Block B');
  const [organizerEmail, setOrganizerEmail] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLetter, setCopiedLetter] = useState(false);

  // Active chosen slot label
  const activeSlotString = useMemo(() => {
    if (selectedSlotId === 'custom') {
      return customSlot.trim() || 'Proposed Custom Date';
    }
    const found = PROPOSED_DATE_SLOTS.find((s) => s.id === selectedSlotId);
    return found ? `${found.date} · ${found.time}` : 'Upcoming Semester';
  }, [selectedSlotId, customSlot]);

  const trimmedClub = clubName.trim();
  const trimmedEmail = organizerEmail.trim();
  const trimmedName = organizerName.trim() || 'PEKOM Exco Lead';

  // Email Subject
  const outreachSubject = useMemo(() => {
    return `[Deriv x FSKTM Partnership] Buildathon Booking — ${trimmedClub} (${activeSlotString})`;
  }, [trimmedClub, activeSlotString]);

  // Email Body
  const outreachMessage = useMemo(() => {
    return `Dear Deriv Malaysia Campus Outreach Team,

I am reaching out on behalf of ${trimmedClub} at the Faculty of Computer Science & Information Technology (FSKTM), Universiti Malaya.

We are interested in confirming Deriv's RM 5,000 turnkey sponsorship and hosting the "Deriv Real-Time API & Algo-Trading Mini-Buildathon" for FSKTM undergraduates.

Event Details Proposed:
• Target Date & Time: ${activeSlotString}
• Preferred Campus Venue: ${venuePreference}
• Target Student Attendance: 80–120 FCSIT students
• Organizer Contact: ${trimmedName} (${trimmedEmail})

We would like to book a 15-minute alignment call with your team to review the schedule and receive the official Deriv speaker paperwork for FSKTM HEPA room clearance.

Looking forward to your reply.

Warm regards,
${trimmedName}
${trimmedClub}
Universiti Malaya
Contact: ${trimmedEmail}`;
  }, [trimmedClub, activeSlotString, venuePreference, trimmedName, trimmedEmail]);

  // Official Letter Draft for FSKTM Deputy Dean (HEPA)
  const facultyLetterDraft = useMemo(() => {
    return `KERTAS CADANGAN RINGKAS / NOTA KERJASAMA INDUSTRI
Kepada: Timbalan Dekan (Hal Ehwal Pelajar & Alumni), FSKTM Universiti Malaya
Daripada: ${trimmedClub}
Tarikh: ${new Date().toLocaleDateString('en-GB')}

Perkara: Permohonan Kelulusan Kolaborasi Industri Bersama Deriv Services Sdn Bhd (Cyberjaya HQ)

1. TUJUAN
Memohon kelulusan fakulti dan penempahan ruang (${venuePreference}) bagi penganjuran "Deriv Real-Time API & Algo-Trading Mini-Buildathon" bersama warga FSKTM.

2. MAKLUMAT PROGRAM
• Tarikh & Masa Cadangan: ${activeSlotString}
• Tempat: ${venuePreference}, FSKTM Universiti Malaya
• Sasaran Peserta: 80–120 Pelajar Prasiswazah FSKTM (AI, SE, CST, IS)
• Rakan Industri: Deriv Services Sdn Bhd (HQ: 3500 Jalan Teknokrat 3, Cyberjaya)

3. FAEDAH & PENAJAAN PENUH OLEH INDUSTRI
• Penajaan Hadiah Tunai Pelajar: RM 2,000
• Jamuan & Makanan (100% Halal): RM 1,800
• Cenderahati & Bahan Bengkel: RM 800
• Akses Sandbox WebSocket API: Percuma
• JUMLAH KOS KEPADA FAKULTI / PERSATUAN: RM 0.00 (Ditanggung sepenuhnya oleh Deriv)

4. PEGAWAI PERHUBUNGAN PERSATUAN
Nama: ${trimmedName}
Emel: ${trimmedEmail || 'pekom@siswa.um.edu.my'}`;
  }, [trimmedClub, venuePreference, activeSlotString, trimmedName, trimmedEmail]);

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject: outreachSubject,
      body: outreachMessage,
    });
    return `mailto:partnerships-my@deriv.com?${params.toString().replace(/\+/g, '%20')}`;
  }, [outreachSubject, outreachMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmedClub) {
      setErrorMessage('Please state your club or society name.');
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid organizer contact email (e.g. name@siswa.um.edu.my).');
      return;
    }
    setErrorMessage(null);
    setIsSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(outreachMessage);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyLetter = async () => {
    try {
      await navigator.clipboard.writeText(facultyLetterDraft);
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2500);
    } catch {
      setCopiedLetter(true);
      setTimeout(() => setCopiedLetter(false), 2500);
    }
  };

  return (
    <section
      id="first-step"
      className="py-12 sm:py-16 bg-[#0E131F] text-white print-compact"
      aria-labelledby="first-step-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF444F]/20 border border-[#FF444F]/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6B74]">
              <Sparkles className="h-3.5 w-3.5" />
              ONE CLEAR FIRST STEP
            </span>
            <span className="text-xs font-medium text-slate-400">
              Direct to Deriv Campus Relations (Cyberjaya HQ)
            </span>
          </div>

          <h2
            id="first-step-heading"
            className="mt-4 font-heading text-2xl font-extrabold text-white sm:text-3xl"
          >
            Lock In Your Date &amp; Download 1-Click Faculty Paperwork
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base leading-relaxed">
            No endless email chains or guessing games. Select your preferred date, venue, and club
            details below. Deriv immediately generates your ready-to-send booking note and a
            pre-formatted approval proposal for the FSKTM Deputy Dean.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              {/* Step 1: Select Proposed Date Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Choose a Proposed Date &amp; Time Slot
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {PROPOSED_DATE_SLOTS.map((slot) => {
                    const isSelected = selectedSlotId === slot.id;
                    return (
                      <div
                        key={slot.id}
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`cursor-pointer rounded-xl border p-3.5 transition-all ${
                          isSelected
                            ? 'border-[#FF444F] bg-[#FF444F]/15 shadow-md shadow-[#FF444F]/10'
                            : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-bold">
                          <span
                            className={
                              isSelected ? 'text-[#FF6B74]' : 'text-slate-400'
                            }
                          >
                            {slot.badge.split('·')[0]}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="h-4 w-4 text-[#FF444F]" />
                          )}
                        </div>
                        <p className="mt-1 font-heading text-xs font-extrabold text-white">
                          {slot.date}
                        </p>
                        <p className="mt-0.5 text-[11px] font-semibold text-slate-300">
                          {slot.time}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400 truncate">
                          {slot.venue.split(',')[0]}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Custom slot option */}
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="radio"
                    id="slot-custom-radio"
                    name="slot-choice"
                    checked={selectedSlotId === 'custom'}
                    onChange={() => setSelectedSlotId('custom')}
                    className="accent-[#FF444F]"
                  />
                  <label
                    htmlFor="slot-custom-radio"
                    className="text-xs text-slate-300 cursor-pointer font-medium"
                  >
                    Need a different date? (e.g., Tuesday / Wednesday afternoon)
                  </label>
                </div>
                {selectedSlotId === 'custom' && (
                  <input
                    type="text"
                    value={customSlot}
                    onChange={(e) => setCustomSlot(e.target.value)}
                    placeholder="Enter preferred date/time (e.g. Wednesday, 20 Jan 2027, 2:00 PM)"
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-[#FF444F] focus:outline-none"
                  />
                )}
              </div>

              {/* Step 2: Venue Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Preferred FSKTM Campus Venue
                </label>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {[
                    'Dewan Kuliah 1 (DK1), Block B',
                    'Makmal Multimedia (MM1/MM2), Block A',
                    'The Cube / Student Lounge, Block A',
                  ].map((venue) => (
                    <label
                      key={venue}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-xs font-semibold transition-all ${
                        venuePreference === venue
                          ? 'border-[#FF444F] bg-[#FF444F]/10 text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="venue-radio"
                        checked={venuePreference === venue}
                        onChange={() => setVenuePreference(venue)}
                        className="accent-[#FF444F]"
                      />
                      <span>{venue}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Club & Organizer Contact */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    3. Club / Society Name
                  </label>
                  <input
                    type="text"
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}
                    placeholder="e.g. PEKOM, GDGoC UM"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#FF444F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    placeholder="e.g. Jason Lim (Vice President)"
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#FF444F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Organizer Email *
                  </label>
                  <input
                    type="email"
                    value={organizerEmail}
                    onChange={(e) => setOrganizerEmail(e.target.value)}
                    placeholder="e.g. yourname@siswa.um.edu.my"
                    required
                    className="mt-1.5 w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#FF444F] focus:outline-none"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="rounded-lg border border-red-500/50 bg-red-950/40 p-3 text-xs text-red-300">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF444F] py-3.5 px-6 font-heading text-sm font-bold text-white shadow-lg shadow-[#FF444F]/30 transition-all hover:bg-[#E63540] focus:outline-none"
              >
                <Sparkles className="h-4 w-4" />
                <span>Generate 1-Click Proposal &amp; Lock In Sponsorship</span>
              </button>
            </form>
          ) : (
            /* Results & Generated Actions */
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-emerald-300 text-xs">
                <strong>✔ Ready to Dispatch:</strong> Your partnership slot is pre-configured for{' '}
                <span className="text-white font-bold">{activeSlotString}</span> at{' '}
                <span className="text-white font-bold">{venuePreference}</span>.
              </div>

              {/* Two Column Output: Email vs Faculty Proposal Draft */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Left: Email to Deriv */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#FF6B74]">
                      <Mail className="h-3.5 w-3.5" />
                      Email to Deriv Campus Team
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      {copiedEmail ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>
                  <pre className="mt-3 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                    {outreachMessage}
                  </pre>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex gap-2">
                    <a
                      href={mailtoHref}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FF444F] py-2 px-3 text-xs font-bold text-white hover:bg-[#E63540]"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>

                {/* Right: Draft Faculty Letter for FSKTM Deputy Dean */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <FileText className="h-3.5 w-3.5" />
                      FSKTM Deputy Dean (HEPA) Paperwork
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyLetter}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      {copiedLetter ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedLetter ? 'Copied' : 'Copy Text'}</span>
                    </button>
                  </div>
                  <pre className="mt-3 text-[11px] text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                    {facultyLetterDraft}
                  </pre>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={handleCopyLetter}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 py-2 px-3 text-xs font-bold text-white hover:bg-slate-800"
                    >
                      <Copy className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{copiedLetter ? 'Letter Copied to Clipboard!' : 'Copy Paperwork for HEPA Submission'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 underline hover:text-white"
                >
                  ← Edit choices or select another date
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
