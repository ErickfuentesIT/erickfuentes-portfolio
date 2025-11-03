import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es/common.json";
import en from "./locales/en/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "es"],
  resources: {
    en: { common: en },
    es: { common: es },
  },
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
