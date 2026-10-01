import React, { useState } from 'react';
import { Download, ArrowRight, MapPin, Terminal, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CODE_SNIPPETS = [
  {
    title: 'segmenter.py',
    lang: 'Python / ML',
    code: `# HuBMAP Microvasculature Inference Engine
@app.route('/api/segment', methods=['POST'])
def segment_tissue():
    image_file = request.files['image']
    processed_tensor = normalize_input(image_file)
    
    # 4 Deep Learning Architectures
    model = load_architecture(model_name="Custom_UNet")
    pred_mask = model.predict(processed_tensor)
    iou = compute_iou(pred_mask, threshold=0.50)
    dice = compute_dice(pred_mask, threshold=0.50)
    
    return jsonify({ "iou_score": 0.864, "dice_score": 0.921 })`
  },
  {
    title: 'maximo_db2.sql',
    lang: 'IBM Maximo / SQL',
    code: `-- Enterprise Work Order Automation & Escalation
CREATE OR REPLACE TRIGGER maximo.trg_escalate_critical_wo
AFTER UPDATE OF status ON maximo.workorder
REFERENCING NEW AS n
FOR EACH ROW
WHEN (n.status = 'APPR' AND n.priority = 1)
BEGIN ATOMIC
    INSERT INTO maximo.wfnotification (wonum, action, notified_at)
    VALUES (n.wonum, 'DISPATCH_CREW', CURRENT_TIMESTAMP);
    CALL maximo.update_sla_timer(n.wonum);
END;`
  },
  {
    title: 'bilingual_order.ts',
    lang: 'Node.js / Express',
    code: `// TastyBite Bilingual Checkout & Order Pipeline
router.post('/checkout', verifyJWT, async (req, res) => {
    const { items, language, address, paymentMethod } = req.body;
    const validatedCart = await calculateCartSubtotal(items);
    
    const order = await Order.create({
        user: req.userId,
        items: validatedCart.items,
        locale: language, // 'ar' RTL | 'en' LTR
        status: 'PREPARING',
        totalPrice: validatedCart.total
    });
    return res.status(201).json({ success: true, orderId: order._id });
});`
  }
];

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Info & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-xs font-mono-code text-cyan-600 dark:text-cyan-400 font-semibold mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>SOFTWARE ENGINEER | FULL-STACK DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-900 dark:text-[#F3F4F6] leading-[1.12] mb-6">
              Building digital experiences that{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
                solve real-world problems.
              </span>
            </h1>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl mb-10 py-4 px-5 rounded-2xl bg-white/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xs">
              {personalInfo.highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-heading font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100">
                    {item.value}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions: Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-cyan-600 dark:hover:bg-cyan-500 font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_-3px_rgba(6,182,212,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium text-sm transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="Ahmed_Maher_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium text-sm transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 group"
                title="Download Ahmed Maher's Official PDF Curriculum Vitae"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick meta footer */}
            <div className="flex items-center gap-4 mt-8 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Open to Opportunities
              </span>
            </div>

          </div>

          {/* Right Column: Refined Developer Composition */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Developer Window Card */}
            <div className="w-full rounded-2xl bg-white dark:bg-[#16171D] border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/5">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="ml-2 flex items-center gap-1.5 text-xs font-mono-code text-zinc-500 dark:text-zinc-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                    <span>ahmed-maher.dev</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono-code text-zinc-500 hover:text-cyan-500 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Snippet Tabs */}
              <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40 px-2 pt-2 gap-1 overflow-x-auto">
                {CODE_SNIPPETS.map((snip, idx) => (
                  <button
                    key={snip.title}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 text-xs font-mono-code rounded-t-lg transition-colors border-t border-x ${
                      activeTab === idx
                        ? 'bg-white dark:bg-[#16171D] text-cyan-600 dark:text-cyan-400 border-zinc-200 dark:border-zinc-800 font-semibold'
                        : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    {snip.title}
                  </button>
                ))}
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 bg-zinc-950 font-mono-code text-xs text-zinc-300 leading-relaxed overflow-x-auto min-h-[220px]">
                <pre className="text-zinc-300">
                  <code>{CODE_SNIPPETS[activeTab].code}</code>
                </pre>
              </div>

              {/* Window Footer Card with Ahmed's photo & info */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/70 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={personalInfo.photoUrl}
                      alt="Ahmed Maher"
                      className="w-12 h-12 rounded-xl object-cover border border-zinc-300 dark:border-zinc-700 shadow-sm"
                      onError={(e) => {
                        // Fallback monogram if asset fails
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      Ahmed Maher
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium">
                        3.94 GPA
                      </span>
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      Helwan Univ. CS &amp; AI Graduate
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end text-[11px] font-mono-code text-zinc-500 dark:text-zinc-400">
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">B.Sc. Software Eng.</span>
                  <span>Rank #8 / Cohort</span>
                </div>
              </div>

            </div>

            {/* Tech Stack Pills beneath */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 px-2">
              {['Python', 'Flask', 'React.js', 'Node.js', 'Express.js', 'IBM Maximo', 'IBM Db2', 'TensorFlow'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono-code rounded-lg bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-300/60 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono-code tracking-wider uppercase">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex items-start justify-center p-1 group-hover:border-cyan-500 transition-colors">
              <div className="w-1 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 group-hover:bg-cyan-500 animate-bounce transition-colors" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
