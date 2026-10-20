import type { Locale } from '@/app/i18n/config'

/**
 * Single source of truth for verified profile links and project URLs.
 * Translated copy lives in the i18n dictionaries; anything that is the same
 * in every language lives here.
 */

export const site = {
  name: 'Talles Amaral',
  alternateName: 'Talles dos Amaral',
  url: 'https://www.tallesamaral.dev',
  email: 'contact@tallesamaral.dev',
  avatar: 'https://github.com/tlsamaral.png',
  /** Last meaningful content change; used for sitemap and structured data. */
  updated: '2026-10-16',
  location: { locality: 'Potim', region: 'SP', country: 'BR' },
  employer: 'UNISAL – Centro Universitário Salesiano de São Paulo',
} as const

export type SocialId = 'github' | 'linkedin' | 'x'

export const socials: Record<
  SocialId,
  { label: string; handle: string; href: string }
> = {
  github: {
    label: 'GitHub',
    handle: '@tlsamaral',
    href: 'https://github.com/tlsamaral',
  },
  linkedin: {
    label: 'LinkedIn',
    handle: 'in/tallesamaral',
    href: 'https://linkedin.com/in/tallesamaral',
  },
  x: {
    label: 'X',
    handle: '@tlsamaral_',
    href: 'https://x.com/tlsamaral_',
  },
}

export type ProjectLinkKind = 'repo' | 'live'

export interface ProjectLink {
  kind: ProjectLinkKind
  href: string
  /** Optional qualifier shown next to the link, e.g. "frontend". */
  note?: string
}

export interface ProjectImage {
  src: string
  width: number
  height: number
  /** CSS object-position for the crop inside the frame. */
  position?: string
  /** Per-language versions of this image (e.g. covers with text in them). */
  srcByLocale?: Partial<Record<Locale, string>>
}

/** A phone-framed slide: real screenshots inside a titanium device frame. */
export interface DevicesSlide {
  type: 'devices'
  screens: ProjectImage[]
  /** CSS background of the stage behind the devices. */
  stage: string
}

export type ProjectSlide = (ProjectImage & { type?: 'image' }) | DevicesSlide

export interface ProjectGallery {
  /** Frame aspect ratio (width / height), shared by every slide. */
  aspect: number
  tone: 'light' | 'dark'
  images: ProjectSlide[]
}

/** Picks the right-language file for every slide that has one. */
export function resolveGallery(
  gallery: ProjectGallery,
  locale: Locale,
): ProjectGallery {
  return {
    ...gallery,
    images: gallery.images.map((slide) =>
      isDevicesSlide(slide)
        ? slide
        : { ...slide, src: slide.srcByLocale?.[locale] ?? slide.src },
    ),
  }
}

export const isDevicesSlide = (slide: ProjectSlide): slide is DevicesSlide =>
  slide.type === 'devices'

export type FeaturedProjectId =
  | 'lery'
  | 'postie'
  | 'boua'
  | 'colete'
  | 'nexustrace'
  | 'aresta'

export interface FeaturedProjectMeta {
  id: FeaturedProjectId
  year: string
  stack: string[]
  links: ProjectLink[]
  gallery: ProjectGallery | null
}

/** Cover that exists in each language; `src` is the default (pt). */
const localizedShot = (
  srcs: Record<Locale, string>,
  width: number,
  height: number,
  position = 'center top',
): ProjectImage => ({
  src: srcs.pt,
  srcByLocale: srcs,
  width,
  height,
  position,
})

const shot = (
  src: string,
  width: number,
  height: number,
  position = 'center top',
): ProjectImage => ({ src, width, height, position })

