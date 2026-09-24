import { MessageSquareQuote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

const TestimonialCard = ({
  name,
  role,
  date,
  relationship,
  quote,
}: Testimonial) => {
  return (
    <figure className="testimonial-card">
      <MessageSquareQuote size={24} strokeWidth={1.5} aria-hidden="true" />
      <blockquote>{quote}</blockquote>
      <figcaption>
        <strong>{name}</strong>
        <span>{role}</span>
        <small>
          {relationship} · {date}
        </small>
      </figcaption>
    </figure>
  );
};

export { TestimonialCard };
