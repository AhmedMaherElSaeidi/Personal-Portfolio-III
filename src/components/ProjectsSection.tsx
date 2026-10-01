import React, { useState } from 'react';
import {
  ExternalLink,
  Cpu,
  CheckCircle,
  Sliders,
  ShoppingBag,
  ShieldCheck,
  Languages,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  // HuBMAP interactive state
  const [selectedModel, setSelectedModel] = useState<'unet' | 'custom_unet' | 'linknet' | 'fcn'>('custom_unet');
  const [activeImageView, setActiveImageView] = useState<'raw' | 'true_mask' | 'pred_mask' | 'overlay'>('overlay');

  // TastyBite interactive state
  const [tastyLang, setTastyLang] = useState<'en' | 'ar'>('en');
  const [tastyTab, setTastyTab] = useState<'menu' | 'admin'>('menu');
  const [activeCategory, setActiveCategory] = useState<'all' | 'burgers' | 'pizza' | 'sushi'>('all');

  const hubmapProject = projects.find((p) => p.id === 'hubmap-segmentation')!;
  const tastybiteProject = projects.find((p) => p.id === 'tastybite-ordering')!;

  const modelMetrics = {
    custom_unet: { name: 'Custom UNet (Tuned)', iou: '86.4%', dice: '92.1%', params: '18.4M', speed: '42ms' },
    unet: { name: 'Standard UNet', iou: '84.8%', dice: '90.7%', params: '31.0M', speed: '58ms' },
    linknet: { name: 'LinkNet', iou: '83.2%', dice: '89.5%', params: '11.5M', speed: '31ms' },
    fcn: { name: 'FCN-8s', iou: '81.9%', dice: '88.3%', params: '24.2M', speed: '65ms' },
  };

  const tastyDishes = [
    {
      nameEn: 'Double Truffle Smash Burger',
      nameAr: 'برجر ترافل سماش دبل',
      priceEn: '$14.50',
      priceAr: '١٤.٥٠ $',
      cat: 'burgers',
      badgeEn: 'Best Seller',
      badgeAr: 'الأكثر طلباً',
      color: 'from-amber-500/20 to-orange-500/20',
      icon: '🍔',
    },
    {
      nameEn: 'Artisan Neapolitan Pizza',
      nameAr: 'بيتزا نابوليتانا إيطالية',
      priceEn: '$16.00',
      priceAr: '١٦.٠٠ $',
      cat: 'pizza',
      badgeEn: 'Wood Fired',
      badgeAr: 'فرن حطب',
      color: 'from-rose-500/20 to-red-500/20',
      icon: '🍕',
    },
    {
      nameEn: 'Salmon Nigiri & Dragon Roll',
      nameAr: 'سلمون نيجيري ودراجون رول',
      priceEn: '$21.00',
      priceAr: '٢١.٠٠ $',
      cat: 'sushi',
      badgeEn: 'Chef Special',
      badgeAr: 'اختيار الشيف',
      color: 'from-emerald-500/20 to-teal-500/20',
      icon: '🍣',
    },
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono-code text-xs font-semibold mb-3">
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight">
            Production-grade applications &amp; engineering milestones.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Selected deep learning systems and full-stack software built with clean architectural patterns and real-world testing.
          </p>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-4" />
        </div>

        {/* Project 1: HuBMAP — Microvasculature Segmentation Showcase */}
        <div className="mb-20 rounded-3xl bg-white dark:bg-[#15161C] border border-zinc-200 dark:border-zinc-800/90 shadow-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          
          {/* Top Banner Bar */}
          <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold">
                  Graduation Project • AI / Machine Learning
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-2 hidden sm:inline">
                  Helwan University
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              <a
                href={hubmapProject.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title="View Frontend Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Frontend</span>
              </a>
              <a
                href={hubmapProject.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title="View Backend Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Backend</span>
              </a>
            </div>
          </div>

          {/* Project Content Layout */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Project Details & Features */}
            <div className="lg:col-span-6 flex flex-col">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
                {hubmapProject.title}
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {hubmapProject.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {hubmapProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono-code rounded-lg bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {hubmapProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantitative Metrics Bar */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-3 gap-3 text-center">
                <div>
                  <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500 block">IoU Score</span>
                  <span className="font-heading font-bold text-lg text-cyan-600 dark:text-cyan-400">
                    {modelMetrics[selectedModel].iou}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500 block">Dice Score</span>
                  <span className="font-heading font-bold text-lg text-emerald-600 dark:text-emerald-400">
                    {modelMetrics[selectedModel].dice}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono-code text-zinc-400 dark:text-zinc-500 block">Inference</span>
                  <span className="font-heading font-bold text-lg text-zinc-900 dark:text-zinc-100">
                    {modelMetrics[selectedModel].speed}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Scientific Segmentation Interface */}
            <div className="lg:col-span-6 flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 p-5 shadow-2xl">
              
              {/* Top Controls: Model Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono-code text-zinc-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  Select Model:
                </span>
                
                <div className="flex flex-wrap gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                  {(['custom_unet', 'unet', 'linknet', 'fcn'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedModel(m)}
                      className={`px-2.5 py-1 text-[11px] font-mono-code rounded-lg transition-colors ${
                        selectedModel === m
                          ? 'bg-cyan-500 text-zinc-950 font-bold'
                          : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      {m === 'custom_unet' ? 'Custom UNet' : m.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Switcher Tabs (6 Comparison Views in App) */}
              <div className="flex flex-wrap gap-1.5 py-3 border-b border-zinc-800/80">
                <button
                  onClick={() => setActiveImageView('overlay')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code transition-colors ${
                    activeImageView === 'overlay'
                      ? 'bg-zinc-800 text-cyan-400 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Overlaid Mask
                </button>
                <button
                  onClick={() => setActiveImageView('pred_mask')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code transition-colors ${
                    activeImageView === 'pred_mask'
                      ? 'bg-zinc-800 text-cyan-400 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Predicted Mask
                </button>
                <button
                  onClick={() => setActiveImageView('true_mask')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code transition-colors ${
                    activeImageView === 'true_mask'
                      ? 'bg-zinc-800 text-cyan-400 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Ground Truth
                </button>
                <button
                  onClick={() => setActiveImageView('raw')}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono-code transition-colors ${
                    activeImageView === 'raw'
                      ? 'bg-zinc-800 text-cyan-400 font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Raw Tissue Slice
                </button>
              </div>

              {/* Visual Display Frame */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 my-3 flex items-center justify-center group">
                
                {/* Background Image: Authentic Tissue Slice */}
                <img
                  src="/assets/kidney_slice_1.jpg"
                  alt="Kidney Tissue Microvasculature Slice"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    activeImageView === 'pred_mask' || activeImageView === 'true_mask'
                      ? 'opacity-20'
                      : 'opacity-90'
                  }`}
                />

                {/* Mask Overlays with SVG Microvascular Segmentation Geometry */}
                {(activeImageView === 'overlay' || activeImageView === 'pred_mask') && (
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-300"
                  >
                    {/* Simulated precise microvasculature segmentation masks */}
                    <path
                      d="M 60,80 Q 90,60 130,85 T 190,110 Q 230,135 270,105 T 340,140 Q 370,165 350,210 T 290,240 Q 240,265 190,230 T 110,210 Q 70,185 55,140 Z"
                      fill={activeImageView === 'pred_mask' ? 'none' : 'rgba(6, 182, 212, 0.25)'}
                      stroke="#06B6D4"
                      strokeWidth="2.5"
                      strokeDasharray="4 2"
                      className="animate-pulse"
                    />
                    <path
                      d="M 120,120 Q 150,110 180,130 T 220,160 Q 250,180 230,205 T 170,195 Q 130,175 120,140 Z"
                      fill="rgba(56, 189, 248, 0.35)"
                      stroke="#38BDF8"
                      strokeWidth="2"
                    />
                    <circle cx="85" cy="190" r="14" fill="rgba(6, 182, 212, 0.4)" stroke="#06B6D4" strokeWidth="1.5" />
                    <circle cx="310" cy="95" r="18" fill="rgba(6, 182, 212, 0.4)" stroke="#06B6D4" strokeWidth="1.5" />
                    <circle cx="280" cy="210" r="12" fill="rgba(6, 182, 212, 0.4)" stroke="#06B6D4" strokeWidth="1.5" />
                  </svg>
                )}

                {activeImageView === 'true_mask' && (
                  <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 62,82 Q 92,62 128,87 T 188,112 Q 228,137 268,107 T 338,142 Q 368,167 348,212 T 288,242 Q 238,267 188,232 T 108,212 Q 68,187 57,142 Z"
                      fill="rgba(16, 185, 129, 0.3)"
                      stroke="#10B981"
                      strokeWidth="2.5"
                    />
                    <circle cx="85" cy="190" r="15" fill="rgba(16, 185, 129, 0.4)" stroke="#10B981" strokeWidth="1.5" />
                    <circle cx="310" cy="95" r="19" fill="rgba(16, 185, 129, 0.4)" stroke="#10B981" strokeWidth="1.5" />
                    <circle cx="280" cy="210" r="13" fill="rgba(16, 185, 129, 0.4)" stroke="#10B981" strokeWidth="1.5" />
                  </svg>
                )}

                {/* Floating badge */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-[11px] font-mono-code text-cyan-400">
                  {modelMetrics[selectedModel].name} • View: {activeImageView.replace('_', ' ').toUpperCase()}
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono-code bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Confidence: {modelMetrics[selectedModel].dice}
                </div>
              </div>

              {/* Inferencing specs footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                <span>Architecture: {selectedModel.toUpperCase()}</span>
                <span>Params: {modelMetrics[selectedModel].params}</span>
                <span>Resolution: 512×512 px</span>
              </div>

            </div>

          </div>

        </div>

        {/* Project 2: TastyBite — Online Food Ordering Application Showcase */}
        <div className="rounded-3xl bg-white dark:bg-[#15161C] border border-zinc-200 dark:border-zinc-800/90 shadow-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
          
          {/* Top Banner Bar */}
          <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold">
                  Full-Stack E-Commerce &amp; Admin Platform
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-2 hidden sm:inline">
                  Bilingual English / Arabic (RTL)
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              <a
                href={tastybiteProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-xs"
                title="Launch Live Demo on Vercel"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={tastybiteProject.frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title="View Frontend Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Frontend</span>
              </a>
              <a
                href={tastybiteProject.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                title="View Backend Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Backend</span>
              </a>
            </div>
          </div>

          {/* Project Content Layout */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Project Details & Features */}
            <div className="lg:col-span-6 flex flex-col">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
                {tastybiteProject.title}
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {tastybiteProject.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {tastybiteProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono-code rounded-lg bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features List */}
              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {tastybiteProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={tastybiteProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs shadow-md transition-colors"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Interactive Bilingual & Admin Simulator */}
            <div className="lg:col-span-6 flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 p-5 shadow-2xl">
              
              {/* Simulator Header: Bilingual Toggle (EN / AR) and View Selector */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                {/* Language Switcher */}
                <div className="flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-mono-code text-zinc-400">Locale:</span>
                  <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                    <button
                      onClick={() => setTastyLang('en')}
                      className={`px-2.5 py-0.5 text-xs font-mono-code rounded-lg transition-colors ${
                        tastyLang === 'en'
                          ? 'bg-orange-500 text-white font-bold'
                          : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      EN 🇬🇧
                    </button>
                    <button
                      onClick={() => setTastyLang('ar')}
                      className={`px-2.5 py-0.5 text-xs font-mono-code rounded-lg transition-colors ${
                        tastyLang === 'ar'
                          ? 'bg-orange-500 text-white font-bold'
                          : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      العربية 🇸🇦
                    </button>
                  </div>
                </div>

                {/* View Tabs */}
                <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                  <button
                    onClick={() => setTastyTab('menu')}
                    className={`px-2.5 py-1 text-xs font-mono-code rounded-lg transition-colors ${
                      tastyTab === 'menu'
                        ? 'bg-zinc-800 text-orange-400 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Customer Menu
                  </button>
                  <button
                    onClick={() => setTastyTab('admin')}
                    className={`px-2.5 py-1 text-xs font-mono-code rounded-lg transition-colors ${
                      tastyTab === 'admin'
                        ? 'bg-zinc-800 text-orange-400 font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Admin Dashboard
                  </button>
                </div>
              </div>

              {/* Dynamic Interactive Preview Canvas with RTL/LTR Simulation */}
              <div
                dir={tastyLang === 'ar' ? 'rtl' : 'ltr'}
                className="my-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 min-h-[300px] flex flex-col transition-all duration-300"
              >
                {tastyTab === 'menu' ? (
                  <div>
                    {/* Simulated Mini Navbar & Search */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🍕</span>
                        <span className="font-heading font-bold text-sm text-zinc-100">
                          {tastyLang === 'ar' ? 'تيستي بايت' : 'TastyBite'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 font-mono-code">
                          {tastyLang === 'ar' ? 'السلة (٢)' : 'Cart (2)'}
                        </span>
                      </div>
                    </div>

                    {/* Category Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-3 mb-3">
                      {[
                        { id: 'all', en: 'All Items', ar: 'الكل' },
                        { id: 'burgers', en: 'Burgers 🍔', ar: 'برجر 🍔' },
                        { id: 'pizza', en: 'Pizza 🍕', ar: 'بيتزا 🍕' },
                        { id: 'sushi', en: 'Sushi 🍣', ar: 'سوشي 🍣' },
                      ].map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setActiveCategory(c.id as any)}
                          className={`px-3 py-1 text-xs font-medium rounded-full shrink-0 transition-colors ${
                            activeCategory === c.id
                              ? 'bg-orange-500 text-white'
                              : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {tastyLang === 'ar' ? c.ar : c.en}
                        </button>
                      ))}
                    </div>

                    {/* Dish Cards */}
                    <div className="space-y-2.5">
                      {tastyDishes
                        .filter((d) => activeCategory === 'all' || d.cat === activeCategory)
                        .map((dish, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between gap-3 hover:border-orange-500/40 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-xl shrink-0">
                                {dish.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-semibold text-xs sm:text-sm text-zinc-100">
                                  {tastyLang === 'ar' ? dish.nameAr : dish.nameEn}
                                </span>
                                <span className="text-[10px] text-orange-400 font-mono-code">
                                  {tastyLang === 'ar' ? dish.badgeAr : dish.badgeEn}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="font-mono-code font-bold text-xs sm:text-sm text-zinc-200">
                                {tastyLang === 'ar' ? dish.priceAr : dish.priceEn}
                              </span>
                              <button className="px-2.5 py-1 text-[11px] rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500 hover:text-white transition-colors">
                                {tastyLang === 'ar' ? 'أضف' : 'Add'}
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Simulated Admin Dashboard */}
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-zinc-800">
                      <span className="font-heading font-bold text-xs text-orange-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        {tastyLang === 'ar' ? 'لوحة تحكم المسؤول (CRUD)' : 'Admin Dashboard Portal (CRUD)'}
                      </span>
                      <span className="text-[10px] font-mono-code text-zinc-500">
                        JWT: Authorized (Admin)
                      </span>
                    </div>

                    {/* Order Stepper Preview */}
                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 mb-3">
                      <div className="flex justify-between text-[11px] font-mono-code text-zinc-400 mb-2">
                        <span>{tastyLang === 'ar' ? 'الطلب #TB-8492' : 'Order #TB-8492'}</span>
                        <span className="text-emerald-400">
                          {tastyLang === 'ar' ? 'جاري التحضير' : 'In Preparation'}
                        </span>
                      </div>

                      {/* Stepper Steps */}
                      <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-mono-code">
                        <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                          1. {tastyLang === 'ar' ? 'مستلم' : 'Placed'}
                        </div>
                        <div className="p-1 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 animate-pulse">
                          2. {tastyLang === 'ar' ? 'تحضير' : 'Preparing'}
                        </div>
                        <div className="p-1 rounded bg-zinc-800 text-zinc-500">
                          3. {tastyLang === 'ar' ? 'توصيل' : 'Out'}
                        </div>
                        <div className="p-1 rounded bg-zinc-800 text-zinc-500">
                          4. {tastyLang === 'ar' ? 'تم التسليم' : 'Delivered'}
                        </div>
                      </div>
                    </div>

                    {/* Catalog Management Preview */}
                    <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-zinc-300 font-semibold">
                          {tastyLang === 'ar' ? 'إدارة المنتجات والأصناف' : 'Product & Category Inventory'}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-400">
                          24 {tastyLang === 'ar' ? 'منتج نشط' : 'Active Products'}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 space-y-1">
                        <div>• {tastyLang === 'ar' ? 'تخزين الصور سحابياً عبر Cloudinary' : 'Cloudinary Media CDN Image Pipeline'}</div>
                        <div>• {tastyLang === 'ar' ? 'تحديث فوري لحالات الطلبات' : 'Real-time Order Status Transitioning'}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Simulator Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                <span>RTL / LTR: Dynamic CSS switch</span>
                <span>Storage: Persistent Zustand / Redux</span>
                <span>Auth: JWT + Bearer</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
