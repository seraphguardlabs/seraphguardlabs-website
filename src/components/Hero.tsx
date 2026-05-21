import React from "react";
import { ArrowRight, FlameKindling, ShieldAlert, Sparkles, Network } from "lucide-react";
import { SERAPH_DATA } from "../data";

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onExploreClick, onContactClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#020617]"
    >
      {/* Background Mesh Gradients exactly from Frosted Glass Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Hero Heading, Subtext, Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            
            {/* Elegant Top Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-slate-800 text-blue-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md shadow-black/40"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
              </span>
              <span>AI PROTECTION FOR TOMORROW'S GENERATIONS</span>
            </div>

            {/* Main Typography Display */}
            <h1
              id="hero-title"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Protecting humanity in the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-450 via-cyan-400 to-blue-350">
                digital age.
              </span>
            </h1>

            {/* High-Polished Body Description */}
            <p
              id="hero-subheadline"
              className="font-sans text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light"
            >
              {SERAPH_DATA.hero.subheadline}
            </p>

            {/* Actions Panel */}
            <div
              id="hero-ctas"
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2"
            >
              <button
                id="hero-cta-primary"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/40 hover:scale-[1.02] transform duration-200 group cursor-pointer"
              >
                {SERAPH_DATA.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 text-blue-100 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md font-semibold hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                {SERAPH_DATA.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Solid Quote Card */}
          <div className="lg:col-span-5 relative w-full mt-10 lg:mt-0">
            {/* Ambient Background Glow behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-transparent blur-2xl pointer-events-none rounded-full" />
            
            {/* Solid design component */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#080d1e] border border-slate-800 shadow-2xl shadow-black/50">
              <p className="italic text-base sm:text-lg lg:text-xl text-blue-100/90 font-serif mb-6 sm:mb-8 leading-relaxed">
                {SERAPH_DATA.whyWeExist.quote}
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="shrink-0 w-12 h-12 rounded-full border border-white/15 shadow-inner flex items-center justify-center text-xs font-mono font-bold text-slate-400 select-none overflow-hidden relative bg-[#091024]">
                  <img src="/nevin.jpg" alt="Nevin Robert" className="w-full h-full object-cover hidden" onLoad={(e) => {
                    e.currentTarget.classList.remove('hidden');
                    e.currentTarget.nextElementSibling?.classList.add('hidden');
                  }} />
                  <span className="absolute inset-0 flex items-center justify-center">NR</span>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-sm sm:text-base truncate">Nevin Robert</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mt-0.5 truncate">Founder & Director</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
