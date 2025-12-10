'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

// Animated DD Signature Logo Component
const AnimatedLogo = () => {
  return (
    <div className="relative w-16 h-8 flex items-center">
      <svg
        width="64"
        height="32"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* First D - Clean geometric shape */}
        <motion.path
          d="M4 6 L4 26 M4 6 L16 6 C20 6, 22 8, 22 12 L22 20 C22 24, 20 26, 16 26 L4 26"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.2
          }}
        />
        
        {/* Second D - Clean geometric shape */}
        <motion.path
          d="M34 6 L34 26 M34 6 L46 6 C50 6, 52 8, 52 12 L52 20 C52 24, 50 26, 46 26 L34 26"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.6
          }}
        />
        
        {/* Modern underline accent */}
        <motion.rect
          x="2"
          y="28"
          width="52"
          height="2"
          rx="1"
          fill="url(#logoGradient)"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 1.2
          }}
          style={{ transformOrigin: "left" }}
        />

        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(192, 132, 252)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-normal ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Animated Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatedLogo />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-normal hover:text-brand-secondary ${
                    pathname === item.href
                      ? 'text-brand-secondary'
                      : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-secondary"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-4 py-2 bg-brand-secondary text-white rounded-lg font-semibold hover:bg-brand-primary transition-all duration-normal"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile menu button - Enhanced Touch Target */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 -mr-3 rounded-lg transition-colors duration-normal hover:bg-brand-secondary/10 active:scale-95 touch-manipulation"
                aria-label="Toggle menu"
                style={{ minHeight: '44px', minWidth: '44px' }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-background/90 backdrop-blur-lg" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-64 bg-card border-l border-border shadow-lg"
            >
              <div className="flex flex-col p-6 pt-20">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-4 px-2 text-lg font-medium transition-all duration-normal hover:text-brand-secondary active:scale-95 touch-manipulation ${
                        pathname === item.href
                          ? 'text-brand-secondary bg-brand-secondary/10 rounded-lg'
                          : 'text-foreground hover:bg-foreground/5 rounded-lg'
                      }`}
                      style={{ minHeight: '44px' }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="block px-6 py-4 bg-brand-secondary text-white rounded-lg font-semibold text-center hover:bg-brand-primary transition-all duration-normal active:scale-95 touch-manipulation"
                    style={{ minHeight: '44px' }}
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 