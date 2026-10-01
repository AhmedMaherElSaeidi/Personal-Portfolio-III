import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import { educationInfo, certifications } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>05. EDUCATION &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Academic foundation &amp; credentials.
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Formal Degree Showcase */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span>University Degree</span>
            </h3>

            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-md hover:border-cyan-500/40 transition-all duration-300">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono-code font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationInfo.period}
                </span>

                <span className="px-2.5 py-1 rounded-md text-xs font-mono-code font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {educationInfo.rank}
                </span>
              </div>

              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 mb-2">
                {educationInfo.degree}
              </h4>

              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {educationInfo.institution}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  {educationInfo.location}
                </span>
              </div>

              {/* Specialization & CGPA Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500 block mb-1">
                    Specialization
                  </span>
                  <span className="font-heading font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                    {educationInfo.specialization}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
                  <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500 block mb-1">
                    Cumulative GPA
                  </span>
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-cyan-600 dark:text-cyan-400">
                    {educationInfo.cgpa}
                  </span>
                </div>
              </div>

              {/* Key academic highlights */}
              <ul className="space-y-2.5">
                {educationInfo.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Right: Professional Certifications List */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4 font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-500" />
              <span>Professional Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-200 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-cyan-500 shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-zinc-900 dark:text-zinc-100">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-code bg-zinc-100 dark:bg-zinc-800/90 text-zinc-600 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-700/60">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
