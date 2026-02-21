export type LocalizedValue = {
  lt: string;
  en: string;
};

export type PortfolioProject = {
  id: number;
  title: string;
  type: LocalizedValue;
  tech: string[];
  desc: LocalizedValue;
  link: string;
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "London Handyman Pro",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Profesionalus landing page Londono amatininkų paslaugoms. Su admin paneliu ir kontaktų forma.",
      en: "Professional landing page for London handyman services with admin panel and contact form."
    },
    link: "https://setoviktor1-beep.github.io/london-handyman-pro/"
  },
  {
    id: 2,
    title: "Beauty Studio",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Elegantiškas grožio studijos puslapis su paslaugų katalogu ir rezervacijos forma.",
      en: "Elegant beauty studio page with service catalogue and booking form."
    },
    link: "https://setoviktor1-beep.github.io/beauty-studio-site/"
  },
  {
    id: 3,
    title: "AI Audit SaaS",
    type: { lt: "Web Aplikacija", en: "Web Application" },
    tech: ["Next.js", "Supabase", "Stripe", "Gemini AI"],
    desc: {
      lt: "SaaS platforma GitHub repozitorijų AI auditui su mokėjimų sistema.",
      en: "SaaS platform for AI-powered GitHub repository audits with payment system."
    },
    link: "https://github.com/setoviktor1-beep/ai-audit-saas"
  },
  {
    id: 4,
    title: "Teisinė Atrama",
    type: { lt: "Verslo svetainė", en: "Business Website" },
    tech: ["Next.js", "i18n"],
    desc: {
      lt: "Daugiakalbė teisinių paslaugų svetainė su LT/EN/RU palaikymu.",
      en: "Multilingual legal services website with LT/EN/RU language support."
    },
    link: "https://setoviktor1-beep.github.io/teisine-atrama/"
  },
  {
    id: 5,
    title: "Photographer Site",
    type: { lt: "Portfolio", en: "Portfolio" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Minimalistinis fotografo portfolio su galerija ir kontaktų forma.",
      en: "Minimalist photographer portfolio with gallery and contact form."
    },
    link: "https://setoviktor1-beep.github.io/photographer-site/"
  },
  {
    id: 6,
    title: "Freelancer Services",
    type: { lt: "Verslo svetainė", en: "Business Website" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Premium daugiapuslapė svetainė freelancerio paslaugoms su kainodara.",
      en: "Premium multi-page website for freelancer services with pricing and process."
    },
    link: "https://setoviktor1-beep.github.io/freelancer-services-site/"
  },
  {
    id: 7,
    title: "Mini Social",
    type: { lt: "Web Aplikacija", en: "Web Application" },
    tech: ["Next.js", "Supabase", "Stripe"],
    desc: {
      lt: "Mini socialinė platforma su AI chat funkcija ir mokėjimų sistema.",
      en: "Mini social platform with AI chat functionality and payment system."
    },
    link: "https://mini-social-mvp.vercel.app"
  },
  {
    id: 8,
    title: "Chaos Gallery",
    type: { lt: "Portfolio", en: "Portfolio" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Kūrybinga meno galerijos svetainė su dinaminiu išdėstymu.",
      en: "Creative art gallery website with dynamic layout."
    },
    link: "https://setoviktor1-beep.github.io/chaos-gallery/"
  },
  {
    id: 9,
    title: "Motion Letters",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Animuotas tipografijos projektas su motion design efektais.",
      en: "Animated typography project with motion design effects."
    },
    link: "https://setoviktor1-beep.github.io/motion-letters/"
  },
  {
    id: 10,
    title: "KiteDocs Portfolio",
    type: { lt: "Portfolio", en: "Portfolio" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Profesionalus dokumentacijos ir portfolio šablonas.",
      en: "Professional documentation and portfolio template."
    },
    link: "https://setoviktor1-beep.github.io/kitedocs-portfolio/"
  },
  {
    id: 11,
    title: "Finance Dashboard",
    type: { lt: "Web Aplikacija", en: "Web Application" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Finansų valdymo dashboard su grafikais ir statistikomis.",
      en: "Finance management dashboard with charts and statistics."
    },
    link: "https://setoviktor1-beep.github.io/finance-dashboard/"
  },
  {
    id: 13,
    title: "Mini Ecommerce",
    type: { lt: "Verslo svetainė", en: "Business Website" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Minimalistinis e-komercijos šablonas su produktų katalogu.",
      en: "Minimalist e-commerce template with product catalogue."
    },
    link: "https://setoviktor1-beep.github.io/mini-ecommerce-portfolio/"
  },
  {
    id: 14,
    title: "ValueCraft",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Premium verslo paslaugų landing page su moderniu dizainu.",
      en: "Premium business services landing page with modern design."
    },
    link: "https://setoviktor1-beep.github.io/valuecraft/"
  }
];
