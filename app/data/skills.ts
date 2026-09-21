type SkillGroup = {
  title: string;
  technologies: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Engineering",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "APIs",
    ],
  },
  {
    title: "Product & UX",
    technologies: [
      "Product Thinking",
      "UX",
      "Design Systems",
      "Stakeholder Work",
    ],
  },
  {
    title: "Business & delivery",
    technologies: ["MBA", "Strategy", "Execution", "Testing", "Performance"],
  },
];