export const featuredProjects: FeaturedProjectMeta[] = [
  {
    id: 'lery',
    year: '2026',
    stack: [
      'TypeScript',
      'Fastify',
      'Gemini',
      'OpenTelemetry',
      'PostgreSQL',
      'Python',
      'React Native',
    ],
    links: [{ kind: 'repo', href: 'https://github.com/tlsamaral/leryai' }],
    gallery: {
      aspect: 4 / 3,
      tone: 'light',
      images: [
        localizedShot(
          {
            en: '/projects/lery/thumb-en.jpg',
            pt: '/projects/lery/thumb-pt.jpg',
          },
          1600,
          1200,
        ),
        localizedShot(
          {
            en: '/projects/lery/system-en.jpg',
            pt: '/projects/lery/system-pt.jpg',
          },
          1600,
          1200,
        ),
      ],
    },
  },
  {
    id: 'postie',
    year: '2026',
    stack: [
      'TypeScript',
      'Zod',
      'Gemini',
      'OpenAI',
      'Microsoft Graph',
      'GitHub API',
      'Vitest',
      'Docker',
    ],
    links: [{ kind: 'repo', href: 'https://github.com/tlsamaral/postie' }],
    gallery: {
      aspect: 4 / 3,
      tone: 'light',
      images: [
        localizedShot(
          {
            en: '/projects/postie/thumb-en.jpg',
            pt: '/projects/postie/thumb-pt.jpg',
          },
          1600,
          1200,
        ),
      ],
    },
  },
  {
    id: 'boua',
    year: '2026',
    stack: [
      'React Native',
      'Expo',
      'Fastify',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Zod',
      'Next.js',
    ],
    links: [],
    gallery: {
      aspect: 4 / 3,
      tone: 'light',
      images: [
        shot('/projects/boua/landing.jpg', 1600, 1200, 'center top'),
        {
          type: 'devices',
          stage:
            'radial-gradient(110% 80% at 50% 0%, #f3edff 0%, #e2d6fb 58%, #cdb8f7 100%)',
          screens: [
            { src: '/projects/boua/home-deck.jpg', width: 828, height: 1801 },
            { src: '/projects/boua/map-clean.jpg', width: 828, height: 1801 },
            { src: '/projects/boua/detail-zona.jpg', width: 828, height: 1801 },
          ],
        },
        {
          type: 'devices',
          stage:
            'radial-gradient(110% 80% at 50% 0%, #f3edff 0%, #e2d6fb 58%, #cdb8f7 100%)',
          screens: [
            {
              src: '/projects/boua/pulse-glass-absurdo.jpg',
              width: 828,
              height: 1801,
            },
            { src: '/projects/boua/espiada-2.jpg', width: 828, height: 1801 },
            { src: '/projects/boua/my-roles.jpg', width: 828, height: 1801 },
          ],
        },
        {
          type: 'devices',
          stage:
            'radial-gradient(110% 80% at 50% 0%, #f3edff 0%, #e2d6fb 58%, #cdb8f7 100%)',
          screens: [
            { src: '/projects/boua/plus-sheet.jpg', width: 828, height: 1801 },
            { src: '/projects/boua/create-role.jpg', width: 828, height: 1801 },
            { src: '/projects/boua/detail-bia.jpg', width: 828, height: 1801 },
          ],
        },
      ],
    },
  },
  {
    id: 'colete',
    year: '2026',
    stack: [
      'Next.js 16',
      'React 19',
      'Server Actions',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
    ],
    links: [{ kind: 'live', href: 'https://colete-app.vercel.app' }],
    gallery: {
      aspect: 4 / 3,
      tone: 'dark',
      images: [
        shot('/projects/colete/02.jpg', 1600, 1250),
        shot('/projects/colete/01.jpg', 1600, 1309, 'left top'),
        {
          type: 'devices',
          stage:
            'radial-gradient(110% 80% at 50% 0%, #effaf4 0%, #d6efe2 58%, #bfe3cf 100%)',
          screens: [
            {
              src: '/projects/colete/screen-live.jpg',
              width: 798,
              height: 1728,
            },
            {
              src: '/projects/colete/screen-home.jpg',
              width: 900,
              height: 1952,
            },
            {
              src: '/projects/colete/screen-ranking.jpg',
              width: 798,
              height: 1728,
            },
          ],
        },
      ],
    },
  },
  {
    id: 'nexustrace',
    year: '2025–26',
    stack: [
      'Python',
      'FastAPI',
      'Neo4j GDS',
      'Next.js',
      'WebSockets',
      'OpenAI',
    ],
    links: [{ kind: 'repo', href: 'https://github.com/tlsamaral/nexus-trace' }],
    gallery: {
      aspect: 4 / 3,
      tone: 'light',
      images: [
        localizedShot(
          {
            en: '/projects/nexustrace/thumb-en.jpg',
            pt: '/projects/nexustrace/thumb-pt.jpg',
          },
          1600,
          1200,
        ),
      ],
    },
  },
  {
    id: 'aresta',
    year: '2026',
    stack: ['Next.js', 'React', 'TypeScript', 'Motion', 'React Email'],
    links: [{ kind: 'live', href: 'https://arestastudio.tech' }],
    gallery: {
      aspect: 4 / 3,
      tone: 'dark',
      images: [
        shot('/projects/aresta/01.jpg', 1600, 1000, 'left top'),
        shot('/projects/aresta/02.jpg', 1600, 1325),
        shot('/projects/aresta/03.jpg', 1600, 1111),
      ],
    },
  },
]

export interface ArchiveProjectMeta {
  id: 'ordena' | 'floreo' | 'microservices' | 'nest' | 'autopark' | 'solidus'
  year: string
  stack: string[]
  href: string
  kind: ProjectLinkKind
}

export const archiveProjects: ArchiveProjectMeta[] = [
  {
    id: 'microservices',
    year: '2026',
    stack: ['Fastify', 'RabbitMQ', 'Kong', 'OpenTelemetry', 'Pulumi'],
    href: 'https://github.com/tlsamaral/microservices-nodejs',
    kind: 'repo',
  },
  {
    id: 'nest',
    year: '2025–26',
    stack: ['NestJS', 'DDD', 'Prisma', 'Redis'],
    href: 'https://github.com/tlsamaral/nest-clean-architecture-api',
    kind: 'repo',
  },
  {
    id: 'ordena',
    year: '2024–25',
    stack: ['Next.js', 'Node.js', 'Socket.io', 'Prisma'],
    href: 'https://github.com/tlsamaral/ordena-frontend',
    kind: 'repo',
  },
  {
    id: 'floreo',
    year: '2025',
    stack: ['React Native', 'Expo', 'Supabase', 'Gemini', 'IoT'],
    href: 'https://github.com/tlsamaral/floreo.mobile',
    kind: 'repo',
  },
  {
    id: 'solidus',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'SEO'],
    href: 'https://solidusengenharia.com.br',
    kind: 'live',
  },
  {
    id: 'autopark',
    year: '2024',
    stack: ['React', 'Redux', 'Express', 'ESP8266'],
    href: 'https://auto-park.vercel.app',
    kind: 'live',
  },
]
