/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TrustBar() {
  const countries = [
    { id: 1, code: "us", name: "USA" },
    { id: 2, code: "gb", name: "UK" },
    { id: 3, code: "ca", name: "Canada" },
    { id: 4, code: "ae", name: "UAE" },
    { id: 5, code: "eu", name: "Europe" },
    { id: 6, code: "au", name: "Australia" },
  ];

  return (
    <section className="bg-white py-6 lg:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
          {/* Label */}
          <span className="font-recoleta text-lg sm:text-xl font-normal tracking-normal text-primary-text whitespace-nowrap">
            Worked with clients across
          </span>

          {/* Divider dot (desktop only) */}
          <span className="hidden sm:block h-1 w-1 rounded-full bg-border-secondary" />

          {/* Country pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {countries.map((country) => (
              <span
                key={country.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-light-bg px-3.5 py-1.5 text-sm font-medium text-secondary-text transition-all duration-200 hover:bg-[#EDEEF9] hover:text-primary-blue hover:-translate-y-0.5"
              >
                {/* Decorative: the country name is right next to it */}
                <img
                  src={`/assets/images/flags/${country.code}.webp`}
                  alt=""
                  width={20}
                  height={14}
                  className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
