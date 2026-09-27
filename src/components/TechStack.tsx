/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// A compact logo grid: no per-item headings or outbound links, so the page's
// headings and links stay focused on my own services and projects.
// `logo` items are transparent brand marks shown with padding; the rest are square app icons.
const stack = [
  // Code
  { name: "HTML5", iconUrl: "/assets/images/stack/html5.svg", logo: true },
  { name: "CSS3", iconUrl: "/assets/images/stack/css3.svg", logo: true },
  { name: "JavaScript", iconUrl: "/assets/images/stack/javascript.svg", logo: true },
  { name: "React", iconUrl: "/assets/images/stack/react.svg", logo: true },
  { name: "Tailwind CSS", iconUrl: "/assets/images/stack/tailwindcss.svg", logo: true },
  { name: "PHP", iconUrl: "/assets/images/stack/php.svg", logo: true },
  { name: "MySQL", iconUrl: "/assets/images/stack/mysql.svg", logo: true },
  // Platforms
  { name: "WordPress", iconUrl: "/assets/images/stack/wordpress.svg", logo: true },
  { name: "Shopify", iconUrl: "/assets/images/stack/shopify.webp", logo: true },
  { name: "WooCommerce", iconUrl: "/assets/images/plugins/woocommerce.webp" },
  { name: "Elementor Pro", iconUrl: "/assets/images/plugins/elementor-pro.webp" },
  { name: "Advanced Custom Fields", iconUrl: "/assets/images/plugins/advanced-custom-fields.svg" },
  { name: "Yoast SEO", iconUrl: "/assets/images/plugins/yoast-seo.webp" },
  { name: "Rank Math SEO", iconUrl: "/assets/images/plugins/rank-math-seo.webp" },
  // Tools
  { name: "Figma", iconUrl: "/assets/images/stack/figma.svg", logo: true },
  { name: "GitHub", iconUrl: "/assets/images/stack/github.svg", logo: true },
  { name: "Vite", iconUrl: "/assets/images/stack/vitejs.svg", logo: true },
  { name: "Vercel", iconUrl: "/assets/images/stack/vercel.svg", logo: true },
  { name: "LiteSpeed Cache", iconUrl: "/assets/images/plugins/litespeed-cache.webp" },
  { name: "Site Kit by Google", iconUrl: "/assets/images/plugins/site-kit-by-google.webp" },
  { name: "Gravity Forms", iconUrl: "/assets/images/plugins/gravity-forms.webp" },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-[#F6F7F7] py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-left max-w-3xl mb-10">
          <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-2 font-normal tracking-normal text-primary-text">
            My work stack
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mt-2">
            The languages, platforms and tools I build with — from hand-coded React and PHP to WordPress, Shopify and other CMS platforms.
          </p>
        </div>

        <ul className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 sm:gap-4">
          {stack.map((item) => (
            <li
              key={item.name}
              // Icons only: the name stays in the alt text (search engines, screen readers) and shows on hover
              title={item.name}
              className="flex items-center justify-center rounded-[16px] bg-white border border-[#e5e7eb] p-3 sm:p-5 card-shadow"
            >
              <img
                src={item.iconUrl}
                alt={`${item.name} logo`}
                width={64}
                height={64}
                className={`h-11 w-11 sm:h-16 sm:w-16 rounded-xl bg-white shadow-sm border border-gray-100 ${
                  item.logo ? "object-contain p-2" : "object-cover"
                }`}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
