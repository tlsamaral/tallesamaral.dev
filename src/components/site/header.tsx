'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import type { Locale } from '@/app/i18n/config'
import { cn } from '@/lib/utils'
import { Logomark } from './brand-icons'
import { buttonStyles } from './styles'
import { ThemeToggle } from './theme-toggle'

export interface HeaderLabels {
  work: string
  experience: string
  about: string
  contact: string
  menu: string
  close: string
  switchTo: string
  theme: string
  home: string
}

const SECTIONS = ['work', 'experience', 'about', 'contact'] as const
type SectionId = (typeof SECTIONS)[number]

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const targets = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      // A thin band across the middle of the viewport decides the active section.
      { rootMargin: '-45% 0px -54% 0px' },
    )

    for (const el of targets) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Clear the indicator when scrolled back above the first section.
  useEffect(() => {
    const onScroll = () => {
      const first = document.getElementById(SECTIONS[0])
      if (first && first.getBoundingClientRect().top > window.innerHeight / 2) {
        setActive(null)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function swapLocale(pathname: string, target: Locale) {
  const segments = pathname.split('/')
  segments[1] = target
  return segments.join('/') || `/${target}`
}

export function Header({
  locale,
  labels,
}: {
  locale: Locale
  labels: HeaderLabels
}) {
  const pathname = usePathname()
  const active = useActiveSection()
  const scrolled = useScrolled()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)

  const otherLocale: Locale = locale === 'pt' ? 'en' : 'pt'
  const localeHref = swapLocale(pathname, otherLocale)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={cn(
        'enter-fade fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300',
        open
          ? 'border-border/70 bg-background'
          : scrolled
            ? 'border-border/70 bg-background/85 backdrop-blur-md'
            : 'border-transparent bg-background/0',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          aria-label={labels.home}
          className="group -ml-1 flex items-center gap-2.5 rounded-md px-1 py-1"
        >
          <Logomark className="h-[15px] w-auto text-foreground transition-transform duration-300 ease-(--ease-out-soft) group-hover:-rotate-6" />
          <span className="text-[0.9375rem] font-medium tracking-[-0.01em]">
            Talles Amaral
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((id) => {
              const isActive = active === id
              return (
                <li key={id} className="relative">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200',
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {labels[id]}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-subtle"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 420, damping: 36 }
                      }
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={localeHref}
            hrefLang={otherLocale}
            aria-label={labels.switchTo}
            title={labels.switchTo}
            className={cn(
              buttonStyles.ghost,
              'hidden font-mono text-xs uppercase tracking-wider md:inline-flex',
            )}
          >
            {otherLocale}
          </Link>
          <ThemeToggle label={labels.theme} />
          <button
            ref={toggleRef}
            type="button"
            className={cn(buttonStyles.icon, 'md:hidden')}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? labels.close : labels.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative size-4">
              <MenuIcon
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 size-4 transition-[opacity,transform] duration-200',
                  open ? 'scale-75 opacity-0' : 'scale-100 opacity-100',
                )}
              />
              <XIcon
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 size-4 transition-[opacity,transform] duration-200',
                  open ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id={menuId}
            aria-label="Mobile"
            className="overflow-hidden md:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="container-page flex flex-col pb-6 pt-2">
              {SECTIONS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.04 * i + 0.04,
                    duration: 0.24,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-hairline"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-2xl font-medium tracking-[-0.02em] active:opacity-60"
                  >
                    {labels[id]}
                    <span className="font-mono text-xs text-faint">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <Link
                  href={localeHref}
                  hrefLang={otherLocale}
                  className="inline-flex min-h-11 items-center text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {labels.switchTo}
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
