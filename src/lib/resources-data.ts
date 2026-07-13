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
    slug: "ai-adoption-report",
    category: "research",
    title: "AI Adoption Report India (Data Framework)",
    description: "A structured research database tracking AI implementation velocity across SMEs, clinics, and professional firms in India.",
    lastUpdated: "2026-06-01",
    reviewDate: "2026-12-01",
    author: "Abhisek Pani",
    readTime: "10 min read",
    summary: "This page establishes the research framework and data schema for our ongoing study of business automation across top metropolitan hubs.",
    sections: [
      {
        heading: "1. Research Methodology",
        content: "Our study evaluates metrics across three primary vectors: customer reply latency, ticket deflection rates, and weekly administrative time savings. The report operates on verified anonymous datasets from our operational stack."
      },
      {
        heading: "2. Operational Benchmarks Schema",
        content: "Below is the structured data schema that maps key business performance metrics before and after AI agent deployments. Placeholders represent datasets currently undergoing verification."
      }
    ],
    researchData: [
      {
        metric: "Average Customer Reply Latency",
        valuePlaceholder: "[Pending verified data aggregation — Target: < 5 seconds]",
        note: "Measures wait times for incoming WhatsApp Business queries."
      },
      {
        metric: "Support Ticket Deflection Rate",
        valuePlaceholder: "[Pending verified data aggregation — Target: 65% - 80%]",
        note: "Deflected queries resolved successfully without human operator intervention."
      },
      {
        metric: "Weekly Staff Hours Reclaimed",
        valuePlaceholder: "[Pending verified data aggregation — Target: 12 - 18 hours/staff]",
        note: "Administrative scheduling chore hours freed per receptionist."
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
