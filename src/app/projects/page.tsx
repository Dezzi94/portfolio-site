'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search, Target, Zap, Sparkles } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'

const projects = [
  {
    title: 'Another Avenue',
    subtitle: 'Job Scraper Automation via Make.com',
    description: 'Built an automated Make.com workflow that scrapes, filters, and distributes relevant job postings in real-time, eliminating manual work and improving lead quality.',
    companyDescription: 'Another Avenue (formerly Wearbasecamp) is a professional development platform offering skills bootcamps and career acceleration programs. They specialize in digital marketing, data analytics, and tech skills training designed to help professionals transition into high-demand careers.',
    results: [
      '15+ hours/week of manual admin removed for the partnerships team',
      'Make.com scenario optimised from ~800 ops/run to ~2 ops/run',
      'Fully documented workflow with training handover for non-technical staff'
    ],
    slug: 'another-avenue',
    category: 'Automation Systems',
    color: 'teal' as const,
    logo: '/images/projects/another-avenue/logo.png'
  },
  {
    title: 'WildEdge Consultancy',
    subtitle: 'Website Optimization & Management for Amy Wild',
    description: 'Complete website overhaul and ongoing management for WildEdge Consultancy, improving user experience, conversion rates, and establishing automated maintenance workflows.',
    companyDescription: 'WildEdge Consultancy is a strategic business consulting firm specializing in helping growing businesses optimize their operations, improve efficiency, and scale sustainably. They provide expert guidance in process improvement, strategic planning, and operational transformation.',
    results: [
      '30+ page brand, UX, and CRO playbook delivered',
      '25 prioritised UX/CRO actions ready for dev handoff',
      'Social growth plan with three evergreen content pillars'
    ],
    slug: 'wildedge-consultancy',
    category: 'Brand & Funnel Strategy',
    color: 'teal' as const,
    logo: '/images/projects/dezzi-digital/logo.jpg'
  },
  {
    title: 'Mammoth Hunter Club',
    subtitle: 'Community Building + Social Growth',
    description: 'Organic outreach program that hit the 10-call KPI immediately and evolved into a community management role with weekly programming.',
    companyDescription: 'Mammoth Hunter Club is a premium networking community for ambitious entrepreneurs and business leaders focused on identifying and pursuing significant growth opportunities. The club facilitates strategic connections, peer mentorship, and collaborative business development among high-achieving professionals.',
    results: [
      '11 qualified calls booked in the first month (KPI was 10)',
      'Promoted to Community Manager after 4 months',
      'Weekly posts, feedback loops, and events kept members active'
    ],
    slug: 'mammoth-hunter-club',
    category: 'Community Growth',
    color: 'purple' as const,
    logo: '/images/projects/mammoth-hunter-club/logo.svg'
  },
  {
    title: 'WithYouWithMe',
    subtitle: 'Job Accelerator Event - Marketing Campaign',
    description: 'Created and executed a comprehensive marketing campaign for WithYouWithMe\'s Job Accelerator Event, targeting veterans, neurodiverse individuals, and refugees transitioning into tech careers.',
    companyDescription: 'WithYouWithMe is a FREE online training platform for overlooked talent that develops and up-skills talented military professionals, neurodiverse individuals, and refugees to transition successfully into technology careers through their pathway and mentoring model.',
    results: [
      '93 attendees vs 50 target for the flagship Job Accelerator event',
      '71 new platform users in a single week after funnel optimisation',
      'Two major marketing programs executed end-to-end'
    ],
    slug: 'withyouwithme',
    category: 'Paid Advertising',
    color: 'teal' as const,
    logo: '/images/projects/wywm/wywmlogo.png'
  },
]

const categories = Array.from(
  new Set([
    'All Projects',
    ...projects.map((project) => project.category)
  ])
)

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(192, 132, 252, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
            backgroundSize: "400% 400%"
          }}
        />
      </div>

      {/* Hero Section - Enhanced */}
      <section className="py-section pt-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full blur-xl"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 rounded-full blur-xl"
              animate={{
                y: [10, -10, 10],
                x: [5, -5, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ 
                    backgroundSize: "200% 200%" 
                  }}
                >
                  Real results.
                </motion.span>
                <br />
                <span className="text-foreground">Real businesses.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Case studies that showcase how strategic thinking, smart systems, and the neurodivergent 
              edge drive <motion.span 
                className="text-brand-primary font-semibold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                measurable growth
              </motion.span> for businesses across industries.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section - Enhanced */}
      <motion.section 
        className="py-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-card/10 via-card/20 to-card/10 backdrop-blur-sm border-y border-white/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-6 mb-8">
              <motion.div 
                className="flex items-center gap-3 text-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 4px 15px rgba(192, 132, 252, 0.3)",
                      "0 4px 15px rgba(168, 85, 247, 0.3)",
                      "0 4px 15px rgba(192, 132, 252, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Filter className="h-6 w-6 text-white" />
                </motion.div>
                <span className="font-bold text-xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">Filter by category</span>
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                      category === selectedCategory
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-xl shadow-brand-primary/30'
                        : 'bg-card/60 backdrop-blur-sm border border-brand-primary/20 text-foreground/80 hover:text-white hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/20'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {/* Animated background */}
                    {category !== selectedCategory && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{
                          background: [
                            "linear-gradient(90deg, rgba(192, 132, 252, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                            "linear-gradient(270deg, rgba(168, 85, 247, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%)",
                            "linear-gradient(90deg, rgba(192, 132, 252, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                    {category === selectedCategory && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-xl"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid - Enhanced */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  companyDescription={project.companyDescription}
                  results={project.results}
                  slug={project.slug}
                  category={project.category}
                  color={project.color}
                  logo={project.logo}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <motion.section 
        className="py-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How I approach each project
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/70"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A systematic methodology that ensures consistent results and scalable solutions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Deep Discovery',
                description: 'I dig into your business model, current systems, and growth blockers. Understanding the full picture before proposing solutions.',
                icon: Search,
                gradient: 'from-brand-primary to-brand-secondary'
              },
              {
                step: '02', 
                title: 'Strategic Design',
                description: 'Map out the optimal solution architecture. Every automation, every funnel step, every campaign designed with your specific goals in mind.',
                icon: Target,
                gradient: 'from-brand-secondary to-brand-primary'
              },
              {
                step: '03',
                title: 'Iterative Optimization',
                description: 'Launch, measure, refine. I monitor performance closely and continuously optimize based on real data and user behavior.',
                icon: Zap,
                gradient: 'from-brand-primary to-brand-secondary'
              }
            ].map((phase, index) => (
              <motion.div 
                key={phase.step} 
                className="text-center group"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${phase.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)",
                        "linear-gradient(225deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
                        "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 100%)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <phase.icon className="h-10 w-10 text-white relative z-10" />
                  <motion.div
                    className="absolute top-2 right-2 text-white/60 font-bold text-xs"
                    whileHover={{ scale: 1.2 }}
                  >
                    {phase.step}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {phase.title}
                </motion.h3>
                <p className="text-foreground/70 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Enhanced */}
      <motion.section 
        className="py-section relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-card/20 via-card/30 to-card/20 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              whileInView={{ scale: [0.9, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to see similar results?
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/70 mb-8"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss your growth challenges and design a system that delivers 
              the kind of results you see in these case studies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Schedule Strategy Call
                </span>
              </motion.a>
              <motion.a
                href="/services"
                className="group px-8 py-4 bg-card/60 backdrop-blur-sm border-2 border-brand-primary/30 text-foreground rounded-xl font-semibold text-lg hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-secondary/10 hover:border-brand-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Explore Services
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 