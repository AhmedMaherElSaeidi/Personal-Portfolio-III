import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Search,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code className="w-5 h-5 text-cyan-500" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-sky-500" />;
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-500" />;
      case 'databases':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'data-ml':
        return <Brain className="w-5 h-5 text-violet-500" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Code className="w-5 h-5 text-cyan-500" />;
    }
  };

  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filteredSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-[#121318]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>04. TECHNICAL SKILLS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Categorized technical stack &amp; tooling.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            A comprehensive, verified directory of programming languages, libraries, platforms, and database engines I work with.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all ${
                selectedCategory === 'all'
                  ? 'bg-zinc-900 text-white dark:bg-cyan-500 dark:text-zinc-950 font-bold shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono-code transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-900 text-white dark:bg-cyan-500 dark:text-zinc-950 font-bold shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, Db2)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono-code bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 shadow-2xs transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                  <div className="w-9 h-9 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-700/60 shadow-2xs">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono-code bg-zinc-50 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 border border-zinc-200/90 dark:border-zinc-700/60 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-500/10 transition-all duration-200 shadow-2xs"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-500" />
                  Production Ready
                </span>
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search finds nothing */}
        {filteredCategories.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono-code">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-mono-code bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold"
            >
              Clear Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
