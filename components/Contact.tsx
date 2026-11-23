import Image from "next/image";
import { calendlyHref, contactHref, linkedinHref } from "@/data/contact";

const Contact = () => {
  return (
    <section
      className="poster-band"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="poster-wrap contact">
        <div className="contact-copy">
          <h2
            className="poster-display contact-title reveal"
            id="contact-title"
          >
            Got an idea, or a role <mark>in mind?</mark>
          </h2>

          <p className="contact-lead reveal">
            A messy idea is usually enough to start. Pick a time that works for
            you.
          </p>

          <div className="poster-btns reveal">
            <a
              className="poster-btn is-solid"
              href={calendlyHref}
              target="_blank"
              rel="noreferrer"
            >
              Book a 30-min call
            </a>
            <a className="poster-btn" href={contactHref}>
              Email me
            </a>
            <a
              className="poster-btn"
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="photo reveal">
          <Image
            src="/piyush.jpg"
            alt="Portrait of Piyush Arora"
            width={800}
            height={1000}
            sizes="(max-width: 800px) 86vw, 380px"
          />
          <figcaption>That&apos;s me. Hi.</figcaption>
        </figure>
      </div>
    </section>
  );
};

export { Contact };
