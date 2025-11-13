import React from "react";
import styles from "./HotelServices.module.scss";
import { useTranslation } from "react-i18next";

const servicesData = [
  {
    image: require("../../assets/images/conference-room/conf1.JPG"),
    reversed: false
  },
  {
    image: require("../../assets/images/resto/resto1.JPG"),
    reversed: true
  },
  {
    image: require("../../assets/images/sallon-de-the/coffe1.JPG"),
    reversed: false
  },
  {
    image: require("../../assets/images/roof/roof3.JPG"),
    reversed: true
  }
];

const HotelServices = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.servicesSection}>
      {servicesData.map((service, index) => {
        const data = t(`services.servicesList.${index}`, { returnObjects: true });

        return (
          <div
            className={
              service.reversed
                ? `${styles.serviceRow} ${styles.reversed}`
                : styles.serviceRow
            }
            key={index}
          >
            <div className={styles.imageWrapper}>
              <img src={service.image} alt={data.title} />
            </div>

            <div className={styles.textWrapper}>
              <p className={styles.subheading}>{data.subheading}</p>
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.description}>{data.description}</p>
              <button className={styles.btn}>{data.buttonText}</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HotelServices;