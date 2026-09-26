/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Fiverr", 
      href: "https://www.fiverr.com/s/WEaRoRd", 
      icon: () => (
        <svg role="img" viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/>
        </svg>
      )
    },
    { 
      name: "Upwork", 
      href: "https://www.upwork.com/freelancers/~010aee81b1f75b3cac?mp_source=share", 
      icon: () => (
        <svg role="img" viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </svg>
      )
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer 
      className="border-t border-white/5 pt-12 pb-8 text-white"
      style={{ backgroundColor: "#101517" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand/Self segment */}
          <div className="md:col-span-6 flex flex-col items-start justify-between">
            <div>
              {/* Logo & Tagline matches header but adjusted for dark background */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-4">
                <a href="#home" className="group flex items-baseline">
                  <span className="font-serif text-[26px] leading-none text-white transition-colors duration-200 group-hover:text-primary-blue font-normal">
                    ZAY
                  </span>
                  <span className="font-serif text-[26px] leading-none text-primary-blue font-normal">.</span>
                </a>
                <span className="text-[11px] sm:text-xs font-medium text-gray-400 tracking-wide border-t sm:border-t-0 sm:border-l border-white/10 pt-0.5 sm:pt-0 sm:pl-3 uppercase">
                  WordPress Developer
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-5">
                Dedicated WordPress developer for agencies and businesses around the world. Clean builds, honest communication, and always on time.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded bg-white/5 text-gray-400 hover:text-white hover:bg-primary-blue transition-all"
                    aria-label={`Visit Zahid Ali's ${social.name}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick Navigation
            </h2>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary-blue transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Direct Contact Block */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Direct Contact
            </h2>
            <div className="space-y-4">
              <a 
                href="mailto:zahidyaftali999@gmail.com" 
                className="inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary-blue transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-primary-blue shrink-0" />
                zahidyaftali999@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-xs text-gray-450 pt-1">
                <ShieldCheck className="h-4 w-4 text-primary-blue shrink-0" />
                <span>100% NDA Protected Work</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footprint bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
          {/* The year is baked in at build time; tolerate it differing from the visitor's clock */}
          <p className="text-xs text-gray-400 text-center sm:text-left" suppressHydrationWarning>
            &copy; {currentYear} Zahid Ali Yaftali. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1.5 justify-center text-center sm:text-right">
            Built with <Heart className="h-3 w-3 text-red-500 fill-current" /> for WordPress
          </p>
        </div>

      </div>
    </footer>
  );
}
