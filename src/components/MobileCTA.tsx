'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Calendar, ArrowRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function MobileCTA() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after user scrolls down 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ctaOptions = [
    {
      href: '/contact',
      icon: MessageCircle,
      label: 'Get Quote',
      description: 'Free consultation',
      className: 'bg-brand-primary hover:bg-brand-secondary text-white'
    },
    {
      href: '/contact?type=call',
      icon: Calendar,
      label: 'Book Call',
      description: '15-min strategy chat',
      className: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
    }
  ]

  return (
    <>
      {/* Mobile Only - Hidden on desktop */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-background/90 backdrop-blur-md border-t border-foreground/10 p-4"
            >
              <AnimatePresence mode="wait">
                {!isExpanded ? (
                  // Collapsed State - Main CTA
                  <motion.button
                    key="collapsed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsExpanded(true)}
                    className="w-full bg-brand-primary hover:bg-brand-secondary text-white rounded-lg p-4 flex items-center justify-center gap-3 font-semibold shadow-lg active:scale-95 transition-all duration-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Let's Talk Growth
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                ) : (
                  // Expanded State - Multiple Options
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">Ready to Start?</h3>
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="p-1 text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    {/* CTA Options */}
                    <div className="grid grid-cols-2 gap-3">
                      {ctaOptions.map((option, index) => {
                        const Icon = option.icon
                        return (
                          <Link
                            key={index}
                            href={option.href}
                            className={`${option.className} rounded-lg p-3 flex flex-col items-center text-center gap-2 transition-all duration-200 active:scale-95 shadow-sm`}
                          >
                            <Icon className="h-5 w-5" />
                            <div>
                              <div className="font-semibold text-sm">{option.label}</div>
                              <div className="text-xs opacity-75">{option.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>

                    {/* Quick Links */}
                    <div className="pt-2 border-t border-foreground/10">
                      <div className="flex justify-center gap-6 text-xs text-foreground/60">
                        <Link href="/projects" className="hover:text-brand-primary transition-colors">
                          View Work
                        </Link>
                        <Link href="/services" className="hover:text-brand-primary transition-colors">
                          Services
                        </Link>
                        <Link href="/case/another-avenue" className="hover:text-brand-primary transition-colors">
                          Case Studies
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Action Button - Alternative Minimal Version */}
      <AnimatePresence>
        {isVisible && !isExpanded && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="fixed bottom-20 right-4 z-40 lg:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(true)}
              className="w-12 h-12 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgb(168, 85, 247), rgb(192, 132, 252))'
              }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.button>
            
            {/* Pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-brand-primary rounded-full -z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 