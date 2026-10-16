import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { RevealObserver } from '@/components/site/reveal-observer'
import type { Locale } from '../i18n/config'
import { getDictionary, isLocale } from '../i18n/get-dictonary'
import { localizedAlternates, ogLocale, shareImage } from '../i18n/metadata'
import { AboutSection } from './sections/about-section'
import { ContactSection } from './sections/contact-section'
import { ExperienceSection } from './sections/experience-section'
import { HeroSection } from './sections/hero-section'
import { WorkSection } from './sections/work-section'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = await getDictionary(locale)

  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: localizedAlternates(locale),
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocale[locale],
      siteName: 'Talles Amaral',
      type: 'website',
      images: [shareImage],
      url: `/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tlsamaral_',
      title: t.meta.title,
      description: t.meta.description,
      images: [shareImage.url],
    },
  }
}

export default async function Home({ params }: PageProps) {
  const { locale: param } = await params
  const locale = param as Locale
  const t = await getDictionary(locale)

  return (
    <>
      <a
        href="#content"
        className="sr-only z-[60] rounded-full bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {t.nav.skip}
      </a>
      <Header locale={locale} labels={t.nav} />
      <RevealObserver />

      <main id="content" tabIndex={-1} className="outline-none">
        <span id="top" />
        <HeroSection t={t} />
        <WorkSection t={t} />
        <ExperienceSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  )
}
