"use client";

import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { TestimonialCard } from "./cards/testimonial-card";
import { Button } from "./ui/button";

const LINKEDIN_RECOMMENDATIONS =
  "https://www.linkedin.com/in/pysharora/details/recommendations/";

const TestimonialCarousel = () => {
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 5200,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
    },
    [autoplay],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const syncAutoplay = () => {
      if (motionPreference.matches) autoplay.stop();
      else autoplay.play();
    };

    syncAutoplay();
    motionPreference.addEventListener("change", syncAutoplay);

    return () => {
      autoplay.stop();
      motionPreference.removeEventListener("change", syncAutoplay);
    };
  }, [autoplay, emblaApi]);

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-viewport" ref={emblaRef}>
        <div className="testimonial-track">
          {testimonials.map((testimonial) => (
            <div
              className="testimonial-slide"
              key={`${testimonial.name}-${testimonial.date}`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-nav">
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label="Previous recommendation"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="secondary"
            aria-label="Next recommendation"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight aria-hidden="true" />
          </Button>
        </div>

        <span className="carousel-count" aria-live="polite">
          {String(selectedIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>

      <Button asChild variant="ghost" className="linkedin-recommendations-link">
        <a href={LINKEDIN_RECOMMENDATIONS} target="_blank" rel="noreferrer">
          See every recommendation on LinkedIn
          <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
};

export { TestimonialCarousel };
