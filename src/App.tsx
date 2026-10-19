import React, { useState, useEffect } from "react";
import { StarfieldCanvas } from "./components/StarfieldCanvas";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { MembersSection } from "./components/MembersSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["home", "about", "members", "projects"];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Cosmic Starfield & Atmospheric Canvas */}
      <StarfieldCanvas />

      {/* Strict Top Bar Contract Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onExploreProjects={() => scrollToSection("projects")}
          onExploreMembers={() => scrollToSection("members")}
        />

        <AboutSection />

        <MembersSection />

        <ProjectsSection />
      </main>

      {/* Site Footer */}
      <Footer onScrollToTop={handleScrollToTop} />
    </div>
  );
}
