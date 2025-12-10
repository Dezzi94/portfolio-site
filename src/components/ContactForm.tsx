'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react'

interface ContactFormProps {
  variant?: 'inline' | 'floating' | 'modal'
  title?: string
  subtitle?: string
  onClose?: () => void
  isOpen?: boolean
}

interface FormData {
  name: string
  email: string
  company: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm({
  variant = 'inline',
  title = "Let's Talk Growth",
  subtitle = "Ready to build smarter systems? Tell me about your growth challenges.",
  onClose,
  isOpen = true
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: ''
        })
        setIsSubmitted(false)
        if (onClose) onClose()
      }, 3000)
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const formContent = (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {variant === 'modal' && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>
        <p className="text-foreground/70 leading-relaxed">{subtitle}</p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-foreground/70">
            Thanks for reaching out. I'll get back to you within 24 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                  errors.name ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <div className="flex items-center gap-2 mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                  errors.email ? 'border-red-500' : 'border-border'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="flex items-center gap-2 mt-1 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          {/* Company and Budget Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-teal"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
                <option value="">Select budget</option>
                <option value="under-5k">Under $5K</option>
                <option value="5k-10k">$5K - $10K</option>
                <option value="10k-25k">$10K - $25K</option>
                <option value="25k-plus">$25K+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 border rounded-lg bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal ${
                errors.message ? 'border-red-500' : 'border-border'
              }`}
              placeholder="Tell me about your growth challenges, current systems, and what you're looking to achieve..."
            />
            {errors.message && (
              <div className="flex items-center gap-2 mt-1 text-red-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errors.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 bg-brand-teal text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-normal disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-sm text-foreground/60">
            I typically respond within 24 hours
          </p>
        </form>
      )}
    </div>
  )

  if (variant === 'modal') {
    if (!isOpen) return null

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 bg-card border border-border rounded-lg shadow-xl"
        >
          {formContent}
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border shadow-xl z-40 overflow-y-auto"
      >
        <div className="p-6">
          {formContent}
        </div>
      </motion.div>
    )
  }

  // Inline variant
  return (
    <div className="p-8 bg-card border border-border rounded-lg">
      {formContent}
    </div>
  )
} 