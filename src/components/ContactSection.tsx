import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Ahmed,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open default mail client
    window.location.href = mailtoUrl;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-[#121318]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Have a project in mind or an opportunity to discuss?
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I'm always interested in connecting with people, discussing software engineering challenges, and exploring new opportunities.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono-code text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-bold">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-mono-code text-cyan-600 dark:text-cyan-400 hover:underline"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>

              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Response time</span>
                <span className="text-xs font-mono-code text-emerald-600 dark:text-emerald-400 font-semibold">
                  Typically &lt; 24 hours
                </span>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-3">
              
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-zinc-400 dark:text-zinc-500 block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      ahmedmaherelsaeidi
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-zinc-400 dark:text-zinc-500 block">GitHub Repositories</span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      AhmedMaherElSaeidi
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono-code text-zinc-400 dark:text-zinc-500 block">Phone</span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate block">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-2xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-zinc-400 dark:text-zinc-500 block">Location</span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Drafter Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-lg">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-500" />
                  <span className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100">
                    Send a Direct Inquiry
                  </span>
                </div>
                <span className="text-xs font-mono-code text-zinc-400 dark:text-zinc-500">
                  Pre-populates your mail client
                </span>
              </div>

              {sentNotice && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client was opened with your message. If it didn't open automatically, you can copy the message and email directly to <strong>{personalInfo.email}</strong>.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-900 border ${
                        errors.name ? 'border-rose-500' : 'border-zinc-200 dark:border-zinc-800'
                      } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-500`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-900 border ${
                        errors.email ? 'border-rose-500' : 'border-zinc-200 dark:border-zinc-800'
                      } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-500`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono-code text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    placeholder="Full-Stack Engineer Opportunity / Project Consultation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.subject ? 'border-rose-500' : 'border-zinc-200 dark:border-zinc-800'
                    } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-500`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono-code text-zinc-500 dark:text-zinc-400 mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Ahmed, I came across your portfolio and wanted to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.message ? 'border-rose-500' : 'border-zinc-200 dark:border-zinc-800'
                    } text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-cyan-500 resize-none`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
                    Direct communication • No middleman
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
