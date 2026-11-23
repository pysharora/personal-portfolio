import { engineerCvHref, pmCvHref } from "@/data/contact";
import { experience } from "@/data/portfolio";
import { ExperienceItem } from "../interactive/experience-item";

const Experience = () => {
  return (
    <section
      className="poster-band"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="poster-wrap">
        <h2
          className="poster-display poster-heading reveal"
          id="experience-title"
        >
          Experience.
        </h2>

        <div className="xp">
          {experience.map((entry) => (
            <ExperienceItem
              key={entry.id}
              role={entry.role}
              meta={entry.meta}
              year={entry.year}
              panelId={`xp-panel-${entry.id}`}
            >
              {"shared" in entry.points ? (
                <ul>
                  {entry.points.shared.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <>
                  <ul data-only="eng">
                    {entry.points.engineer.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul data-only="pm">
                    {entry.points.pm.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </ExperienceItem>
          ))}
        </div>

        <div className="cv-row">
          <a
            className="poster-btn is-solid"
            data-only="eng"
            href={engineerCvHref}
            download
          >
            Download Engineer CV
          </a>
          <a
            className="poster-btn is-solid"
            data-only="pm"
            href={pmCvHref}
            download
          >
            Download PM CV
          </a>
          <span className="cv-note">The CV follows the switch.</span>
        </div>
      </div>
    </section>
  );
};

export { Experience };
