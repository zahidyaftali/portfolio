/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  scope?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  text: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  agencyName: string;
  website: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
  submittedAt: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
