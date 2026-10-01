import React from 'react';
import { Code2, Workflow, Award, Trophy, Languages, BrainCircuit, Database, Server } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Engineering robust software from architecture to interface.
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Grid layout: Story + Highlight cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Story Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              I'm a <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Computer Science and Artificial Intelligence</strong> graduate from Helwan University, specializing in <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Software Engineering</strong>. I have over two years of hands-on web development experience and professional experience customizing enterprise workflows and UI configurations using <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">IBM Maximo</strong>.
            </p>
            <p>
              I enjoy solving complex problems, designing practical solutions, and building applications from the backend to the user interface. My experience spans full-stack development, AI-powered applications, database management, and enterprise systems.
            </p>

            {/* Language proficiencies */}
            <div className="pt-4">
              <h3 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 flex items-center gap-1.5 font-bold">
                <Languages className="w-4 h-4 text-cyan-500" />
                <span>Languages Spoken</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-xs shadow-2xs"
                  >
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">{lang.name}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies badges */}
            <div className="pt-2">
              <h3 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-bold">
                Core Domains
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 block">Full-Stack Development</span>
                    <span className="text-zinc-500 dark:text-zinc-400">React, Node.js, Express, Flask, REST &amp; GraphQL</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-2.5">
                  <Workflow className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 block">Enterprise Systems</span>
                    <span className="text-zinc-500 dark:text-zinc-400">IBM Maximo UI configuration, workflows, Db2 automations</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-2.5">
                  <BrainCircuit className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 block">AI &amp; Deep Learning</span>
                    <span className="text-zinc-500 dark:text-zinc-400">TensorFlow, UNet segmentation, model evaluation</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 block">Database Architecture</span>
                    <span className="text-zinc-500 dark:text-zinc-400">MongoDB, PostgreSQL, IBM Db2, Oracle SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: 2+ Years Web Dev */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 hover:shadow-cyan-500/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-3xl text-zinc-900 dark:text-zinc-100 mb-1">
                2+ Years
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                Hands-on Web Development
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Building responsive frontend applications and scalable backend APIs using React, Node.js, and Flask.
              </p>
            </div>

            {/* Card 2: 5 Months IBM Maximo */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 hover:shadow-cyan-500/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Workflow className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-3xl text-zinc-900 dark:text-zinc-100 mb-1">
                5 Months
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                IBM Maximo Experience
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Customizing enterprise business workflows, UI configurations, and Db2 escalation scripts for clients.
              </p>
            </div>

            {/* Card 3: 3.94 CGPA */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 hover:shadow-cyan-500/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-3xl text-zinc-900 dark:text-zinc-100 mb-1">
                3.94 / 4.00
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                Cumulative CGPA
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Graduated with Distinction with Highest Honors in Computer Science &amp; Artificial Intelligence.
              </p>
            </div>

            {/* Card 4: Ranked 8th */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-cyan-500/50 hover:shadow-cyan-500/5 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-3xl text-zinc-900 dark:text-zinc-100 mb-1">
                Ranked 8th
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                In Graduating Class
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Recognized for academic excellence and top performance across software engineering curricula.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
