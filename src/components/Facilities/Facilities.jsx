import React from "react";
import styles from "./Facilities.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faConciergeBell,
  faCarSide,
  faWifi,
  faUtensils,
  faCouch,
  faParking,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next"; // Import i18n translation hook

const iconData = [
  faConciergeBell,
  faCarSide,
  faWifi,
  faUtensils,
  faCouch,
  faParking,
];

const Facilities = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <section className={styles.facilitiesSection}>
      <p className={styles.subHeading}>{t("facilities.subHeading")}</p>
      <h2 className={styles.mainHeading}>{t("facilities.mainHeading")}</h2>

      <div className={styles.facilitiesGrid}>
        {iconData.map((icon, idx) => (
          <div className={styles.facilityCard} key={idx}>
            {/* FontAwesome Icon */}
            <FontAwesomeIcon icon={icon} className={styles.facilityIcon} />
            {/* Title and Description from translations */}
            <h3>{t(`facilities.items.${idx}.title`)}</h3>
            <p>{t(`facilities.items.${idx}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;