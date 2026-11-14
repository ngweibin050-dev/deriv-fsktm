# Deriv × Universiti Malaya (FSKTM) Partnership Landing Page

A focused, zero-backend Single-Page Application (SPA) designed to help **student tech organizations and clubs at the Faculty of Computer Science & Information Technology (FSKTM), Universiti Malaya** (such as PEKOM, GDG UM, and AI Club) understand in under 60 seconds:

1. **Who this is for & what a partnership involves:** Direct engineering mentorship, API tooling, and full event sponsorship from Deriv's Cyberjaya tech hub.
2. **One concrete joint activity:** The **Deriv Real-Time API & Algo-Trading Mini-Buildathon** (a 4-hour hands-on WebSocket & algorithmic system sprint hosted at FSKTM).
3. **One clear first step:** A 3-field quick starter that generates a pre-filled email (`mailto:partnerships-my@deriv.com`) and a 1-click WhatsApp/Telegram committee summary for a 15-minute alignment chat.

---

## Project Structure

```text
.
├── index.html                  # Page title, meta tags, Inter & Plus Jakarta Sans fonts
├── package.json                # React 18, TypeScript, Vite, Tailwind CSS, lucide-react
├── tailwind.config.js          # Deriv brand color tokens (#FF444F, #0E0E0E, #F8FAFC)
└── src/
    ├── main.tsx                # React root mount
    ├── App.tsx                 # Main layout & section orchestration
    ├── index.css               # Tailwind directives + single-page A4 @media print rules
    ├── data/
    │   └── partnershipData.ts  # Structured copy for UM FSKTM, 3-stage run-of-show, FAQs
    └── components/
        ├── Navbar.tsx          # Minimal sticky header with Deriv × UM FSKTM badge & Print CTA
        ├── HeroSection.tsx     # Focused value proposition + smooth scroll jump to #first-step
        ├── ActivitySpotlight.tsx # 4-hour "Deriv Real-Time API & Algo-Trading Mini-Buildathon"
        ├── ResourceMatcher.tsx # Interactive checklist ("What Your Club Brings" vs "What Deriv Covers")
        ├── FaqAccordion.tsx    # 3-question collapsible organizer FAQ
        ├── FirstStepForm.tsx   # 3-field starter form + instant mailto & clipboard pitch generator
        └── Footer.tsx          # Deriv Services Malaysia (Cyberjaya HQ) campus outreach footer
```

## Running Locally

```bash
npm install
npm run dev
```

## Print-Ready 1-Page Committee Brief

Clicking **Save 1-Page Brief** in the top navigation bar calls `window.print()`, triggering dedicated `@media print` rules in `src/index.css` that strip interactive form chrome and format the entire partnership offer onto a single A4 page for faculty advisor or Exco review.
