/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { processSteps } from "../data";
import {
  SearchCode,
  Calendar,
  PenTool,
  FileCode,
  CheckCircle,
  Rocket,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  SearchCode: SearchCode,
  Calendar: Calendar,
  PenTool: PenTool,
  FileCode: FileCode,
  CheckCircle: CheckCircle,
  Rocket: Rocket,
};

export default function Process() {
  return (
    <section id="process" className="bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-right max-w-3xl ml-auto mb-16 flex flex-col items-end">
          <span className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-primary-blue mb-3">
            How It Works
          </span>
          <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-5 font-normal tracking-normal text-primary-text text-right">
            Simple, Clear Process
          </h2>
          <div className="h-1 w-12 bg-primary-blue ml-auto rounded"></div>
        </div>

        {/* Process Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-8">
          {processSteps.map((step, idx) => {
            const IconComponent = iconMap[step.iconName] || FileCode;

            // Format title: only the first letter of the heading in capital (sentence-case)
            const formattedTitle = (() => {
              const lower = step.title.toLowerCase();
              let res = lower.charAt(0).toUpperCase() + lower.slice(1);
              const replacements: Record<string, string> = {
                "wordpress": "WordPress",
                "woocommerce": "WooCommerce",
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
                key={idx}
                className="relative bg-[#FFFFFF] border-b-2 border-primary-blue rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:bg-[#FFFFFF] hover:scale-[1.01]"
              >
                {/* Step Numeric Indicator */}
                <div className="absolute top-6 right-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#e9ecef] text-secondary-text font-sans text-xs font-bold group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                  {step.stepNumber}
                </div>

                {/* Solid Circular Blue Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-blue text-white mb-6 transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="h-5.5 w-5.5 stroke-[2.5]" />
                </div>

                {/* Step Title - matched style with Services Box Title */}
                <h3 
                  className="font-serif text-primary-text mb-3 transition-colors duration-200 group-hover:text-primary-blue"
                  style={{ fontSize: "18px", lineHeight: "24px", fontWeight: 500, letterSpacing: "0.01em" }}
                >
                  {formattedTitle}
                </h3>

                {/* Description - exact 16px size and 24px line height */}
                <div 
                  className="font-sans text-secondary-text/85"
                  style={{ fontSize: "16px", lineHeight: "24px", color: "#5c6475" }}
                >
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
