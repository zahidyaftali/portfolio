/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#F6F7F7] py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Header Block (Left 4 columns, ~33% width) */}
          <div className="lg:col-span-4 text-left lg:sticky lg:top-24">
            <h2
              className="font-recoleta text-primary-text text-[44px] md:text-[56px] leading-[1.1] font-normal tracking-normal mb-5"
              id="faq-main-title"
            >
              Frequently asked questions
            </h2>
            <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text">
              Common questions about how I work, what I build, and what to expect when you hire me for a WordPress project.
            </p>
          </div>

          {/* FAQ Accordion List (Right 8 columns, ~67% width) */}
          <div className="lg:col-span-8 border-t border-[#e5e7eb]" id="faq-accordion-container">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="border-b border-[#e5e7eb] transition-all duration-300"
                >
                  <h3 className="tracking-normal">
                    <button
                      type="button"
                      onClick={() => handleToggle(faq.id)}
                      id={`faq-btn-${faq.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${faq.id}`}
                      className="w-full text-left py-6 flex items-start gap-4 sm:gap-5 cursor-pointer focus:outline-none group"
                    >
                      <ChevronDown className={`h-5 w-5 mt-1 sm:mt-1.5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-0 text-primary-text" : "-rotate-90 text-gray-400 group-hover:text-[#3F58E0]"
                      }`} />
                      <span className="font-serif text-[19px] sm:text-[23px] text-primary-text font-normal leading-snug transition-colors duration-200 group-hover:text-[#3F58E0]">
                        {faq.question}
                      </span>
                    </button>
                  </h3>

                  {/* Answers stay in the HTML (for search engines) and collapse with a CSS grid-rows transition */}
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    inert={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-9 pb-6 pr-4 sm:pr-8 font-sans">
                        <p className="text-secondary-text text-[15px] sm:text-[16px]" style={{ lineHeight: "26px" }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
