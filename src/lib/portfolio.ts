export type LocalizedValue = {
  lt: string;
  en: string;
};

export type Testimonial = {
  quote: LocalizedValue;
  author: string;
};

export type CaseStudy = {
  challenge: LocalizedValue;
  solution: LocalizedValue;
  results: LocalizedValue;
  testimonial?: Testimonial;
};

export type PortfolioProject = {
  id: number;
  title: string;
  type: LocalizedValue;
  tech: string[];
  desc: LocalizedValue;
  link: string;
  slug?: string;
  caseStudy?: CaseStudy;
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "London Handyman Pro",
    slug: "london-handyman-pro",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS", "Formspree"],
    desc: {
      lt: "Profesionalus landing page Londono amatininkų paslaugoms. Su admin paneliu ir kontaktų forma.",
      en: "Professional landing page for London handyman services with admin panel and contact form."
    },
    link: "https://setoviktor1-beep.github.io/london-handyman-pro/",
    caseStudy: {
      challenge: {
        lt: "Klientas, teikiantis remonto paslaugas Londone, neturėjo aiškios internetinės prezentacijos. Senas profilis socialiniuose tinkluose neatrodė patikimai, o užklausos dažnai pasiklysdavo žinutėse. Reikėjo sukurti greitai įkeliamą, mobiliai optimizuotą puslapį, kuris per kelias sekundes sukurtų pasitikėjimą ir paskatintų skambinti.",
        en: "A handyman service provider in London had no clear online presence. The old social profile looked unreliable and inquiries often got lost in messages. They needed a fast-loading, mobile-optimized page that built trust within seconds and encouraged calls."
      },
      solution: {
        lt: "Sukūriau vieno puslapio landing page su aiškiu paslaugų sąrašu, darbų galerija, socialiniu įrodymu ir kontaktų forma. Puslapis suprojektuotas taip, kad pagrindinis raginimas veikti būtų matomas iškart, o mobilioji versija būtų ypač patogi naudoti telefone.",
        en: "I built a single-page landing page with a clear service list, work gallery, social proof, and contact form. The page was designed so the main call-to-action was visible immediately, and the mobile version was especially easy to use on a phone."
      },
      results: {
        lt: "Per pirmą mėnesį po paleidimo užklausų skaičius padidėjo daugiau nei dvigubai, o puslapio įkėlimo laikas išliko žemiau 1,5 sekundės. Klientas pastebėjo, kad potencialūs klientai dažniau skambina tiesiogiai, nes puslapis sukuria profesionalų pirmą įspūdį.",
        en: "In the first month after launch, inquiry volume more than doubled while page load time stayed below 1.5 seconds. The client noticed that potential customers called directly more often because the page created a professional first impression."
      },
      testimonial: {
        quote: {
          lt: "Puslapis atrodo puikiai ir tikrai pritraukia daugiau klientų. Dabar žmonės randa mus per Google ir iškart mato visas paslaugas.",
          en: "The page looks great and definitely brings in more customers. Now people find us through Google and immediately see all our services."
        },
        author: "Viktor, London Handyman Pro"
      }
    }
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
    slug: "ai-audit-saas",
    type: { lt: "Web Aplikacija", en: "Web Application" },
    tech: ["Next.js", "Supabase", "Stripe", "Gemini AI"],
    desc: {
      lt: "SaaS platforma GitHub repozitorijų AI auditui su mokėjimų sistema.",
      en: "SaaS platform for AI-powered GitHub repository audits with payment system."
    },
    link: "https://ai-audit-saas-tau.vercel.app",
    caseStudy: {
      challenge: {
        lt: "Kūrėjai norėjo greitai įvertinti savo kodo bazės kokybę ir saugumo spragas prieš diegdami produkcijoje. Trūko įrankio, kuris vienu paspaudimu sujungtų GitHub repozitoriją, generuotų AI paremtą ataskaitą ir pasiūlytų mokamą planą papildomoms funkcijoms.",
        en: "Developers wanted a quick way to assess their codebase quality and security issues before deploying to production. There was no tool that connected a GitHub repository with one click, generated an AI-powered report, and offered a paid plan for advanced features."
      },
      solution: {
        lt: "Sukūriau SaaS platformą su Next.js, Supabase autentifikacija, Stripe mokėjimais ir Gemini AI integracija. Vartotojai prisijungia per GitHub, pasirenka repozitoriją ir gauna struktūrizuotą auditą su rekomendacijomis. Sistema automatiškai tvarko kreditus ir prieigos lygius.",
        en: "I built a SaaS platform with Next.js, Supabase authentication, Stripe payments, and Gemini AI integration. Users sign in via GitHub, pick a repository, and receive a structured audit with recommendations. The system automatically manages credits and access levels."
      },
      results: {
        lt: "Platforma pasiekė veikiantį MVP per kelias savaites. Vartotojai teigiamai įvertino greitą auditą ir aiškią ataskaitų struktūrą. Mokėjimo sistema leido pradėti generuoti pirmąsias pajamas dar prieš pridedant sudėtingesnes funkcijas.",
        en: "The platform reached a working MVP within a few weeks. Users praised the fast audit and clear report structure. The payment system allowed revenue generation to begin before more advanced features were added."
      }
    }
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
    slug: "valuecraft",
    type: { lt: "Landing Page", en: "Landing Page" },
    tech: ["HTML", "CSS", "JS"],
    desc: {
      lt: "Premium verslo paslaugų landing page su moderniu dizainu.",
      en: "Premium business services landing page with modern design."
    },
    link: "https://setoviktor1-beep.github.io/valuecraft/",
    caseStudy: {
      challenge: {
        lt: "Konsultavimo agentūrai reikėjo išskirtinio landing page, kuris atskirtų juos nuo daugybės panašių paslaugų teikėjų. Puslapis turėjo atrodyti premium, bet kartu būti lengvai suprantamas ir greitai įkeliamas. Svarbiausia buvo aiškiai perteikti vertės pasiūlymą per pirmąjį ekraną.",
        en: "A consulting agency needed a distinctive landing page that set them apart from many similar service providers. The page had to look premium while remaining easy to understand and fast to load. The key was to communicate the value proposition clearly above the fold."
      },
      solution: {
        lt: "Sukūriau modernų landing page su tamsia palete, aiškia tipografija ir mikroanimacijomis. Puslapio struktūra vedė lankytoją nuo problemos apibrėžimo iki sprendimo, pateikiant paslaugų žingsnius, rezultatus ir aiškų raginimą susisiekti. Visos animacijos optimizuotos, kad neprailgintų įkėlimo laiko.",
        en: "I created a modern landing page with a dark palette, clear typography, and micro-animations. The page structure guided visitors from problem definition to solution, showing service steps, outcomes, and a clear call to contact. All animations were optimized to avoid increasing load time."
      },
      results: {
        lt: "Naujasis puslapis sumažino atmetimo rodiklį ir padidino vidutinį lankytojo praleistą laiką. Klientas gavo teigiamų atsiliepimų iš partnerių dėl profesionalaus įvaizdžio, o kontaktų formos užpildymų skaičius padidėjo be papildomos reklamos.",
        en: "The new page reduced bounce rate and increased average time on site. The client received positive feedback from partners about the professional image, and contact form submissions increased without additional advertising."
      },
      testimonial: {
        quote: {
          lt: "ValueCraft puslapis perteikia tikrą premium jausmą. Dizainas švarus, o užklausos ėmė augti jau pirmą savaitę.",
          en: "The ValueCraft page delivers a true premium feel. The design is clean, and inquiries started growing in the first week."
        },
        author: "Tomas, ValueCraft"
      }
    }
  }
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((project) => project.slug === slug);
}
