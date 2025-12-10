'use client'

import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setIsError(false)
        form.reset()
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-12 text-center border border-brand-primary/30"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="h-16 w-16 text-brand-secondary mx-auto mb-6" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Thanks for reaching out!
        </h3>
        <p className="text-foreground/70 mb-6">
          I'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field for spam protection */}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {isError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl p-4 flex items-center gap-3"
        >
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
          <p className="text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again or email me directly at{' '}
            <a href="mailto:jack@desmonddigital.com" className="underline font-semibold">
              jack@desmonddigital.com
            </a>
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name <span className="text-brand-secondary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-brand-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Subject <span className="text-brand-secondary">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
          placeholder="What's this about?"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-brand-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none"
          placeholder="Tell me about your project, role opportunity, or what you're looking for..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Send className="h-5 w-5" />
        Send Message
      </motion.button>

      <p className="text-sm text-foreground/50">
        Usually respond within 24 hours. For urgent matters, email me directly at{' '}
        <a 
          href="mailto:jack@desmonddigital.com" 
          className="text-brand-primary hover:text-brand-secondary transition-colors font-semibold"
        >
          jack@desmonddigital.com
        </a>
      </p>
    </form>
  )
}
