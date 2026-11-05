import type { WorkSample } from "@/data/portfolio";

const WorkCard = ({
  title,
  meta,
  visual,
  description,
  image,
  href,
}: WorkSample) => {
  const visualBox = (
    <div
      className={image ? "work-visual work-visual--photo" : "work-visual"}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
      role="img"
      aria-label={
        image ? `Screenshot of ${title}` : `Visual summary: ${visual}`
      }
    >
      {!image && <span>{visual}</span>}
    </div>
  );

  if (href) {
    return (
      <a className="work-card" href={href} target="_blank" rel="noreferrer">
        {visualBox}
        <p>{meta}</p>
        <h3>{title}</h3>
        <span>{description}</span>
        <span className="work-card-visit text-symbol">{"Visit site ↗︎"}</span>
      </a>
    );
  }

  return (
    <article className="work-card">
      {visualBox}
      <p>{meta}</p>
      <h3>{title}</h3>
      <span>{description}</span>
    </article>
  );
};

export { WorkCard };
