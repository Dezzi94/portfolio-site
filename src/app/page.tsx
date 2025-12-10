import { Metadata } from 'next'
import { HomePageClient } from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Jack Desmond | Digital Marketing Consultant & Automation Strategist',
  description: 'T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth through marketing automation, funnel optimization, and strategic thinking.',
}

export default function HomePage() {
  return <HomePageClient />
}
