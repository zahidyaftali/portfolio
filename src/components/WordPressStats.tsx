/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";

export default function WordPressStats() {
  // Start at the final values so the prerendered HTML (what search engines read) shows the real numbers
  const [progress, setProgress] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Count up from zero once the section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startTimestamp: number | null = null;
    const duration = 1500; // fast & synchronized duration in ms
    let animationFrameId = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const currentProgress = Math.min(elapsed / duration, 1);

      setProgress(currentProgress);

      if (currentProgress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animationFrameId = requestAnimationFrame(step);
      },
      { threshold: 0.2 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const stats = [
    {
      id: 1,
      target: 150,
      suffix: "+",
      decimals: 0,
      label: "Custom WordPress websites built and handed over to happy clients.",
    },
    {
      id: 2,
      target: 3,
      suffix: "",
      decimals: 0,
      label: "Agencies trust me as their dedicated white-label WordPress developer.",
    },
    {
      id: 3,
      target: 100,
      suffix: "%",
      decimals: 0,
      label: "White-label confidentiality — your brand, your client, always.",
    },
    {
      id: 4,
      target: 24,
      suffix: "/7",
      decimals: 0,
      label: "Fast response time for agencies and clients, day or night.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F6F7F7] pt-16 pb-4 lg:pt-24 lg:pb-6 text-primary-text scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-10 font-normal tracking-normal text-primary-text">
          Proven remote results
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const displayValue = (progress * stat.target).toFixed(stat.decimals);
            return (
              <div
                key={stat.id}
                className="bg-[#EDEEF9] rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#E3E4F5] hover:scale-[1.01]"
              >
                <div>
                  {/* Big Metric serif number matching WordPress standards with clean sans-serif suffix to avoid watermarks */}
                  <div className="font-serif text-[60px] sm:text-[72px] leading-none text-primary-blue tracking-tight select-none font-normal flex items-baseline">
                    <span>{displayValue}</span>
                    <span className="font-sans text-[36px] sm:text-[42px] font-semibold text-primary-blue ml-1.5 self-baseline">
                      {stat.suffix}
                    </span>
                  </div>
                  {/* Clean label with generous spacing */}
                  <p className="font-sans text-sm sm:text-[15px] text-gray-500 leading-relaxed mt-4">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
