import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyWeExist from "./components/WhyWeExist";
import Initiatives from "./components/Initiatives";
import Vision from "./components/Vision";
import Principles from "./components/Principles";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

      </main>

      {/* 3. Trademark Institutional Footer */}
      <Footer />
    </div>
  );
}
