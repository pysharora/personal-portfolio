import { linkedinHref } from "@/data/contact";
import { testimonials } from "@/data/testimonials";
import { QuoteCarousel } from "./QuoteCarousel";

const KindWords = () => {
  return (
    <section className="poster-band" id="words" aria-labelledby="words-title">
      <div className="poster-wrap">
        <h2 className="poster-display poster-heading reveal" id="words-title">
          Kind <mark>words.</mark>
        </h2>

        <QuoteCarousel quotes={testimonials} />

        <p className="poster-aside">
          <a href={linkedinHref} target="_blank" rel="noreferrer">
            Read all on LinkedIn &nbsp;
            <span aria-hidden="true">{" ↗︎"}</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export { KindWords };
