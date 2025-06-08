// next-seo.config.js
export default {
  defaultTitle: 'Talles Amaral | Software Developer',
  titleTemplate: '%s | Talles Amaral',
  description:
    'Conheça o portfólio de Talles Amaral, desenvolvedor de software especializado em criar soluções modernas, performáticas e inovadoras.',
  canonical: 'https://www.tallesamaral.dev',
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Talles Amaral',
    },
    {
      name: 'keywords',
      content:
        'Talles Amaral, Software Developer, Desenvolvedor Web, Portfólio, Frontend, Backend, Desenvolvedor Fullstack, JavaScript, React, Next.js, Node.js, Programador',
    },
    {
      name: 'google-site-verification',
      content: 'Mvu2b3bDia9rnivAfRqg2l8MMHtSMC9XlEmU4WMTnoE', // Substitua por seu código gerado pelo Google
    },
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
    handle: '@tlsamaral_',
    site: '@tlsamaral_',
    cardType: 'summary_large_image',
  },
}
