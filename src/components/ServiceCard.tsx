'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href?: string
  delay?: number
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  href = "/contact",
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="p-8 bg-card border border-border rounded-lg h-full transition-all duration-normal hover:shadow-lg hover:border-brand-teal/50 hover:-translate-y-1">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-normal">
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors duration-normal">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0" />
              <span className="text-foreground/80 text-sm leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <a
          href={href}
          className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all duration-normal"
        >
          Get Started
          <span className="transition-transform duration-normal group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.div>
  )
} 