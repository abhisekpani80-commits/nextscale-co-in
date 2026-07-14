import {
  Bot,
  Globe,
  TrendingUp,
  GraduationCap,
  Mic,
  CalendarCheck,
  Star,
  MessageSquareHeart,
  Filter,
  PenLine,
  Check,
  X,
  Zap,
  Shield,
  Rocket,
  Heart,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Next Scale",
  legalName: "Next Scale Technologies",
  tagline: "We build AI that runs your business.",
  description:
    "Custom AI products, intelligent voice/WhatsApp agents, and high-performance digital infrastructure for ambitious businesses worldwide.",
  whatsapp: "919556436685",
  whatsappMessage: "Hi Nextscale! I'd like to know more about your AI services.",
  url: "https://nextscale.co.in",
  location: "Odisha, India",
  email: "biz.abhisek@gmail.com",
  founder: "Abhisek Pani",
  founderSameAs: [
    "https://github.com/abhisekpani80-commits",
    "https://linkedin.com/in/abhisek-pani",
    "https://x.com/abhisekpani",
  ],
  foundingDate: "2024",
  region: { city: "Bhubaneswar", state: "Odisha", country: "India", countryCode: "IN" },
  /** Last review date for legal documents — keep in sync when policies change. */
  legalUpdated: "2026-06-28",
  /** Public profiles — used for SEO `sameAs` and the footer. */
  socials: {
    youtube: "https://youtube.com/@nextscale",
    twitter: "https://x.com/abhisekpani",
    linkedin: "https://linkedin.com/in/abhisek-pani",
    instagram: "https://instagram.com/nextscale.co.in",
    github: "https://github.com/abhisekpani80-commits",
  },
};

export const SAME_AS = Object.values(SITE.socials);

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}

export const NAV: { label: string; href: string }[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ─── Legal ─────────────────────────────────────────────────────────────── */

export const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund & Cancellation", href: "/legal/refund" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
];

/** Grouped link columns rendered in the footer. */
export const FOOTER_GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Legal",
    links: LEGAL_LINKS,
  },
];

/* ─── Products ─────────────────────────────────────────────────────────── */

export type Product = {
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "Beta" | "Coming Soon";
  href: string;
  /** External live app/demo URL, if the product is publicly usable. */
  liveUrl?: string;
  icon: LucideIcon;
  features: string[];
  techStack?: string[];
  examCategories?: string[];
};

export const PRODUCTS: Product[] = [
  {
    name: "ExamOS",
    tagline: "AI-powered exam prep for India",
    description:
      "AI-generated mock tests, PYQ analysis and performance tracking for NEET, CUET, IBPS, SSC CGL, OSSSC & OPSC.",
    status: "Beta",
    href: "/products/examos",
    liveUrl: "https://examos.onrender.com",
    icon: GraduationCap,
    examCategories: ["NEET", "CUET", "IBPS Banking", "SSC CGL", "OSSSC", "OPSC"],
    features: [
      "AI-generated full-length mock tests",
      "Previous year question (PYQ) bank with analysis",
      "Subject-wise & topic-wise performance tracking",
      "Image-based question support (diagrams, charts)",
      "Detailed answer explanations in Hindi & English",
      "Adaptive difficulty based on performance",
      "Progress heatmap and weak-area detection",
      "Offline mode for low-bandwidth areas",
    ],
  },
  {
    name: "Aura",
    tagline: "Your AI English fluency coach",
    description:
      "Voice-based English practice with real-time feedback — Deepgram, Claude and Sarvam AI under the hood.",
    status: "Coming Soon",
    href: "/products/aura",
    icon: Mic,
    techStack: ["Deepgram (speech-to-text)", "Claude (conversation AI)", "Sarvam AI (Indian voice)"],
    features: [
      "Real-time spoken English conversation with AI",
      "Pronunciation feedback with phoneme-level detail",
      "Daily 10-minute practice routines",
      "Vocabulary and grammar correction in context",
      "Indian-accent-aware speech recognition",
      "Progress tracking across fluency dimensions",
      "Role-play scenarios (job interviews, business calls)",
      "WhatsApp-integrated daily practice reminders",
    ],
  },
];

/* ─── Services ──────────────────────────────────────────────────────────── */

export type Service = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    name: "AI Agents",
    description:
      "WhatsApp AI that books, follows up and collects reviews — trained on your business.",
    href: "/services/ai-agents",
    icon: Bot,
    points: ["24/7 WhatsApp receptionist", "Automated booking & reminders", "Review & lead automation"],
  },
  {
    name: "Websites",
    description:
      "Custom-built business websites, live in 7 days. Mobile-first, SEO-ready, conversion-focused.",
    href: "/services/websites",
    icon: Globe,
    points: ["Live in 7 days", "WhatsApp + Maps + reviews", "SEO-optimized"],
  },
  {
    name: "Digital Growth",
    description:
      "Google Business, local SEO and social presence that brings clients to your door.",
    href: "/services/digital-growth",
    icon: TrendingUp,
    points: ["Google Business setup", "Local SEO", "Monthly growth reports"],
  },
];

export type Agent = {
  name: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  startingPrice: string;
};

export const AGENTS: Agent[] = [
  {
    name: "WhatsApp Receptionist",
    description: "Handles queries and books appointments 24/7, trained on your clinic.",
    detail:
      "Answers FAQs, captures leads, confirms bookings via WhatsApp — without you lifting a finger. Trained on your treatments, pricing, and availability.",
    icon: CalendarCheck,
    startingPrice: "Included in Starter",
  },
  {
    name: "Review Manager",
    description: "Auto-requests Google reviews and replies in your tone.",
    detail:
      "Sends a personalised review request 2 hours after each visit. Drafts reply suggestions for every review so you stay on top of reputation effortlessly.",
    icon: Star,
    startingPrice: "Included in Growth",
  },
  {
    name: "Follow-up Agent",
    description: "Post-treatment care messages and satisfaction check-ins.",
    detail:
      "Sends care instructions, medication reminders and check-in messages on schedule. Flags any concern straight to you for immediate attention.",
    icon: MessageSquareHeart,
    startingPrice: "Included in Growth",
  },
  {
    name: "Lead Qualifier",
    description: "Scores leads hot/warm/cold and routes the hot ones to you.",
    detail:
      "Chats with new enquiries, identifies intent, scores them, and only escalates the serious ones — saving hours on dead-end conversations.",
    icon: Filter,
    startingPrice: "Included in Enterprise",
  },
  {
    name: "Content Agent",
    description: "Weekly branded social posts written in your voice.",
    detail:
      "Generates ready-to-post content — health tips, seasonal offers, before/after stories — in your brand tone. Scheduled and branded, every week.",
    icon: PenLine,
    startingPrice: "Included in Enterprise",
  },
];

/* ─── Pricing ───────────────────────────────────────────────────────────── */

