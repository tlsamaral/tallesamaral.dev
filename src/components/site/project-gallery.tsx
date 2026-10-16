'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  type ProjectGallery as Gallery,
  isDevicesSlide,
  type ProjectSlide,
} from '@/content/site'
import { cn } from '@/lib/utils'
import { DeviceFrame } from './device-frame'

interface ProjectGalleryProps {
  gallery: Gallery
  alts: string[]
  /** Accessible label for the thumbnail group, e.g. "Colete screenshots". */
  label: string
  /** Template for each thumbnail's label; `{n}` and `{total}` are replaced. */
  showLabel: string
  priority?: boolean
}

const SWIPE_THRESHOLD = 40

export function ProjectGallery({
  gallery,
  alts,
  label,
  showLabel,
  priority = false,
}: ProjectGalleryProps) {
  const [active, setActive] = useState(0)
  const thumbs = useRef<(HTMLButtonElement | null)[]>([])
  const pointerStart = useRef<number | null>(null)
  const total = gallery.images.length
  const dark = gallery.tone === 'dark'

  function go(index: number, focus = false) {
    const next = (index + total) % total
    setActive(next)
    if (focus) thumbs.current[next]?.focus()
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(active + 1, true)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(active - 1, true)
    }
  }

  return (
    <figure className="group/gallery">
      <div
        className={cn(
          'relative touch-pan-y overflow-hidden rounded-xl border border-border transition-[border-color,box-shadow] duration-300 group-hover/gallery:border-foreground/20 group-hover/gallery:shadow-[0_18px_40px_-24px_rgb(0_0_0/0.25)]',
          dark ? 'bg-[#141413]' : 'bg-subtle',
        )}
        style={{ aspectRatio: gallery.aspect }}
        onPointerDown={(event) => {
          if (total > 1 && event.pointerType !== 'mouse') {
            pointerStart.current = event.clientX
          }
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return
          const delta = event.clientX - pointerStart.current
          pointerStart.current = null
          if (Math.abs(delta) > SWIPE_THRESHOLD)
            go(active + (delta < 0 ? 1 : -1))
        }}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        {gallery.images.map((slide, i) => (
          <Slide
            key={slideKey(slide)}
            slide={slide}
            alt={alts[i] ?? ''}
            active={i === active}
            priority={priority && i === 0}
          />
        ))}

        {total > 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2 py-0.5 font-mono text-[0.6875rem] tabular-nums text-white/90 backdrop-blur-sm"
          >
            {String(active + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>
        )}
      </div>

      {total > 1 && (
        <fieldset
          aria-label={label}
          className="m-0 mt-3 flex min-w-0 gap-2 border-0 p-0"
          onKeyDown={onKeyDown}
        >
          {gallery.images.map((slide, i) => (
            <button
              key={slideKey(slide)}
              ref={(node) => {
                thumbs.current[i] = node
              }}
              type="button"
              aria-pressed={i === active}
              aria-label={showLabel
                .replace('{n}', String(i + 1))
                .replace('{total}', String(total))}
              tabIndex={i === active ? 0 : -1}
              onClick={() => go(i)}
              className={cn(
                'relative h-12 w-16 overflow-hidden rounded-md border transition-[border-color,opacity,transform] duration-200 ease-(--ease-out-soft) active:scale-95 sm:h-14 sm:w-[4.75rem]',
                i === active
                  ? 'border-foreground opacity-100'
                  : 'border-border opacity-55 hover:opacity-90',
                dark ? 'bg-[#141413]' : 'bg-subtle',
              )}
            >
              <SlideThumb slide={slide} />
            </button>
          ))}
        </fieldset>
      )}
    </figure>
  )
}

const slideKey = (slide: ProjectSlide) =>
  isDevicesSlide(slide) ? slide.screens[0].src : slide.src

const SLIDE_MOTION =
  'absolute inset-0 transition-[opacity,transform] duration-500 ease-(--ease-out-soft)'

function slideState(active: boolean) {
  return active
    ? 'scale-100 opacity-100 group-hover/gallery:scale-[1.012]'
    : 'pointer-events-none scale-[1.01] opacity-0'
}

function Slide({
  slide,
  alt,
  active,
  priority,
}: {
  slide: ProjectSlide
  alt: string
  active: boolean
  priority: boolean
}) {
  if (isDevicesSlide(slide)) {
    // Fewer devices can be taller; three need to share the stage width.
    const height = slide.screens.length >= 3 ? '76%' : '86%'
    return (
      <div
        role="img"
        aria-label={alt}
        aria-hidden={!active}
        className={cn(
          SLIDE_MOTION,
          'flex items-center justify-center gap-[3%]',
          slideState(active),
        )}
        style={{ background: slide.stage }}
      >
        {slide.screens.map((screen) => (
          <DeviceFrame
            key={screen.src}
            src={screen.src}
            width={screen.width}
            height={screen.height}
            priority={priority}
            style={{ height }}
          />
        ))}
      </div>
    )
  }

  return (
    <Image
      src={slide.src}
      alt={alt}
      width={slide.width}
      height={slide.height}
      priority={priority}
      sizes="(min-width: 1152px) 640px, (min-width: 1024px) 56vw, 100vw"
      aria-hidden={!active}
      draggable={false}
      style={{ objectPosition: slide.position }}
      className={cn(
        SLIDE_MOTION,
        'size-full select-none object-cover',
        slideState(active),
      )}
    />
  )
}

function SlideThumb({ slide }: { slide: ProjectSlide }) {
  const shot = isDevicesSlide(slide) ? slide.screens[0] : slide
  return (
    <Image
      src={shot.src}
      alt=""
      width={152}
      height={112}
      sizes="80px"
      style={{
        objectPosition: isDevicesSlide(slide) ? 'center 20%' : slide.position,
      }}
      className="size-full object-cover"
    />
  )
}
