import { ImageResponse } from 'next/og'
import { LOGO_BODY, LOGO_LEG } from '@/components/site/brand-icons'
import { site } from '@/content/site'

export const SHARE_SIZE = { width: 1200, height: 630 }

interface ShareImageProps {
  eyebrow: string
  title: string
  subtitle: string
}

/** 1200×630 card in the site's own look: paper, ink and one blue accent. */
export function renderShareImage({
  eyebrow,
  title,
  subtitle,
}: ShareImageProps) {
  const host = site.url.replace('https://', '')

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#fafaf8',
        color: '#171717',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <svg
          width="52"
          height="44"
          viewBox="0 0 185 155"
          fill="#171717"
          role="img"
          aria-label={site.name}
        >
          <path d={LOGO_BODY} />
          <path d={LOGO_LEG} />
        </svg>
        <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
          {site.name}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 28,
            color: '#6b6b68',
            letterSpacing: 1.5,
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: '#2c5bd6',
            }}
          />
          {eyebrow}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 112,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 30,
            maxWidth: 940,
            fontSize: 38,
            lineHeight: 1.3,
            color: '#6b6b68',
          }}
        >
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '2px solid #e6e4df',
          paddingTop: 24,
          fontSize: 26,
          color: '#a3a29d',
        }}
      >
        <div>{host}</div>
        <div>github.com/tlsamaral · linkedin.com/in/tallesamaral</div>
      </div>
    </div>,
    SHARE_SIZE,
  )
}
