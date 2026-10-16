import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['pt', 'en']

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

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `/${preferredLocale(req)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, anything with a file extension (robots.txt,
  // llms.txt, sitemap.xml, icon.svg, ...) and the extension-less metadata
  // routes (apple-icon, icon).
  matcher: ['/((?!_next|api|icon|apple-icon|.*\\..*).*)'],
}
