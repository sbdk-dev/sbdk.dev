import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sbdk.dev'

  const docPages = [
    'home',
    'getting-started',
    'user-guide',
    'faq',
    'architecture',
    'dlt-pipeline-architecture',
    'dbt-models',
    'configuration',
    'configuration-schema',
    'api-reference',
    'server-cli-guide',
    'build-binary',
    'ci-cd-guide',
    'github-release-workflow',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...docPages.map(slug => ({
      url: `${baseUrl}/docs/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: slug === 'home' || slug === 'getting-started' ? 0.9 : 0.8,
    })),
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
