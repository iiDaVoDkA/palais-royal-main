import React from "react";
import styles from "./Testimonials.module.scss";
import clientImg from "../../assets/images/testimonial-client.jpg";

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2>What Client's Say?</h2>
      <div className={styles.testimonialCard}>
        <div className={styles.clientImage}>
          <img src={clientImg} alt="Client" />
        </div>
        <div className={styles.testimonialText}>
          <div className={styles.stars}>
            {/* 5 stars, or dynamic rating */}
            ★★★★★
          </div>
          <p>
            "Un très bon accueil et une bonne prise en charge par le personnel. Belle décoration, je vous conseille le restaurant au rooftop, la nourriture est bonne ! Le personnel est agréable, souriant. L’établissement est propre."
          </p>
          <h4>Solweig</h4>
          <span>Guest Review - Booking</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;