import { MainDock } from '@/components/main-dock'
import type { Locale } from '../i18n/config'
import { getDictionary } from '../i18n/get-dictonary'

interface PageProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  const t = await getDictionary(locale)

  return (
    <main className="max-w-5xl mx-auto">
      <h1>{t.hero.title}</h1>

      <div className="w-full fixed inset-x-0 bottom-4 z-50">
        <MainDock />
      </div>
    </main>
  )
}
