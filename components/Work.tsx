import { Fragment } from "react";
import { toolset, workSamples } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";

const Work = () => {
  return (
    <section className="poster-band" id="work" aria-labelledby="work-title">
      <div className="poster-wrap">
        <h2 className="poster-display poster-heading reveal" id="work-title">
          Things I&apos;ve <mark>built.</mark>
        </h2>

        <div className="work-cards">
          {workSamples.map((sample) => (
            <TiltCard className="work-card reveal" key={sample.id}>
              <div className="work-art" aria-hidden="true">
                <span>
                  {sample.poster.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </span>
              </div>

              <div className="work-text">
                <small>{sample.eyebrow}</small>
                <h3>{sample.title}</h3>
                <p data-only="eng">{sample.description.engineer}</p>
                <p data-only="pm">{sample.description.pm}</p>
                {sample.href ? (
                  <a
                    className="work-link"
                    href={sample.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sample.linkLabel ?? "Visit site"}
                    <span aria-hidden="true">{" ↗︎"}</span>
                  </a>
                ) : null}
              </div>
            </TiltCard>
          ))}
        </div>

        <p className="toolset reveal">
          <span data-only="eng">{toolset.engineer}</span>
          <span data-only="pm">{toolset.pm}</span>
        </p>
      </div>
    </section>
  );
};

export { Work };
