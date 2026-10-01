import React from 'react';
import { Briefcase, Calendar, MapPin, ShieldCheck, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-[#121318]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>02. EXPERIENCE</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Professional trajectory &amp; engineering contributions.
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-zinc-300 dark:via-zinc-700 to-zinc-200 dark:to-zinc-800 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline node icon */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border-2 border-cyan-500 items-center justify-center text-cyan-500 shadow-sm z-10 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    {exp.id === 'military-service' ? (
                      <ShieldCheck className="w-4 h-4" />
                    ) : (
                      <Briefcase className="w-4 h-4" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-left sm:pl-0' : 'sm:text-left sm:pr-0'}`}>
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 hover:shadow-cyan-500/5 transition-all duration-300">
                      
                      {/* Badge / Period row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono-code font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>

                        {exp.isCurrentOrUpcoming && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                            Service Period
                          </span>
                        )}
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 mb-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 font-semibold">
                          <Building2 className="w-3.5 h-3.5 text-cyan-500" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description list */}
                      <ul className="space-y-2 mb-5">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies used, if any */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md text-[11px] font-mono-code bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
