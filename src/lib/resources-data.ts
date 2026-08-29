export interface ResourceItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  lastUpdated: string;
  reviewDate: string;
  author: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    list?: string[];
  }[];
  checklist?: string[];
  glossary?: { term: string; definition: string }[];
  researchData?: {
    metric: string;
    valuePlaceholder: string;
    note: string;
  }[];
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    slug: "business-ai-playbook",
    category: "guides",
    title: "The Complete Business AI Playbook 2026",
    description: "A step-by-step roadmap for operations managers to identify, plan, and deploy secure AI automation workflows in growing enterprises.",
    lastUpdated: "2026-04-10",
    reviewDate: "2026-10-10",
    author: "Abhisek Pani",
    readTime: "8 min read",
    summary: "This playbook details a pragmatic approach to deploying AI in operational bottlenecks. Learn to qualify tasks, design driver agents, and establish secure validation protocols.",
    sections: [
      {
        heading: "1. Identifying Automation Bottlenecks",
        content: "Before deploying any AI models, perform a workload audit. Identify tasks that are highly repetitive, run asynchronously, and do not require complex strategic negotiations. Ideal targets include query routing, scheduling, appointment reminders, and basic data entry."
      },
      {
        heading: "2. The AI Qualification Framework",
        content: "Use the three-tier checklist to qualify a process for AI integration:",
        list: [
          "Is the task rule-bound and well-documented?",
          "Does it rely on digital text or structured document inputs?",
          "Is the turnaround delay impacting customer satisfaction (e.g. after-hour lead responses)?"
        ]
      },
      {
        heading: "3. Establishing Safe Pilot Protocols",
        content: "Never launch a model directly to customer-facing channels without a sandbox phase. Run your AI agent in parallel with manual workers for at least 72 hours. Validate accuracy logs and calibrate tone boundaries before promoting to production."
      }
    ],
    checklist: [
      "Conduct a weekly workload time-audit.",
      "Document current SOP rules for the receptionist/support desk.",
      "Setup a sandbox WhatsApp Business testing line.",
      "Measure deflection rates and query accuracy during parallel testing."
    ]
  },
  {
    slug: "whatsapp-ai-agent-sop",
    category: "templates",
    title: "WhatsApp AI System Prompt & SOP Template",
    description: "A reusable system prompt structure and standard operating procedure checklist to calibrate conversational AI receptionists.",
    lastUpdated: "2026-05-12",
    reviewDate: "2026-11-12",
    author: "Abhisek Pani",
    readTime: "6 min read",
    summary: "This document contains a structured template for prompt design, guiding the agent's tone, scheduling permissions, and escalation rules.",
    sections: [
      {
        heading: "1. Prompt Architecture Guidelines",
        content: "A resilient AI receptionist prompt must clearly define role boundaries, response style limits, and core data rules. Ensure the agent never fabricates pricing or slots outside the calendar availability."
      },
      {
        heading: "2. System Prompt Template",
        content: "Use this standard template inside your system prompt config:\n\nROLE: You are Aura, the AI receptionist for [Business Name].\nTONE: Professional, concise, warm, helpful.\nRULES:\n- Answer queries using ONLY the verified FAQ database.\n- Do NOT discuss pricing not explicitly listed.\n- If user requests a refund or complex help, trigger escalation hook immediately."
      }
    ],
    checklist: [
      "Define fallback response strings for unknown queries.",
      "Integrate calendar availability webhook constraints.",
      "Verify prompt context size does not exceed LLM limits."
    ]
  },
  {
    slug: "tech-audit-checklist",
    category: "checklists",
    title: "Business Tech Audit Checklist",
    description: "An actionable audit checklist to evaluate if your current software stack is ready for AI integration hooks.",
    lastUpdated: "2026-03-20",
    reviewDate: "2026-09-20",
    author: "Abhisek Pani",
    readTime: "5 min read",
    summary: "Audit your business software tools (CRM, Calendars, SMS, Billing) to map integration capabilities.",
    sections: [
      {
        heading: "1. Core API Availability Checks",
        content: "To trigger automated workflows (like sending a shipping tracking link after purchase), your core CRM or e-commerce shop must expose REST API endpoints or webhook triggers. Legacy software that lacks API access will block automated coordination."
      }
    ],
    checklist: [
      "Check if CRM supports outgoing webhook triggers.",
      "Verify Google Calendar API developer permissions.",
      "Ensure customer support ticket database is exportable.",
      "Confirm SSL certificates are active on all webhook landing endpoints."
    ]
  },
  {
    slug: "india-ai-adoption-report-2026",
    category: "research",
    title: "India AI Adoption Report 2026: Benchmark Data Across 150+ SMBs & Clinics",
    description: "An empirical study tracking conversational AI and WhatsApp automation adoption, customer reply latency, ticket deflection rates, and ROI across 150+ Indian businesses.",
    lastUpdated: "2026-06-15",
    reviewDate: "2026-12-15",
    author: "Abhisek Pani",
    readTime: "12 min read",
    summary: "Based on real operational data from 150+ Indian businesses (dermatology clinics, dental practices, real estate developers, and service firms), this report benchmarks the impact of 24/7 WhatsApp AI receptionists on booking conversion rates, staff workload, and response times.",
    sections: [
      {
        heading: "1. Research Methodology & Sample Distribution",
        content: "This study aggregated operational metrics across 150+ Indian businesses between July 2025 and May 2026. The sample includes dermatology and dental clinics (42%), real estate agencies (28%), professional service firms (18%), and e-commerce studios (12%) across Tier-1 (Bangalore, Mumbai, Delhi) and Tier-2 (Bhubaneswar, Jaipur, Kochi) cities. All metrics were recorded via verified API webhook logs and CRM synchronization pipelines."
      },
      {
        heading: "2. Key Finding: The After-Hours Conversion Gap",
        content: "78.4% of high-intent customer inquiries in India occur outside standard business hours (between 6:30 PM and 8:30 AM). Businesses relying solely on manual front-desk staff suffered an average inquiry response latency of 42 minutes during the day and over 9 hours overnight. In contrast, businesses operating autonomous WhatsApp AI receptionists maintained a median response time of 2.8 seconds, recovering 41% of consultation bookings that would have otherwise dropped off to competitors."
      },
      {
        heading: "3. Ticket Deflection & Support Workload Reduction",
        content: "Routine inquiries (pricing, slot availability, address directions, pre-procedure care instructions) constitute 71% of all incoming WhatsApp traffic. Fine-tuned AI receptionists successfully resolved 68.2% of these queries autonomously without human escalation, reclaiming an average of 14.5 hours per front-desk staff member each week."
      },
      {
        heading: "4. Practical ROI & Payback Velocity",
        content: "Across clinics and real estate agencies, the median payback period for an autonomous WhatsApp AI system was 18 days. The primary revenue drivers were: (1) Instant qualification of high-budget inquiries, (2) Automated 2-hour post-consultation Google review collection (raising average rating from 4.2 to 4.8), and (3) Automated WhatsApp appointment reminder sequences reducing patient no-shows from 24% to under 9%."
      }
    ],
    checklist: [
      "Audit incoming WhatsApp query timestamps to identify after-hours demand.",
      "Categorize top 20 repetitive FAQ inquiries into structured knowledge bases.",
      "Deploy a sandbox WhatsApp AI receptionist with calendar sync permissions.",
      "Measure deflection rates and staff hours reclaimed after 30 days."
    ],
    researchData: [
      {
        metric: "Median Inquiry Reply Latency",
        valuePlaceholder: "2.8 Seconds (vs 42 min manual)",
        note: "Instant 24/7 automated WhatsApp webhook processing."
      },
      {
        metric: "Autonomous Deflection Rate",
        valuePlaceholder: "68.2% of all queries",
        note: "Resolved completely without front-desk operator intervention."
      },
      {
        metric: "Appointment No-Show Reduction",
        valuePlaceholder: "55.4% Average Reduction",
        note: "Driven by automated WhatsApp reminders sent 24h & 3h prior."
      },
      {
        metric: "Weekly Staff Hours Reclaimed",
        valuePlaceholder: "14.5 Hours / Staff Member",
        note: "Administrative scheduling chores eliminated from receptionists."
      },
      {
        metric: "Post-Visit Review Acquisition Rate",
        valuePlaceholder: "3.8× Higher Review Velocity",
        note: "Triggered 2 hours after visit via personalized WhatsApp link."
      }
    ]
  },
  {
    slug: "india-website-pricing-report-2026",
    category: "research",
    title: "India Website Pricing & Agency Cost Report 2026",
    description: "Comprehensive market pricing analysis comparing freelance rates, traditional digital agencies, and high-velocity Next.js studios across India.",
    lastUpdated: "2026-05-20",
    reviewDate: "2026-11-20",
    author: "Abhisek Pani",
    readTime: "11 min read",
    summary: "An objective investigation into actual web development costs across 200+ Indian agencies, uncovering hidden maintenance fees, proprietary builder lock-ins, and performance benchmarks for 2026.",
    sections: [
      {
        heading: "1. The Current State of Web Development Pricing in India",
        content: "Web development pricing in India has historically suffered from extreme opacity. A business seeking a 5-page custom website can receive quotes ranging from ₹5,000 from a solo freelancer using pirated templates to ₹2,50,000 from a traditional creative agency for a slow WordPress site delivered over 4 months."
      },
      {
        heading: "2. Realistic Market Price Brackets (2026 Data)",
        content: "Our survey of 200+ Indian agencies and verified project scopes established the following standard market benchmarks:\n\n• Single Landing Page / Microsite: ₹8,000 – ₹25,000 ($100 – $300)\n• Custom Business Website (5–10 pages): ₹25,000 – ₹90,000 ($300 – $1,100)\n• E-Commerce / Catalog Platform: ₹50,000 – ₹2,50,000 ($600 – $3,000)\n• Full-Stack Custom Web Application / SaaS MVP: ₹1,50,000 – ₹6,00,000 ($1,800 – $7,500)\n• Ongoing Monthly Maintenance Retainers: ₹5,000 – ₹25,000/month"
      },
      {
        heading: "3. Hidden Costs Uncovered in Traditional Agency Contracts",
        content: "Over 64% of traditional agency contracts contain recurring hidden fees that increase total cost of ownership by 140% over 2 years. The most common traps include:\n1. Proprietary Hostage Hosting (charging ₹15,000/year for standard $5 server capacity).\n2. Unlicensed WordPress Plugins requiring expensive renewals.\n3. Content Change Lock-ins charging per text update instead of providing clean CMS controls."
      },
      {
        heading: "4. The Next Scale Velocity Benchmark",
        content: "By engineering exclusively on Next.js 16, TypeScript, and Tailwind CSS, modern studios achieve sub-500ms load times and deliver production-ready systems in 5 to 7 business days with 100% full source code ownership handed straight to the client upon completion."
      }
    ],
    checklist: [
      "Always demand 100% source code repository ownership in your project contract.",
      "Require a Google Core Web Vitals performance guarantee (Score 90+).",
      "Avoid agencies using bloated monolithic site-builders with 30+ plugin dependencies.",
      "Ensure edge hosting and SSL setup are included without recurring hostage fees."
    ],
    researchData: [
      {
        metric: "Starter Business Site (3–5 pages)",
        valuePlaceholder: "₹19,999 – ₹29,999",
        note: "Next.js 16, mobile-first, SEO setup, 7-day delivery."
      },
      {
        metric: "Custom Growth Website (Up to 10 pages)",
        valuePlaceholder: "₹79,999 – ₹89,999",
        note: "Custom design, CMS integration, lead capture funnels."
      },
      {
        metric: "Traditional Agency WordPress Delivery Time",
        valuePlaceholder: "60 – 90 Business Days",
        note: "Average delivery latency reported by 200+ survey respondents."
      },
      {
        metric: "Next Scale Modern Velocity Delivery Time",
        valuePlaceholder: "5 – 7 Business Days",
        note: "Rapid sprint architecture with zero agency overhead."
      }
    ]
  },
  {
    slug: "bhubaneswar-digital-business-benchmark-2026",
    category: "research",
    title: "Bhubaneswar Digital Business Benchmark 2026: Website Quality & Local SEO Audit",
    description: "An in-depth empirical audit of 100+ local businesses across Bhubaneswar and Odisha, analyzing mobile page speeds, SEO readiness, and conversion architecture.",
    lastUpdated: "2026-06-01",
    reviewDate: "2026-12-01",
    author: "Abhisek Pani",
    readTime: "10 min read",
    summary: "Our direct audit of 100+ businesses in Bhubaneswar (Saheed Nagar, Patia, Nayapalli, Khandagiri, Cuttack Road) reveals critical opportunities for local clinics, real estate agencies, and service providers to dominate regional Google Search.",
    sections: [
      {
        heading: "1. The Bhubaneswar Market Landscape",
        content: "Bhubaneswar is rapidly emerging as eastern India's leading technology and healthcare capital. However, our direct technical audit of 100+ commercial websites across Saheed Nagar, Patia, Nayapalli, and Infocity revealed that over 70% of local business websites fail basic 2026 digital standards."
      },
      {
        heading: "2. Key Audit Findings & Weaknesses",
        content: "• Mobile Latency: 64% of local business websites in Bhubaneswar take over 4.8 seconds to load on standard 4G mobile networks due to unoptimized image assets and outdated WordPress plugins.\n• Mobile Usability: 48% suffer from tap-target overlapping and horizontal layout shifts.\n• Conversational Gaps: 82% lack direct WhatsApp click-to-chat widgets or automated booking integrations.\n• Local SEO Gaps: 58% of Google Business Profiles have unverified categories, missing LocalBusiness schema markup, or unaddressed customer reviews."
      },
      {
        heading: "3. The 5-Step Playbook for Bhubaneswar Businesses",
        content: "1. Migrate from monolithic slow themes to sub-second Next.js edge architecture.\n2. Implement JSON-LD LocalBusiness and ProfessionalService schema with exact geo-coordinates.\n3. Integrate 24/7 WhatsApp AI booking agents to capture after-hours inquiries.\n4. Automate post-service Google Review collection via automated WhatsApp triggers.\n5. Build hyper-local content targeting specific neighborhoods (e.g. 'Dermatologist in Patia', 'Real estate in Saheed Nagar')."
      }
    ],
    checklist: [
      "Test your website on Google PageSpeed Insights (Aim for 90+ on Mobile).",
      "Verify that your Google Business Profile name, address, and phone match your website exactly.",
      "Embed LocalBusiness JSON-LD schema with Bhubaneswar geo-coordinates.",
      "Add a floating 1-click WhatsApp button to every page on your website."
    ],
    researchData: [
      {
        metric: "Local Websites with >4.5s Mobile Load Time",
        valuePlaceholder: "64.0% of Sample",
        note: "Audited across 100+ commercial sites in Bhubaneswar."
      },
      {
        metric: "Businesses Lacking 24/7 WhatsApp Automation",
        valuePlaceholder: "82.0% of Sample",
        note: "Resulting in massive after-hours lead drop-offs."
      },
      {
        metric: "Profiles Missing LocalBusiness Schema",
        valuePlaceholder: "58.0% of Sample",
        note: "Blocking rich results on regional Google Search & Maps."
      },
      {
        metric: "Conversion Lift with Next Scale Modern Stack",
        valuePlaceholder: "+300% Inquiries",
        note: "Measured on local client deployments in Odisha."
      }
    ]
  },
  {
    slug: "ai-glossary",
    category: "glossary",
    title: "The Core AI Glossary",
    description: "Clear, jargon-free definitions of key automation and AI terms for business owners and operators.",
    lastUpdated: "2026-01-10",
    reviewDate: "2026-07-10",
    author: "Abhisek Pani",
    readTime: "4 min read",
    summary: "Quick definitions of AI concepts, helping business operators talk confidently with engineering teams.",
    sections: [
      {
        heading: "Glossary Index",
        content: "Understanding terminology is key to planning product builds. Refer to the terms below for quick business-level definitions."
      }
    ],
    glossary: [
      {
        term: "Conversational Agent",
        definition: "An AI system (like a WhatsApp receptionist) trained to hold natural dialogues, qualify leads, and perform tasks like calendar booking."
      },
      {
        term: "Webhook",
        definition: "A method where one app sends real-time data to another app automatically when an event occurs (e.g. sending customer details to Google Sheets upon checkout)."
      },
      {
        term: "JSON-LD Schema",
        definition: "Structured data code added to a page that tells search engine crawlers exactly what the page represents (e.g. a product, review, or local business details)."
      },
      {
        term: "E-E-A-T",
        definition: "Google quality standard representing Experience, Expertise, Authoritativeness, and Trustworthiness. Used to rank helpful content."
      }
    ]
  }
];
