import React from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Link from "next/link";

const Carousel = ({ slides }) => {
  const [viewportRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map(({ slug, id, title, promotionURL }) => (
            <Link as={`/turmas/${slug}`} href="/turmas/[slug]" key={id}>
              <a className="embla__slide">
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={promotionURL}
                    alt={title}
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
