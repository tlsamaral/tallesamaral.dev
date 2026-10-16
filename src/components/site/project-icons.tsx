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

const LERY_BODY =
  'M164.141 0.0820028C170.948 -0.132072 177.274 -0.329024 182.468 5.05978C186.345 9.08215 187.975 15.7574 187.228 21.1434C186.459 26.6932 185.281 30.7802 188.594 35.9002C196.339 49.1197 212.072 51.5504 225.102 56.8447C243.978 64.5144 259.875 75.9407 274.015 90.4447C292.233 109.3 304.468 133.123 309.178 158.916C310.935 168.772 311.428 179.032 311.275 189.027C310.865 216.234 299.928 243.353 282.263 263.871C280.285 266.166 278.343 268.528 276.158 270.633C241.263 304.268 195.009 313.716 148.018 312.963C109.523 311.726 71.609 302.523 41.8307 276.796C10.46 249.693 -4.82824 207.248 1.35018 166.368C5.35363 141.025 16.316 117.291 33.0152 97.8127C47.3632 81.0894 66.1645 66.5832 86.2035 57.4562C93.6915 54.0459 101.565 52.3209 107.934 46.7357C113.184 42.1317 113.601 37.3749 115.849 31.2114C117.297 27.4789 120.669 22.3729 123.328 19.3879C131.786 9.89105 151.664 0.777078 164.141 0.0820028ZM156.541 292.016C197.135 292.133 239.438 279.843 266.588 247.728C286.753 223.879 292.068 194.093 288.123 163.651C285.265 141.622 272.64 119.931 257.43 104.161C230.684 77.2799 196.125 66.8869 158.903 67.2112C157.959 67.2194 156.348 67.2029 155.43 67.3112C112.509 68.9737 82.2029 78.3002 52.1527 110.783C32.1975 132.327 21.4882 160.838 22.3262 190.192C23.1317 211.286 32.24 232.569 45.538 248.781C71.703 280.678 116.689 292.601 156.541 292.016Z'

/** Lery mascot: cyan ring with the face (two eyes and a small mouth), on white. */
function LeryIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        tile,
        'grid place-items-center bg-white ring-1 ring-inset ring-black/10',
        className,
      )}
    >
      <svg viewBox="0 0 312 313" aria-hidden="true" className="size-[72%]">
        <path d={LERY_BODY} fill="#00F6ED" />
        <g fill="#00F6ED">
          <circle cx="82" cy="175" r="38.5" />
          <circle cx="228" cy="175" r="38.5" />
        </g>
        <path
          d="M140 221L155 205L170 221"
          stroke="#00F6ED"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
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
