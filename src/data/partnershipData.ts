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
  image: string;
  imageAlt: string;
  targetUrl: string;
  urlLabel: string;
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
  eyebrow: 'FOR UNIVERSITI MALAYA · FSKTM (FCSIT) STUDENT CLUBS & PEKOM',
  headline: 'Turn Classroom Code into Real-Time FinTech Systems',
  subheadline:
    'Deriv partners with PEKOM and FSKTM student societies to host hands-on engineering workshops and buildathons—bringing live WebSocket APIs and software engineers from our Cyberjaya HQ (3500 Jalan Teknokrat 3) straight to DK1 Block B and Block A Labs.',
  primaryCta: 'Start With a 15-Min Intro Chat',
  secondaryMeta: 'Built for PEKOM (@pekomum), GDGoC UM & FCSIT Undergraduate Committees',
  quickFacts: [
    {
      label: 'On-Campus Format',
      value: '2.5–4 Hr Buildathon (e.g. Fri 2:30–5:00 PM)',
      subtext: 'Fits DK1 Block B or Block A Labs (MM1/MM2)',
    },
    {
      label: 'Cost to PEKOM / Club',
      value: 'RM 0 (100% Sponsored by Deriv)',
      subtext: 'Mentors, API sandbox, swag & food covered',
    },
    {
      label: 'Student Audience',
      value: 'All FCSIT Undergraduates (Year 1–4)',
      subtext: 'AI, Software Eng, Computer Systems & IS',
    },
  ],
};

export const FSKTM_VENUES: VenueCard[] = [
  {
    id: 'venue-dk1',
    name: 'Dewan Kuliah 1 (DK1)',
    block: 'Block B · FSKTM',
    bestFor: 'Main API Architecture Briefing & Large Cohort Demos',
    capacity: '80–120+ Pax (Tiered Seating)',
    image: BRAND_ASSETS.fsktmDk1Hall,
    imageAlt: 'Dewan Kuliah 1 (DK1) inside Block B at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmMap,
    urlLabel: 'Double-click to open FSKTM Block B (DK1) in Google Maps',
  },
  {
    id: 'venue-mm-lab',
    name: 'Makmal Multimedia (MM1 / MM2)',
    block: 'Block A · FSKTM',
    bestFor: 'Hands-On Python/JS WebSocket Coding Sprint',
    capacity: '40–60 PC Workstations',
    image: BRAND_ASSETS.fsktmMmLab,
    imageAlt: 'Block A Multimedia Lab MM1 and MM2 at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmBlockAMap,
    urlLabel: 'Double-click to open FSKTM Block A Labs in Google Maps',
  },
  {
    id: 'venue-collab-lab',
    name: 'Collaborative Round-Table Lab',
    block: 'Block A · FSKTM',
    bestFor: 'Team Prototype Sprint & Roving Engineer Mentorship',
    capacity: '30–50 Pax (Team Pods)',
    image: BRAND_ASSETS.fsktmCollabLab,
    imageAlt: 'Block A collaborative round-table lab at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmBlockAMap,
    urlLabel: 'Double-click to open FSKTM Block A in Google Maps',
  },
  {
    id: 'venue-se-net-lab',
    name: 'SE, Networking & AI Labs',
    block: 'Block A · FSKTM',
    bestFor: 'Algorithmic Bot, Systems & Agentic AI Tracks',
    capacity: '40+ Lab Workstations',
    image: BRAND_ASSETS.fsktmSeLab,
    imageAlt: 'Block A Software Engineering computer lab at FSKTM Universiti Malaya',
    targetUrl: EXTERNAL_LINKS.fsktmWebsite,
    urlLabel: 'Double-click to visit official FSKTM UM website (fsktm.um.edu.my)',
  },
];

