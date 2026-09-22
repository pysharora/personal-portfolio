import { skillGroups } from "../data/skills";
import { SkillPlayground } from "./skill-playground";

const SkillCard = ({
  title,
  description,
  technologies,
  index,
}: {
  title: string;
  description: string;
  technologies: readonly string[];
  index: number;
}) => {
  return (
    <li className="skill-card">
      <div className="skill-card-top">
        <span className="skill-number">0{index + 1}</span>
        <span className="skill-mark" aria-hidden="true">
          ↘
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
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
      <div className="skills-heading">
        <p className="index">02 / SKILLS</p>
        <span className="skills-note" aria-hidden="true">
          tool belt ↓
        </span>
      </div>
      <h2 id="skills-title">
        Skills for getting <span className="skills-accent">products</span>{" "}
        shipped
      </h2>
      <ul className="skill-grid">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} {...group} index={index} />
        ))}
      </ul>

      <SkillPlayground />
    </section>
  );
};

export { Skills };
