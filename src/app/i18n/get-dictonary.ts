import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./en/common.json').then((m) => m.default),
  pt: () => import('./pt/common.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale) => {
  // 🔹 Protege contra chamadas erradas, tipo "favicon.ico"
  if (locale !== 'en' && locale !== 'pt') {
    console.warn(`[i18n] Invalid locale received: ${locale}`)
    return dictionaries['pt']() // fallback padrão
  }

  return dictionaries[locale]()
}
