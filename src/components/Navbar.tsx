"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // 1. Détection du scroll global
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);
      
      if (currentScrollY < 50) {
        setActiveTab("Home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Détection dynamique de la section active
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          const matchedLink = navLinks.find(
            (link) => link.href === `#${sectionId}`
          );
          if (matchedLink && window.scrollY >= 50) {
            setActiveTab(matchedLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const targetId = link.href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string,
    href: string
  ) => {
    setActiveTab(name);
    setMobileMenuOpen(false);

    if (name === "Home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const activeIndex = navLinks.findIndex((link) => link.name === activeTab);

  const itemSpacing = 50;
  const yCenter = 250;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 pointer-events-none">
      {/* Alignement strict aux bords gauche et droit */}
      <div className="w-full px-6 sm:px-10 lg:px-12">
        <div className="relative flex items-center justify-between w-full">
          
          {/* LOGO HEXAGONE & BREADCRUMB DYNAMIQUE (Extrême Gauche) */}
          <div
            className={`transition-all duration-300 ease-in-out pointer-events-auto ${
              scrolled
                ? "opacity-0 -translate-x-10 pointer-events-none"
                : "opacity-100 translate-x-0"
            }`}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-11 w-11 flex items-center justify-center">
                <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full fill-teal-400/20 stroke-teal-400 stroke-[4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                  </svg>
                </div>

                <div className="relative h-full w-full transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full fill-[#070911]/90 stroke-teal-400 stroke-[5] transition-all duration-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                  >
                    <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center font-mono text-base font-bold text-teal-300 transition-colors duration-300 group-hover:text-white">
                    M
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wider">
                <span className="text-white transition group-hover:text-teal-300">
                  MOHAMMED
                </span>
                <span className="text-teal-500/60">/</span>
                <span className="text-teal-400 uppercase tracking-widest text-[11px] sm:text-xs">
                  {activeTab}
                </span>
              </div>
            </Link>
          </div>

          {/* MENU EN HAUT AVEC RESUME BOUTON (Extrême Droite) */}
          {!scrolled && (
            <nav className="hidden md:flex items-center gap-10 sm:gap-20 font-mono text-xs sm:text-sm pointer-events-auto">              <div className="flex items-center gap-10 sm:gap-12">
                {navLinks.map((link) => {
                  const isActive = activeTab === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.name, link.href)}
                      className={`relative py-1 transition-colors duration-200 ${
                        isActive
                          ? "text-teal-300 font-semibold"
                          : "text-gray-400 hover:text-teal-300"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* BOUTON RESUME AVEC EFFET DE DÉCALAGE (OFFSET 3D) */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-xs font-mono"
              >
                {/* Arrière-plan décalé au survol/clic */}
                <div className="absolute inset-0 rounded-md bg-teal-400/20 border border-teal-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100 group-active:translate-x-0.5 group-active:translate-y-0.5" />

                {/* Boîte principale du bouton Resume */}
                <div className="relative rounded-md border border-teal-400/80 bg-[#070911]/90 px-4 py-2 font-medium text-teal-300 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-200 group-active:translate-x-0 group-active:translate-y-0">
                  Resume
                </div>
              </a>
            </nav>
          )}

          {/* MENU VERTICAL GLISSANT */}
          <div
            className={`hidden md:block fixed left-10 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-500 ease-in-out ${
              scrolled
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20 pointer-events-none"
            }`}
            style={{ width: "200px", height: `${yCenter * 2}px` }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-teal-400 to-transparent shadow-[0_0_12px_rgba(45,212,191,0.8)]" />

            <div className="relative h-full w-full">
              {navLinks.map((link, index) => {
                const isActive = activeTab === link.name;
                const relativeIndex = index - (activeIndex >= 0 ? activeIndex : 0);
                const y = yCenter + relativeIndex * itemSpacing;

                return (
                  <div
                    key={link.name}
                    className="absolute left-4 -translate-y-1/2 transition-all duration-500 ease-out"
                    style={{ top: `${y}px` }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.name, link.href)}
                      className={`block rounded-full px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md whitespace-nowrap transition-all duration-300 ${
                        isActive
                          ? "bg-teal-500 text-slate-950 shadow-xl shadow-teal-500/50 ring-2 ring-teal-300 scale-110 opacity-100 blur-0 z-10"
                          : "bg-[#070911]/60 text-gray-400 hover:text-white border border-white/10 hover:border-teal-500/50 opacity-40 blur-[1px] hover:blur-0 hover:opacity-90 scale-90"
                      }`}
                    >
                      {link.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HAMBURGER BUTTON (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg border border-white/10 bg-white/[0.05] p-2 text-gray-300 hover:text-white focus:outline-none pointer-events-auto ml-auto"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#070911]/95 px-6 py-6 backdrop-blur-2xl pointer-events-auto mt-2">
          <div className="flex flex-col space-y-4 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.name, link.href)}
                className={`text-sm font-medium transition ${
                  activeTab === link.name ? "text-teal-400 font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-teal-400 bg-teal-400/10 px-4 py-2.5 text-sm font-medium text-teal-300"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}