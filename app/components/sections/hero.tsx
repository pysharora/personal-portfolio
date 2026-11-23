import { calendlyHref } from "@/data/contact";
import { heroEyebrow, heroIntro, heroStats } from "@/data/hero";
import type { Mode } from "@/lib/mode";
import { CountUp } from "../interactive/count-up";
import { HeroHeadline } from "../interactive/hero-headline";

const modeAttribute: Record<Mode, "eng" | "pm"> = {
  engineer: "eng",
  pm: "pm",
};

const modes: readonly Mode[] = ["engineer", "pm"];

const Hero = () => {
  return (
    <section className="poster-wrap hero" aria-labelledby="hero-title">
      <p className="poster-label">
        <span data-only="eng">{heroEyebrow.engineer}</span>
        <span data-only="pm">{heroEyebrow.pm}</span>
      </p>

      <HeroHeadline />

      <div className="hero-row">
        <p className="hero-intro">
          <span data-only="eng">{heroIntro.engineer}</span>
          <span data-only="pm">{heroIntro.pm}</span>
        </p>

        <div className="poster-btns">
          <a className="poster-btn is-solid" href="#work">
            See my work
          </a>
          <a
            className="poster-btn"
            href={calendlyHref}
            target="_blank"
            rel="noreferrer"
          >
            Book a 30-min call
          </a>
        </div>
      </div>

      <div className="hero-stats">
        {modes.map((mode) =>
          heroStats[mode].map((stat) => (
            <div key={`${mode}-${stat.label}`} data-only={modeAttribute[mode]}>
              <b>
                {stat.countTo ? <CountUp to={stat.countTo} /> : null}
                {stat.figure}
              </b>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          )),
        )}
      </div>
    </section>
  );
};

export { Hero };
