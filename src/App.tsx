/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WordPressStats from "./components/WordPressStats";
import TrustIndicators from "./components/TrustIndicators";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsModalOpen(true);
  };

  const handleOpenBookCall = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-primary-text antialiased">
      {/* Header Panel */}
      <Header onOpenBookCall={handleOpenBookCall} />

      <main id="main-content">
      {/* Hero Section Banner */}
      <Hero onOpenContact={handleOpenContact} />

      {/* Global Client Trust Bar */}
      <TrustBar />

      <div className="border-t border-border-custom w-full" />

      {/* WordPress & WooCommerce Stats Section */}
      <WordPressStats />

      {/* Trust Elements Section */}
      <TrustIndicators />

      <div className="border-t border-border-custom w-full" />

      {/* Focus Services Cards */}
      <Services />

      <div className="border-t border-border-custom w-full" />

      {/* Corporate Benefits Checklists (Why Partner With Me) */}
      <WhyChooseMe />

      <div className="border-t border-border-custom w-full" />

      {/* Portfolio Gallery Deck */}
      <Portfolio />

      <div className="border-t border-border-custom w-full" />

      {/* Step by Step Operations */}
      <Process />

      <div className="border-t border-border-custom w-full" />

      {/* Modern Bento Tech Stack */}
      <TechStack />

      <div className="border-t border-border-custom w-full" />

      {/* Testimonials Review Slider */}
      <Testimonials />

      <div className="border-t border-border-custom w-full" />

      {/* Frequently Asked Questions */}
      <FAQ />

      <div className="border-t border-border-custom w-full" />

      {/* Interactive Direct Contact Form Section */}
      <section
        id="contact"
        className="bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Direct Contact Context */}
            <div className="lg:col-span-5">
              <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-5 font-normal tracking-normal text-primary-text">
                Let&apos;s work together
              </h2>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed mb-8">
                If you're an agency looking for a reliable white-label
                developer, or a business owner who needs a professional
                WordPress website, I'm ready to help.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://calendly.com/zahidyaftali/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-blue px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-hover-blue transition-all"
                >
                  Book a Free Call
                </a>
              </div>
            </div>

            {/* Direct Contact Visual Image */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <img
                src="/assets/images/wordpress-support-chat.webp"
                alt="Support chat conversation about fixing a WordPress menu"
                width={832}
                height={582}
                className="w-[70%] h-auto object-cover rounded-2xl block mx-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-custom w-full" />

      {/* Hero-centric CTA Section */}
      <CTA onOpenContact={handleOpenContact} />
      </main>

      <div className="border-t border-border-custom w-full" />

      {/* Footer Branding Area */}
      <Footer />

      {/* Work Intake Modal Booking Popup form */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />
    </div>
  );
}
