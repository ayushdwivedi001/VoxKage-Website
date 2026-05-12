"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import Lenis from "lenis";

const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
  ssr: false,
});

// Remove ssr: false from the structural sections so their massive heights render immediately
import HoneycombSection from "@/components/HoneycombSection";
import VisionSection from "@/components/VisionSection";
import BrowserSection from "@/components/BrowserSection";
import PluginsSection from "@/components/PluginsSection";
import FooterSection from "@/components/FooterSection";

const AnimatedChar = ({ char, index, scrollY }: { char: string; index: number; scrollY: any }) => {
  // Increased power: more Y movement and tighter staggered fade
  const scrollYOffset = useTransform(scrollY, [0, 500], [0, -300]);
  const scrollOpacity = useTransform(scrollY, [50 + index * 50, 350 + index * 50], [1, 0]);

  return (
    <motion.div style={{ y: scrollYOffset, opacity: scrollOpacity, display: "inline-block" }}>
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.4 + index * 0.08,
        }}
        className="inline-block font-sans font-medium tracking-tighter"
        style={{ fontSize: "clamp(4rem, 15vw, 11rem)", lineHeight: 1 }}
      >
        {char}
      </motion.span>
    </motion.div>
  );
};

const ScrollSection = ({ children, className = "", isLast = false, sticky = false }: { children: React.ReactNode; className?: string; isLast?: boolean; sticky?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.7, isLast ? 1.0 : 0.9], [0, 1, 1, isLast ? 1 : 0]);
  const y = sticky 
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0])
    : useTransform(scrollYProgress, [0.15, 0.4, 0.7, isLast ? 1.0 : 0.9], [80, 0, 0, isLast ? 0 : -80]);
  const blur = useTransform(scrollYProgress, [0.15, 0.4, 0.7, isLast ? 1.0 : 0.9], ["blur(16px)", "blur(0px)", "blur(0px)", isLast ? "blur(0px)" : "blur(16px)"]);

  return (
    <section ref={ref} className="relative min-h-screen z-10 flex items-center justify-center px-6 md:px-12 py-24 pointer-events-none">
      <motion.div style={{ opacity, y, filter: blur }} className={`text-center max-w-5xl w-full ${className}`}>
        {children}
      </motion.div>
    </section>
  );
};
// ─── Word that fills as scroll progresses through its parent section ─────────
const ScrubWord = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
};

