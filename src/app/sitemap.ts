import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tallesamaral.dev'
  const locales = ['pt', 'en']

  // Páginas principais (sem duplicar manualmente)
  const pages = ['']

  // Gera cada URL em ambos idiomas + hreflang alternates
  const entries: MetadataRoute.Sitemap = pages.flatMap((path) =>
    locales.map((locale) => {
      const url = `${baseUrl}/${locale}${path}`
      const alternates = Object.fromEntries(
        locales.map((alt) => [alt, `${baseUrl}/${alt}${path}`]),
      )

      return {
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: path === '' ? 1 : 0.8,
        alternates: { languages: alternates },
      }
    }),
  )

  return entries
}
