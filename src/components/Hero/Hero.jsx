import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import heroImg from "../../assets/images/hero.jpg"; 

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>{t("hero.heading")}</h1>
        <p>{t("hero.subtitle")}</p>
        <Link to="/rooms" className={styles.heroButton}>{t("hero.button")}</Link>
      </div>
    </section>
  );
};

export default Hero;