import { contactHref, cvHref } from "../data/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <p className="index">
        06 / HAVE
        <br />A PROJECT?
      </p>

      <div className="contact-panel">
        <h2 id="contact-title">
          Building something that deserves <span>thoughtful</span> engineering?
        </h2>
        <p>
          I’m a strong fit for product-minded engineering roles and focused
          builds where clear UX, reliable systems, and steady progress all
          matter.
        </p>
        <div className="hero-links">
          <a className="text-link text-link-secondary" href={contactHref}>
            Email me
            <span className="text-symbol" aria-hidden="true">
              {"↗\uFE0E"}
            </span>
          </a>
          <a
            className="text-link"
            href={cvHref}
            target="_blank"
            rel="noreferrer"
          >
            Open CV
            <span className="text-symbol" aria-hidden="true">
              {"↗\uFE0E"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact };
