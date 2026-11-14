export interface ActivityStage {
  id: string;
  timeBlock: string;
  title: string;
  description: string;
  deliverable: string;
  techTags: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  targetUrl: string;
  urlLabel: string;
}

export interface VenueCard {
  id: string;
  name: string;
  block: string;
  bestFor: string;
  capacity: string;
  specs: string;
  image: string;
  imageAlt: string;
  targetUrl: string;
  urlLabel: string;
}

export interface ProposedDateSlot {
  id: string;
  badge: string;
  date: string;
  time: string;
  venue: string;
  whyFits: string;
  academicContext: string;
}

export interface BudgetLineItem {
  category: string;
  amount: string;
  description: string;
  coveredBy: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  badge: string;
  stat: string;
}

export interface ResourceCheckbox {
  id: string;
  label: string;
  detail: string;
  defaultChecked: boolean;
}

export interface DerivCommitment {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProofCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  targetUrl: string;
  urlLabel: string;
}

export const EXTERNAL_LINKS = {
  derivWebsite: 'https://deriv.com',
  derivApi: 'https://api.deriv.com',
  derivHackathon: 'https://deriv.com/hackathon',
  derivCareers: 'https://deriv.com/careers',
  derivLinkedIn: 'https://www.linkedin.com/company/derivdotcom',
  derivHqMap:
    'https://www.google.com/maps/search/?api=1&query=Deriv+HQ+3500+Jalan+Teknokrat+3+63000+Cyberjaya+Selangor',
  fsktmWebsite: 'https://fsktm.um.edu.my',
  fsktmMap:
    'https://www.google.com/maps/search/?api=1&query=Faculty+of+Computer+Science+and+Information+Technology+Universiti+Malaya',
  fsktmBlockAMap:
    'https://www.google.com/maps/search/?api=1&query=Block+A+FSKTM+Universiti+Malaya',
  pekomInstagram: 'https://www.instagram.com/pekomum/',
};

export const openOnDoubleClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const BRAND_ASSETS = {
  derivIcon: './assets/deriv-icon.png',
  umLogo: './assets/um-logo.png',
  pekomLogo: './assets/pekom-logo.jpg',
  fsktmDk1Hall: './assets/fsktm-dk1-hall.jpg',
  fsktmMmLab: './assets/fsktm-block-a-mm-lab.jpg',
  fsktmCollabLab: './assets/fsktm-block-a-collab-lab.jpg',
  fsktmNetLab: './assets/fsktm-block-a-net-lab.jpg',
  fsktmAiRoboticsLab: './assets/fsktm-block-a-ai-robotics.jpg',
  fsktmSeLab: './assets/fsktm-block-a-se-lab.jpg',
  derivHq: './assets/deriv-cyberjaya-hq.jpg',
  derivQuill18: './assets/deriv-quill18-cyberjaya.jpg',
  derivTeam: './assets/deriv-team-my.jpg',
  derivFloor: './assets/deriv-engineering-floor.jpg',
  derivMentors: './assets/deriv-engineers-mentoring.jpg',
  derivAiHackathon: './assets/deriv-ai-hackathon-2026.png',
  pekomEnterpriseAiDk1: './assets/pekom-enterprise-ai-dk1.png',
  pekomVibeCoding: './assets/pekom-vibe-coding-workshop.png',
  pekomIndustryTalkBk2: './assets/pekom-industry-talk-bk2.png',
  pekomDeansCup: './assets/pekom-deans-cup-2026.jpg',
};

