import { TestimonialCarousel } from "../interactive/testimonial-carousel";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="portfolio-section testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <p className="index">
        05 / KIND
        <br />
        WORDS
      </p>
      <div className="section-copy testimonials-copy">
        <h2 id="testimonials-title" className="section-title">
          Trusted by the people
          <span> in the room.</span>
        </h2>
        <p className="recommendations-kicker">
          Recommendations from engineers, product leaders, and managers I have
          worked alongside.
        </p>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export { Testimonials };