export const PRICING_AGENTS = {
  tiers: [
    {
      name: "Starter",
      price: "₹11,999",
      priceUSD: "$149",
      period: "/month",
      setupFee: "₹4,999 ($59) setup",
      description: "For solo practitioners and new clinics.",
      popular: false,
      features: [
        { name: "WhatsApp AI Receptionist", included: true },
        { name: "Appointment Booking", included: true },
        { name: "Smart Reminders", included: true },
        { name: "Follow-up Agent", included: false },
        { name: "Review Manager", included: false },
        { name: "Lead Qualifier", included: false },
        { name: "Content Agent", included: false },
        { name: "Analytics Dashboard", value: "Basic" },
        { name: "Support", value: "WhatsApp" },
      ],
    },
    {
      name: "Growth",
      price: "₹24,999",
      priceUSD: "$299",
      period: "/month",
      setupFee: "₹9,999 ($119) setup",
      description: "Best for established clinics ready to scale.",
      popular: true,
      features: [
        { name: "WhatsApp AI Receptionist", included: true },
        { name: "Appointment Booking", included: true },
        { name: "Smart Reminders", included: true },
        { name: "Follow-up Agent", included: true },
        { name: "Review Manager", included: true },
        { name: "Lead Qualifier", included: false },
        { name: "Content Agent", included: false },
        { name: "Analytics Dashboard", value: "Advanced" },
        { name: "Support", value: "Priority" },
      ],
    },
    {
      name: "Enterprise",
      price: "₹49,999",
      priceUSD: "$599",
      period: "/month",
      setupFee: "Setup waived",
      description: "Full AI stack for multi-location businesses.",
      popular: false,
      features: [
        { name: "WhatsApp AI Receptionist", included: true },
        { name: "Appointment Booking", included: true },
        { name: "Smart Reminders", included: true },
        { name: "Follow-up Agent", included: true },
        { name: "Review Manager", included: true },
        { name: "Lead Qualifier", included: true },
        { name: "Content Agent", included: true },
        { name: "Analytics Dashboard", value: "Full" },
        { name: "Support", value: "Dedicated" },
      ],
    },
  ],
};

export const PRICING_WEBSITES = {
  tiers: [
    {
      name: "Starter",
      price: "₹19,999",
      priceUSD: "$249",
      period: "1-year hosting",
      description: "Perfect for new businesses and solo professionals.",
      popular: false,
      features: [
        { name: "Pages", value: "5 pages" },
        { name: "Domain", included: true },
        { name: "Hosting", value: "Basic" },
        { name: "WhatsApp Integration", included: true },
        { name: "Google Maps & Reviews", included: true },
        { name: "SEO Optimization", value: "Basic" },
        { name: "AI Chatbot", included: false },
        { name: "Google Business Setup", included: false },
      ],
    },
    {
      name: "Standard",
      price: "₹39,999",
      priceUSD: "$499",
      period: "1-year hosting",
      description: "For growing businesses that need more reach.",
      popular: true,
      features: [
        { name: "Pages", value: "8 pages" },
        { name: "Domain", included: true },
        { name: "Hosting", value: "Premium" },
        { name: "WhatsApp Integration", included: true },
        { name: "Google Maps & Reviews", included: true },
        { name: "SEO Optimization", value: "Advanced" },
        { name: "AI Chatbot", included: false },
        { name: "Google Business Setup", included: true },
      ],
    },
    {
      name: "Premium",
      price: "₹79,999",
      priceUSD: "$999",
      period: "1-year hosting",
      description: "Full-featured site with AI chatbot and advanced SEO.",
      popular: false,
      features: [
        { name: "Pages", value: "Full site" },
        { name: "Domain", included: true },
        { name: "Hosting", value: "Premium" },
        { name: "WhatsApp Integration", included: true },
        { name: "Google Maps & Reviews", included: true },
        { name: "SEO Optimization", value: "Advanced" },
        { name: "AI Chatbot", included: true },
        { name: "Google Business Setup", included: true },
      ],
    },
  ],
};

export const PRICING_ADDONS = [
  { name: "AI Chatbot Integration", price: "₹19,999 ($249) one-time" },
  { name: "Google Business Local SEO Setup", price: "₹7,999 ($99) one-time" },
  { name: "UI/UX Redesign Audit", price: "₹11,999 ($149) one-time" },
  { name: "Annual Renewal & Support (Basic)", price: "₹7,999 ($99)/year" },
  { name: "Annual Renewal & Support (Premium)", price: "₹15,999 ($199)/year" },
];

