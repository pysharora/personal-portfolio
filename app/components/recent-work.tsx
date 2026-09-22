import { bestFit, recentWork } from "../data/portfolio";

const RecentWork = () => {
  return (
    <section
      id="recent-work"
      className="portfolio-section recent-work"
      aria-labelledby="recent-work-title"
    >
      <p className="index">
        03 / RECENT
        <br />
        WORK
      </p>

      <div className="section-copy">
        <h2 id="recent-work-title" className="section-title">
          Work samples,
          <span> screenshots </span>
          coming soon.
        </h2>
        <ul className="fit-strip" aria-label="Best fit for">
          {bestFit.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="section-grid">
          {recentWork.map((work) => (
            <article className="work-card" key={work.title}>
              <div
                className="work-visual"
                aria-label={`Screenshot placeholder for ${work.title}`}
              >
                <span>{work.visual}</span>
              </div>
              <p>{work.meta}</p>
              <h3>{work.title}</h3>
              <span>{work.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { RecentWork };
