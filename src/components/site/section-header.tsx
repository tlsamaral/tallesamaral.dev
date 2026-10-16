import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  index: string
  eyebrow: string
  title: string
  id?: string
  className?: string
}

/** Editorial section opener: index + label in the margin, title in the body. */
export function SectionHeader({
  index,
  eyebrow,
  title,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      data-reveal
      className={cn(
        'grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-8',
        className,
      )}
    >
      <p className="eyebrow md:col-span-3">
        <span className="text-faint">{index}</span>
        <span className="mx-2 text-faint">/</span>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="max-w-[22ch] text-balance text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.03em] md:col-span-9"
      >
        {title}
      </h2>
    </div>
  )
}
