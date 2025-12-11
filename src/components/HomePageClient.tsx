'use client'

import { Hero } from '@/components/Hero'
import { ProfessionalTestimonials } from '@/components/ProfessionalTestimonials'
import { SEOSchema } from '@/components/SEOSchema'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}


// Reusable animated background mesh
const SectionMesh = ({ className = "" }: { className?: string }) => (
  <motion.div
    aria-hidden
    className={`pointer-events-none absolute inset-0 ${className}`}
    animate={{
      opacity: [0.08, 0.14, 0.1],
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 20%, rgba(192,132,252,0.18), transparent 32%),
        radial-gradient(circle at 80% 30%, rgba(168,85,247,0.16), transparent 30%),
        radial-gradient(circle at 40% 80%, rgba(94,234,212,0.10), transparent 28%),
        radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05), transparent 26%)
      `,
      backgroundSize: "140% 140%",
    }}
  />
)

// Consistent card component
const Card = ({ children, className = "", hover = true }: { children: React.ReactNode, className?: string, hover?: boolean }) => (
  <motion.div 
    variants={scaleIn}
    className={`bg-card/80 backdrop-blur-sm rounded-2xl border border-border/40 p-6 ${hover ? 'hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300' : ''} ${className}`}
  >
    {children}
  </motion.div>
)

// Section label component for consistency
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.p 
    variants={fadeIn}
    className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-brand-secondary/90 bg-brand-primary/5 border border-brand-primary/20 shadow-sm mb-6"
  >
    {children}
  </motion.p>
)

// Section title with brand highlight
const SectionTitle = ({ children, highlight, className = "" }: { children: React.ReactNode, highlight?: string, className?: string }) => (
  <motion.h2 
    variants={fadeInUp}
    className={`relative inline-block text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight ${className}`}
  >
    <span className="relative z-10">
      {children} {highlight && <span className="text-brand-secondary">{highlight}</span>}
    </span>
    <span
      aria-hidden
      className="absolute inset-x-0 bottom-1 h-3 -skew-y-2 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-sm blur-[1px]"
    />
  </motion.h2>
)

export function HomePageClient() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* SEO Schema Markup */}
      <SEOSchema 
        type="person" 
        data={{
          name: "Jack Desmond",
          jobTitle: "Digital Marketing Consultant & Automation Strategist",
          description: "T-shaped digital marketing consultant and automation strategist. Building smarter systems for sustainable growth through marketing automation, funnel optimization, and strategic thinking.",
          url: "https://desmonddigital.com",
          image: "https://desmonddigital.com/images/hero/Jackimage.png",
          expertise: [
            "Digital Marketing",
            "Marketing Automation", 
            "Funnel Optimization",
            "Paid Advertising",
            "Growth Strategy",
            "Systems Thinking",
            "Neurodivergent Consulting"
          ]
        }}
      />
      <SEOSchema 
        type="organization" 
        data={{
          name: "Desmond Digital",
          description: "Digital marketing consulting and automation services specializing in systematic growth strategies",
          url: "https://desmonddigital.com"
        }}
      />
      <SEOSchema 
        type="service" 
        data={{
          name: "Digital Marketing Consulting Services",
          description: "Comprehensive digital marketing automation, funnel optimization, and paid advertising services",
          services: [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Automation",
                "description": "Automated workflows, lead nurturing, and customer onboarding systems"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Funnel Optimization",
                "description": "Conversion-focused sales funnel design and psychological optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customer Persona & Messaging Strategy", 
                "description": "Qualitative research, voice-of-customer synthesis, and persona frameworks that influence every channel"
              }
            }
          ]
        }}
      />
      
      <Hero extraHeading="If you're seeing this, it means I'm interested in working with you." />
      
      {/* The Honest Pitch */}
      <section className="py-24 bg-gradient-to-br from-brand-primary/10 via-background to-brand-secondary/5 relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        {/* Animated background orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <SectionLabel>Here's the deal</SectionLabel>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8"
            >
              I'm not the marketer who runs ads and calls it a day. I figure out{' '}
              <span className="text-brand-secondary">why things aren't working</span>—and fix them.
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-foreground/75 font-medium leading-relaxed max-w-3xl mb-12"
            >
              I've got ADHD. My brain spots patterns others miss and hyperfocuses until the problem's solved. 
              That's why I built an automation that went from 800 operations to 2—or hit 93 attendees when the target was 50.
            </motion.p>
            
            {/* Stats grid */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="col-span-2 bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-brand-primary/30 hover:border-brand-primary/50 transition-all duration-300"
              >
                <p className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">15+ hrs/week</p>
                <p className="text-sm text-foreground/70">Manual work automated away</p>
              </motion.div>
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-brand-secondary/40 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-brand-secondary mb-2">93</p>
                <p className="text-xs text-foreground/70">Attendees (target: 50)</p>
              </motion.div>
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-brand-primary/40 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-brand-primary mb-2">71</p>
                <p className="text-xs text-foreground/70">Weekly signups record</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 transition-all duration-300"
              >
                See the work
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-2xl border-2 border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300"
              >
                Let's talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick navigation */}
      <nav className="py-4 bg-background/95 backdrop-blur-md border-y border-border/20 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">
            {['proof', 'process', 'skills', 'comparison', 'roles', 'projects', 'testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="hover:text-brand-secondary transition-colors duration-200"
              >
                {item === 'process' ? 'How I Work' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Proof Section */}
      <section id="proof" className="py-24 bg-background relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        <motion.div 
          className="absolute -left-24 top-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-16 bottom-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-16">
              <SectionLabel>Real numbers, real projects</SectionLabel>
              <SectionTitle highlight="actually happened.">
                I don't do hypotheticals. Here's what
              </SectionTitle>
            </div>
            
            {/* Proof cards */}
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Featured card */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="md:row-span-2 rounded-2xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 p-8 border border-brand-primary/30 hover:border-brand-primary/50 transition-all duration-300 group"
              >
                <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-primary/20 text-brand-primary rounded-full mb-6">
                  Automation
                </span>
                <motion.p 
                  className="text-5xl md:text-6xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  ~800 → 2
                </motion.p>
                <p className="text-lg text-brand-secondary mb-6">operations per run</p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Another Avenue's team was drowning in manual job scraping. Built a Make.com workflow that handles it automatically—and optimised it from 800 ops down to 2.
                </p>
                <Link href="/case/another-avenue" className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-secondary transition-colors">
                  Read full case study
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
              
              <Card className="hover:border-brand-secondary/40">
                <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-secondary/20 text-brand-secondary rounded-full mb-4">
                  Event Marketing
                </span>
                <p className="text-3xl font-bold text-foreground mb-1">93 attendees</p>
                <p className="text-sm text-brand-secondary mb-4">Target: 50 · 86% above goal</p>
                <p className="text-sm text-foreground/70">
                  WYWM Job Accelerator event. Landing page broke on the day—rebuilt the registration flow on the spot and still smashed the target.
                </p>
              </Card>
              
              <Card className="hover:border-brand-primary/40">
                <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-primary/20 text-brand-primary rounded-full mb-4">
                  Funnel Optimisation
                </span>
                <p className="text-3xl font-bold text-foreground mb-1">71 new users</p>
                <p className="text-sm text-brand-primary mb-4">In one week · Company record</p>
                <p className="text-sm text-foreground/70">
                  Fixed the emails instead of throwing ad budget at a broken funnel. The problem wasn't ads—the nurture sequence was confusing people.
                </p>
              </Card>
            </motion.div>
            
            {/* Secondary stats */}
            <motion.div 
              variants={staggerContainer}
              className="mt-8 grid md:grid-cols-2 gap-4"
            >
              {[
                { emoji: "📞", stat: "11 booked calls", detail: "Month one at Mammoth Hunter Club (KPI: 10). Earned a promotion." },
                { emoji: "📄", stat: "30+ page playbook", detail: "Brand, UX & CRO blueprint for WildEdge with Loom walkthroughs." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card/60 border border-border/30 hover:border-brand-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.stat}</p>
                    <p className="text-sm text-foreground/60">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* How I Work */}
      <section id="process" className="py-24 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        {/* Subtle grid pattern */}
        <motion.div 
          className="absolute -right-16 top-12 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -left-20 bottom-6 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.16, 0.28, 0.16] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-20">
              <SectionLabel>What it's like working with me</SectionLabel>
              <SectionTitle highlight="and I ship.">
                I show up, document everything,
              </SectionTitle>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/60 max-w-2xl mx-auto">
                No mystery about what I'm working on. You'll always know what's happening, what's next, and why.
              </motion.p>
            </div>
            
            {/* Timeline */}
            <motion.div variants={staggerContainer} className="space-y-8">
              {[
                { 
                  time: "First 48 hours", 
                  title: "Audit & Map", 
                  color: "primary",
                  desc: "I dig into your stack, funnels, and workflows—mapping the entire customer journey and documenting friction points. You get a shared doc with findings and a prioritised hit list."
                },
                { 
                  time: "Week one", 
                  title: "Priorities & Plan", 
                  color: "secondary",
                  desc: "We agree on what moves the needle. I ship a comms plan so you know exactly when I'll update you and how to give feedback. No ghosting."
                },
                { 
                  time: "Ongoing", 
                  title: "Ship & Iterate", 
                  color: "primary",
                  desc: "I own the backlog. Every automation or campaign gets a Loom brief so anyone can pick it up. Results reported in plain English tied to agreed KPIs."
                }
              ].map((phase, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row gap-6 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/4 ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-4 py-2 rounded-full mb-2 ${
                        phase.color === 'primary' 
                          ? 'bg-brand-primary/15 text-brand-primary' 
                          : 'bg-brand-secondary/15 text-brand-secondary'
                      }`}
                    >
                      <span className="text-sm font-bold">{phase.time}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                  </div>
                  
                  <div className="hidden md:flex flex-col items-center">
                    <motion.div 
                      className={`w-4 h-4 rounded-full ${
                        phase.color === 'primary' ? 'bg-brand-primary' : 'bg-brand-secondary'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    />
                    {i < 2 && (
                      <motion.div 
                        className="w-0.5 h-20 bg-gradient-to-b from-brand-primary/50 to-brand-secondary/50"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      />
                    )}
                  </div>
                  
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="md:w-3/4 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/40 hover:border-brand-primary/30 transition-all duration-300"
                  >
                    <p className="text-foreground/80 leading-relaxed">{phase.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />

      {/* Skills & Stack */}
      <section id="skills" className="py-24 bg-gradient-to-b from-background to-card/15 relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        <motion.div 
          className="absolute -left-24 top-6 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-16 bottom-6 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.05, 0.94, 1.05], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-12 text-center">
              <SectionLabel>AI that works</SectionLabel>
              <SectionTitle highlight="hard">I bring the skills, they bring excuses</SectionTitle>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/75 font-medium leading-relaxed max-w-3xl mx-auto">
                I use AI to ship faster and smarter: ChatGPT prompt chains for QA and reporting, co-pilots for content drafts, and automation guardrails so nothing breaks. Non-AI marketers move slow and stay manual—I don’t.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary mb-4">How I use AI</p>
                <div className="space-y-2 text-sm text-foreground/80">
                  <div className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-brand-secondary mt-1"></span><span>ChatGPT chains for QA, briefs, and reporting so execs get clarity fast.</span></div>
                  <div className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-brand-secondary mt-1"></span><span>AI co-pilots in Make/Zapier to catch edge cases before launch.</span></div>
                  <div className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-brand-secondary mt-1"></span><span>Content drafts + personalization at scale without losing brand voice.</span></div>
                  <div className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-brand-secondary mt-1"></span><span>Faster post-mortems: AI-assisted summaries of experiments and next steps.</span></div>
                  <div className="flex items-start gap-2"><span className="h-2 w-2 rounded-full bg-brand-secondary mt-1"></span><span>Non-AI marketers stay manual and slow; I ship with guardrails and speed.</span></div>
                </div>
              </Card>

              <Card>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary mb-4">AI toolkit</p>
                <div className="grid grid-cols-2 gap-3 text-sm text-foreground/80">
                  {[
                    'ChatGPT: briefs, QA, summaries',
                    'AI co-pilots in Make/Zapier',
                    'AI-assisted reporting decks',
                    'AI content drafts + tone checks'
                  ].map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand-primary"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/60 mt-3">
                  Built into my workflows so I move faster than non-AI marketers while keeping quality high.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-background relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        <motion.div 
          className="absolute -left-16 top-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-20 bottom-4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.08, 0.95, 1.08], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <SectionLabel>Why I'm the no-brainer</SectionLabel>
              <SectionTitle highlight="everyone else">
                Me vs.
              </SectionTitle>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/75 font-medium leading-relaxed max-w-3xl mx-auto">
                Clear, AI-ready, documented operations vs typical marketers who ship isolated campaigns.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-foreground/65 max-w-3xl mx-auto mt-4">
                Soft skills: exec comms, problem solving, growth mindset, async leadership. Tech: Make/Zapier, HubSpot/GoHighLevel/Klaviyo, GA4, Hotjar, Ads (Meta/LinkedIn/Google), social publishing, Webflow/WordPress/Squarespace, Figma/Canva, Discord, email/SMS lifecycle, CRO A/B & QA.
              </motion.p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/80 backdrop-blur">
              <div className="hidden md:grid grid-cols-[200px,1fr,1fr] bg-card/70 border-b border-border/30 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                <div className="p-4"></div>
                <div className="p-4 text-brand-primary">Jack (AI-ready)</div>
                <div className="p-4">Typical hire</div>
              </div>
              {[
                {
                  label: 'System Design',
                  me: 'Maps full funnel, automates handoffs, documents so ops can repeat.',
                  them: 'Builds campaigns in isolation, hands off messy execution.',
                },
                {
                  label: 'AI Readiness',
                  me: 'Uses AI for QA, reporting, and ops co-pilots; workflows designed for AI loops.',
                  them: 'Manual processes, brittle handoffs, minimal AI leverage.',
                },
                {
                  label: 'Speed & Focus',
                  me: 'First 48h audit + priorities + comms plan.',
                  them: 'Needs long ramp time and unclear priorities.',
                },
                {
                  label: 'Communication',
                  me: 'Exec-ready updates, Looms, and async notes; no guessing.',
                  them: 'Updates are ad-hoc; stakeholders guess progress.',
                },
                {
                  label: 'Documentation',
                  me: 'Playbooks, QA plans, and ownership docs baked in.',
                  them: 'Little to no documentation; knowledge in heads.',
                },
                {
                  label: 'Outcomes',
                  me: '15+ hrs/week saved; 93 attendees vs 50 target; 71 weekly signups record.',
                  them: 'Talks channel metrics; light on business outcomes.',
                },
                {
                  label: 'Tools & Stack',
                  me: 'Make/Zapier, HubSpot/Klaviyo, GA4/Looker, Amplitude/Hotjar, Webflow, Ads, Figma.',
                  them: 'Needs specialists to execute; waits on others.',
                },
              ].map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 md:grid-cols-[200px,1fr,1fr] border-t border-border/30 ${index % 2 === 0 ? 'bg-card/60' : 'bg-background/70'}`}
                >
                  <div className="p-4 text-sm font-semibold text-foreground uppercase tracking-[0.2em]">
                    {row.label}
                  </div>
                  <div className="p-4 border-t md:border-t-0 md:border-l border-brand-primary/40 text-sm text-foreground/90 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-xl shadow-sm">
                    <span className="text-brand-primary font-bold mr-2">✓</span>
                    {row.me}
                  </div>
                  <div className="p-4 border-t md:border-t-0 md:border-l border-border/30 text-sm text-foreground/70">
                    <span className="text-foreground/50 font-bold mr-2">—</span>
                    {row.them}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="roles" className="py-24 bg-background relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        <motion.div 
          className="absolute -right-10 top-16 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -left-14 bottom-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1.05, 0.92, 1.05], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="mb-16">
              <SectionLabel>Where I fit</SectionLabel>
              <SectionTitle highlight="fit best.">
                Different hats, here are the ones that
              </SectionTitle>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/75 font-medium leading-relaxed">
                Full-time, contract, or fractional. I slot in fast and ramp up faster.
              </motion.p>
            </div>
            
            <motion.div variants={staggerContainer} className="space-y-6">
              {/* Featured role */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="flex flex-col lg:flex-row gap-8 p-8 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-brand-primary/40 transition-all duration-300"
              >
                <div className="lg:w-1/3">
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-primary/20 text-brand-primary rounded-full mb-4">
                    Strategic
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Digital Marketing <span className="text-brand-secondary">Executive</span>
                  </h3>
                  <p className="text-foreground/60">Own the entire demand engine and report to founders.</p>
                </div>
                <div className="lg:w-2/3 grid md:grid-cols-3 gap-6">
                  {[
                    { label: "What I own", value: "Channel strategy, budget allocation, team coordination, leadership reporting." },
                    { label: "Collaboration", value: "Weekly syncs with sales, product, CS. Written updates execs can forward." },
                    { label: "Tools", value: "HubSpot, GA4, Looker Studio, Monday, Notion." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary/70 mb-2">{item.label}</p>
                      <p className="text-sm text-foreground/70">{item.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Other roles */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-brand-secondary/40 transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-secondary/20 text-brand-secondary rounded-full mb-4">
                    Experimental
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Growth <span className="text-brand-secondary">Marketer</span>
                  </h3>
                  <p className="text-foreground/60 text-sm mb-5">Run experiments, find leverage, report what moved the needle.</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1">You get</p>
                      <p className="text-sm text-foreground/70">Weekly experiments, plain-English reports, discovery calls.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1">Tools</p>
                      <p className="text-sm text-foreground/70">Amplitude, Hotjar, Airtable, Figma.</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-brand-primary/40 transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-brand-primary/20 text-brand-primary rounded-full mb-4">
                    Technical
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Automation <span className="text-brand-secondary">Specialist</span>
                  </h3>
                  <p className="text-foreground/60 text-sm mb-5">Build the glue between ads, email, CRM, and ops.</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1">You get</p>
                      <p className="text-sm text-foreground/70">Workflows that save 10+ hrs/week, QA docs, team training.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-1">Tools</p>
                      <p className="text-sm text-foreground/70">Make, Zapier, HubSpot, Webflow.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-card/10 to-background relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        <motion.div 
          className="absolute -left-24 top-0 w-80 h-80 bg-brand-primary/12 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.32, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-20 bottom-6 w-80 h-80 bg-brand-secondary/12 rounded-full blur-3xl"
          animate={{ scale: [1.08, 0.96, 1.08], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-16">
              <SectionLabel>Case studies</SectionLabel>
              <SectionTitle highlight="the receipts.">
                Don't take my word for it—read
              </SectionTitle>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/75 font-medium leading-relaxed">
                Each project has the brief, process, and actual results.
              </motion.p>
            </div>
            
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  href: "/case/another-avenue",
                  tag: "Automation",
                  tagColor: "primary",
                  stat: "15+ hrs saved/week",
                  title: "Another Avenue",
                  titleHighlight: "Job Automation",
                  desc: "Built a workflow that automated manual job scraping—optimised from ~800 ops down to 2."
                },
                {
                  href: "/case/withyouwithme",
                  tag: "Event + Funnel",
                  tagColor: "secondary",
                  stat: "86% above target",
                  title: "WithYouWithMe",
                  titleHighlight: "Campaigns",
                  desc: "93 attendees (target: 50). Funnel rebuild broke the company signup record."
                },
                {
                  href: "/case/wildedge-consultancy",
                  tag: "Strategy",
                  tagColor: "primary",
                  stat: "30+ pages",
                  title: "WildEdge",
                  titleHighlight: "Brand & CRO",
                  desc: "Full brand, UX, and CRO blueprint with 25 prioritised actions and Loom walkthroughs."
                },
                {
                  href: "/case/mammoth-hunter-club",
                  tag: "Community",
                  tagColor: "secondary",
                  stat: "11 calls booked",
                  title: "Mammoth Hunter",
                  titleHighlight: "Club Growth",
                  desc: "Beat the outreach KPI in month one. Promoted to Community Manager."
                }
              ].map((project, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <Link href={project.href} className="group block h-full">
                    <motion.div 
                      whileHover={{ y: -8 }}
                      className={`h-full p-8 bg-card/80 backdrop-blur-sm border border-border/40 rounded-2xl hover:border-brand-${project.tagColor}/40 hover:shadow-xl hover:shadow-brand-${project.tagColor}/10 transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full ${
                          project.tagColor === 'primary' 
                            ? 'bg-brand-primary/15 text-brand-primary' 
                            : 'bg-brand-secondary/15 text-brand-secondary'
                        }`}>
                          {project.tag}
                        </span>
                        <span className={`text-sm font-bold ${
                          project.tagColor === 'primary' ? 'text-brand-secondary' : 'text-brand-primary'
                        }`}>
                          {project.stat}
                        </span>
                      </div>
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-brand-${project.tagColor} transition-colors`}>
                        {project.title} <span className="text-brand-secondary">{project.titleHighlight}</span>
                      </h3>
                      <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                      <span className={`font-semibold inline-flex items-center gap-2 ${
                        project.tagColor === 'primary' ? 'text-brand-primary' : 'text-brand-secondary'
                      }`}>
                        Read case study
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-2xl font-semibold hover:bg-foreground/90 transition-all duration-300"
              >
                View all projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="testimonials">
        <ProfessionalTestimonials />
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-primary/15 via-background to-brand-secondary/15 relative overflow-hidden">
        <SectionMesh className="mix-blend-screen opacity-80" />
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Look, if you've read <span className="text-brand-secondary">this far</span>...
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              You're probably a hiring manager wondering if I'm actually this thorough, or a founder tired of marketers who can't execute. Either way—let's talk. I'll be direct about fit.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transition-all duration-300"
              >
                Book a call
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
              <a
                href="mailto:jack@desmonddigital.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-foreground/20 text-foreground hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              >
                Or email me
              </a>
            </motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-sm text-foreground/40 mt-10"
            >
              Usually respond within 24 hours. Recruiters welcome.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

