/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// A compact logo grid: no per-plugin headings or outbound links, so the page's
// headings and links stay focused on my own services and projects
const plugins = [
  { name: "Yoast SEO", iconUrl: "/assets/images/plugins/yoast-seo.webp" },
  { name: "Rank Math SEO", iconUrl: "/assets/images/plugins/rank-math-seo.webp" },
  { name: "Elementor Pro", iconUrl: "/assets/images/plugins/elementor-pro.webp" },
  { name: "Advanced Custom Fields", iconUrl: "/assets/images/plugins/advanced-custom-fields.svg" },
  { name: "WooCommerce", iconUrl: "/assets/images/plugins/woocommerce.webp" },
  { name: "WooCommerce Bookings", iconUrl: "/assets/images/plugins/woocommerce-bookings.webp" },
  { name: "WooCommerce PayPal Payments", iconUrl: "/assets/images/plugins/woocommerce-paypal-payments.webp" },
  { name: "YITH", iconUrl: "/assets/images/plugins/yith.webp" },
  { name: "Gravity Forms", iconUrl: "/assets/images/plugins/gravity-forms.webp" },
  { name: "WPForms", iconUrl: "/assets/images/plugins/wpforms.webp" },
  { name: "LiteSpeed Cache", iconUrl: "/assets/images/plugins/litespeed-cache.webp" },
  { name: "Jetpack", iconUrl: "/assets/images/plugins/jetpack.svg" },
  { name: "Site Kit by Google", iconUrl: "/assets/images/plugins/site-kit-by-google.webp" },
  { name: "All-in-One WP Migration", iconUrl: "/assets/images/plugins/all-in-one-wp-migration.webp" },
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
            My WordPress stack
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mt-2">
            The plugins I reach for on most WordPress builds — tools I know inside out.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {plugins.map((plugin) => (
            <li
              key={plugin.name}
              className="flex flex-col items-center gap-3 rounded-[16px] bg-white border border-[#e5e7eb] px-3 py-5 text-center card-shadow"
            >
              <img
                src={plugin.iconUrl}
                alt={`${plugin.name} logo`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-cover bg-white shadow-sm border border-gray-100"
                loading="lazy"
                decoding="async"
              />
              <span className="font-sans text-[13px] sm:text-[14px] font-semibold leading-tight text-primary-text">
                {plugin.name}
              </span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
