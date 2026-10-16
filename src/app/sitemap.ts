import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { i18n } from './i18n/config'

const HREFLANG = { pt: 'pt-BR', en: 'en-US' } as const

const PAGES = [
  { path: '', priority: 1 },
  { path: '/links', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority }) => {
    const languages = {
      ...Object.fromEntries(
        i18n.locales.map((l) => [HREFLANG[l], `${site.url}/${l}${path}`]),
      ),
      'x-default': `${site.url}/${i18n.defaultLocale}${path}`,
    }

    return i18n.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: site.updated,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages },
    }))
  })
}
