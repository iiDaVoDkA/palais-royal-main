import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { roomsData } from "../../data/roomsData";
import styles from "./RoomDetails.module.scss";
import hotelMainImg from "../../assets/images/hero.jpg";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import LazyImage from "../../components/LazyImage/LazyImage";
import { useTranslation } from "react-i18next";

const facilities = [
    { label: "roomDetails.facilities.airConditioner", icon: "pi pi-sun" },
    { label: "roomDetails.facilities.swimmingPool", icon: "pi pi-water" },
    { label: "roomDetails.facilities.gym", icon: "pi pi-heart-fill" },
    { label: "roomDetails.facilities.parking", icon: "pi pi-car" },
    { label: "roomDetails.facilities.security", icon: "pi pi-lock" },
    { label: "roomDetails.facilities.playground", icon: "pi pi-user" },
];

const RoomDetails = () => {
    const { t } = useTranslation();
    const { slug } = useParams();

    // Find the room by slug
    const room = roomsData.find((r) => r.slug === slug);
    const [selectedImg, setSelectedImg] = useState(room?.images[0]);

    // Fallback if no room found
    if (!room) {
        return (
            <div className={styles.roomDetailsPage}>
                <h2 style={{ textAlign: "center", marginTop: "2rem" }}>{t("roomDetails.roomNotFound")}</h2>
            </div>
        );
    }

    return (
    <div className={styles.roomDetailsPage}>
      <HeroSection
        title={t("roomDetails.heroTitle")}
        breadcrumb={[{ label: t("navbar.home") }, { label: t("navbar.rooms") }]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      <div className={styles.mainContainer}>
        {/* LEFT COLUMN: IMAGES & DESCRIPTION */}
        <div className={styles.leftColumn}>
          {/* Main Image */}
          <div className={styles.mainImage}>
            <LazyImage src={selectedImg} alt={room.title} />
          </div>

          {/* Thumbnails */}
          <div className={styles.thumbnails}>
            {room.images.map((imgSrc, idx) => (
              <LazyImage
                key={idx}
                src={imgSrc}
                alt={`${room.title} Thumb ${idx + 1}`}
                onClick={() => setSelectedImg(imgSrc)}
                className={selectedImg === imgSrc ? styles.activeThumbnail : ''}
              />
            ))}
          </div>

          <h2>{t("roomDetails.descriptionHeading")}</h2>
          <p>{room.description}</p>

          {/* Room Info */}
          {room.roomInfo && (
            <div className={styles.roomInfoBox}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t("roomDetails.roomSize")}</span>
                <span className={styles.infoValue}>{room.roomInfo.size}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t("roomDetails.beds")}</span>
                <span className={styles.infoValue}>{room.roomInfo.beds}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t("roomDetails.occupancy")}</span>
                <span className={styles.infoValue}>{room.roomInfo.occupancy}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>{t("roomDetails.view")}</span>
                <span className={styles.infoValue}>{room.roomInfo.view}</span>
              </div>
            </div>
          )}

          {/* Facilities */}
          <h3>{t("roomDetails.facilitiesHeading")}</h3>
          <div className={styles.facilitiesList}>
            {facilities.map((f, idx) => (
              <div key={idx} className={styles.facilityItem}>
                <i className={`${f.icon} ${styles.facilityIcon}`} />
                <span>{t(f.label)}</span>
              </div>
            ))}
          </div>
          

 {/* Share & Contact */}
<div className={styles.shareDetails}>
  <h4>{t("roomDetails.shareDetails.heading")}</h4>
  <div className={styles.socialIcons}>
  <a href="https://www.facebook.com/p/H%C3%B4tel-Palais-Royal-100062925625062/" target="_blank" rel="noreferrer">
            <i className="pi pi-facebook"></i> {t("footer.socialMedia.facebook")}
          </a>
          
          <a href="https://www.instagram.com/hotelpalaisroyalsfax/" target="_blank" rel="noreferrer">
            <i className="pi pi-instagram"></i> {t("footer.socialMedia.instagram")}
          </a>
  </div>
</div>

{/* Contact Form */}
<div className={styles.contactForm}>
  <h4>{t("roomDetails.contactForm.heading")}</h4>
  <form>
    <div className={styles.formRow}>
      <input type="text" placeholder={t("roomDetails.contactForm.name")} />
      <input type="email" placeholder={t("roomDetails.contactForm.email")} />
      <input type="phone" placeholder={t("roomDetails.contactForm.phone")} />
    </div>
    <textarea placeholder={t("roomDetails.contactForm.message")}></textarea>
    <button type="submit">{t("roomDetails.contactForm.submitButton")}</button>
  </form>
</div>

        </div>
        

        {/* RIGHT COLUMN: BOOKING FORM & COMPARE ROOMS */}
        <div className={styles.rightColumn}>
          {/* Booking Form */}
          <div className={styles.bookingForm}>
            <h3>{t("roomDetails.checkIn")}</h3>
            <input type="date" />
            <h3>{t("roomDetails.checkOut")}</h3>
            <input type="date" />
            <h3>{t("roomDetails.guests")}</h3>
            <select>
              <option value="1">{t("roomDetails.oneGuest")}</option>
              <option value="2">{t("roomDetails.twoGuests")}</option>
              <option value="3">{t("roomDetails.threeGuests")}</option>
            </select>
            <button>{t("roomDetails.bookNow")}</button>
          </div>

          {/* Compare Rooms - Show other available rooms */}
          <div className={styles.compareRoom}>
            <h4>{t("roomDetails.compareRoomsTitle")}</h4>
            <p className={styles.compareDescription}>
              {t("rooms.subheading")}
            </p>
            <div className={styles.compareList}>
              {roomsData
                .filter(r => r.slug !== slug)
                .slice(0, 3)
                .map((cRoom, idx) => (
                  <div key={idx} className={styles.compareItem}>
                    <LazyImage src={cRoom.images[0]} alt={cRoom.title} />
                    <div>
                      <p className={styles.compareName}>{cRoom.title}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default RoomDetails;