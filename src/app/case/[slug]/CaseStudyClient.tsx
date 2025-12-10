'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  X,
  ZoomIn,
  Users,
  BarChart3,
  Workflow,
  Activity,
  ShieldCheck,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Zap,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Share2,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, type ComponentType } from 'react'
import clsx from 'clsx'

interface CaseStudy {
  title: string
  subtitle: string
  category: string
  duration: string
  client: string
  logo?: string
  
  // Enhanced structure
  companyBackground?: {
    description: string
    details: string
    myRole: string
  }
  project?: {
    name: string
    brief: string
    planAndProcess: string
    execution: string
    challenges: string
    opportunities: string
  }
  socialAnalysis?: {
    summary: string
    insights: string[]
    nextSteps: string[]
  }
  skillsUsed?: string[]
  
  challenge: string
  solution: string
  results: {
    metric1: { label: string; value: string }
    metric2: { label: string; value: string }
    metric3: { label: string; value: string }
  }
  heroImage: string
  images: string[]
  testimonial: {
    text: string
    author: string
    role: string
  }
  heroSummary?: string
  tags: string[]
  liveSite?: string
}

const CASE_LINKS = [
  {
    slug: 'withyouwithme',
    title: 'WithYouWithMe',
    subtitle: 'Multi-project marketing & funnel optimisation',
    category: 'Paid Advertising',
  },
  {
    slug: 'another-avenue',
    title: 'Another Avenue',
    subtitle: 'AI-ready job sourcing automation',
    category: 'Automation Systems',
  },
  {
    slug: 'wildedge-consultancy',
    title: 'WildEdge Consultancy',
    subtitle: '360° brand, UX, and growth strategy',
    category: 'Brand & Funnel Strategy',
  },
  {
    slug: 'mammoth-hunter-club',
    title: 'Mammoth Hunter Club',
    subtitle: 'Social outreach and community programs',
    category: 'Community Growth',
  },
] as const

interface Props {
  caseStudy: CaseStudy
  currentSlug: string
}

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
}

