import { ArrowUpRightIcon } from 'lucide-react'
import type { Locale } from '@/app/i18n/config'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { ProjectGallery } from '@/components/site/project-gallery'
import { SectionHeader } from '@/components/site/section-header'
import { arrowNudge } from '@/components/site/styles'
import {
  archiveProjects,
  type FeaturedProjectMeta,
  featuredProjects,
  type ProjectLink,
  resolveGallery,
} from '@/content/site'
import { cn } from '@/lib/utils'

type WorkCopy = Dictionary['work']

function linkLabel(link: ProjectLink, copy: WorkCopy) {
  const base = link.kind === 'repo' ? copy.repo : copy.live
  return link.note ? `${base} · ${link.note}` : base
}

function ProjectMedia({
  meta,
  copy,
  labels,
  locale,
  priority,
}: {
  meta: FeaturedProjectMeta
  copy: WorkCopy['items'][FeaturedProjectMeta['id']]
  labels: WorkCopy
  locale: Locale
  priority: boolean
}) {
  if (!meta.gallery) return null

  return (
    <ProjectGallery
      gallery={resolveGallery(meta.gallery, locale)}
      alts={copy.gallery}
      label={labels.galleryLabel.replace('{title}', copy.title)}
      showLabel={labels.showImage}
      priority={priority}
    />
  )
}

function FeaturedProject({
  meta,
  copy,
  labels,
  locale,
  index,
}: {
  meta: FeaturedProjectMeta
  copy: WorkCopy['items'][FeaturedProjectMeta['id']]
  labels: WorkCopy
  locale: Locale
  index: number
}) {
  const flipped = index % 2 === 1
  const number = String(index + 1).padStart(2, '0')

  return (
    <article
      aria-labelledby={`project-${meta.id}`}
      className="grid gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div
        data-reveal
        className={cn(
          'lg:sticky lg:top-24 lg:col-span-7 lg:self-start',
          flipped ? 'lg:col-start-6 lg:row-start-1' : 'lg:row-start-1',
        )}
      >
        <ProjectMedia
          meta={meta}
          copy={copy}
          labels={labels}
          locale={locale}
          priority={index === 0}
        />
      </div>

      <div
        data-reveal
        style={{ '--i': 1 } as React.CSSProperties}
        className={cn(
          'flex max-w-2xl flex-col lg:col-span-5',
          flipped ? 'lg:col-start-1 lg:row-start-1' : 'lg:row-start-1',
        )}
      >
        <p className="eyebrow flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-faint">{number}</span>
          <span>{copy.kind}</span>
          <span className="text-faint">{meta.year}</span>
        </p>
        <h3
          id={`project-${meta.id}`}
          className="mt-4 text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.03em]"
        >
          {copy.title}
        </h3>
        <p className="mt-2 text-pretty text-lg leading-snug text-foreground/90">
          {copy.summary}
        </p>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {copy.problem}
        </p>

        <ul className="mt-6 space-y-3 border-t border-hairline pt-5 text-[0.9375rem] leading-relaxed">
          {copy.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.7em] h-px w-3 shrink-0 bg-faint"
              />
              <span className="text-pretty text-foreground/85">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-6 grid gap-3 text-sm">
          <div className="grid grid-cols-[4.5rem_1fr] gap-3">
            <dt className="eyebrow pt-0.5">{labels.role}</dt>
            <dd className="text-muted-foreground">{copy.role}</dd>
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] gap-3">
            <dt className="eyebrow pt-0.5">{labels.stack}</dt>
            <dd className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
              {meta.stack.join(' · ')}
            </dd>
          </div>
        </dl>

        {meta.links.length === 0 && 'status' in copy && (
          <p className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand"
            />
            {copy.status}
          </p>
        )}

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 empty:hidden">
          {meta.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-1.5 text-sm font-medium"
              >
                <span className="link-underline">
                  {linkLabel(link, labels)}
                </span>
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className={cn('size-4 text-muted-foreground', arrowNudge)}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function WorkSection({ t, locale }: { t: Dictionary; locale: Locale }) {
  const copy = t.work

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="container-page pt-24 md:pt-32"
    >
      <SectionHeader
        id="work-title"
        index="01"
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <div className="mt-16 space-y-24 md:mt-20 md:space-y-36">
        {featuredProjects.map((meta, index) => (
          <FeaturedProject
            key={meta.id}
            meta={meta}
            copy={copy.items[meta.id]}
            labels={copy}
            locale={locale}
            index={index}
          />
        ))}
      </div>

      <div className="mt-28 md:mt-40 md:grid md:grid-cols-12 md:gap-8">
        <h3 data-reveal className="eyebrow mb-4 md:col-span-3 md:mb-0 md:pt-6">
          {copy.archiveTitle}
        </h3>
        <ul className="border-b border-border md:col-span-9">
          {archiveProjects.map((project, i) => {
            const item = copy.archive[project.id]
            return (
              <li
                key={project.id}
                data-reveal
                style={{ '--i': i } as React.CSSProperties}
                className="border-t border-border"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-3 grid grid-cols-[1fr_auto] gap-x-6 gap-y-1.5 rounded-lg px-3 py-5 transition-colors duration-200 hover:bg-subtle sm:grid-cols-[3.5rem_1fr_auto] md:py-6"
                >
                  <span className="hidden font-mono text-xs text-faint sm:block sm:pt-1.5">
                    {project.year}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium tracking-[-0.01em]">
                      {item.title}
                      <span className="ml-2 font-mono text-xs font-normal text-faint sm:hidden">
                        {project.year}
                      </span>
                    </span>
                    <span className="mt-1 block max-w-[60ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </span>
                    <span className="mt-2 block font-mono text-xs text-faint">
                      {project.stack.join(' · ')}
                    </span>
                  </span>
                  <span className="flex items-start gap-1.5 pt-1 text-xs text-muted-foreground">
                    <span className="hidden sm:inline">
                      {project.kind === 'repo' ? copy.repo : copy.live}
                    </span>
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className={cn(
                        'size-4 transition-colors group-hover:text-foreground',
                        arrowNudge,
                      )}
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
