// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      Home: 'Home',
      'About us': 'About us',
      Explore: 'Explore',
      Contact: 'Contact',
      'Sign Up': 'Sign Up',
      // …add the rest of your UI strings here
    },
  },
  lo: {
    translation: {
      Home: 'ໜ້າຫຼັກ',
      'About us': 'ກ່ຽວກັບພວກເຮົາ',
      Explore: 'ຄົ້ນຫາ',
      Contact: 'ຕິດຕໍ່',
      'Sign Up': 'ລົງທະບຽນ',
      // …and the Lao versions
    },
  },
};

i18n
  .use(LanguageDetector)          // looks at localStorage & browser settings
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: { order: ['localStorage', 'navigator'] },
    interpolation: { escapeValue: false },
  });

export default i18n;
