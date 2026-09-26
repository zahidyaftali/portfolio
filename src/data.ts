/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, ProcessStep, Benefit, Testimonial, FAQItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "wp-dev",
    title: "WordPress Website Development",
    description: "From a simple business site to a complex multi-page build, I handle everything in WordPress — clean code, solid structure, and nothing you don't need.",
    iconName: "Globe"
  },
  {
    id: "white-label",
    title: "White Label WordPress for Agencies",
    description: "I work quietly in the background on your client projects with full confidentiality. Your brand stays front and centre — nobody will ever know I was there.",
    iconName: "ShieldCheck"
  },
  {
    id: "woocommerce",
    title: "WooCommerce Store Development",
    description: "Need an online store? I build and configure WooCommerce stores that are easy to manage, fast to load, and built to actually convert visitors into buyers.",
    iconName: "ShoppingBag"
  },
  {
    id: "redesign",
    title: "WordPress Website Redesign",
    description: "If your current site feels dated or just isn't working the way it should, I'll rebuild it in WordPress with a cleaner design and a better user experience.",
    iconName: "Layout"
  },
  {
    id: "theme-dev",
    title: "Custom WordPress Theme Development",
    description: "Got a design in Figma or just an idea in your head? I'll turn it into a custom WordPress theme that matches exactly what you're after — pixel by pixel.",
    iconName: "Sparkles"
  },
  {
    id: "speed-opt",
    title: "WordPress Speed Optimization",
    description: "Slow sites lose visitors and rankings. I dig into what's dragging your WordPress site down and fix it — Core Web Vitals, load time, the whole thing.",
    iconName: "Zap"
  },
  {
    id: "seo-setup",
    title: "WordPress SEO Setup",
    description: "I set up your WordPress site the right way for search engines — proper heading structure, schema markup, clean URLs, and a solid Yoast or RankMath configuration.",
    iconName: "Search"
  },
  {
    id: "bug-fixes",
    title: "WordPress Fixes & Troubleshooting",
    description: "Plugin conflicts, broken layouts, a white screen of death — whatever's going wrong with your WordPress site, I'll find the cause and get it sorted fast.",
    iconName: "Wrench"
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "project-1",
    title: "Arch Dermatology Center",
    category: "Medical & Clinical Portal",
    description: "Developed a secure clinical website featuring precise doctor search tools, digital appointment scheduling, and localized map details, keeping the core script bundles lightweight.",
    image: "/assets/images/portfolio/arch-dermatology-center-wordpress-website.webp",
    tags: ["Elementor Pro", "Custom CSS", "Booking Pipeline"],
    demoUrl: "https://archdermatology.com/",
    scope: "Responsive Development"
  },
  {
    id: "project-2",
    title: "Flechtarbeiten Studio",
    category: "Traditional Crafts Showroom",
    description: "A minimalist digital catalogue exhibiting premium hand-woven products. Built with soft typography styles, structured CSS grids, and optimized image rendering.",
    image: "/assets/images/portfolio/flechtarbeiten-studio-wordpress-website.webp",
    tags: ["Custom Gutenberg", "Responsive Grid", "Image SEO"],
    demoUrl: "https://flechtarbeiten.de/",
    scope: "Interactive Showroom"
  },
  {
    id: "project-3",
    title: "Goepfert Express",
    category: "Logistics & Transport Hub",
    description: "Programmed a reliable courier team portal with streamlined intake questionnaires and quick local quote calculations that run cleanly on mobile.",
    image: "/assets/images/portfolio/goepfert-express-wordpress-website.webp",
    tags: ["Form Architecture", "Custom Logic", "Localization"],
    demoUrl: "https://goepfert-express.solutions-vogelfrei.de/",
    scope: "Frontend Engineering"
  },
  {
    id: "project-4",
    title: "Zero Trip Mobility",
    category: "Sustainable Travel Storefront",
    description: "Consulted on a high-performing e-commerce framework to support modern physical goods. Included instant checkout filters and lean AJAX shopping cart mechanics.",
    image: "/assets/images/portfolio/zero-trip-mobility-wordpress-website.webp",
    tags: ["WooCommerce", "Cart Optimization", "Speed Tuned"],
    demoUrl: "https://zero-trip.com/",
    scope: "E-Commerce Pipeline"
  },
  {
    id: "project-5",
    title: "Die Chaoskiller Berlin",
    category: "Home & Office Organization",
    description: "Engineered a rapid-response landing page with deep Local SEO structures and crisp schema codes to help convert regional service traffic.",
    image: "/assets/images/portfolio/die-chaoskiller-berlin-wordpress-website.webp",
    tags: ["Theme Code", "Structured Data", "Conversion Flow"],
    demoUrl: "https://die-chaoskiller-berlin.de/",
    scope: "Local Lead Funnel"
  },
  {
    id: "project-6",
    title: "CAISD Africa Network",
    category: "Regional Policy Advisory",
    description: "Developed an open resource archive featuring publication indices, responsive grid controls, and print-style overrides for academic documents.",
    image: "/assets/images/portfolio/caisd-africa-network-wordpress-website.webp",
    tags: ["Directory Setup", "Core Blocks", "Contrast Compliance"],
    demoUrl: "https://caisd.africa/",
    scope: "White-Label Development"
  },
  {
    id: "project-7",
    title: "Jazba Creative Studio",
    category: "Film & Visual Production",
    description: "A dark-ambient portfolio styled to showcase high-resolution cinematic videos smoothly using lightweight viewport lazy-loads.",
    image: "/assets/images/portfolio/jazba-creative-studio-wordpress-website.webp",
    tags: ["Media Delivery", "GSAP Hooks", "Theme Tuning"],
    demoUrl: "https://jazba.studio/",
    scope: "Portfolio Development"
  },
  {
    id: "project-8",
    title: "CSFM Cleaning Services",
    category: "Facility Management Hub",
    description: "Built a customized service booking portal featuring automatic location selections and streamlined customer quotes under NDA.",
    image: "/assets/images/portfolio/csfm-cleaning-services-wordpress-website.webp",
    tags: ["Elementor Custom", "Custom Form Scripts", "Responsive Menu"],
    demoUrl: "https://csfmcleaning.com/",
    scope: "Application Mockup"
  },
  {
    id: "project-9",
    title: "4TS Architectural Atelier",
    category: "Structural Design Portfolio",
    description: "Coded a high-concept visual showcase with fluid hover logic and precise margins, designed to replicate exact Figma templates.",
    image: "/assets/images/portfolio/4ts-architectural-atelier-wordpress-website.webp",
    tags: ["Figma to Code", "Gutenberg Core", "Clean Grid"],
    demoUrl: "https://www.4tsstudio.org/",
    scope: "Layout Engineering"
  },
  {
    id: "project-10",
    title: "iUveda Wellness Hub",
    category: "Holistic Consultation Platform",
    description: "Stripped a content-dense wellness directory of bloated plugins, achieving mobile load times below 1.4 seconds with inline design paths.",
    image: "/assets/images/portfolio/iuveda-wellness-hub-wordpress-website.webp",
    tags: ["Core Web Vitals", "Custom Gutenberg", "Asset Pruning"],
    demoUrl: "https://iuvedalife.com/",
    scope: "Speed Optimization"
  },
  {
    id: "project-11",
    title: "Privelux Wealth Advisory",
    category: "Asset Allocation Counsel",
    description: "A secure corporate platform delivering localized consulting resources, complete with reliable lead capture fields and strict code hygiene.",
    image: "/assets/images/portfolio/privelux-wealth-advisory-wordpress-website.webp",
    tags: ["Solid Typography", "Forms Hardening", "Strict NDA"],
    demoUrl: "https://priveluxadvisory.com/",
    scope: "Institutional Code"
  },
  {
    id: "project-12",
    title: "Infinite Calculators",
    category: "Mathematical Web Tools",
    description: "Built a suite of functional JavaScript tools returning arithmetic results instantly in the browser without high server execution overhead.",
    image: "/assets/images/portfolio/infinite-calculators-wordpress-website.webp",
    tags: ["JS Math Script", "Responsive UI", "Page Engine Tuning"],
    demoUrl: "https://infinitecalculators.com/",
    scope: "Custom Tool coding"
  },
  {
    id: "project-13",
    title: "Olimotion Studio",
    category: "Movement & Motion Platform",
    description: "Crafted interactive vectors and animated scroll points that load swiftly on slow cell arrays, maintaining design fidelity.",
    image: "/assets/images/portfolio/olimotion-studio-wordpress-website.webp",
    tags: ["CSS Animations", "Asset Delivery", "Performance Index"],
    demoUrl: "https://olimotion.com/",
    scope: "Media Engineering"
  },
  {
    id: "project-14",
    title: "Istanbul Restaurant",
    category: "Culinary Reservations",
    description: "Structured an easy-to-browse menu hierarchy and integrated a reservations pipeline, focusing heavily on touch targets on mobile screens.",
    image: "/assets/images/portfolio/istanbul-restaurant-wordpress-website.webp",
    tags: ["Mobile Booking", "Responsive Layout", "SEO Structure"],
    demoUrl: "https://istanbulrestaurantbirmingham.com/",
    scope: "Gutenberg Core Builder"
  },
  {
    id: "project-15",
    title: "Red X Pink Commerce",
    category: "Boutique Fashion Store",
    description: "Developed a lightweight custom e-commerce checkout interface that minimizes cart abandonment rates through streamlined interactions.",
    image: "/assets/images/portfolio/red-x-pink-commerce-wordpress-website.webp",
    tags: ["WooCommerce Dev", "Stripe Checkout", "Product Grid"],
    demoUrl: "https://redxpink.com/",
    scope: "E-Commerce Integration"
  },
  {
    id: "project-16",
    title: "SMB Power & Infrastructure",
    category: "Industrial Power Engineering",
    description: "A clean, informative presentation for commercial solar installers, complete with credentials panels and accessible document libraries.",
    image: "/assets/images/portfolio/smb-power-infrastructure-wordpress-website.webp",
    tags: ["B2B Layout", "High Contrast", "Typography Setup"],
    demoUrl: "https://smbelectrical.ca/",
    scope: "Agency Support Dev"
  },
  {
    id: "project-17",
    title: "Slotenspecialist Direct",
    category: "Emergency Locksmith Network",
    description: "A high-performance portal designed for emergency lock support, optimized to reach perfect mobile core score loads under 1 second.",
    image: "/assets/images/portfolio/slotenspecialist-direct-wordpress-website.webp",
    tags: ["Speed Blueprint", "Mobile CTA", "Hotline Call Tap"],
    demoUrl: "https://www.slotenspecialistdirect.nl/",
    scope: "Performance Tuning"
  },
  {
    id: "project-18",
    title: "Ace Impact Advisory",
    category: "Corporate Consulting Hub",
    description: "A premium advisory site featuring statistics widgets, customized team showcases, and secure contact endpoints built cleanly for agency client.",
    image: "/assets/images/portfolio/ace-impact-advisory-wordpress-website.webp",
    tags: ["Flexible Gutenberg", "Asset Delivery", "Form Pipelines"],
    demoUrl: "https://aceimpactllc.com/",
    scope: "Figma to WordPress"
  },
  {
    id: "project-19",
    title: "Casa Suerte Retreat",
    category: "Luxury Spanish Retreat",
    description: "A vacation rental showcase featuring instant booking inquiries, custom location map integrations, and automated live calendar feeds.",
    image: "/assets/images/portfolio/casa-suerte-retreat-wordpress-website.webp",
    tags: ["Rental Calendar", "Gutenberg Layout", "Local Map Dev"],
    demoUrl: "https://www.casa-suerte.nl/",
    scope: "Booking Development"
  },
  {
    id: "project-20",
    title: "Wise Origin Coffee",
    category: "Artisan Coffee Roasters",
    description: "Built the digital presence for an independent coffee workshop. Features robust product layout templates that clients can easily adjust.",
    image: "/assets/images/portfolio/wise-origin-coffee-wordpress-website.webp",
    tags: ["Craft Product Show", "Performance Index", "Elementor Pro"],
    demoUrl: "https://wiseorigin.co.uk/",
    scope: "Theme Integration"
  },
  {
    id: "project-21",
    title: "DJ Schilderwerken",
    category: "Artisan Wood Coating Services",
    description: "High-end painting portfolio featuring clean split compare sliders to showcase client projects without hurting performance index metrics.",
    image: "/assets/images/portfolio/dj-schilderwerken-wordpress-website.webp",
    tags: ["Split Sliders", "Lead Funnel", "Modern Layout"],
    demoUrl: "https://www.djschilderwerken.nl/",
    scope: "Interactive Dev"
  },
  {
    id: "project-22",
    title: "Danis Private Moving",
    category: "Local Transport Logistics",
    description: "A clean multi-step estimation wizard built to help clients request quotes based on volume and distance easily.",
    image: "/assets/images/portfolio/danis-private-moving-wordpress-website.webp",
    tags: ["Logistics Calculator", "Step Form CSS", "User Flow Setup"],
    demoUrl: "https://www.danis-umzuege.de/",
    scope: "Custom App Code"
  },
  {
    id: "project-23",
    title: "Victory Umzüge Berlin",
    category: "Commercial Relocation",
    description: "A multi-page corporate logistics site offering automated estimation formulas, bilingual setup configurations, and custom styled forms.",
    image: "/assets/images/portfolio/victory-umzuge-berlin-wordpress-website.webp",
    tags: ["Logistics Engine", "Localization Dev", "Security Check"],
    demoUrl: "https://victory-umzuege.de/",
    scope: "Clean Code Theme"
  },
  {
    id: "project-24",
    title: "Niyum Produce Trading",
    category: "Wholesale Grocery Hub",
    description: "An elegant bulk trade directory utilizing Custom Post Types to render farm product tables clearly for international buyers.",
    image: "/assets/images/portfolio/niyum-produce-trading-wordpress-website.webp",
    tags: ["Custom Fields", "Bulk Table List", "Lightweight Gutenberg"],
    demoUrl: "https://www.niyumtrading.com/",
    scope: "Dynamic Content Dev"
  },
  {
    id: "project-25",
    title: "Vanguard Performance Hub",
    category: "Athletic Conditioning Gym",
    description: "A highly responsive layout built to handle trainer timetables, location details, and class registrations efficiently.",
    image: "/assets/images/portfolio/vanguard-performance-hub-wordpress-website.webp",
    tags: ["Speed Index 98%", "Registration CTA", "Responsive tables"],
    demoUrl: "https://vanguardstrengthfitness.com/",
    scope: "Performance Blueprint"
  },
  {
    id: "project-26",
    title: "Zion Coach Services",
    category: "Group Transit Logistics",
    description: "A customized coach hire platform featuring high-contrast travel options and streamlined booking inquiries.",
    image: "/assets/images/portfolio/zion-coach-services-wordpress-website.webp",
    tags: ["Booking Forms", "Elementor", "Local SEO Optimization"],
    demoUrl: "https://zioncoachservices.com.au/",
    scope: "Theme Engineering"
  },
  {
    id: "project-27",
    title: "Quincy Congressional Forum",
    category: "Public Campaign Hub",
    description: "Structured a compliant outreach site engineered to support heavy dynamic traffic with locked-down scripts.",
    image: "/assets/images/portfolio/quincy-congressional-forum-wordpress-website.webp",
    tags: ["Clean Gutenberg", "Accessible Setup", "SEO Structure"],
    demoUrl: "https://quincyforcongress.com/",
    scope: "Access-First Development"
  },
  {
    id: "project-28",
    title: "Thomwerk Atelier",
    category: "Bespoke Carpentry Workshop",
    description: "Turned precise architectural grids into flexible content modules with no layouts shifts, emphasizing spatial woodwork galleries.",
    image: "/assets/images/portfolio/thomwerk-atelier-wordpress-website.webp",
    tags: ["Figma to Gutenberg", "Masonry Gallery", "Core Vitals optimized"],
    demoUrl: "https://thomwerk.nl/",
    scope: "Pixel-Perfect Development"
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Discovery",
    description: "We discuss your project requirements, goals, and timeline.",
    iconName: "SearchCode"
  },
  {
    stepNumber: 2,
    title: "Planning",
    description: "I create a clear development approach and confirm scope.",
    iconName: "Calendar"
  },
  {
    stepNumber: 3,
    title: "Development",
    description: "Your website is built with regular updates and feedback loops.",
    iconName: "FileCode"
  },
  {
    stepNumber: 4,
    title: "Delivery",
    description: "Final testing, optimization, and deployment — ready to launch.",
    iconName: "Rocket"
  }
];

