import type { SVGProps } from 'react'
import type { SocialId } from '@/content/site'
import { cn } from '@/lib/utils'

type IconProps = SVGProps<SVGSVGElement>

export const LOGO_BODY =
  'M51.9529 127.156L108.854 54.9111L184 33.2837V0L0.154622 49.8506V79.4542L60.7664 64.8825L0 139.12L0.154622 154.306H105.297L83.0319 127.156H51.9529Z'
export const LOGO_LEG =
  'M99.5767 97.0937L143.489 154.199H184.127L120.76 70.0977L99.5767 97.0937Z'

interface LogomarkProps extends IconProps {
  /**
   * Draws the outline and fills it in when the page opens, and traces it
   * again while an ancestor with the `group/logo` class is hovered.
   * Styles live in globals.css (`.logomark-animated`).
   */
  animated?: boolean
}

export function Logomark({ animated, className, ...props }: LogomarkProps) {
  return (
    <svg
      viewBox="0 0 185 155"
      fill="currentColor"
      aria-hidden="true"
      className={cn(
        'overflow-visible',
        animated && 'logomark-animated',
        className,
      )}
      {...props}
    >
      <path className="lm-fill lm-body" d={LOGO_BODY} />
      <path className="lm-fill lm-leg" d={LOGO_LEG} />
      {animated && (
        <>
          {/* Intro: outline draws itself once, then fades as the fill arrives. */}
          <g className="lm-draw" fill="none" stroke="currentColor">
            <path pathLength="1" d={LOGO_BODY} />
            <path pathLength="1" d={LOGO_LEG} />
          </g>
          {/* Hover: a bright segment runs around both shapes. */}
          <g className="lm-trace" fill="none" stroke="currentColor">
            <path pathLength="1" d={LOGO_BODY} />
            <path pathLength="1" d={LOGO_LEG} />
          </g>
        </>
      )}
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

export const socialIcons: Record<
  SocialId,
  (props: IconProps) => React.JSX.Element
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
}
