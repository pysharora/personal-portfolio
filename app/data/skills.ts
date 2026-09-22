type SkillGroup = {
  title: string;
  description: string;
  technologies: readonly string[];
};

type SkillProof = {
  label: string;
  value: string;
  detail: string;
};

type SkillScene = {
  eyebrow: string;
  title: string;
  detail: string;
  tags: readonly string[];
  code: readonly string[];
  preview: {
    primary: string;
    secondary: string;
    metric: string;
    value: string;
  };
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Product engineering",
    description: "Interfaces, APIs, and the glue between them.",
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Node.js",
      "Python",
      "APIs",
    ],
  },
  {
    title: "Product & UX",
    description: "Flows, edge cases, systems, and taste.",
    technologies: [
      "JIRA",
      "Confluence",
      "Product Thinking",
      "UX",
      "Design Systems",
      "Stakeholder Work",
    ],
  },
  {
    title: "Business & delivery",
    description: "Strategy when useful. Execution always.",
    technologies: [
      "Strategy",
      "Execution",
      "Testing",
      "Performance",
      "Freelance-ready",
    ],
  },
];

export const skillProof: readonly SkillProof[] = [
  {
    label: "Frontend",
    value: "React · Next · Vue",
    detail: "SSR pages, dashboards, admin flows, responsive UI",
  },
  {
    label: "Backend",
    value: "Node · Python · FastAPI",
    detail: "APIs, async services, caching, integrations",
  },
  {
    label: "Platform",
    value: "Auth · SOC2 · Tokens",
    detail: "Multi-tenant auth, audit logs, secure token lifecycle",
  },
  {
    label: "Delivery",
    value: "Testing · Reviews · AI tools",
    detail: "Jest, RTL, PyTest, code reviews, Claude Code",
  },
];

export const deliveryFlow = [
  "Map the messy idea",
  "Design the flow",
  "Wire the APIs",
  "Harden auth + edge cases",
  "Ship, measure, improve",
] as const;

export const skillScenes: readonly SkillScene[] = [
  {
    eyebrow: "01 / INTERFACE",
    title: "Interfaces",
    detail:
      "React, Next.js, Vue, TypeScript, SSR, dashboards, admin flows, and finished-feeling UI states.",
    tags: ["React", "Next.js", "Vue", "TypeScript", "SSR"],
    code: ["<ProductFlow />", "state: useful", "edgeCases.map(fix)"],
    preview: {
      primary: "UI",
      secondary: "SSR",
      metric: "Screen state",
      value: "polished",
    },
  },
  {
    eyebrow: "02 / API",
    title: "APIs",
    detail:
      "Node, Python, FastAPI, REST, async services, caching, integrations, and reliable data plumbing.",
    tags: ["Node.js", "Python", "FastAPI", "REST", "Caching"],
    code: ["GET /search", "await syncJobs()", "cache.hit → fast"],
    preview: {
      primary: "API",
      secondary: "CACHE",
      metric: "Data path",
      value: "wired",
    },
  },
  {
    eyebrow: "03 / PLATFORM",
    title: "Platform",
    detail:
      "Multi-tenant auth, organizations, teams, audit logging, user-scoped tokens, and SOC2-aware patterns.",
    tags: ["Auth", "SOC2", "Audit logs", "Tokens", "Tenancy"],
    code: ["org.create()", "token.rotate()", "audit.write()"],
    preview: {
      primary: "AUTH",
      secondary: "SOC2",
      metric: "Access",
      value: "scoped",
    },
  },
  {
    eyebrow: "04 / QUALITY",
    title: "Quality",
    detail:
      "Performance fixes, retry mechanisms, test coverage, code reviews, cleanup, and AI-assisted development with judgment.",
    tags: ["Jest", "RTL", "PyTest", "Performance", "Reviews"],
    code: ["retry.until(ok)", "test('edge case')", "ship.withConfidence()"],
    preview: {
      primary: "TEST",
      secondary: "FAST",
      metric: "Release",
      value: "safer",
    },
  },
];
