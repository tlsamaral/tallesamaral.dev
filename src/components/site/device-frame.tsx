import Image from 'next/image'
import { cn } from '@/lib/utils'

/** Logical iPhone screen the frame proportions are derived from. */
const SCREEN_W = 390
const SCREEN_H = 844
/** Bezel and corner radius as a share of the device width (same as Colete's landing). */
const BEZEL = 0.034
const RADIUS = 0.168

const screenWidthShare = 1 - BEZEL * 2
const deviceHeightShare = (SCREEN_H / SCREEN_W) * screenWidthShare + BEZEL * 2

/** width / height of the full device frame. */
export const DEVICE_ASPECT = 1 / deviceHeightShare

interface DeviceFrameProps {
  src: string
  width: number
  height: number
  alt?: string
  priority?: boolean
  sizes?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * Titanium iPhone frame around a real screenshot. Everything is sized in
 * container units (`cqw`), so it scales with whatever width it is given —
 * give the wrapper a width, or a height plus `DEVICE_ASPECT`.
 *
 * Screenshots from a modern iPhone already include the status bar and the
 * Dynamic Island, so only the bezel, side buttons and glass sheen are drawn.
 */
export function DeviceFrame({
  src,
  width,
  height,
  alt = '',
  priority,
  sizes = '(min-width: 1024px) 220px, 40vw',
  className,
  style,
}: DeviceFrameProps) {
  return (
    <div
      aria-hidden={alt === '' ? true : undefined}
      style={{ aspectRatio: DEVICE_ASPECT, ...style }}
      className={cn(
        'relative shrink-0 select-none [container-type:inline-size]',
        className,
      )}
    >
      {/* Side buttons */}
      <span className="absolute left-[-0.9cqw] top-[26cqw] h-[5cqw] w-[1cqw] rounded-l-[2px] bg-[#2a2a2c]" />
      <span className="absolute left-[-0.9cqw] top-[36cqw] h-[10cqw] w-[1cqw] rounded-l-[2px] bg-[#2a2a2c]" />
      <span className="absolute left-[-0.9cqw] top-[50cqw] h-[10cqw] w-[1cqw] rounded-l-[2px] bg-[#2a2a2c]" />
      <span className="absolute right-[-0.9cqw] top-[42cqw] h-[16cqw] w-[1cqw] rounded-r-[2px] bg-[#2a2a2c]" />

      {/* Titanium body */}
      <div
        className="relative"
        style={{
          padding: `${BEZEL * 100}cqw`,
          borderRadius: `${RADIUS * 100}cqw`,
          background:
            'linear-gradient(145deg,#4a4b4d 0%,#1f2021 22%,#0d0d0e 60%,#2b2c2e 100%)',
          boxShadow:
            '0 0 0 1px rgb(255 255 255 / 0.16), inset 0 0 0 1px rgb(255 255 255 / 0.14), inset 0 0 0 3px rgb(0 0 0 / 0.9), 0 40px 80px -36px rgb(0 0 0 / 0.7)',
        }}
      >
        <div
          className="relative overflow-hidden bg-black"
          style={{
            aspectRatio: `${SCREEN_W} / ${SCREEN_H}`,
            borderRadius: `${(RADIUS - BEZEL) * 100}cqw`,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            draggable={false}
            className="size-full object-cover object-top"
          />
          {/* Glass sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.07)_0%,rgb(255_255_255/0.02)_28%,transparent_42%)]" />
        </div>
      </div>
    </div>
  )
}
