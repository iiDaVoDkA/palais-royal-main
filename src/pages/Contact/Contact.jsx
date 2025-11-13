import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.scss";
import hotelMainImg from "../../assets/images/hero.jpg";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactPage}>
      <HeroSection
        title={t("contact.heroTitle")}
        breadcrumb={[{ label: t("contact.heroTitle") }]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      <div className={styles.mainContainer}>
        {/* LEFT COLUMN: CONTACT FORM */}
        <div className={styles.leftCol}>
          <p className={styles.subHeading}>{t("contact.emailPrompt")}</p>
          <h2 className={styles.mainHeading}>{t("contact.mainHeading")}</h2>

          <form className={styles.contactForm}>
            <div className={styles.row}>
              <input
                type="text"
                placeholder={t("contact.name")}
                className={styles.formControl}
              />
              <input
                type="email"
                placeholder={t("contact.email")}
                className={styles.formControl}
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                placeholder={t("contact.subject")}
                className={styles.formControl}
              />
              <input
                type="text"
                placeholder={t("contact.phone")}
                className={styles.formControl}
              />
            </div>
            <textarea
              placeholder={t("contact.message")}
              className={styles.formControl}
              rows={6}
            />

            <div className={styles.buttonsRow}>
              <button type="submit" className={styles.submitBtn}>
                {t("contact.submit")}
              </button>
              <button type="reset" className={styles.resetBtn}>
                {t("contact.reset")}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: INFO */}
        <div className={styles.rightCol}>
          <p className={styles.subHeading}>{t("contact.needHelp")}</p>
          <h2 className={styles.mainHeading}>{t("contact.mainHeading")}</h2>
          <p className={styles.description}>{t("contact.description")}</p>

          <div className={styles.infoBoxes}>
            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-phone"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.phone")}</p>
                <p className={styles.infoValue}>+216 70 222 000</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-envelope"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.email")}</p>
                <p className={styles.infoValue}>
                  <a href="mailto:reservation@hotelpalaisroyal.com">
                    info@hotelpalaisroyal.com
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-send"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.address")}</p>
                <p className={styles.infoValue}>
                  Route Mahdia Km 1, 3099 Sfax, Tunisia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;