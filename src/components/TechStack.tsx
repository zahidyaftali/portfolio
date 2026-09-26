/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface PluginItem {
  name: string;
  author: string;
  description: string;
  iconUrl: string;
  price: string;
  rating?: number;
  pluginUrl: string;
}

export default function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const plugins: PluginItem[] = [
    {
      name: "Yoast SEO Premium",
      author: "Team Yoast",
      description: "My go-to for on-page SEO. Handles meta titles, sitemaps, and readability checks on most WordPress projects.",
      iconUrl: "/assets/images/plugins/yoast-seo.webp",
      price: "US$10.00 monthly",
      rating: 4.8,
      pluginUrl: "https://wordpress.org/plugins/wordpress-seo/",
    },
    {
      name: "Elementor Pro",
      author: "Elementor",
      description: "The page builder I use for most custom layouts. Fast to build with and easy for clients to manage themselves.",
      iconUrl: "/assets/images/plugins/elementor-pro.webp",
      price: "US$9.90 monthly",
      rating: 4.7,
      pluginUrl: "https://wordpress.org/plugins/elementor/",
    },
    {
      name: "Advanced Custom Fields",
      author: "WP Engine",
      description: "My go-to for custom fields and flexible content blocks. Lets clients edit their own layouts without touching code.",
      iconUrl: "/assets/images/plugins/advanced-custom-fields.svg",
      price: "Free",
      rating: 4.8,
      pluginUrl: "https://wordpress.org/plugins/advanced-custom-fields/",
    },
    {
      name: "Gravity Forms",
      author: "Gravity Forms",
      description: "My first choice for complex forms. Handles conditional logic, file uploads, and third-party integrations cleanly.",
      iconUrl: "/assets/images/plugins/gravity-forms.webp",
      price: "US$12.00 monthly",
      rating: 4.9,
      pluginUrl: "https://www.gravityforms.com/",
    },
    {
      name: "WooCommerce Bookings",
      author: "WooCommerce",
      description: "Adds appointment and booking features to WooCommerce. Works well for service-based businesses and rentals.",
      iconUrl: "/assets/images/plugins/woocommerce-bookings.webp",
      price: "US$21.00 monthly",
      rating: 4.6,
      pluginUrl: "https://woocommerce.com/products/woocommerce-bookings/",
    },
    {
      name: "WooCommerce PayPal Payments",
      author: "WooCommerce",
      description: "Adds PayPal and card payments to WooCommerce stores. Easy to set up and familiar to most online shoppers.",
      iconUrl: "/assets/images/plugins/woocommerce-paypal-payments.webp",
      price: "Free",
      rating: 4.5,
      pluginUrl: "https://wordpress.org/plugins/woocommerce-paypal-payments/",
    },
    {
      name: "Rank Math SEO",
      author: "Rank Math",
      description: "A solid SEO plugin with strong schema support. I use it as an alternative to Yoast on many WordPress builds.",
      iconUrl: "/assets/images/plugins/rank-math-seo.webp",
      price: "US$5.90 monthly",
      rating: 4.9,
      pluginUrl: "https://wordpress.org/plugins/seo-by-rank-math/",
    },
    {
      name: "WooCommerce",
      author: "Automattic",
      description: "The plugin behind most WordPress online stores. I use it for everything from small shops to larger builds.",
      iconUrl: "/assets/images/plugins/woocommerce.webp",
      price: "Free",
      rating: 4.8,
      pluginUrl: "https://wordpress.org/plugins/woocommerce/",
    },
    {
      name: "YITH Plugins",
      author: "YITH",
      description: "Useful WooCommerce add-ons for wishlists, quick view, and extra store features that clients often ask for.",
      iconUrl: "/assets/images/plugins/yith.webp",
      price: "US$8.00 monthly",
      rating: 4.4,
      pluginUrl: "https://yithemes.com/",
    },
    {
      name: "WPForms",
      author: "WPForms",
      description: "A simple drag-and-drop form builder. I use it for contact forms, quote requests, and basic lead capture.",
      iconUrl: "/assets/images/plugins/wpforms.webp",
      price: "US$4.90 monthly",
      rating: 4.8,
      pluginUrl: "https://wordpress.org/plugins/wpforms-lite/",
    },
    {
      name: "LiteSpeed Cache",
      author: "LiteSpeed Technologies",
      description: "My main caching plugin. Handles image compression, lazy loading, and server-level speed improvements well.",
      iconUrl: "/assets/images/plugins/litespeed-cache.webp",
      price: "Free",
      rating: 4.9,
      pluginUrl: "https://wordpress.org/plugins/litespeed-cache/",
    },
    {
      name: "Jetpack",
      author: "Automattic",
      description: "Covers backups, security scans, and basic performance features on most WordPress hosting setups.",
      iconUrl: "/assets/images/plugins/jetpack.svg",
      price: "US$15.00 monthly",
      rating: 4.3,
      pluginUrl: "https://wordpress.org/plugins/jetpack/",
    },
    {
      name: "Site Kit by Google",
      author: "Google",
      description: "Connects WordPress to Google Search Console and Analytics for easy tracking and performance reporting.",
      iconUrl: "/assets/images/plugins/site-kit-by-google.webp",
      price: "Free",
      rating: 4.7,
      pluginUrl: "https://wordpress.org/plugins/google-site-kit/",
    },
    {
      name: "All-in-One WP Migration",
      author: "ServMask",
      description: "The easiest way to move a WordPress site. I use it for migrations, staging transfers, and full site backups.",
      iconUrl: "/assets/images/plugins/all-in-one-wp-migration.webp",
      price: "Free",
      rating: 4.8,
      pluginUrl: "https://wordpress.org/plugins/all-in-one-wp-migration/",
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -containerWidth : containerWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="tech-stack" 
      className="bg-[#F6F7F7] py-20 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block exactly matching WordPress.com Must-have layout */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div className="text-left">
            <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-2 font-normal tracking-normal text-primary-text">
              WordPress plugins I use most
            </h2>
            <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mt-2">
              These are the WordPress plugins I reach for on most builds — tools I know inside out.
            </p>
          </div>

          {/* Action and carousel controllers */}
          <div className="flex items-center gap-6 self-start sm:self-auto">

            <div className="flex items-center gap-2">
              {/* Left Arrow Button */}
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-[#3F58E0] hover:border-white hover:text-white hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 stroke-[2]" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-[#3F58E0] hover:border-white hover:text-white hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Row */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-1 select-none scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {plugins.map((plugin, idx) => (
            <div
              key={plugin.name}
              id={`plugin-card-${idx}`}
              className="w-[285px] xs:w-[310px] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 bg-white rounded-[16px] p-6 sm:p-7 border border-[#e5e7eb] hover:border-primary-blue/60 hover:bg-[#fafbfe] card-shadow card-shadow-hover transition-all duration-300 snap-start flex flex-col"
            >
              <div>
                
                {/* Logo and Meta row */}
                <div className="flex items-start gap-4">
                  {/* Decorative: the plugin name is the heading right next to it */}
                  <img
                    src={plugin.iconUrl}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl object-cover bg-white shadow-sm border border-gray-100 shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-bold text-gray-900 text-[17px] sm:text-[18px] leading-tight">
                      <a 
                        href={plugin.pluginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-blue transition-colors"
                      >
                        {plugin.name}
                      </a>
                    </h3>
                    <p className="text-[11px] sm:text-[11px] text-[#72777d] mt-1 font-sans leading-tight">
                      by{" "}
                      <a 
                        href={plugin.pluginUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3F58E0] hover:underline font-medium"
                      >
                        {plugin.author}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-[13.5px] sm:text-[14px] leading-relaxed text-gray-600 mt-5 line-clamp-3">
                  {plugin.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
