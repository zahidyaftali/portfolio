/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary-blue py-20 lg:py-28"
    >
      {/* Background Repeating Plus-Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 14H16M14 12V16' stroke='white' stroke-width='1' stroke-linecap='square'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-8">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse-slow"></span>
              5+ Years Experience
            </div>

            {/* Main Heading Heading */}
            <h1 className="text-white mb-6 font-recoleta text-[53px] sm:text-[65px] leading-[1.1] font-normal tracking-normal">
              Need a white-label{" "}
              <span className="text-white">WordPress developer</span>?
            </h1>

            {/* Subheading Subtitle */}
            <p className="text-lg sm:text-xl text-blue-50/90 leading-relaxed max-w-2xl mb-10 font-sans">
              I build clean, fast white-label WordPress websites for agencies
              and businesses. Good communication, on-time delivery, no stress.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#portfolio"
                id="hero-view-portfolio-btn"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-base font-semibold text-primary-blue shadow-sm hover:bg-[#F3F5FF] active:bg-[#E5E8FF] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                View Portfolio
                <ArrowRight className="h-4.5 w-4.5 translate-y-px text-primary-blue" />
              </a>
              <a
                href="https://wa.me/923472093083"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/15 active:bg-white/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageSquare className="h-4.5 w-4.5 text-white" />
                WhatsApp Me!
              </a>
            </div>
          </div>

          {/* Right Column: Premium WordPress.com Hero Image */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Subtle visual backdrop ring in matching theme color */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-white/15 to-transparent blur-2xl"></div>

              {/* Main Premium Floating Card Artwork */}
              <div className="relative animate-float">
                {/* LCP image: fetched with high priority, sized to avoid layout shift */}
                <img
                  src="/assets/images/hero-wordpress-dashboard-960.webp"
                  srcSet="/assets/images/hero-wordpress-dashboard-640.webp 640w, /assets/images/hero-wordpress-dashboard-960.webp 960w, /assets/images/hero-wordpress-dashboard-1280.webp 1280w"
                  sizes="(min-width: 1024px) 670px, 448px"
                  width={1280}
                  height={1016}
                  alt="WordPress block editor with site backup, server status and 99.999% uptime panels"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
