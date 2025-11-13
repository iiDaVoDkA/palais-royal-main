import React from "react";
import styles from "./HeroSection.module.scss";

// A reusable hero banner that can display a title, breadcrumb, and background
// Accepts props: title, breadcrumb array, bgImage, overlayOpacity, etc.
const HeroSection = ({
  title = "Default Title",
  breadcrumb = [],
  bgImage = "/assets/images/hero.jpg",
  overlayOpacity = 0.6,
}) => {
  // Build the inline style for background
  const heroStyle = {
    background: `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity})), 
                 url('${bgImage}') center/cover no-repeat`,
  };

  return (
    <section className={styles.heroSection} style={heroStyle}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <div className={styles.breadcrumb}>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item.label}</span>
              {/* Only show separator if not the last item */}
              {idx < breadcrumb.length - 1 && (
                <span className={styles.separator}> &gt; </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;