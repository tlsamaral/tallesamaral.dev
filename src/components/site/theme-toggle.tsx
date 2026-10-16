'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { buttonStyles } from './styles'

export function ThemeToggle({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(buttonStyles.icon, 'relative', className)}
    >
      <SunIcon
        className="size-4 rotate-0 scale-100 transition-transform duration-300 ease-(--ease-out-soft) dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <MoonIcon
        className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 ease-(--ease-out-soft) dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </button>
  )
}
