import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieSlider from "./MovieSlider";
import styles from "./MainContent.module.scss";

const realSlides = [
  {
    id: 1,
    imageUrl: "/images/img.webp",
    title: "Slide 1 Title",
    text: "Slide 1 Text",
    content: "Slide 1 Content",
    buttonLabel: "Learn More",
    buttonLink: "#",
  },
  {
    id: 2,
    imageUrl: "/images/img2.jpeg",
    title: "Slide 2 Title",
    text: "Slide 2 Text",
    content: "Slide 2 Content",
    buttonLabel: "Explore",
    buttonLink: "#",
  },
  {
    id: 3,
    imageUrl: "/images/img3.jpeg",
    title: "Slide 3 Title",
    text: "Slide 3 Text",
    content: "Slide 3 Content",
    buttonLabel: "Discover",
    buttonLink: "#",
  },
];

const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bannerContent, setBannerContent] = useState({
    title: "",
    text: "",
    content: "",
    buttonLabel: "",
    buttonLink: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setBannerContent(realSlides[0]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (slideIndex) => {
    setBannerContent(realSlides[slideIndex]);
  };

  return (
    <div className={styles.main}>
      {isLoading ? (
        <Loading />
      ) : (
        <MovieSlider
          slides={realSlides}
          bannerContent={bannerContent}
          onSlideChange={handleSlideChange}
        />
      )}
    </div>
  );
};

export default MainContent;
