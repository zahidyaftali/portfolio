/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TrustIndicators() {
  const logos = [
    { id: 1, src: "/assets/images/logos/woocommerce-logo.webp", alt: "WooCommerce", width: 320, height: 65 },
    { id: 2, src: "/assets/images/logos/elementor-logo.webp", alt: "Elementor", width: 320, height: 52 },
    { id: 3, src: "/assets/images/logos/wordpress-logo.webp", alt: "WordPress", width: 320, height: 73 },
    { id: 4, src: "/assets/images/logos/yoast-logo.webp", alt: "Yoast SEO", width: 320, height: 59 },
    { id: 5, src: "/assets/images/logos/hostinger-logo.webp", alt: "Hostinger", width: 320, height: 64 },
    { id: 6, src: "/assets/images/logos/bluehost-logo.webp", alt: "Bluehost", width: 320, height: 53 },
  ];

  // Duplicate the logos to create the infinite seamless ticker effect
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section aria-label="Platforms and tools I work with" className="bg-[#F6F7F7] pt-1 pb-6 overflow-hidden w-full">
      {/* Carousel Outer Wrapper with side fade-out mask gradients */}
      <div className="relative w-full overflow-hidden hover-pause">
        {/* Left Gradient Cover */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F6F7F7] to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Cover */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F6F7F7] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="marquee-track flex gap-16 items-center w-max py-2 animate-marquee-logos">
          {marqueeLogos.map((logo, index) => {
            // Only the first set is meaningful; the copies exist for the seamless loop
            const isCopy = index >= logos.length;
            return (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center shrink-0 w-32 sm:w-40 h-16 relative group"
                aria-hidden={isCopy || undefined}
              >
                <img
                  src={logo.src}
                  alt={isCopy ? "" : logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="max-w-full max-h-12 w-auto h-auto object-contain filter grayscale opacity-60 contrast-125 brightness-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-105 transition-all duration-300 pointer-events-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
