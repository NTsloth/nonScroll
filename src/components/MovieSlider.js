import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MovieSlider.module.scss";

const MovieSlider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    swipe: false,
    touchMove: false,
    arrows: false,
    draggable: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleScroll = (e) => {
    if (Date.now() - lastScrollTime < 2000) {
      return;
    }

    setLastScrollTime(Date.now());

    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else if (e.deltaY < 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div
      className={styles.sliderContainer}
      onWheel={(e) => {
        e.preventDefault();
        handleScroll(e);
      }}
    >
      <Slider
        {...settings}
        initialSlide={currentSlide}
        ref={sliderRef}
        className={styles.touchpadSlider}
        fade={true}
        cssEase="linear"
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <img
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              className={styles.slide}
              draggable="false"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
