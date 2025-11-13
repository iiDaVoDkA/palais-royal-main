import React from "react";
import styles from "./BookingForm.module.scss";
import { useTranslation } from "react-i18next"; // Import translation hook

const BookingForm = () => {
  const { t } = useTranslation(); // Initialize t()

  return (
    <div className={styles.bookingForm}>
      <form>
        {/* Check In */}
        <div className={styles.formGroup}>
          <label htmlFor="checkin">{t("bookingForm.checkIn")}</label>
          <input type="date" id="checkin" />
        </div>

        {/* Check Out */}
        <div className={styles.formGroup}>
          <label htmlFor="checkout">{t("bookingForm.checkOut")}</label>
          <input type="date" id="checkout" />
        </div>

        {/* Submit Button */}
        <button type="submit">{t("bookingForm.availability")}</button>
      </form>
    </div>
  );
};

export default BookingForm;