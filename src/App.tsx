import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const WhyWeExist = React.lazy(() => import("./components/WhyWeExist"));
const Initiatives = React.lazy(() => import("./components/Initiatives"));
const Vision = React.lazy(() => import("./components/Vision"));
const Principles = React.lazy(() => import("./components/Principles"));
const Team = React.lazy(() => import("./components/Team"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

export default function App() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="website-root-container" className="min-h-screen bg-[#040815] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* 1. Sticky Navigation Header */}
      <Navbar onContactClick={() => handleScrollTo("#contact")} />

      {/* 2. Visual Content Roadmap Blocks */}
      <main id="main-content-flow">
        
        {/* Hero Landing Stage */}
        <Hero
          onExploreClick={() => handleScrollTo("#initiatives")}
          onContactClick={() => handleScrollTo("#contact")}
        />

        <Suspense fallback={<div className="h-32"></div>}>
          {/* Foundations Pillar */}
          <WhyWeExist />

          {/* Flagship Stream Selector */}
          <Initiatives />

          {/* Strategic Roadmapping Pillar */}
          <Vision />

          {/* Ethical Engineering Directives */}
          <Principles />

          {/* Leadership Profile */}
          <Team />

          {/* Interactive Ingress Portal */}
          <Contact />
        </Suspense>

      </main>

      {/* 3. Trademark Institutional Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
