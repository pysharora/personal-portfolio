import type { ModeCopy } from "@/lib/mode";

export type WorkSample = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  /** Oversized poster type printed on the card art. */
  readonly poster: readonly string[];
  readonly description: ModeCopy;
  readonly href?: string;
  readonly linkLabel?: string;
};

export type ExperiencePoints =
  | { readonly shared: readonly string[] }
  | {
      readonly engineer: readonly string[];
      readonly pm: readonly string[];
    };

export type ExperienceEntry = {
  readonly id: string;
  readonly role: string;
  readonly meta: string;
  readonly year: string;
  readonly points: ExperiencePoints;
};

/** Flip to false to pull the in-progress Slow Days Archive card off the page. */
export const SHOW_SLOW_DAYS = true;

const slowDaysArchive: WorkSample = {
  id: "slow-days-archive",
  eyebrow: "Solo build · In progress",
  title: "Slow Days Archive",
  poster: ["Shop"],
  description: {
    engineer:
      "A paper-goods shop I'm building solo on Next.js, Postgres and Better Auth — Razorpay checkout, Shipmozo shipping, and an admin studio I wrote myself.",
    pm: "A shop built end to end on my own: scope it, build it, ship it — and keep the orders honest.",
  },
  href: "https://slowdaysarchive.vercel.app",
  linkLabel: "Visit site",
};

export const workSamples: readonly WorkSample[] = [
  ...(SHOW_SLOW_DAYS ? [slowDaysArchive] : []),
  {
    id: "retail-tools",
    eyebrow: "AdeptMind · Retail SaaS",
    title: "Retail tools",
    poster: ["40+"],
    description: {
      engineer:
        "Search, onboarding and admin tools in React and Next.js, used by 40+ enterprise clients.",
      pm: "Shaped with internal stakeholders and shipped through planned sprints, for 40+ enterprise clients.",
    },
  },
  {
    id: "secure-team-logins",
    eyebrow: "AdeptMind · Platform",
    title: "Secure team logins",
    poster: ["Auth"],
    description: {
      engineer:
        "Moved sign-in to Better Auth, with organisations, teams and audit logs.",
      pm: "The quiet platform work that makes a product trustworthy for enterprise teams.",
    },
  },
  {
    id: "sign-up-pages",
    eyebrow: "Myclassroom · Growth",
    title: "Sign-up pages",
    poster: ["JEE", "NEET"],
    description: {
      engineer:
        "Campaign landing pages and React modules, wired to APIs and MoEngage analytics.",
      pm: "Built around one goal: more students signing up, measured with analytics.",
    },
    href: "https://myclassroom.digital/MyClass/MySeat",
    linkLabel: "Visit site",
  },
];

export const experience: readonly ExperienceEntry[] = [
  {
    id: "adeptmind",
    role: "Full Stack Engineer",
    meta: "AdeptMind · Remote, Toronto",
    year: "Dec 2022 – now",
    points: {
      engineer: [
        "Features across search, onboarding and admin flows for enterprise retail clients.",
        "Migrated authentication to Better Auth with organisations, teams and audit logs.",
        "Rebuilt an internal tool from an end-of-life React version onto modern React.",
        "Built drag-and-drop interfaces and server-rendered pages in Next.js.",
      ],
      pm: [
        "Help plan the roadmap with internal stakeholders.",
        "Run sprint planning in Jira and track delivery on Kanban.",
        "Lead features end to end and mentor developers.",
        "Keep specs and decisions documented in Confluence.",
      ],
    },
  },
  {
    id: "myclassroom",
    role: "SDE-1",
    meta: "Myclassroom · Noida",
    year: "Sept 2021 – Nov 2022",
    points: {
      engineer: [
        "Built the post-login product interface and reusable React modules.",
        "Created lead-capture landing pages for AITS JEE and NEET campaigns.",
        "Integrated APIs and MoEngage analytics.",
      ],
      pm: [
        "Turned campaign goals into landing pages focused on sign-ups.",
        "Used analytics to see what students did after signing up.",
      ],
    },
  },
  {
    id: "mba",
    role: "MBA, IT Project Management",
    meta: "Amity University · First division with distinction",
    year: "2023 – 2025",
    points: {
      shared: [
        "Online degree, done on weekends alongside a full-time job.",
        "Final thesis: a survey on how teams manage projects.",
        "The business side of building: scope, people and tradeoffs.",
      ],
    },
  },
];

/** Quiet keyword line under Work: scannable stack, no icons or cards. */
export const toolset: ModeCopy = {
  engineer: "React · Next.js · TypeScript · Node.js · Postgres · Python",
  pm: "Roadmaps · Sprint planning · Jira · Kanban · Confluence · Mentoring",
};
