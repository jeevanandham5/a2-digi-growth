/*
  Edit these details once. Every place on the page that shows the name,
  city, phone, email or Instagram reads from here.
*/
export const site = {
  brand: "A2 Digi Growth",
  // Owner's name, shown in the About section. Leave as is to keep it generic.
  ownerName: "a freelance web designer and marketer",
  city: "Tamil Nadu",
  // WhatsApp number with country code, digits only. India example: 919876543210
  whatsapp: "919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@a2digigrowth.com",
  instagramHandle: "a2digigrowth",
  whatsappMessage:
    "Hi A2 Digi Growth, I saw your website. I run a business and would like to talk about a project.",
};

export const links = {
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`,
  email: `mailto:${site.email}`,
  instagram: `https://instagram.com/${site.instagramHandle.replace(/^@/, "")}`,
};

export type CaseStudy = {
  name: string;
  kind: string;
  url: string;
  host: string;
  shot: string;
  fullShot: string;
  summary: string;
  facts: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    name: "Sri Anu Jewellers, Madurai",
    kind: "Shopify e-commerce store",
    url: "https://srianujewellers.com",
    host: "srianujewellers.com",
    shot: "/assets/sri-anu-jewellers.jpg",
    fullShot: "/assets/sri-anu-jewellers-full.jpg",
    summary:
      "A gold, silver and diamond jeweller trusted since 1997, now selling online. Live gold rates in the header, over a thousand hallmarked designs, a gold savings scheme, video-call shopping and WhatsApp support, all in a theme built around their maroon and gold identity.",
    facts: [
      "Collections for gold, silver, diamonds and bridal",
      "Live metal rates and price-band filters",
      "Video call booking and WhatsApp chat",
    ],
  },
  {
    name: "Kollimalai Cyperus",
    kind: "Shopify e-commerce store",
    url: "https://kmchairoil.com/",
    host: "kmchairoil.com",
    shot: "/assets/kollimalai-cyperus.jpg",
    fullShot: "/assets/kollimalai-cyperus-full.jpg",
    summary:
      "Herbal skin and hair care made from Kollimalai herbs since 1996. A clean, product-first store in the brand's deep green, with skin care and hair care collections, a birthday offer popup that collects WhatsApp leads, Google reviews and chat on every page.",
    facts: [
      "Skin care and hair care collections",
      "Lead capture straight to WhatsApp",
      "Multi-language ready",
    ],
  },
];

export const services = [
  {
    title: "Static websites",
    text: "Fast, simple sites for shops, clinics, schools and services. Your address, timings, products and a WhatsApp button, loading in under a second on any phone.",
  },
  {
    title: "Shopify e-commerce stores",
    text: "Full online stores with payments, shipping, collections and inventory. Set up, themed to your brand, and handed over with training so you can run it yourself.",
  },
  {
    title: "Poster and creative design",
    text: "Festival offers, product launches, menus and social media posts, designed to match your brand and sized for WhatsApp, Instagram and print.",
  },
  {
    title: "Digital marketing",
    text: "Instagram, Facebook and Google ads with clear budgets and monthly reports. You see what was spent and what came back.",
  },
  {
    title: "SEO",
    text: "Get found when people nearby search for what you sell. Google Business Profile, on-page fixes, local keywords and content that ranks.",
  },
  {
    title: "Solar scheme applications",
    text: "Help with rooftop solar subsidy and net-metering applications: documents, portal registration and follow-up until approval.",
  },
];

export const steps = [
  {
    title: "We talk",
    text: "A call or WhatsApp chat about your business, customers and budget. You get a fixed quote and timeline in writing, usually within two days.",
  },
  {
    title: "I build, you review",
    text: "You see the design early and the live preview often. Content, photos and changes go back and forth until it feels right.",
  },
  {
    title: "Launch and handover",
    text: "Domain, hosting and Google setup done for you, with a walkthrough so you can update prices and posts yourself. I stay reachable after launch.",
  },
];

export const tickerItems = [
  "Static websites",
  "Shopify stores",
  "Poster design",
  "Digital marketing",
  "SEO",
  "Solar scheme applications",
  "Google Business Profile",
  "Instagram ads",
];
