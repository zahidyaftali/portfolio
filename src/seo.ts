/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Structured data and sitemap, generated at build time by scripts/prerender.mjs
// from the same data the page renders. Page title/description/OG tags live in index.html.

import { faqData, portfolioData, servicesData } from "./data";

export const SITE_URL = "https://www.zahidyaftali.com";

const HOME_URL = `${SITE_URL}/`;
const absolute = (path: string) => new URL(path, SITE_URL).href;

// Profiles that confirm who runs this site (entity "sameAs" links)
const PROFILES = [
  "https://www.fiverr.com/s/WEaRoRd",
  "https://www.upwork.com/freelancers/~010aee81b1f75b3cac",
  "https://github.com/zahidyaftali",
];

interface PageMeta {
  title: string;
  description: string;
  /** YYYY-MM-DD of the build */
  dateModified: string;
}

export function structuredData({ title, description, dateModified }: PageMeta) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${HOME_URL}#person`,
        name: "Zahid Ali Yaftali",
        url: HOME_URL,
        jobTitle: "Freelance Web Developer",
        description:
          "Freelance web developer with 5+ years of experience building any kind of website: custom-coded sites and web apps, WordPress, Shopify and other CMS platforms, plugins, themes and LMS platforms.",
        email: "mailto:zahidyaftali999@gmail.com",
        sameAs: PROFILES,
        knowsAbout: [
          "Web development",
          "Custom website development",
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MySQL",
          "Tailwind CSS",
          "Content management systems (CMS)",
          "WordPress",
          "Shopify",
          "WooCommerce",
          "Elementor",
          "React",
          "Custom WordPress plugin development",
          "Custom theme development",
          "Learning management systems (LMS)",
          "Web application development",
          "Technical SEO",
          "Website speed optimization",
        ],
      },
      {
        // No aggregateRating: Google ignores star markup for reviews a business publishes about itself
        "@type": "ProfessionalService",
        "@id": `${HOME_URL}#business`,
        name: "Zahid Ali Yaftali – Web Development",
        url: HOME_URL,
        image: absolute("/assets/images/og-image.jpg"),
        logo: absolute("/assets/images/icons/icon-512.png"),
        description:
          "Freelance web development for any kind of website: custom-coded sites and web apps, WordPress, Shopify and other CMS platforms, custom plugins and themes, LMS platforms and SEO.",
        founder: { "@id": `${HOME_URL}#person` },
        email: "zahidyaftali999@gmail.com",
        telephone: "+923472093083",
        // Country from the +92 WhatsApp number shown on the site
        address: { "@type": "PostalAddress", addressCountry: "PK" },
        areaServed: ["United States", "United Kingdom", "Canada", "United Arab Emirates", "Europe", "Australia"],
        sameAs: PROFILES,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web development services",
          itemListElement: servicesData.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${HOME_URL}#website`,
        url: HOME_URL,
        name: "Zahid Ali Yaftali",
        alternateName: "ZAY",
        inLanguage: "en",
        publisher: { "@id": `${HOME_URL}#person` },
      },
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": `${HOME_URL}#webpage`,
        url: HOME_URL,
        name: title,
        description,
        dateModified,
        inLanguage: "en",
        isPartOf: { "@id": `${HOME_URL}#website` },
        about: { "@id": `${HOME_URL}#person` },
        hasPart: { "@id": `${HOME_URL}#portfolio` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absolute("/assets/images/og-image.jpg"),
          width: 1200,
          height: 630,
        },
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${HOME_URL}#portfolio`,
        name: "Websites and web apps built by Zahid Ali Yaftali",
        numberOfItems: portfolioData.length,
        itemListElement: portfolioData.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebSite",
            name: project.title,
            url: project.demoUrl,
            image: absolute(project.image),
            description: project.description,
            creator: { "@id": `${HOME_URL}#person` },
          },
        })),
      },
    ],
  };
}

export function sitemapXml(lastmod: string) {
  const images = [
    "/assets/images/hero-wordpress-dashboard-1280.webp",
    ...portfolioData.map((project) => project.image),
  ];
  const imageTags = images
    .map((path) => `    <image:image><image:loc>${absolute(path)}</image:loc></image:image>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${HOME_URL}</loc>
    <lastmod>${lastmod}</lastmod>
${imageTags}
  </url>
</urlset>
`;
}
