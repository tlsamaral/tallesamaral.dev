// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Talles Amaral',
    short_name: 'Talles Amaral',
    description:
      'Portfólio de Talles Amaral — desenvolvedor de software especializado em soluções modernas e performáticas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf8',
    theme_color: '#171717',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
