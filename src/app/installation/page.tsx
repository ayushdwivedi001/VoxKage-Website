"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Menu, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import GradientBlinds from "@/components/GradientBlinds";

export default function InstallationPage() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds loading to match the gradient passing through
    return () => clearTimeout(timer);
  }, []);

  const fullInstallCommand = `# Clone the repository
git clone https://github.com/ayushdwivedi001/VoxKage.git
cd VoxKage

# Initialize the virtual environment
python -m venv venv
# Windows:
.\\venv\\Scripts\\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies and link the package
pip install -r requirements.txt
pip install -e .`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullInstallCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative w-full h-screen bg-[#09090b] text-white overflow-hidden flex items-center justify-center selection:bg-[#295cf1]/30">
      
      {/* ── Seamless Loading Overlay ────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="absolute inset-0 z-50 flex items-center justify-center bg-[#09090b]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter select-none flex items-center justify-center">
              <span className="text-white/5 relative z-0 pr-8 pl-4">V</span>
              <motion.span 
                className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-t from-[#020617] via-[#1e3a8a] to-[#3b82f6] z-10 pr-8 pl-4"
                initial={{ clipPath: "inset(100% -20% 0 -20%)" }}
                animate={{ clipPath: "inset(0% -20% 0 -20%)" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                V
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Background Effect ───────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <GradientBlinds
            gradientColors={['#0ba0eb', '#e12e43']}
            angle={26}
            noise={0.5}
            blindCount={16}
            blindMinWidth={60}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.5}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />
        </div>
      </div>

      {/* ── Fixed Navigation ────────────────────────────── */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 z-40 pointer-events-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-mono"
        >
          <ArrowLeft size={16} />
          <span className="hidden md:inline">Home</span>
        </Link>
      </div>

      <div className="absolute top-6 right-6 md:top-10 md:right-12 z-40 pointer-events-auto flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white hover:text-white/70 transition-colors bg-black/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-2 md:p-0 rounded-lg md:rounded-none"
        >
          <Menu size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Main Content Area ───────────────────────────── */}
      <div className="z-10 w-full max-w-3xl px-4 md:px-8 flex flex-col items-center text-center mt-16 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 md:gap-8 bg-black/40 backdrop-blur-2xl p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden w-full"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white">
              INSTALLATION
            </h1>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-lg mx-auto font-light">
              VoxKage will soon be available as a <strong className="text-white font-medium">PIPX package</strong> for a seamless one-line global installation. Until then, you can clone the repository directly to get started.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3 mt-2">
            <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-bold self-start pl-1 md:pl-2">
              MANUAL INSTALLATION
            </span>
            <div className="flex w-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-inner group transition-colors hover:border-white/20 relative">
              <pre className="p-4 md:p-5 pr-16 md:pr-20 flex-1 text-left font-mono text-[11px] md:text-[12px] leading-[1.6] text-[#e5e4dc] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] whitespace-pre">
                {fullInstallCommand.split('\n').map((line, i) => {
                  if (line.startsWith('#')) return <span key={i} className="text-white/30">{line}{'\n'}</span>;
                  if (line.trim() === '') return <span key={i}>{'\n'}</span>;
                  return <span key={i} className="text-[#295cf1] mix-blend-lighten opacity-90">{line}{'\n'}</span>;
                })}
              </pre>
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center shrink-0 backdrop-blur-md border border-white/5"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} className="text-white/60 group-hover:text-white" />
                )}
              </button>
            </div>
          </div>

          <p className="text-white/40 text-[13px] font-light mt-1">
            For more installation guides, checkout our official <a href="https://github.com/ayushdwivedi001/VoxKage" target="_blank" rel="noopener noreferrer" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#295cf1] to-blue-400">VoxKage</a> GitHub Repository.
          </p>
        </motion.div>
      </div>

      {/* ── Hamburger Menu Overlay ──────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[36px] right-[36px] z-50 w-60 rounded-2xl bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="flex justify-end p-4 border-b border-white/5">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
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
                  className="px-6 py-4 text-xs font-medium tracking-widest text-white/70 hover:text-white hover:bg-white/5 transition-all uppercase"
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
