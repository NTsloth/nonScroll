import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieSlider from "./MovieSlider";
import styles from "./MainContent.module.scss";

const realSlides = [
  {
    id: 1,
    imageUrl: "/images/img.webp",
    content: "Slide 1 contents",
  },
  { id: 2, imageUrl: "/images/img2.jpeg", content: "Slide 2 content" },
  { id: 3, imageUrl: "/images/img3.jpeg", content: "Slide 3 content" },
];

const MainContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.main}>
      {isLoading ? <Loading /> : <MovieSlider slides={realSlides} />}
    </div>
  );
};

export default MainContent;
