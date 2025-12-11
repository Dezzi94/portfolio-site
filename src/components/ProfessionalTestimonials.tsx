'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Briefcase, Users } from 'lucide-react'
import Image from 'next/image'

interface TestimonialData {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

const bossTestimonials: TestimonialData[] = [
  {
    quote: "Jack is nothing other than exceptional. Please reach out to me for a chat about Jack at any time.",
    author: "Tom Moore",
    role: "CEO & Founder", 
    company: "WithYouWithMe",
    avatar: "/images/testimonials/tomm.jpg"
  },
  {
    quote: "As the Marketing Coordinator for the UK arm of our business, Jack has delivered key marketing support and services both regionally to the UK, as well as to our global markets including Australia",
    author: "Alicia Kouparitsas",
    role: "Chief Marketing Officer",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/cia.jpg"
  },
  {
    quote: "Jack has some wonderful marketing experience as well as a keen interest in Web3",
    author: "Carlee Lloyd",
    role: "Community Manager",
    company: "Third Academy",
    avatar: "/images/testimonials/carlee.jpg"
  },
  {
    quote: "Working on a project becomes easier with someone like Jack on your team. With a plethora of marketing skill under his belt he can truly make magic happen",
    author: "Jordan Minhinnick",
    role: "Regional Marketing Manager",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/jordan.jpg"
  }
]

const colleagueTestimonials: TestimonialData[] = [
  {
    quote: "Jack is an asset to any team he works in. He has such a tremendous diversity of thought that enables him to see the bigger picture and not only create revolutionary ideas from it, but also drive those ideas forward to fruition. He is tenacious and a force to be reckoned with. A pleasure to work with.",
    author: "Samantha Gillison",
    role: "Squad Leader",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/sam.jpg"
  },
  {
    quote: "Jack is a pleasure to work with, he has a wealth of knowledge and is always thirsty for more, which is evident from his reasoned questions posed during company meetings.",
    author: "Jase Curtis",
    role: "Head Of Onboarding",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/jase.jpg"
  },
  {
    quote: "In a marketing setting, Jack not only delivers quality content but also delivers a strong message in anything that he creates. Every bit of content that he had created during his time at WYWM has been what drove a lot of neurodiverse candidates to the potential platform.",
    author: "Brendan Long",
    role: "Course Content Developer/Quality Assurance",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/brendan.jpg"
  },
  {
    quote: "I've always admired Jack's level of analysis and fearlessness in the face of new problems. A 'we'll figure it out' attitude is rare and he's got one!",
    author: "Luke Morrision",
    role: "Vice President Operations",
    company: "WithYouWithMe",
    avatar: "/images/testimonials/Luke-Morrison.jpg"
  }
]

interface TestimonialCardProps {
  testimonial: TestimonialData
  index: number
  sectionDelay?: number
}

function TestimonialCard({ testimonial, index, sectionDelay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: sectionDelay + (index * 0.1),
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative h-full p-6 bg-card/50 backdrop-blur-sm border border-brand-primary/20 rounded-lg hover:border-brand-primary/40 transition-all duration-300 overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quote Icon */}
        <div className="relative mb-4">
          <Quote className="h-6 w-6 text-brand-primary" />
        </div>
        
        {/* Quote Text */}
        <blockquote className="relative text-foreground leading-relaxed mb-6 text-base">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="relative flex items-center gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/30">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                width={48}
                height={48}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                        <span class="text-white font-semibold text-sm">
                          ${testimonial.author.split(' ').slice(0, 2).map(n => n[0]).join('')}
                        </span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-full bg-brand-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Text Info */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-foreground text-base">
              {testimonial.author}
            </div>
            <div className="text-foreground/70 text-sm">
              {testimonial.role}
            </div>
            <div className="text-brand-primary font-medium text-sm">
              {testimonial.company}
            </div>
          </div>
        </div>
        
        {/* 5-star rating */}
        <div className="relative flex gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: sectionDelay + (index * 0.1) + (i * 0.05),
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <Star className="h-4 w-4 fill-brand-primary text-brand-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function ProfessionalTestimonials() {
  return (
    <section className="py-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Testimonials — The <span className="gradient-text">Proof</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Real feedback from bosses and colleagues who’ve seen my strategic thinking, systems-first approach, and calm under pressure.
          </p>
        </motion.div>

        {/* Bosses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text">
                What My Bosses Say...
              </h3>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Direct feedback from leadership who've seen my strategic impact firsthand
            </p>
          </div>
          
          {/* Boss Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {bossTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`boss-${index}`}
                testimonial={testimonial}
                index={index}
                sectionDelay={0.2}
              />
            ))}
          </div>
        </motion.div>

        {/* Colleagues Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold gradient-text">
                What My Work Colleagues Say...
              </h3>
            </div>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Peer insights from team members who've collaborated with me daily
            </p>
          </div>
          
          {/* Colleague Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {colleagueTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`colleague-${index}`}
                testimonial={testimonial}
                index={index}
                sectionDelay={0.5}
              />
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
} 