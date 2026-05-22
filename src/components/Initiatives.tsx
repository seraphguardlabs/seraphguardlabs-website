import React, { useState } from "react";
import {
  Baby,
  Gamepad2,
  Shield,
  Activity,
  CheckCircle,
  Cpu,
  Lock,
  Zap,
} from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Initiatives() {
  const [activeTab, setActiveTab] = useState<string>("guardian-ai");
  const initiatives = SERAPH_DATA.initiatives.list;

  const currentInitiative = initiatives.find((inf) => inf.id === activeTab) || initiatives[0];

  // Map initiatives to icons
  const getIcon = (id: string, className: string) => {
    switch (id) {
      case "guardian-ai":
        return <Baby className={className} />;
      case "seraph-play":
        return <Gamepad2 className={className} />;
      case "guardian-x":
        return <Shield className={className} />;
      default:
        return <Shield className={className} />;
    }
  };

  // Map initiatives to images
  const getInitiativeImage = (id: string) => {
    switch (id) {
      case "guardian-ai":
        return "/guardienai.png"; // Child/family safety tech
      case "seraph-play":
        return "/seraph-play.webp"; // Wellbeing/Movement
      case "guardian-x":
        return "/unsplash-init-1.webp"; // Digital Security
      default:
        return "/unsplash-init-2.webp";
    }
  };

  return (
    <section id="initiatives" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-[30%] right-0 translate-x-1/3 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/3 w-[450px] h-[450px] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {SERAPH_DATA.initiatives.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Discover our three primary research and development streams designed around child protection, human movement wellness, and secure personal devices.
          </p>
        </div>

        {/* Dashboard Grid Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Docks Selection Buttons (Lg: 4 Columns) */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col gap-3 justify-center">
            {initiatives.map((initiative) => {
              const isActive = initiative.id === activeTab;
              return (
                <button
                  key={initiative.id}
                  id={`tab-button-${initiative.id}`}
                  onClick={() => setActiveTab(initiative.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left border transition-all duration-350 cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-white/20 backdrop-blur-md shadow-xl shadow-blue-500/5 scale-[1.01]"
                      : "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/20 border-blue-450 text-blue-405 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        : "bg-white/5 border-white/10 text-slate-400"
                    }`}
                  >
                    {getIcon(initiative.id, "w-6 h-6")}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-display text-base font-bold transition-colors ${isActive ? "text-white" : "text-slate-400"}`}>
                        {initiative.name}
                      </span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-450 animate-pulse" />}
                    </div>
                    <span className="font-sans text-xs text-slate-500 line-clamp-1 mt-1 font-light">
                      {initiative.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Panel Container (Lg: 8 Columns) */}
          <div className="lg:col-span-12 xl:col-span-8 flex flex-col">
            <div className="flex-1 p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden relative flex flex-col justify-between gap-8">
              {/* Highlight background lines */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-blue-500/5 to-transparent opacity-30 pointer-events-none rounded-full blur-3xl" />

              {/* Core Descriptions */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {currentInitiative.name}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-blue-300 block font-medium mt-1">
                    {currentInitiative.tagline}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {currentInitiative.description}
                </p>
              </div>

              {/* Focus areas & Image Container split inside initiative page */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-white/10 pt-8 mt-2">
                
                {/* Visual focus areas checklist */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#94a3b8] block mb-2">Research Focus Areas</span>
                    <div className="space-y-2.5">
                      {currentInitiative.focusAreas.map((area, index) => (
                        <div key={index} className="flex items-start gap-2.5 group">
                          <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-slate-300 font-normal m-0 group-hover:text-white transition-colors">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visit Button / Status Badge */}
                  {currentInitiative.id === "guardian-ai" ? (
                    <a
                      href="https://www.guardienai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-blue-500/20"
                    >
                      Visit Guardien AI
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 animate-pulse" />
                      In Development
                    </div>
                  )}
                </div>

                {/* Layout Optimized Image Container */}
                <div key={currentInitiative.id} className="relative w-full aspect-square md:aspect-[4/5] rounded-2xl border border-white/10 overflow-hidden group shadow-2xl animate-fade-in shadow-black/50">
                  {/* Floating Top Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 backdrop-blur border border-white/10 font-mono text-[9px] uppercase tracking-wider text-white z-10 hidden sm:block">
                    {currentInitiative.name}
                  </div>
                  
                  <img
                    src={getInitiativeImage(currentInitiative.id)}
                    alt={currentInitiative.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-lighten"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
