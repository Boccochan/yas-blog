import i18next from 'i18next'

i18next.init({
  fallbackLng: 'en',
  resources: {
    ja: {
      translations: require('@/i18n/locales/ja.json'),
    },
    en: {
      translations: require('@/i18n/locales/en.json'),
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
})

i18next.languages = ['ja', 'en']

export default i18next
