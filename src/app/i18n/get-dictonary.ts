import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  pt: () => import('./pt/common.json').then((m) => m.default),
  en: () => import('./en/common.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