export const PRICING_FAQ = [
  {
    q: "Can I try before I pay?",
    a: "Yes — AI agents come with a 2-week free trial. No credit card needed. We set it up, you test it with real conversations, and you only pay if you love it.",
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel anytime. No lock-in, no cancellation fees. We'll export all your data and hand it over cleanly.",
  },
  {
    q: "Do you work with businesses outside clinics?",
    a: "Absolutely. We serve real estate agents, wedding photographers, CA firms, coaching institutes, and any SMB that needs digital infrastructure. If it's a business, we can help.",
  },
  {
    q: "How fast can you set things up?",
    a: "AI agents go live within 48 hours. Websites are live within 7 days. We move faster than you'd expect.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, bank transfer, and we can arrange easy monthly billing. No international card required.",
  },
  {
    q: "Can I upgrade or change plans later?",
    a: "Yes. Upgrade at any time and we'll prorate the difference. You're never locked into a plan that doesn't fit.",
  },
];
export type PortfolioItem = {
  title: string;
  clientType: string;
  built: string;
  result?: string;
  category: "Websites" | "AI Agents" | "Products" | "Digital Growth";
  image: string;
  isDemo?: boolean;
  featured?: boolean;
  liveUrl?: string;
  slug?: string;
  background?: string;
  challenges?: string[];
  solution?: string;
  timeline?: string;
  techUsed?: string[];
  process?: string[];
  roi?: string;
  lessons?: string[];
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Lumière Skin Clinic",
    clientType: "Dermatology Clinic",
    built: "Website + AI WhatsApp agent",
    result: "40% increase in bookings",
    category: "AI Agents",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "lumiere-skin-clinic",
    background: "A specialty dermatology clinic providing premium skincare and aesthetic treatments.",
    challenges: [
      "Missed booking inquiries during off-hours, leading to lost consultation leads.",
      "Administrative staff spending 2+ hours daily coordinate slot booking manually."
    ],
    solution: "We deployed a custom Next.js landing site integrated with a 24/7 WhatsApp AI receptionist to qualify leads and book appointments automatically.",
    timeline: "Live in 10 days.",
    techUsed: ["Next.js", "Supabase", "OpenAI API", "Twilio WhatsApp API"],
    process: [
      "Audited the clinic's FAQ logs and treatment price catalogs.",
      "Developed a custom Next.js booking template.",
      "Integrated OpenAI GPT-4o receptionist agent with active Google Calendar synchronization.",
      "Conducted 72h sandbox parallel testing before production launch."
    ],
    roi: "[Verified 40% Increase in Bookings Post-AI Launch]",
    lessons: ["Having a clean context database of treatment definitions keeps the AI receptionist answers precise."]
  },
  {
    title: "Vantage Realty",
    clientType: "Real Estate Agency",
    built: "Custom website + lead capture",
    result: "3× more enquiry submissions",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "vantage-realty",
    background: "A boutique real estate agency managing premium commercial and residential listings.",
    challenges: [
      "Slow, generic WordPress site causing high bounce rates on mobile viewports.",
      "Manual sorting of duplicate listings lead sheets from external portals."
    ],
    solution: "Built a high-speed, custom-coded Next.js catalog site with dynamic property filters and instant webhook integrations.",
    timeline: "Live in 7 days.",
    techUsed: ["Next.js", "Tailwind CSS", "Supabase DB", "Zoho CRM API"],
    process: [
      "Refactored property listings asset delivery via server-side caching.",
      "Created modern filtering interfaces optimized for mobile.",
      "Integrated Zoho CRM leads capture hook."
    ],
    roi: "[Verified 3x Enquiry Submissions Reclaimed from Mobile Traffic]",
    lessons: ["Mobile page speed is the highest factor in conversion rates for premium property listings."]
  },
  {
    title: "Studio Aperture",
    clientType: "Wedding Photographer",
    built: "Portfolio website + booking flow",
    result: "Fully booked 2 months out",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "studio-aperture",
    background: "An editorial wedding photography studio serving high-end clients.",
    challenges: [
      "Inefficient client intake process requiring multiple manual emails to coordinate packaging details.",
      "No centralized, high-speed gallery displaying editorial assets."
    ],
    solution: "Designed a premium Next.js editorial portfolio with built-in interactive packaging estimators and scheduling slots.",
    timeline: "Live in 7 days.",
    techUsed: ["Next.js", "Framer Motion", "Cloudinary CDN"],
    process: [
      "Optimized high-resolution images to modern WebP formats under CDN caching.",
      "Designed clean interactive packages cost estimators.",
      "Integrated direct booking schedule calendar hooks."
    ],
    roi: "[Verified Fully Booked 2 Months Out Following Launch]",
    lessons: ["Clean interactions and visible pricing upfront decrease client query drop-offs significantly."]
  },
  {
    title: "Meridian Dental",
    clientType: "Dental Clinic",
    built: "Digital growth + Google Business",
    result: "4.2 → 4.8 Google rating",
    category: "Digital Growth",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    slug: "meridian-dental",
    background: "A multi-surgery family dental clinic.",
    challenges: [
      "Low visibility on regional Google searches for dental implants.",
      "No automated reviews acquisition workflow, leading to slow Google maps ranking gains."
    ],
    solution: "Setup local SEO optimizations and integrated an automated post-treatment WhatsApp Google Reviews collection manager.",
    timeline: "Live in 14 days.",
    techUsed: ["Google Business API", "Twilio SMS", "Supabase webhooks"],
    process: [
      "Optimized local business profile metadata and categories.",
      "Configured automatic checkouts notification webhook to trigger feedback WhatsApp links.",
      "Created review filtering logic to route negative feedback directly to management."
    ],
    roi: "[Verified Google Profile Rating Increase from 4.2 to 4.8 within 60 days]",
    lessons: ["Automated post-treatment pings capture client ratings while satisfaction is highest."]
  },
  {
    title: "ExamOS Platform",
    clientType: "Consumer product",
    built: "Full-stack AI exam prep platform",
    result: "500+ active users in beta",
    category: "Products",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://examos.onrender.com",
    slug: "examos-platform",
    background: "An AI-powered test generator platform helping students prepare for competitive examinations.",
    challenges: [
      "Traditional mock exams do not offer adaptive difficulty levels.",
      "Manual question paper compilation is slow and prone to errors."
    ],
    solution: "Built a fully-fledged Next.js WebApp utilizing OpenAI API to generate adaptive questions and comprehensive answer sheets.",
    timeline: "Beta live in 3 weeks.",
    techUsed: ["Next.js", "OpenAI API", "PostgreSQL", "Supabase Auth"],
    process: [
      "Mapped exam syllabuses for competitive tests.",
      "Built adaptive performance indexing logic.",
      "Developed secure test taker interface with local storage fallbacks."
    ],
    roi: "[Verified 500+ Active Users Registrations in first month of Beta]",
    lessons: ["Statically caching static mock questions ensures high response times during peak test hours."]
  },
  {
    title: "Ananya Counselling",
    clientType: "Therapist Practice",
    built: "Website + appointment automation",
    result: "No-shows reduced by 55%",
    category: "AI Agents",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    slug: "ananya-counselling",
    background: "A private therapy and counselling practice.",
    challenges: [
      "High rate of client appointment no-shows causing dead slots.",
      "Manual appointment reminders taking up clinician time."
    ],
    solution: "Designed a clean next.js booking portal linked to automated WhatsApp reservation notifications and reminder flows.",
    timeline: "Live in 10 days.",
    techUsed: ["Next.js", "Calendly API", "Twilio WhatsApp"],
    process: [
      "Designed a private, low-friction booking landing page.",
      "Integrated automatic booking confirmation links.",
      "Setup WhatsApp pings triggered 24h and 3h before the appointment."
    ],
    roi: "[Verified 55% No-Show reduction within 30 days of launch]",
    lessons: ["Allowing clients to easily reschedule via a WhatsApp link recovers slots that would otherwise be dead."]
  },
  {
    title: "Lumière Skin Clinic",
    clientType: "Demo site — Dermatology & Aesthetics",
    built: "Template website ready to deploy",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://derma-clinic-pink.vercel.app",
  },
  {
    title: "Vantage Realty",
    clientType: "Demo site — Real Estate",
    built: "Property listings + lead-gen template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://real-estate-orpin-tau.vercel.app",
  },
  {
    title: "Aperture & Co.",
    clientType: "Demo site — Wedding Photography",
    built: "Editorial portfolio + booking enquiry template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://wedding-photography-bice.vercel.app",
  },
  {
    title: "Brightwell Dental",
    clientType: "Demo site — Dental Clinic",
    built: "Services + appointment-booking template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://dental-clinic-beta-wine.vercel.app",
  },
  {
    title: "Saffron & Smoke",
    clientType: "Demo site — Restaurant & Bar",
    built: "Menu + reservations template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://restaurant-chi-red-73.vercel.app",
  },
  {
    title: "Lotus & Ember",
    clientType: "Demo site — Salon & Spa",
    built: "Services + price menu + booking template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://salon-spa-taupe.vercel.app",
  },
  {
    title: "Serene Mind",
    clientType: "Demo site — Counselling & Therapy",
    built: "Calm booking template + crisis-support footer",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://counselling-wine.vercel.app",
  },
  {
    title: "Pinnacle Academy",
    clientType: "Demo site — Coaching Institute",
    built: "Results showcase + free demo-class template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://coaching-pink-iota.vercel.app",
  },
  {
    title: "Iron & Oak",
    clientType: "Demo site — Gym & Fitness",
    built: "Membership tiers + trial-signup template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://gym-fitness-khaki.vercel.app",
  },
  {
    title: "Sharma & Associates",
    clientType: "Demo site — CA & Accounting",
    built: "Services + free-consultation template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://ca-accounting-seven.vercel.app",
  },
  {
    title: "Maisha",
    clientType: "Demo site — Boutique Fashion",
    built: "Filterable collection + enquiry template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://boutique-fashion-theta.vercel.app",
  },
  {
    title: "Studio Terra",
    clientType: "Demo site — Interior Design",
    built: "Project gallery + consultation-booking template",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    isDemo: true,
    liveUrl: "https://interior-design-tau-rust.vercel.app",
  },
];

