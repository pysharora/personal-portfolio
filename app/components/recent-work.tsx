import { bestFit, recentWork } from "../data/portfolio";
import { WorkCard } from "./cards/work-card";

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
            <WorkCard key={work.title} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { RecentWork };
