import { SITE } from "@/lib/site";

/**
 * Legal copy lives here as data so every policy renders through one component
 * and shares the same styling, table of contents, and "last updated" stamp.
 *
 * NOTE: These are good-faith, India-oriented templates (DPDP Act 2023, Indian
 * consumer/IT rules). They are NOT a substitute for legal advice — have a
 * lawyer review before relying on them commercially.
 *
 * A paragraph that begins with "- " is rendered as a bullet; consecutive
 * bullets are grouped into one list.
 */

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  slug: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

const ENTITY = `${SITE.legalName} ("${SITE.name}", "we", "us", or "our")`;

export const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  summary:
    "How Nextscale collects, uses, and protects your personal information when you use our website and services.",
  sections: [
    {
      heading: "Introduction",
      body: [
        `${ENTITY} is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the rights you have over it. It applies to ${SITE.url} and all related services.`,
        "By using our website or services, you consent to the practices described here.",
      ],
    },
    {
      heading: "Information we collect",
      body: [
        "We only collect what we need to serve you:",
        "- Contact details you provide — name, email, phone/WhatsApp number, and business details — when you fill a form, message us, or sign up.",
        "- Service data — information you share so we can build or run your website, AI agent, or growth campaign.",
        "- Usage data — pages visited, device and browser type, and approximate location, collected via cookies and analytics.",
        "- Communications — the content of messages you send us on WhatsApp, email, or our forms.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "- To respond to enquiries and provide the services you request.",
        "- To set up, operate, and improve AI agents, websites, and campaigns on your behalf.",
        "- To send service updates, invoices, and (with consent) occasional product news.",
        "- To analyse and improve our website and offerings.",
        "- To comply with legal and tax obligations.",
      ],
    },
    {
      heading: "Legal basis (DPDP Act, 2023)",
      body: [
        "We process personal data on the basis of your consent and, where applicable, to perform a contract with you or to comply with the law, consistent with India's Digital Personal Data Protection Act, 2023. You may withdraw consent at any time (see 'Your rights').",
      ],
    },
    {
      heading: "Sharing & third parties",
      body: [
        "We do not sell your personal data. We share it only with trusted processors that help us operate, such as:",
        "- Hosting and infrastructure providers.",
        "- AI and communication providers (e.g. speech, language, and messaging APIs) strictly to deliver the service.",
        "- Payment processors for billing (we do not store full card details).",
        "- Authorities where required by law.",
        "These partners are bound to use your data only for the purposes we specify.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We keep personal data only as long as needed for the purposes above or as required by law. When you cancel a service we export and hand over your data, then delete our working copies within a reasonable period unless retention is legally required.",
      ],
    },
    {
      heading: "Data security",
      body: [
        "We use reasonable technical and organisational measures — encryption in transit, access controls, and trusted infrastructure — to protect your data. No method of transmission over the internet is 100% secure, but we work to safeguard it.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "Subject to applicable law, you may:",
        "- Access the personal data we hold about you.",
        "- Request correction of inaccurate data.",
        "- Request deletion of your data.",
        "- Withdraw consent or object to certain processing.",
        "- Request a copy of your data in a portable form.",
        `To exercise any right, email us at ${SITE.email}. We respond within a reasonable timeframe.`,
      ],
    },
    {
      heading: "Children's privacy",
      body: [
        "Our services are intended for businesses and adults. We do not knowingly collect personal data from children under 18 without verifiable parental or guardian consent.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy from time to time. The 'Last updated' date below reflects the latest revision. Material changes will be highlighted on this page.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this policy? Email ${SITE.email} or reach us on WhatsApp.`],
    },
  ],
};

