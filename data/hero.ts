import type { Mode, ModeCopy } from "@/lib/mode";

export type HeadlineLine = {
  readonly before?: string;
  readonly highlight?: string;
  readonly after?: string;
};

export type HeroHeadline = {
  /** Plain-text reading of the headline, used as the accessible name. */
  readonly label: string;
  readonly lines: readonly HeadlineLine[];
};

export type HeroStat = {
  /** Number that counts up once the stat scrolls into view. */
  readonly countTo?: number;
  /** Text after the counted number, or the whole figure when nothing counts. */
  readonly figure: string;
  readonly label: string;
};

export const heroEyebrow: ModeCopy = {
  engineer: "Full-stack engineer · India · Remote",
  pm: "Product & delivery · MBA, IT Project Management",
};

export const heroHeadlineLead = "I build";

export const heroHeadline: Readonly<Record<Mode, HeroHeadline>> = {
  engineer: {
    label: "I build the thing right.",
    lines: [{ before: "the thing" }, { highlight: "right." }],
  },
  pm: {
    label: "I build the right thing.",
    lines: [{ before: "the ", highlight: "right" }, { before: "thing." }],
  },
};

export const heroIntro: ModeCopy = {
  engineer:
    "React, Next.js, Node and Postgres. Five years of shipping web products that hold up when real people use them.",
  pm: "Roadmaps, sprints and stakeholders, with an engineer's sense of what's actually buildable. An MBA built around a full-time job, not instead of one.",
};

export const heroStats: Readonly<Record<Mode, readonly HeroStat[]>> = {
  engineer: [
    { countTo: 5, figure: "+ yrs", label: "shipping web products" },
    { countTo: 40, figure: "+", label: "enterprise clients served" },
    { figure: "Full stack", label: "screens to servers" },
  ],
  pm: [
    { figure: "MBA", label: "IT project management, nights and weekends" },
    { figure: "Sprints", label: "planned and run in Jira" },
    { countTo: 40, figure: "+", label: "enterprise clients served" },
  ],
};
