import React from "react";
import { Eye, Network, ShieldCheck, Compass } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Vision() {
  const content = SERAPH_DATA.vision.content;

  // Visual roadmap points that map the vision text directly to a neat corporate structure
  const visionMilestones = [
    {
      step: "Phase 1",
      icon: <Network className="w-5 h-5 text-blue-400" />,
      title: "Interactive Impact",
      description: "AI reshaping communication, education, relationships, security, and human development.",
    },
    {
      step: "Phase 2",
      icon: <Compass className="w-5 h-5 text-cyan-450" />,
      title: "Adaptation Steering",
      description: "Steering the digital environment toward safety, ethics, and human growth alignment.",
    },
    {
      step: "Phase 3",
      icon: <ShieldCheck className="w-5 h-5 text-blue-405" />,
      title: "Trustworthy Infrastructure",
      description: "Building trustworthy defense layers, securing human dignity across standard networks.",
    },
  ];

  return (
    <section id="vision" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden border-y border-white/10">
      {/* Visual background grid and gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Large displays, Vision Title & Statements (6 Columns) */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                OUR CORE STRATEGIC VISION
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Building the Infrastructure for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-405 to-blue-350">
                  Human Protection in the AI Era
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 font-sans text-base leading-relaxed font-light">
              <p className="font-medium text-white text-lg sm:text-xl">
                {content[0]}
              </p>
              
              <p className="border-l-2 border-blue-500 pl-4 py-0.5 text-slate-400 italic">
                {content[1]}
              </p>

              <p>
                {content[2]}
              </p>
            </div>

            {/* Layout-Optimized Image Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-xl mt-8">
              <img 
                src="/unsplash-vision.webp" 
                alt="Digital Infrastructure" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-lighten hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest">Trust Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Right Side: Timeline Roadmap representation (6 Columns) */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-4 relative">
            
            {visionMilestones.map((milestone, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual hover corner accent */}
                <span className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Left side bullet step badge */}
                <div className="flex items-center gap-3.5 md:flex-col md:items-center md:gap-2 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/5 transition-all">
                    {milestone.icon}
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-500 tracking-wider uppercase md:mt-1">
                    {milestone.step}
                  </span>
                </div>

                {/* Details layout */}
                <div className="flex-1 space-y-1 relative z-10">
                  <h4 className="font-display text-base font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
