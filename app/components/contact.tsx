import { contactHref, cvHref } from "../data/contact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <p className="index">
        05 / HAVE
        <br />A PROJECT?
      </p>

      <div className="contact-panel">
        <h2 id="contact-title">
          Have a product, role, or idea worth building?
        </h2>
        <p>
          Best fit for full-stack SaaS roles, freelance MVPs, internal tools,
          dashboards, and product-heavy engineering work.
        </p>
        <div className="hero-links">
          <a className="text-link text-link-secondary" href={contactHref}>
            Start a conversation
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href={cvHref}
            target="_blank"
            rel="noreferrer"
          >
            Open CV
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact };
