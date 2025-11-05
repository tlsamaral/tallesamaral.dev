/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
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
    default: 'Talles Amaral | Software Developer',
    template: '%s | Talles Amaral',
  },
  description:
    'Conheça o portfólio de Talles Amaral, desenvolvedor de software especializado em criar soluções modernas, performáticas e inovadoras.',
  metadataBase: new URL('https://www.tallesamaral.dev'),
  alternates: {
    canonical: 'https://www.tallesamaral.dev',
  },
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
    url: 'https://www.tallesamaral.dev',
    siteName: 'Talles Amaral | Software Developer',
    title: 'Talles Amaral | Software Developer',
    description:
      'Portfólio oficial de Talles Amaral, desenvolvedor especializado em soluções web modernas, rápidas e eficazes.',
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
    title: 'Talles Amaral | Software Developer',
    description:
      'Portfólio oficial de Talles Amaral, desenvolvedor especializado em soluções web modernas, rápidas e eficazes.',
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
        jobTitle: 'Software Developer',
        url: 'https://www.tallesamaral.dev',
        image: 'https://tallesamaral.dev/og-image.png',
        sameAs: [
          'https://linkedin.com/in/tallesamaral',
          'https://github.com/tlsamaral',
          'https://x.com/tlsamaral_',
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'Node.js',
          'TypeScript',
          'Software Engineering',
          'Web Development',
          'Frontend',
          'Backend',
          'UX/UI Design',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Talles Amaral | Software Developer',
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
        name: 'Talles Amaral | Software Developer',
        description:
          'Portfólio de Talles Amaral, desenvolvedor de software especializado em soluções web modernas, performáticas e inovadoras.',
        inLanguage: ['pt-BR', 'en-US'],
        publisher: {
          '@id': 'https://www.tallesamaral.dev/#person',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.tallesamaral.dev/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
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
        about: [
          'Ordena',
          'Auto Park System',
          'Flóreo',
          'Plataforma de Serviço Social',
        ],
        inLanguage: ['pt-BR', 'en-US'],
      },
    ],
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
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
