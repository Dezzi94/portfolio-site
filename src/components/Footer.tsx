import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JD</span>
              </div>
              <span className="font-heading font-bold text-lg">
                Jack Desmond
              </span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              T-shaped digital marketing consultant and automation strategist. 
              Building smarter systems for sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:jack@desmonddigital.com"
                className="p-2 rounded-lg bg-brand-secondary/10 hover:bg-brand-secondary/20 transition-colors duration-normal"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/jackdesmond"
                className="p-2 rounded-lg bg-brand-secondary/10 hover:bg-brand-secondary/20 transition-colors duration-normal"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/jackdesmond"
                className="p-2 rounded-lg bg-brand-secondary/10 hover:bg-brand-secondary/20 transition-colors duration-normal"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-brand-secondary transition-colors duration-normal">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/70 hover:text-brand-secondary transition-colors duration-normal">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-brand-secondary transition-colors duration-normal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">Marketing Automation</li>
              <li className="text-foreground/70">Funnel Optimization</li>
              <li className="text-foreground/70">Paid Advertising</li>
              <li className="text-foreground/70">Growth Strategy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Jack Desmond. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-4 md:mt-0">
            Built with Next.js, TailwindCSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
} 