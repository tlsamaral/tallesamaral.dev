import 'server-only'
import { i18n, type Locale } from './config'
import type en from './en/common.json'

export type Dictionary = typeof en

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./en/common.json').then((m) => m.default),
  pt: () => import('./pt/common.json').then((m) => m.default),
}

export function isLocale(value: string): value is Locale {
  return (i18n.locales as readonly string[]).includes(value)
}

export const getDictionary = async (locale: string) => {
  // Guard against non-locale segments (e.g. "favicon.ico")
  if (!isLocale(locale)) {
    return dictionaries[i18n.defaultLocale]()
  }

  return dictionaries[locale]()
}
