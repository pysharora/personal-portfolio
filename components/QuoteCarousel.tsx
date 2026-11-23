"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

type QuoteCarouselProps = {
  quotes: readonly Testimonial[];
};

const AUTOPLAY_DELAY_MS = 6000;

/**
 * Scroll-snap carousel of recommendations: arrows or a swipe move between
 * quotes, both wrapping around at either end, and the live count keeps
 * screen readers in step. Advances on its own every few seconds, pausing on
 * hover, touch, or keyboard focus, and skipping entirely under reduced
 * motion.
 */
const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const activeIndexRef = useRef(activeIndex);
  const isAtEndRef = useRef(isAtEnd);
  const pausedRef = useRef(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    isAtEndRef.current = isAtEnd;
  }, [isAtEnd]);

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

  const scrollToIndex = useCallback((index: number) => {
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
  }, []);

  const goNext = useCallback(() => {
    // isAtEnd means the track is already scrolled as far right as it goes
    // (fewer cards fit on screen than exist), so the "next" card can never
    // become the leftmost one — asking to scroll to it just clamps in
    // place. Loop back to the start instead.
    scrollToIndex(isAtEndRef.current ? 0 : activeIndexRef.current + 1);
  }, [scrollToIndex]);

  const goPrev = useCallback(() => {
    scrollToIndex(
      activeIndexRef.current === 0
        ? quotes.length - 1
        : activeIndexRef.current - 1,
    );
  }, [scrollToIndex, quotes.length]);

  useEffect(() => {
    if (quotes.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      goNext();
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(id);
  }, [quotes.length, goNext]);

  return (
    <div
      className="quotes"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        pausedRef.current = false;
      }}
      onFocus={() => {
        pausedRef.current = true;
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          pausedRef.current = false;
        }
      }}
    >
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
          onClick={goPrev}
          aria-label="Previous recommendation"
        >
          <span aria-hidden="true">{"←"}</span>
        </button>
        <button
          type="button"
          className="quote-arrow"
          onClick={goNext}
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
