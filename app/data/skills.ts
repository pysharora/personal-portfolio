export type SkillGroup = {
  title: string;
  description: string;
  technologies: readonly string[];
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
    title: "Technical Skills",
    description:
      "Production-ready interfaces and APIs, built as one coherent system.",
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Python",
      "TypeScript",
      "Node.js",
      "APIs",
      "Claude Code",
    ],
  },
  {
    title: "Product and UX",
    description:
      "Clear flows, considered edge cases, and decisions grounded in how people work.",
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
    title: "Strategy and delivery",
    description:
      "Scope the right problem, align the people involved, and move it into production.",
    technologies: [
      "Strategy",
      "Execution",
      "Testing",
      "Performance",
      "Monitoring",
      "Delivery",
    ],
  },
];

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
    code: ["GET /search", "await syncJobs()", "cache.hit →\uFE0E fast"],
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
    code: ["retry.until(ok)", "test('edge case')", "release.withConfidence()"],
    preview: {
      primary: "TEST",
      secondary: "FAST",
      metric: "Release",
      value: "safer",
    },
  },
];
