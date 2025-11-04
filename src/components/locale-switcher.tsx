import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'

const locales = [
  {
    label: '🇺🇸 English',
    value: 'en',
  },
  {
    label: '🇧🇷 Português',
    value: 'pt',
  },
]

export function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  function switchLocale(locale: string) {
    if (locale === currentLocale) return
    const segments = pathname.split('/')
    segments[1] = locale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex flex-col gap-2 p-2">
      {locales.map((locale) => (
        <Button
          key={locale.value}
          variant="ghost"
          onClick={() => switchLocale(locale.value)}
        >
          {locale.label}
        </Button>
      ))}
    </div>
  )
}
