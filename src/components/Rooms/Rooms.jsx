import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Rooms.module.scss";
import { useTranslation } from "react-i18next";
import LazyImage from "../LazyImage/LazyImage";

const roomImages = [
  require("../../assets/images/Rooms/double-standard/1.JPG"),
  require("../../assets/images/Rooms/double-sup/1.JPG"),
  require("../../assets/images/Rooms/single-standard/1.JPG"),
  require("../../assets/images/Rooms/single-sup/1.JPG"),
  require("../../assets/images/Rooms/suite/1.JPG"),
  require("../../assets/images/Rooms/triple/1.JPG")
];

const Rooms = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const roomList = t("rooms.roomList", { returnObjects: true });

  return (
    <div>
      <section className={styles.roomsSection}>
        <p className={styles.subHeading}>{t("rooms.subheading")}</p>
        <h2 className={styles.mainHeading}>{t("rooms.mainHeading")}</h2>

        <div className={styles.grid}>
          {roomList.map((room, idx) => (
            <div className={styles.roomCard} key={idx}>
              <LazyImage 
                src={roomImages[idx]} 
                alt={room.title} 
                className={styles.roomImage} 
              />

              <div className={styles.overlayText}>
                <h3>{room.title}</h3>

                <button
                  className={styles.detailsButton}
                  onClick={() => navigate(`/rooms/${room.slug}`)}
                >
                  {t("rooms.detailsButton")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;