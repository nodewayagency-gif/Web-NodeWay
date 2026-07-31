import { MetadataRoute } from 'next'
import { blogPosts, cases } from '@/lib/data'
import { servicePillars, cityHubs } from '@/lib/seo-data'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/atendimento`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sistema-de-gestao-comercial`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/planos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = servicePillars.map((pillar) => ({
    url: `${baseUrl}/servicos/${pillar.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const cityPriorities: Record<string, number> = {
    cascavel: 0.9,
    blumenau: 0.88,
    guanambi: 0.88,
    toledo: 0.88,
    curitiba: 0.85,
    brasil: 0.8,
  }

  const cityRoutes: MetadataRoute.Sitemap = cityHubs.map((city) => ({
    url: `${baseUrl}/atendimento/${city.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: cityPriorities[city.slug] ?? 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const caseRoutes: MetadataRoute.Sitemap = cases.map((caseStudy) => ({
    url: `${baseUrl}/cases/${caseStudy.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...blogRoutes,
    ...caseRoutes,
  ]
}
