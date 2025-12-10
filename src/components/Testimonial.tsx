'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
  avatar?: string
  delay?: number
  variant?: 'default' | 'featured' | 'compact'
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatar,
  delay = 0,
  variant = 'default'
}: TestimonialProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="p-8 bg-gradient-to-br from-brand-teal/5 to-brand-purple/5 border border-brand-teal/20 rounded-lg">
          <Quote className="h-8 w-8 text-brand-teal mb-6" />
          
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground italic">
            "{quote}"
          </blockquote>
          
          <div className="flex items-center gap-4">
            {avatar ? (
              <img
                src={avatar}
                alt={author}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            
            <div>
              <div className="font-semibold text-lg">{author}</div>
              <div className="text-foreground/70">{role}</div>
              <div className="text-brand-teal font-medium">{company}</div>
            </div>
          </div>
          
          <div className="flex gap-1 mt-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-teal text-brand-teal" />
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="p-6 bg-card border border-border rounded-lg"
      >
        <div className="flex gap-1 mb-3">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-brand-teal text-brand-teal" />
          ))}
        </div>
        
        <p className="text-foreground/80 mb-4 leading-relaxed">
          "{quote}"
        </p>
        
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">
                {author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
          <div>
            <div className="font-semibold text-sm">{author}</div>
            <div className="text-foreground/60 text-xs">{role}, {company}</div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="p-6 bg-card border border-border rounded-lg"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-teal text-brand-teal" />
        ))}
      </div>
      
      <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 bg-gradient-to-br from-brand-teal to-brand-purple rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-foreground/70 text-sm">{role}</div>
          <div className="text-brand-teal text-sm">{company}</div>
        </div>
      </div>
    </motion.div>
  )
}

interface TestimonialSectionProps {
  title?: string
  subtitle?: string
  testimonials: Omit<TestimonialProps, 'delay'>[]
  variant?: 'grid' | 'carousel'
}

export function TestimonialSection({
  title = "What clients say",
  subtitle = "Real feedback from real projects",
  testimonials,
  variant = 'grid'
}: TestimonialSectionProps) {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {variant === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={`${testimonial.author}-${index}`}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Carousel implementation would go here */}
            <div className="grid grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={`${testimonial.author}-${index}`}
                  {...testimonial}
                  variant="featured"
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 