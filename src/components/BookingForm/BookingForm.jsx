import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookingForm.module.scss";
import { useTranslation } from "react-i18next"; // Import translation hook

const BookingForm = () => {
  const { t } = useTranslation(); // Initialize t()
  const navigate = useNavigate();
  
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navigate to booking page with dates as query parameters
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    
    navigate(`/booking?${params.toString()}`);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.bookingForm}>
      <form onSubmit={handleSubmit}>
        {/* Check In */}
        <div className={styles.formGroup}>
          <label htmlFor="checkin">{t("bookingForm.checkIn")}</label>
          <input 
            type="date" 
            id="checkin" 
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={today}
          />
        </div>

        {/* Check Out */}
        <div className={styles.formGroup}>
          <label htmlFor="checkout">{t("bookingForm.checkOut")}</label>
          <input 
            type="date" 
            id="checkout" 
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || today}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">{t("bookingForm.availability")}</button>
      </form>
    </div>
  );
};

export default BookingForm;