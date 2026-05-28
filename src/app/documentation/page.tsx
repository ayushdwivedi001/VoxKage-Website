"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sun, Moon, ArrowLeft, PanelLeft } from "lucide-react";
import Link from "next/link";
import { DOC_SECTIONS, DOC_CONTENT } from "./content";

export default function DocumentationPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("architecture");
  const [activeTab, setActiveTab] = useState(0); // Internal tabs
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("voxkage-docs-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  // Reset tab when changing section
  useEffect(() => {
    setActiveTab(0);
  }, [activeSection]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("voxkage-docs-theme", newTheme);
  };

  const isDark = theme === "dark";

  // Dynamic Theme Colors
  const colors = {
    bg: isDark ? "bg-[#02040a]" : "bg-[#C3C2B7]",
    text: isDark ? "text-white" : "text-[#1a1a1a]",
    textMuted: isDark ? "text-white/60" : "text-[#1a1a1a]/60",
    textFaint: isDark ? "text-white/40" : "text-[#1a1a1a]/40",
    border: isDark ? "border-white/5" : "border-black/10",
    borderStrong: isDark ? "border-white/10" : "border-black/20",
    glassBg: isDark ? "bg-[#ffffff05]" : "bg-white/40",
    glassBorder: isDark ? "border-white/5" : "border-white/40",
    hoverBg: isDark ? "hover:bg-white/5" : "hover:bg-black/5",
    tabBg: isDark ? "bg-[#ffffff08]" : "bg-white/50",
    tabActiveBg: isDark ? "bg-white/10" : "bg-white",
  };

  const categories = ["Core Engine", "Capabilities", "Control", "Resources"];
  const currentContent = DOC_CONTENT[activeSection];
  const ContentComponent = currentContent.content;

  return (
    <main className={`relative w-full h-screen ${colors.bg} ${colors.text} overflow-hidden flex transition-colors duration-500 selection:bg-[#295cf1]/30`}>
      
      {/* ── Mobile Drawer Backdrop ── */}
      {docsMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setDocsMenuOpen(false)}
        />
      )}

      {/* ── Left Sidebar (Desktop) / Drawer (Mobile) ── */}
      <aside 
        className={`
          fixed lg:relative z-40 lg:z-10
          top-0 left-0 h-full w-72
          transform transition-transform duration-300 ease-in-out
          ${docsMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          border-r ${colors.border} flex flex-col pt-8 pb-4 shrink-0 overflow-y-auto no-scrollbar
          ${isDark ? "bg-[#02040a]" : "bg-[#C3C2B7]"}
        `}
      >
        <div className="px-8 mb-8 shrink-0">
          <Link 
            href="/" 
            className={`flex items-center gap-2 mb-6 w-fit ${colors.textMuted} hover:text-[#295cf1] transition-colors uppercase tracking-[0.2em] text-xs font-mono`}
          >
            <ArrowLeft size={16} />
            <span>Home</span>
          </Link>
          <h1 className="text-xl font-bold tracking-widest uppercase">VOXKAGE</h1>
          <p className={`text-[10px] ${colors.textFaint} font-mono tracking-widest mt-1 uppercase transition-colors duration-500`}>
            // Documentation
          </p>
        </div>

        <nav className="flex-1 flex flex-col px-4 gap-6 pb-8">
          {categories.map(category => (
            <div key={category} className="flex flex-col gap-1">
              <span className={`px-4 text-[9px] font-bold tracking-[0.2em] uppercase ${colors.textFaint} mb-1`}>
                {category}
              </span>
              {DOC_SECTIONS.filter(s => s.category === category).map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setDocsMenuOpen(false);
                    }}
                    className={`group flex items-center justify-between w-full px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? `bg-[#295cf1]/10 text-[#295cf1] border ${isDark ? 'border-[#295cf1]/20' : 'border-[#295cf1]/30'}` 
                        : `${colors.textMuted} hover:text-[#295cf1] ${colors.hoverBg} border border-transparent`
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <section.icon size={15} className={isActive ? "text-[#295cf1]" : "opacity-70 group-hover:text-[#295cf1] transition-colors"} />
                      <span className="text-xs font-medium tracking-wide uppercase">{section.label}</span>
                    </div>
                    {isActive && <ChevronRight size={14} className="opacity-50" />}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* ── Main Content Area ── */}
      <section className="flex-1 h-full relative flex flex-col overflow-hidden">
        {/* Top Bar for Hamburger & Breadcrumbs */}
        <header className={`h-20 w-full flex items-center justify-between px-4 md:px-10 border-b ${colors.border} shrink-0 z-10 transition-colors duration-500`}>
          
          {/* Left Side: Navigation Controls & Breadcrumbs */}
          <div className="flex items-center flex-1 min-w-0 mr-4">
            {/* Mobile Sidebar Toggle Button */}
            <button
              onClick={() => setDocsMenuOpen(true)}
              className={`lg:hidden flex-shrink-0 p-2 mr-2 -ml-2 rounded-md hover:bg-[#295cf1]/10 hover:text-[#295cf1] transition-colors ${colors.textMuted}`}
              title="Open Navigation"
            >
              <PanelLeft size={18} strokeWidth={1.5} />
            </button>

            <Link 
              href="/" 
              className={`flex items-center flex-shrink-0 gap-2 mr-3 md:mr-6 ${isDark ? 'hover:text-white' : 'hover:text-[#1a1a1a]'} ${colors.textMuted} transition-colors`}
              title="Return to Home"
            >
              <ArrowLeft size={16} />
              <span className="hidden md:inline text-xs font-mono uppercase tracking-wider">Home</span>
            </Link>

            {/* Breadcrumbs - horizontally scrollable on mobile */}
            <div className={`flex items-center gap-2 text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest ${colors.textMuted} transition-colors duration-500 overflow-x-auto no-scrollbar whitespace-nowrap`}>
              <span className="flex-shrink-0">Docs</span>
              <span className="opacity-30 flex-shrink-0">/</span>
              <span className="flex-shrink-0">{DOC_SECTIONS.find(s => s.id === activeSection)?.category}</span>
              <span className="opacity-30 flex-shrink-0">/</span>
              <span className="text-[#295cf1] flex-shrink-0 font-bold">
                {DOC_SECTIONS.find(s => s.id === activeSection)?.label}
              </span>
            </div>
          </div>

          {/* Right Side: Theme & Global Menu */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-12 h-12 rounded-full border ${colors.borderStrong} ${isDark ? 'bg-[#02040a]' : 'bg-[#C3C2B7]'} ${colors.textMuted} hover:text-[#295cf1] hover:border-[#295cf1]/50 hover:bg-[#295cf1]/10 transition-all duration-300`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center justify-center w-12 h-12 rounded-full border ${colors.borderStrong} ${isDark ? 'bg-[#02040a]' : 'bg-[#C3C2B7]'} ${colors.textMuted} hover:text-[#295cf1] hover:border-[#295cf1]/50 hover:bg-[#295cf1]/10 transition-all duration-300`}
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </header>

        {/* Content Viewport */}
        <div className="flex-1 w-full relative p-4 md:p-6 lg:p-10 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`w-full h-full border ${colors.glassBorder} ${colors.glassBg} rounded-2xl p-6 md:p-8 backdrop-blur-md transition-colors duration-500 shadow-xl flex flex-col`}
            >
              {/* Header */}
              <div className="shrink-0 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2 md:mb-3 uppercase">
                  {currentContent.title}
                </h2>
                <p className={`${colors.textMuted} font-light text-xs md:text-sm max-w-3xl transition-colors duration-500`}>
                  {currentContent.description}
                </p>
                <div className="w-16 h-[2px] bg-[#295cf1] mt-4 md:mt-6" />
              </div>
              
              {/* Rich Content Viewport */}
              <div className="flex-1 overflow-y-auto sleek-scrollbar relative pr-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ContentComponent isDark={isDark} />
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Global Hamburger Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed top-[24px] right-[40px] z-50 w-60 rounded-2xl ${isDark ? 'bg-[#09090b]/95' : 'bg-[#e5e4dc]/95'} backdrop-blur-2xl border ${colors.borderStrong} shadow-2xl overflow-hidden pointer-events-auto transition-colors duration-500`}
          >
            <div className={`flex justify-end p-4 border-b ${colors.border}`}>
              <button
                onClick={() => setMenuOpen(false)}
                className={`${colors.textMuted} hover:text-[#295cf1] transition-colors`}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col py-2">
              {[
                { name: "ABOUT", href: "/" },
                { name: "GITHUB", href: "https://github.com/ayushdwivedi001/VoxKage" },
                { name: "DOCUMENTATION", href: "/documentation" },
                { name: "INSTALLATION", href: "/installation" },
                { name: "PLUGINS", href: "/plugins" },
              ].map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                  className={`px-6 py-4 text-xs font-medium tracking-widest ${colors.textMuted} hover:text-[#295cf1] ${colors.hoverBg} transition-all uppercase`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
