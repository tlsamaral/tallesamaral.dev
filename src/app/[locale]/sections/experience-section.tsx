import type { Dictionary } from '@/app/i18n/get-dictonary'
import { SectionHeader } from '@/components/site/section-header'

export function ExperienceSection({ t }: { t: Dictionary }) {
  const copy = t.experience

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="container-page pt-28 md:pt-40"
    >
      <SectionHeader
        id="experience-title"
        index="02"
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <ol className="mt-12 md:mt-16">
        {copy.items.map((item, i) => (
          <li
            key={item.company}
            data-reveal
            style={{ '--i': i } as React.CSSProperties}
            className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <div className="md:col-span-3">
              <p className="font-mono text-xs tabular-nums text-muted-foreground">
                {item.period}
              </p>
              <p className="mt-1 text-sm text-faint">{item.location}</p>
            </div>

            <div className="md:col-span-9 lg:col-span-8">
              <h3 className="text-xl font-medium tracking-[-0.02em] md:text-2xl">
                {item.role}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {item.company}
                <span className="text-faint"> — {item.companyFull}</span>
              </p>

              <div className="mt-5 space-y-3 text-pretty leading-relaxed text-foreground/85">
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-6 space-y-4 border-l border-border pl-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.5625rem] top-[0.55em] size-2 rounded-full border border-border bg-background"
                    />
                    <p className="font-medium tracking-[-0.01em]">
                      {highlight.title}
                    </p>
                    <p className="mt-1 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">
                      {highlight.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-8 md:pt-10">
        <h3 data-reveal className="eyebrow md:col-span-3">
          {copy.stackTitle}
        </h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:col-span-9">
          {copy.stack.map((group, i) => (
            <div
              key={group.label}
              data-reveal
              style={{ '--i': i } as React.CSSProperties}
            >
              <p className="text-sm font-medium">{group.label}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
