import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import Stat from "./Stat";

export default function Stats() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleSetActiveSlide = (dir) => {
    if (dir === "left") {
      return activeSlide === 0
        ? setActiveSlide(slides.length - 1)
        : setActiveSlide(activeSlide - 1);
    }
    if (dir === "right") {
      return activeSlide === slides.length - 1
        ? setActiveSlide(0)
        : setActiveSlide(activeSlide + 1);
    }
  };

  const handleSetTouchStart = (e) => {
    if (e.clientX) setTouchStart(e.clientX);
    if (e.touches) setTouchStart(e.touches[0].clientX);
  };

  const handleSetTouchMove = (e) => {
    if (e.clientX) setTouchEnd(e.clientX);
    if (e.touches) setTouchEnd(e.touches[0].clientX);
  };

  const getTouchDiff = () => {
    return touchEnd && touchStart ? touchStart - touchEnd : 0;
  };

  const handleSwipe = () => {
    if (getTouchDiff() < 0 && Math.abs(getTouchDiff()) > swipeThreshold) {
      handleSetActiveSlide("left");
    }
    if (getTouchDiff() > 0 && Math.abs(getTouchDiff()) > swipeThreshold) {
      handleSetActiveSlide("right");
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const getSemiSlide = () => {
    return `translateX(calc(-${activeSlide * 100}% - ${getTouchDiff()}px))`;
  };

  const getSlideColumns = () => {
    return `repeat(${slides.length}, 100%)`;
  };

  return (
    <section className="container">
      <section className="slider">
        <span
          className="pointer"
          role="button"
          aria-pressed={true}
          onClick={() => handleSetActiveSlide("left")}
        >
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            size="lg"
            className="text__blue"
          />
        </span>
        <ul
          className="slides over__hidden width__100"
          style={{ gridTemplateColumns: getSlideColumns() }}
          onMouseDown={handleSetTouchStart}
          onMouseMove={handleSetTouchMove}
          onTouchStart={handleSetTouchStart}
          onTouchMove={handleSetTouchMove}
          onMouseUp={handleSwipe}
          onTouchEnd={handleSwipe}
          onMouseLeave={handleSwipe}
        >
          {slides.map((sl) => {
            return (
              <li
                className="slide width__100 flex__center pos__rel"
                style={{
                  transform: getSemiSlide(),
                }}
              >
                <Stat key={sl.id} stat={sl} />
              </li>
            );
          })}
        </ul>
        <span
          className="pointer"
          role="button"
          aria-pressed={true}
          onClick={() => handleSetActiveSlide("right")}
        >
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            size="lg"
            className="text__blue"
          />
        </span>
      </section>
    </section>
  );
}

const swipeThreshold = 60;

const slides = [
  {
    id: 0,
    heading: "Complete",
    result: 20,
  },
  {
    id: 1,
    heading: "Incomplete",
    result: 4,
  },
  {
    id: 2,
    heading: "Total",
    result: 24,
  },
];
