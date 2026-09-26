/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function WhyChooseMe() {
  return (
    <section id="about" className="bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/assets/images/wordpress-block-editor.webp"
                alt="WordPress site editor showing a skincare shop page built with blocks"
                width={896}
                height={689}
                className="w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7">
            <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-6 font-normal tracking-normal text-primary-text">
              Hi, I’m Zahid — WordPress developer for agencies
            </h2>

            <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mb-6">
              I’ve been building white-label WordPress websites for <strong>5+ years</strong>, working quietly behind the scenes for agencies around the world. Clean code, fast delivery, no stress — and your brand stays front and center.
            </p>

            <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mb-6">
              Agencies trust me to handle their client projects with full confidentiality, daily updates, and zero direct contact with their clients — always on time, always invisible. White-label isn’t a side service for me; it’s the core of what I do.
            </p>

            <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text/90">
              Every project is different, but the approach is always the same — whether it’s a custom WordPress website built from scratch for one of your clients, a full redesign, a WooCommerce store, or just fixing something that’s broken. I take it seriously, I don’t cut corners, and I don’t hand anything over until it’s actually ready.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
