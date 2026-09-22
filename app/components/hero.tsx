import { contactHref } from "../data/contact";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-top">
        <p className="eyebrow">
          <span className="dot" aria-hidden="true" />
          REACT · NEXT.JS · NODE · PYTHON · SAAS + MVP BUILDS
        </p>

        <span className="hero-status" aria-hidden="true">
          INDIA / {new Date().getFullYear()} / REMOTE
        </span>
      </div>

      <div className="hero-heading-wrap">
        <h1 id="intro" aria-label="I make things on the internet.">
          <span className="hero-line">I make things</span>
          <span className="hero-line">on the</span>
          <span className="hero-line hero-internet">internet.</span>
        </h1>

        <span className="hero-note" aria-hidden="true">
          mostly useful ones
        </span>

        <div className="hero-tv" aria-hidden="true">
          <div className="hero-tv-screen">
            <span>BUILD</span>
            <span>SHIP</span>
          </div>
          <div className="hero-tv-controls">
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="intro-row">
        <p className="index">
          01 / WHO’S
          <br />
          THIS GUY?
        </p>

        <div className="intro-copy">
          <div className="intro-content">
            <div className="intro-text">
              <p className="intro-lead">
                I turn messy ideas into web products people{" "}
                <em>actually use.</em>
              </p>

              <p className="muted">
                Hi, I'm Piyush, a full-stack engineer for teams that need more than
                pretty screens. I design the flow, wire the logic, ship the
                product, and keep the whole thing sturdy when actual humans
                start poking it.
              </p>

              <ul className="hero-proof" aria-label="Quick proof points">
                <li>5+ years</li>
                <li>40+ enterprise clients</li>
                <li>MBA product lens</li>
              </ul>

              <div className="hero-links">
                <a
                  className="text-link"
                  href="https://github.com/pysharora"
                  target="_blank"
                  rel="noreferrer"
                >
                  See what I build
                  <span aria-hidden="true">↗</span>
                </a>

                <a className="text-link text-link-secondary" href={contactHref}>
                  Hire me
                  <span aria-hidden="true">↗</span>
                </a>

                <span className="hero-side-note" aria-hidden="true">
                  proof + inbox ↑
                </span>
              </div>
            </div>

            <figure className="portrait-card">
              <div
                className="portrait-image"
                role="img"
                aria-label="Portrait of Piyush Arora"
              />
              <figcaption>
                <span>Piyush Arora</span>
                <code>Full-stack engineer</code>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="hero-footer" aria-hidden="true">
        <span>REACT / NEXT.JS / NODE / TYPESCRIPT</span>
        <span className="hero-footer-chaos">
          DISCOVERY → DESIGN → CODE → PROD → FIX → REPEAT
        </span>
        <span>SCROLL ↓</span>
      </div>
    </section>
  );
};

export { Hero };