export const REAL_TRACK_RECORD = {
  fsktmSide: {
    badge: 'TAILORED TO PEKOM & FCSIT WORKFLOWS',
    title: 'Designed Around Real PEKOM Events & FSKTM Schedules',
    description:
      'We studied how PEKOM runs high-impact FCSIT sessions—from technical workshops in DK1 (Block B) and Bilik Kuliah 2 (Block A) to hands-on coding sessions—so this joint buildathon plugs effortlessly into your semester calendar.',
    cards: [
      {
        id: 'pekom-dk1-card',
        tag: 'DK1, Block B · FCSIT (Fri 2:30–5:00 PM)',
        title: 'Fits Your Standard DK1 Workshop Slot',
        subtitle:
          'Modeled on PEKOM’s "Enterprise AI Beyond the Hype" session in DK1 Block B—students bring a charged laptop and build live.',
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
        tag: 'Bilik Kuliah 2, Block A · FCSIT (2–4 PM)',
        title: 'Direct Industry & Engineering Access',
        subtitle:
          'Works equally well in a Tuesday 2:00–4:00 PM slot in Bilik Kuliah 2, Block A with direct career & engineering Q&A.',
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
  badge: 'ONE CONCRETE JOINT ACTIVITY',
  title: 'Deriv Real-Time API & Algo-Trading Mini-Buildathon',
  subtitle:
    'A practical half-day technical session hosted right at Dewan Kuliah 1 (DK1, Block B) or Block A Computer Labs (MM1/MM2) at FSKTM. Students connect to Deriv’s live WebSocket server (wss://ws.derivws.com/websockets/v3) and build a working FinTech prototype in one afternoon.',
  venueNote: 'Ideal for 40–120 FCSIT students · Bring a charged laptop or use Block A Lab PCs',
  stages: [
    {
      id: 'stage-1',
      timeBlock: 'Hour 1',
      title: 'Live API & WebSocket Architecture',
      description:
        'Deriv engineers walk students through connecting to the live Deriv WebSocket API using Python or JavaScript—covering low-latency tick streams, JSON schemas, and authentication right inside DK1 or Block A Labs.',
      deliverable: 'Every student streams live synthetic & forex market ticks on their machine.',
      techTags: ['WebSockets (v3)', 'Python / asyncio', 'TypeScript / JS', 'JSON-RPC'],
      image: BRAND_ASSETS.fsktmDk1Hall,
      imageAlt: 'Dewan Kuliah 1 (DK1) Block B at FSKTM Universiti Malaya',
      imageCaption: 'Kickoff inside DK1 (Block B) or Makmal Multimedia MM1/MM2 (Block A)',
      targetUrl: EXTERNAL_LINKS.fsktmMap,
      urlLabel: 'Double-click to open FSKTM Universiti Malaya in Google Maps',
    },
    {
      id: 'stage-2',
      timeBlock: 'Hours 2–3',
      title: 'Guided Prototype Sprint',
      description:
        'Student teams build a live market-tick analyzer, automated alert bot, or risk calculator using real-time streaming data with roving 1-on-1 mentorship from our Cyberjaya engineering team.',
      deliverable: 'Working GitHub prototype built on top of our starter repository.',
      techTags: ['Real-Time Tick Stream', 'Automated Alert Bot', 'Risk Calculator', 'Live Debugging'],
      image: BRAND_ASSETS.derivMentors,
      imageAlt: 'Deriv engineers pair-programming and mentoring on laptops',
      imageCaption: 'Roving 1-on-1 code mentorship by Deriv Cyberjaya engineers',
      targetUrl: EXTERNAL_LINKS.derivApi,
      urlLabel: 'Double-click to explore Deriv WebSocket API documentation (api.deriv.com)',
    },
    {
      id: 'stage-3',
      timeBlock: 'Hour 4',
      title: 'Live Demos, Prizes & Career Fast-Track',
      description:
        'Teams demo their builds to Deriv engineers for direct code architecture feedback, career Q&A on software & AI engineering roles in Cyberjaya, official co-branded PEKOM × Deriv certificates, and prizes.',
      deliverable: 'Portfolio-ready project + direct fast-track visibility for Deriv internships.',
      techTags: ['Code Review', 'Swag & Prizes', 'PEKOM × Deriv Certs', 'Internship Fast-Track'],
      image: BRAND_ASSETS.derivTeam,
      imageAlt: 'Deriv Malaysia team at Cyberjaya campus',
      imageCaption: 'Swag, prizes & direct fast-track to Deriv Malaysia careers',
      targetUrl: EXTERNAL_LINKS.derivCareers,
      urlLabel: 'Double-click to explore Deriv Malaysia careers (deriv.com/careers)',
    },
  ] as ActivityStage[],
};

export const CLUB_RESOURCES: ResourceCheckbox[] = [
  {
    id: 'venue',
    label: 'Campus Venue & Projector (DK1 Block B, BK2, or Block A Labs MM1/MM2)',
    detail: 'Standard FSKTM lecture hall or Block A computer lab booking with campus Wi-Fi and screen projection.',
    defaultChecked: true,
  },
  {
    id: 'outreach',
    label: 'Student Outreach & QR Registration (40–100+ FCSIT students)',
    detail: 'Posting the co-branded event poster & registration QR across @pekomum Instagram and faculty channels.',
    defaultChecked: true,
  },
  {
    id: 'snacks',
    label: 'Event Snacks or Refreshments',
    detail: 'Leave unchecked if your society budget does not cover food—Deriv will step in automatically.',
    defaultChecked: false,
  },
];

export const DERIV_BASE_COMMITMENTS: DerivCommitment[] = [
  {
    id: 'engineers',
    title: 'Deriv Engineers & Mentors (from Cyberjaya HQ)',
    description:
      '2–4 software & AI engineers travel from 3500 Jalan Teknokrat 3, Cyberjaya to lead the buildathon in person at FSKTM.',
    badge: 'Always Included',
  },
  {
    id: 'sandbox',
    title: 'Free Deriv API Sandbox Tokens & Starter GitHub Repo',
    description:
      'Pre-configured demo API tokens, zero-risk virtual accounts, and boilerplate Python/JS templates so zero time is wasted on setup.',
    badge: 'Always Included',
  },
  {
    id: 'swag',
    title: 'Co-Branded Certificates (PEKOM × Deriv), Prizes & Swag',
    description:
      'Official digital certificates for UM merit/portfolio tracking, exclusive Deriv developer merch, and prizes for top student demos.',
    badge: 'Always Included',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-cost',
    question: 'Does this cost PEKOM, our club, or FSKTM students anything?',
    answer:
      'No. Deriv covers engineering speakers, API sandbox access, developer swag, prizes, and can sponsor refreshments so the workshop is 100% free for all UM FCSIT students.',
  },
  {
    id: 'faq-prereq',
    question: 'Do students need prior trading or finance knowledge?',
    answer:
      'Not at all. The session focuses on WebSocket APIs, asynchronous Python/JS, and real-time data streams—any Year 1 to Year 4 FSKTM student from AI, Software Engineering, Computer Systems & Technology, or Information Systems can follow along.',
  },
  {
    id: 'faq-leadtime',
    question: 'How much lead time do we need before the event?',
    answer:
      'Ideally 3 to 4 weeks before your target slot (such as a Tuesday 2:00–4:00 PM slot in BK2 Block A or a Friday 2:30–5:00 PM slot in DK1 Block B) so we can align with your academic calendar and provide official speaker letters for FSKTM Student Affairs (HEPA) approval.',
  },
];

export const TARGET_MONTH_SUGGESTIONS = [
  'November / December 2026 (Semester 1 · Pre-Dean’s Cup)',
  'January 2027 (Semester 1 Late Slot)',
  'March 2027 (Semester 2 Kickoff)',
  'April 2027 (Friday 2:30–5:00 PM @ DK1 Block B / Block A Labs)',
  'May 2027 (Semester 2 Buildathon Slot)',
];
