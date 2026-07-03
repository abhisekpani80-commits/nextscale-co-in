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
  name: "Nextscale",
  legalName: "Nextscale Technologies",
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
      price: "₹5,999",
      period: "/month",
      setupFee: "₹2,999 setup",
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
      price: "₹12,999",
      period: "/month",
      setupFee: "₹4,999 setup",
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
      price: "₹24,999",
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
      price: "₹4,999",
      period: "1-year plan",
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
      price: "₹12,999",
      period: "2-year plan",
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
      price: "₹21,999",
      period: "2-year plan",
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
  { name: "AI Chatbot (standalone)", price: "₹8,999 one-time" },
  { name: "Google Business Optimization", price: "₹3,999 one-time" },
  { name: "Social Media Setup", price: "₹4,999 one-time" },
  { name: "Annual Renewal (Basic)", price: "₹2,999/year" },
  { name: "Annual Renewal (Premium)", price: "₹5,999/year" },
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

/* ─── Portfolio ─────────────────────────────────────────────────────────── */

export type PortfolioItem = {
  title: string;
  clientType: string;
  built: string;
  result?: string;
  category: "Websites" | "AI Agents" | "Products" | "Digital Growth";
  image: string;
  isDemo?: boolean;
  featured?: boolean;
  /** Live demo deployment — when set, the portfolio card links here. */
  liveUrl?: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Lumière Skin Clinic",
    clientType: "Dermatology Clinic, Bhubaneswar",
    built: "Website + AI WhatsApp agent",
    result: "40% increase in appointment bookings",
    category: "AI Agents",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Vantage Realty",
    clientType: "Real Estate Agent, Cuttack",
    built: "Custom website + lead capture",
    result: "3× more enquiry form submissions",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Studio Aperture",
    clientType: "Wedding Photographer",
    built: "Portfolio website + booking flow",
    result: "Fully booked 2 months out",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Meridian Dental",
    clientType: "Dental Clinic, Puri",
    built: "Digital growth + Google Business",
    result: "4.2 → 4.8 Google rating in 60 days",
    category: "Digital Growth",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "ExamOS Platform",
    clientType: "Consumer product",
    built: "Full-stack AI exam prep platform",
    result: "500+ active users in beta",
    category: "Products",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://examos.onrender.com",
  },
  {
    title: "Ananya Counselling",
    clientType: "Therapist, Bhubaneswar",
    built: "Website + appointment automation",
    result: "No-shows reduced by 55%",
    category: "AI Agents",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
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
    quote: "I was sceptical about AI, but the review manager doubled our Google rating activity. Buildora just delivers.",
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
  compensation: string;
  description: string;
  requirements: string[];
  slug: "sales_rep" | "developer" | "content_creator" | "ai_builder";
  status: "Open" | "Coming Soon";
};

export const ROLES: Role[] = [
  {
    title: "Sales Representative",
    type: "Commission-Only · Remote",
    compensation: "₹800–₹2,500 per sale. No cap.",
    description: "Reach out to clinics and businesses, show them our services, close the deal. All from your phone.",
    requirements: ["Smartphone + WhatsApp", "Hindi & English communication", "Willingness to make calls", "Based in India"],
    slug: "sales_rep",
    status: "Open",
  },
  {
    title: "Freelance Web Developer",
    type: "Project-Based · Remote",
    compensation: "₹2,000–₹5,000 per project",
    description: "Build client websites using our templates and stack. Flexible hours, real portfolio work.",
    requirements: ["HTML / CSS / JavaScript", "React preferred", "Mobile-responsive design", "Deliver on time"],
    slug: "developer",
    status: "Open",
  },
  {
    title: "Content Creator / Social Manager",
    type: "Project-Based · Remote",
    compensation: "Project-based",
    description: "Create content for client social channels, manage accounts, and run campaigns.",
    requirements: ["Social media fluency", "Basic Canva/design skills", "Good written English", "Consistent output"],
    slug: "content_creator",
    status: "Open",
  },
  {
    title: "AI Agent Builder",
    type: "Project-Based · Remote",
    compensation: "Competitive",
    description: "Build and configure AI agents for clients — prompts, integrations, testing, deployment.",
    requirements: ["API integration experience", "Prompt engineering basics", "Python or JavaScript", "Problem-solver mindset"],
    slug: "ai_builder",
    status: "Coming Soon",
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Apply via form", description: "2 minutes. Just the basics — no lengthy CV required." },
  { step: "02", title: "WhatsApp screen", description: "A 10-minute call. We want to know why you want in, not just your experience." },
  { step: "03", title: "Test task", description: "A real, paid 1-hour task. See how we work, and let us see how you work." },
  { step: "04", title: "You're in", description: "Onboarding call, first project, and you're building with us." },
];

export const WHY_JOIN = [
  { icon: Rocket, title: "Work from anywhere", description: "100% remote. Work from your hostel, home, or a café in Puri." },
  { icon: Zap, title: "Flexible hours", description: "No 9–5 here. Deliver results, not attendance." },
  { icon: Heart, title: "Real commissions", description: "No unpaid internships. Every role pays from day one." },
  { icon: Bot, title: "AI-native stack", description: "Work with Claude, Deepgram, Supabase, and tools most teams haven't touched yet." },
  { icon: TrendingUp, title: "Career-defining work", description: "Your name on projects that actually launch. Not side tasks." },
  { icon: Shield, title: "Built from scratch", description: "Join early. The first 10 people shape how this company works." },
];
