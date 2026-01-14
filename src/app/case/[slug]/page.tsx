import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyClient from './CaseStudyClient'

// This would normally come from a CMS or database
const caseStudies = {
  'another-avenue': {
    title: 'Another Avenue',
    subtitle: 'From Admin to Impact: 15+ Hours/Week Saved with an AI-Ready Job Sourcing Automation',
    category: 'Automation Systems',
    duration: 'Discovery → Build → Test → Handover',
    client: 'Basecamp Skills',
    logo: '/images/projects/another-avenue/logo.png',
    
    // Company Background
    companyBackground: {
      description: "Basecamp Skills is a UK digital skills provider delivering Skills Bootcamp programs. With publicly reported multi-million-pound funding, they help learners transition into tech careers through intensive training programs.",
      details: "The partnerships team was spending approximately 15 hours per week manually searching job boards for alumni opportunities. This repetitive administrative work pulled focus from higher-ROI activities like employer partnerships and graduate outcomes support. Data freshness was inconsistent, and de-duplication and formatting were done manually.",
      myRole: "I was engaged as a Marketing & AI Automation Consultant to design and implement an automated job sourcing workflow that would eliminate manual admin work and allow the team to focus on strategic partnerships and student success."
    },
    
    // Project Details
    project: {
      name: "AI-Ready Job Sourcing Automation",
      brief: "Replace manual job-board trawling with a scheduled, hands-off Make.com workflow that automates collection, standardization, de-duplication, and delivery of relevant job opportunities to Google Sheets. The system needed to be cost-optimized, scalable, and easy to maintain.",
      planAndProcess: "Discovery & scope: stakeholder calls, mapped current workflow, set acceptance criteria. Design: modular scenario, field schema, retry plan, light observability. Build & test: handle duplicates/dead links, tune selectors, schedule runs. Optimize: reduced Make usage from ~800 → ~2 ops/run. Handover: setup notes, documentation, training walkthrough.",
      execution: "Built Make.com-orchestrated workflow that triggers on schedule, scrapes and filters listings via Apify, normalizes fields, de-duplicates, and writes to Google Sheets. Optimized scenario from ~800 operations/run to ~2 operations/run (≈99.75% reduction). Designed for scalability: sources, filters, and columns can be extended without a rebuild.",
      challenges: "Key challenges included optimizing Make.com operations to minimize costs, handling duplicate entries and dead links, ensuring GDPR compliance without handling student PII, and creating a maintainable system that non-technical staff could monitor.",
      opportunities: "Roadmap explored includes multi-source expansion with confidence scoring, lightweight review UI (approve/ignore) pre-publish, Slack/email summaries for run status, optional HubSpot sync, and mock-interview automation with AI-generated feedback."
    },
    
    // Skills Used
    skillsUsed: [
      'Make.com Automation',
      'Apify Web Scraping',
      'Workflow Optimization',
      'Cost Engineering',
      'Google Sheets Integration',
      'Process Mapping',
      'GDPR Compliance',
      'Documentation & Training',
      'System Architecture',
      'ROI Analysis'
    ],
    
    challenge: 'Partnerships team spent ~15 hours/week manually searching job boards for alumni opportunities, pulling focus from higher-ROI work',
    solution: 'Scheduled Make.com + Apify workflow that automates job collection, standardization, de-duplication, and delivery—optimized from ~800 to ~2 ops/run',
    results: {
      metric1: { label: 'Manual Admin Eliminated', value: '15+ hrs/week' },
      metric2: { label: 'Make Ops Reduction', value: '99.75%' },
      metric3: { label: 'Cost Per Cohort', value: '≈120 ops' }
    },
    heroSummary: 'Automation freed 15+ hours/week for the partnerships team while reducing Make.com operations by ~99.75% for every run.',
    heroImage: '/images/projects/another-avenue/hero.jpg',
    images: [
      '/images/projects/another-avenue/workflow-diagram.jpg',
      '/images/projects/another-avenue/before-after.jpg',
      '/images/projects/another-avenue/results-dashboard.jpg'
    ],
    testimonial: {
      text: "What used to take hours now takes minutes and runs quietly in the background. Jack brought strategic thinking, clarity, and confidence to the project.",
      author: "Basecamp Skills team",
      role: "(awaiting sign-off)"
    },
    tags: ['Automation', 'Make.com', 'AI-Ready', 'Cost Optimization'],
    liveSite: 'https://wearbasecamp.com'
  },
  'wildedge-consultancy': {
    title: 'WildEdge Consultancy',
    subtitle: '360° Brand, UX, and Social Growth Strategy',
    category: 'Brand & Funnel Strategy',
    duration: 'Discovery → Strategy PDF → Enablement',
    client: 'WildEdge Consultancy',
    logo: '/images/projects/dezzi-digital/logo.jpg',
    
    // Company Background
    companyBackground: {
      description: "WildEdge Consultancy is a premium advisory practice led by Amy Wild that partners with operations leaders to streamline processes and drive growth.",
      details: "Their credibility and pipeline depend heavily on how the website, pitch collateral, and social channels tell the story. The existing Webflow site looked dated, messaging was fragmented, and social channels weren’t translating Amy’s expertise into demand.",
      myRole: "I stepped in as a fractional Growth & Brand partner to audit the digital experience, deliver a 360° branding + marketing strategy, document CRO-ready UX recommendations, and map a social media growth plan Amy could execute with her team."
    },
    
    // Project Details
    project: {
      name: "360° Brand, UX & Growth Strategy",
      brief: "Create a conversion-ready, founder-led digital presence by optimizing the website, sharpening messaging, and providing a step-by-step marketing strategy Amy could action immediately.",
      planAndProcess: "Discovery calls with Amy, full site walkthrough, copy and visual audit, baseline analytics review, social media growth analysis (LinkedIn + Instagram), competitor benchmarking, prioritised opportunity matrix, and packaging everything into a single strategy PDF.",
      execution: "Delivered a 30+ page PDF with annotated wireframes, above-the-fold redesign guidance, CTA hierarchy, tone-of-voice playbook, social media growth roadmap, and CRO checklist. Included Loom walkthroughs and prioritized backlog so Amy’s dev/VA could implement in sprints.",
      challenges: "Limited quantitative data (no recent heatmaps), no in-house dev capacity for a rebuild, and an inherited template that made the site look generic.",
      opportunities: "Clarify positioning, bring proof to the top of the page, make CTAs unmistakable, align web + social storytelling, and publish founder POV content that feeds lead-gen."
    },
    
    socialAnalysis: {
      summary: "Audited LinkedIn, Instagram, and newsletter presence to understand current cadence, content mix, and engagement before crafting a growth-ready plan.",
      insights: [
        "LinkedIn activity was ad-hoc with low visual consistency and no clear CTA back to WildEdge services.",
        "Instagram grid mixed personal/work content without value pillars, making it hard to understand the service offer.",
        "Competitors leading the category publish consistent POV content that ties directly into lead magnets or webinars."
      ],
      nextSteps: [
        "Launch weekly LinkedIn founder threads focused on operational turnarounds, each ending with a CTA to the site.",
        "Introduce three Instagram content pillars (proof, playbooks, behind-the-scenes) using refreshed brand templates.",
        "Add UTM-tracked social CTAs back to new landing sections to measure pipeline contribution."
      ]
    },
    
    // Skills Used
    skillsUsed: [
      'Brand Strategy',
      'Messaging Architecture',
      'UX/UI Audit',
      'Conversion Rate Optimization',
      'Copywriting',
      'Webflow Advisory',
      'Content Design',
      'Social Media Growth Analysis',
      'Stakeholder Workshops',
      'Enablement Documentation'
    ],
    
    challenge: 'Site, messaging, and social channels felt disconnected, making it hard for prospects to see WildEdge’s value quickly.',
    solution: 'Delivered a 360° PDF strategy that covered UX/CRO fixes, refreshed messaging, and a social media growth plan Amy could execute immediately.',
    results: {
      metric1: { label: 'Strategy Playbook', value: '30+ pages' },
      metric2: { label: 'UX/UI Recommendations', value: '25 actions' },
      metric3: { label: 'Social Growth Pillars', value: '3 pillars' }
    },
    heroSummary: 'Delivered a 360° PDF strategy covering UX/CRO fixes, refreshed messaging, and a social media growth plan Amy can run immediately.',
    heroImage: '/images/case-studies/wildedge-consultancy-hero.jpg',
    images: [
      '/images/case-studies/wildedge-consultancy-before.jpg',
      '/images/case-studies/wildedge-consultancy-after.jpg',
      '/images/case-studies/wildedge-consultancy-performance.jpg'
    ],
    testimonial: {
      text: "Jack transformed our online presence completely. The website redesign and automation systems he implemented have been game-changing for our consultancy.",
      author: "Amy Wild",
      role: "Founder, WildEdge Consultancy"
    },
    tags: ['Website Optimization', 'Performance', 'UX Design', 'Automation'],
    liveSite: 'https://wildedgeconsulting.com'
  },
  'mammoth-hunter-club': {
    title: 'Mammoth Hunter Club',
    subtitle: 'From Social Media Outreach to Community Management',
    category: 'Community Growth',
    duration: '4+ months',
    client: 'Mammoth Hunter Club',
    logo: '/images/projects/mammoth-hunter-club/logo.svg',
    
    // Company Background
    companyBackground: {
      description: "Mammoth Hunter Club is a unique community platform that brings together entrepreneurs, business leaders, and ambitious individuals who are 'hunting' for their next big opportunity. The club focuses on networking, knowledge sharing, and collaborative growth.",
      details: "As a niche community platform, Mammoth Hunter Club struggled with member engagement and organic growth. The existing community was small and relatively inactive, with limited participation in discussions and events.",
      myRole: "I was brought in as a Community Growth Specialist to develop strategies for increasing member engagement, automating community management tasks, and creating systems that would drive organic growth and member retention."
    },
    
    // Project Details
    project: {
      name: "Community Building & Social Growth Strategy",
      brief: "As a Social Media Manager I was tasked with booking at least 10 calls per month with qualified prospects via organic outreach. After exceeding the KPI in my first month (11 calls booked) I was moved into a Community Manager role to keep members active and supported.",
      planAndProcess: "Month 1 focused on LinkedIn/Instagram outreach cadences, value-driven DMs, and tracking booked calls against the KPI. Months 2-4 layered in member surveys, content calendars, and recurring engagement prompts before transitioning to community ops.",
      execution: "Ran daily outreach blocks, logged conversations, and confirmed calls for the founders. Once moved into Community Manager role, I published weekly discussion posts, collected feedback, matched members for collaborations, organised virtual events, and kept response times tight.",
      challenges: "Balancing personalised outreach with volume, keeping conversations warm between booking and meetings, and later ensuring community threads didn't stall when members were busy.",
      opportunities: "Systemise outreach messaging, surface member wins faster, introduce lightweight events calendar, and provide clearer matchmaking between members seeking partners."
    },
    
    // Skills Used
    skillsUsed: [
      'Community Management',
      'Social Media Strategy',
      'Engagement Automation',
      'Content Planning',
      'Member Onboarding',
      'Analytics & Reporting',
      'Event Management',
      'Growth Hacking',
      'Behavioral Psychology',
      'Platform Optimization'
    ],
    
    challenge: 'Needed to consistently book at least 10 qualified calls per month through organic outreach while also keeping a small community engaged.',
    solution: 'Built personalised social outreach cadences that hit 11 calls in the first month, then formalised community rituals (posts, feedback loops, events) once promoted to Community Manager.',
    results: {
      metric1: { label: 'Booked Calls (Target: 10)', value: '11 achieved' },
      metric2: { label: 'Role Progression', value: 'Promoted to Community Manager' },
      metric3: { label: 'Community Programs', value: 'Weekly posts & events' }
    },
    heroSummary: 'Hit the 10-call outreach KPI immediately (11 booked in Month 1) and then kept members engaged through weekly posts, matchmaking, and events as Community Manager.',
    heroImage: '/images/case-studies/mammoth-hunter-hero.jpg',
    images: [
      '/images/case-studies/mammoth-hunter-community.jpg',
      '/images/case-studies/mammoth-hunter-growth.jpg',
      '/images/case-studies/mammoth-hunter-engagement.jpg'
    ],
    testimonial: {
      text: "I exceeded my monthly KPI of 10 booked calls by achieving 11 in my first month, which led to a promotion from Social Media Manager to Community Manager where I built engagement systems that kept members active and connected.",
      author: "Jack Desmond",
      role: "Social Media & Community Manager"
    },
    tags: ['Community Building', 'Social Media', 'Automation', 'Growth'],
    liveSite: 'https://mammothhunterclub.com'
  },
  'withyouwithme': {
    title: 'WithYouWithMe',
    subtitle: 'Multi-Project Marketing Campaign & Funnel Optimization',
    category: 'Paid Advertising',
    duration: '6 months',
    client: 'WithYouWithMe',
    logo: '/images/projects/wywm/wywmlogo.png',
    
    // Company Background
    companyBackground: {
      description: "WithYouWithMe is a FREE online training platform for overlooked talent that develops and up-skills military professionals, neurodiverse individuals, and refugees to transition successfully into technology careers through their skills-based pathway and mentoring model.",
      details: "One of Australia's fastest growing technology companies with significant growth year-over-year since 2018. As a multi-national company operating in Australia, Canada, and the UK, their mission is to solve underemployment by focusing on the skills and potential of Veterans, Neurodiverse individuals, and Refugees rather than traditional experience requirements.",
      myRole: "I started my journey with them in October 2020 as a Career Success Executive and Academy Instructor (hybrid role) where I made calls to students and figured out based on their testing results, what tech career would be best suited for them. From the Academy side I created and executed a Bootcamp. However within this time I was actively engaged in building Marketing content for the Marketing department and so I decided to move roles to focus on marketing full-time."
    },
    
    // Project Details
    project: {
      name: "Multi-Project Marketing Campaign & Funnel Optimization",
      brief: "Execute multiple high-impact marketing projects including a Job Accelerator Event campaign and a comprehensive B2C signup funnel optimization project. The goal was to increase event attendance, improve platform signups, and optimize the entire user journey from awareness to conversion.",
      planAndProcess: "Conducted comprehensive funnel analysis, identified bottlenecks in the user journey, developed multi-channel marketing strategies, created automated email sequences, and implemented A/B testing frameworks for continuous optimization.",
      execution: "Launched targeted advertising campaigns across multiple platforms, created compelling landing pages, implemented email marketing automation workflows, developed social media content strategies, and built comprehensive analytics systems to track performance across all channels.",
      challenges: "Key challenges included reaching niche audiences across multiple countries, creating messaging that resonated with diverse backgrounds (veterans, neurodiverse individuals, refugees), managing budget constraints across multiple campaigns, and coordinating efforts across different time zones.",
      opportunities: "Identified opportunities to leverage community partnerships, improve conversion tracking systems, develop more personalized messaging sequences, create scalable campaign templates for future events, and implement advanced segmentation strategies."
    },
    
    // Skills Used
    skillsUsed: [
      'Multi-Channel Marketing',
      'Event Marketing',
      'Funnel Optimization',
      'Email Marketing Automation',
      'Paid Advertising (Facebook, LinkedIn, Google)',
      'Landing Page Design',
      'A/B Testing & Analytics',
      'Social Media Marketing',
      'Content Creation & Copywriting',
      'Performance Tracking & Reporting'
    ],
    
    challenge: 'Low event attendance and poor B2C platform signup rates limiting the company\'s ability to help career transitioners',
    solution: 'Multi-channel marketing campaigns with optimized funnels, automated email sequences, and data-driven improvements',
    results: {
      metric1: { label: 'Event Attendance', value: '93 (86% above target)' },
      metric2: { label: 'Record Weekly Signups', value: '71 users' },
      metric3: { label: 'EOIs Generated', value: '152' }
    },
    heroSummary: 'Multi-project execution combining event marketing, funnel optimisation, and marketing automation across paid, owned, and community channels.',
    
    heroImage: '/images/projects/wywm/Project 1/briefimage.jpg',
    images: [
      '/images/projects/wywm/Project 1/theplan.png',
      '/images/projects/wywm/Project 1/LeonardoEventFBAd.png',
      '/images/projects/wywm/Project 1/resultleonardo.png',
      '/images/projects/wywm/Project 2/thebrief.jpg',
      '/images/projects/wywm/Project 2/emailmarketingexample.png',
      '/images/projects/wywm/Project 2/comparedata3-1.png'
    ],
    testimonial: {
      text: "Jack's systematic approach to our marketing campaigns delivered results beyond our expectations. His multi-project execution helped us reach more veterans and career transitioners than ever before.",
      author: "Tom Moore",
      role: "Co-Founder, WithYouWithMe"
    },
    tags: ['Event Marketing', 'Paid Advertising', 'Funnel Optimization', 'Multi-channel Campaigns'],
    liveSite: 'https://withyouwithme.com'
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Jack Desmond',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.subtitle} | Jack Desmond`,
    description: `Case study: ${caseStudy.challenge}. ${caseStudy.solution}. Results: ${caseStudy.results.metric1.value} ${caseStudy.results.metric1.label}.`,
    openGraph: {
      title: `${caseStudy.title} - ${caseStudy.subtitle}`,
      description: `${caseStudy.challenge} ${caseStudy.solution}`,
      images: [caseStudy.heroImage],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyClient caseStudy={caseStudy} currentSlug={slug} />
}

// Generate static params for known case studies
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
} 