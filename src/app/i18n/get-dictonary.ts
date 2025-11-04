import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./en/common.json').then((m) => m.default),
  pt: () => import('./pt/common.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale) => {
  const loadDictionary = dictionaries[locale]
  if (!loadDictionary) {
    console.log(locale, dictionaries)
    throw new Error(`No dictionary found for locale "${locale}"`)
  }

  return loadDictionary()
}
