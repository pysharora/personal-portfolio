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
      <details className="experience-details">
        <summary>
          <span className="experience-overview">
            <span className="experience-period">{period}</span>
            <span className="experience-role">{role}</span>
            <span className="experience-company">
              {company} · {location}
            </span>
          </span>
          <span className="experience-summary-copy">{detail}</span>
          <span className="experience-toggle">
            <span className="experience-toggle-closed">Read details</span>
            <span className="experience-toggle-open">Close details</span>
            <span aria-hidden="true" className="experience-toggle-mark">
              +
            </span>
          </span>
        </summary>
        <ul className="experience-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>
    </li>
  );
};

export { ExperienceItem };
