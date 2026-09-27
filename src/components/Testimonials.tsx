/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star } from "lucide-react";
import { useHydrated } from "../useHydrated";

const testimonials = [
  {
    name: "clear_choice3",
    country: "United States",
    flag: "🇺🇸",
    text: "This guy is great, he goes above and beyond, it was a tough project and it took longer than expected but he came through, his communication was also excellent! Great freelancer!",
    role: "Fiverr Client"
  },
  {
    name: "dragonsblood575",
    country: "Ireland",
    flag: "🇮🇪",
    text: "This guy is excellent at designing websites and so quick also.",
    role: "Agency Client"
  },
  {
    name: "clear_choice3",
    country: "United States",
    flag: "🇺🇸",
    text: "Truly the best on Fiverr, these guys go above and beyond and they do things fast and communicate extremely well, they 100% exceed expectations.",
    role: "Fiverr Client"
  },
  {
    name: "noahc1",
    country: "Germany",
    flag: "🇩🇪",
    text: "Thanks good work.",
    role: "Partner Specialist"
  },
  {
    name: "valeelisme",
    country: "United States",
    flag: "🇺🇸",
    text: "I had an exceptional experience working with Zahid A on my website design project! His professionalism shines through in his work, delivering on time with proactive communication and politeness throughout. I could not have asked for better service—truly a pleasure to work with!",
    role: "E-commerce Founder"
  },
  {
    name: "edensmm25",
    country: "United Kingdom",
    flag: "🇬🇧",
    text: "Great work, thank you.",
    role: "Project Lead"
  },
  {
    name: "valeelisme",
    country: "United States",
    flag: "🇺🇸",
    text: "Working with Zahid A was a phenomenal experience! The professionalism and visual appeal in the website design were top-notch, perfectly aligned with our brand. His deep understanding and timely delivery made the collaboration seamless—highly recommended!",
    role: "Marketing Manager"
  },
  {
    name: "dionprimo",
    country: "United States",
    flag: "🇺🇸",
    text: "Great job on the website.",
    role: "Business Owner"
  },
  {
    name: "totallyenjoy",
    country: "Netherlands",
    flag: "🇳🇱",
    text: "Thanks for the website!",
    role: "Creative Partner"
  },
  {
    name: "bbdesign08",
    country: "France",
    flag: "🇫🇷",
    text: "Professional, quick and great communication.",
    role: "Design Lead"
  },
  {
    name: "olafareabiola",
    country: "Nigeria",
    flag: "🇳🇬",
    text: "Attention to details, and proactive communication.",
    role: "Operations Coordinator"
  },
  {
    name: "amgfan101",
    country: "United States",
    flag: "🇺🇸",
    text: "It's been a wonderful experience working with Zahid! He designed a perfect website for my new organization that exceeded my expectations. The colors, the imagery, and the responsiveness of the site itself have exceeded my expectations. I highly recommend anyone to work with Zahid. He is also super responsive to inquiries and changes.",
    role: "Organization Director"
  },
  {
    name: "spacecaddy",
    country: "United States",
    flag: "🇺🇸",
    text: "I have not used Fiverr in some time but my experience with Zahid was one of the best I’ve ever had. He did a truly good job of working with me. He was accommodating, professional, and helpful throughout the process.",
    role: "Fiverr Client"
  },
  {
    name: "alantuthill",
    country: "Ireland",
    flag: "🇮🇪",
    text: "Outstanding experience! This freelancer has incredible attention to detail and a deep understanding of the work. They exceeded my expectations and went above and beyond to deliver a result better than I imagined. Highly professional, proactive, and easy to work with. I’d definitely recommend them!",
    role: "Agency Lead"
  },
  {
    name: "alantuthill",
    country: "Ireland",
    flag: "🇮🇪",
    text: "Top-class work! Very professional and easy to work with. Highly recommend! The final product was spot on. Couldn’t ask for better. Delivered everything on time, communicated clearly throughout the process, and even made extra adjustments without hesitation. Exceeded expectations from start to finish.",
    role: "Product Owner"
  },
  {
    name: "auyvedic",
    country: "India",
    flag: "🇮🇳",
    text: "Zahid did an amazing job! The design was visually appealing, and his responsiveness made the process smooth. He exceeded expectations, and I truly appreciate his help. I’ll definitely be placing more orders in the future. Highly recommended!",
    role: "Brand Strategist"
  },
  {
    name: "juan_hanssen",
    country: "Netherlands",
    flag: "🇳🇱",
    text: "We are extremely satisfied with our website designer! He responds quickly, listens carefully to our wishes, and adjusts everything exactly as we want. No request is too much, and he only finalizes things when we are completely satisfied. This gives a reassuring and reliable feeling.",
    role: "Director"
  },
  {
    name: "turbotaxi",
    country: "United States",
    flag: "🇺🇸",
    text: "Professional website build within a couple hours meeting my expectations, even exceeding them.",
    role: "Startup Founder"
  },
  {
    name: "tamaraveraart74",
    country: "Netherlands",
    flag: "🇳🇱",
    text: "Zahir was great to work with! He responded quickly, showed professionalism and creativity in his work. Moreover, he solved the problem efficiently and in no time. The final result exceeded my expectations, and I would recommend him to others.",
    role: "Web Editor"
  },
  {
    name: "dragonsblood575",
    country: "Ireland",
    flag: "🇮🇪",
    text: "Fantastic experience; exceeded expectations.",
    role: "Developer Partner"
  },
  {
    name: "ucs247",
    country: "United States",
    flag: "🇺🇸",
    text: "Great rough draft, worked one on one for every detail, highly recommended.",
    role: "Agency Manager"
  },
  {
    name: "entreprisejayna",
    country: "Canada",
    flag: "🇨🇦",
    text: "Perfect work, simply perfect, nothing else to add.",
    role: "Small Business Owner"
  }
];

