'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, Eye, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// React Bits inspired Beam Background Component
const BeamBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 600"
        className="absolute inset-0"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal beams traveling left to right */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.line
            key={`beam-${i}`}
            x1="0"
            y1={100 + i * 80}
            x2="1200"
            y2={100 + i * 80 + (i % 2 === 0 ? 20 : -20)}
            stroke="url(#beamGradient)"
            strokeWidth="2"
            opacity={0.7 - i * 0.1}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.7 - i * 0.1, 0]
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Diagonal beams for more dynamic effect */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.line
            key={`diagonal-${i}`}
            x1="-100"
            y1={50 + i * 120}
            x2="1300"
            y2={150 + i * 120}
            stroke="url(#beamGradient2)"
            strokeWidth="1.5"
            opacity={0.5 - i * 0.08}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5 - i * 0.08, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.6 + 1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Fast traveling beams */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.line
            key={`fast-beam-${i}`}
            x1="0"
            y1={200 + i * 100}
            x2="1200"
            y2={200 + i * 100}
            stroke="url(#fastBeamGradient)"
            strokeWidth="3"
            opacity={0.8}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 2 + 2,
              ease: "easeOut"
            }}
          />
        ))}

        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
            <stop offset="30%" stopColor="rgb(192, 132, 252)" stopOpacity="0.8" />
            <stop offset="70%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
            <stop offset="40%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
            <stop offset="60%" stopColor="rgb(192, 132, 252)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fastBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
            <stop offset="20%" stopColor="rgb(192, 132, 252)" stopOpacity="1" />
            <stop offset="80%" stopColor="rgb(168, 85, 247)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// Clean Professional Image Component
const FuturisticImage = ({
  className = "",
  isDesktop = false,
  extraHeading,
}: {
  className?: string
  isDesktop?: boolean
  extraHeading?: string
}) => {
  const size = isDesktop ? 320 : 192;
  const containerClass = isDesktop ? "rounded-2xl" : "rounded-full";
  
  return (
    <div className={`relative flex flex-col items-center gap-4 ${className}`} style={{ width: size }}>
      {extraHeading && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-secondary shadow-sm"
        >
          <Sparkles className="h-3 w-3" />
          <span>{extraHeading}</span>
        </motion.div>
      )}
      <div className="relative" style={{ width: size, height: size }}>
      {/* Main Image */}
      <motion.div
        className={`relative ${containerClass} overflow-hidden z-20`}
        style={{ width: size, height: size }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/Jackimage.png"
          alt="Portrait of Jack Desmond, Digital Marketing Consultant"
          fill
          className={`${containerClass} object-cover`}
          priority
          sizes={isDesktop ? "320px" : "192px"}
        />
        
        {/* Subtle Professional Overlay */}
        <div 
          className={`absolute inset-0 ${containerClass} z-10`}
          style={{
            background: `linear-gradient(135deg, 
              rgba(192, 132, 252, 0.03) 0%,
              transparent 50%,
              rgba(168, 85, 247, 0.03) 100%)`,
            mixBlendMode: "overlay"
          }}
        />
      </motion.div>
      
      {/* Elegant Glow */}
      <motion.div
        className={`absolute -inset-1 ${containerClass} z-5`}
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(192, 132, 252, 0.15) 0%,
            rgba(168, 85, 247, 0.1) 40%,
            transparent 70%)`
        }}
        animate={{
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Professional Shadow */}
      <div 
        className={`absolute -inset-3 ${containerClass} z-0`}
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.05) 50%,
            transparent 80%)`,
          transform: "translateY(4px)",
          filter: "blur(8px)"
        }}
      />
      
      {/* Subtle Border */}
      <div
        className={`absolute inset-0 ${containerClass} border border-brand-primary/20 z-30 pointer-events-none`}
      />
      </div>
    </div>
  );
};

type HeroProps = {
  extraHeading?: string
}

