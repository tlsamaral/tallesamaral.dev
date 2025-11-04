import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Lista de idiomas suportados
const locales = ['pt', 'en']

// Regex para ignorar arquivos estáticos
const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
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
    url.pathname = `/pt${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
