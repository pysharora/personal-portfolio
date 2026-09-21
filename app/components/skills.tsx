import { skillGroups } from "../data/skills";

const SkillCard = ({
  title,
  technologies,
}: {
  title: string;
  technologies: readonly string[];
}) => {
  return (
    <li className="skill-card">
      <h3>{title}</h3>
      <ul className="skill-tags">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </li>
  );
};

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <p className="index">02 / MY EVERYDAY TOOLKIT</p>
      <h2 id="skills-title">The tools behind the work.</h2>
      <ul className="skill-grid">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </ul>
    </section>
  );
};

export { Skills };
