import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { SectionHeader } from '@/components/site/section-header'
import { arrowNudge } from '@/components/site/styles'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export function AboutSection({ t }: { t: Dictionary }) {
  const copy = t.about

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container-page pt-28 md:pt-40"
    >
      <SectionHeader
        id="about-title"
        index="03"
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
        <div data-reveal className="md:col-span-3">
          <Image
            src={site.avatar}
            alt={site.name}
            width={160}
            height={160}
            className="size-20 rounded-full border border-border bg-subtle object-cover grayscale-[15%] md:size-28"
          />
        </div>

        <div className="space-y-5 md:col-span-9 lg:col-span-7">
          {copy.paragraphs.map((paragraph, i) => (
            <p
              key={paragraph}
              data-reveal
              style={{ '--i': i } as React.CSSProperties}
              className="text-pretty text-lg leading-relaxed text-foreground/85 md:text-xl md:leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-8 md:pt-10">
        <h3 data-reveal className="eyebrow md:col-span-3">
          {copy.educationTitle}
        </h3>

        <div className="md:col-span-9">
          <div
            data-reveal
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <p className="text-lg font-medium tracking-[-0.01em]">
              {copy.degree.title}
              <span className="font-normal text-muted-foreground">
                {' '}
                — {copy.degree.institution}
              </span>
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {copy.degree.period}
            </p>
          </div>

          <div
            data-reveal
            className="mt-4 flex flex-col gap-1 text-sm sm:flex-row sm:items-baseline sm:justify-between"
          >
            <p className="text-muted-foreground">{copy.languages}</p>
            <p className="eyebrow">{copy.languagesTitle}</p>
          </div>

          <p data-reveal className="eyebrow mt-10">
            {copy.coursesTitle}
          </p>
          <ul className="mt-3 border-b border-hairline">
            {copy.courses.map((course, i) => (
              <li
                key={`${course.title}-${course.institution}`}
                data-reveal
                style={{ '--i': i } as React.CSSProperties}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-0.5 border-t border-hairline py-3 text-sm sm:grid-cols-[1fr_12rem_3rem]"
              >
                <span className="font-medium">
                  {course.url ? (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1"
                    >
                      <span className="link-underline">{course.title}</span>
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className={cn(
                          'size-3.5 text-muted-foreground',
                          arrowNudge,
                        )}
                      />
                      <span className="sr-only">({copy.certificate})</span>
                    </a>
                  ) : (
                    course.title
                  )}
                </span>
                <span className="col-start-1 row-start-2 text-muted-foreground sm:col-start-2 sm:row-start-1">
                  {course.institution}
                </span>
                <span className="text-right font-mono text-xs text-faint">
                  {course.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
