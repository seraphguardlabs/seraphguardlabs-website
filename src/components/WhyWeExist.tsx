import React from "react";
import { HelpCircle, Quote, Compass } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function WhyWeExist() {
  const content = SERAPH_DATA.whyWeExist.content;

  return (
    <section id="why-exist" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden border-t border-white/10">
      {/* Glow Blur Backdrop */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Editorial Text (Lg: 7 Columns) */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                FOUNDATIONAL MOTIVATION
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {SERAPH_DATA.whyWeExist.title}
              </h2>
            </div>

            {/* Editorial Content Layout with Large Leading Paragraph and balanced typography */}
            <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed font-light">
              <p className="font-medium text-white text-lg sm:text-xl border-l-2 border-blue-400 pl-4 py-1">
                {content[0]}
              </p>
              
              <p>{content[1]}</p>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md my-4 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mt-1">
                  <Compass className="w-4 h-4 text-cyan-450" />
                </div>
                <p className="text-sm sm:text-base text-slate-300 font-normal m-0 leading-relaxed">
                  {content[2]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layout-Optimized Image Container (Lg: 5 Columns) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-28">
            <div className="relative w-full aspect-square sm:aspect-[4/3] xl:aspect-square rounded-3xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl shadow-black/40 group">
              {/* Image Placeholder Background / Unsplash Image */}
              <img 
                src="/why-we-exist.jpeg"
                alt="Technology intersecting with humanity"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Decorative Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
              
              {/* Content overlay inside image container */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  AI Alignment
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
