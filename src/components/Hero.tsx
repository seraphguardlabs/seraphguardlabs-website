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
      {/* Desktop Background Image with elegant overlay masks */}
      <div className="absolute inset-0 hidden lg:block opacity-50 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        />
        {/* Gradients to fade out the image edges and ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
      </div>

      {/* Background Mesh Gradients exactly from Frosted Glass Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mobile Hero Image (visible only on mobile/tablet, positioned above texts) */}
          <div className="block lg:hidden w-full max-w-xl mx-auto relative group">
            {/* Ambient background glow behind mobile image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-xl rounded-2xl pointer-events-none opacity-80" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/55 bg-slate-900/50">
              <img
                src="/heromobile.png"
                alt="SeraphGuard Labs Security"
                className="w-full h-auto object-cover"
              />
              {/* Blending overlay masks to merge the image edges smoothly with the dark background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/30 via-transparent to-[#020617]/30 pointer-events-none" />
            </div>
          </div>

          {/* Left Column (8 cols): Hero Heading, Subtext, Buttons */}
          <div className="lg:col-span-8 flex flex-col items-start text-left gap-6">

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
                Our Initiatives
                <ArrowRight className="w-5 h-5 text-blue-100 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