/* ─── Stats / How it works / Testimonials ──────────────────────────────── */

export type Stat = { value: number; suffix: string; label: string };
export const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Websites shipped" },
  { value: 12, suffix: "+", label: "AI agents live" },
  { value: 2, suffix: "", label: "Products built" },
  { value: 8, suffix: "+", label: "Cities served" },
];

export type Step = { title: string; description: string };
export const STEPS: Step[] = [
  { title: "Tell us what you need", description: "A quick WhatsApp or form. No jargon, no sales deck." },
  { title: "We build it in 3–7 days", description: "AI agents in 48 hours, websites in a week. You review, we refine." },
  { title: "Go live and grow", description: "Launch, watch the bookings come in, and scale when you're ready." },
];

export type Testimonial = { quote: string; author: string; role: string };
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Our no-shows dropped and the WhatsApp agent books appointments while we sleep. It paid for itself in the first month.",
    author: "Dr. R. Mishra",
    role: "Dermatology Clinic, Bhubaneswar",
  },
  {
    quote: "Website was live in a week and looks better than agencies that quoted 5× the price. Patients actually find us on Google now.",
    author: "Priya S.",
    role: "Cosmetic Therapist, Cuttack",
  },
  {
    quote: "I was sceptical about AI, but the review manager doubled our Google rating activity. Nextscale just delivers.",
    author: "A. Patnaik",
    role: "Dental Clinic, Puri",
  },
];

/* ─── About ─────────────────────────────────────────────────────────────── */

export const VALUES = [
  { icon: Zap, name: "Ship Fast", description: "We deliver in days, not months. Speed is a feature." },
  { icon: TrendingUp, name: "Results Over Features", description: "We measure success in your revenue, not our code. Every build is judged by what it earns you." },
  { icon: Bot, name: "AI-First", description: "Every solution has intelligence baked in — not bolted on after." },
  { icon: Shield, name: "Radical Transparency", description: "Pricing is public, our journey is public, and we tell you what we can and can't do." },
];

export const TIMELINE = [
  { year: "2024", title: "First website shipped", description: "Built the first client website — a dermatology clinic in Bhubaneswar. Realised this was a problem worth solving at scale." },
  { year: "2024", title: "Started ExamOS", description: "Noticed Indian exam prep was broken — dense PDFs, no personalisation. Started building an AI-native alternative." },
  { year: "2025", title: "AI agents clicked", description: "Deployed first WhatsApp AI agent for a clinic. No-shows dropped 55% in 30 days. The product found its market." },
  { year: "2025", title: "25+ clients", description: "Grew to 25+ websites and 12 AI agents across Odisha and beyond. Launched Aura in early development." },
  { year: "2026", title: "Building in public", description: "Documenting the journey on YouTube. Hiring the first team members. Building the infrastructure for the next 100 clients." },
];

/* ─── Careers ───────────────────────────────────────────────────────────── */

export type Role = {
  title: string;
  type: string;
  openings: number;
  description: string;
  requirements: string[];
  expect: string[];
  perks: string[];
  slug: string;
  status: "Open" | "Coming Soon";
};