export const PARTNER_PERSONA = {
  eyebrow: 'DERIV PARTNER PROGRAM · SPECIALLY PREPARED FOR PEKOM & FSKTM UM',
  headline: 'Deriv × PEKOM: The Turnkey FinTech & API Buildathon',
  subheadline:
    'Deriv provides RM 5,000 full sponsorship (prizes, Halal catering, swag), live WebSocket APIs, and engineering mentors from our Cyberjaya HQ. PEKOM hosts the students and reserves Dewan Kuliah 1 (Block B) or Makmal MM1 (Block A). Zero club budget required.',
  primaryCta: 'Select a Date & Lock in the Sponsorship',
  secondaryMeta: 'Built for PEKOM (@pekomum), GDGoC UM & FCSIT Undergraduates',
  quickFacts: [
    {
      label: 'Total Deriv Sponsorship',
      value: 'RM 5,000 (100% Funded)',
      subtext: 'Prizes (RM 2k) + Halal FnB (RM 1.8k) + Swag & Cloud',
    },
    {
      label: 'Recommended Format',
      value: '3–4 Hour Mini-Buildathon',
      subtext: 'Fits Friday 2:30–5:30 PM (DK1) or Saturday 9:30 AM',
    },
    {
      label: 'Club Cost / Financial Risk',
      value: 'RM 0.00 (Zero Out-of-Pocket)',
      subtext: 'Deriv covers catering, prizes, tokens & speaker logistics',
    },
  ],
};

export const PROPOSED_DATE_SLOTS: ProposedDateSlot[] = [
  {
    id: 'slot-sem1-friday',
    badge: 'Recommended · Semester 1 Sprint',
    date: 'Friday, 4 December 2026',
    time: '2:30 PM – 5:30 PM (3 Hours)',
    venue: 'Dewan Kuliah 1 (DK1), Block B, FSKTM',
    whyFits:
      'Matches PEKOM’s proven Friday afternoon slot (e.g. Enterprise AI Beyond the Hype). Zero clash with morning lectures or Friday prayers.',
    academicContext: '2 weeks before Semester 1 final study week; maximum student turn-out.',
  },
  {
    id: 'slot-sem1-saturday',
    badge: 'High-Focus · Weekend Hackathon',
    date: 'Saturday, 12 December 2026',
    time: '9:30 AM – 1:30 PM (4 Hours)',
    venue: 'Makmal Multimedia 1 & 2 (MM1/MM2), Block A, FSKTM',
    whyFits:
      'Dedicated 4-hour uninterrupted sprint on 60+ dual-screen lab PCs. Perfect precursor to the PEKOM Dean’s Cup festival.',
    academicContext: 'Weekend session with free campus parking and quiet lab environment.',
  },
  {
    id: 'slot-sem2-welcome',
    badge: 'Semester 2 Kickoff & Careers',
    date: 'Friday, 19 March 2027',
    time: '2:30 PM – 5:30 PM (3 Hours)',
    venue: 'Dewan Kuliah 1 (DK1) or The Cube, Block A',
    whyFits:
      'New semester welcome week. Prime timing for Year 2 & 3 students exploring Final Year Projects (FYP) and Deriv BeSquare internships.',
    academicContext: 'First month of Semester 2; high energy, no mid-term test pressures.',
  },
];

export const SPONSORSHIP_BUDGET: BudgetLineItem[] = [
  {
    category: 'Student Competition Prizes',
    amount: 'RM 2,000',
    description: 'Cash / Tech Vouchers for Top 3 Teams (1st: RM 1,000 · 2nd: RM 600 · 3rd: RM 400)',
    coveredBy: '100% Funded by Deriv',
  },
  {
    category: 'Halal Catering & Coffee Station',
    amount: 'RM 1,800',
    description:
      'Welcome pack (water/mints), mid-break high-tea (curry puffs/pastries + teh tarik/coffee), and post-event bento meal for 100 pax.',
    coveredBy: '100% Funded by Deriv',
  },
  {
    category: 'Official Developer Swag & Kits',
    amount: 'RM 800',
    description:
      'Deriv developer T-shirts, stickers, laptop sleeves, lanyards, and printed quickstart WebSocket cheat-sheets.',
    coveredBy: '100% Funded by Deriv',
  },
  {
    category: 'Cloud Sandboxes & Test Quotas',
    amount: 'RM 400',
    description: 'Pre-authenticated Deriv WebSocket sandbox credentials with zero-risk virtual trading funds.',
    coveredBy: '100% Funded by Deriv',
  },
];

