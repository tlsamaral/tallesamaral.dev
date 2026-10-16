import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Talles Amaral — Engenheiro de Software Full Stack',
    template: '%s — Talles Amaral',
  },
  description:
    'Talles Amaral é engenheiro de software full stack no Brasil e constrói plataformas web, APIs e sistemas de IA aplicada, da modelagem de dados à interface.',
  metadataBase: new URL('https://www.tallesamaral.dev'),
  authors: [{ name: 'Talles Amaral', url: 'https://www.tallesamaral.dev' }],
  keywords: [
    'Talles Amaral',
    'Software Developer',
    'Desenvolvedor Web',
    'Frontend',
    'Backend',
    'Fullstack',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'Programador',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Talles Amaral',
    images: [
      {
        url: 'https://tallesamaral.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfólio Talles Amaral Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tlsamaral_',
    images: ['https://tallesamaral.dev/og-image.png'],
  },
  verification: {
    google: 'Mvu2b3bDia9rnivAfRqg2l8MMHtSMC9XlEmU4WMTnoE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.tallesamaral.dev/#person',
        name: 'Talles Amaral',
        alternateName: 'Talles dos Amaral',
        jobTitle: 'Full Stack Developer',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Potim',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        url: 'https://www.tallesamaral.dev',
        image: 'https://tallesamaral.dev/og-image.png',
        sameAs: [
          'https://linkedin.com/in/tallesamaral',
          'https://github.com/tlsamaral',
          'https://x.com/tlsamaral_',
        ],
        knowsAbout: [
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'PostgreSQL',
          'Software Architecture',
          'Applied AI',
          'LLM Engineering',
          'Graph Analytics',
        ],
        worksFor: {
          '@type': 'CollegeOrUniversity',
          name: 'UNISAL - Centro Universitário Salesiano de São Paulo',
        },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'UNISAL - Centro Universitário Salesiano de São Paulo',
        },
        nationality: {
          '@type': 'Country',
          name: 'Brazil',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.tallesamaral.dev/#website',
        url: 'https://www.tallesamaral.dev',
        name: 'Talles Amaral',
        inLanguage: ['pt-BR', 'en-US'],
        publisher: {
          '@id': 'https://www.tallesamaral.dev/#person',
        },
      },
      {
        '@type': 'CreativeWorkSeries',
        '@id': 'https://www.tallesamaral.dev/#portfolio',
        name: 'Featured Projects',
        creator: {
          '@id': 'https://www.tallesamaral.dev/#person',
        },
        url: 'https://www.tallesamaral.dev/pt/',
        about: ['Lery AI', 'Boua', 'Colete', 'NexusTrace', 'Aresta Studio'],
        inLanguage: ['pt-BR', 'en-US'],
      },
    ],
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built on the server
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
