/**
 * Copy for the boot loader and the "Pick your build" gate
 * (design-reference/gate.html is the source design).
 */

export const modeBootName = "Piyush Arora";
export const modeBootKicker = "Portfolio";

export const modeGateTopName = "Piyush Arora";
export const modeGateTopTagline = "Full-stack engineer with an MBA";

export const modeGateFootHint =
  "Two ways to see the same work. Switch anytime.";
export const modeGateSkipLabel = "Just show me everything";

export const modeChangeViewLabel = "Change view";

/**
 * Split into words for the halves' subheadline and the post-choice loader's
 * word-by-word build. Deliberately NOT the hero's "I build the thing
 * right." / "I build the right thing." — that toggle works on the real
 * site because you only ever see one version at a time; here, both halves
 * show at once, and two sentences that are just each other's words
 * reordered reads as a trick rather than two different things.
 */
export const modeHeadlineWords = {
  engineer: [
    { text: "Code" },
    { text: "first." },
    { text: "Then" },
    { text: "make" },
    { text: "it" },
    { text: "bulletproof.", mark: true },
  ],
  pm: [
    { text: "Roadmap" },
    { text: "first." },
    { text: "Then" },
    { text: "make" },
    { text: "it" },
    { text: "real.", mark: true },
  ],
} as const;

export const modeLoaderLabel = {
  engineer: "Loading the Engineer view",
  pm: "Loading the PM view",
} as const;

export const modeGateHalves = {
  engineer: {
    kicker: "Show me the",
    word: "Engineer",
    peek: [
      "React, Next.js, Node, Postgres",
      "What I built for 40+ enterprise clients",
      "Engineer CV",
    ],
    srLabel: "Enter as Engineer: code, systems, what I shipped.",
    key: "E",
  },
  pm: {
    kicker: "Show me the",
    word: "PM",
    peek: [
      "Roadmaps, sprints and stakeholders",
      "MBA in IT Project Management",
      "PM CV",
    ],
    srLabel: "Enter as PM: roadmaps, delivery, what I led.",
    key: "P",
  },
} as const;