export function Hero({ extraHeading }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border/10" id="hero">
      {/* React Bits Beam Background */}
      <BeamBackground />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-brand-primary/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
          {/* Mobile Layout: Stacked */}
          <div className="flex flex-col lg:hidden items-center text-center">
            {/* Jack's Image - Mobile with Futuristic Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
                          <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <FuturisticImage className="mx-auto" />
            </motion.div>
            </motion.div>

            {/* Content - Mobile */}
            <div className="max-w-2xl px-2">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                Neurodivergent Marketing Strategist
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="relative inline-block text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="gradient-text block relative z-10">
                    Scrappy. <span className="text-brand-secondary">Systems.</span>
                  </span>
                  <span className="text-foreground block mt-1 relative z-10">
                    Shipped.
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 -skew-y-2 bg-gradient-to-r from-brand-primary/25 to-brand-secondary/25 rounded-sm blur-[1px]"
                  />
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed"
              >
                I'm Jack Desmond—the neurodivergent operator who documents first, builds the glue, and ships even when things break. Open to roles as a <span className="text-brand-secondary font-semibold">Digital Marketing Executive, Growth Marketer, or Digital Marketing Automation Specialist</span>.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col gap-4 mb-12"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/projects"
                    className="px-6 py-3 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-primary transition-all duration-normal flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View My Work
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-transparent border-2 border-brand-secondary text-brand-secondary rounded-lg font-semibold hover:bg-brand-secondary hover:text-white transition-all duration-normal flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Book Strategy Call
                  </a>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/70"
              >
                <Link href="/services" className="hover:text-brand-secondary transition-colors">
                  Explore Services
                </Link>
                <span>•</span>
                <Link href="/projects" className="hover:text-brand-secondary transition-colors">
                  Case Studies
                </Link>
                <span>•</span>
                <Link href="#testimonials" className="hover:text-brand-secondary transition-colors">
                  Client Results
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout: Content Left, Image Right */}
          <div className="hidden lg:flex items-center gap-16">
            {/* Content - Desktop Left */}
            <div className="flex-1 max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="h-4 w-4 text-brand-secondary" />
                Neurodivergent Marketing Strategist
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="relative inline-block text-5xl xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="gradient-text block relative z-10">
                    Scrappy. <span className="text-brand-secondary">Systems.</span>
                  </span>
                  <span className="text-foreground block mt-1 relative z-10">
                    Shipped.
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 h-3 -skew-y-2 bg-gradient-to-r from-brand-primary/25 to-brand-secondary/25 rounded-sm blur-[1px]"
                  />
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl xl:text-2xl text-foreground/80 mb-12 leading-relaxed"
              >
                I'm Jack Desmond—the neurodivergent operator who documents first, builds the glue, and ships even when things break. Currently targeting opportunities as a <span className="text-brand-secondary font-semibold">Digital Marketing Executive, Growth Marketer, or Marketing Automation Specialist</span>.
              </motion.p>

              {/* CTA Buttons - Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-12"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/projects"
                    className="px-8 py-4 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-primary transition-all duration-normal flex items-center gap-2 text-lg"
                  >
                    <Eye className="h-5 w-5" />
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-transparent border-2 border-brand-secondary text-brand-secondary rounded-lg font-semibold hover:bg-brand-secondary hover:text-white transition-all duration-normal flex items-center gap-2 text-lg"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Strategy Call
                  </a>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap items-center gap-6 text-sm text-foreground/70"
              >
                <Link href="/services" className="hover:text-brand-secondary transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Explore Services
                </Link>
                <span>•</span>
                <Link href="/projects" className="hover:text-brand-secondary transition-colors">
                  Case Studies
                </Link>
                <span>•</span>
                <Link href="#testimonials" className="hover:text-brand-secondary transition-colors">
                  Client Results
                </Link>
              </motion.div>
            </div>

            {/* Jack's Image - Desktop Right with Mind-Blowing Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FuturisticImage className="" isDesktop extraHeading={extraHeading} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          className="text-xs text-foreground/60 mb-2 font-medium tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL TO EXPLORE
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center mx-auto relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-brand-secondary to-brand-primary rounded-full mt-2"
          />
          
          {/* Glow effect */}
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-1 h-3 bg-brand-primary rounded-full mt-2 blur-sm"
          />
        </motion.div>
        
        {/* Floating particles around scroll indicator */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-primary/40 rounded-full"
            style={{
              left: `${50 + (i - 1) * 20}%`,
              top: '60%',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 0.6, 0],
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
      </motion.div>
    </section>
  )
} 