import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieSlider from "./MovieSlider";
import styles from "./MainContent.module.scss";

const realSlides = [
  {
    id: 1,
    imageUrl: "/images/mainBg.jpg",
    title: "Liquid Euphoria",
    text: "🍹 Liquid Euphoria: Where Every Sip Sparks Joy! 🍹",
    content:
      "Discover a world of sensational cocktails crafted to perfection. From timeless classics to innovative creations, each sip is an adventure. Join us and elevate your drinking experience to new heights. Cheers to unforgettable moments and unforgettable drinks! 🥂",
    buttonLabel: "Cheers & Discover",
    buttonLink: "#",
  },
  {
    id: 2,
    imageUrl: "/images/aboutUs.jpeg",
    title: "Liquid Euphoria",
    text: "🍹 Welcome to Liquid Euphoria! 🍹",
    content:
      "Step into our world of cocktail mastery! Explore our diverse menu, featuring classic and innovative blends crafted to perfection. Indulge in unforgettable flavors and moments with us. Cheers to Liquid Euphoria!",
    buttonLabel: "Cheers & Discover",
    buttonLink: "#",
  },
  {
    id: 3,
    imageUrl: "/images/mainBg3.jpeg",
    title: "Liquid Euphoria",
    text: "🍹 Liquid Euphoria Awaits! 🍹",
    content:
      "Savor the mastery of mixology with our diverse menu. From classic favorites to daring innovations, every sip promises delight. Join us for unforgettable moments and exceptional libations. Welcome to Liquid Euphoria!",
    buttonLabel: "Cheers & Discover",
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
