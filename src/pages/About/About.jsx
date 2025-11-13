import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.scss";

// Image imports
import hotelMainImg from "../../assets/images/hero.jpg";
import dining1Img from "../../assets/images/food/petit-dej1.JPG";
import dining3Img from "../../assets/images/food/food-2.JPG";
import dining4Img from "../../assets/images/food/petit-dej3.JPG";
import foodSaladImg from "../../assets/images/food/food-salad.JPG";
import eventHallImg from "../../assets/images/salle-de-fete/2.JPG";
import eventHallImg2 from "../../assets/images/salle-de-fete/1.JPG";
import conferenceRoomImg from "../../assets/images/conference-room/conf1.JPG";
import conferenceRoomImg2 from "../../assets/images/conference-room/conf2.JPG";

import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import LazyImage from "../../components/LazyImage/LazyImage";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.aboutPage}>
      {/* HERO SECTION */}
      <HeroSection
        title={t("about.heroTitle")}
        breadcrumb={[{ label: t("navbar.home") }, { label: t("about.heroTitle") }]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      {/* BLOCK 1: HOTEL HIGHLIGHT */}
      <section className={styles.blockSection}>
        <div className={styles.blockOne}>
          <div className={styles.mediaContainer}>
            <LazyImage src={hotelMainImg} alt={t("about.heroTitle")} />
          </div>

          <div className={styles.contentBox}>
            <p className={styles.subHeading}>{t("about.subHeading")}</p>
            <h2 className={styles.mainHeading}>{t("about.mainHeading")}</h2>
            <p className={styles.paragraph}>
              {t("about.hotelIntro")}
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <i className="pi pi-star"></i>
                <span>{t("about.features.luxuryRooms")}</span>
              </div>
              <div className={styles.featureItem}>
                <i className="pi pi-utensils"></i>
                <span>{t("about.features.dining")}</span>
              </div>
            </div>

            <button className={styles.btn}>{t("about.ctaButton")}</button>
            <div className={styles.bookingNow}>
              <p>{t("about.bookingNow")}</p>
              <span>+216 70 222 000</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: GOURMET FOOD GALLERY */}
      <section className={styles.blockSection}>
        <div className={styles.blockTwo}>
          <div className={styles.gallery}>
            <LazyImage src={dining3Img} alt={t("about.culinaryTitle")} />
            <LazyImage src={foodSaladImg} alt={t("about.culinaryTitle")} />
            <LazyImage src={dining1Img} alt={t("about.culinaryTitle")} />
            <LazyImage src={dining4Img} alt={t("about.culinaryTitle")} />
          </div>

          <div className={styles.textBox}>
            <p className={styles.subHeading}>{t("about.culinaryTitle")}</p>
            <h2 className={styles.mainHeading}>
              {t("about.features.dining")}
            </h2>
            <p className={styles.paragraph}>
              {t("about.culinaryDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 3: SALLE POLYVALENTE - EVENTS & WEDDINGS */}
      <section className={styles.blockSection}>
        <div className={styles.blockTwo}>
          <div className={styles.gallery}>
            <LazyImage src={eventHallImg2} alt={t("services.servicesList.0.title")} />
            <LazyImage src={eventHallImg} alt={t("services.servicesList.0.title")} />
          </div>

          <div className={styles.textBox}>
            <p className={styles.subHeading}>{t("services.servicesList.0.subheading")}</p>
            <h2 className={styles.mainHeading}>{t("services.servicesList.0.title")}</h2>
            <p className={styles.paragraph}>
              {t("services.servicesList.0.description")}
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 4: CONFERENCE ROOM FOR BUSINESS MEETINGS */}
      <section className={styles.blockSection}>
        <div className={styles.blockTwo}>
          <div className={styles.gallery}>
            <LazyImage src={conferenceRoomImg} alt={t("services.servicesList.0.title")} />
            <LazyImage src={conferenceRoomImg2} alt={t("services.servicesList.0.title")} />
          </div>

          <div className={styles.textBox}>
            <p className={styles.subHeading}>{t("services.servicesList.0.subheading")}</p>
            <h2 className={styles.mainHeading}>{t("services.servicesList.0.title")}</h2>
            <p className={styles.paragraph}>
              {t("services.servicesList.0.description")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;