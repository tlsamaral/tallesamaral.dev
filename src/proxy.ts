import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Lista de idiomas suportados
const locales = ['pt', 'en']

// Regex para ignorar arquivos estáticos
const PUBLIC_FILE = /\.(.*)$/

// Portuguese by default; English when the browser prefers it over Portuguese.
function preferredLocale(req: NextRequest) {
  const header = req.headers.get('accept-language')?.toLowerCase() ?? ''
  const ranked = header
    .split(',')
    .map((part) => part.trim().slice(0, 2))
    .filter((code) => locales.includes(code))
  return ranked[0] ?? 'pt'
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Ignorar arquivos estáticos e APIs
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (!hasLocale) {
    const url = req.nextUrl.clone()
    url.pathname = `/${preferredLocale(req)}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