export const benefitsData: Benefit[] = [
  {
    id: "fast-delivery",
    title: "Dates are Solid Gold",
    description: "I take launch timelines seriously. You can confidently promise delivery dates to your clients knowing I will handover clean page code right on schedule."
  },
  {
    id: "clean-code",
    title: "Extremely Clean Code",
    description: "No bulky, unneeded tracking scripts, bloated templates, or messy chains of parent themes. I deliver modular, easy-to-read code standard teams love."
  },
  {
    id: "seo-friendly",
    title: "Proper On-Page SEO",
    description: "Correct semantic markup, crisp heading sequences, and lean script footprints. Search engine crawlers can scan and index your pages without a hitch."
  },
  {
    id: "pixel-perfect",
    title: "Figma to Code Precision",
    description: "I replicate your layout ratios, margins, hover animations, and font settings perfectly. Zero guess-work or awkward alignment gaps."
  },
  {
    id: "mobile-optimized",
    title: "Tested on Actual Screens",
    description: "No simple simulator shortcuts. I check responsiveness and tap-zone sizes directly on real handheld viewports to verify complete visual balance."
  },
  {
    id: "agency-collab",
    title: "Truly Invisible Collaboration",
    description: "I act as your direct in-house engineer. I represent your brand, keep strict confidentiality, and never list your deliverables on my public pages."
  },
  {
    id: "communication",
    title: "Honest & Fast Updates",
    description: "You won't have to chase me down for a status call. I check-in daily on Slack, WhatsApp, or ClickUp, keeping you fully in control of daily progress."
  },
  {
    id: "long-support",
    title: "Dependable Ongoing Support",
    description: "I don't disappear into the wind once the site launch is successful. I stay fully on tap for client content adjustments, post-launch tweaks, and updates."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Director of Operations",
    company: "PixelFlow Agency",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Zahid has been our core white-label developer for over two years now. He translates complicated Figma layouts into clean, blazing-fast WordPress themes in record time. Our team has completely ceased worrying about layout bugs—our clients are absolutely thrilled with how responsive and easy-to-use their sites are."
  },
  {
    id: "test-2",
    name: "Marcus Torres",
    role: "Founder & Creative Director",
    company: "Stacked Creative",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Bringing Zahid on as our white-label partner completely solved our developer shortage. He is completely invisible to our clients, signs NDAs without fuss, and delivers code that is exceptionally neat and documented. If you manage a busy creative agency, having him on speed-dial is an absolute game-changer."
  },
  {
    id: "test-3",
    name: "Devon Miller",
    role: "Digital Strategy Lead",
    company: "Ascent Web Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Absolutely phenomenal speed work! Zahid took over a lagging WooCommerce build and managed to bring the mobile Core Web Vitals score straight up to 99 in just a few days. Best of all, his communication is extremely clear; he checks in daily without ever needing a nudge."
  },
  {
    id: "test-4",
    name: "David Vance",
    role: "CTO & Co-Founder",
    company: "NextGen Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "We spent weeks trying to resolve a complex checkout collision in WooCommerce before calling Zahid. He found the conflict and solved it within hours using a clean, custom PHP snippet. He's incredibly reliable, sharp, and easy to work with."
  }
];

