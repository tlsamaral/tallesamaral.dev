import { MainDock } from '@/components/main-dock'
import type { Locale } from '../i18n/config'
import { getDictionary } from '../i18n/get-dictonary'
import { AboutSection } from './sections/about-section'
import { ExperiencesSection } from './sections/experiences-section'
import { HeroSection } from './sections/hero-section'

interface PageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  const t = await getDictionary(locale)

  return (
    <main className="max-w-2xl mx-auto sm:py-24 py-12 px-6 min-h-screen">
      <div className="flex flex-col gap-8">
        <HeroSection t={t} />

        <AboutSection t={t} />

        <ExperiencesSection t={t} />
      </div>

      <div className="w-full fixed inset-x-0 bottom-4 z-100">
        <MainDock />
      </div>
    </main>
  )
}
