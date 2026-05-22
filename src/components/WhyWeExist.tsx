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
                src="/why-we-exist.webp"
                alt="Technology intersecting with humanity"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Decorative Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
              

            </div>
          </div>

        </div>

        {/* Founder's Quote Card placed elegantly below the content grid */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto relative group">
          {/* Ambient Background Glow behind Card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-indigo-650/5 to-cyan-600/10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
          
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#080d1e]/80 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Elegant Large Quotation Mark Icon */}
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-serif text-4xl select-none">
              “
            </div>

            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                {SERAPH_DATA.whyWeExist.quote.split("\n\n").map((para, idx) => (
                  <p key={idx} className="italic text-base sm:text-lg lg:text-xl text-blue-100/90 font-serif leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="shrink-0 w-12 h-12 rounded-full border border-white/15 shadow-inner flex items-center justify-center text-xs font-mono font-bold text-slate-400 select-none overflow-hidden relative bg-[#091024]">
                  <img 
                    src="/nevin.jpg" 
                    alt="Nevin Robert" 
                    width={48} 
                    height={48} 
                    loading="lazy" 
                    className="w-full h-full object-cover hidden" 
                    onLoad={(e) => {
                      e.currentTarget.classList.remove('hidden');
                      e.currentTarget.nextElementSibling?.classList.add('hidden');
                    }} 
                  />
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
