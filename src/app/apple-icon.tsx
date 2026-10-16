import { ImageResponse } from 'next/og'
import { LOGO_BODY, LOGO_LEG } from '@/components/site/brand-icons'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#171717',
      }}
    >
      <svg
        width="104"
        height="87"
        viewBox="0 0 185 155"
        fill="#fafaf8"
        role="img"
        aria-label="Talles Amaral"
      >
        <path d={LOGO_BODY} />
        <path d={LOGO_LEG} />
      </svg>
    </div>,
    size,
  )
}