// Shared by the FAQ section and the FAQPage structured data in src/seo.ts
export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you work with businesses directly, or only with agencies?",
    answer: "Both. I build WordPress websites for businesses of all sizes and also work as a behind-the-scenes developer for agencies who need someone reliable to handle their client projects. Either way, the process is the same — straightforward communication and clean work delivered on time.",
  },
  {
    id: 2,
    question: "How does white label WordPress development work?",
    answer: "You bring the client, I handle the build — quietly, under your brand. I join whatever communication channel you use (Slack, WhatsApp, email), deliver the work as if I'm part of your team, and your client never knows I was involved. Everything stays fully confidential.",
  },
  {
    id: 3,
    question: "Do you use Elementor or build custom WordPress themes?",
    answer: "Both, depending on what the project actually needs. For most builds I use Elementor Pro because clients find it easy to manage themselves after handover. For projects that need something leaner and faster, I build with Gutenberg or a lightweight custom theme. I'll tell you which approach makes more sense once I understand the project.",
  },
  {
    id: 4,
    question: "How much does a WordPress website cost?",
    answer: "It depends on what you need. A simple business website is very different from a full WooCommerce store or a custom-designed build. I give flat-rate quotes once I know the scope — no hourly billing, no surprise charges at the end. Just tell me what you need and I'll send a clear number.",
  },
  {
    id: 5,
    question: "How long does it take to build a WordPress website?",
    answer: "Most standard WordPress websites take around 1–2 weeks. Larger builds, WooCommerce stores, or anything with a lot of custom design work may take a bit longer. I'll give you a realistic timeline before starting and stick to it — deadlines matter to me.",
  },
  {
    id: 6,
    question: "What if something needs fixing after the site goes live?",
    answer: "I stay available after launch. If something breaks, a plugin causes a conflict, the site slows down, or you just need a small change — reach out and I'll get it sorted. I don't hand over a site and disappear.",
  },
  {
    id: 7,
    question: "Do you sign NDAs or non-disclosure agreements?",
    answer: "Yes, always happy to. Most agencies I work with require an NDA before sharing any project details, and I sign without hesitation. Confidentiality isn't just a policy for me — it's how I've built trust with every agency I work with long-term.",
  },
  {
    id: 8,
    question: "Will you ever contact my client directly?",
    answer: "Never, unless you explicitly want me to. In white-label work, I stay completely behind the scenes — no direct contact, no branding with my name, no risk of your client finding out I was involved. Your agency stays the single point of contact, always.",
  },
  {
    id: 9,
    question: "How do we communicate if we're in different time zones?",
    answer: "I keep flexible hours specifically to overlap with agencies and clients across the US, UK, Canada, UAE, Europe, and Australia. We'll agree on a communication window that works for both of us, and I respond fast even outside it — usually within a few hours.",
  },
  {
    id: 10,
    question: "Do you offer ongoing maintenance after the site is live?",
    answer: "Yes. Many agencies and businesses keep me on for ongoing updates, small tweaks, and plugin maintenance after launch. We can set up a simple monthly retainer or just handle things as they come up — whatever fits your workflow.",
  },
];
