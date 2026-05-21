import React from "react";
import { Users, Linkedin, Briefcase, Award, GraduationCap } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Team() {
  const member = SERAPH_DATA.team.list[0];

  return (
    <section id="team" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden border-t border-white/10">
      {/* Background visual circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and top header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            ORGANIZATION LEADERSHIP
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {SERAPH_DATA.team.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-400 font-light max-w-2xl mx-auto">
            SeraphGuard Labs is led by operators committed to building ethical, secure environments designed around future human interests.
          </p>
        </div>

        {/* Executive Profile Card Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/30 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group">
            {/* Ambient background lines */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-gradient-to-t from-blue-500/5 to-transparent opacity-25 pointer-events-none rounded-full blur-3xl" />

            {/* Profile Avatar (Abstract glowing design matching dark themed style) */}
            <div className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/15 border border-white/10 flex items-center justify-center p-1 group-hover:border-blue-500/30 transition-colors duration-300">
              <div className="w-full h-full rounded-xl bg-[#091024]/60 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/nevin.jpg" 
                  alt="Nevin Robert" 
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform hidden"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove('hidden');
                    e.currentTarget.nextElementSibling?.classList.add('hidden');
                  }}
                />
                {/* Visual geometric silhouette representing executive (fallback) */}
                <svg viewBox="0 0 100 100" className="w-20 h-20 text-slate-500 fill-current opacity-70 group-hover:scale-105 duration-500 transition-transform">
                  <path d="M50 50c12.15 0 22-9.85 22-22s-9.85-22-22-22-22 9.85-22 22 9.85 22 22 22zm0 8c-18.78 0-34 15.22-34 34v4h68v-4c0-18.78-15.22-34-34-34z" />
                </svg>
                {/* Glowing ring */}
                <div className="absolute inset-0 border border-blue-400/10 rounded-xl" />
              </div>

              {/* Little Floating Badge */}
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-lg">
                <Linkedin className="w-4 h-4 fill-current text-white" />
              </div>
            </div>

            {/* Profile Details Block */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="space-y-1.5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {member.name}
                  </h3>
                  <a
                    id="team-linkedin-link"
                    href="https://www.linkedin.com/in/nevin-robert/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white font-mono uppercase tracking-wider self-center md:self-auto group"
                  >
                    LinkedIn Profile
                    <Linkedin className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
                <p className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-300 font-mono">
                  {member.role}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {member.bio}
              </p>

              {/* Highlights cards to enrich profile layout and give corporate context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3 text-left">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-405 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block">PREVIOUS ROLES</span>
                    <span className="text-xs font-semibold text-slate-300">Chief of Staff, Nosh Robotics</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block">KEY FOCUS</span>
                    <span className="text-xs font-semibold text-slate-300">Venture Capitals & Seed Operator</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
