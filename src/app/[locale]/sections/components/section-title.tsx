import clsx from 'clsx'

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2 className={clsx('text-2xl font-bold tracking-tighter', className)}>
      {children}
    </h2>
  )
}
