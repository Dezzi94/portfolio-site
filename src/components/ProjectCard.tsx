'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, TrendingUp, Building2, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  companyDescription: string
  results: string[]
  slug: string
  category: string
  color?: 'teal' | 'purple'
  delay?: number
  logo?: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  companyDescription,
  results,
  slug,
  category,
  color = 'teal',
  delay = 0,
  logo
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    teal: {
      gradient: 'from-brand-primary via-brand-secondary to-brand-primary/80',
      accent: 'text-brand-primary',
      border: 'border-brand-primary/30',
      bg: 'bg-brand-primary/10',
      glow: 'group-hover:shadow-brand-primary/20',
      backGradient: 'from-brand-primary/10 via-brand-secondary/5 to-brand-primary/5'
    },
    purple: {
      gradient: 'from-brand-secondary via-brand-primary to-brand-secondary/80',
      accent: 'text-brand-secondary',
      border: 'border-brand-secondary/30',
      bg: 'bg-brand-secondary/10',
      glow: 'group-hover:shadow-brand-secondary/20',
      backGradient: 'from-brand-secondary/10 via-brand-primary/5 to-brand-secondary/5'
    }
  }

  const currentColor = colorClasses[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group perspective-1000"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative w-full h-[600px] transition-all duration-700 transform-style-preserve-3d cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ 
          scale: 1.02,
          rotateX: 2,
          rotateY: isFlipped ? 0 : 2
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Animated background glow */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${currentColor.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Front Side - Company Info */}
        <motion.div 
          className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          <div className={`p-8 bg-card/80 backdrop-blur-sm border ${currentColor.border} rounded-xl h-full transition-all duration-500 hover:shadow-2xl ${currentColor.glow} hover:border-brand-primary/50 relative overflow-hidden`}>
            {/* Animated mesh background */}
            <div className="absolute inset-0 opacity-5">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.gradient}`} />
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, #c084fc 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a855f7 0%, transparent 50%)`,
                }}
                animate={{
                  backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
                }}
                transition={{
                  duration: 4,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </div>

            {/* Floating particles */}
            {isHovered && Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${currentColor.gradient} rounded-full`}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Logo - Enhanced with glow effect */}
            <motion.div 
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {logo && (
                <div className="w-24 h-24 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.gradient} rounded-full opacity-10 blur-lg group-hover:opacity-25 transition-opacity duration-300`} />
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    fill
                    className="object-contain relative z-10 drop-shadow-lg"
                  />
                </div>
              )}
            </motion.div>
            
            {/* Company Name - Enhanced typography */}
            <div className="text-center mb-6">
              <motion.h3 
                className="text-3xl font-bold mb-3 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <motion.div 
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full ${currentColor.bg} ${currentColor.accent} border ${currentColor.border} backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="h-3 w-3" />
                {category}
              </motion.div>
            </div>
            
            {/* Company Description - Enhanced readability */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-base font-medium text-foreground/80">
                <div className={`p-1 rounded-full bg-gradient-to-br ${currentColor.gradient}`}>
                  <Building2 className="h-3 w-3 text-white" />
                </div>
                What {title} Does
              </div>
              <p className="text-foreground/70 leading-relaxed text-center text-base">
                {companyDescription}
              </p>
            </div>
            
            {/* Enhanced Flip Indicator */}
            <motion.div 
              className="absolute bottom-6 right-6 flex items-center gap-2 text-sm text-foreground/50 font-medium"
              animate={{
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <span>Hover to see my work</span>
              <ArrowUpRight className="h-3 w-3" />
            </motion.div>
          </div>
        </motion.div>

        {/* Back Side - Jack's Work - Enhanced */}
        <motion.div 
          className={`absolute inset-0 w-full h-full backface-hidden ${!isFlipped ? 'rotate-y-180' : ''}`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: !isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'
          }}
        >
          <Link href={`/case/${slug}`}>
            <div className={`p-8 bg-gradient-to-br ${currentColor.backGradient} backdrop-blur-sm border border-brand-primary/30 rounded-xl h-full transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/20 hover:border-brand-primary/50 relative overflow-hidden group/card`}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(192, 132, 252, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                      "linear-gradient(225deg, rgba(168, 85, 247, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%)",
                      "linear-gradient(45deg, rgba(192, 132, 252, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold mb-2 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    My Work for {title}
                  </motion.h3>
                  <p className="text-foreground/70 font-medium mb-3 text-base">
                    {subtitle}
                  </p>
                </div>
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 45 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="h-6 w-6 text-brand-primary group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300 flex-shrink-0 ml-4" />
                </motion.div>
              </div>
              
              {/* Project Challenge & Solution */}
              <div className="space-y-4 mb-6 relative z-10">
                <div className="flex items-center gap-2 text-base font-medium text-brand-primary">
                  <div className="p-1 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary">
                    <TrendingUp className="h-3 w-3 text-white" />
                  </div>
                  The Challenge
                </div>
                <p className="text-foreground/80 leading-relaxed text-base">
                  {description}
                </p>
                
                <div className="flex items-center gap-2 text-base font-medium text-brand-primary mt-4">
                  <div className="p-1 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                  My Approach
                </div>
                <p className="text-foreground/70 leading-relaxed text-base">
                  {companyDescription.split('.')[0]}. I developed a strategic solution that addressed their core challenges while building scalable systems for long-term growth.
                </p>
              </div>
              
              {/* Enhanced CTA */}
              <motion.div 
                className="flex items-center gap-2 text-brand-primary font-semibold text-base group-hover/card:gap-3 transition-all duration-300 mt-auto relative z-10 p-3 rounded-lg bg-white/5 border border-brand-primary/20"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.1)" 
                }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Read Full Case Study</span>
                <motion.span 
                  className="transition-transform duration-300 group-hover/card:translate-x-1"
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 