/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from "../data";
import { PortfolioItem } from "../types";
import { useHydrated } from "../useHydrated";
import { ExternalLink } from "lucide-react";

// Card widths are 300px / 440px (sm) / 480px (md); each screenshot ships at 480w and 960w
const IMAGE_SIZES = "(min-width: 768px) 480px, (min-width: 640px) 440px, 300px";

function ProjectCard({ project, isCopy }: { project: PortfolioItem; isCopy: boolean }) {
  const smallImage = project.image.replace(/\.webp$/, "-480.webp");

  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      // The duplicated half of each row only exists for the seamless loop
      aria-hidden={isCopy || undefined}
      tabIndex={isCopy ? -1 : undefined}
      className="w-[300px] xs:w-[360px] sm:w-[440px] md:w-[480px] h-[225px] xs:h-[263px] sm:h-[313px] md:h-[338px] shrink-0 bg-[#3F58E0] border border-[#e5e7eb] rounded-none overflow-hidden group relative cursor-pointer card-shadow hover:scale-[1.01] transition-all duration-300 block"
    >
      {/* Project Artwork Image */}
      <img
        src={project.image}
        srcSet={`${smallImage} 480w, ${project.image} 960w`}
        sizes={IMAGE_SIZES}
        width={960}
        height={640}
        alt={isCopy ? "" : `${project.title} – ${project.category}`}
        className="w-full h-full object-contain bg-[#3F58E0] transition-transform duration-500 scale-100 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
      />

      {/* Styled Center Brand Icon Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div className="bg-[#3F58E0] text-white p-4.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300 flex items-center justify-center hover:bg-[#2E47B6]">
          <ExternalLink className="h-6 w-6 stroke-[2.5]" />
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  // Alternate projects between the two rows so the newest (first in portfolioData) lead both rows
  const row1Base = portfolioData.filter((_, idx) => idx % 2 === 0);
  const row2Base = portfolioData.filter((_, idx) => idx % 2 === 1);

  // The seamless loop needs every card twice. The copies are added only in the browser,
  // so the prerendered HTML has one link per project, and the rows start moving once they exist.
  const hydrated = useHydrated();
  const row1Items = hydrated ? [...row1Base, ...row1Base] : row1Base;
  const row2Items = hydrated ? [...row2Base, ...row2Base] : row2Base;

  return (
    <section id="portfolio" className="bg-[#F6F7F7] py-20 lg:py-28 text-primary-text scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">

        {/* Section Header styled exactly like premium layout page */}
        <div className="text-left max-w-3xl">
          <h2 className="font-recoleta text-[44px] md:text-[56px] leading-[1.1] mb-5 font-normal tracking-normal">
            Websites and web apps I've built
          </h2>
          <p className="font-sans text-[17px] sm:text-[19px] leading-[28px] text-secondary-text mb-8">
            A look at some of the websites and web apps I've built for businesses and agencies in healthcare, real estate, construction, logistics, hospitality, finance, education and more. Every project here was designed, developed, and delivered by me.
          </p>
          <a
            href="https://calendly.com/zahidyaftali/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-sans font-bold bg-[#3F58E0] hover:bg-[#2E47B6] text-white text-[15px] px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-sm"
          >
            Book a Free Call
          </a>
        </div>
      </div>

      {/* Double Loop Endless Carousels with Hover-Pause mechanism */}
      <div className="space-y-8 hover-pause">

        {/* Row 1 Carousel: Sliding Leftwards */}
        <div className="relative w-full overflow-hidden py-2 flex select-none">
          <div className={`marquee-track flex gap-6 w-max ${hydrated ? "animate-marquee-left" : ""}`}>
            {row1Items.map((project, idx) => (
              <ProjectCard key={`${project.id}-r1-${idx}`} project={project} isCopy={idx >= row1Base.length} />
            ))}
          </div>
        </div>

        {/* Row 2 Carousel: Sliding Rightwards */}
        <div className="relative w-full overflow-hidden py-2 flex select-none">
          <div className={`marquee-track flex gap-6 w-max ${hydrated ? "animate-marquee-right" : ""}`}>
            {row2Items.map((project, idx) => (
              <ProjectCard key={`${project.id}-r2-${idx}`} project={project} isCopy={idx >= row2Base.length} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
