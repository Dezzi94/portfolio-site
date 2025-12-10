import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://desmonddigital.com'
  
  // Static pages
  const routes = [
    '',
    '/services',
    '/projects', 
    '/contact',
  ]

  // Case study pages
  const caseStudies = [
    '/case/another-avenue',
    '/case/inspired-learning', 
    '/case/dezzi-digital',
    '/case/mammoth-hunter-club'
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const caseStudyPages = caseStudies.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...caseStudyPages,
  ]
} 