export const FNB_DETAILS = {
  catererStatus: '100% Halal-Certified Catering Partner',
  headcount: 'Budgeted for 100 students + 15 PEKOM committee members',
  schedule: [
    {
      timing: '2:00 PM – Registration',
      items: 'Welcome cold mineral water, mints, and event folder with API token cards.',
    },
    {
      timing: '3:45 PM – Tech Break',
      items:
        'Freshly baked curry puffs, chocolate croissants, hot teh tarik station, and freshly brewed coffee at DK1 foyer.',
    },
    {
      timing: '5:15 PM – Closing & Demos',
      items: 'Gourmet chicken/vegetarian bento boxes or artisan pizza slices for all participants.',
    },
  ],
};

export const WHY_CHOOSE_DERIV: WhyChoosePoint[] = [
  {
    id: 'proximity',
    title: 'Only 25 Mins From UM Campus',
    description:
      'Our Malaysian engineering headquarters is located at 3500 Jalan Teknokrat 3, Cyberjaya. Our software engineers physically come to FSKTM in person—no remote calls or absent sponsors.',
    badge: 'Physical Presence',
    stat: '25 Mins Drive',
  },
  {
    id: 'real-fintech',
    title: 'Low-Latency, High-Throughput Systems',
    description:
      'Students build on real WebSockets (wss://ws.derivws.com/websockets/v3) handling millions of ticks per second, learning production-grade asynchronous architectures in Rust, Go, Python, and TypeScript.',
    badge: 'Production Tech',
    stat: '25+ Years in Tech',
  },
  {
    id: 'careers',
    title: 'BeSquare Fast-Track & High-Tier Graduate Jobs',
    description:
      'Top student participants get fast-track interview passes for Deriv’s flagship BeSquare graduate programme and paid software engineering internships in Cyberjaya.',
    badge: 'Direct Careers',
    stat: 'Top 10 Employer MY',
  },
  {
    id: 'zero-bureaucracy',
    title: 'Zero Faculty Paperwork Friction',
    description:
      'Deriv provides a pre-drafted official industry collaboration letter that PEKOM exco can submit directly to the FSKTM Deputy Dean (HEPA / Student Affairs) for instant room clearance.',
    badge: 'Turnkey Support',
    stat: '1-Click Paperwork',
  },
];

export const ROLE_DIVISION = {
  pekom: [
    {
      role: 'FSKTM Venue Reservation',
      detail: 'Submit internal room booking for DK1 (Block B) or Makmal MM1 (Block A) via HEPA portal.',
    },
    {
      role: 'Student Outreach & RSVP',
      detail: 'Broadcast co-branded poster across @pekomum Instagram & student Telegram channels (target: 60–100 students).',
    },
    {
      role: 'Day-of-Event Check-in',
      detail: 'Provide 3–4 student committee members at the door to verify student IDs and distribute badges.',
    },
  ],
  deriv: [
    {
      role: 'RM 5,000 Sponsorship Check',
      detail: 'Full financial payment for student prizes, Halal catering, coffee station, and official merchandise.',
    },
    {
      role: '3 Senior Engineering Mentors',
      detail: 'Staff engineers from Cyberjaya HQ leading the live WebSocket code walkthrough and judging student hacks.',
    },
    {
      role: 'API Sandboxes & Starter Repos',
      detail: 'Ready-to-clone GitHub repos in Python and JavaScript with working WebSocket boilerplate.',
    },
    {
      role: 'Fast-Track BeSquare Interviews',
      detail: 'Direct resume screening and interview passes for outstanding FSKTM student developers.',
    },
  ],
};

