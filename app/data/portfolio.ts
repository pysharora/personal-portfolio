export const recentWork = [
  {
    title: "Enterprise retail tools",
    meta: "AdeptMind / SaaS",
    visual: "Search UI · admin flows · client tooling",
    description:
      "Search, onboarding, admin flows, and internal tooling used across 40+ enterprise clients.",
  },
  {
    title: "Auth + platform cleanup",
    meta: "Security / SOC2",
    visual: "Auth screens · audit logs · token admin",
    description:
      "Multi-tenant auth, audit logging, token lifecycle work, and the less glamorous bits that make products trustworthy.",
  },
  {
    title: "Landing pages that pull their weight",
    meta: "Myclassroom / growth",
    visual: "Campaign pages · analytics · post-login UI",
    description:
      "Lead-focused pages, post-login product UI, analytics hooks, and React modules for education products.",
  },
] as const;

export const bestFit = [
  "SaaS product teams",
  "MVPs that need taste + shipping",
  "Internal tools and dashboards",
  "Auth, APIs, and platform cleanup",
] as const;

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "AdeptMind Inc.",
    location: "Remote · Toronto, Canada",
    period: "Dec 2022 — Present",
    detail:
      "Building product features, platform tooling, and backend improvements for enterprise retail products serving 40+ clients.",
    points: [
      "Ships React, Next.js, TypeScript, Node.js, and Python features across search, admin, onboarding, and SSR flows.",
      "Modernized authentication from NextAuth to Better Auth with organizations, teams, audit logs, and SOC2-ready patterns.",
      "Improved backend reliability with async FastAPI work, caching, secure tokens, retry mechanisms, tests, and reviews.",
    ],
  },
  {
    role: "SDE-1",
    company: "Myclassroom Learning Services Pvt. Ltd.",
    location: "Noida, India",
    period: "Sept 2021 — Nov 2022",
    detail:
      "Built product UI, landing pages, API integrations, and analytics-backed experiences for edtech products.",
    points: [
      "Developed the post-login interface for myseat.mclassroom.digital and shipped React modules from design specs.",
      "Created lead-capturing landing pages for AITS JEE and AITS NEET campaigns.",
      "Integrated APIs and MoEngage analytics to improve product feedback loops and business visibility.",
    ],
  },
  {
    role: "Product + engineering lens",
    company: "MBA · IT Project Management",
    location: "Amity University, India",
    period: "2023 — 2025",
    detail:
      "A business-side layer on top of engineering: scope, stakeholders, tradeoffs, delivery, and the occasional spreadsheet with opinions.",
    points: [
      "Useful for teams that need someone who can understand the product bet, not just the ticket.",
      "Comfortable moving between technical detail, user experience, and business context.",
    ],
  },
] as const;
