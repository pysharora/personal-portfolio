import { skillGroups } from "@/data/skills";
import { SkillCard } from "../cards/skill-card";
import { SkillPlayground } from "../interactive/skill-playground";

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills-heading">
        <p className="index">02 / SKILLS</p>
        <span className="skills-note text-symbol" aria-hidden="true">
          {"tool belt ↓\uFE0E"}
        </span>
      </div>
      <h2 id="skills-title">
        The skills to bring products{" "}
        <span className="skills-accent">to life.</span>
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