export const FSKTM_VENUES: VenueCard[] = [
  {
    id: 'venue-dk1',
    name: 'Dewan Kuliah 1 (DK1)',
    block: 'Block B · FSKTM, Universiti Malaya',
    bestFor: 'Kickoff Keynote, WebSocket Architecture Talk & Team Demos',
    capacity: '120–150 Students (Tiered Theatre)',
    specs: 'Dual HD Projectors · High-gain PA Audio · Campus Eduroam & UM-WiFi',
    image: BRAND_ASSETS.fsktmDk1Hall,
    imageAlt: 'Dewan Kuliah 1 (DK1) inside Block B at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmMap,
    urlLabel: 'Double-click to open FSKTM Block B (DK1) in Google Maps',
  },
  {
    id: 'venue-mm-lab',
    name: 'Makmal Multimedia (MM1 / MM2)',
    block: 'Block A · FSKTM, Universiti Malaya',
    bestFor: 'Hands-On API Coding Sprint & High-Performance Bot Development',
    capacity: '60 PC Workstations (Expandable to 80)',
    specs: 'High-spec Workstations · Dual Monitors · Gigabit Wired LAN + Wi-Fi',
    image: BRAND_ASSETS.fsktmMmLab,
    imageAlt: 'Block A Multimedia Lab MM1 and MM2 at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmBlockAMap,
    urlLabel: 'Double-click to open FSKTM Block A Labs in Google Maps',
  },
  {
    id: 'venue-collab-lab',
    name: 'The Cube & Collaborative Labs',
    block: 'Ground Floor, Block A · FSKTM',
    bestFor: 'Team Pods, Coffee Break & 1-on-1 Mentor Code Reviews',
    capacity: '40–60 Students in Pod Clusters',
    specs: 'Movable Whiteboards · Pod Seating · Power Sockets on Every Island',
    image: BRAND_ASSETS.fsktmCollabLab,
    imageAlt: 'Block A collaborative round-table lab at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmBlockAMap,
    urlLabel: 'Double-click to open FSKTM Block A in Google Maps',
  },
];

export const REAL_TRACK_RECORD = {
  fsktmSide: {
    badge: 'TAILORED SPECIFICALLY TO PEKOM',
    title: 'Built Around Proven PEKOM Event Formats',
    description:
      'We designed this collaboration to match the exact successful rhythms PEKOM uses for high-turnout FSKTM events—such as Friday technical sessions in DK1 and computer lab hackathons.',
    cards: [
      {
        id: 'pekom-dk1-card',
        tag: 'DK1, Block B · Proven Friday Slot',
        title: 'Fits Your Standard DK1 Workshop Slot',
        subtitle:
          'Modeled on PEKOM’s "Enterprise AI Beyond the Hype" session in DK1 Block B—students bring a laptop and build live with no schedule conflict.',
        image: BRAND_ASSETS.pekomEnterpriseAiDk1,
        imageAlt: 'PEKOM Enterprise AI Beyond the Hype workshop at DK1 Block B FCSIT',
        targetUrl: EXTERNAL_LINKS.pekomInstagram,
        urlLabel: 'Double-click to view @pekomum on Instagram',
      },
      {
        id: 'pekom-vibe-card',
        tag: 'Open to All FCSIT Undergraduates',
        title: 'Matches PEKOM’s Practical Coding Culture',
        subtitle:
          'Complements PEKOM’s "Introduction to Vibe Coding" workshop by connecting student apps to live WebSocket market streams.',
        image: BRAND_ASSETS.pekomVibeCoding,
        imageAlt: 'PEKOM Introduction to Vibe Coding workshop poster',
        targetUrl: EXTERNAL_LINKS.pekomInstagram,
        urlLabel: 'Double-click to view @pekomum on Instagram',
      },
      {
        id: 'pekom-bk2-card',
        tag: 'Bilik Kuliah 2, Block A · Career Insights',
        title: 'Direct Industry & Engineering Access',
        subtitle:
          'Works equally well as a 2-hour technical sharing session in Bilik Kuliah 2, Block A with direct career & engineering Q&A.',
        image: BRAND_ASSETS.pekomIndustryTalkBk2,
        imageAlt: 'PEKOM Career & Innovation session at Bilik Kuliah 2 Block A FCSIT',
        targetUrl: EXTERNAL_LINKS.fsktmBlockAMap,
        urlLabel: 'Double-click to locate Block A FCSIT on Google Maps',
      },
      {
        id: 'pekom-deans-cup-card',
        tag: 'Semester Calendar Friendly',
        title: 'Scheduled Around Major Faculty Milestones',
        subtitle:
          'We align dates around your exam weeks and flagship PEKOM events like Dean’s Cup (12–20 Dec 2026) and UMHackathon.',
        image: BRAND_ASSETS.pekomDeansCup,
        imageAlt: 'PEKOM Dean’s Cup 2026 Official Poster',
        targetUrl: EXTERNAL_LINKS.pekomInstagram,
        urlLabel: 'Double-click to view PEKOM events on Instagram (@pekomum)',
      },
    ] as ProofCard[],
  },
};

