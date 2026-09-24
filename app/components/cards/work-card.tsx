import type { WorkSample } from "@/data/portfolio";

const WorkCard = ({ title, meta, visual, description }: WorkSample) => {
  return (
    <article className="work-card">
      <div
        className="work-visual"
        role="img"
        aria-label={`Screenshot placeholder for ${title}`}
      >
        <span>{visual}</span>
      </div>
      <p>{meta}</p>
      <h3>{title}</h3>
      <span>{description}</span>
    </article>
  );
};

export { WorkCard };
