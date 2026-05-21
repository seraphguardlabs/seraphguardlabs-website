import React from "react";
import { UserCheck, Compass, Shield, EyeOff, Hourglass, Landmark } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Principles() {
  const principlesList = SERAPH_DATA.principles.list;

  const getPrincipleProperties = (index: number) => {
    switch (index) {
      case 0: // Human First
        return {
          icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
          bgColor: "hover:shadow-emerald-500/5",
          borderColor: "hover:border-emerald-500/35",
          glowColor: "bg-emerald-400/5",
        };
      case 1: // Ethical by Design
        return {
          icon: <Compass className="w-6 h-6 text-indigo-400" />,
          bgColor: "hover:shadow-indigo-500/5",
          borderColor: "hover:border-indigo-500/35",
          glowColor: "bg-indigo-400/5",
        };
      case 2: // Protection Through Intelligence
        return {
          icon: <Shield className="w-6 h-6 text-blue-400" />,
          bgColor: "hover:shadow-blue-500/5",
          borderColor: "hover:border-blue-500/40",
          glowColor: "bg-blue-400/5",
        };
      case 3: // Privacy Matters
        return {
          icon: <EyeOff className="w-6 h-6 text-amber-400" />,
          bgColor: "hover:shadow-amber-500/5",
          borderColor: "hover:border-amber-500/35",
          glowColor: "bg-amber-400/5",
        };
      case 4: // Long-Term Thinking
        return {
          icon: <Hourglass className="w-6 h-6 text-cyan-400" />,
          bgColor: "hover:shadow-cyan-500/5",
          borderColor: "hover:border-cyan-500/35",
          glowColor: "bg-cyan-400/5",
        };
      default:
        return {
          icon: <Shield className="w-6 h-6 text-blue-400" />,
          bgColor: "hover:shadow-blue-500/5",
          borderColor: "hover:border-blue-500/35",
          glowColor: "bg-blue-400/5",
        };
    }
  };

  return (
    <section id="principles" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-[10%] left-[80%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
            <Landmark className="w-3.5 h-3.5 text-blue-400" />
            GOVERNING SCIENTIFIC ETHIC
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {SERAPH_DATA.principles.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto">
            Our engineering process complies with high-performance standards centered completely on human protection, safety metrics, and ethical core alignment.
          </p>
        </div>

        {/* Custom Bento Grid Layout of principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-stretch">
          
          {principlesList.map((principle, index) => {
            const props = getPrincipleProperties(index);
            // Decide card spans to create a true bento grid rhythm:
            // First 2 items get column span 3. Next 3 items get column span 2. This perfectly fills the 6 horizontal chunks on LG screens.
            const gridSpanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <div
                key={index}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 relative group overflow-hidden ${gridSpanClass} ${props.borderColor} ${props.bgColor}`}
              >
                {/* Visual Glow Ambient Background Bubble */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl ${props.glowColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 duration-350 transition-all flex items-center justify-center">
                    {props.icon}
                  </div>

                  {/* Text copies */}
                  <div className="space-y-2.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Aesthetic index tag */}
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between font-mono text-[9px] text-slate-500 select-none">
                  <span>METRIC CODE 0{index + 1}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">ACTIVE DIRECTIVE</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
