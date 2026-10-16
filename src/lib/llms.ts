import { type Dictionary, getDictionary } from '@/app/i18n/get-dictonary'
import { featuredProjects, site, socials } from '@/content/site'
import { pageUrl } from './seo'

const projectLink = (id: (typeof featuredProjects)[number]['id']) => {
  const project = featuredProjects.find((p) => p.id === id)
  return (
    project?.links.find((l) => l.kind === 'live') ?? project?.links[0] ?? null
  )
}

/**
 * /llms.txt — a short, link-rich map of the site for language models
 * (https://llmstxt.org). Facts come from the same dictionaries as the page.
 */
export async function buildLlmsTxt() {
  const t = await getDictionary('en')

  const projects = featuredProjects.map((project) => {
    const copy = t.work.items[project.id]
    const link = projectLink(project.id)
    const label = link ? `[${copy.title}](${link.href})` : copy.title
    const status = link ? '' : ' (in development, not public yet)'
    return `- ${label}: ${copy.summary}${status}`
  })

  return `# ${site.name}

> ${t.meta.description}

Talles Amaral is based in ${site.location.locality}, São Paulo, Brazil. Since April 2025 he has been a Full Stack Developer at UNISAL. His AI work focuses on the engineering around the model: context engineering, tool calling, structured output, evals and observability. The site is available in English and Brazilian Portuguese.

## Pages

- [Portfolio (English)](${pageUrl('en')}): selected work, experience, about, FAQ and contact
- [Portfólio (Português)](${pageUrl('pt')}): the same content in Brazilian Portuguese
- [Links](${pageUrl('en', '/links')}): profiles, projects and email in one place
- [Full content for language models](${site.url}/llms-full.txt): everything on the site as plain text, in both languages

## Selected projects

${projects.join('\n')}

## Profiles and contact

- [GitHub](${socials.github.href})
- [LinkedIn](${socials.linkedin.href})
- [X](${socials.x.href})
- Email: ${site.email}

## Optional

- [Sitemap](${site.url}/sitemap.xml)
`
}

function section(t: Dictionary, heading: string) {
  const lines: string[] = [`## ${heading}`, '']

  lines.push(t.meta.description, '')
  lines.push(`### ${t.hero.eyebrow}`, '', t.hero.intro, '')

  lines.push(`### ${t.work.eyebrow}`, '')
  for (const project of featuredProjects) {
    const copy = t.work.items[project.id]
    const links = project.links
      .map((l) => (l.note ? `${l.href} (${l.note})` : l.href))
      .join(', ')
    lines.push(
      `#### ${copy.title} (${project.year}) — ${copy.kind}`,
      '',
      copy.summary,
      '',
      copy.problem,
      '',
      ...copy.highlights.map((h) => `- ${h}`),
      '',
      `- ${t.work.role}: ${copy.role}`,
      `- ${t.work.stack}: ${project.stack.join(', ')}`,
      ...(links ? [`- ${links}`] : []),
      '',
    )
  }

  lines.push(`### ${t.experience.eyebrow}`, '')
  for (const job of t.experience.items) {
    lines.push(
      `#### ${job.role} — ${job.company} (${job.period}, ${job.location})`,
      '',
      ...job.description,
      '',
      ...job.highlights.map((h) => `- ${h.title}: ${h.text}`),
      '',
    )
  }
  lines.push(
    ...t.experience.stack.map((g) => `- ${g.label}: ${g.items.join(', ')}`),
    '',
  )

  lines.push(
    `### ${t.about.eyebrow}`,
    '',
    ...t.about.paragraphs.flatMap((p) => [p, '']),
  )
  lines.push(
    `- ${t.about.degree.title}, ${t.about.degree.institution} (${t.about.degree.period})`,
    `- ${t.about.languagesTitle}: ${t.about.languages}`,
    ...t.about.courses.map((c) => `- ${c.title}, ${c.institution} (${c.year})`),
    '',
  )

  lines.push(`### ${t.faq.eyebrow}`, '')
  for (const item of t.faq.items) lines.push(`**${item.q}**`, '', item.a, '')

  return lines.join('\n')
}

/** /llms-full.txt — the whole site as plain text, both languages. */
export async function buildLlmsFullTxt() {
  const [en, pt] = await Promise.all([getDictionary('en'), getDictionary('pt')])

  return `# ${site.name} — full content

> Plain-text copy of ${site.url}. Last updated ${site.updated}.

Contact: ${site.email} · GitHub ${socials.github.href} · LinkedIn ${socials.linkedin.href} · X ${socials.x.href}

${section(en, 'English')}
${section(pt, 'Português (Brasil)')}`
}
