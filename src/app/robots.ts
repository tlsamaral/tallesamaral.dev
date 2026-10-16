import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

/**
 * Search engines and AI assistants are welcome: this is a public portfolio,
 * and being quotable in answers is the point. Named explicitly so the intent
 * is on record rather than implied by the wildcard.
 */
const CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'Applebot',
  // Training / grounding
  'Google-Extended',
  'Applebot-Extended',
  'GPTBot',
  'ClaudeBot',
  'anthropic-ai',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'Amazonbot',
  // Live search and user-triggered fetches
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: CRAWLERS, allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
