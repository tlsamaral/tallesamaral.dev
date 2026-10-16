import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: site.name,
    short_name: site.name,
    description:
      'Full stack developer building web platforms, APIs and LLM-powered systems.',
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf8',
    theme_color: '#171717',
    categories: ['portfolio', 'technology'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
