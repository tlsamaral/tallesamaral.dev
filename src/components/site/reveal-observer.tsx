'use client'

import { useEffect } from 'react'

/**
 * Reveals `[data-reveal]` elements once as they scroll into view.
 *
 * Content is visible by default; elements are only hidden after this
 * component mounts (it sets `data-reveal-ready` on <html>). Anything already
 * in the viewport is marked visible first, so there is no flash on load.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-visible])',
      ),
    )

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      for (const el of elements) el.dataset.visible = ''
      return
    }

    const viewportHeight = window.innerHeight
    for (const el of elements) {
      if (el.getBoundingClientRect().top < viewportHeight * 0.92) {
        el.dataset.visible = ''
      }
    }

    root.dataset.revealReady = ''

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          ;(entry.target as HTMLElement).dataset.visible = ''
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    for (const el of elements) {
      if (!('visible' in el.dataset)) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
