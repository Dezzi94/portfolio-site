'use client'

import { ServiceCard } from '@/components/ServiceCard'
import { Settings, TrendingUp, Target, Zap, Brain, BarChart } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Settings,
    title: 'Marketing Automation',
    description: 'Build intelligent systems that nurture leads, onboard customers, and scale your operations without burning out your team.',
    features: [
      'Email automation sequences that convert',
      'Lead scoring and qualification systems',
      'Customer onboarding workflows',
      'CRM integration and optimization',
      'Workflow automation via Make.com/Zapier',
      'Performance tracking and optimization'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Funnel Optimization',
    description: 'Transform your customer journey with psychology-driven funnel design that converts visitors into loyal customers.',
    features: [
      'Landing page conversion optimization',
      'Sales funnel strategy and design',
      'A/B testing and data analysis',
      'User experience optimization',
      'Conversion rate improvement',
      'Customer journey mapping'
    ]
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Data-driven advertising campaigns across multiple channels that deliver measurable ROI and sustainable growth.',
    features: [
      'Google Ads campaign management',
      'Facebook & Instagram advertising',
      'LinkedIn B2B campaigns',
      'Retargeting and lookalike audiences',
      'Ad creative strategy and testing',
      'ROI tracking and optimization'
    ]
  }
]

const approachPoints = [
  {
    icon: Brain,
    title: 'Strategic Thinking',
    description: 'I see patterns others miss. My neurodivergent perspective identifies opportunities in your growth engine that traditional approaches overlook.'
  },
  {
    icon: Zap,
    title: 'Systems-First Approach',
    description: 'Instead of quick fixes, I build scalable systems that work 24/7. Automation that grows with your business, not against it.'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Results',
    description: 'Every decision backed by data. Every campaign optimized for performance. Every system built for measurable, sustainable growth.'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-section pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Services that scale.</span>
              <br />
              <span className="text-foreground">Systems that work.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Futuristic growth powered by strategic automation, data-driven optimization, 
              and the neurodivergent edge your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why my approach works differently
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Most marketers think in templates. I think in systems. Here's how 
              my neurodivergent perspective creates your competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approachPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-6 flex items-center justify-center mx-auto">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How we work together
            </h2>
            <p className="text-xl text-foreground/70">
              A proven process that turns strategy into systems, and systems into growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Strategy Session',
                description: 'Deep dive into your business goals, current systems, and growth blockers.'
              },
              {
                step: '02',
                title: 'System Design',
                description: 'Map out the automation workflows and optimization strategies for your unique needs.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Build and deploy your growth systems with thorough testing and optimization.'
              },
              {
                step: '04',
                title: 'Scale & Optimize',
                description: 'Monitor performance, gather insights, and continuously improve your systems.'
              }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-sm">{phase.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to build smarter systems?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let&apos;s discuss your growth challenges and design a system that scales with your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-teal text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-normal"
              >
                Schedule Strategy Call
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border border-brand-teal text-brand-teal rounded-lg font-semibold text-lg hover:bg-brand-teal hover:text-white transition-all duration-normal"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 