// Split the 22 testimonials across 3 balanced columns
const firstColumn = [
  testimonials[0], testimonials[3], testimonials[6], testimonials[9],
  testimonials[12], testimonials[15], testimonials[18], testimonials[21]
];
const secondColumn = [
  testimonials[1], testimonials[4], testimonials[7], testimonials[10],
  testimonials[13], testimonials[16], testimonials[19]
];
const thirdColumn = [
  testimonials[2], testimonials[5], testimonials[8], testimonials[11],
  testimonials[14], testimonials[17], testimonials[20]
];

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) {
  // The loop needs each review twice; the copy is added only in the browser
  // so the prerendered HTML contains every review once
  const hydrated = useHydrated();
  return (
    <div className={props.className}>
      <div
        className={`flex flex-col gap-6 pb-6 bg-transparent ${hydrated ? "animate-marquee-up" : ""}`}
        style={{ animationDuration: `${props.duration || 45}s` }}
      >
        {[
          ...new Array(hydrated ? 2 : 1).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, flag, country }, i) => (
                <div
                  className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 max-w-xs sm:max-w-sm w-full flex flex-col justify-between"
                  key={`${index}-${i}`}
                  // The second copy only exists for the seamless loop
                  aria-hidden={index > 0 || undefined}
                >
                  <p className="font-sans text-[14px] sm:text-[15px] leading-[22px] text-secondary-text font-normal italic">
                    &ldquo;{text}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-50">
                    {/* Initials instead of photos: these are real Fiverr reviews and we have no photos of the reviewers */}
                    <div className="h-10 w-10 rounded-full bg-[#f0f4fd] text-primary-blue flex items-center justify-center font-bold text-sm tracking-tight border border-primary-blue/15 select-none shrink-0" aria-hidden="true">
                      {name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm shrink-0" aria-hidden="true">
                          {flag}
                        </span>
                        <span className="font-sans font-semibold text-[14px] text-primary-text tracking-tight truncate">
                          {name}
                        </span>
                      </div>
                      <span className="font-sans text-[11px] text-gray-500 font-medium tracking-wider uppercase mt-0.5">
                        {country}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-20 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] font-normal tracking-normal text-primary-text mt-1 mb-5">
            What clients say about me
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mb-8">
            Honest words from agency founders, business owners, and marketing professionals I've worked with on web development projects.
          </p>

          {/* Fiverr Level 2 Seller Badge */}
          <a
            href="https://www.fiverr.com/s/WEaRoRd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 bg-white px-5 py-3 rounded-full border border-gray-200/80 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] mx-auto hover:border-primary-blue/35 hover:shadow-[0_4px_16px_-3px_rgba(63,88,224,0.1)] transition-all duration-300 cursor-pointer select-none group"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#007A20] font-extrabold text-[13px] tracking-tight bg-[#E6F8ED] px-2.5 py-0.5 rounded border border-[#007A20]/15 font-sans transition-colors duration-200 group-hover:bg-[#007A20] group-hover:text-white">
                fiverr
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                Level 2 Seller
              </span>
            </div>
            
            <div className="hidden sm:block h-3.5 w-px bg-gray-200"></div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-[#FFB800]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#FFB800] stroke-[#FFB800]" />
                ))}
              </div>
              <span className="text-[13px] font-bold text-gray-800 leading-none select-none">
                4.9<span className="sr-only"> out of 5 stars</span>
              </span>
              <span className="text-[11px] font-medium text-gray-500 leading-none select-none">
                (91 reviews)
              </span>
            </div>
          </a>
        </div>

        {/* Master Scrolling Columns Grid */}
        <div 
          className="flex justify-center gap-6 mt-10 max-h-[720px] overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)"
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={70} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={85} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={77} />
        </div>

      </div>
    </section>
  );
}