export const ACTIVITY_SPOTLIGHT = {
  badge: 'USEFUL ACTIVITY WE CAN DO TOGETHER',
  title: 'Deriv Real-Time API & Algo-Trading Mini-Buildathon',
  subtitle:
    'A 3 to 4-hour hands-on technical workshop and mini-competition hosted on campus at FSKTM Universiti Malaya. Undergraduates connect directly to Deriv’s real-time WebSocket stream (wss://ws.derivws.com/websockets/v3) and build a functional FinTech prototype before dinner.',
  venueNote: 'Hosted at Dewan Kuliah 1 (Block B) or Makmal Multimedia MM1/MM2 (Block A)',
  stages: [
    {
      id: 'stage-1',
      timeBlock: 'Hour 1 (2:30 – 3:30 PM)',
      title: 'WebSocket Architecture & Live Streaming Kickoff',
      description:
        'Deriv engineers walk through WebSocket protocols, real-time tick streaming, JSON-RPC messages, and authentication. Students clone our Python/TypeScript starter repo and establish a live connection within 15 minutes.',
      deliverable: 'Every student streams live market ticks on their screen.',
      techTags: ['WebSockets (v3)', 'Python asyncio', 'TypeScript', 'JSON-RPC'],
      image: BRAND_ASSETS.fsktmDk1Hall,
      imageAlt: 'Dewan Kuliah 1 (DK1) Block B at FSKTM Universiti Malaya',
      imageCaption: 'Kickoff inside DK1 (Block B) or Makmal Multimedia MM1/MM2 (Block A)',
      targetUrl: EXTERNAL_LINKS.fsktmMap,
      urlLabel: 'Double-click to open FSKTM Universiti Malaya in Google Maps',
    },
    {
      id: 'stage-2',
      timeBlock: 'Hours 2–3 (3:30 – 4:45 PM)',
      title: 'Guided Hackathon Sprint & Mentor Desks',
      description:
        'Student teams build a real-time volatility alert bot, arbitrage dashboard, or algorithmic trading agent with roving 1-on-1 code reviews from 3 Deriv senior engineers from Cyberjaya HQ.',
      deliverable: 'Functional prototype tested against live Deriv sandbox markets.',
      techTags: ['Real-Time Tick Stream', 'Algorithmic Bot', 'Risk Dashboard', '1-on-1 Mentorship'],
      image: BRAND_ASSETS.derivMentors,
      imageAlt: 'Deriv engineers pair-programming and mentoring on laptops',
      imageCaption: 'Roving 1-on-1 code mentorship by Deriv Cyberjaya engineers',
      targetUrl: EXTERNAL_LINKS.derivApi,
      urlLabel: 'Double-click to explore Deriv WebSocket API documentation (api.deriv.com)',
    },
    {
      id: 'stage-3',
      timeBlock: 'Hour 4 (4:45 – 5:30 PM)',
      title: 'Live Pitching, RM 2,000 Prizes & Career Fast-Track',
      description:
        'Top 5 teams present 2-minute live demos on the DK1 big screen. Deriv awards the RM 2,000 cash prize pool, hands out co-branded certificates, and invites top performers for BeSquare graduate interviews.',
      deliverable: 'RM 2,000 awarded · Fast-track interview invites · Halal bento dinner.',
      techTags: ['RM 2,000 Cash Prizes', 'BeSquare Fast-Track', 'Co-Branded Certs', 'Halal Bento Meal'],
      image: BRAND_ASSETS.derivTeam,
      imageAlt: 'Deriv Malaysia team at Cyberjaya campus',
      imageCaption: 'Prizes, swag, and career fast-track to Deriv Malaysia',
      targetUrl: EXTERNAL_LINKS.derivCareers,
      urlLabel: 'Double-click to explore Deriv Malaysia careers (deriv.com/careers)',
    },
  ] as ActivityStage[],
};

