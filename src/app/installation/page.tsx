"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Copy, 
  Check, 
  Menu, 
  X, 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  Layers, 
  Globe, 
  Eye, 
  Activity,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import GradientBlinds from "@/components/GradientBlinds";

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState<"pipx" | "manual">("pipx");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2s smooth loading screen transition
    return () => clearTimeout(timer);
  }, []);

  const pipxInstallCommands = `# Install pipx globally (if you don't have it)
pip install pipx
pipx ensurepath

# Install VoxKage globally via pipx
pipx install voxkage

# Run setup and link CLI environments
voxkage init

# Install modular capability packs (highly recommended)
voxkage install full`;

  const manualInstallCommands = `# Clone the repository
git clone https://github.com/ayushdwivedi001/VoxKage.git
cd VoxKage

# Initialize the virtual environment
python -m venv venv
# Windows:
.\\venv\\Scripts\\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies and link the package local
pip install -r requirements.txt
pip install -e .`;

  const handleCopy = () => {
    const textToCopy = activeTab === "pipx" ? pipxInstallCommands : manualInstallCommands;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main 
      className="relative w-full min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-start py-16 md:py-24 selection:bg-[#295cf1]/30"
      style={{ overflowY: loading ? "hidden" : "auto", height: loading ? "100vh" : "auto" }}
    >
      
      {/* ── Seamless Loading Overlay ────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] w-screen h-screen overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="relative text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter select-none flex items-center justify-center">
              <span className="text-white/5 relative z-0 pr-8 pl-4">V</span>
              <motion.span 
                className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-t from-[#020617] via-[#1e3a8a] to-[#3b82f6] z-10 pr-8 pl-4"
                initial={{ clipPath: "inset(100% -20% 0 -20%)" }}
                animate={{ clipPath: "inset(0% -20% 0 -20%)" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              >
                V
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Background Grid & Vignette ────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(41,92,241,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(41,92,241,0.02) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_30%,#09090b_90%)] pointer-events-none z-0" />

      {/* ── Premium Dark Blue Blinds Gradient Effect ─────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <GradientBlinds
            gradientColors={['#295cf1', '#09090b']}
            angle={26}
            noise={0.4}
            blindCount={14}
            blindMinWidth={60}
            spotlightRadius={0.45}
            spotlightSoftness={1}
            spotlightOpacity={0.9}
            mouseDampening={0.5}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="screen"
          />
        </div>
      </div>

      {/* ── Fixed Navigation ────────────────────────────── */}
      <div className="absolute top-6 left-6 md:top-10 md:left-12 z-40 pointer-events-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-mono"
        >
          <ArrowLeft size={16} />
          <span className="hidden md:inline">Home</span>
        </Link>
      </div>

      <div className="absolute top-6 right-6 md:top-10 md:right-12 z-40 pointer-events-auto flex items-center">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white hover:text-[#295cf1] transition-colors bg-black/20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-2 md:p-0 rounded-lg md:rounded-none"
        >
          <Menu size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Main Content Area ───────────────────────────── */}
      <div className="z-10 w-full max-w-4xl px-4 md:px-8 flex flex-col items-center mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-10 bg-[#09090b]/65 backdrop-blur-2xl p-6 sm:p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden w-full"
        >
          {/* Top light bar */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#295cf1]/45 to-transparent"></div>

          {/* Heading */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 border border-[#295cf1]/25 bg-[#295cf1]/5 px-3 py-1">
              <Terminal size={12} className="text-[#295cf1]" />
              <span className="text-[#295cf1] text-[9px] font-mono tracking-[0.35em] uppercase">SYSTEM_DEPLOY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-none mt-2">
              INSTALLATION
            </h1>
            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light">
              Supercharge your standard developer shells into an autonomous OS coordinate center. Fully packaged and deployed globally.
            </p>
          </div>

          {/* Premium Tab Switcher */}
          <div className="flex bg-black/40 border border-white/5 rounded-lg p-1.5 z-10">
            <button
              onClick={() => setActiveTab("pipx")}
              className={`px-6 py-2 rounded-md text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
                activeTab === "pipx"
                  ? "bg-[#295cf1]/10 border border-[#295cf1]/30 text-[#295cf1] shadow-[0_0_15px_rgba(41,92,241,0.15)]"
                  : "text-white/45 border border-transparent hover:text-white"
              }`}
            >
              PIPX INSTALL (RECOMMENDED)
            </button>
            <button
              onClick={() => setActiveTab("manual")}
              className={`px-6 py-2 rounded-md text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${
                activeTab === "manual"
                  ? "bg-[#295cf1]/10 border border-[#295cf1]/30 text-[#295cf1] shadow-[0_0_15px_rgba(41,92,241,0.15)]"
                  : "text-white/45 border border-transparent hover:text-white"
              }`}
            >
              MANUAL SOURCE
            </button>
          </div>

          {/* Code block */}
          <div className="w-full flex flex-col gap-3 relative z-10">
            <div className="flex w-full bg-black/40 border border-white/5 rounded-xl overflow-hidden shadow-inner group transition-all hover:border-[#295cf1]/30 hover:shadow-[0_0_30px_rgba(41,92,241,0.15)] relative">
              <pre className="p-5 pr-20 flex-1 text-left font-mono text-[11px] md:text-[12.5px] leading-[1.6] text-white/80 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] whitespace-pre">
                {(activeTab === "pipx" ? pipxInstallCommands : manualInstallCommands)
                  .split('\n')
                  .map((line, i) => {
                    if (line.startsWith('#')) return <span key={i} className="text-white/20 font-light italic">{line}{'\n'}</span>;
                    if (line.trim() === '') return <span key={i}>{'\n'}</span>;
                    return <span key={i} className="text-[#295cf1] opacity-90">{line}{'\n'}</span>;
                  })}
              </pre>
              <button 
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/3 hover:bg-white/5 border border-white/5 transition-colors flex items-center justify-center shrink-0 backdrop-blur-md"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} className="text-white/50 group-hover:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Capability Packs Section */}
          <div className="w-full flex flex-col gap-6 mt-4 relative z-10 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.25em] text-[#295cf1] font-mono uppercase">
                // OPTIONAL CAPABILITY PACKS
              </span>
              <p className="text-xs text-white/40 font-light">
                Extend VoxKage's OS abilities by installing optional modular packs via: <code className="bg-black/50 border border-white/10 px-2 py-0.5 rounded text-white/80 text-[10px] font-mono">voxkage install &lt;pack&gt;</code>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                {
                  name: "BROWSER ENGINE",
                  cmd: "browser",
                  desc: "Playwright automation, JS form filling, and live DOM extraction.",
                  icon: Globe,
                },
                {
                  name: "RAG MEMORY",
                  cmd: "rag",
                  desc: "ChromaDB vector logs, embeddings, and semantic codebase indexing.",
                  icon: Layers,
                },
                {
                  name: "VISION PIPELINE",
                  cmd: "vision",
                  desc: "OpenCV visual verification, OCR scanning, and screen perceptions.",
                  icon: Eye,
                },
                {
                  name: "DOCS PLUS",
                  cmd: "docs_plus",
                  desc: "Word-to-PDF compilers, spreadsheet parsing, and file utilities.",
                  icon: Cpu,
                },
              ].map((pack, i) => {
                const Icon = pack.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative bg-[#09090b]/40 border border-white/5 hover:border-[#295cf1]/30 p-5 rounded-xl transition-all duration-300 flex gap-4 overflow-hidden"
                  >
                    {/* Inner tech corner lines */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#295cf1]/30 transition-colors" />
                    
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/2 text-white/50 border border-white/5 shrink-0 relative transition-all duration-300 group-hover:text-white group-hover:border-[#295cf1]/40"
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider font-semibold text-white">
                          {pack.name}
                        </span>
                        <code className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/3 text-white/50">
                          {pack.cmd}
                        </code>
                      </div>
                      <span className="text-[11px] font-light text-white/40 leading-relaxed">
                        {pack.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Running VoxKage */}
          <div className="w-full flex flex-col gap-4 relative z-10 text-left border-t border-white/5 pt-8">
            <span className="text-[10px] tracking-[0.25em] text-[#295cf1] font-mono uppercase">
              // RUNNING THE ENGINE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "voxkage", desc: "Launches the CLI and connects interactive developer sub-shells." },
                { title: "voxkage tray", desc: "Runs persistently in your background system tray coordinating named pipes." },
                { title: "voxkage status", desc: "Inspects system health, model portfolios, and plugin credentials status." },
              ].map((cmd, i) => (
                <div key={i} className="flex flex-col gap-1.5 border-l border-white/10 pl-4 py-1.5 hover:border-[#295cf1]/30 transition-colors duration-300">
                  <code className="text-white text-xs font-semibold font-mono tracking-wider">
                    {cmd.title}
                  </code>
                  <span className="text-[11px] font-light text-white/45 leading-relaxed">
                    {cmd.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Shield */}
          <div className="w-full flex flex-col gap-4 relative z-10 text-left border-t border-white/5 pt-8">
            <span className="text-[10px] tracking-[0.25em] text-[#295cf1] font-mono uppercase flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-[#295cf1]" />
              // THE SHIELD SECURITY PROTOCOL
            </span>
            <p className="text-xs text-white/45 leading-relaxed font-light">
              VoxKage operates under an integrated <strong className="text-white font-medium">Three-Layer Shield System</strong> to secure local shell and filesystems. Critical system paths are non-overrideable blocked, and destructive commands are gated via Safe Mode. Learn more at <code className="bg-black/50 border border-white/10 px-2 py-0.5 rounded text-white/80 text-[10px] font-mono">voxkage status</code>.
            </p>
          </div>

          {/* Footer note */}
          <p className="text-white/30 text-[11px] font-light mt-4 z-10">
            Need details on building customized modules? Check out our official{" "}
            <a 
              href="https://github.com/ayushdwivedi001/VoxKage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-white/50 hover:text-white transition-colors underline"
            >
              VoxKage Github Repository
            </a>.
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
