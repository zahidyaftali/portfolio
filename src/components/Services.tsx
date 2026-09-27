/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { servicesData } from "../data";
import {
  Code,
  Globe,
  ShieldCheck,
  ShoppingBag,
  Puzzle,
  Palette,
  GraduationCap,
  Search,
  LucideIcon
} from "lucide-react";

// Lucide icon dictionary lookup for safe dynamic rendering
const iconMap: Record<string, LucideIcon> = {
  Code: Code,
  Globe: Globe,
  ShieldCheck: ShieldCheck,
  ShoppingBag: ShoppingBag,
  Puzzle: Puzzle,
  Palette: Palette,
  GraduationCap: GraduationCap,
  Search: Search,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-10">
      {/* Background Graphic: WordPress Blue Globe aligned to the bottom right end of the screen */}
      <div className="absolute right-0 bottom-0 w-[500px] md:w-[800px] lg:w-[1100px] xl:w-[1300px] opacity-100 pointer-events-none select-none z-0 translate-x-1/3 translate-y-1/4">
        <img
          src="/assets/images/wordpress-globe.svg"
          alt=""
          width={1155}
          height={1379}
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-5 font-normal tracking-normal text-primary-text">
            Web development services
          </h2>
          <div className="h-1 w-12 bg-primary-blue mx-auto mb-5 rounded"></div>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text">
            Custom code, WordPress, Shopify or another CMS — from business websites and online stores to custom plugins, themes, LMS platforms and SEO.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Globe;
            
            // Format title: only the first letter of the heading in capital (sentence-case)
            const formattedTitle = (() => {
              const lower = service.title.toLowerCase();
              let res = lower.charAt(0).toUpperCase() + lower.slice(1);
              const replacements: Record<string, string> = {
                "wordpress": "WordPress",
                "woocommerce": "WooCommerce",
                "shopify": "Shopify",
                "lms": "LMS",
                "elementor": "Elementor",
                "figma": "Figma",
                "seo": "SEO",
                "nda": "NDA",
                "ui": "UI",
                "php": "PHP",
                "html": "HTML",
                "css": "CSS",
                "saas": "SaaS",
                "wcag": "WCAG",
              };
              Object.entries(replacements).forEach(([key, val]) => {
                const regex = new RegExp(`\\b${key}\\b`, 'gi');
                res = res.replace(regex, val);
              });
              return res;
            })();

            return (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-transparent border-b-primary-blue rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:bg-[#FFFFFF] hover:scale-[1.01] card-shadow card-shadow-hover hover:border-primary-blue"
              >
                {/* Solid Circular Blue Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue text-white mb-6 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="h-5.5 w-5.5 stroke-[2.5]" />
                </div>

                {/* Service Title - Recoleta Font, 18px size, 24px line-height, 500 weight, custom letter-spacing */}
                <h3 
                  className="font-serif text-primary-text mb-3 transition-colors duration-200 group-hover:text-primary-blue"
                  style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0.01em" }}
                >
                  {formattedTitle}
                </h3>

                {/* Description - exact 16px size and 24px line height, a bit more grey */}
                <div 
                  className="font-sans text-secondary-text/85"
                  style={{ fontSize: "16px", lineHeight: "24px", color: "#5c6475" }}
                >
                  {service.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