export const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  summary:
    "The terms that govern your use of Nextscale's website, products, and services.",
  sections: [
    {
      heading: "Acceptance of terms",
      body: [
        `These Terms of Service ("Terms") govern your access to and use of the website, products, and services provided by ${ENTITY}. By using our services, you agree to these Terms. If you do not agree, please do not use them.`,
      ],
    },
    {
      heading: "Our services",
      body: [
        "We provide AI products, AI agents, website development, and digital-growth services. Specific deliverables, timelines, and pricing are agreed in writing (proposal, invoice, or WhatsApp confirmation) before work begins.",
      ],
    },
    {
      heading: "Your responsibilities",
      body: [
        "- Provide accurate information and timely content, access, and approvals needed to deliver the work.",
        "- Ensure you have the rights to any material (logos, images, text) you supply to us.",
        "- Use AI agents and services lawfully and not for spam, fraud, or any prohibited activity.",
        "- Keep your account credentials and access tokens secure.",
      ],
    },
    {
      heading: "Payments",
      body: [
        "Fees, setup charges, and billing cycles are stated at purchase. Subscription services are billed in advance. Late or failed payments may pause or suspend a service. All prices are in Indian Rupees (INR) unless stated otherwise and are exclusive of applicable taxes.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "Once a project is fully paid, you own the final deliverables created specifically for you (e.g. your website content and design). We retain ownership of our underlying tools, templates, frameworks, and pre-existing IP, and may reuse general know-how. Our brand, products (ExamOS, Aura), and platform remain our property.",
      ],
    },
    {
      heading: "Third-party services",
      body: [
        "Our services may rely on third-party platforms (hosting, messaging, AI APIs, payment gateways). Their availability and terms are outside our control, and your use of them may be subject to their own terms.",
      ],
    },
    {
      heading: "Warranties & disclaimers",
      body: [
        'Services are provided "as is" and "as available". We do not guarantee specific business outcomes (e.g. a particular number of bookings or revenue). AI-generated output may contain errors and should be reviewed before reliance. See our Disclaimer for more.',
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the maximum extent permitted by law, our total liability for any claim arising from the services is limited to the amount you paid us for the specific service in the three months preceding the claim. We are not liable for indirect, incidental, or consequential damages.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "You may cancel subscription services at any time per the Refund & Cancellation Policy. We may suspend or terminate services for breach of these Terms, non-payment, or unlawful use. On termination we will hand over your data and deliverables paid for to date.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        `These Terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts of ${SITE.region.city}, ${SITE.region.state}.`,
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these Terms? Email ${SITE.email}.`],
    },
  ],
};

export const REFUND: LegalDoc = {
  slug: "refund",
  title: "Refund & Cancellation Policy",
  summary:
    "How trials, cancellations, and refunds work across Nextscale's subscriptions and one-time projects.",
  sections: [
    {
      heading: "Overview",
      body: [
        "We want you to be happy with what we build. This policy explains our free trial, cancellation, and refund terms. It forms part of our Terms of Service.",
      ],
    },
    {
      heading: "Free trial",
      body: [
        "AI agents include a 2-week free trial with no credit card required. We set it up, you test it with real conversations, and you only pay if you choose to continue. If you do not continue, you are charged nothing.",
      ],
    },
    {
      heading: "Subscription cancellation",
      body: [
        "- You can cancel any monthly subscription at any time — no lock-in and no cancellation fee.",
        "- Cancellation stops the next billing cycle; the service stays active until the end of the current paid period.",
        "- We do not provide pro-rated refunds for the unused part of a billing cycle already started, unless required by law.",
        "- On cancellation we export your data and hand it over cleanly.",
      ],
    },
    {
      heading: "One-time projects (websites & add-ons)",
      body: [
        "- A setup/deposit fee may be required to begin work; it covers initial effort and is generally non-refundable once work has started.",
        "- If you cancel before work begins, the deposit is refundable minus any payment-gateway charges.",
        "- Once a website is delivered and approved, the project fee is non-refundable.",
        "- Annual hosting/renewal fees are non-refundable once the period has begun.",
      ],
    },
    {
      heading: "Eligible refunds",
      body: [
        "We will issue a refund where:",
        "- We are unable to deliver a paid service and no acceptable alternative is agreed.",
        "- You were charged in error or charged twice.",
        "- A refund is required under applicable consumer law.",
      ],
    },
    {
      heading: "How to request a refund",
      body: [
        `Email ${SITE.email} or message us on WhatsApp with your invoice details and reason. We review every request fairly and respond within 5–7 business days.`,
      ],
    },
    {
      heading: "Refund processing",
      body: [
        "Approved refunds are processed to the original payment method (UPI / bank transfer / card) within 7–10 business days. Timing on your end depends on your bank or payment provider.",
      ],
    },
    {
      heading: "Contact",
      body: [`Billing questions? Email ${SITE.email}.`],
    },
  ],
};

export const COOKIES: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  summary:
    "What cookies and similar technologies we use on the Nextscale website, and how to control them.",
  sections: [
    {
      heading: "What are cookies?",
      body: [
        "Cookies are small text files placed on your device when you visit a website. They help the site work, remember your preferences, and understand how it is used. We also use similar technologies such as local storage.",
      ],
    },
    {
      heading: "How we use cookies",
      body: [
        "- Essential — required for the site to function (e.g. remembering your cookie choice). These cannot be switched off.",
        "- Preferences — remember choices such as theme so your experience is consistent.",
        "- Analytics — help us understand traffic and improve the site, in aggregate and anonymised form.",
        "- We do not use cookies to sell your data or for cross-site advertising.",
      ],
    },
    {
      heading: "Managing cookies",
      body: [
        "You can accept or decline non-essential cookies via our cookie banner. You can also control or delete cookies through your browser settings at any time. Blocking some cookies may affect how parts of the site work.",
      ],
    },
    {
      heading: "Third-party cookies",
      body: [
        "Some features (e.g. embedded maps, analytics, or WhatsApp links) may set their own cookies governed by the respective provider's policy.",
      ],
    },
    {
      heading: "Changes",
      body: [
        "We may update this Cookie Policy as our practices evolve. The 'Last updated' date below shows the latest revision.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about cookies? Email ${SITE.email}.`],
    },
  ],
};

export const DISCLAIMER: LegalDoc = {
  slug: "disclaimer",
  title: "Disclaimer",
  summary:
    "Important notes about the information, AI output, and results associated with Nextscale's website and services.",
  sections: [
    {
      heading: "General information",
      body: [
        `The information on ${SITE.url} is provided in good faith for general informational purposes. While we strive for accuracy, we make no warranty of any kind about the completeness, reliability, or accuracy of this information.`,
      ],
    },
    {
      heading: "AI-generated output",
      body: [
        "Our products and AI agents generate content automatically. AI output can be inaccurate, incomplete, or out of date, and should be reviewed by a human before being relied upon — especially for medical, legal, financial, or other professional decisions. AI agents are tools to assist your business, not licensed professionals.",
      ],
    },
    {
      heading: "No professional advice",
      body: [
        "Nothing on this site or produced by our services constitutes medical, legal, financial, or other professional advice. Always consult a qualified professional for your specific situation.",
      ],
    },
    {
      heading: "Results not guaranteed",
      body: [
        "Case studies, testimonials, and statistics describe past results for specific clients. They are not promises of future performance. Outcomes depend on many factors outside our control, and we do not guarantee any specific result.",
      ],
    },
    {
      heading: "External links",
      body: [
        "Our site may link to third-party websites. We are not responsible for the content, accuracy, or practices of those sites.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about this disclaimer? Email ${SITE.email}.`],
    },
  ],
};

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacy: PRIVACY,
  terms: TERMS,
  refund: REFUND,
  cookies: COOKIES,
  disclaimer: DISCLAIMER,
};
