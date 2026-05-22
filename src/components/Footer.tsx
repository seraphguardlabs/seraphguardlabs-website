import React from "react";
import { ArrowUp } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Footer() {
  const handleScrollTop = () => {
    const element = document.querySelector("#hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="app-footer" className="relative bg-[#020617] border-t border-white/10 py-12 pb-16 text-slate-400 font-sans z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-white/10">
          
          {/* Brand Left Columns */}
          <div className="space-y-3.5 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-32 h-auto rounded-lg overflow-hidden">
                <img src="/logo.webp" alt="SeraphGuard Labs" width={128} height={32} loading="lazy" className="w-full h-auto object-contain" />
              </div>
            </div>
            <p className="text-sm text-slate-405 font-light leading-relaxed">
              {SERAPH_DATA.footer.tagline}
            </p>
          </div>

          {/* Institutional Links Column / Contact quick connector */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a
              href="#why-exist"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Why We Exist
            </a>
            <a
              href="#initiatives"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Initiatives
            </a>
            <a
              href="#principles"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Principles
            </a>
            <a
              href="#team"
              className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-xs font-medium text-slate-450 hover:text-white transition-colors"
            >
              Engagement Gateway
            </a>
          </div>

        </div>

        {/* Copyrights and Back to top layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-505">
          <div className="flex items-center gap-1">
            <span>{SERAPH_DATA.footer.copyright}</span>
          </div>

          {/* Elegant Back to Top widget */}
          <button
            id="footer-back-to-top"
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all text-xs cursor-pointer"
            title="Scroll Back To Top"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
