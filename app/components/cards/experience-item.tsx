import type { ExperienceEntry } from "@/data/portfolio";

const ExperienceItem = ({
  period,
  role,
  company,
  location,
  detail,
  points,
}: ExperienceEntry) => {
  return (
    <li>
      <div>
        <p className="experience-period">{period}</p>
        <h3>{role}</h3>
        <p className="experience-company">
          {company} · {location}
        </p>
      </div>
      <div>
        <p>{detail}</p>
        <ul className="experience-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export { ExperienceItem };
