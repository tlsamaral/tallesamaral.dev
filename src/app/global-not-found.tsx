import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '404 — Talles Amaral',
  robots: { index: false, follow: false },
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="container-page flex min-h-svh flex-col justify-center gap-6 py-24">
          <p className="eyebrow">404</p>
          <h1 className="max-w-[16ch] text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.04em]">
            Page not found. · Página não encontrada.
          </h1>
          <p className="flex gap-6 text-lg">
            <a href="/en" className="link-underline">
              English
            </a>
            <a href="/pt" className="link-underline">
              Português
            </a>
          </p>
        </main>
      </body>
    </html>
  )
}
