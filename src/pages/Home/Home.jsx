import React from "react";
import Hero from "../../components/Hero/Hero";
import BookingForm from "../../components/BookingForm/BookingForm";
import Rooms from "../../components/Rooms/Rooms";
import Facilities from "../../components/Facilities/Facilities";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.scss";
import HotelServices from "../../components/HotelServices/HotelServices";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <BookingForm />
      <Rooms />
      <Facilities />

      <HotelServices />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;