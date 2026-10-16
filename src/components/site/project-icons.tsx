import Image from 'next/image'
import { cn } from '@/lib/utils'

export type ProjectIconId = 'lery' | 'colete' | 'aresta'

const tile = 'block size-9 shrink-0 overflow-hidden rounded-[0.55rem]'

/** Aresta Studio mark: orange stepped blocks on near-black. */
function ArestaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn(tile, className)}>
      <rect width="64" height="64" fill="#0B0B0C" />
      <g transform="translate(8.25 13) scale(0.19)">
        <path
          d="M156.558 113.115H87.705L16.3936 183.606H86.0657L156.558 113.115Z"
          fill="url(#aresta-icon-g)"
        />
        <path
          d="M190.984 136.065H157.377L202.459 90.9835H126.23L51.6395 16.3933H157.377L233.607 90.9835L190.984 136.065Z"
          fill="#FD4802"
        />
      </g>
      <defs>
        <linearGradient
          id="aresta-icon-g"
          x1="125"
          y1="16.3933"
          x2="125"
          y2="183.606"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#972B01" />
          <stop offset="1" stopColor="#FD4802" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const VEST_PATH =
  'M12.3 6.6Q12.6 11.6 16 11.6Q19.4 11.6 19.7 6.6Q19.75 6 20.3 6H22.1Q22.68 6 22.72 6.6Q23 11.2 24.4 12.5Q25 13 25 13.7V24.2A2 2 0 0 1 23 26.2H9A2 2 0 0 1 7 24.2V13.7Q7 13 7.6 12.5Q9 11.2 9.28 6.6Q9.32 6 9.9 6H11.7Q12.26 6 12.3 6.6Z'

/** Colete mark: a training vest split in two halves — two teams, one piece. */
function ColeteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn(tile, className)}>
      <rect width="32" height="32" fill="#0b7a4b" />
      <defs>
        <clipPath id="colete-icon-l">
          <rect width="16" height="32" />
        </clipPath>
        <clipPath id="colete-icon-r">
          <rect x="16" width="16" height="32" />
        </clipPath>
      </defs>
      <path d={VEST_PATH} fill="#fff" clipPath="url(#colete-icon-l)" />
      <path
        d={VEST_PATH}
        fill="#fff"
        fillOpacity=".45"
        clipPath="url(#colete-icon-r)"
      />
    </svg>
  )
}

/** Lery mark: audio bars whose lower curve becomes a smile. */
function LeryIcon({ className }: { className?: string }) {
  return (
    <span className={cn(tile, 'bg-[#f4f9fc]', className)}>
      <Image
        src="/projects/lery/mark.png"
        alt=""
        width={192}
        height={192}
        className="size-full object-contain"
      />
    </span>
  )
}

const icons = {
  lery: LeryIcon,
  colete: ColeteIcon,
  aresta: ArestaIcon,
} satisfies Record<
  ProjectIconId,
  (props: { className?: string }) => React.JSX.Element
>

export function ProjectIcon({
  id,
  className,
}: {
  id: ProjectIconId
  className?: string
}) {
  const Icon = icons[id]
  return <Icon className={className} />
}