const AccordionSection = ({ title, children, defaultOpen = false, icon }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-brand-primary/20 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 hover:from-brand-primary/20 hover:to-brand-secondary/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl lg:text-2xl font-bold text-brand-primary text-left">{title}</h3>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-brand-primary" />
          ) : (
            <ChevronDown className="h-5 w-5 text-brand-primary" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// Image Zoom Modal Component
const ImageZoomModal = ({ src, alt, isOpen, onClose }: {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-5xl max-h-[90vh] w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
              className="absolute top-4 right-4 z-20 rounded-full bg-black/70 p-2 text-white shadow-lg transition-all hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="pointer-events-none object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// Zoomable Image Component
const ZoomableImage = ({ src, alt, width, height, className = "", caption }: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  caption?: string
}) => {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <>
      <div className={`group ${className}`}>
        <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-background to-card/70 p-4 shadow-sm transition-all duration-300 hover:shadow-xl">
          <div
            className="relative overflow-hidden rounded-xl border border-border/30 cursor-pointer"
            style={{ aspectRatio: `${width}/${height}` }}
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={100}
              className="h-full w-full object-contain bg-white dark:bg-black transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
              <div className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                  <ZoomIn className="h-4 w-4" />
                  Zoom In
                </div>
              </div>
            </div>
          </div>
          {caption && (
            <div className="mt-3 text-center text-sm text-foreground/70">
              {caption}
            </div>
          )}
        </div>
      </div>
      <ImageZoomModal
        src={src}
        alt={alt}
        isOpen={isZoomed}
        onClose={() => setIsZoomed(false)}
      />
    </>
  )
}

const HeroMetricsPanel = ({
  stats,
  summary,
}: {
  stats: Array<{
    label: string
    value: string
    context: string
    accent: 'primary' | 'secondary'
    icon: ComponentType<{ className?: string }>
  }>
  summary: string
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative flex h-full w-full flex-col gap-8 overflow-hidden rounded-3xl border border-border/20 bg-gradient-to-br from-card/95 to-background/95 p-8 shadow-2xl backdrop-blur"
      aria-labelledby="performance-snapshot"
    >
      {/* Animated Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 select-none opacity-40"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
      >
        <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute bottom-[-25%] left-0 h-64 w-64 rounded-full bg-brand-secondary/20 blur-3xl" />
      </motion.div>

      {/* Header */}
      <header className="relative flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div>
          <h3 id="performance-snapshot" className="text-sm font-bold uppercase tracking-widest text-foreground">
            Performance Snapshot
          </h3>
          <p className="text-xs text-foreground/60">Project Impact Metrics</p>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const accentColour = stat.accent === 'primary' ? 'text-brand-primary' : 'text-brand-secondary'
          const accentBg = stat.accent === 'primary' ? 'from-brand-primary/10 to-brand-primary/5' : 'from-brand-secondary/10 to-brand-secondary/5'
          
          return (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={clsx(
                'group relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 min-h-[220px]',
                accentBg
              )}
            >
              {/* Stat Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div
                  className={clsx(
                    'flex h-12 w-12 items-center justify-center rounded-xl border-2 shadow-lg transition-transform duration-300 group-hover:scale-110',
                    stat.accent === 'primary' 
                      ? 'border-brand-primary/30 bg-brand-primary/10 text-brand-primary' 
                      : 'border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary'
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              {/* Stat Value */}
              <div className="mb-3">
                <p className={clsx('text-3xl sm:text-4xl font-black leading-tight break-words', accentColour)}>
                  {stat.value}
                </p>
              </div>

              {/* Stat Label */}
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground leading-snug break-words">
                  {stat.label}
                </p>
                <p className="text-xs font-medium text-foreground/60 leading-relaxed break-words">
                  {stat.context}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          )
        })}
      </div>

      {/* Summary */}
      <div className="relative rounded-2xl border border-border/20 bg-background/60 p-6 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20">
            <Sparkles className="h-5 w-5 text-brand-primary" />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-foreground/90 leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const CaseStudySummary = ({
  challenge,
  solution,
  results,
}: {
  challenge: string
  solution: string
  results: CaseStudy['results']
}) => {
  const summaryCards = [
    {
      label: 'Challenge',
      value: challenge,
      icon: AlertTriangle,
      accent: 'primary',
    },
    {
      label: 'Solution',
      value: solution,
      icon: CheckCircle2,
      accent: 'secondary',
    },
  ]

  const resultMetrics = [results.metric1, results.metric2, results.metric3]

  return (
    <section className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {summaryCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.label}
                  className="rounded-2xl border border-border/30 bg-card/80 p-6 backdrop-blur-sm shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={clsx(
                      'rounded-xl p-3',
                      card.accent === 'primary'
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'bg-brand-secondary/10 text-brand-secondary'
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">{card.label}</p>
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {card.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="rounded-2xl border border-border/20 bg-background/80 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary p-2 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground/70">Headline Outcomes</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {resultMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border/30 bg-card/70 p-4">
                  <p className="text-2xl font-bold text-brand-primary mb-1">{metric.value}</p>
                  <p className="text-sm font-semibold text-foreground/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type ProjectDashboardProps = {
  accent: 'primary' | 'secondary'
  overview: {
    label: string
    value: string
    context: string
  }[]
  timeline: {
    phase: string
    detail: string
  }[]
  channels: string[]
  ownership: string[]
}

const ProjectDashboard = ({ accent, overview, timeline, channels, ownership }: ProjectDashboardProps) => {
  const accentText = accent === 'primary' ? 'text-brand-primary' : 'text-brand-secondary'
  const accentBorder = accent === 'primary' ? 'border-brand-primary/30' : 'border-brand-secondary/30'

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl border border-border/25 bg-background/95 p-8 shadow-2xl backdrop-blur"
    >
      <div className="pointer-events-none absolute inset-0 select-none opacity-50">
        <div className="absolute -top-16 right-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6">
        <span className={clsx('inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] shadow-sm bg-background/85', accentBorder)}>
          <Sparkles className={clsx('h-4 w-4', accentText)} aria-hidden="true" />
          Project Dashboard
        </span>
        <p className="text-sm font-medium text-foreground/70">Full ownership across strategy → execution → scale</p>
      </div>

      <div className="relative z-10 space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          {overview.map((item) => (
            <article key={item.label} className="rounded-[24px] border border-border/30 bg-card/95 p-6 shadow">
              <header className="flex items-end justify-between gap-3">
                <p className={clsx('text-3xl font-bold leading-tight', accentText)}>{item.value}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/50">KPI</span>
              </header>
              <p className="mt-2 text-base font-semibold text-foreground/80">{item.label}</p>
              <p className="text-sm text-foreground/55">{item.context}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[24px] border border-border/30 bg-card/95 p-6 shadow">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/55">Timeline Milestones</h3>
            <ul className="space-y-3 text-base text-foreground/75">
              {timeline.map((item) => (
                <li key={item.phase} className="rounded-xl border border-border/20 bg-background/70 p-4">
                  <p className={clsx('text-xs font-semibold uppercase tracking-[0.26em]', accentText)}>{item.phase}</p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/75">{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[24px] border border-border/30 bg-card/95 p-6 shadow">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/55">Channels & Surfaces</h3>
            <ul className="space-y-2 text-base text-foreground/75">
              {channels.map((channel) => (
                <li key={channel} className="flex items-start gap-3">
                  <Activity className={clsx('mt-[2px] h-4 w-4', accentText)} aria-hidden="true" />
                  <span>{channel}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[24px] border border-border/30 bg-card/95 p-6 shadow">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/55">Ownership Highlights</h3>
            <ul className="space-y-2 text-base text-foreground/75">
              {ownership.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Sparkles className={clsx('mt-[2px] h-4 w-4', accentText)} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[24px] border border-border/30 bg-card/95 p-6 shadow">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-foreground/55">Risk & Quality Controls</h3>
            <ul className="space-y-2 text-base text-foreground/75">
              <li className="flex items-start gap-3">
                <ShieldCheck className={clsx('mt-[2px] h-5 w-5', accentText)} aria-hidden="true" />
                <span>Documented contingencies for live-campaign issues and platform outages.</span>
              </li>
              <li className="flex items-start gap-3">
                <Workflow className={clsx('mt-[2px] h-5 w-5', accentText)} aria-hidden="true" />
                <span>Cross-functional communication cadence with delivery & executive stakeholders.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </motion.section>
  )
}

const DefaultCaseStudySection = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const project = caseStudy.project
  if (!project) return null

  const overview = [
    {
      label: caseStudy.results.metric1.label,
      value: caseStudy.results.metric1.value,
      context: 'Primary KPI',
    },
    {
      label: caseStudy.results.metric2.label,
      value: caseStudy.results.metric2.value,
      context: 'Performance Lift',
    },
    {
      label: caseStudy.results.metric3.label,
      value: caseStudy.results.metric3.value,
      context: 'Sustained Impact',
    },
  ]

  const timeline = [
    { phase: 'Brief & Objectives', detail: project.brief || caseStudy.challenge },
    { phase: 'Plan & Process', detail: project.planAndProcess },
    { phase: 'Execution', detail: project.execution || caseStudy.solution },
    { phase: 'Opportunities', detail: project.opportunities },
  ].filter((item) => item.detail)

  const primaryCapabilities = (caseStudy.skillsUsed?.length ? caseStudy.skillsUsed : caseStudy.tags)?.slice(0, 4) ?? []
  const channelList = primaryCapabilities.length > 0 ? primaryCapabilities : [caseStudy.category]

  const ownership = [
    caseStudy.companyBackground?.myRole ?? `Led ${caseStudy.category.toLowerCase()} delivery`,
    'Strategy → build → optimization',
    'Automation + analytics ownership',
    'Stakeholder updates & enablement',
  ]

  const metrics = [
    caseStudy.results.metric1,
    caseStudy.results.metric2,
    caseStudy.results.metric3,
  ]

  const splitText = (text?: string) => {
    if (!text) return []
    const baseSegments = text
      .split(/[\n\r•–\-]/)
      .flatMap((segment) => segment.split(/(?<=\.)\s+/))
    return baseSegments
      .map((item) => item.replace(/^[•\-–]\s*/, '').trim())
      .filter(Boolean)
  }

  const planPoints = splitText(project.planAndProcess)
  const executionPoints = splitText(project.execution)
  const challengePoints = splitText(project.challenges)
  const opportunityPoints = splitText(project.opportunities)
  const solutionPoints = splitText(caseStudy.solution)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 rounded-full px-6 py-2 mb-4">
              <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">{caseStudy.category}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {project.name || caseStudy.title}
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {caseStudy.subtitle}
            </p>
          </motion.div>

          <ProjectDashboard
            accent="secondary"
            overview={overview}
            timeline={timeline}
            channels={channelList}
            ownership={ownership}
          />

          <div className="mt-12 space-y-6">
            <AccordionSection 
              title="🎯 The Brief (Mission Briefing!)"
              defaultOpen={true}
              icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎯</span></div>}
            >
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.brief}
                </p>
                {caseStudy.companyBackground?.details && (
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {caseStudy.companyBackground.details}
                  </p>
                )}

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-brand-primary mb-3">Challenge</h4>
                    <p className="text-foreground/80">{caseStudy.challenge}</p>
                  </div>
                  <div className="bg-brand-secondary/5 border border-brand-secondary/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-brand-secondary mb-3">Solution</h4>
                    <p className="text-foreground/80">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-brand-primary mb-2">⏱️ Project Timeline</h4>
                      <p className="text-foreground/80">
                        {caseStudy.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection 
              title="🧠 Down The Rabbit Hole! (The Plan & Thought Process)"
              icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🧠</span></div>}
            >
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.planAndProcess}
                </p>
                {planPoints.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {planPoints.map((point) => (
                      <div key={point} className="rounded-xl border border-border/30 bg-card/60 p-4">
                        <p className="text-foreground/80 text-base">{point}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AccordionSection>

            <AccordionSection 
              title="🚀 Making It Happen! (The Execution)"
              icon={<div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🚀</span></div>}
            >
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.execution}
                </p>

                {executionPoints.length > 0 && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {executionPoints.map((point) => (
                      <div key={point} className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                        <p className="text-foreground/80 text-base">{point}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="border-l-4 border-brand-primary/30 pl-6">
                    <h4 className="text-xl font-semibold text-brand-primary mb-3">Systems & Channels</h4>
                    <ul className="space-y-2 text-foreground/80">
                      {channelList.map((channel) => (
                        <li key={channel}>• {channel}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-l-4 border-brand-secondary/30 pl-6">
                    <h4 className="text-xl font-semibold text-brand-secondary mb-3">Ownership</h4>
                    <ul className="space-y-2 text-foreground/80">
                      {ownership.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionSection>

            {caseStudy.socialAnalysis && (
              <AccordionSection 
                title="📈 Social Media Growth Analysis"
                icon={<div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-purple-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">📈</span></div>}
              >
                <div className="space-y-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {caseStudy.socialAnalysis.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-border/30 bg-card/80 p-6">
                      <h4 className="text-lg font-semibold text-brand-primary mb-3">Key Insights</h4>
                      <ul className="space-y-2 text-foreground/80">
                        {caseStudy.socialAnalysis.insights.map((insight) => (
                          <li key={insight} className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-brand-primary mt-1 flex-shrink-0" />
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-border/30 bg-card/80 p-6">
                      <h4 className="text-lg font-semibold text-brand-secondary mb-3">Next Steps</h4>
                      <ul className="space-y-2 text-foreground/80">
                        {caseStudy.socialAnalysis.nextSteps.map((step) => (
                          <li key={step} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-brand-secondary mt-1 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AccordionSection>
            )}

            <AccordionSection 
              title="⚡ Plot Twist! (Key Challenges & Solutions)"
              icon={<div className="w-8 h-8 bg-gradient-to-r from-red-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">⚡</span></div>}
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border border-red-200 dark:border-red-800/30 bg-red-50 dark:bg-red-900/10 p-6">
                    <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" /> Challenges
                    </h4>
                    {challengePoints.length > 0 ? (
                      <ul className="space-y-2 text-foreground/80">
                        {challengePoints.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-foreground/80">{project.challenges}</p>
                    )}
                  </div>
                  <div className="rounded-xl border border-green-200 dark:border-green-800/30 bg-green-50 dark:bg-green-900/10 p-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" /> Solutions
                    </h4>
                    {solutionPoints.length > 0 ? (
                      <ul className="space-y-2 text-foreground/80">
                        {solutionPoints.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-foreground/80">{caseStudy.solution}</p>
                    )}
                  </div>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection 
              title="🎉 Victory Lap! (Results & Transformation)"
              icon={<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎉</span></div>}
            >
              <div className="space-y-8">
                <div className="grid gap-4 md:grid-cols-3">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-border/30 bg-card/90 p-6 shadow">
                      <p className="text-4xl font-black text-brand-primary mb-2">{metric.value}</p>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground/60">{metric.label}</p>
                      <p className="text-xs text-foreground/60 mt-2">{caseStudy.title}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {caseStudy.subtitle}
                  </p>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection 
              title="🔮 What's Next? (Future Opportunities)"
              icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🔮</span></div>}
            >
              <div className="space-y-6">
                {opportunityPoints.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {opportunityPoints.map((item) => (
                      <div key={item} className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                        <p className="text-foreground/80 text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.opportunities}
                  </p>
                )}
              </div>
            </AccordionSection>

            {caseStudy.skillsUsed && caseStudy.skillsUsed.length > 0 && (
              <AccordionSection 
                title="🛠️ Tech Stack & Tools"
                icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🛠️</span></div>}
              >
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudy.skillsUsed.map((skill) => (
                      <div key={skill} className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                        <p className="font-semibold text-foreground/90">{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionSection>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default function CaseStudyClient({ caseStudy, currentSlug }: Props) {
  const isWithYouWithMe = caseStudy.title === 'WithYouWithMe'
  const isAnotherAvenue = caseStudy.title === 'Another Avenue'
  const isWildEdge = caseStudy.title === 'WildEdge Consultancy'
  const isMammoth = caseStudy.title === 'Mammoth Hunter Club'

  const defaultStatIcons = [Users, BarChart3, Workflow]

  const heroStats = isAnotherAvenue
    ? [
        {
          label: 'Time Saved',
          value: '15+',
          context: 'Hours per week eliminated',
          accent: 'primary' as const,
          icon: Activity,
        },
        {
          label: 'Cost Reduction',
          value: '99.75%',
          context: 'Make.com ops optimized',
          accent: 'secondary' as const,
          icon: BarChart3,
        },
        {
          label: 'Efficiency Gain',
          value: '~2',
          context: 'Ops per run (from ~800)',
          accent: 'primary' as const,
          icon: Workflow,
        },
      ]
    : isWildEdge
      ? [
          {
            label: 'Strategy Playbook',
            value: '30+',
            context: 'Pages of annotated guidance',
            accent: 'primary' as const,
            icon: FileText,
          },
          {
            label: 'UX/CRO Actions',
            value: '25',
            context: 'Prioritised recommendations',
            accent: 'secondary' as const,
            icon: Target,
          },
          {
            label: 'Social Pillars',
            value: '3',
            context: 'Proof • Playbooks • BTS',
            accent: 'primary' as const,
            icon: Share2,
          },
        ]
      : isWithYouWithMe
        ? [
            {
              label: 'Event Attendance',
              value: '93',
              context: '86% above 50-person target',
              accent: 'primary' as const,
              icon: Users,
            },
            {
              label: 'Weekly Signups Record',
              value: '71',
              context: 'New users in one week',
              accent: 'secondary' as const,
              icon: BarChart3,
            },
            {
              label: 'EOIs Generated',
              value: '152',
              context: 'Target: 150 expressions of interest',
              accent: 'primary' as const,
              icon: Target,
            },
          ]
        : isMammoth
          ? [
              {
                label: 'Month 1 KPI',
                value: '11 calls',
                context: 'Target was 10 booked via organic outreach',
                accent: 'primary' as const,
                icon: Users,
              },
              {
                label: 'Role Progression',
                value: '4 months',
                context: 'Social Media → Community Manager',
                accent: 'secondary' as const,
                icon: Rocket,
              },
              {
                label: 'Community Rituals',
                value: 'Weekly',
                context: 'Posts, matchmaking, and virtual events',
                accent: 'primary' as const,
                icon: Zap,
              },
            ]
          : [
              caseStudy.results.metric1,
              caseStudy.results.metric2,
              caseStudy.results.metric3,
            ].map((metric, index) => ({
              label: metric.label,
              value: metric.value,
              context: metric.label,
              accent: (index % 2 === 0 ? 'primary' : 'secondary') as 'primary' | 'secondary',
              icon: defaultStatIcons[index] ?? Sparkles,
            }))

  const heroSummary = caseStudy.heroSummary ?? caseStudy.solution
  const recommendations = CASE_LINKS.filter((link) => link.slug !== currentSlug).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-brand-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="case-hero" className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.3fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 px-6 py-2 mb-6">
                  <span className="h-2 w-2 rounded-full bg-brand-primary"></span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-brand-primary">Case Study</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  {caseStudy.title}
                </h1>

                {caseStudy.title === 'WithYouWithMe' ? (
                  <>
                    <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                      Marketing campaigns that delivered record-breaking results through strategic planning and innovative execution
                    </p>

                    <p className="text-lg text-foreground/60 mb-8 max-w-2xl">
                      This case study showcases two major marketing projects I executed at WithYouWithMe, demonstrating end-to-end campaign management, crisis resolution, and data-driven optimization that exceeded all targets.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xl lg:text-2xl text-foreground/70 mb-8 leading-relaxed">
                      {caseStudy.subtitle}
                    </p>

                    <p className="text-lg text-foreground/60 mb-8 max-w-2xl">
                      {caseStudy.challenge}
                    </p>
                  </>
                )}
              </motion.div>

              <HeroMetricsPanel stats={heroStats} summary={heroSummary} />
            </div>
          </div>
        </div>
      </section>

      <CaseStudySummary
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
        results={caseStudy.results}
      />

      {/* Company Background */}
      {caseStudy.companyBackground && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                  Company Background
                </h2>
                
                {caseStudy.title === 'WithYouWithMe' ? (
                  <>
                    <div className="mb-8 grid gap-6 rounded-2xl border border-border/40 bg-background/70 p-6 shadow-lg backdrop-blur">
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary/80">Snapshot</span>
                        <p className="text-lg text-foreground/75 leading-relaxed">
                          WithYouWithMe is a FREE online training platform combined with workforce deployment services. They provide skills-based education for overlooked talent (veterans, neurodiverse individuals, refugees) and transition graduates into "Squaddies" — deployment squads of up to 15 tech professionals placed on 12-month engagements with enterprise and defence clients across Australia, Canada, and the United Kingdom.
                        </p>
                      </div>
                      <div className="grid gap-4 lg:grid-cols-2">
                        <div className="rounded-xl border border-brand-primary/20 bg-card/70 p-5">
                          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-primary mb-2">Dual Model</h3>
                          <ul className="space-y-2 text-base text-foreground/75">
                            <li>• Free skills-based training platform for overlooked talent</li>
                            <li>• Workforce-as-a-service deploying trained tech professionals to enterprise clients</li>
                          </ul>
                        </div>
                        <div className="rounded-xl border border-brand-secondary/20 bg-card/70 p-5">
                          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-secondary mb-2">Client Deployments</h3>
                          <p className="text-base text-foreground/75 leading-relaxed">
                            Tech professional squads deployed to EY, Leonardo, PwC, Northrop Grumman, Fujitsu, Atos, BAE Systems, Capita, plus Australian, Canadian, and UK defence departments.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-card/50 backdrop-blur-sm border border-brand-primary/20 rounded-lg p-6">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          One of Australia's fastest growing technology companies with significant growth year-over-year since 2018. As a multi-national company operating in Australia, Canada, and the UK, their mission is to solve underemployment by focusing on the skills and potential of Veterans, Neurodiverse individuals, and Refugees rather than traditional experience requirements.
                        </p>
                      </div>
                      
                      {caseStudy.companyBackground.myRole && (
                        <div className="bg-card/50 backdrop-blur-sm border border-brand-secondary/20 rounded-lg p-6">
                          <h3 className="text-xl font-bold mb-3 text-brand-secondary">My Journey</h3>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            {caseStudy.companyBackground.myRole}
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-card/50 backdrop-blur-sm border border-brand-primary/20 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-3 text-brand-primary">About {caseStudy.client}</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                        {caseStudy.companyBackground.description}
                      </p>
                      {caseStudy.companyBackground.details && (
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          {caseStudy.companyBackground.details}
                        </p>
                      )}
                    </div>
                    
                    {caseStudy.companyBackground.myRole && (
                      <div className="bg-card/50 backdrop-blur-sm border border-brand-secondary/20 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-3 text-brand-secondary">My Role</h3>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          {caseStudy.companyBackground.myRole}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Project 1 - Job Accelerator Event */}
      {caseStudy.title === 'WithYouWithMe' && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Project 1 Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 rounded-full px-6 py-2 mb-4">
                  <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Project 1</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  Job Accelerator Event
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Event marketing campaign that exceeded targets by 86% attendance
                </p>
              </motion.div>

              <ProjectDashboard
                accent="primary"
                overview={[
                  { label: "People Attended", value: "93", context: "Target: 50" },
                  { label: "EOI's Generated", value: "152", context: "Target: 150" },
                  { label: "Delivery Window", value: "2 Weeks", context: "Planned & executed solo" },
                ]}
                timeline={[
                  { phase: 'Kickoff', detail: 'Stakeholder discovery & requirements lock-in' },
                  { phase: 'Execution', detail: 'Campaign launch, landing experience, automation build' },
                  { phase: 'Live Week', detail: 'Real-time optimisation & crisis response' },
                ]}
                channels={[
                  'LinkedIn event program & organic social amplification',
                  'Meta (Facebook) paid acquisition',
                  'HubSpot email workflows & reminder cadences',
                  'WordPress (Oxygen) event landing system',
                ]}
                ownership={[
                  'Full campaign strategy & orchestration',
                  'Creative direction & ad asset production',
                  'Marketing automation design in HubSpot',
                  'Stakeholder communications across delivery & career success teams',
                ]}
              />

              <div className="mt-6 rounded-2xl border border-blue-200 dark:border-blue-800/30 bg-blue-50 dark:bg-blue-900/10 p-4">
                <p className="text-sm text-brand-secondary">
                  <strong>EOI:</strong> Expression of Interest – formal indication of interest in job opportunities from event attendees.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* The Brief */}
                <AccordionSection 
                  title="🎯 The Brief (Mission Briefing!)" 
                  defaultOpen={true}
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">📋</span></div>}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        I was informed from my line manager that we were hosting a Job Accelerator event (these were events that were hosted with our clients where they would learn more about them and conduct interviews for open jobs).
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        The event would be hosted on a TBC date of 26/10/2022 and my job would be to make sure that the event ran smoothly and that a target of 50 people attended the event as well as a number of 150 EOI's were met.
                      </p>
                    </div>
                    <ZoomableImage
                      src="/images/projects/wywm/Project 1/briefimage.jpg"
                      alt="Project Brief"
                      width={400}
                      height={250}
                    />
                  </div>
                </AccordionSection>

                {/* The Plan & Thought Process */}
                <AccordionSection 
                  title="🧠 Down The Rabbit Hole! (The Plan & Thought Process)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🧠</span></div>}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Operating independently and with 2 weeks until then event I had to start to plan how I was going to funnel users to the event.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Firstly, I built out a list of all the requirements needed for the event to be successful, to do this I regularly engaged key stakeholders such as my Line Manager, Delivery and Career Success teams in order to keep up to date with the latest changes.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Once requirements were established I wrote out a timeline of what needed to go out and when, setting my self deadlines and created an effective Marketing Strategy. The Project Management would be done through Monday.com as it was the company's tool of choice.
                      </p>
                    </div>
                    <ZoomableImage
                      src="/images/projects/wywm/Project 1/theplan.png"
                      alt="The Plan"
                      width={400}
                      height={250}
                    />
                  </div>
                </AccordionSection>

                {/* The Execution */}
                <AccordionSection 
                  title="🚀 Making It Happen! (The Execution)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🚀</span></div>}
                >
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="border-l-4 border-brand-primary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-primary mb-3">The Ad Campaign</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          I did not want to create Ads in order to funnel people to the event because this would be expensive and the company was operating with a strict marketing budget however, after speaking to my manager about it, It was agreed that the budget would allow for this and that Ads would be necessary to drive enough people to the event.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-brand-primary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-primary mb-3">Landing Page Creation</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          Next, was the Landing Page (not shown which will be explained in the Challenges section later) which I built using WordPress & Oxygen theme builder. The page had a Form Submission (which I created in HS) for the event which would auto populate the user in HubSpot, this would allow me to perform email marketing to the contacts interested in the event.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-brand-primary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-primary mb-3">HubSpot Workflow & Email Marketing</h4>
                        <div className="space-y-3">
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            Next, I created the HubSpot workflow. I did this by using my logical thinking skills and set out the enrollment trigger to activate after the user submits the form. The Emails were then created to achieve 3 things for the user, build up hype, remind the user of the event date and let them know what to expect.
                          </p>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            The email workflow was 4 sets of emails, 1 week before, 3 days before, 1 day before and 1 hour before. This along with Social Posts would I hoped attract users to the event.
                          </p>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            Furthermore, I set up the Event itself on LinkedIn and created all the designs for the event as well as the copy. The Event would take users to the Landing Page I created earlier.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 1/LeonardoEventFBAd.png"
                          alt="Facebook Ad"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">Facebook Ad Creative</p>
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 1/LeonardoEventsocialpost.png"
                          alt="Social Post"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">LinkedIn Event Social Post</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Key Challenges & Solutions */}
                <AccordionSection 
                  title="⚡ Plot Twist! (Key Challenges & Solutions)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-red-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">⚡</span></div>}
                >
                  <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-primary mb-3">🚨 The Crisis</h4>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                        On the day of the event, the landing page suddenly stopped working—the form wouldn't submit and users were unable to register, which was critical because it served as the primary attendee funnel.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        I had to think quickly and find an alternative solution to ensure the event could still proceed successfully.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-secondary mb-3">💡 The Solution</h4>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                        I quickly pivoted and created a direct registration process using HubSpot forms and redirected all traffic from the broken landing page to the new registration method.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Despite the technical difficulties, we managed to exceed our targets, proving the effectiveness of the overall marketing strategy and my ability to adapt under pressure.
                      </p>
                    </div>
                  </div>
                </AccordionSection>

                {/* Results */}
                <AccordionSection 
                  title="🎉 Victory Lap! (Results)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎉</span></div>}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-brand-secondary mb-3">🏆 Incredible Results</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-foreground/80">People Attended:</span>
                            <span className="font-bold text-brand-secondary">93 (86% above target)</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground/80">EOI's Generated:</span>
                            <span className="font-bold text-brand-secondary">152 (Target: 150)</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-foreground/80">Timeline:</span>
                            <span className="font-bold text-brand-secondary">2 weeks</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        The event was a massive success, significantly exceeding all targets despite the technical challenges faced on the day.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        If I were to do this again I would have increased the amount of social posts that I did from 1 to 3 times per week to further improve the result.
                      </p>
                    </div>
                    
                    <ZoomableImage
                      src="/images/projects/wywm/Project 1/resultleonardo.png"
                      alt="Project Results"
                      width={600}
                      height={300}
                      className="border-green-200 dark:border-green-800/30"
                    />
                  </div>
                </AccordionSection>

                {/* Skills Used for Project 1 - Enhanced and More Prominent */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 rounded-2xl p-8 border-2 border-brand-primary/30"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-2 flex items-center justify-center gap-3">
                      <span className="text-2xl">🛠️</span> 
                      Skills Arsenal for This Project
                    </h3>
                    <p className="text-foreground/70">The key skills and tools I leveraged to deliver these results</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      { skill: 'Facebook Ads Management', emoji: '📱' },
                      { skill: 'WordPress Development', emoji: '🌐' },
                      { skill: 'HubSpot Automation', emoji: '🔄' },
                      { skill: 'Email Marketing', emoji: '📧' },
                      { skill: 'Social Media Design', emoji: '🎨' },
                      { skill: 'LinkedIn Event Management', emoji: '💼' },
                      { skill: 'Project Management', emoji: '📊' },
                      { skill: 'Stakeholder Communication', emoji: '🤝' },
                      { skill: 'Crisis Management', emoji: '🚨' },
                      { skill: 'Creative Design', emoji: '✨' }
                    ].map((item) => (
                      <div
                        key={item.skill}
                        className="bg-white dark:bg-gray-800 border border-brand-primary/30 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                      >
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <span className="text-sm font-medium text-foreground/80">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project 2 - Increase B2C SignUp's & Improve Funnel Metrics */}
      {caseStudy.title === 'WithYouWithMe' && (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Project 2 Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block bg-gradient-to-r from-brand-secondary/20 to-brand-secondary/10 rounded-full px-6 py-2 mb-4">
                  <span className="text-brand-secondary font-semibold text-sm uppercase tracking-wider">Project 2</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  Increase B2C SignUp's & Improve Funnel Metrics
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Funnel optimization that achieved record-breaking user acquisition rates
                </p>
              </motion.div>

              <ProjectDashboard
                accent="secondary"
                overview={[
                  { label: 'New Users / Week', value: '71', context: 'Company record' },
                  { label: 'Legacy Click Rate', value: '4.25%', context: 'Pre-optimisation baseline' },
                  { label: 'Funnel Entries', value: '1,000+', context: 'Audience volume analysed' },
                ]}
                timeline={[
                  { phase: 'Discovery', detail: 'Funnel audit & data review while stepping into UK ops lead role' },
                  { phase: 'Optimisation', detail: 'Workflow rebuild, messaging refinement, responsive templates' },
                  { phase: 'Scale', detail: 'Performance monitoring & cross-market rollout' },
                ]}
                channels={[
                  'HubSpot email nurture sequences',
                  'Multi-country paid acquisition funnels',
                  'On-platform UX improvements',
                  'Analytics instrumentation & dashboards',
                ]}
                ownership={[
                  'UK operations lead for B2C growth',
                  'End-to-end funnel analysis & rebuild',
                  'Messaging cadence, tone, and creative direction',
                  'Performance reporting to executive stakeholders',
                ]}
              />

              <div className="space-y-6">
                
                {/* The Brief */}
                <AccordionSection 
                  title="🎯 The Brief (The Handover Challenge!)" 
                  defaultOpen={true}
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">📋</span></div>}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        After being a successful User Growth Specialist, I was promoted to the Regional Marketing Coordinator role where I led the entire UK marketing operation. The brief was to increase sign-ups and improve funnel metrics.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        The company was investing in paid advertising to drive users to the platform, but the conversion rates were poor. Over 1000 people were entering the funnel, but only 26 were clicking through - a concerning 4.25% click rate.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        My job was to analyze the current funnel, identify bottlenecks, and implement improvements to maximize the return on advertising spend while increasing user acquisition.
                      </p>
                    </div>
                    <ZoomableImage
                      src="/images/projects/wywm/Project 2/thebrief.jpg"
                      alt="Project 2 Brief"
                      width={400}
                      height={250}
                    />
                  </div>
                  
                  <div className="mt-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4">
                    <p className="text-sm text-amber-800 dark:text-amber-400 italic">
                      <strong>Note:</strong> Some screenshots might not show accurate data due to me taking the screenshots in hindsight.
                    </p>
                  </div>
                </AccordionSection>

                {/* The Plan & Data Analysis */}
                <AccordionSection 
                  title="🧠 Detective Mode! (The Plan & Data Analysis)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🧠</span></div>}
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          My first step was to reframe the marketing strategy and determine how best to impact the metrics the company desired.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          Rather than launching additional ads and burning budget, I decided to focus on optimising the funnel and workflow—addressing the efficiency gaps that were throttling performance.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          I conducted a comprehensive analysis of the existing email funnel and identified critical issues that were causing poor performance and low conversion rates.
                        </p>
                      </div>
                      <ZoomableImage
                        src="/images/projects/wywm/Project 2/dataanalysis.png"
                        alt="Data Analysis"
                        width={400}
                        height={250}
                      />
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-primary mb-3">❌ Critical Issues Found</h4>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-primary mt-1">•</span>
                          <span>The emails start with jokiness instead of a clear goal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-primary mt-1">•</span>
                          <span>The Gif isn't relevant to the content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-primary mt-1">•</span>
                          <span>The email isn't responsive on desktop or mobile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-primary mt-1">•</span>
                          <span>Negative tone and messaging</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-secondary mb-3">💡 Impact Analysis</h4>
                      <p className="text-foreground/80 leading-relaxed mb-3">
                        The data showed that although over 1000 people entered this funnel, the low click rate of 4.25% (26 clicks) meant only a couple of hundred were signing up to the platform and performing the desired actions.
                      </p>
                      <p className="text-foreground/80 leading-relaxed">
                        Therefore, there were significant campaign costs to be saved by the company by executing a more efficient funnel and there were lots of untapped potential to increase further revenue.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-brand-secondary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/dataanalysisbad.png"
                          alt="Legacy Email Audit Findings"
                          width={300}
                          height={200}
                          className="!border-0"
                          caption="Legacy Email Audit Findings"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-brand-secondary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/currentdataold.png"
                          alt="Old Email Design Screenshot"
                          width={300}
                          height={200}
                          className="!border-0"
                          caption="Old Email Design Screenshot"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* The Execution */}
                <AccordionSection 
                  title="🚀 Making It Happen! (The Execution)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🚀</span></div>}
                >
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="border-l-4 border-brand-secondary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-secondary mb-3">Email Development & Strategy</h4>
                        <div className="space-y-3">
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            I began by creating a more engaging and professional email template that addressed all the issues identified in the analysis. The new approach focused on clear value propositions and professional presentation.
                          </p>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            The redesigned emails featured better mobile responsiveness, clearer calls-to-action, and messaging that aligned with user expectations and company goals.
                          </p>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            I also implemented a more strategic workflow sequence that guided users through the conversion process more effectively.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-brand-secondary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-secondary mb-3">Workflow Optimization</h4>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                          I restructured the entire user journey to eliminate friction points and create a more intuitive progression from initial interest to platform engagement. This included optimizing timing, messaging, and user experience touchpoints.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-brand-secondary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/old-workflow.png"
                          alt="Legacy Workflow Structure"
                          width={300}
                          height={200}
                          className="!border-0"
                          caption="Legacy Workflow Structure"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-brand-secondary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/emailmarketingexample.png"
                          alt="Updated Email Design"
                          width={300}
                          height={200}
                          className="!border-0"
                          caption="Updated Email Design"
                        />
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* The Results */}
                <AccordionSection 
                  title="🎉 Victory Lap! (Record Achievement)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎉</span></div>}
                >
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-brand-secondary mb-2">71</div>
                        <div className="text-lg text-foreground/70 mb-1">New Users Per Week</div>
                        <div className="text-sm text-brand-secondary font-semibold">Company Record Achievement</div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      <strong className="text-brand-secondary">Down The Rabbit Hole!</strong> The results were outstanding - we achieved a <strong className="text-brand-secondary">record number of 71 new users per week</strong>, which was unprecedented for the company.
                    </p>
                    
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      The funnel improvements resulted in significantly higher conversion rates and much better utilization of the advertising spend, demonstrating the power of optimization over just increasing ad spend.
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-secondary mb-3">💡 Key Learnings</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        This project proved that sometimes the solution isn't spending more money on ads, but optimizing what you already have. The 71 new users per week record stood as a testament to the power of data-driven optimization.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-green-200 dark:border-green-800/30 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/comparedata3-1.png"
                          alt="Improved Funnel Performance Dashboard"
                          width={300}
                          height={200}
                          className="!border-0"
                          caption="Improved Funnel Performance Dashboard"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden border border-green-200 dark:border-green-800/30 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/Project 2/britishincrease.png"
                          alt="British Market Increase"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">Market Growth Results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Skills Used for Project 2 - Enhanced and More Prominent */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-brand-secondary/10 to-brand-secondary/5 rounded-2xl p-8 border-2 border-brand-secondary/30"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-secondary mb-2 flex items-center justify-center gap-3">
                      <span className="text-2xl">🛠️</span> 
                      Skills Arsenal for This Project
                    </h3>
                    <p className="text-foreground/70">The analytical and optimization skills that drove record-breaking results</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                      { skill: 'Data Analysis', emoji: '📊' },
                      { skill: 'Email Marketing', emoji: '📧' },
                      { skill: 'Conversion Optimization', emoji: '🎯' },
                      { skill: 'HubSpot Workflows', emoji: '🔄' },
                      { skill: 'Funnel Analysis', emoji: '📈' },
                      { skill: 'A/B Testing', emoji: '🧪' },
                      { skill: 'User Experience Design', emoji: '👥' },
                      { skill: 'Marketing Automation', emoji: '🤖' },
                      { skill: 'Performance Analytics', emoji: '📋' },
                      { skill: 'Strategic Planning', emoji: '💡' }
                    ].map((item) => (
                      <div
                        key={item.skill}
                        className="bg-white dark:bg-gray-800 border border-brand-secondary/30 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                      >
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <span className="text-sm font-medium text-foreground/80">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Content */}
      {caseStudy.title === 'WithYouWithMe' && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Other Content Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full px-6 py-2 mb-4">
                  <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Other Content</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  Additional Creative Work
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Social posts, ad creatives, and other design work created during my time at WithYouWithMe
                </p>
              </motion.div>

              <div className="space-y-6">
                
                {/* Social Posts */}
                <AccordionSection 
                  title="📱 Social Media Magic! (Social Posts)"
                  defaultOpen={true}
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">📱</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Various social media posts created for WithYouWithMe's campaigns and general brand presence across different platforms.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/other content/CafArmy.png"
                          alt="CAF Army Social Post"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">CAF Army Social Post</p>
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/other content/courserelease1.png"
                          alt="Course Release Post"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">Course Release Announcement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Ad Creatives */}
                <AccordionSection 
                  title="🎨 Creative Showcase! (Ad Creatives)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎨</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Advertising creatives designed for various campaigns and special initiatives.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/other content/QueenDeath.png"
                          alt="Special Campaign Creative"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">Special Campaign Creative</p>
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-brand-primary/20 bg-white dark:bg-gray-800">
                        <ZoomableImage
                          src="/images/projects/wywm/other content/veteransawards.png"
                          alt="Veterans Awards Creative"
                          width={300}
                          height={200}
                          className="!border-0"
                        />
                        <div className="p-3">
                          <p className="text-sm text-foreground/70 text-center">Veterans Awards Creative</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Another Avenue - Main Project Section */}
      {caseStudy.title === 'Another Avenue' && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Project Header */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 rounded-full px-6 py-2 mb-4">
                  <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Automation Project</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  AI-Ready Job Sourcing Automation
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Eliminated 15+ hours/week of manual admin work with a cost-optimized automation workflow
                </p>
              </motion.div>

              <ProjectDashboard
                accent="primary"
                overview={[
                  { label: "Time Saved Per Week", value: "15+ hrs", context: "Manual admin eliminated" },
                  { label: "Cost Optimization", value: "99.75%", context: "Make.com ops reduced" },
                  { label: "Operations Per Run", value: "~2 ops", context: "Down from ~800" },
                ]}
                timeline={[
                  { phase: 'Discovery & Scope', detail: 'Stakeholder calls, mapped current workflow, set acceptance criteria' },
                  { phase: 'Design & Build', detail: 'Modular scenario, field schema, retry plan, light observability' },
                  { phase: 'Test & Optimize', detail: 'Handle duplicates/dead links, tune selectors, reduce ops from ~800 → ~2' },
                  { phase: 'Handover', detail: 'Setup notes, documentation, training walkthrough for non-technical staff' },
                ]}
                channels={[
                  'Make.com workflow orchestration & scheduling',
                  'Apify web scraping & data extraction',
                  'Google Sheets integration for data delivery',
                  'Custom de-duplication & normalization logic',
                ]}
                ownership={[
                  'End-to-end system architecture & design',
                  'Cost engineering & optimization strategy',
                  'GDPR compliance & data handling protocols',
                  'Documentation, training & knowledge transfer',
                ]}
              />

              {/* Project Story */}
              <div className="mt-12 space-y-6">
                
                {/* The Brief */}
                <AccordionSection 
                  title="🎯 The Brief (Mission Briefing!)"
                  defaultOpen={true}
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎯</span></div>}
                >
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Basecamp Skills (formerly We Are Basecamp) is a UK digital skills provider delivering Skills Bootcamp programs funded by multi-million-pound government contracts. They help learners transition into tech careers through intensive training programs.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Their <span className="font-semibold text-brand-primary">4-person partnerships team</span> was spending approximately <span className="font-bold text-brand-primary">15 hours per week</span> manually searching job boards (Reed, Indeed, LinkedIn) for alumni opportunities. This repetitive administrative work was pulling focus from higher-ROI activities like employer partnerships and graduate outcomes support.
                      </p>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        After multiple discovery meetings with <span className="font-semibold text-brand-primary">CEO Amy</span> and the partnerships team, I was engaged as a <span className="font-semibold text-brand-primary">Marketing & AI Automation Consultant</span> to design and implement an automated job sourcing workflow that would eliminate manual admin work and allow the team to focus on strategic partnerships and student success.
                      </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-brand-primary mb-3">🎯 Project Objectives</h4>
                        <ul className="space-y-2 text-foreground/80">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Replace manual job-board trawling with scheduled automation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Automate collection, standardization, de-duplication, and delivery to Google Sheets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Cost-optimize the system to minimize Make.com operation usage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                            <span>Create a scalable, maintainable system for non-technical staff</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-brand-secondary/5 border border-brand-secondary/20 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-brand-secondary mb-3">💰 ROI Calculation</h4>
                        <div className="space-y-3 text-foreground/80">
                          <div className="flex justify-between items-center pb-2 border-b border-border/30">
                            <span className="text-sm">Time saved per week:</span>
                            <span className="font-bold text-brand-secondary">15 hours</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b border-border/30">
                            <span className="text-sm">UK avg. salary (partnerships):</span>
                            <span className="font-bold">£35,000/year</span>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b border-border/30">
                            <span className="text-sm">Hourly rate:</span>
                            <span className="font-bold">≈£17/hour</span>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-sm font-semibold">Annual cost savings:</span>
                            <span className="font-bold text-2xl text-brand-secondary">£13,260</span>
                          </div>
                          <p className="text-xs text-foreground/60 italic">15 hrs/week × £17/hr × 52 weeks = £13,260/year</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-brand-primary mb-2">⏱️ Project Timeline</h4>
                          <p className="text-foreground/80">
                            <span className="font-bold text-brand-primary">4 weeks</span> from discovery to handover, including multiple stakeholder meetings with CEO Amy and the 4-person partnerships team. This timeline included discovery, design, build, testing, and significant time spent on cost optimization to reduce Make.com operations by 99.75%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* The Plan & Thought Process */}
                <AccordionSection 
                  title="🧠 Down The Rabbit Hole! (The Plan & Thought Process)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🧠</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      I began with <span className="font-semibold text-brand-primary">multiple stakeholder discovery meetings</span> with CEO Amy and all 4 members of the partnerships team to understand the current manual workflow, pain points, and success criteria. The team walked me through their daily reality: spending hours searching multiple job boards, copying listings into spreadsheets, manually de-duplicating entries, and formatting data for distribution.
                    </p>

                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-lg p-4">
                      <h4 className="text-base font-semibold text-brand-primary mb-2">👥 What The Team Told Me</h4>
                      <p className="text-base italic text-foreground/80 leading-relaxed">
                        "We're spending so much time on manual job searches that we don't have time to actually support our students or build relationships with employers. The data is always out of date by the time we share it, and we keep finding the same jobs over and over."
                      </p>
                      <p className="text-xs text-foreground/60 mt-2">— Partnerships Team during discovery</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border-l-4 border-brand-primary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-primary mb-3">Discovery & Scope</h4>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Multiple meetings with CEO Amy & 4-person team</li>
                          <li>• Mapped current manual workflow (15+ hrs/week)</li>
                          <li>• Identified data sources (Reed, Indeed, LinkedIn)</li>
                          <li>• Set acceptance criteria with stakeholders</li>
                          <li>• Defined success metrics and constraints</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-brand-secondary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-secondary mb-3">Design Phase</h4>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Architected modular Make.com scenario</li>
                          <li>• Designed field schema for standardization</li>
                          <li>• Planned retry logic and error handling</li>
                          <li>• Built in light observability for monitoring</li>
                          <li>• Prioritized cost optimization from day one</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-brand-primary mb-3">💡 Key Strategic Decision</h4>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Rather than building a complex system upfront, I focused on <span className="font-bold text-brand-primary">cost optimization from day one</span>. Make.com charges per operation, so I designed the workflow to minimize API calls through intelligent batching and caching—ultimately reducing operations by 99.75%. This decision was crucial given the system would run multiple times per week indefinitely.
                      </p>
                    </div>
                  </div>
                </AccordionSection>

                {/* The Execution */}
                <AccordionSection 
                  title="🚀 Making It Happen! (The Execution)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🚀</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      I built a <span className="font-semibold text-brand-primary">Make.com-orchestrated workflow</span> that triggers on a schedule, scrapes and filters job listings via Apify, normalizes fields, de-duplicates entries, and writes clean data to Google Sheets—all running hands-free in the background.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border-l-4 border-brand-primary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-primary mb-3">Workflow Architecture</h4>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• <span className="font-semibold">Scheduled trigger</span> kicks off the workflow</li>
                          <li>• <span className="font-semibold">Apify scraping</span> extracts listings from multiple sources</li>
                          <li>• <span className="font-semibold">Data normalization</span> standardizes fields across sources</li>
                          <li>• <span className="font-semibold">De-duplication logic</span> removes duplicate entries</li>
                          <li>• <span className="font-semibold">Google Sheets integration</span> delivers clean data</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-brand-secondary/30 pl-6">
                        <h4 className="text-xl font-semibold text-brand-secondary mb-3">Cost Optimization</h4>
                        <p className="text-foreground/80 mb-3">
                          Initial tests: <span className="font-bold text-red-500">~800 ops/run</span> → Re-architected to <span className="font-bold text-brand-primary">~2 ops/run</span> (99.75% reduction)
                        </p>
                        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-lg p-3">
                          <p className="text-sm text-foreground/80">
                            <span className="font-bold text-brand-primary">Result:</span> Runs multiple times per week at minimal cost
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Key Challenges */}
                <AccordionSection 
                  title="⚡ Plot Twist! (Key Challenges & Solutions)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-red-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">⚡</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Every automation project has its challenges. Here's how I navigated the key obstacles:
                    </p>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-bold text-brand-primary mb-2">Challenge: Cost Explosion</h5>
                            <p className="text-foreground/70">Initial workflow consumed ~800 Make.com operations per run, making regular scheduling cost-prohibitive.</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/30">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-brand-secondary mb-1">Solution:</p>
                              <p className="text-foreground/70">Re-architected with intelligent batching and caching, reducing to ~2 ops/run (99.75% reduction).</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-bold text-brand-primary mb-2">Challenge: Data Quality</h5>
                            <p className="text-foreground/70">Duplicate entries, dead links, and inconsistent formatting across job boards created messy data.</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/30">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-brand-secondary mb-1">Solution:</p>
                              <p className="text-foreground/70">Built robust de-duplication logic and dead link detection to ensure clean, reliable data delivery.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-bold text-brand-primary mb-2">Challenge: GDPR Compliance</h5>
                            <p className="text-foreground/70">System needed to avoid handling student PII while still delivering relevant opportunities.</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/30">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-brand-secondary mb-1">Solution:</p>
                              <p className="text-foreground/70">Designed workflow to process only public job data, with no student information passing through the system.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h5 className="font-bold text-brand-primary mb-2">Challenge: Non-Technical Users</h5>
                            <p className="text-foreground/70">Partnerships team needed to monitor and maintain the system without technical expertise.</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/30">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold text-brand-secondary mb-1">Solution:</p>
                              <p className="text-foreground/70">Created comprehensive documentation and conducted training walkthroughs for easy monitoring.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Results & Transformation */}
                <AccordionSection 
                  title="🎉 Victory Lap! (Results & Transformation)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🎉</span></div>}
                >
                  <div className="space-y-8">
                    {/* Before/After Comparison */}
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Clock className="h-8 w-8 text-red-500" />
                          <h4 className="text-xl font-bold text-foreground">Before: Manual Process</h4>
                        </div>
                        <ul className="space-y-3 text-foreground/80">
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span><span className="font-bold">15+ hours/week</span> spent on manual job searches</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>Inconsistent data freshness and quality</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>Manual de-duplication and formatting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>Team focus pulled from strategic work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">✗</span>
                            <span>Human error in data entry</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/10 border-2 border-green-200 dark:border-green-800/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Sparkles className="h-8 w-8 text-green-500" />
                          <h4 className="text-xl font-bold text-foreground">After: Automated System</h4>
                        </div>
                        <ul className="space-y-3 text-foreground/80">
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span><span className="font-bold">Fully automated</span> hands-free operation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Fresh data delivered on schedule</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Automatic de-duplication and formatting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Team freed for high-ROI activities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>Consistent, reliable data quality</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-4">
                        <Clock className="h-8 w-8 text-brand-primary mb-2" />
                        <div className="text-3xl font-bold text-brand-primary mb-1">15+ hrs/week</div>
                        <div className="text-sm font-semibold text-foreground/80">Manual Admin Eliminated</div>
                      </div>
                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 p-4">
                        <DollarSign className="h-8 w-8 text-brand-secondary mb-2" />
                        <div className="text-3xl font-bold text-brand-secondary mb-1">99.75%</div>
                        <div className="text-sm font-semibold text-foreground/80">Cost Optimization</div>
                      </div>
                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 p-4">
                        <BarChart3 className="h-8 w-8 text-brand-primary mb-2" />
                        <div className="text-3xl font-bold text-brand-primary mb-1">£13,260/year</div>
                        <div className="text-sm font-semibold text-foreground/80">Annual Savings</div>
                      </div>
                    </div>

                    {/* Business Impact */}
                    <div className="rounded-xl border border-border/30 bg-card/50 p-6">
                      <h4 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                        <TrendingUp className="h-6 w-6" />
                        Business Transformation
                      </h4>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Strategic Focus Restored</p>
                            <p className="text-xs text-foreground/70">Team freed for employer relationships & outcomes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Consistent Data Quality</p>
                            <p className="text-xs text-foreground/70">Fresh data delivered automatically on schedule</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Scalable Infrastructure</p>
                            <p className="text-xs text-foreground/70">Expand sources & filters without rebuild</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">Non-Technical Maintenance</p>
                            <p className="text-xs text-foreground/70">Team can monitor independently with docs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                {/* Future Opportunities */}
                <AccordionSection 
                  title="🔮 What's Next? (Future Opportunities)"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🔮</span></div>}
                >
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      The current system is production-ready and delivering value, but there's significant potential for expansion. Here's the roadmap I explored with the Basecamp team:
                    </p>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                        <div className="flex items-start gap-2">
                          <BarChart3 className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-brand-primary text-sm mb-1">Multi-Source Expansion</h5>
                            <p className="text-xs text-foreground/70">Add Glassdoor, CV Library, Totaljobs with confidence scoring</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-secondary/5 to-transparent p-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-brand-secondary text-sm mb-1">Review UI</h5>
                            <p className="text-xs text-foreground/70">Approve/ignore interface before publishing to students</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                        <div className="flex items-start gap-2">
                          <Activity className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-brand-primary text-sm mb-1">Status Notifications</h5>
                            <p className="text-xs text-foreground/70">Slack/email summaries for run status & monitoring</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-secondary/5 to-transparent p-4">
                        <div className="flex items-start gap-2">
                          <Workflow className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-brand-secondary text-sm mb-1">HubSpot Integration</h5>
                            <p className="text-xs text-foreground/70">Automated student outreach based on job matches</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 md:col-span-2">
                        <div className="flex items-start gap-2">
                          <Sparkles className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-bold text-purple-500 text-sm mb-1">AI Interview Prep Automation</h5>
                            <p className="text-xs text-foreground/70">Mock-interview automation with AI-generated feedback for job opportunities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionSection>

                <AccordionSection 
                  title="🛠️ Tech Stack & Tools"
                  icon={<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-brand-primary rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">🛠️</span></div>}
                >
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {caseStudy.skillsUsed?.map((skill) => (
                        <div key={skill} className="rounded-xl border border-border/30 bg-gradient-to-br from-brand-primary/5 to-transparent p-4">
                          <p className="font-semibold text-foreground/90">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionSection>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Default Project Layout for other case studies */}
      {!isWithYouWithMe && !isAnotherAvenue && (
        <DefaultCaseStudySection caseStudy={caseStudy} />
      )}

      {/* Related Case Studies */}
      {recommendations.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary/70">You may also like</p>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Explore other playbooks</h3>
                <p className="text-foreground/70 mt-3">Hand-picked case studies that show different sides of my automation, marketing, and community work.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {recommendations.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case/${item.slug}`}
                    className="group rounded-2xl border border-border/40 bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">{item.category}</span>
                      <ArrowUpRight className="h-5 w-5 text-brand-primary opacity-70 group-hover:opacity-100" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {item.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects Button */}
      <section className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                ← Back to Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 