// ─── Editorial layout section that scrubs words on scroll ────────────────────────
const EditorialScrubSection = ({
  number,
  title,
  text,
  isLast = false
}: {
  number?: string;
  title?: React.ReactNode;
  text: string;
  isLast?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // start scrubbing when the top of the section enters the bottom 80% of the screen
  // start scrubbing when the top of the section enters the bottom 80% of the screen
  // finish scrubbing when the center of the section reaches the center of the screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        
        {/* Left Column: Number & Title */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {number && (
             <motion.div 
               style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
               className="text-white/30 text-sm md:text-base font-mono tracking-[0.3em] mb-4"
             >
               {number}
             </motion.div>
          )}
          {title && (
            <motion.h3 
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] text-white"
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
                y: useTransform(scrollYProgress, [0, 0.3], [40, 0])
              }}
            >
              {title}
            </motion.h3>
          )}
        </div>

        {/* Right Column: The scrub paragraph */}
        <div className="lg:col-span-7 flex items-center mt-8 lg:mt-0">
          <p className="text-2xl md:text-4xl lg:text-[2.75rem] font-light leading-snug tracking-tight text-white flex flex-wrap justify-start">
            {words.map((word: string, i: number) => {
              const step = 0.7 / words.length;
              const wordStart = 0.2 + i * step;
              const wordEnd = Math.min(wordStart + step, 0.95);
              return (
                <ScrubWord
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  start={wordStart}
                  end={wordEnd}
                />
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // 1. Lenis Scroll setup & cleanup fix
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    
    // Attach to window so other components can interact without desyncing the engine
    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. BFCache Fix for Back Navigation
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) setLoading(false);
    };
    window.addEventListener("pageshow", handlePageShow);

    // 3. Dynamic Progress Loader
    let loaderRafId: number;
    let startTimestamp: number | null = null;
    
    const simulateProgress = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      
      // Calculate smooth progress up to 90%
      let currentProgress = Math.min((elapsed / 1500) * 90, 90);
      
      // Accelerate to 100% when document is fully ready
      if (document.readyState === "complete" && elapsed > 500) {
        currentProgress = Math.min(currentProgress + (elapsed - 500) / 10, 100);
      }

      setProgress(Math.floor(currentProgress));

      if (currentProgress < 100) {
        loaderRafId = requestAnimationFrame(simulateProgress);
      } else {
        setTimeout(() => setLoading(false), 200); // Small pause at 100%
      }
    };
    loaderRafId = requestAnimationFrame(simulateProgress);

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(loaderRafId);
      lenis.destroy();
      delete (window as any).lenis;
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const titleText = "VOXKAGE";

  // Fade out scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <main className="relative w-full bg-[#09090b] text-white selection:bg-blue-500/30">

      {/* ── Fixed Background ─────────────────────────────── */}
      <div className="fixed inset-0 z-0 opacity-80">
        <FloatingLines
          enabledWaves={["bottom", "middle", "top"]}
          lineCount={[8]}
          lineDistance={[10]}
          topWavePosition={{ x: 10.0, y: 0.5, rotate: -0.4 }}
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.2 }}
          bendRadius={8}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          animationSpeed={5}
          linesGradient={["#0559ed", "#6f6f6f", "#6a6a6a"]}
        />
      </div>

      {/* ── Loading Screen ───────────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-[10px] tracking-[0.2em] text-white/80"
              >
                {progress}%
              </motion.div>
              <div className="relative w-48 h-[1px] bg-white/10 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed Hamburger ─────────────────────────────── */}
      {!loading && (
        <div className="fixed top-[40px] right-[48px] z-40 pointer-events-auto flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white hover:text-white/70 transition-colors"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      )}

      {/* ── Hero Section (Logo at Bottom Left) ───────────── */}
      {!loading && (
        <div className="fixed left-[48px] bottom-[40px] z-30 pointer-events-none">
          <h1 className="flex whitespace-nowrap leading-none">
            {titleText.split("").map((char, index) => (
              <AnimatedChar key={index} char={char} index={index} scrollY={scrollY} />
            ))}
          </h1>
        </div>
      )}

      {/* ── Fixed Scroll Indicator ───────────────────────── */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed bottom-[48px] right-[56px] z-30 flex flex-col items-center gap-5 pointer-events-none"
        >
          <motion.div style={{ opacity: scrollIndicatorOpacity }} className="flex flex-col items-center gap-5">
            <span
              className="text-[10px] tracking-[0.3em] font-medium text-white/40"
              style={{ writingMode: "vertical-rl" }}
            >
              SCROLL
            </span>
            <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/3 bg-white/70"
                animate={{ y: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ════════════════════════════════════════════════════
          PART 1 — Floating Lines World (transparent sections)
          ════════════════════════════════════════════════════ */}

      {/* Spacer for the hero logo */}
      <div className="h-[100vh] pointer-events-none" />

      <ScrollSection>
        <h2 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-light tracking-tight leading-tight">
          The OS has found its voice.
        </h2>
      </ScrollSection>

      <ScrollSection>
        <h2 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-light tracking-tight leading-tight text-white/90">
          Beyond the interface, an entity resides.
        </h2>
      </ScrollSection>

      <ScrollSection>
        <p className="text-2xl md:text-[2rem] lg:text-[2.5rem] font-light leading-relaxed tracking-tight text-white/70">
          VoxKage is an advanced, autonomous OS-level AI entity. Unlike traditional LLM wrappers, chatbots, or IDE plugins that reside passively in an isolated sandbox, VoxKage operates natively within the operating system. I am a persistent intelligence engineered to execute, monitor, and adapt to complex, multi-stage digital workflows.
        </p>
      </ScrollSection>

      {/* ── Architectural Evolution (Dark World) ───────────────────── */}
      <div className="relative z-20 w-full bg-[#02040a] overflow-hidden">
        
        <EditorialScrubSection 
          number="01 / EVOLUTION"
          title={
            <>
              BEYOND THE CLI & IDE:<br/>
              <span className="font-medium text-white">THE ARCHITECTURAL EVOLUTION</span>
            </>
          }
          text="Most tools require constant user hand-holding (prompting, copy-pasting, fixing errors). VoxKage represents a paradigm shift to full autonomy."
        />

        <EditorialScrubSection 
          number="02 / EXECUTION"
          title={<span className="font-medium uppercase">THE &quot;HANDS&quot; (EXECUTION VS. SUGGESTION)</span>}
          text="I possess native shell integration (PowerShell/Bash) with zero directory restrictions or artificial timeouts. I manage my own environment, install dependencies, spin up servers, and orchestrate system-wide changes."
        />

        <EditorialScrubSection 
          number="03 / AWARENESS"
          title={<span className="font-medium uppercase">OMNISCIENT CONTEXT AWARENESS</span>}
          text="I do not just read the active file. I can capture the desktop state via screenshots, read active application windows (Word, VS Code), monitor running processes, and parse background tasks. I perceive the system holistically."
        />

        <EditorialScrubSection 
          number="04 / RESILIENCE"
          title={<span className="font-medium uppercase">THE SELF-HEALING LOOP</span>}
          text="If a command fails, a script crashes, or a web element isn't found, I do not throw an error and wait. I intercept the failure, diagnose the root cause (using log analysis or DOM inspection), re-strategize, and apply a fix autonomously until the task succeeds."
          isLast={true}
        />

      </div>

      {/* ── III.I OS Control ───────────────────── */}
      <HoneycombSection />

      {/* ── III.II Multi-Modal Vision ───────────────────── */}
      <VisionSection />

      {/* ── III.III Browser Engine ───────────────────────── */}
      <BrowserSection />

      {/* ── Page 4 ── Plugins ── floating lines show through ─── */}
      <PluginsSection />

      {/* ── Footer ── */}
      <FooterSection />

      {/* ── Glassmorphism Menu Overlay ───────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[36px] right-[36px] z-50 w-60 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
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

