import { PlusIcon } from 'lucide-react'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import { SectionHeader } from '@/components/site/section-header'

/**
 * Plain <details> disclosures: every answer is in the HTML (readable by
 * crawlers and assistants), and it works without JavaScript.
 */
export function FaqSection({ t }: { t: Dictionary }) {
  const copy = t.faq

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container-page pt-28 md:pt-40"
    >
      <SectionHeader
        id="faq-title"
        index="04"
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <div className="mt-12 md:mt-16 md:grid md:grid-cols-12 md:gap-8">
        <div className="border-b border-border md:col-span-9 md:col-start-4">
          {copy.items.map((item, i) => (
            <details
              key={item.q}
              data-reveal
              style={{ '--i': i } as React.CSSProperties}
              className="group border-t border-border"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium tracking-[-0.015em] transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty">{item.q}</h3>
                <PlusIcon
                  aria-hidden="true"
                  className="mt-1.5 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-(--ease-out-soft) group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[62ch] text-pretty pb-6 pr-10 leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