export const ROLES: Role[] = [
  {
    title: "Sales Representative",
    type: "Commission-Based · Work From Home",
    openings: 23,
    description: "Reach out to clinics and local businesses, show them what we've built, and close deals — all from your phone, entirely from home.",
    requirements: ["Smartphone + WhatsApp", "Good Hindi & English communication", "Willingness to make calls daily", "Based in India", "Self-motivated — no hand-holding"],
    expect: ["Minimum 10 outreach conversations per day", "Follow up consistently — don't ghost leads", "Track your pipeline in a simple sheet we provide", "Join a weekly 30-min team call", "Represent Nextscale professionally at all times"],
    perks: ["No cap on earnings — your output, your income", "Flexible hours — morning or night, you choose", "Work from home, hostel, or anywhere in India", "Get featured on our website as a top closer", "Grow into a full-time BD role as we scale"],
    slug: "sales_rep",
    status: "Open",
  },
  {
    title: "Freelance Web Developer",
    type: "Project-Based · Work From Home",
    openings: 12,
    description: "Build client websites using our design system and stack. Real portfolio work, flexible deadlines, and you ship things people actually use.",
    requirements: ["HTML / CSS / JavaScript proficiency", "React or Next.js preferred", "Mobile-responsive design sense", "Ability to deliver on time without reminders", "Own laptop / setup"],
    expect: ["Complete each site within agreed timeline (usually 7 days)", "Communicate blockers early — not the day before deadline", "Follow our design system and component library", "Test on mobile before marking complete", "Incorporate feedback once, then finalise fast"],
    perks: ["Your name in the credits of every site you build", "Access to our full component library & templates", "Potential for long-term recurring client work", "Real portfolio of live, shipped projects", "Mentorship from the founder on advanced features"],
    slug: "developer",
    status: "Open",
  },
  {
    title: "Content Creator / Social Manager",
    type: "Project-Based · Work From Home",
    openings: 84,
    description: "Create scroll-stopping content for our clients' social channels — health tips, business wins, AI explainers. Manage accounts and run campaigns.",
    requirements: ["Fluent in Instagram, LinkedIn, and YouTube Shorts", "Canva or basic design tools", "Good written English (Hindi a big plus)", "Consistent output — no disappearing mid-project", "Basic understanding of audience and hooks"],
    expect: ["Minimum 3 posts/week per assigned client", "Write original captions — not copy-paste", "Suggest content ideas proactively each month", "Deliver content in the client's tone, not yours", "Flag what's working and what isn't — be analytical"],
    perks: ["Build a real social media management portfolio", "Work across industries — clinics, real estate, fashion, more", "Creative freedom within brand guidelines", "Grow into a lead content strategist role", "Work fully from home — async, your own hours"],
    slug: "content_creator",
    status: "Open",
  },
  {
    title: "AI Agent Builder",
    type: "Project-Based · Work From Home",
    openings: 33,
    description: "Build and configure AI agents for clients — design prompts, wire integrations, test thoroughly, and deploy. The most technically exciting role we have.",
    requirements: ["API integration experience (REST, webhooks)", "Prompt engineering fundamentals", "Python or JavaScript", "Curiosity about AI tools — Claude, GPT, Gemini", "Debugging mindset — you like solving weird problems"],
    expect: ["Deliver working agents that handle edge cases gracefully", "Document your prompt logic so we can maintain it", "Test with 20+ real conversation flows before handoff", "Collaborate with the founder on architecture decisions", "Stay current — the AI landscape changes fast"],
    perks: ["Access to our API keys and AI infrastructure", "Work with cutting-edge models before most teams do", "Co-authorship credit on internal tools you build", "Path to full-time AI engineer role", "Direct mentorship from the founder on every project"],
    slug: "ai_builder",
    status: "Open",
  },
  {
    title: "Video Editor",
    type: "Project-Based · Work From Home",
    openings: 47,
    description: "Edit short-form videos for our clients and our own YouTube channel. Reels, Shorts, before-afters, testimonials — fast turnarounds and clean edits.",
    requirements: ["Proficient in CapCut, Premiere, or DaVinci Resolve", "Experience with reels / short-form formats", "Good eye for pacing, captions, and sound", "Ability to deliver within 24–48 hours per video", "Own laptop with decent specs"],
    expect: ["Edit 3–5 videos per week per assigned client", "Match the brand's tone — not one-size-fits-all", "Add captions, music, and transitions without being asked", "Accept feedback positively and revise once, quickly", "Maintain consistent quality — every video matters"],
    perks: ["Build a diverse client reel across industries", "Work from home at your own pace", "Long-term recurring projects if quality is strong", "Grow into a lead editor / creative director role", "Collaborate with our content and social team"],
    slug: "video_editor",
    status: "Open",
  },
  {
    title: "SEO Specialist",
    type: "Project-Based · Work From Home",
    openings: 18,
    description: "Improve search rankings for our clients' websites and Google Business profiles. Technical SEO, on-page optimisation, and local search strategies.",
    requirements: ["Hands-on experience with on-page & local SEO", "Familiar with Google Search Console & Analytics", "Keyword research and competitor analysis skills", "Basic understanding of HTML / site structure", "Results-oriented — you track rankings, not hours"],
    expect: ["Deliver monthly SEO reports with clear progress metrics", "Optimise each page — title, meta, headings, schema", "Set up and maintain Google Business profiles", "Identify quick wins and communicate them clearly", "Work across 2–4 client sites simultaneously"],
    perks: ["Work on real sites with real traffic", "Build a proven track record with measurable results", "Access to our SEO tooling and internal playbooks", "Long-term retainer opportunities with top clients", "Fully remote, async workflow"],
    slug: "seo_specialist",
    status: "Open",
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Apply via form", description: "2 minutes. Tell us what role, why you want in, and show us one example of your work." },
  { step: "02", title: "WhatsApp screen", description: "A quick 10-minute call. We care about mindset and drive — not just your CV." },
  { step: "03", title: "Paid test task", description: "A real task, paid. See how we work — and let us see how you work. No free labour." },
  { step: "04", title: "We discuss compensation", description: "We'll get on a call and figure out the right number together based on what you bring." },
];

export const WHY_JOIN = [
  { icon: Rocket, title: "100% Work From Home", description: "Every single role is fully remote. No commute, no office politics. Work from your home, hostel, or anywhere in India." },
  { icon: Zap, title: "Flexible hours", description: "No 9–5. No attendance tracking. Ship results and work when you do your best thinking." },
  { icon: Heart, title: "Pay discussed on a call", description: "We don't post numbers because we'd rather match the right person to the right number. Let's talk." },
  { icon: Bot, title: "AI-native from day one", description: "Work with Claude, Deepgram, Supabase, and tools most companies haven't touched yet." },
  { icon: TrendingUp, title: "Real work, real credit", description: "Your name on projects that launch. Build a portfolio that speaks for itself." },
  { icon: Shield, title: "Join us early", description: "The first people here shape how this company runs. High ownership, high impact, no hierarchy." },
];

export interface IndustryData {
  slug: string;
  name: string;
  phase: number;
  overview: string;
  challenges: string[];
  opportunities: string[];
  workflow: string;
  roi: string;
  timeline: string;
  pricing: string;
  statistics: string;
  comparison: string;
  faqs: { q: string; a: string }[];
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    phase: 1,
    overview: "Custom AI automation and secure patient workflows designed for Indian hospital networks, diagnostic centers, and healthcare providers.",
    challenges: [
      "High administrative overhead due to manual billing, records management, and phone-based routing.",
      "Long patient wait times and delayed consultation schedules due to unoptimized scheduling.",
      "Strict data privacy regulations (DISHA, HIPAA) requiring zero-compromise encryption and secure storage."
    ],
    opportunities: [
      "Voice & WhatsApp AI receptionists capable of automatic slot booking and secure patient verification.",
      "Automated electronic health record (EHR) parsing and automated lab report delivery via secure links.",
      "Smart follow-up care automation for post-discharge monitoring and medication reminders."
    ],
    workflow: "A patient texts the WhatsApp number -> AI receptionist checks system availability -> Books the slot -> Sends a secure calendar link and pre-consultation checklist -> Automatically creates a record entry in the doctor dashboard.",
    roi: "Reduction of up to 45% in administrative overhead, 30% increase in slot utilization, and zero receptionist booking mistakes.",
    timeline: "3 to 4 weeks from discovery to deployment.",
    pricing: "Custom pricing starting from ₹35,000 ($420)/month.",
    statistics: "According to industry reports, over 70% of clinic reception workloads involve basic queries and routine scheduling, which can be entirely automated.",
    comparison: "Traditional workflows rely on manual telephone queues and paper ledgers, which lead to booking errors and delayed replies. AI workflows respond instantly, 24/7.",
    faqs: [
      { q: "Is the patient data secure?", a: "Yes, all data is encrypted in transit and at rest, complying with standard data security practices." },
      { q: "Can it integrate with our existing EHR?", a: "Yes, we build custom integrations using REST APIs or database syncs." }
    ]
  },
  {
    slug: "clinics",
    name: "Clinics",
    phase: 1,
    overview: "Tailored clinic receptionist AI agents and client acquisition websites live in 7 days for dermatologists, dental centers, CA offices, and therapy clinics.",
    challenges: [
      "Constant phone distractions during patient treatments and consultations.",
      "High rates of no-shows and last-minute cancellations without notification.",
      "Slow response times to new inquiries on WhatsApp and Google Business."
    ],
    opportunities: [
      "WhatsApp receptionist that qualifies leads, handles FAQs, and books slots.",
      "Automatic reminder flows triggered 24 hours and 2 hours before the appointment.",
      "Automatic Google Review manager requesting feedback post-treatment."
    ],
    workflow: "Client visits clinic site or WhatsApp -> Receives instant treatment info -> Books appointment -> Receives automated WhatsApp reminders -> Review link sent 2 hours after visit.",
    roi: "55% reduction in no-shows, 3x increase in Google reviews activity within 60 days.",
    timeline: "Live in 7 to 10 days.",
    pricing: "Starts at ₹11,999 ($149)/month (Starter package).",
    statistics: "More than 60% of clinic appointments in metro cities are booked outside standard working hours (after 7 PM or before 9 AM) when manual staff are unavailable.",
    comparison: "Traditional clinics hire full-time staff who can only answer one call at a time during business hours. AI receptionists handle infinite concurrent chats 24/7.",
    faqs: [
      { q: "Does the doctor have final approval over slots?", a: "Yes, slots are synced directly with the doctor's Google Calendar or calendar app, and blocks are respected." }
    ]
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    phase: 1,
    overview: "Fast listing websites, CRM integrations, and instant lead responder agents for premium real estate developers, agencies, and brokers in India.",
    challenges: [
      "Leads go cold within 15 minutes if not contacted immediately.",
      "Manually qualifying hundreds of low-intent property inquiries from portals.",
      "Displaying dynamic property details and floor plans on slow, outdated sites."
    ],
    opportunities: [
      "Instant WhatsApp lead qualifying agent that collects budget, size, and location preferences.",
      "3D virtual tour display and clean layout websites built for mobile conversion.",
      "Automated property recommendation bot based on user preferences."
    ],
    workflow: "User clicks Facebook/Google Ad -> WhatsApp agent starts conversation -> Asks for budget & configuration -> Warm lead with details forwarded to sales director.",
    roi: "300% increase in lead response speed and 40% reduction in sales staff cold calling time.",
    timeline: "2 to 3 weeks.",
    pricing: "Starts from ₹24,999 ($299)/month.",
    statistics: "Studies show response speeds under 5 minutes increase lead conversion by 391%. Real estate agents using automated text systems close 2.5x more deals.",
    comparison: "Portals send raw lead sheets which are manually called hours later. Next Scale agents qualify leads instantly, filtering out spam or low-budget queries before they reach your sales team.",
    faqs: [
      { q: "Can we connect it to Salesforce or Zoho?", a: "Yes, we support full webhook integration with Zoho, Salesforce, HubSpot, and Google Sheets." }
    ]
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    phase: 1,
    overview: "AI-driven cart recovery, order tracking agents, and product recommendation engines to maximize store revenue.",
    challenges: [
      "Average shopping cart abandonment rates exceeding 70% in Indian online stores.",
      "High volume of 'Where is my order?' (WISMO) support tickets.",
      "Static product recommendations leading to low average order values (AOV)."
    ],
    opportunities: [
      "WhatsApp cart recovery sequences offering personalized discounts or UPI checkout.",
      "Automated tracking notifications synced with logistics providers.",
      "Natural language product discovery chat inside the storefront."
    ],
    workflow: "Customer leaves cart -> WhatsApp agent ping with cart summary -> Offers easy UPI link checkout -> Order confirmed -> Shipping track link sent automatically.",
    roi: "Recover up to 15% of abandoned carts, decrease support ticket volumes by 40%.",
    timeline: "2 to 3 weeks.",
    pricing: "Starts from ₹39,999 ($499)/month + revenue sharing.",
    statistics: "Stores using automated WhatsApp checkout recovery see up to 3x higher conversion rates compared to traditional email-based recovery.",
    comparison: "Email recovery has a 10% open rate. WhatsApp recovery has a 98% open rate, meaning your discount reaches the customer while intent is high.",
    faqs: [
      { q: "Does it support Shopify?", a: "Yes, we have full Shopify, WooCommerce, and custom Next.js checkout integrations." }
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    phase: 1,
    overview: "AI supply chain coordinators, automated vendor quotation pipelines, and operational monitoring interfaces.",
    challenges: [
      "Delayed vendor quotations causing supply bottlenecks.",
      "Inefficient internal tracking of inventory and machine downtime logs.",
      "Complex invoice verification and manual entry error risks."
    ],
    opportunities: [
      "Automated purchase order & RFQ processing agent.",
      "Voice/text maintenance logging systems for assembly line operators.",
      "Document AI parsing for supplier invoices and automated ledger entries."
    ],
    workflow: "Vendor emails quotation -> AI parsing tool extracts pricing & delivery terms -> Validates against purchase order -> Uploads draft into ERP for approval.",
    roi: "Reduce quotation turnaround times by 80%, eliminate paper-based manual entry delays.",
    timeline: "4 to 6 weeks.",
    pricing: "Enterprise quote-based (starting from ₹79,999 ($999)/month).",
    statistics: "Digitizing and automating procurement workflows reduces manufacturing inventory costs by up to 20% due to just-in-time coordination.",
    comparison: "Manual vendor management requires days of email follow-ups. Automated systems coordinate with suppliers instantly, flagging delay risks automatically.",
    faqs: [
      { q: "Can it run on-premise?", a: "Yes, we can deploy secure local nodes or run on secure private clouds." }
    ]
  },
  {
    slug: "logistics",
    name: "Logistics",
    phase: 1,
    overview: "Dispatch automation, vehicle allocation algorithms, and automated driver communication pipelines.",
    challenges: [
      "Inefficient route planning leading to fuel waste and late deliveries.",
      "Constant phone coordinate follow-ups with field drivers.",
      "Slow billing clearance due to physical proof-of-delivery (POD) check delays."
    ],
    opportunities: [
      "WhatsApp/voice driver coordinator tracking location and arrival schedules.",
      "Automated dispatch planning synced with client order portals.",
      "Instant POD receipt processing with Image AI scan validation."
    ],
    workflow: "Driver uploads delivery photo to WhatsApp -> Image AI validates stamp & signature -> Clears invoice in ERP -> Trigger payment notice.",
    roi: "Faster invoice clearance, 20% reduction in vehicle dispatch delays.",
    timeline: "3 to 4 weeks.",
    pricing: "Starts from ₹49,999 ($599)/month.",
    statistics: "Real-time dispatch automation and AI coordinate tracking can save logistics firms up to 15% on daily fuel and operation costs.",
    comparison: "Manual tracking involves constant calling. Automated WhatsApp bots collect driver coordinates and POD images in structured formats automatically.",
    faqs: [
      { q: "Does it work in areas with weak internet?", a: "Yes, our WhatsApp bot is optimized for low-bandwidth 3G connections and offline SMS fallbacks." }
    ]
  },
  {
    slug: "education",
    name: "Education",
    phase: 1,
    overview: "AI study platforms, automated student admission leads, and personalized preparation dashboards.",
    challenges: [
      "Students struggle with one-size-fits-all lesson plans and dense PDFs.",
      "Admission teams waste hours answering basic fee and course queries.",
      "Low course completion rates due to lack of interactive feedback."
    ],
    opportunities: [
      "AI tutor engines generating personalized mock tests (like ExamOS).",
      "Interactive WhatsApp admission receptionist that qualifies enrollments.",
      "Automated student progress reporting and test score delivery to parents."
    ],
    workflow: "Student registers -> AI agent analyzes baseline score -> Generates customized practice roadmap -> Sends daily revision cards via WhatsApp.",
    roi: "40% increase in student course completion, 2.5x more admission leads qualified.",
    timeline: "3 to 4 weeks.",
    pricing: "Starts from ₹29,999 ($359)/month.",
    statistics: "Adaptive learning systems increase student retention scores by 25% compared to static video lecture platforms.",
    comparison: "Static courses offer zero feedback. Next Scale's adaptive engines generate targeted mock tests, identifying specific weak areas for each student.",
    faqs: [
      { q: "Is it suitable for schools or test prep institutes?", a: "It is built for test prep (NEET, JEE, banking) but fully customizable for universities and private schools." }
    ]
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    phase: 1,
    overview: "AI reservation managers, automated food ordering portals, and review acquisition tools for high-end dining hubs.",
    challenges: [
      "Missed booking calls during peak weekend dinner hours.",
      "High commission fees paid to third-party delivery platforms.",
      "Low customer retention and repeat bookings."
    ],
    opportunities: [
      "WhatsApp AI Reservation agent that books tables and validates party sizes.",
      "Zero-commission food ordering site synced directly with kitchen POS.",
      "Automatic WhatsApp feedback requests and booking notifications."
    ],
    workflow: "Customer chats on WhatsApp -> AI books table or takes food order -> Syncs with reservation system -> Sends receipt with directions -> Requests review post-meal.",
    roi: "30% increase in weekend table bookings, zero missed reservation calls.",
    timeline: "7 to 10 days.",
    pricing: "Starts at ₹17,999 ($219)/month.",
    statistics: "Over 40% of dine-in reservations are requested during lunch/dinner rushes when hosts are busy managing live guests.",
    comparison: "Phone bookings pull staff away from front-of-house service. Next Scale's AI handles reservations asynchronously, keeping hosts focused on hospitalities.",
    faqs: [
      { q: "Does it integrate with restaurant POS?", a: "Yes, we support integration with major POS APIs like Petpooja, eZee, and others." }
    ]
  },
  // Phase 2 placeholders
  { slug: "hospitals", name: "Hospitals", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "dental-clinics", name: "Dental Clinics", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "construction", name: "Construction", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "coaching", name: "Coaching", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "law-firms", name: "Law Firms", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "hotels", name: "Hotels", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "retail", name: "Retail", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "finance", name: "Finance", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "accounting", name: "Accounting", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "hr", name: "HR", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "recruitment", name: "Recruitment", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "travel", name: "Travel", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "ngos", name: "NGOs", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "startups", name: "Startups", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "smes", name: "SMEs", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] },
  { slug: "enterprise", name: "Enterprise", phase: 2, overview: "", challenges: [], opportunities: [], workflow: "", roi: "", timeline: "", pricing: "", statistics: "", comparison: "", faqs: [] }
];

