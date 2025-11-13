import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Rooms.module.scss";
import Rooms from "../../components/Rooms/Rooms";
import HeroSection from "../../components/HeroSection/HeroSection";
import hotelMainImg from "../../assets/images/hero.jpg";
import Footer from "../../components/Footer/Footer";

const RoomsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.roomsPage}>
      <HeroSection
        title={t("roomsPage.heroTitle")}
        breadcrumb={[
          { label: t("breadcrumb.home") },
          { label: t("breadcrumb.rooms") }
        ]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      <Rooms />
      <Footer />
    </div>
  );
};

export default RoomsPage;