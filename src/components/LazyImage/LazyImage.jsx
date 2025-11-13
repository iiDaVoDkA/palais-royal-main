import React, { useState, useEffect, useRef } from "react";
import styles from "./LazyImage.module.scss";

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = "blur",
  onClick,
  style = {}
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const currentImg = imgRef.current;
    if (!currentImg) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    observer.observe(currentImg);

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={`${styles.lazyImageContainer} ${className}`}
      onClick={onClick}
      style={style}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${styles.lazyImage} ${isLoaded ? styles.loaded : styles.loading}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

