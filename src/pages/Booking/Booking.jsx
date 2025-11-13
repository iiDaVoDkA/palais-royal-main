import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Booking.module.scss";
import hotelMainImg from "../../assets/images/hero.jpg";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import { API_ENDPOINTS } from "../../config/api";

// Note: Pricing is now handled on the backend and quoted per request

// Simple helper to calculate date difference in nights
function dateDiffInNights(start, end) {
  const msInDay = 24 * 60 * 60 * 1000;
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (!start || !end || isNaN(startDate) || isNaN(endDate)) {
    return 0;
  }
  const diff = Math.floor((endDate - startDate) / msInDay);
  return diff > 0 ? diff : 0;
}

const Booking = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // ---------------------
  // 1) Personal Info
  // ---------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState(i18n.language || "en");
  const [currency, setCurrency] = useState("TND");

  // ---------------------
  // 2) Date Range
  // ---------------------
  const [checkIn, setCheckIn]   = useState("");
  const [checkOut, setCheckOut] = useState("");

  // ---------------------
  // 3) Rooms Array
  // ---------------------
  const [rooms, setRooms] = useState([
    {
      roomType: "economy-single",
      adults: 1,
      childUnder2: 0,
      child2to12: 0,
      child12to18: 0,
    },
  ]);

  // Add a new room block
  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([
        ...rooms,
        {
          roomType: "economy-single",
          adults: 1,
          childUnder2: 0,
          child2to12: 0,
          child12to18: 0,
        },
      ]);
    }
  };

  // Remove the last room block (if more than 1)
  const removeRoom = () => {
    if (rooms.length > 1) {
      setRooms(rooms.slice(0, rooms.length - 1));
    }
  };

  // Increment/decrement
  const handleIncrement = (index, field) => {
    setRooms((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: updated[index][field] + 1,
      };
      return updated;
    });
  };

  const handleDecrement = (index, field) => {
    setRooms((prev) => {
      const updated = [...prev];
      const currentValue = updated[index][field];
      if (currentValue > 0) {
        updated[index] = {
          ...updated[index],
          [field]: currentValue - 1,
        };
      }
      return updated;
    });
  };

  // Handle room type change
  const handleRoomTypeChange = (index, value) => {
    setRooms((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        roomType: value,
      };
      return updated;
    });
  };

  // ---------------------
  // 4) Special Requests
  // ---------------------
  const [requests, setRequests] = useState("");

  // ---------------------
  // 5) Calculate Summaries
  // ---------------------
  const nights = dateDiffInNights(checkIn, checkOut);

  // (Commented out so no cost is shown to the user,
  //  but you could still store in the backend if you wish.)
  /*
  const totalCost = rooms.reduce((acc, room) => {
    const rate = ROOM_RATES[room.roomType] || 0;
    return acc + rate * nights;
  }, 0);
  */

  // ---------------------
  // 6) On Submit
  // ---------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!checkIn || !checkOut) {
      alert(t("booking.errors.selectDates") || "Please select check-in and check-out dates");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert(t("booking.errors.invalidDates") || "Check-out date must be after check-in date");
      return;
    }

    setIsSubmitting(true);

    const reservationData = {
      firstName,
      lastName,
      email,
      phone,
      preferredLanguage,
      currency,
      checkIn,
      checkOut,
      rooms,
      requests,
      nights,
    };

    try {
      const response = await fetch(API_ENDPOINTS.RESERVATIONS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit reservation");
      }

      await response.json();

      alert(
        t("booking.successMessage") || 
        "Thank you for your inquiry! We will check availability and email you the details, including pricing. Once you receive our email, you can confirm your booking."
      );

      // Clear the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setRooms([
        {
          roomType: "economy-single",
          adults: 1,
          childUnder2: 0,
          child2to12: 0,
          child12to18: 0,
        },
      ]);
      setRequests("");

    } catch (err) {
      console.error(err);
      alert(
        t("booking.errorMessage") || 
        "Error submitting reservation (inquiry). Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.bookingPage}>
      <HeroSection
        title={t("navbar.bookNow") || "Book Now"}
        breadcrumb={[{ label: t("navbar.home") }, { label: t("navbar.bookNow") }]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      <div className={styles.mainContainer}>
        {/* LEFT: FORM */}
        <div className={styles.formColumn}>
          <h2>{t("booking.heroTitle")}</h2>
          <form className={styles.bookingForm} onSubmit={handleSubmit}>
            {/* PERSONAL INFO */}
            <div className={styles.section}>
              <h3>{t("booking.personalInfo")}</h3>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{t("booking.firstName")}</label>
                  <input
                    type="text"
                    placeholder={t("booking.firstName")}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{t("booking.lastName")}</label>
                  <input
                    type="text"
                    placeholder={t("booking.lastName")}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{t("booking.email")}</label>
                  <input
                    type="email"
                    placeholder={t("booking.email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{t("booking.phone")}</label>
                  <input
                    type="tel"
                    placeholder={t("booking.phone")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{t("booking.preferredLanguage")}</label>
                  <select
                    value={preferredLanguage}
                    onChange={(e) => setPreferredLanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="ar">العربية</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>{t("booking.currency")}</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="TND">Tunisian Dinar (TND)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">US Dollar ($)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CHECKIN / CHECKOUT */}
            <div className={styles.section}>
              <h3>{t("booking.stayDates")}</h3>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>{t("booking.checkIn")}</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>{t("booking.checkOut")}</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* ROOMS */}
            <div className={styles.section}>
              <h3>{t("booking.roomsAndGuests")}</h3>

              {/* Buttons to add / remove rooms */}
              <div className={styles.roomCountControls}>
                <button type="button" onClick={removeRoom} disabled={rooms.length <= 1}>
                  − {t("booking.removeRoom")}
                </button>
                <span>{rooms.length} {t("booking.room")}(s)</span>
                <button type="button" onClick={addRoom} disabled={rooms.length >= 5}>
                  + {t("booking.addRoom")}
                </button>
              </div>

              {/* Map over each room */}
              {rooms.map((room, index) => (
                <div key={index} className={styles.roomBlock}>
                  <h4>{t("booking.room")} {index + 1}</h4>
                  {/* Room Type */}
                  <div className={styles.formGroup}>
                    <label>{t("booking.roomType")}</label>
                    <select
                      value={room.roomType}
                      onChange={(e) => handleRoomTypeChange(index, e.target.value)}
                    >
                      <option value="economy-single">{t("booking.roomTypes.economy-single")}</option>
                      <option value="superior-single">{t("booking.roomTypes.superior-single")}</option>
                      <option value="economy-double">{t("booking.roomTypes.economy-double")}</option>
                      <option value="superior-double">{t("booking.roomTypes.superior-double")}</option>
                      <option value="triple">{t("booking.roomTypes.triple")}</option>
                      <option value="suite">{t("booking.roomTypes.suite")}</option>
                    </select>
                  </div>
                  {/* Adults */}
                  <div className={styles.counterRow}>
                    <label>{t("booking.adults")}</label>
                    <div className={styles.counterButtons}>
                      <button
                        type="button"
                        onClick={() => handleDecrement(index, "adults")}
                      >
                        −
                      </button>
                      <span>{room.adults}</span>
                      <button
                        type="button"
                        onClick={() => handleIncrement(index, "adults")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Child under 2 */}
                  <div className={styles.counterRow}>
                    <label>{t("booking.childrenUnder2")}</label>
                    <div className={styles.counterButtons}>
                      <button
                        type="button"
                        onClick={() => handleDecrement(index, "childUnder2")}
                      >
                        −
                      </button>
                      <span>{room.childUnder2}</span>
                      <button
                        type="button"
                        onClick={() => handleIncrement(index, "childUnder2")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Child 2-12 */}
                  <div className={styles.counterRow}>
                    <label>{t("booking.children2to12")}</label>
                    <div className={styles.counterButtons}>
                      <button
                        type="button"
                        onClick={() => handleDecrement(index, "child2to12")}
                      >
                        −
                      </button>
                      <span>{room.child2to12}</span>
                      <button
                        type="button"
                        onClick={() => handleIncrement(index, "child2to12")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Child 12-18 */}
                  <div className={styles.counterRow}>
                    <label>{t("booking.children12to18")}</label>
                    <div className={styles.counterButtons}>
                      <button
                        type="button"
                        onClick={() => handleDecrement(index, "child12to18")}
                      >
                        −
                      </button>
                      <span>{room.child12to18}</span>
                      <button
                        type="button"
                        onClick={() => handleIncrement(index, "child12to18")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SPECIAL REQUESTS */}
            <div className={styles.section}>
              <h3>{t("booking.specialRequests")}</h3>
              <textarea
                rows={4}
                placeholder={t("booking.specialRequests")}
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (t("booking.submitting") || "Submitting...") : (t("booking.sendInquiry") || "Send Inquiry")}
            </button>
          </form>
        </div>

        {/* RIGHT: SUMMARY (No price displayed) */}
        <div className={styles.infoColumn}>
          <div className={styles.infoBox}>
            <h3>{t("booking.summaryTitle")}</h3>
            <p>
              <strong>{t("booking.checkIn")}:</strong> {checkIn || t("booking.notSelected")}
            </p>
            <p>
              <strong>{t("booking.checkOut")}:</strong> {checkOut || t("booking.notSelected")}
            </p>
            <p>
              <strong>{t("booking.nights")}:</strong> {nights}
            </p>

            <hr />

            {rooms.map((room, i) => (
              <div key={i} className={styles.summaryRoom}>
                <h4>{t("booking.room")} {i + 1}</h4>
                <p>
                  <strong>{t("booking.type")}:</strong> {t(`booking.roomTypes.${room.roomType}`)}
                </p>
                <p>
                  <strong>{t("booking.adults")}:</strong> {room.adults}
                </p>
                <p>
                  <strong>{t("booking.childrenUnder2")}:</strong> {room.childUnder2}
                </p>
                <p>
                  <strong>{t("booking.children2to12")}:</strong> {room.child2to12}
                </p>
                <p>
                  <strong>{t("booking.children12to18")}:</strong> {room.child12to18}
                </p>
                <hr />
              </div>
            ))}

            <h4>{t("booking.note")}</h4>
            <p>
              {t("booking.noteText")}
            </p>

            <hr />
            <h4>{t("booking.policies")}</h4>
            <ul>
              <li>{t("booking.policy1")}</li>
              <li>{t("booking.policy2")}</li>
              <li>{t("booking.policy3")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;