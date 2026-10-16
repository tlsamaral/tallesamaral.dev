import type { Metadata } from 'next'
import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { JsonLd } from '@/components/site/json-ld'
import { RevealObserver } from '@/components/site/reveal-observer'
import { SplashScreen } from '@/components/site/splash-screen'
import { site } from '@/content/site'
import { homeGraph } from '@/lib/seo'
import type { Locale } from '../i18n/config'
import { getDictionary, isLocale } from '../i18n/get-dictonary'
import { localizedAlternates, ogLocale } from '../i18n/metadata'
import { AboutSection } from './sections/about-section'
import { ContactSection } from './sections/contact-section'
import { ExperienceSection } from './sections/experience-section'
import { FaqSection } from './sections/faq-section'
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
      type: 'profile',
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === 'pt' ? 'en' : 'pt'],
      siteName: site.name,
      url: `/${locale}`,
      firstName: 'Talles',
      lastName: 'Amaral',
      username: 'tlsamaral',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tlsamaral_',
      title: t.meta.title,
      description: t.meta.description,
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
      <JsonLd data={homeGraph(t, locale)} />
      <SplashScreen />
      <Header locale={locale} labels={t.nav} />
      <RevealObserver />

      <main id="content" tabIndex={-1} className="outline-none">
        <span id="top" />
        <HeroSection t={t} />
        <WorkSection t={t} locale={locale} />
        <ExperienceSection t={t} />
        <AboutSection t={t} />
        <FaqSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  )
}
