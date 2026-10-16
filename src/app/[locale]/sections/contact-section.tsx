import { ArrowUpRightIcon, MailIcon } from 'lucide-react'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { socialIcons } from '@/components/site/brand-icons'
import { CopyButton } from '@/components/site/copy-button'
import { arrowNudge, buttonStyles } from '@/components/site/styles'
import { type SocialId, site, socials } from '@/content/site'
import { cn } from '@/lib/utils'

export function ContactSection({ t }: { t: Dictionary }) {
  const copy = t.contact

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-page pt-28 md:pt-40"
    >
      <div className="grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-8">
        <p data-reveal className="eyebrow md:col-span-3">
          <span className="text-faint">04</span>
          <span className="mx-2 text-faint">/</span>
          {copy.eyebrow}
        </p>

        <div className="md:col-span-9">
          <h2
            id="contact-title"
            data-reveal
            className="max-w-[16ch] text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.04em]"
          >
            {copy.title}
          </h2>
          <p
            data-reveal
            style={{ '--i': 1 } as React.CSSProperties}
            className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {copy.description}
          </p>

          <div
            data-reveal
            style={{ '--i': 2 } as React.CSSProperties}
            className="mt-10"
          >
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex max-w-full items-center gap-3 text-[clamp(1.25rem,3.4vw,2.25rem)] font-medium tracking-[-0.03em]"
            >
              <span className="link-underline truncate">{site.email}</span>
              <ArrowUpRightIcon
                aria-hidden="true"
                className={cn('size-6 shrink-0 text-brand', arrowNudge)}
              />
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className={buttonStyles.primary}>
                <MailIcon aria-hidden="true" className="size-4" />
                {copy.email}
              </a>
              <CopyButton
                value={site.email}
                label={copy.copy}
                copiedLabel={copy.copied}
              />
            </div>
          </div>

          <div
            data-reveal
            style={{ '--i': 3 } as React.CSSProperties}
            className="mt-16"
          >
            <p className="eyebrow">{copy.elsewhere}</p>
            <ul className="mt-3 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {(Object.keys(socials) as SocialId[]).map((id) => {
                const social = socials[id]
                const Icon = socialIcons[id]
                return (
                  <li key={id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full items-center gap-3 bg-surface px-4 py-4 transition-colors duration-200 hover:bg-subtle active:bg-subtle"
                    >
                      <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">
                          {social.label}
                        </span>
                        <span className="block truncate font-mono text-xs text-muted-foreground">
                          {social.handle}
                        </span>
                      </span>
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className={cn('size-4 text-faint', arrowNudge)}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
