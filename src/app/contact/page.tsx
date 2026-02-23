"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, Building, ShieldCheck, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE_CONFIG } from "@/lib/constants";

const inquiryTypes = [
  "Precious Metals Trading",
  "Non-Ferrous Metals",
  "Critical Minerals",
  "Semiconductor Metals",
  "Refining & Processing",
  "Supply Chain Management",
  "Compliance Inquiry",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Whether you&apos;re looking to source precious metals, explore our trading
              capabilities, or discuss a custom solution — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Corporate Headquarters</h3>
                    <a
                      href="https://maps.google.com/?q=30+N+Gould+St+STE+R+Sheridan+Wyoming+82801"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-amber-600 transition-colors text-sm"
                    >
                      {SITE_CONFIG.address.street} {SITE_CONFIG.address.suite}<br />
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                    </a>
                    <p className="text-xs text-slate-400 mt-1">Registered in the State of Wyoming, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="text-amber-600 hover:text-amber-700 transition-colors font-medium"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Monday – Friday: 8:00 AM – 6:00 PM MST</p>
                    <p className="text-slate-500 text-sm">24/7 trading desk available for active clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Connect with Our Founder</h3>
                    <a
                      href={SITE_CONFIG.founderLinkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] hover:text-[#004182] transition-colors text-sm font-medium"
                    >
                      Timothy Mercer on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "No-obligation consultation on your metals requirements",
                    "Full compliance documentation provided upfront",
                    "Dedicated account manager for every client",
                    "Transparent pricing with no hidden fees",
                    "Response within 24 business hours guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-emerald-50 rounded-2xl p-12 border border-emerald-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <Send className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Message Received</h2>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for reaching out. A member of our team will review your
                    inquiry and respond within 24 business hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-emerald-300 text-emerald-700 hover:bg-emerald-100"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and our team will get back to you promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-700 font-medium mb-2 block">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="John"
                          className="bg-white border-slate-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-700 font-medium mb-2 block">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="Smith"
                          className="bg-white border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-medium mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="bg-white border-slate-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-slate-700 font-medium mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-white border-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-700 font-medium mb-2 block">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        required
                        placeholder="Your Company Inc."
                        className="bg-white border-slate-300"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-slate-700 font-medium mb-2 block">
                        Inquiry Type *
                      </Label>
                      <select
                        id="inquiryType"
                        required
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="">Select inquiry type...</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-700 font-medium mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your requirements, volumes, and timeline..."
                        className="bg-white border-slate-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-md text-base py-6"
                    >
                      Submit Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      By submitting this form, you agree to our privacy policy.
                      All inquiries are subject to our KYC/AML compliance procedures.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Google Maps */}
      <section className="bg-slate-50">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Location</h2>
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.1!2d-106.9561!3d44.7972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Integrity Global Trade & Commodities Corp - Sheridan, Wyoming"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            30 N. Gould St. STE R, Sheridan, Wyoming 82801 · Registered in the State of Wyoming, USA
          </p>
        </div>
      </section>
    </>
  );
}
