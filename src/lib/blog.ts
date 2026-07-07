export type LocalizedValue = {
  lt: string;
  en: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slugs: { lt: string; en: string };
  title: LocalizedValue;
  excerpt: LocalizedValue;
  date: string;
  readingTime: LocalizedValue;
  author: string;
  content: { lt: BlogSection[]; en: BlogSection[] };
  faq?: { lt: BlogFaq[]; en: BlogFaq[] };
};

export const posts: BlogPost[] = [
  {
    slugs: { lt: "nextjs-vs-wordpress", en: "nextjs-vs-wordpress" },
    title: {
      lt: "Next.js vs WordPress: ką rinktis verslo svetainei 2025 metais?",
      en: "Next.js vs WordPress: What to Choose for a Business Website in 2025?"
    },
    excerpt: {
      lt: "Lyginame dvi populiariausias svetainių kūrimo platformas: kintamo sudėtingumo WordPress ir modernų, greitą Next.js. Sužinokite, kuris sprendimas labiau tinka jūsų verslui.",
      en: "We compare the two most popular website platforms: flexible WordPress and modern, fast Next.js. Find out which solution fits your business better."
    },
    date: "2025-06-15T08:00:00.000Z",
    readingTime: { lt: "6 min. skaitymo", en: "6 min read" },
    author: "Viktor Seto",
    content: {
      lt: [
        {
          heading: "Įžanga",
          paragraphs: [
            "Renkantis technologiją naujai svetainei dažnai stoja klausimas: WordPress ar modernus framework, toks kaip Next.js? Abi platformos turi savo gerbėjų ir yra plačiai naudojamos, tačiau jų filosofija, greitis, saugumas ir priežiūros poreikiai smarkiai skiriasi. 2025 metais verslui, kuriam svarbus greitis, SEO ir unikalus dizainas, Next.js tampa vis patrauklesniu pasirinkimu, nors WordPress vis dar gali būti tinkamas turinio svetainėms su ribotu biudžetu.",
            "Šiame straipsnyje lyginu abu sprendimus pagal praktinius kriterijus, kurie svarbūs renkantis verslo svetainę: greitį, SEO, saugumą, lankstumą, priežiūrą ir kainą."
          ]
        },
        {
          heading: "WordPress: privalumai ir trūkumai",
          paragraphs: [
            "WordPress yra seniausia ir populiariausia turinio valdymo sistema pasaulyje. Jo privalumas – daugybė įskiepių, temų ir galimybė sukurti svetainę be programavimo žinių. Tai puikus pasirinkimas asmeniniams blogams, naujienų portalams ar mažiems projektams, kuriems reikia greitai ir pigiai patekti į internetą.",
            "Tačiau WordPress turi ir rimtų trūkumų. Daug įskiepių sulėtina svetainę, reguliariai reikia atnaujinti sistemą ir saugoti nuo įsilaužimų. Be to, unikalus dizainas ir sudėtingesnės funkcijos dažnai reikalauja programuotojo pagalbos, o tuomet pigus sprendimas tampa brangesnis, nei atrodo iš pradžių."
          ]
        },
        {
          heading: "Next.js: kodėl jis išsiskiria",
          paragraphs: [
            "Next.js – tai React pagrindu sukurtas framework, leidžiantis kurti itin greitas, saugias ir SEO draugiškas svetaines. Skirtingai nuo WordPress, Next.js generuoja statinį HTML jau serverio pusėje, todėl puslapiai įsikelia žaibiškai ir geriau vertinami Google paieškoje.",
            "Next.js taip pat suteikia visišką dizaino ir funkcionalumo laisvę. Kūrėjas gali sukurti unikalią sąsają, prijungti duomenų bazę, mokėjimus, autentifikaciją ar dirbtinio intelekto funkcijas. Tai idealus sprendimas verslams, kurie nori išsiskirti ir ateityje plėsti svetainės galimybes."
          ]
        },
        {
          heading: "Kuris sprendimas tinka jūsų verslui?",
          paragraphs: [
            "Jei jums reikia paprasto blogo ar informacinės svetainės, kurios turinį dažnai keisite patys, ir biudžetas labai ribotas, WordPress gali būti logiškas pasirinkimas. Tačiau jei siekiate profesionalaus įvaizdžio, greičio, unikalaus dizaino ir planuojate integruoti modernias funkcijas, Next.js yra geresnė ilgalaikė investicija.",
            "SiteStudio projektuose dažniausiai naudoju Next.js, nes klientams svarbus greitas įkėlimas, paieškos sistemų matomumas ir galimybė ateityje augti be technologinių apribojimų."
          ]
        }
      ],
      en: [
        {
          heading: "Introduction",
          paragraphs: [
            "When choosing a technology for a new website, one question usually comes up: WordPress or a modern framework like Next.js? Both platforms have loyal users and are widely used, but their philosophy, speed, security, and maintenance needs differ significantly. In 2025, for businesses that care about performance, SEO, and unique design, Next.js is becoming an increasingly attractive choice, although WordPress can still be suitable for content sites with a limited budget.",
            "In this article I compare both solutions using practical criteria that matter when choosing a business website: speed, SEO, security, flexibility, maintenance, and cost."
          ]
        },
        {
          heading: "WordPress: Pros and Cons",
          paragraphs: [
            "WordPress is the oldest and most popular content management system in the world. Its advantage is the huge number of plugins, themes, and the ability to build a site without coding skills. It is a great choice for personal blogs, news portals, or small projects that need to get online quickly and cheaply.",
            "However, WordPress also has serious downsides. Too many plugins slow the site down, the system needs regular updates, and security must be monitored constantly. In addition, a unique design and more advanced features often require a developer, making the seemingly cheap option more expensive than it first appears."
          ]
        },
        {
          heading: "Why Next.js Stands Out",
          paragraphs: [
            "Next.js is a React-based framework for building extremely fast, secure, and SEO-friendly websites. Unlike WordPress, Next.js generates static HTML on the server side, so pages load almost instantly and rank better in Google search.",
            "Next.js also offers complete freedom in design and functionality. A developer can build a unique interface, connect a database, payments, authentication, or AI features. It is the ideal solution for businesses that want to stand out and expand their website capabilities over time."
          ]
        },
        {
          heading: "Which Solution Fits Your Business?",
          paragraphs: [
            "If you need a simple blog or informational site that you will update yourself often, and your budget is very tight, WordPress may be a logical choice. However, if you want a professional image, fast loading, unique design, and plan to integrate modern features, Next.js is the better long-term investment.",
            "At SiteStudio I mostly use Next.js because clients value fast loading, search engine visibility, and the ability to grow without technological limits."
          ]
        }
      ]
    },
    faq: {
      lt: [
        {
          q: "Ar WordPress vis dar aktualus 2025 metais?",
          a: "Taip, WordPress vis dar populiarus turinio svetainėms ir blogams. Tačiau verslui, kuriam svarbus greitis ir unikalus dizainas, verta apsvarstyti modernesnius sprendimus."
        },
        {
          q: "Ar Next.js tinka mažoms įmonėms?",
          a: "Taip, Next.js tinka bet kokio dydžio projektams. Mažoms įmonėms jis suteikia profesionalų įvaizdį, greitį ir galimybę ateityje plėstis."
        },
        {
          q: "Kuri platforma geresnė SEO?",
          a: "Next.js paprastai pranašesnis dėl serverinio generavimo, greičio ir švaraus kodo. WordPress taip pat gali būti SEO draugiškas, tačiau dažnai reikalauja papildomų įskiepių ir optimizavimo."
        }
      ],
      en: [
        {
          q: "Is WordPress still relevant in 2025?",
          a: "Yes, WordPress is still popular for content sites and blogs. However, businesses that care about speed and unique design should consider more modern solutions."
        },
        {
          q: "Is Next.js suitable for small businesses?",
          a: "Yes, Next.js fits projects of any size. For small businesses it provides a professional image, speed, and room to grow in the future."
        },
        {
          q: "Which platform is better for SEO?",
          a: "Next.js is usually better thanks to server-side rendering, speed, and clean code. WordPress can also be SEO-friendly, but often requires extra plugins and optimization."
        }
      ]
    }
  },
  {
    slugs: { lt: "kiek-kainuoja-svetaine", en: "how-much-does-website-cost" },
    title: {
      lt: "Kiek kainuoja sukurti svetainę? 2025 metų kainų vadovas",
      en: "How Much Does a Website Cost? A 2025 Pricing Guide"
    },
    excerpt: {
      lt: "Nuo paprasto landing page iki sudėtingos web aplikacijos – sužinokite, kaip formuojasi svetainių kainos ir į ką verta atkreipti dėmesį planuojant biudžetą.",
      en: "From a simple landing page to a complex web application – learn how website prices are formed and what to consider when planning your budget."
    },
    date: "2025-06-22T08:00:00.000Z",
    readingTime: { lt: "7 min. skaitymo", en: "7 min read" },
    author: "Viktor Seto",
    content: {
      lt: [
        {
          heading: "Įžanga",
          paragraphs: [
            "Viena dažniausių klausimų, kuriuos girdžiu iš klientų: kiek kainuos sukurti svetainę? Atsakymas priklauso nuo daugybės veiksnių: puslapių skaičiaus, dizaino sudėtingumo, funkcijų, technologijų ir termino. Šiame vadove atvirai paaiškinsiu, kaip formuojasi kainos ir kokių išlaidų galite tikėtis 2025 metais.",
            "Svarbu suprasti, kad svetainė nėra vien rinkodaros išlaida – tai ilgalaikė investicija į jūsų verslo matomumą ir pardavimus. Todėl vertinti verta ne tik pradinę kainą, bet ir tai, kiek svetainė kainuos eksploatuojant ir atnaujinant."
          ]
        },
        {
          heading: "Landing page: greitas ir koncentruotas sprendimas",
          paragraphs: [
            "Landing page yra pigiausias ir greičiausias būdas patekti į internetą. Jis skirtas vienam tikslui – parduoti vieną paslaugą, produktą ar surinkti kontaktus. Standartinis landing page kainuoja nuo €299 ir paprastai yra parengtas per 3-5 darbo dienas.",
            "Į šią kainą įeina dizainas, kontaktų forma, mobili versija ir pagrindinė SEO optimizacija. Jei reikia unikalių animacijų, integracijų ar kelių kalbų, kaina gali būti didesnė."
          ]
        },
        {
          heading: "Verslo svetainė: profesionalus įvaizdis",
          paragraphs: [
            "Verslo svetainė paprastai turi 4-6 puslapius: pagrindinį, paslaugas, apie mus, darbus ir kontaktus. Toks sprendimas kainuoja nuo €599 ir yra puikus pasirinkimas įmonėms, norinčioms atrodyti profesionaliai ir suteikti potencialiems klientams visą reikalingą informaciją.",
            "Papildomos funkcijos, tokios kaip blogas, admin valdymas, daugiakalbystė ar išplėstinė SEO optimizacija, gali kainuoti papildomai. Tačiau tai dažnai atsiperka per geresnį Google matomumą ir lengvesnį turinio valdymą."
          ]
        },
        {
          heading: "Web aplikacija: sudėtingesni projektai",
          paragraphs: [
            "Web aplikacijos – tai interaktyvūs sprendimai su vartotojų paskyromis, duomenų bazėmis, mokėjimais ar kitomis funkcijomis. Tokių projektų kaina prasideda nuo €1,499 ir gali siekti keliolika tūkstančių eurų, priklausomai nuo sudėtingumo.",
            "Kaina priklauso nuo autentifikacijos tipo, integruojamų trečiųjų šalių paslaugų, duomenų saugojimo poreikių ir testavimo apimties. Tokie projektai reikalauja daugiau laiko ir techninės ekspertizės."
          ]
        },
        {
          heading: "Papildomos išlaidos, į kurias verta atsižvelgti",
          paragraphs: [
            "Be kūrimo išlaidų, reikėtų numatyti domeno ir hostingo mokestį (metinis, dažnai €50-200), SSL sertifikatą, el. pašto dėžutes ir galbūt priežiūros paslaugas. Jei planuojate nuolat kurti turinį, verta įtraukti ir copywriting ar SEO specialisto išlaidas.",
            "Geras kūrėjas visada iš anksto aptaria šias išlaidas ir padeda pasirinkti ekonomiškai naudingiausius sprendimus, kad svetainė neatimtų daugiau lėšų, nei reikia."
          ]
        }
      ],
      en: [
        {
          heading: "Introduction",
          paragraphs: [
            "One of the most common questions I hear from clients is: how much will it cost to build a website? The answer depends on many factors: number of pages, design complexity, features, technologies, and timeline. In this guide I will openly explain how prices are formed and what costs you can expect in 2025.",
            "It is important to understand that a website is not just a marketing expense – it is a long-term investment in your business visibility and sales. Therefore, you should evaluate not only the initial price, but also the cost of running and updating the site over time."
          ]
        },
        {
          heading: "Landing Page: A Fast and Focused Solution",
          paragraphs: [
            "A landing page is the cheapest and fastest way to get online. It serves one purpose – selling one service, product, or collecting contacts. A standard landing page starts from €299 and is usually delivered within 3-5 business days.",
            "This price includes design, contact form, mobile version, and basic SEO. If you need unique animations, integrations, or multiple languages, the price may increase."
          ]
        },
        {
          heading: "Business Website: A Professional Image",
          paragraphs: [
            "A business website usually has 4-6 pages: home, services, about, portfolio, and contact. This solution starts from €599 and is an excellent choice for companies that want to look professional and give potential customers all the information they need.",
            "Additional features such as a blog, admin panel, multilingual support, or advanced SEO optimization may cost extra. However, these often pay off through better Google visibility and easier content management."
          ]
        },
        {
          heading: "Web Application: More Complex Projects",
          paragraphs: [
            "Web applications are interactive solutions with user accounts, databases, payments, or other features. These projects start from €1,499 and can reach tens of thousands of euros depending on complexity.",
            "The price depends on the authentication method, third-party integrations, data storage needs, and testing scope. Such projects require more time and technical expertise."
          ]
        },
        {
          heading: "Additional Costs to Consider",
          paragraphs: [
            "Besides development costs, you should budget for domain and hosting fees (annual, often €50-200), SSL certificate, email mailboxes, and possibly maintenance services. If you plan to produce content regularly, you should also include copywriting or SEO specialist costs.",
            "A good developer always discusses these costs upfront and helps choose the most cost-effective solutions so the website does not consume more budget than necessary."
          ]
        }
      ]
    },
    faq: {
      lt: [
        {
          q: "Kodėl svetainių kainos taip skiriasi?",
          a: "Kaina priklauso nuo puslapių skaičiaus, funkcijų, dizaino sudėtingumo, naudojamų technologijų ir kūrėjo patirties. Pigiausias sprendimas ne visada yra geriausias ilgalaikėje perspektyvoje."
        },
        {
          q: "Ar galiu gauti tikslų įkainį prieš pradedant?",
          a: "Taip, po trumpo pokalbio apie jūsų poreikius parengiu detalų pasiūlymą su kaina ir terminais."
        },
        {
          q: "Ar po sukūrimo reikia mokėti kas mėnesį?",
          a: "Pats svetainės kūrimas yra vienkartinė išlaida. Tačiau domenas, hostingas ir galima priežiūra yra periodinės išlaidos."
        }
      ],
      en: [
        {
          q: "Why do website prices vary so much?",
          a: "Price depends on the number of pages, features, design complexity, technologies used, and developer experience. The cheapest option is not always the best in the long run."
        },
        {
          q: "Can I get an exact quote before starting?",
          a: "Yes, after a short discussion about your needs I prepare a detailed proposal with price and timeline."
        },
        {
          q: "Are there monthly costs after the website is built?",
          a: "The website development itself is a one-time cost. However, domain, hosting, and possible maintenance are recurring expenses."
        }
      ]
    }
  }
];

export function getAllSlugs(): { locale: string; slug: string }[] {
  const slugs: { locale: string; slug: string }[] = [];
  for (const post of posts) {
    slugs.push({ locale: "lt", slug: post.slugs.lt });
    slugs.push({ locale: "en", slug: post.slugs.en });
  }
  return slugs;
}

export function getPostBySlug(locale: "lt" | "en", slug: string): BlogPost | undefined {
  return posts.find((post) => post.slugs[locale] === slug);
}
