import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  MailIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/app/i18n/config'
import { getDictionary, isLocale } from '@/app/i18n/get-dictonary'
import { localizedAlternates, ogLocale, shareImage } from '@/app/i18n/metadata'
import { Logomark, socialIcons } from '@/components/site/brand-icons'
import { arrowNudge } from '@/components/site/styles'
import { ThemeToggle } from '@/components/site/theme-toggle'
import { type SocialId, site, socials } from '@/content/site'
import { cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = await getDictionary(locale)
  const title = `${t.meta.linksTitle} — ${site.name}`

  return {
    title: { absolute: title },
    description: t.meta.linksDescription,
    alternates: localizedAlternates(locale, '/links'),
    openGraph: {
      title,
      description: t.meta.linksDescription,
      locale: ogLocale[locale],
      siteName: 'Talles Amaral',
      type: 'website',
      images: [shareImage],
      url: `/${locale}/links`,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tlsamaral_',
      title,
      description: t.meta.linksDescription,
      images: [shareImage.url],
    },
  }
}

interface HubLink {
  href: string
  label: string
  detail: string
  icon: React.ReactNode
  external: boolean
}

function LinkRow({ link, index }: { link: HubLink; index: number }) {
  const className =
    'group flex min-h-16 items-center gap-4 rounded-xl border border-border bg-surface px-4 py-3 transition-[border-color,background-color,transform] duration-200 ease-(--ease-out-soft) hover:border-foreground/20 hover:bg-background active:scale-[0.985]'

  const content = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-subtle text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        {link.icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium tracking-[-0.01em]">
          {link.label}
        </span>
        <span className="block text-pretty text-sm leading-snug text-muted-foreground">
          {link.detail}
        </span>
      </span>
      {link.external ? (
        <ArrowUpRightIcon
          aria-hidden="true"
          className={cn(
            'size-4 shrink-0 text-faint transition-colors group-hover:text-foreground',
            arrowNudge,
          )}
        />
      ) : (
        <ArrowRightIcon
          aria-hidden="true"
          className="size-4 shrink-0 text-faint transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      )}
    </>
  )

  return (
    <li className="enter" style={{ '--i': index + 3 } as React.CSSProperties}>
      {link.external ? (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      ) : (
        <Link href={link.href} className={className}>
          {content}
        </Link>
      )}
    </li>
  )
}

export default async function LinksPage({ params }: PageProps) {
  const { locale: param } = await params
  const locale = param as Locale
  const t = await getDictionary(locale)
  const copy = t.links

  const primary: HubLink[] = [
    {
      href: `/${locale}`,
      label: copy.portfolio,
      detail: copy.portfolioDetail,
      icon: <Logomark className="h-3 w-auto" />,
      external: false,
    },
    {
      href: `mailto:${site.email}`,
      label: copy.email,
      detail: site.email,
      icon: <MailIcon aria-hidden="true" className="size-4" />,
      external: false,
    },
  ]

  const projects: HubLink[] = [
    {
      href: 'https://github.com/tlsamaral/leryai',
      label: t.work.items.lery.title,
      detail: copy.leryDetail,
      icon: <span className="font-mono text-[0.6875rem]">01</span>,
      external: true,
    },
    {
      href: 'https://colete-app.vercel.app',
      label: t.work.items.colete.title,
      detail: copy.coleteDetail,
      icon: <span className="font-mono text-[0.6875rem]">02</span>,
      external: true,
    },
    {
      href: 'https://arestastudio.tech',
      label: t.work.items.aresta.title,
      detail: copy.arestaDetail,
      icon: <span className="font-mono text-[0.6875rem]">03</span>,
      external: true,
    },
    {
      href: 'https://github.com/tlsamaral/nexus-trace',
      label: t.work.items.nexustrace.title,
      detail: copy.nexusDetail,
      icon: <span className="font-mono text-[0.6875rem]">04</span>,
      external: true,
    },
  ]

  const profiles: HubLink[] = (Object.keys(socials) as SocialId[]).map((id) => {
    const Icon = socialIcons[id]
    return {
      href: socials[id].href,
      label: socials[id].label,
      detail: socials[id].handle,
      icon: <Icon className="size-4" />,
      external: true,
    }
  })

  const groups = [
    { title: null, links: primary },
    { title: copy.projects, links: projects },
    { title: copy.profiles, links: profiles },
  ]

  let offset = 0

  return (
    <main className="relative mx-auto flex min-h-svh w-full max-w-md flex-col px-4 pb-10 pt-6 sm:px-6 sm:pt-10">
      <div className="enter-fade flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="group -ml-2 inline-flex min-h-10 items-center gap-1.5 rounded-full px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          {copy.back}
        </Link>
        <ThemeToggle label={t.nav.theme} />
      </div>

      <header className="mt-10 flex flex-col items-center text-center">
        <div className="enter" style={{ '--i': 0 } as React.CSSProperties}>
          <Image
            src={site.avatar}
            alt={site.name}
            width={176}
            height={176}
            priority
            className="size-22 rounded-full border border-border bg-subtle object-cover"
          />
        </div>
        <h1
          className="enter mt-5 text-2xl font-medium tracking-[-0.03em]"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          {site.name}
        </h1>
        <p
          className="enter mt-2 max-w-[34ch] text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          {copy.bio}
        </p>
      </header>

      <div className="mt-10 space-y-8">
        {groups.map((group) => {
          const start = offset
          offset += group.links.length
          return (
            <section key={group.title ?? 'primary'}>
              {group.title && (
                <h2
                  className="eyebrow enter mb-3 px-1"
                  style={{ '--i': start + 3 } as React.CSSProperties}
                >
                  {group.title}
                </h2>
              )}
              <ul className="space-y-2.5">
                {group.links.map((link, i) => (
                  <LinkRow key={link.href} link={link} index={start + i} />
                ))}
              </ul>
            </section>
          )
        })}
      </div>

      <footer className="mt-auto pt-12 text-center">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-foreground"
        >
          <Logomark className="h-2.5 w-auto" />
          tallesamaral.dev
        </Link>
      </footer>
    </main>
  )
}
