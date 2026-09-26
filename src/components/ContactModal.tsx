/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Send, ShieldCheck, Mail, Clock, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    agencyName: "",
    website: "",
    email: "",
    projectType: "Full WordPress Build",
    timeline: "ASAP",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API callback transmission
    setTimeout(() => {
      // Save data locally for mock testing / proof of functionality
      const existing = localStorage.getItem("zahid_leads") || "[]";
      const parsed = JSON.parse(existing);
      const newLead = {
        ...formData,
        id: "lead_" + Date.now(),
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem("zahid_leads", JSON.stringify([...parsed, newLead]));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const projectTypes = [
    "Full WordPress Build",
    "Elementor Page Design",
    "White-Label Agency Support",
    "WooCommerce Development",
    "PageSpeed speed optimization",
    "Bug Fixes & Security Setup",
  ];

  return (
    <div className="fixed inset-0 z-100 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Black ambient overlay backdrop */}
      <div
        className="fixed inset-0 bg-[#111516]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        
        {/* Modal Card container */}
        <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-border-custom animate-fade-in-up">
          
          {/* Header Close trigger */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-secondary-text hover:bg-light-bg hover:text-primary-text transition-colors cursor-pointer"
              aria-label="Close form Modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              
              {/* Heading */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full font-bold">
                  New Project Enquiry
                </span>
                <h3 className="text-xl font-bold text-primary-text mt-2">
                  Tell me about your project
                </h3>
                <p className="text-xs text-secondary-text mt-1">
                  Fill in the details below and I'll get back to you shortly.
                </p>
              </div>

              {/* Input lists */}
              <div className="space-y-4">
                
                {/* Full name & Agency Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded border border-border-custom bg-white px-3.5 py-2 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                      Agency / Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.agencyName}
                      onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                      placeholder="Pixel Dev Co"
                      className="w-full rounded border border-border-custom bg-white px-3.5 py-2 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                    />
                  </div>
                </div>

                {/* Email & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@agency.com"
                      className="w-full rounded border border-border-custom bg-white px-3.5 py-2 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                      Agency Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://agency.com"
                      className="w-full rounded border border-border-custom bg-white px-3.5 py-2 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                    />
                  </div>
                </div>

                {/* Project Type Selection Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                    What do you need?
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded border border-border-custom bg-white px-3.5 py-2.5 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Timeline Selector */}
                <div>
                  <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                    Desired Timeline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["ASAP", "2-3 Weeks", "Ongoing Retainer"].map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`py-2 px-1 text-xs font-bold rounded border transition-all cursor-pointer ${
                          formData.timeline === time
                            ? "bg-primary-blue/15 border-primary-blue text-primary-blue"
                            : "bg-white border-border-custom text-secondary-text hover:border-[#D0D0D0]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed project message notes */}
                <div>
                  <label className="block text-xs font-bold text-primary-text mb-1 uppercase tracking-wide">
                    Project details *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me what you need, any details that matter, and your deadline..."
                    className="w-full rounded border border-border-custom bg-white px-3.5 py-2 text-sm text-primary-text transition-all focus:border-primary-blue focus:ring-1 focus:ring-primary-blue resize-none"
                  ></textarea>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded px-4 py-2.5 text-xs font-bold text-secondary-text hover:bg-light-bg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 rounded bg-primary-blue px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-hover-blue transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-3.5 w-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Success confirmation display */
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm mb-4 animate-pulse-slow">
                <CheckCircle className="h-7 w-7 stroke-[2]" />
              </div>

              <h3 className="text-xl font-bold text-primary-text mb-2">
                Message sent!
              </h3>

              <p className="text-sm text-secondary-text leading-relaxed max-w-sm mb-6">
                Thanks, <strong>{formData.fullName}</strong>. I've received your message and will get back to you as soon as possible.
              </p>

              <div className="w-full bg-light-bg border border-border-custom rounded-lg p-4 mb-6 text-left text-xs text-primary-text space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <Mail className="h-4 w-4 text-primary-blue" />
                  <span>zahidyaftali999@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-emerald-600">
                  <Clock className="h-4 w-4" />
                  <span>I usually reply within a few hours</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="rounded bg-primary-blue text-white px-6 py-2.5 text-xs font-bold hover:bg-hover-blue transition-all cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
