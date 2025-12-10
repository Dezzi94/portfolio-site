import { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { Clock, Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Jack Desmond',
  description: 'Connect with Jack Desmond about marketing leadership roles, advisory work, or collaboration opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-section pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="gradient-text">Let&apos;s connect.</span>
              <br />
              <span className="text-foreground">I&apos;m open to new opportunities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re hiring for a marketing leadership role, exploring strategic consultancy, or want to talk about automation and growth, I&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-foreground/70 mb-3">
                  Connect and message me directly
                </p>
                <a 
                  href="https://linkedin.com/in/jackdesmond"
                  className="text-brand-teal font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /in/jackdesmond
                </a>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contact Form</h3>
                <p className="text-foreground/70 mb-3">
                  Send a detailed message
                </p>
                <span className="text-brand-teal font-semibold">
                  Use the form below
                </span>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-purple rounded-lg mb-4 flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-foreground/70 mb-3">
                  Quick turnaround
                </p>
                <span className="text-brand-teal font-semibold">
                  Usually within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Start the conversation
              </h2>
              <p className="text-xl text-foreground/70">
                Share a bit about your team, role, or project so I can prepare a thoughtful response.
              </p>
            </div>

            <ContactForm
              title="Message Jack"
              subtitle="Include any context around the opportunity, project scope, or hiring timeline so I can tailor my reply."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-foreground/70">
                Quick answers to common questions about working together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Most automation projects take 2-4 weeks, while comprehensive growth systems typically require 4-8 weeks. Timeline depends on complexity and scope."
                },
                {
                  question: "Do you work with businesses of all sizes?",
                  answer: "I focus on growing businesses ($100K+ revenue) that are ready to scale systematically. This ensures the best ROI on automation investments."
                },
                {
                  question: "What tools and platforms do you work with?",
                  answer: "I'm platform-agnostic but frequently use Make.com, Zapier, HubSpot, Klaviyo, and major ad platforms. I choose tools based on your specific needs."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes! All projects include 30-60 days of optimization support. I also offer retainer arrangements for ongoing system management and scaling."
                },
                {
                  question: "How do you measure success?",
                  answer: "Every project has clear KPIs defined upfront - whether that's conversion rates, time savings, lead quality, or revenue impact. I track everything."
                },
                {
                  question: "What makes your approach different?",
                  answer: "My neurodivergent perspective helps me see patterns and system connections that others miss. I build sustainable solutions, not quick fixes."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-card border border-border rounded-lg">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to connect?
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Reach out to explore how I can support your team, project, or mission.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-8 py-4 bg-brand-teal text-white rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-normal"
              >
                View Case Studies
              </a>
              <a
                href="https://linkedin.com/in/jackdesmond"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-brand-teal text-brand-teal rounded-lg font-semibold text-lg hover:bg-brand-teal hover:text-white transition-all duration-normal"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 