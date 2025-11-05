// app/manifest.ts
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Talles Amaral | Software Developer',
    short_name: 'Talles Amaral',
    description:
      'Portfólio de Talles Amaral — desenvolvedor de software especializado em soluções modernas e performáticas.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
