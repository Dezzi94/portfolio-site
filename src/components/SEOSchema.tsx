'use client'

type PersonSchemaPayload = Partial<{
  name: string
  jobTitle: string
  description: string
  url: string
  image: string
  sameAs: string[]
  expertise: string[]
  skills: string[]
}>

type ServiceSchemaPayload = Partial<{
  name: string
  description: string
  areaServed: string
  serviceType: string
  category: string
  services: Array<{
    "@type": string
    itemOffered: {
      "@type": string
      name: string
      description?: string
    }
  }>
}>

type OrganizationSchemaPayload = Partial<{
  name: string
  description: string
  url: string
  logo: string
  phone: string
  sameAs: string[]
}>

type BreadcrumbSchemaPayload = {
  breadcrumbs: Array<{
    name: string
    url: string
  }>
}

type ArticleSchemaPayload = {
  headline: string
  description: string
  author?: string
  datePublished: string
  dateModified?: string
  image: string | string[]
  url: string
}

type SchemaProps =
  | { type: 'person'; data?: PersonSchemaPayload }
  | { type: 'service'; data?: ServiceSchemaPayload }
  | { type: 'organization'; data?: OrganizationSchemaPayload }
  | { type: 'breadcrumb'; data: BreadcrumbSchemaPayload }
  | { type: 'article'; data: ArticleSchemaPayload }

export function SEOSchema(props: SchemaProps) {
  const generateSchema = () => {
    switch (props.type) {
      case 'person': {
        const data = props.data ?? {}
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data.name || "Jack Desmond",
          "jobTitle": data.jobTitle || "Digital Marketing Consultant & Automation Strategist",
          "description": data.description || "T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth through marketing automation, funnel optimization, and strategic thinking.",
          "url": data.url || "https://desmonddigital.com",
          "image": data.image || "https://desmonddigital.com/images/hero/Jackimage.png",
          "sameAs": data.sameAs || [
            "https://www.linkedin.com/in/jackdesmond",
            "https://twitter.com/jackdesmond"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Desmond Digital",
            "url": "https://desmonddigital.com"
          },
          "knowsAbout": data.expertise || [
            "Digital Marketing",
            "Marketing Automation",
            "Funnel Optimization", 
            "Paid Advertising",
            "Growth Strategy",
            "Systems Thinking"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Digital Marketing Consultant",
            "occupationalCategory": "Marketing and Sales Professionals",
            "skills": data.skills || [
              "Marketing Automation",
              "Funnel Design",
              "Paid Advertising",
              "Data Analysis",
              "System Integration",
              "Growth Strategy"
            ]
          }
        }
      }

      case 'service': {
        const data = props.data ?? {}
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": data.name || "Digital Marketing Consulting Services",
          "description": data.description,
          "provider": {
            "@type": "Person",
            "name": "Jack Desmond",
            "jobTitle": "Digital Marketing Consultant"
          },
          "areaServed": data.areaServed || "Worldwide",
          "serviceType": data.serviceType || "Digital Marketing Consulting",
          "category": data.category || "Marketing Services",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": data.services || [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marketing Automation",
                  "description": "Automated workflows and systems for marketing efficiency"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Funnel Optimization",
                  "description": "Conversion-focused sales funnel design and optimization"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Paid Advertising Strategy",
                  "description": "Strategic paid advertising campaign management"
                }
              }
            ]
          }
        }
      }

      case 'organization': {
        const data = props.data ?? {}
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name || "Desmond Digital",
          "description": data.description || "Digital marketing consulting and automation services",
          "url": data.url || "https://desmonddigital.com",
          "logo": data.logo || "https://desmonddigital.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.phone,
            "contactType": "Customer Service",
            "areaServed": "Worldwide",
            "availableLanguage": "English"
          },
          "founder": {
            "@type": "Person",
            "name": "Jack Desmond"
          },
          "sameAs": data.sameAs || [
            "https://www.linkedin.com/company/desmonddigital"
          ]
        }
      }

      case 'breadcrumb': {
        const data = props.data
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }
      }

      case 'article': {
        const data = props.data
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": data.author || "Jack Desmond"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Desmond Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://desmonddigital.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "image": data.image,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        }
      }

      default:
        return null
    }
  }

  const schema = generateSchema()

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 