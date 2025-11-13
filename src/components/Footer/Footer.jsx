import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Column 1: About the hotel */}
        <div className={styles.aboutSection}>
          <h3>{t("footer.about.title")}</h3>
          <p>{t("footer.about.description")}</p>
        </div>

        {/* Column 2: Quick links */}
        <div className={styles.linksSection}>
          <h3>{t("footer.quickLinks.title")}</h3>
          <ul>
            <li><Link to="/">{t("footer.quickLinks.home")}</Link></li>
            <li><Link to="/rooms">{t("footer.quickLinks.rooms")}</Link></li>
            <li><Link to="/contact">{t("footer.quickLinks.contact")}</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact information */}
        <div className={styles.contactSection}>
          <h3>{t("footer.contact.title")}</h3>
          <p>{t("footer.contact.address")}</p>
          <p>{t("footer.contact.phone")}</p>
          <p>
            {t("footer.contact.email")}{" "}
            <a href="mailto:reservattion@hotelpalaisroyal.com">info@hotelpalaisroyal.com</a>
          </p>
        </div>

        {/* Social media icons */}
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/p/H%C3%B4tel-Palais-Royal-100062925625062/" target="_blank" rel="noreferrer">
            <i className="pi pi-facebook"></i> {t("footer.socialMedia.facebook")}
          </a>
          
          <a href="https://www.instagram.com/hotelpalaisroyalsfax/" target="_blank" rel="noreferrer">
            <i className="pi pi-instagram"></i> {t("footer.socialMedia.instagram")}
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className={styles.footerCopyright}>
        <p>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;