import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en-US'
import cn from './zh-CN'

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
]

export const defaultLocale = localStorage.getItem('lang') || 'zh-CN'

const resources = {
  'en-US': { translation: { ...en } },
  'zh-CN': { translation: { ...cn } }
}

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLocale,
  interpolation: {
    escapeValue: false
  }
})

export default i18n