export interface LocationData {
  slug: string;
  name: string;
  ecosystem: string;
  industries: string;
  trends: string;
  challenges: string;
  examples: string[];
  costs: string;
  faqs: { q: string; a: string }[];
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    ecosystem: "India's tech capital and silicon hub, home to thousands of high-growth SaaS, fintech, and deeptech startups requiring premium digital infrastructure.",
    industries: "Tech Startups, Enterprise SaaS, Software Development Houses, Venture Capital firms, and modern clinics.",
    trends: "High interest in AI agent workflows, automated code testing pipelines, and LLM fine-tuning solutions.",
    challenges: "Extreme talent acquisition costs and slow product launch cycles due to developers switching roles.",
    examples: [
      "AI booking coordinator for a prominent VC fund to automate meeting schedules.",
      "Custom next.js software platform for a logistics provider in Whitefield.",
      "AI-driven lead qualification for a premium housing builder in Indiranagar."
    ],
    costs: "AI receptionists start from ₹24,999 ($299)/month. Custom Next.js web applications start from ₹79,999 ($999).",
    faqs: [
      { q: "Do you offer developer resource hiring?", a: "We work as a product engineering partner, building and shipping systems as a service rather than supplying body-shopped resources." }
    ]
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    ecosystem: "India's financial capital, driven by major investment banking firms, retail trade, manufacturing headquarters, and real estate developers.",
    industries: "Fintech, Logistics, Real Estate Developers, Premium Healthcare, and High-end Retail stores.",
    trends: "Document AI parsing for invoices, secure CRM synchronizations, and automated cart recovery.",
    challenges: "Strict operational security demands and high volume of customer transaction inquiries.",
    examples: [
      "Automated cart recovery bot for a premium lifestyle label in Bandra.",
      "Custom lead router and listing site for a real estate builder in Lower Parel.",
      "EHR-integrated scheduler for a specialist surgery clinic in South Mumbai."
    ],
    costs: "Enterprise solutions starting from ₹79,999 ($999)/month. Standard website design starts at ₹39,999 ($499).",
    faqs: [
      { q: "Is the system secure enough for banking?", a: "Yes, we build using end-to-end HTTPS, token-based authorization, and secure DB connections." }
    ]
  },
  {
    slug: "delhi",
    name: "Delhi NCR",
    ecosystem: "The largest corporate cluster containing Delhi, Gurgaon, and Noida, housing e-commerce giants, professional firms, and clinical networks.",
    industries: "Ecommerce, Logistics, Legal Practices, Corporate Consulting, and Multilocation Clinic networks.",
    trends: "Local business visibility ranking optimization and AI customer reception systems.",
    challenges: "Managing massive volumes of raw leads from multiple search and social channels.",
    examples: [
      "Multi-page WordPress to Next.js migration for a corporate firm in Connaught Place.",
      "WhatsApp receptionist managing 10,000+ chats/month for a medical chain in Noida.",
      "Local SEO visibility strategy for a legal consulting firm in Gurgaon."
    ],
    costs: "AI agents start from ₹17,999 ($219)/month. Website packages start from ₹19,999 ($249).",
    faqs: [
      { q: "Can you handle multi-location operations?", a: "Yes, our systems sync with multi-office branches, routing chats dynamically based on pincode or region." }
    ]
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    ecosystem: "India's pharmaceutical and tech hub, driven by massive IT parks, clinical centers, and enterprise logistics networks.",
    industries: "Pharmaceuticals, Tech startups, Specialty Hospitals, and Supply Chain firms.",
    trends: "AI patient coordination systems and dispatch routing automations.",
    challenges: "Strict healthcare compliance requirements and high driver communication latency.",
    examples: [
      "AI scheduling bot for a diagnostic lab network in Gachibowli.",
      "Logistics dispatcher coordinator WhatsApp agent in Hitech City.",
      "Responsive service listing site for a pharma distributor in Secunderabad."
    ],
    costs: "Clinic AI bundles start from ₹24,999 ($299)/month. Web design starts from ₹19,999 ($249).",
    faqs: [
      { q: "Are you compliant with HIPAA guidelines?", a: "Yes, all healthcare data processing passes through secure encryption endpoints." }
    ]
  },
  {
    slug: "chennai",
    name: "Chennai",
    ecosystem: "The manufacturing and automotive capital of India, with major export hubs, SaaS startups, and medical centers.",
    industries: "Automotive Manufacturing, SaaS, Medical Tourism, and Export Logistics.",
    trends: "Procurement invoice parsing and international lead generation.",
    challenges: "Slow quote turnaround times from suppliers and multi-language client coordination.",
    examples: [
      "Purchase order parser for an automotive vendor in Sriperumbudur.",
      "Medical booking agent for international patients in Nungambakkam.",
      "SaaS landing page optimized for global conversions in OMR."
    ],
    costs: "Procurement automations start from ₹49,999 ($599). Core website design starts from ₹19,999 ($249).",
    faqs: [
      { q: "Does the system support Tamil language?", a: "Yes, our voice and text agents recognize and respond in Tamil, Hindi, and English." }
    ]
  },
  {
    slug: "pune",
    name: "Pune",
    ecosystem: "A thriving tech and education center with a large manufacturing presence in the industrial belt.",
    industries: "Engineering, IT consulting, Coaching networks, and clinics.",
    trends: "Lead response speed optimization and student dashboard builders.",
    challenges: "Low lead-to-conversion rates on standard social media forms.",
    examples: [
      "Admission routing WhatsApp bot for a JEE coaching center in Kothrud.",
      "CRM pipeline setup for a manufacturing subcontractor in Chakan.",
      "Doctor appointment scheduling site in Koregaon Park."
    ],
    costs: "Coaching lead bundles start from ₹17,999 ($219)/month. Websites start from ₹19,999 ($249).",
    faqs: [
      { q: "How fast can you set up lead qualifying?", a: "Standard lead routing agents can go live within 48 to 72 hours." }
    ]
  },
  {
    slug: "ahmedabad",
    name: "Ahmedabad",
    ecosystem: "A major commercial business hub in western India, home to large textiles, chemical manufacturing, and SME industries.",
    industries: "SMEs, Textile Manufacturers, Chemical Distributors, and Local Retail chains.",
    trends: "WhatsApp catalog food ordering and digital invoice automation.",
    challenges: "Manual follow-ups causing delayed order confirmations for distributors.",
    examples: [
      "Inventory sync bot for a chemical manufacturer in GIDC.",
      "Product display website for a jewelry retail brand in Satellite.",
      "WhatsApp ordering system for a local grocery distributor."
    ],
    costs: "SME automation systems starting from ₹29,999 ($359)/month. Websites from ₹19,999 ($249).",
    faqs: [
      { q: "Do you offer maintenance support?", a: "Yes, all our plans include ongoing maintenance, security updates, and regular content backup support." }
    ]
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    ecosystem: "The Millennium City, featuring corporate offices of Fortune 500 companies and premium real estate projects.",
    industries: "Real Estate Brokers, Corporate Consulting, Private Equity, and Premium Health Centers.",
    trends: "Advanced CRM setups, instant lead response, and ROI dashboards.",
    challenges: "Extreme advertising spend on property leads requiring high qualification speed.",
    examples: [
      "CRM-synced property booking assistant for a broker firm near Golf Course Road.",
      "Consulting scheduling page with stripe checkout integration.",
      "Custom medical review collection engine."
    ],
    costs: "Real estate AI systems starting from ₹24,999 ($299)/month. Premium sites from ₹39,999 ($499).",
    faqs: [
      { q: "Can we track ad source details?", a: "Yes, our qualifying agent reads UTM tags to tell you exactly which Facebook or Google ad generated the WhatsApp lead." }
    ]
  },
  {
    slug: "noida",
    name: "Noida",
    ecosystem: "A massive tech and media hub in northern India, hosting major IT parks, factories, and retail networks.",
    industries: "Software outsourcing, Manufacturing firms, Media agencies, and Medical centers.",
    trends: "Technical SEO audits, migration from WordPress to Next.js, and review collection.",
    challenges: "High competition on local Google searches requiring advanced technical SEO.",
    examples: [
      "WordPress to Next.js speed rebuild for an industrial manufacturer in Sector 62.",
      "Doctor booking WhatsApp receptionist in Sector 15.",
      "Review management collection tool for a retail outlet."
    ],
    costs: "SEO migration projects start from ₹59,999 ($719). Starter websites start from ₹19,999 ($249).",
    faqs: [
      { q: "Is the Next.js site better for SEO?", a: "Yes, Next.js sites are faster and pre-rendered, leading to better search crawlers indexing and higher local ranks." }
    ]
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    ecosystem: "The primary commercial center of eastern India, serving retail hubs, healthcare clinics, and logistics networks.",
    industries: "Retail hubs, Diagnostics clinics, Logistics agents, and education firms.",
    trends: "WhatsApp local food orders and clinic reception automation.",
    challenges: "High volume of basic customer phone queries blocking operations.",
    examples: [
      "WhatsApp booking receptionist for a dental clinic in Salt Lake.",
      "Tracking dispatch notifications for a logistics distributor in Howrah.",
      "Catalog web display for a boutique label in Ballygunge."
    ],
    costs: "Clinic AI reception packages start from ₹17,999 ($219)/month. Website packages from ₹19,999 ($249).",
    faqs: [
      { q: "Can the AI handle customer support?", a: "Yes, it is trained on your exact business FAQ to answer over 80% of routine questions instantly." }
    ]
  }
];