export const CLUB_RESOURCES: ResourceCheckbox[] = [
  {
    id: 'venue',
    label: 'Campus Venue Reservation (DK1 Block B or Makmal MM1 Block A)',
    detail: 'Standard FSKTM internal room booking via HEPA with campus Wi-Fi and projector.',
    defaultChecked: true,
  },
  {
    id: 'outreach',
    label: 'Student Society Outreach (Target: 60–100 FSKTM Students)',
    detail: 'Broadcasting the co-branded poster across @pekomum Instagram and faculty batch groups.',
    defaultChecked: true,
  },
  {
    id: 'checkin',
    label: 'Student Committee Door Check-In',
    detail: '3–4 PEKOM committee members to scan matric cards and hand out event badges.',
    defaultChecked: true,
  },
];

export const DERIV_BASE_COMMITMENTS: DerivCommitment[] = [
  {
    id: 'cash-sponsorship',
    title: 'RM 5,000 Full Turnkey Sponsorship',
    description:
      'Deriv provides RM 2,000 student cash prizes, RM 1,800 Halal catering & coffee station, RM 800 developer swag kits, and RM 400 test quota.',
    badge: '100% Deriv Funded',
  },
  {
    id: 'engineers',
    title: '3 Senior Engineers from Cyberjaya HQ (In-Person)',
    description:
      'Staff engineers travel 25 mins from 3500 Jalan Teknokrat 3 to FSKTM to teach WebSockets, judge code, and mentor students 1-on-1.',
    badge: 'In-Person Mentors',
  },
  {
    id: 'besquare',
    title: 'BeSquare Programme Fast-Track Interviews',
    description:
      'Direct priority interviews for Deriv’s high-compensation graduate software engineer pathway for standout FSKTM students.',
    badge: 'Career Gateway',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-who-pays',
    question: 'Does PEKOM or the student society have to pay anything?',
    answer:
      'Zero. Deriv sponsors 100% of the event expenses (RM 5,000 total package), including RM 2,000 cash prizes, full Halal food and beverage catering, developer swag, and API credentials. There is zero financial cost to PEKOM or FSKTM.',
  },
  {
    id: 'faq-fnb',
    question: 'What food & beverages are provided, and is it Halal?',
    answer:
      'Yes, all food is sourced from certified Halal caterers. Deriv covers welcome mineral water and mints, a mid-session high tea (pastries, curry puffs, hot teh tarik, and coffee station), plus post-event bento dinner boxes for 100 students and committee members.',
  },
  {
    id: 'faq-dates',
    question: 'Can we change the suggested date or time?',
    answer:
      'Yes! We proposed 3 high-affinity dates (Dec 4, Dec 12, Mar 19), but your committee can propose any weekday afternoon (e.g. Tuesday/Wednesday 2–5 PM) or Saturday slot that suits FSKTM academic schedules.',
  },
  {
    id: 'faq-paperwork',
    question: 'How do we get approval from FSKTM Deputy Dean / Student Affairs (HEPA)?',
    answer:
      'Deriv provides an official company letter of collaboration and speaker biodata. PEKOM simply attaches it to their standard FSKTM event paperwork. Lead time is typically 2–3 weeks.',
  },
  {
    id: 'faq-skills',
    question: 'Do students need financial trading experience?',
    answer:
      'No financial experience is required. The buildathon is 100% software engineering and algorithms: connecting to WebSockets, parsing JSON, plotting real-time charts, and writing bot logic in Python, JavaScript, or Go.',
  },
];
