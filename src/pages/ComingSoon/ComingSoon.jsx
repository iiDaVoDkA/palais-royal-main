import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ComingSoon.module.scss";
import Footer from "../../components/Footer/Footer";

const ComingSoon = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.comingSoonPage}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <i className="pi pi-clock" style={{ fontSize: '4rem' }}></i>
        </div>
        
        <h1>{t("comingSoon.title")}</h1>
        <p className={styles.subtitle}>{t("comingSoon.subtitle")}</p>
        
        <p className={styles.description}>
          {t("comingSoon.description")}
        </p>

        <div className={styles.actions}>
          <button 
            className={styles.primaryBtn}
            onClick={() => navigate('/')}
          >
            {t("comingSoon.backHome")}
          </button>
          <button 
            className={styles.secondaryBtn}
            onClick={() => navigate('/contact')}
          >
            {t("comingSoon.contactUs")}
          </button>
        </div>

        <div className={styles.socialLinks}>
          <p>{t("comingSoon.followUs")}</p>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/p/H%C3%B4tel-Palais-Royal-100062925625062/" target="_blank" rel="noreferrer">
              <i className="pi pi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/hotelpalaisroyalsfax/" target="_blank" rel="noreferrer">
              <i className="pi pi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;

