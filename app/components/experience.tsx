import { experience } from "../data/portfolio";

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
            <li key={item.role}>
              <div>
                <p className="experience-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">
                  {item.company} · {item.location}
                </p>
              </div>
              <div>
                <p>{item.detail}</p>
                <ul className="experience-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Experience };
