import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/common.json'
import tr from './locales/tr/common.json'
import az from './locales/az/common.json'
import ru from './locales/ru/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      az: { translation: az },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr', 'az', 'ru'],
    load: 'languageOnly',
    cleanCode: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

// keep <html lang> in sync
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', i18n.resolvedLanguage || 'en')
  i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng)
  })
}

export default i18n
