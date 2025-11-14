import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.scss";
import hotelMainImg from "../../assets/images/hero.jpg";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import API_BASE_URL from "../../config/api";

const Contact = () => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: ""
    });
    setSubmitStatus(null);
  };

  return (
    <div className={styles.contactPage}>
      <HeroSection
        title={t("contact.heroTitle")}
        breadcrumb={[{ label: t("contact.heroTitle") }]}
        bgImage={hotelMainImg}
        overlayOpacity={0.6}
      />

      <div className={styles.mainContainer}>
        {/* LEFT COLUMN: CONTACT FORM */}
        <div className={styles.leftCol}>
          <p className={styles.subHeading}>{t("contact.emailPrompt")}</p>
          <h2 className={styles.mainHeading}>{t("contact.mainHeading")}</h2>

          {submitStatus === "success" && (
            <div className={styles.successMessage}>
              ✅ {t("contact.successMessage") || "Your message has been sent successfully! We'll get back to you soon."}
            </div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>
              ❌ {t("contact.errorMessage") || "Failed to send message. Please try again."}
            </div>
          )}

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
                className={styles.formControl}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
                className={styles.formControl}
                required
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("contact.subject")}
                className={styles.formControl}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.phone")}
                className={styles.formControl}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.message")}
              className={styles.formControl}
              rows={6}
              required
            />

            <div className={styles.buttonsRow}>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? (t("contact.sending") || "Sending...") : t("contact.submit")}
              </button>
              <button 
                type="button" 
                className={styles.resetBtn}
                onClick={handleReset}
              >
                {t("contact.reset")}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: INFO */}
        <div className={styles.rightCol}>
          <p className={styles.subHeading}>{t("contact.needHelp")}</p>
          <h2 className={styles.mainHeading}>{t("contact.mainHeading")}</h2>
          <p className={styles.description}>{t("contact.description")}</p>

          <div className={styles.infoBoxes}>
            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-phone"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.phone")}</p>
                <p className={styles.infoValue}>+216 74 400 444</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-envelope"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.email")}</p>
                <p className={styles.infoValue}>
                  <a href="mailto:reservation@palaisroyal.com.tn">
                    reservation@palaisroyal.com.tn
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.iconBox}>
                <i className="pi pi-send"></i>
              </div>
              <div>
                <p className={styles.infoTitle}>{t("contact.address")}</p>
                <p className={styles.infoValue}>
                  Route Mahdia (Avenue Habib Bouguatfa), Sfax 3000, Tunisia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;