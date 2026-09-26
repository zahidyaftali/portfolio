/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, ShieldCheck, Mail, MessageCircle } from "lucide-react";

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section 
      className="relative overflow-hidden py-24 lg:py-32 text-white border-t border-white/10"
      style={{
        background: "linear-gradient(110deg, #2458f4 0%, #158373 55%, #05be32 100%)"
      }}
    >
      
      {/* Decorative Rising Graph Curve Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-95 z-0"
        style={{
          backgroundImage: "url('/assets/images/cta-growth-graph.webp')",
          backgroundPosition: "bottom right",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[700px] text-left">
          
          {/* CTA Heading - 36px to 52px scalable typography, bright white text */}
          <h2 className="font-recoleta text-white text-[44px] md:text-[56px] leading-[1.1] mb-6 font-normal tracking-normal">
            Ready to get your web project done?
          </h2>

          {/* CTA Subheading - premium white text */}
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-white/95 max-w-xl mb-10">
            I’m open to new projects. Let’s have a quick chat — no pressure, no complicated process. Just tell me what you need.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://calendly.com/zahidyaftali/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-start-project-btn"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-[15px] font-semibold text-[#111516] shadow-lg hover:bg-gray-50 active:scale-[0.99] transition-all duration-200 cursor-pointer text-center font-sans"
            >
              Book a Free Call
              <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
            </a>
            
            <a
              href="https://wa.me/923472093083"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-schedule-call-btn"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-transparent border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-white/10 active:scale-[0.99] transition-all duration-200 cursor-pointer text-center font-sans"
            >
              <MessageCircle className="h-4.5 w-4.5 shrink-0" />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
