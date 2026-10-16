import type { Metadata } from 'next'
import { site } from '@/content/site'
import { i18n, type Locale } from './config'

/** Canonical + hreflang alternates for a path that exists in every locale. */
export function localizedAlternates(
  locale: Locale,
  path = '',
): Metadata['alternates'] {
  return {
    canonical: `${site.url}/${locale}${path}`,
    languages: Object.fromEntries([
      ...i18n.locales.map((l) => [
        l === 'pt' ? 'pt-BR' : 'en-US',
        `${site.url}/${l}${path}`,
      ]),
      ['x-default', `${site.url}/${i18n.defaultLocale}${path}`],
    ]),
  }
}

export const ogLocale: Record<Locale, string> = { pt: 'pt_BR', en: 'en_US' }

/** Child `openGraph`/`twitter` objects replace the root ones, so repeat the image. */
export const shareImage = {
  url: `${site.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: site.name,
}
