/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBookCall: () => void;
}

export default function Header({ onOpenBookCall }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-custom shadow-sm"
          : "bg-white border-b border-border-custom"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
            <a href="#home" className="group flex items-baseline">
              <span className="font-serif text-[26px] leading-none text-primary-text transition-colors duration-200 group-hover:text-primary-blue">
                ZAY
              </span>
              <span className="font-serif text-[26px] leading-none text-primary-blue">.</span>
            </a>
            <span className="text-[11px] sm:text-xs font-medium text-secondary-text tracking-wide border-t sm:border-t-0 sm:border-l border-border-custom pt-0.5 sm:pt-0 sm:pl-3 uppercase">
              Web Developer
            </span>
          </div>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-secondary-text hover:text-primary-text transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://calendly.com/zahidyaftali/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-btn"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-hover-blue active:bg-active-blue transition-all duration-200"
            >
              <Calendar className="h-4 w-4" />
              Book a Free Call
            </a>
          </nav>

          {/* Mobile Menu Actions */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="https://calendly.com/zahidyaftali/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-header-cta"
              className="inline-flex items-center justify-center rounded-md bg-primary-blue px-3.5 py-2 text-xs font-semibold text-white hover:bg-hover-blue transition-all"
            >
              Book a Free Call
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-text hover:bg-light-bg transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        inert={!isOpen}
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-border-custom bg-white ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-primary-text hover:bg-light-bg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
