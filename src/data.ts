/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, ProcessStep, Benefit, Testimonial, FAQItem } from "./types";

// Titles target the main search terms (custom website development, WordPress
// development services, Shopify website development, web application development)
export const servicesData: ServiceItem[] = [
  {
    id: "custom-dev",
    title: "Custom Website Development",
    description: "Hand-coded websites and landing pages built from scratch — fast, responsive and tailored to your brand, with no page-builder bloat. Ideal when an off-the-shelf theme won't do.",
    iconName: "Code"
  },
  {
    id: "wp-dev",
    title: "WordPress Website Development",
    description: "Business sites, blogs and multi-page builds in WordPress with Elementor, Gutenberg or a custom theme — clean code, solid structure, and easy for you to edit after handover.",
    iconName: "Globe"
  },
  {
    id: "shopify",
    title: "Shopify Store Development",
    description: "Shopify stores set up and designed to sell — product structure, theme customisation, apps and payments. Prefer WordPress? I build WooCommerce stores too.",
    iconName: "ShoppingBag"
  },
  {
    id: "plugin-dev",
    title: "Custom WordPress Plugin Development",
    description: "When no existing plugin fits, I write one: custom post types, booking logic, API integrations and admin tools, built to WordPress coding standards.",
    iconName: "Puzzle"
  },
  {
    id: "theme-dev",
    title: "Custom Theme Development",
    description: "Got a design in Figma or just an idea in your head? I'll turn it into a lightweight custom WordPress or Shopify theme that matches it pixel by pixel.",
    iconName: "Palette"
  },
  {
    id: "web-apps",
    title: "Web Apps & LMS Development",
    description: "Custom web applications and software for the browser — learning management systems (LMS) with courses, quizzes and student dashboards, plus booking and membership portals.",
    iconName: "GraduationCap"
  },
  {
    id: "seo-speed",
    title: "SEO & Speed Optimization",
    description: "Technical SEO that helps you rank: proper heading structure, schema markup, clean URLs, fast Core Web Vitals and a solid Yoast or Rank Math setup.",
    iconName: "Search"
  },
  {
    id: "white-label",
    title: "White Label Development for Agencies",
    description: "I work quietly in the background on your client projects with full confidentiality. Your brand stays front and centre — nobody will ever know I was there.",
    iconName: "ShieldCheck"
  }
];

