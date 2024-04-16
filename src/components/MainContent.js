import React, { useState, useEffect } from "react";
import MovieSlider from "./MovieSlider";
import Loading from "./Loading";
import styles from "./MainContent.module.scss";

const realSlides = [
  { id: 1, imageUrl: "/images/img.webp" },
  { id: 2, imageUrl: "/images/img2.jpeg" },
  { id: 3, imageUrl: "/images/img3.jpeg" },
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
