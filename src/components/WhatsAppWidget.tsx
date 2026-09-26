/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function WhatsAppWidget() {
  const whatsappLink = "https://wa.me/923472093083";

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none">
      {/* Tooltip text showing on hover with matching design */}
      <div className="group relative flex items-center justify-end">
        
        {/* Sleek Tooltip */}
        <span className="absolute right-16 scale-0 transition-all duration-200 origin-right rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-800 shadow-xl border border-gray-100 group-hover:scale-100 whitespace-nowrap">
          Chat on WhatsApp ✨
        </span>

        {/* Floating Circular WhatsApp Button directly leading to the user's WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue hover:bg-hover-blue text-white shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer border-0 outline-none focus:outline-none focus:ring-0"
          aria-label="Direct Chat on WhatsApp"
        >
          <div className="relative flex items-center justify-center">
            {/* Requested Official WhatsApp SVG Icon styled inline for instant loading and brand compliance */}
            <svg
              className="h-7 w-7 text-white fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-300.000000, -7599.000000)" fill="currentColor">
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </a>

      </div>
    </div>
  );
}
