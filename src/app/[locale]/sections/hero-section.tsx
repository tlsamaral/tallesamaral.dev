import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { LocalTime } from '@/components/site/local-time'
import { buttonStyles } from '@/components/site/styles'

export function HeroSection({ t }: { t: Dictionary }) {
  const { hero } = t

  return (
    <section
      aria-labelledby="hero-title"
      className="container-page flex min-h-[min(100svh,56rem)] flex-col justify-end pb-14 pt-32 md:pb-20"
    >
      <p
        className="eyebrow enter flex items-center gap-3"
        style={{ '--i': 0 } as React.CSSProperties}
      >
        <span
          aria-hidden="true"
          className="inline-block size-1.5 rounded-full bg-brand"
        />
        {hero.eyebrow}
      </p>

      <h1
        id="hero-title"
        className="mt-6 text-[clamp(2.25rem,8.4vw,7.25rem)] font-medium leading-[0.96] tracking-[-0.045em]"
      >
        {hero.lines.map((line, i) => (
          <span
            key={line}
            className={`enter block text-balance ${i === hero.lines.length - 1 ? 'text-muted-foreground' : ''}`}
            style={{ '--i': i + 1 } as React.CSSProperties}
          >
            {line}
          </span>
        ))}
      </h1>

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
        <div
          className="enter md:col-span-7 lg:col-span-6"
          style={{ '--i': 4 } as React.CSSProperties}
        >
          <p className="max-w-[56ch] text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground md:text-lg">
            {hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className={buttonStyles.primary}>
              {hero.primary}
              <ArrowDownIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover/btn:translate-y-0.5"
              />
            </a>
            <a href="#contact" className={buttonStyles.secondary}>
              {hero.secondary}
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        <dl
          className="enter grid grid-cols-2 gap-x-6 gap-y-5 self-end text-sm sm:grid-cols-4 md:col-span-4 md:col-start-9 md:grid-cols-1 md:gap-y-4"
          style={{ '--i': 5 } as React.CSSProperties}
        >
          {hero.meta.map((item) => (
            <div
              key={item.label}
              className="border-t border-hairline pt-3 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-4"
            >
              <dt className="eyebrow mb-1 lg:mb-0 lg:pt-0.5">{item.label}</dt>
              <dd className="text-foreground">{item.value}</dd>
            </div>
          ))}
          <div className="border-t border-hairline pt-3 lg:grid lg:grid-cols-[7rem_1fr] lg:gap-4">
            <dt className="eyebrow mb-1 lg:mb-0 lg:pt-0.5">GMT−3</dt>
            <dd className="text-foreground">
              <LocalTime />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