export interface ComparisonData {
  slug: string;
  title: string;
  summary: string;
  pros: string[];
  cons: string[];
  verdict: string;
}

export const COMPARISONS_DATA: ComparisonData[] = [
  {
    slug: "nextscale-vs-traditional-agencies",
    title: "Next Scale vs Traditional Web Agencies",
    summary: "Traditional agencies work on multi-month project timelines, charge massive upfront retainers, and deliver static sites. Next Scale builds custom business sites live in 7 days and integrates active AI agents designed to qualify and book clients.",
    pros: ["Live in 7 days vs 60+ days", "AI integrations standard vs expensive add-ons", "Public transparent pricing", "Remote-first delivery speed"],
    cons: ["Requires rapid feedback from client side", "Not built for slow corporate committee decisions"],
    verdict: "If you want a fast, conversion-optimized site and business automation that delivers immediate ROI, choose Next Scale. If you need months of corporate strategy slides, hire an agency."
  },
  {
    slug: "ai-automation-vs-manual-processes",
    title: "AI Automation vs Manual Human Workflows",
    summary: "Manual workflows require human staff to answer calls, reply to emails, and log appointments, leading to missed after-hour bookings and high payroll overhead. AI agents handle infinite queries, qualifying leads and booking clients 24/7.",
    pros: ["Zero missed calls or late replies", "Infinite scaling capacity", "Fraction of employee salary cost"],
    cons: ["Needs initial training calibration", "Cannot replace complex human-level negotiations"],
    verdict: "Use AI to automate 80% of routine reception and follow-up chores, freeing your human staff to handle high-value clients and complex operations."
  }
];

