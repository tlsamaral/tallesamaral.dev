import Link from 'next/link'
import type { Locale } from '@/app/i18n/config'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { site, socials } from '@/content/site'

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const year = new Date().getFullYear()

  return (
    <footer className="container-page pb-10 pt-24">
      <div className="flex flex-col gap-6 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}.{' '}
          <span className="text-faint">{t.footer.signature}</span>
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li>
            <Link
              href={`/${locale}/links`}
              className="link-underline py-1 hover:text-foreground"
            >
              {t.footer.links}
            </Link>
          </li>
          {Object.values(socials).map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline py-1 hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="link-underline py-1 hover:text-foreground"
            >
              {t.footer.top} ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
