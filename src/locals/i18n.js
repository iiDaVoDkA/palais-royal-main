import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import translationEN from "./en/translation.json";
import translationFR from "./fr/translation.json";
import translationAR from "./ar/translation.json";

const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English if not found

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ar: { translation: translationAR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Load from localStorage
    fallbackLng: "en",// Default language
    interpolation: { escapeValue: false } // No XSS protection required
  });

export default i18n;