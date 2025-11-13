import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  // Change language and persist it (no page reload needed)
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Hotel Palais Royal" />
      </Link>

      {/* Desktop Navigation */}
      <nav className={styles.navLinks}>
        <ul>
          <li><Link to="/">{t("navbar.home")}</Link></li>
          <li><Link to="/rooms">{t("navbar.rooms")}</Link></li>
          <li><Link to="/about">{t("navbar.about")}</Link></li>
          <li><Link to="/contact">{t("navbar.contact")}</Link></li>
        </ul>
      </nav>

      {/* Language Switcher (Desktop) */}
      <div className={styles.languageSwitcher}>
        <button 
          onClick={() => handleLanguageChange("en")} 
          className={`${styles.flagButton} ${i18n.language === 'en' ? styles.active : ''}`}
          aria-label="English"
        >
          <img 
            src="https://flagcdn.com/16x12/us.png"
            srcSet="https://flagcdn.com/32x24/us.png 2x, https://flagcdn.com/48x36/us.png 3x"
            width="24"
            height="16"
            alt="English" 
          />
        </button>
        <button 
          onClick={() => handleLanguageChange("fr")} 
          className={`${styles.flagButton} ${i18n.language === 'fr' ? styles.active : ''}`}
          aria-label="Français"
        >
          <img 
            src="https://flagcdn.com/16x12/fr.png"
            srcSet="https://flagcdn.com/32x24/fr.png 2x, https://flagcdn.com/48x36/fr.png 3x"
            width="24"
            height="16" 
            alt="Français" 
          />
        </button>
        <button 
          onClick={() => handleLanguageChange("ar")} 
          className={`${styles.flagButton} ${i18n.language === 'ar' ? styles.active : ''}`}
          aria-label="العربية"
        >
          <img 
            src="https://flagcdn.com/16x12/tn.png"
            srcSet="https://flagcdn.com/32x24/tn.png 2x, https://flagcdn.com/48x36/tn.png 3x"
            width="24"
            height="16" 
            alt="العربية" 
          />
        </button>
      </div>

      {/* Book Now Button */}
      <Link to="/booking" className={styles.bookNowBtn}>{t("navbar.bookNow")}</Link>

      {/* Hamburger menu */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuActive}
      >
        {menuActive ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <nav className={`${styles.navMobile} ${menuActive ? styles.active : ""}`}>
        <Link to="/" onClick={toggleMenu}>{t("navbar.home")}</Link>
        <Link to="/rooms" onClick={toggleMenu}>{t("navbar.rooms")}</Link>
        <Link to="/about" onClick={toggleMenu}>{t("navbar.about")}</Link>
        <Link to="/contact" onClick={toggleMenu}>{t("navbar.contact")}</Link>
        <Link to="/booking" className={styles.bookNowBtnMobile} onClick={toggleMenu}>{t("navbar.bookNow")}</Link>

        {/* Language Switcher in Mobile Menu */}
        <div className={styles.languageSwitcherMobile}>
          <button 
            onClick={() => handleLanguageChange("en")} 
            className={`${styles.flagButton} ${i18n.language === 'en' ? styles.active : ''}`}
            aria-label="English"
          >
            <img 
              src="https://flagcdn.com/16x12/us.png"
              srcSet="https://flagcdn.com/32x24/us.png 2x, https://flagcdn.com/48x36/us.png 3x"
              width="24"
              height="16"
              alt="English" 
            />
          </button>
          <button 
            onClick={() => handleLanguageChange("fr")} 
            className={`${styles.flagButton} ${i18n.language === 'fr' ? styles.active : ''}`}
            aria-label="Français"
          >
            <img 
              src="https://flagcdn.com/16x12/fr.png"
              srcSet="https://flagcdn.com/32x24/fr.png 2x, https://flagcdn.com/48x36/fr.png 3x"
              width="24"
              height="16" 
              alt="Français" 
            />
          </button>
          <button 
            onClick={() => handleLanguageChange("ar")} 
            className={`${styles.flagButton} ${i18n.language === 'ar' ? styles.active : ''}`}
            aria-label="العربية"
          >
            <img 
              src="https://flagcdn.com/16x12/tn.png"
              srcSet="https://flagcdn.com/32x24/tn.png 2x, https://flagcdn.com/48x36/tn.png 3x"
              width="24"
              height="16" 
              alt="العربية" 
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;