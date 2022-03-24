import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import GlobalConfig from "../config";
import { initReactI18next } from "react-i18next";

import translationEn from "./en/common";
import translationPl from "./pl/common";

const resources = {
  en: {
    translation: translationEn,
  },
  pl: {
    translation: translationPl,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: GlobalConfig.DEFAULT_LANGUAGE,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
