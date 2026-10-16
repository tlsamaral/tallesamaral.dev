'use client'

import { useEffect } from 'react'
import { Logomark } from './brand-icons'

/**
 * Curtain with the logo drawing itself. Whether it shows at all is decided
 * before first paint by `SPLASH_SCRIPT` (html[data-splash="show"]); this
 * component only handles skipping and cleanup.
 */
export function SplashScreen() {
  useEffect(() => {
    const root = document.documentElement
    if (root.dataset.splash !== 'show') return

    const skip = () => {
      if (root.dataset.splash === 'show') root.dataset.splash = 'skip'
    }
    // Safety net in case the animation never ends (e.g. tab in background).
    const done = window.setTimeout(() => {
      if (root.dataset.splash === 'show') root.dataset.splash = 'done'
    }, 1600)

    window.addEventListener('pointerdown', skip, { once: true })
    window.addEventListener('keydown', skip, { once: true })

    return () => {
      window.clearTimeout(done)
      window.removeEventListener('pointerdown', skip)
      window.removeEventListener('keydown', skip)
    }
  }, [])

  return (
    <div
      id="splash"
      aria-hidden="true"
      inert
      onAnimationEnd={(event) => {
        if (event.target !== event.currentTarget) return
        const root = document.documentElement
        if (root.dataset.splash === 'show') root.dataset.splash = 'done'
      }}
    >
      <Logomark animated className="h-14 w-auto text-foreground" />
    </div>
  )
}