// Newest projects first: the carousel shows items in this order.
// Titles and categories are the real business names and niches; together they are the image alt text.
export const portfolioData: PortfolioItem[] = [
  {
    id: "jazba-host",
    title: "Jazba Host",
    category: "Web Design & Hosting Company, UK",
    description: "Website for a UK web design and hosting company, presenting fixed-price website builds, managed hosting plans and a simple quote request flow.",
    image: "/assets/images/portfolio/jazba-host-website.webp",
    tags: ["React", "Pricing Pages", "Quote Requests"],
    demoUrl: "https://www.jazbahost.com/"
  },
  {
    id: "jazba-studio",
    title: "Jazba Studio",
    category: "Recording Studio, Lahore",
    description: "Studio website for a recording, live-tracking and editing facility in Lahore, with room showcases, film equipment rental and studio booking.",
    image: "/assets/images/portfolio/jazba-studio-website.webp",
    tags: ["WordPress", "Elementor", "Studio Booking"],
    demoUrl: "https://jazba.studio/"
  },
  {
    id: "ga-healthcare-training",
    title: "GA Healthcare Training & Consulting",
    category: "CPR & BLS Training Centre, Georgia",
    description: "Training website for an American Heart Association course provider in Lilburn, Georgia, covering BLS, ACLS, PALS and Heartsaver classes with a class calendar and program registration.",
    image: "/assets/images/portfolio/ga-healthcare-training-website.webp",
    tags: ["WordPress", "Course Calendar", "LMS Login"],
    demoUrl: "https://gahealthcaretraining.com/"
  },
  {
    id: "jazba-entertainment",
    title: "Jazba Entertainment",
    category: "Music, Film & Live Events Company",
    description: "Brand website for a music, film and live events company, presenting studio sessions, artist management, events and ticketing.",
    image: "/assets/images/portfolio/jazba-entertainment-website.webp",
    tags: ["WordPress", "Events", "Artist Booking"],
    demoUrl: "https://jazbaentertainment.com/"
  },
  {
    id: "jazba-tickets",
    title: "Jazba Tickets",
    category: "Event Ticketing Platform",
    description: "Pre-launch website for a ticketing platform covering concerts, theatre, comedy, sport and festivals, with an email waitlist and artist booking.",
    image: "/assets/images/portfolio/jazba-tickets-website.webp",
    tags: ["React", "Waitlist", "Launch Page"],
    demoUrl: "https://jazbatickets.com/"
  },
  {
    id: "abc-crane-hire",
    title: "ABC Crane Hire",
    category: "Crane Hire Company, Perth",
    description: "Service website for a Perth crane hire company covering Franna, Tom Thumb, Hiab and mobile cranes, with location pages and contact details one tap away.",
    image: "/assets/images/portfolio/abc-crane-hire-website.webp",
    tags: ["WordPress", "Elementor", "Rank Math SEO"],
    demoUrl: "https://abccranehire.com.au/"
  },
  {
    id: "prime-strategies-group",
    title: "Prime Strategies Group",
    category: "Business Management Consultancy, Perth",
    description: "Website for a Perth and Mandurah business management consultancy that helps WA small business owners, with advisory services, group coaching and free consultation booking.",
    image: "/assets/images/portfolio/prime-strategies-group-website.webp",
    tags: ["WordPress", "Lead Generation", "Local SEO"],
    demoUrl: "https://psgwa.com.au/"
  },
  {
    id: "brightway-consult-solutions",
    title: "Brightway Consult & HR Recruiting Solutions",
    category: "HR & Business Consulting Firm",
    description: "Corporate website for a consulting and HR recruiting firm offering recruitment, workforce development, education, technology and eCommerce services.",
    image: "/assets/images/portfolio/brightway-consult-solutions-website.webp",
    tags: ["WordPress", "Elementor", "Quote Requests"],
    demoUrl: "https://brightwayconsultsolutions.com/"
  },
  {
    id: "brightway-group",
    title: "Brightway Group",
    category: "Group of Companies",
    description: "Parent-brand website for a group of companies spanning consulting, HR, education, technology, publishing and international commerce.",
    image: "/assets/images/portfolio/brightway-group-website.webp",
    tags: ["WordPress", "Elementor", "Multi-Brand"],
    demoUrl: "https://brightwaygroup.org/"
  },
  {
    id: "dr-ransford-addo",
    title: "Dr. Ransford M. K. Addo",
    category: "Author & Organizational Development Practitioner",
    description: "Personal brand website for an author and organizational development practitioner, featuring his books, events and speaking enquiries.",
    image: "/assets/images/portfolio/dr-ransford-addo-website.webp",
    tags: ["WordPress", "Elementor", "Book Showcase"],
    demoUrl: "https://ransfordaddo.com/"
  },
  {
    id: "fijian-real-estate",
    title: "Fijian Real Estate",
    category: "Property Marketplace, Fiji",
    description: "Property marketplace for buying and selling real estate in Fiji, with international listings, property search and an English/Chinese language switcher.",
    image: "/assets/images/portfolio/fijian-real-estate-website.webp",
    tags: ["WordPress", "Property Listings", "Multilingual"],
    demoUrl: "https://fijianrealestate.com/"
  },
  {
    id: "myrent-fiji",
    title: "myRent Fiji",
    category: "Rental Property Platform, Fiji",
    description: "Rental platform for Fiji landlords and tenants with property search, tenant checks, digital signing and rent payment tracking.",
    image: "/assets/images/portfolio/myrent-fiji-website.webp",
    tags: ["WordPress", "Property Search", "Landlord Tools"],
    demoUrl: "https://myrentfiji.com/"
  },
  {
    id: "true-vine-digital-marketing",
    title: "True Vine Digital Marketing",
    category: "Digital Marketing Agency, Perth",
    description: "Website for a Perth digital marketing agency offering web design, SEO, local search, digital advertising, AI chatbots and lead generation.",
    image: "/assets/images/portfolio/true-vine-digital-marketing-website.webp",
    tags: ["WordPress", "WooCommerce", "SEO Services"],
    demoUrl: "https://tvdm.au/"
  },
  {
    id: "project-1",
    title: "Arch Dermatology Institute",
    category: "Dermatology Clinic, St. Louis",
    description: "Website for a St. Louis dermatology practice focused on skin cancer screening, with pages for medical and cosmetic dermatology and clinic locations.",
    image: "/assets/images/portfolio/arch-dermatology-institute-website.webp",
    tags: ["WordPress", "Elementor Pro", "Medical Services"],
    demoUrl: "https://archdermatology.com/"
  },
  {
    id: "project-2",
    title: "Flechtarbeiten Peter",
    category: "Chair Caning Workshop, Germany",
    description: "Website for a family chair-caning workshop that restores woven seats by hand, including Thonet and Tecta classics and rush seating.",
    image: "/assets/images/portfolio/flechtarbeiten-peter-website.webp",
    tags: ["WordPress", "Service Pages", "German Language"],
    demoUrl: "https://flechtarbeiten.de/"
  },
  {
    id: "project-3",
    title: "Goepfert Express",
    category: "Courier & Express Logistics, Germany",
    description: "Website for a courier and express logistics company delivering across Germany and Europe, with service pages and a quote request form.",
    image: "/assets/images/portfolio/goepfert-express-website.webp",
    tags: ["Courier Services", "Quote Form", "German Language"],
    demoUrl: "https://goepfert-express.solutions-vogelfrei.de/"
  },
  {
    id: "project-4",
    title: "Zero Trip Innovations",
    category: "Directional Drilling Technology",
    description: "Product website for the Zero-Trip Wedge, a directional drilling tool that enables fast sidetrack drilling while reducing time, cost and risk.",
    image: "/assets/images/portfolio/zero-trip-innovations-website.webp",
    tags: ["WordPress", "Product Website", "Industrial"],
    demoUrl: "https://zero-trip.com/"
  },
  {
    id: "project-5",
    title: "Chaos-Killer Berlin",
    category: "Junk Removal & Clearance, Berlin",
    description: "Website for a Berlin company offering junk removal, house clearances, waste disposal and skip hire.",
    image: "/assets/images/portfolio/chaos-killer-berlin-website.webp",
    tags: ["WordPress", "Local Services", "German Language"],
    demoUrl: "https://die-chaoskiller-berlin.de/"
  },
  {
    id: "project-6",
    title: "CAISD",
    category: "AI & Sustainable Development Centre, Africa",
    description: "Website for the Centre for Artificial Intelligence and Sustainable Development, presenting its research, programmes and partnerships across Africa.",
    image: "/assets/images/portfolio/caisd-website.webp",
    tags: ["Research Centre", "Education", "Responsive Design"],
    demoUrl: "https://caisd.africa/"
  },
  {
    id: "project-8",
    title: "CSFM Cleaning",
    category: "Home Cleaning Services, Birmingham",
    description: "Website for a Birmingham cleaning company offering affordable, reliable home cleaning, with service pages and quick quote requests.",
    image: "/assets/images/portfolio/csfm-cleaning-website.webp",
    tags: ["WordPress", "Quote Requests", "Local Services"],
    demoUrl: "https://csfmcleaning.com/"
  },
  {
    id: "project-9",
    title: "4TS T-Shirt Studio",
    category: "Custom T-Shirt Store",
    description: "Online store for custom-printed T-shirts, with product showcases, free shipping and rush delivery options.",
    image: "/assets/images/portfolio/4ts-t-shirt-studio-website.webp",
    tags: ["WordPress", "eCommerce", "Product Showcase"],
    demoUrl: "https://www.4tsstudio.org/"
  },
  {
    id: "project-10",
    title: "IUVEDA Life",
    category: "Ayurveda & Vedic Wellness",
    description: "Wellness website sharing Ayurveda and Vedic guides on dosha balancing and daily rituals, inspired by Sri Vrindavan Dham.",
    image: "/assets/images/portfolio/iuveda-life-website.webp",
    tags: ["WordPress", "Content Library", "Wellness"],
    demoUrl: "https://iuvedalife.com/"
  },
  {
    id: "project-11",
    title: "Privé LUX Advisory Group",
    category: "Wealth Advisory Firm",
    description: "Website for a wealth advisory group helping individuals and families grow and protect their wealth, with consultation booking.",
    image: "/assets/images/portfolio/prive-lux-advisory-group-website.webp",
    tags: ["WordPress", "Financial Services", "Lead Capture"],
    demoUrl: "https://priveluxadvisory.com/"
  },
  {
    id: "project-12",
    title: "Infinite Calculators",
    category: "Online Calculator Website",
    description: "A collection of free online calculators that give fast, accurate results right in the browser.",
    image: "/assets/images/portfolio/infinite-calculators-website.webp",
    tags: ["Calculators", "JavaScript", "Responsive Design"],
    demoUrl: "https://infinitecalculators.com/"
  },
  {
    id: "project-13",
    title: "Olimotion Ireland",
    category: "Hydraulic Cylinder Manufacturer, Ireland",
    description: "Website for an Irish engineering company that manufactures large hydraulic cylinders and provides engineering services.",
    image: "/assets/images/portfolio/olimotion-ireland-website.webp",
    tags: ["Industrial", "Engineering", "Lead Generation"],
    demoUrl: "https://olimotion.com/"
  },
  {
    id: "project-14",
    title: "Istanbul Restaurant Birmingham",
    category: "Turkish Restaurant, Birmingham",
    description: "Website for a Turkish restaurant in Birmingham with an easy-to-browse menu and table reservations.",
    image: "/assets/images/portfolio/istanbul-restaurant-birmingham-website.webp",
    tags: ["WordPress", "Restaurant Menu", "Reservations"],
    demoUrl: "https://istanbulrestaurantbirmingham.com/"
  },
  {
    id: "project-15",
    title: "Red X Pink Management",
    category: "Creator Management Agency",
    description: "Website for a talent management agency that helps online creators grow their social media reach and income.",
    image: "/assets/images/portfolio/red-x-pink-management-website.webp",
    tags: ["WordPress", "Agency Website", "Lead Generation"],
    demoUrl: "https://redxpink.com/"
  },
  {
    id: "project-16",
    title: "SMB Electrical",
    category: "Electricians, Toronto",
    description: "Website for a Toronto electrical contractor offering residential and commercial installations, repairs and upgrades.",
    image: "/assets/images/portfolio/smb-electrical-website.webp",
    tags: ["WordPress", "Local Services", "Quote Requests"],
    demoUrl: "https://smbelectrical.ca/"
  },
  {
    id: "project-17",
    title: "Slotenspecialist Direct",
    category: "Locksmith, Netherlands",
    description: "Website for a Dutch locksmith service with emergency call-outs and a prominent tap-to-call number on mobile.",
    image: "/assets/images/portfolio/slotenspecialist-direct-website.webp",
    tags: ["WordPress", "Emergency Services", "Click-to-Call"],
    demoUrl: "https://www.slotenspecialistdirect.nl/"
  },
  {
    id: "project-18",
    title: "ACE IMPACT LLC",
    category: "Training & Personal Development",
    description: "Website for a training company offering workshops, events and personal development programs.",
    image: "/assets/images/portfolio/ace-impact-website.webp",
    tags: ["WordPress", "Events", "Training"],
    demoUrl: "https://aceimpactllc.com/"
  },
  {
    id: "project-19",
    title: "Casa Suerte",
    category: "Holiday Apartment, Costa Blanca",
    description: "Booking website for a luxury holiday apartment in San Miguel de Salinas on Spain's Costa Blanca.",
    image: "/assets/images/portfolio/casa-suerte-website.webp",
    tags: ["WordPress", "Holiday Rental", "Dutch Language"],
    demoUrl: "https://www.casa-suerte.nl/"
  },
  {
    id: "project-20",
    title: "Wise Origin",
    category: "Training Provider, UK",
    description: "Website for a UK training provider that helps people build careers through courses and programs.",
    image: "/assets/images/portfolio/wise-origin-website.webp",
    tags: ["WordPress", "Education", "Course Pages"],
    demoUrl: "https://wiseorigin.co.uk/"
  },
  {
    id: "project-21",
    title: "DJ Schilderwerken",
    category: "Painting Contractor, Netherlands",
    description: "Website for a Dutch painting company offering professional interior and exterior painting.",
    image: "/assets/images/portfolio/dj-schilderwerken-website.webp",
    tags: ["WordPress", "Local Services", "Dutch Language"],
    demoUrl: "https://www.djschilderwerken.nl/"
  },
  {
    id: "project-22",
    title: "Danis Umzüge",
    category: "Moving Company, Braunschweig",
    description: "Website for a moving company in Braunschweig, with service pages and a quote request form.",
    image: "/assets/images/portfolio/danis-umzuege-website.webp",
    tags: ["WordPress", "Quote Form", "German Language"],
    demoUrl: "https://www.danis-umzuege.de/"
  },
  {
    id: "project-23",
    title: "Victory Umzüge",
    category: "Moving Company, Frankfurt",
    description: "Website for a Frankfurt moving company with fast online quotes for home and office moves.",
    image: "/assets/images/portfolio/victory-umzuege-website.webp",
    tags: ["WordPress", "Online Quotes", "German Language"],
    demoUrl: "https://victory-umzuege.de/"
  },
  {
    id: "project-24",
    title: "Niyum Trading",
    category: "Trading Company, Cambodia",
    description: "Corporate website for a Cambodian trading company, presenting its products, services and partners.",
    image: "/assets/images/portfolio/niyum-trading-website.webp",
    tags: ["WordPress", "Corporate Website", "Product Pages"],
    demoUrl: "https://www.niyumtrading.com/"
  },
  {
    id: "project-25",
    title: "Vanguard Strength & Fitness",
    category: "Personal Training & Fitness",
    description: "Website for a strength and fitness coach offering personalised training programs and appointment booking.",
    image: "/assets/images/portfolio/vanguard-strength-fitness-website.webp",
    tags: ["WordPress", "Appointments", "Fitness"],
    demoUrl: "https://vanguardstrengthfitness.com/"
  },
  {
    id: "project-26",
    title: "Zion Coach Services",
    category: "Bus & Coach Hire, Australia",
    description: "Website for an Australian bus and coach hire company offering safe, reliable group transport with quick booking enquiries.",
    image: "/assets/images/portfolio/zion-coach-services-website.webp",
    tags: ["WordPress", "Booking Enquiries", "Transport"],
    demoUrl: "https://zioncoachservices.com.au/"
  },
  {
    id: "project-27",
    title: "Quincy Bareebe for Congress",
    category: "Political Campaign Website",
    description: "Campaign website for Quincy Bareebe, a Democratic candidate for Maryland's 5th Congressional District.",
    image: "/assets/images/portfolio/quincy-bareebe-for-congress-website.webp",
    tags: ["WordPress", "Campaign Website", "Video Hero"],
    demoUrl: "https://quincyforcongress.com/"
  },
  {
    id: "project-28",
    title: "Thomwerk",
    category: "Technical Staffing Agency, Eindhoven",
    description: "Website for a technical staffing agency in Eindhoven with job listings for skilled trades.",
    image: "/assets/images/portfolio/thomwerk-website.webp",
    tags: ["WordPress", "Job Listings", "Dutch Language"],
    demoUrl: "https://thomwerk.nl/"
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
    question: "Do you only work with WordPress?",
    answer: "No. WordPress is a big part of what I do, but I also build Shopify stores, custom-coded websites and web apps, learning management systems (LMS), and custom WordPress plugins and themes. I'll recommend the platform that fits your project instead of forcing everything into one tool.",
  },
  {
    id: 2,
    question: "Do you work with businesses directly, or only with agencies?",
    answer: "Both. I build websites for businesses of all sizes and also work as a behind-the-scenes developer for agencies who need someone reliable to handle their client projects. Either way, the process is the same — straightforward communication and clean work delivered on time.",
  },
  {
    id: 3,
    question: "How does white label web development work?",
    answer: "You bring the client, I handle the build — quietly, under your brand. I join whatever communication channel you use (Slack, WhatsApp, email), deliver the work as if I'm part of your team, and your client never knows I was involved. Everything stays fully confidential.",
  },
  {
    id: 4,
    question: "Do you use Elementor or build custom WordPress themes?",
    answer: "Both, depending on what the project actually needs. For most builds I use Elementor Pro because clients find it easy to manage themselves after handover. For projects that need something leaner and faster, I build with Gutenberg or a lightweight custom theme. I'll tell you which approach makes more sense once I understand the project.",
  },
  {
    id: 5,
    question: "How much does a website cost?",
    answer: "It depends on what you need. A simple business website is very different from a Shopify or WooCommerce store, a custom plugin or a web app like an LMS. I give flat-rate quotes once I know the scope — no hourly billing, no surprise charges at the end. Just tell me what you need and I'll send a clear number.",
  },
  {
    id: 6,
    question: "How long does it take to build a website?",
    answer: "Most standard WordPress and Shopify websites take around 1–2 weeks. Larger builds, online stores, custom plugins and web apps like an LMS take longer. I'll give you a realistic timeline before starting and stick to it — deadlines matter to me.",
  },
  {
    id: 7,
    question: "What if something needs fixing after the site goes live?",
    answer: "I stay available after launch. If something breaks, a plugin causes a conflict, the site slows down, or you just need a small change — reach out and I'll get it sorted. I don't hand over a site and disappear.",
  },
  {
    id: 8,
    question: "Do you sign NDAs or non-disclosure agreements?",
    answer: "Yes, always happy to. Most agencies I work with require an NDA before sharing any project details, and I sign without hesitation. Confidentiality isn't just a policy for me — it's how I've built trust with every agency I work with long-term.",
  },
  {
    id: 9,
    question: "Will you ever contact my client directly?",
    answer: "Never, unless you explicitly want me to. In white-label work, I stay completely behind the scenes — no direct contact, no branding with my name, no risk of your client finding out I was involved. Your agency stays the single point of contact, always.",
  },
  {
    id: 10,
    question: "How do we communicate if we're in different time zones?",
    answer: "I keep flexible hours specifically to overlap with agencies and clients across the US, UK, Canada, UAE, Europe, and Australia. We'll agree on a communication window that works for both of us, and I respond fast even outside it — usually within a few hours.",
  },
  {
    id: 11,
    question: "Do you offer ongoing maintenance after the site is live?",
    answer: "Yes. Many agencies and businesses keep me on for ongoing updates, small tweaks, and plugin maintenance after launch. We can set up a simple monthly retainer or just handle things as they come up — whatever fits your workflow.",
  },
];
