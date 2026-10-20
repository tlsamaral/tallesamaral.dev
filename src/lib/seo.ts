import type { Locale } from '@/app/i18n/config'
import type { Dictionary } from '@/app/i18n/get-dictonary'
import {
  type FeaturedProjectId,
  featuredProjects,
  resolveGallery,
  site,
  socials,
} from '@/content/site'

export const BCP47: Record<Locale, string> = { pt: 'pt-BR', en: 'en-US' }

const id = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
  employer: `${site.url}/#employer`,
}

export const pageUrl = (locale: Locale, path = '') =>
  `${site.url}/${locale}${path}`

/** Technologies and practices the CV backs up; used for `knowsAbout`. */
const KNOWS_ABOUT = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Fastify',
  'NestJS',
  '.NET Core',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'SQL Server',
  'Neo4j',
  'Docker',
  'Domain-driven design',
  'Clean Architecture',
  'Event-driven architecture',
  'Large language models',
  'Context engineering',
  'Tool calling',
  'LLM evaluation',
  'OpenTelemetry',
]

function personNode(t: Dictionary) {
  return {
    '@type': 'Person',
    '@id': id.person,
    name: site.name,
    alternateName: site.alternateName,
    givenName: 'Talles',
    familyName: 'Amaral',
    url: site.url,
    image: { '@type': 'ImageObject', url: site.avatar },
    email: `mailto:${site.email}`,
    description: t.meta.description,
    jobTitle: t.meta.jobTitle,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    worksFor: { '@id': id.employer },
    alumniOf: { '@id': id.employer },
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: [
      { '@type': 'Language', name: 'Portuguese', alternateName: 'pt' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    sameAs: Object.values(socials).map((social) => social.href),
  }
}

const employerNode = {
  '@type': ['Organization', 'CollegeOrUniversity'],
  '@id': id.employer,
  name: site.employer,
  alternateName: 'UNISAL',
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': id.website,
    url: site.url,
    name: site.name,
    inLanguage: Object.values(BCP47),
    publisher: { '@id': id.person },
  }
}

const PROJECT_TYPE: Record<FeaturedProjectId, Record<string, unknown>> = {
  lery: { '@type': 'SoftwareSourceCode' },
  postie: { '@type': 'SoftwareSourceCode' },
  boua: {
    '@type': 'SoftwareApplication',
    applicationCategory: 'SocialNetworkingApplication',
  },
  colete: {
    '@type': 'WebApplication',
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Any',
  },
  nexustrace: { '@type': 'SoftwareSourceCode' },
  aresta: { '@type': 'WebSite' },
}

function projectNodes(t: Dictionary, locale: Locale) {
  return featuredProjects.map((project) => {
    const copy = t.work.items[project.id]
    const repo = project.links.find((link) => link.kind === 'repo')
    const live = project.links.find((link) => link.kind === 'live')
    const cover = project.gallery
      ? resolveGallery(project.gallery, locale).images[0]
      : undefined
    const coverSrc = cover && 'src' in cover ? cover.src : undefined
    const base = PROJECT_TYPE[project.id]
    const isCode = base['@type'] === 'SoftwareSourceCode'

    return {
      ...base,
      '@id': `${pageUrl(locale)}#project-${project.id}`,
      name: copy.title,
      description: `${copy.summary} ${copy.problem}`,
      inLanguage: BCP47[locale],
      keywords: project.stack.join(', '),
      author: { '@id': id.person },
      creator: { '@id': id.person },
      ...(live && { url: live.href }),
      ...(isCode && repo && { codeRepository: repo.href }),
      ...(coverSrc && { image: `${site.url}${coverSrc}` }),
    }
  })
}

function faqNode(t: Dictionary, locale: Locale) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl(locale)}#faq`,
    inLanguage: BCP47[locale],
    isPartOf: { '@id': `${pageUrl(locale)}#webpage` },
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

function alternateLanguageUrls(path: string) {
  return (Object.keys(BCP47) as Locale[]).map((l) => pageUrl(l, path))
}

/** Graph for the home page: who, what, the projects and the FAQ. */
export function homeGraph(t: Dictionary, locale: Locale) {
  const projects = projectNodes(t, locale)
  const url = pageUrl(locale)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: BCP47[locale],
        isPartOf: { '@id': id.website },
        mainEntity: { '@id': id.person },
        about: { '@id': id.person },
        dateModified: site.updated,
        primaryImageOfPage: { '@type': 'ImageObject', url: site.avatar },
        significantLink: alternateLanguageUrls('').filter((u) => u !== url),
      },
      personNode(t),
      employerNode,
      websiteNode(),
      {
        '@type': 'ItemList',
        '@id': `${url}#projects`,
        name: t.work.eyebrow,
        inLanguage: BCP47[locale],
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: project,
        })),
      },
      faqNode(t, locale),
    ],
  }
}

/** Graph for the link hub: a small page about the same person. */
export function linksGraph(t: Dictionary, locale: Locale) {
  const url = pageUrl(locale, '/links')

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${t.meta.linksTitle} — ${site.name}`,
        description: t.meta.linksDescription,
        inLanguage: BCP47[locale],
        isPartOf: { '@id': id.website },
        about: { '@id': id.person },
        dateModified: site.updated,
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: site.name,
            item: pageUrl(locale),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: t.meta.linksTitle,
            item: url,
          },
        ],
      },
      personNode(t),
      employerNode,
      websiteNode(),
    ],
  }
}
