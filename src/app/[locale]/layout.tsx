import { notFound } from 'next/navigation'
import { i18n } from '../i18n/config'
import { isLocale } from '../i18n/get-dictonary'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return <div lang={locale === 'pt' ? 'pt-BR' : 'en'}>{children}</div>
}
