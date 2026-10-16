import { i18n } from '@/app/i18n/config'
import { getDictionary } from '@/app/i18n/get-dictonary'
import { renderShareImage, SHARE_SIZE } from '@/lib/share-image'

export const alt = 'Talles Amaral — Links'
export const size = SHARE_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getDictionary(locale)

  return renderShareImage({
    eyebrow: t.meta.linksTitle,
    title: 'Talles Amaral',
    subtitle: t.links.bio,
  })
}
