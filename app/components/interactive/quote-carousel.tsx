"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

type QuoteCarouselProps = {
  quotes: readonly Testimonial[];
};

/**
 * Scroll-snap carousel of recommendations: arrows or a swipe move between
 * quotes, and the live count keeps screen readers in step.
 */
const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const syncPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const nearest = cards.findIndex(
      (card) => card.offsetLeft >= track.scrollLeft - 8,
    );

    setActiveIndex(nearest < 0 ? Math.max(0, cards.length - 1) : nearest);
    setIsAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
  }, []);

  useEffect(() => {
    syncPosition();
    window.addEventListener("resize", syncPosition);
    return () => window.removeEventListener("resize", syncPosition);
  }, [syncPosition]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;

    track.scrollTo({
      left: card.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <div className="quotes">
      <div
        className="quote-track"
        ref={trackRef}
        onScroll={syncPosition}
        tabIndex={0}
        role="region"
        aria-label="Recommendations, scrollable"
      >
        {quotes.map((quote) => (
          <figure className="quote-card" key={quote.name}>
            <blockquote>
              {"“"}
              {quote.quote}
              {"”"}
            </blockquote>
            <figcaption>
              <b>{quote.name}</b>
              {quote.role}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="quote-controls">
        <button
          type="button"
          className="quote-arrow"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous recommendation"
        >
          <span aria-hidden="true">{"←"}</span>
        </button>
        <button
          type="button"
          className="quote-arrow"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={isAtEnd}
          aria-label="Next recommendation"
        >
          <span aria-hidden="true">{"→"}</span>
        </button>
        <p className="quote-count" aria-live="polite">
          {activeIndex + 1} / {quotes.length}
        </p>
      </div>
    </div>
  );
};

export { QuoteCarousel };
