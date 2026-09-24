import { experience } from "@/data/portfolio";
import { ExperienceItem } from "../cards/experience-item";

const Experience = () => {
  return (
    <section
      id="experience"
      className="portfolio-section experience"
      aria-labelledby="experience-title"
    >
      <p className="index">
        04 / WORK
        <br />
        EXP
      </p>

      <div className="section-copy">
        <h2 id="experience-title" className="section-title">
          Not just code.
          <span> Context </span>
          too.
        </h2>
        <ul className="experience-list">
          {experience.map((item) => (
            <ExperienceItem key={item.role} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Experience };
