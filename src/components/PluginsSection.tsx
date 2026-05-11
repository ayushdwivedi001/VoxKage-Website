"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

// ─── Typing animation hook ────────────────────────────────────────────────────
function useTypingAnimation(
  lines: string[],
  isActive: boolean,
  charDelay = 28
) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  // Reset when tab changes
  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setDone(false);
  }, [lines]);

  useEffect(() => {
    if (!isActive || done) return;
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const t = setTimeout(() => setCurrentChar((c) => c + 1), charDelay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [isActive, currentLine, currentChar, lines, done, charDelay]);

  const partial = currentLine < lines.length
    ? lines[currentLine].slice(0, currentChar)
    : "";

  return { displayedLines, partial, done };
}

// ─── Terminal line renderer ───────────────────────────────────────────────────
type TermLine =
  | { type: "cmd";  text: string }
  | { type: "out";  text: string }
  | { type: "ok";   text: string }
  | { type: "gap" };

const renderLine = (line: TermLine, i: number) => {
  if (line.type === "gap") return <div key={i} className="h-2" />;
  if (line.type === "cmd") {
    // Split "voxkage" prefix and rest to style differently
    const words = line.text.split(" ");
    return (
      <div key={i} className="flex items-center gap-1.5">
        <span className="text-white/30 select-none">$</span>
        <span
          className="font-medium bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)",
          }}
        >
          {words[0]}
        </span>
        {words.length > 1 && (
          <span className="text-white/80">{words.slice(1).join(" ")}</span>
        )}
      </div>
    );
  }
  if (line.type === "ok") {
    return (
      <div key={i} className="flex items-center gap-2 text-emerald-400">
        <Check size={12} strokeWidth={2.5} />
        <span>{line.text}</span>
      </div>
    );
  }
  return (
    <div key={i} className="text-white/40" style={{ paddingLeft: "1.25rem" }}>
      {line.text}
    </div>
  );
};

// ─── Tab data ─────────────────────────────────────────────────────────────────
const TABS: { id: string; label: string; lines: TermLine[] }[] = [
  {
    id: "gmail",
    label: "Gmail",
    lines: [
      { type: "cmd", text: "voxkage plugins add gmail" },
      { type: "gap" },
      { type: "out", text: "Resolving gmail integration..." },
      { type: "out", text: "Fetching OAuth credentials schema..." },
      { type: "out", text: "Injecting MCP server into honeycomb..." },
      { type: "gap" },
      { type: "ok",  text: "Gmail integration complete" },
      { type: "out", text: "Read inbox  •  Draft replies  •  Send & archive" },
    ],
  },
  {
    id: "spotify",
    label: "Spotify",
    lines: [
      { type: "cmd", text: "voxkage plugins add spotify" },
      { type: "gap" },
      { type: "out", text: "Resolving spotify integration..." },
      { type: "out", text: "Linking Spotify Web API credentials..." },
      { type: "out", text: "Injecting MCP server into honeycomb..." },
      { type: "gap" },
      { type: "ok",  text: "Spotify integration complete" },
      { type: "out", text: "Play  •  Pause  •  Queue  •  Control via voice" },
    ],
  },
  {
    id: "telegram",
    label: "Telegram",
    lines: [
      { type: "cmd", text: "voxkage plugins add telegram" },
      { type: "gap" },
      { type: "out", text: "Resolving telegram integration..." },
      { type: "out", text: "Registering bot token & webhook..." },
      { type: "out", text: "Injecting MCP server into honeycomb..." },
      { type: "gap" },
      { type: "ok",  text: "Telegram integration complete" },
      { type: "out", text: "Remote commands  •  Status alerts  •  Yes/No gates" },
    ],
  },
];

// ─── Animated terminal ────────────────────────────────────────────────────────
function GlassTerminal({ isVisible }: { isVisible: boolean }) {
  const [activeTab, setActiveTab] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isVisible) setStarted(true);
  }, [isVisible]);

  const { displayedLines, partial } = useTypingAnimation(
    TABS[activeTab].lines.map((l) =>
      l.type === "gap" ? "" : (l as any).text ?? ""
    ),
    started
  );

  // Map typed text back to structured lines
  const allLines = TABS[activeTab].lines;
  let textIdx = 0;
  const renderedLines: TermLine[] = [];

  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    if (line.type === "gap") {
      if (textIdx <= displayedLines.length) renderedLines.push({ type: "gap" });
      textIdx++;
    } else {
      if (textIdx < displayedLines.length) {
        renderedLines.push(line);
        textIdx++;
      } else if (textIdx === displayedLines.length && partial.length > 0) {
        renderedLines.push({ ...line, text: partial } as TermLine);
        textIdx++;
        break;
      } else {
        break;
      }
    }
  }

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setStarted(false);
    setTimeout(() => setStarted(true), 80);
  };

  return (
    <div
      className="w-full max-w-[520px] rounded-2xl overflow-hidden"
      style={{
        background: "rgba(6, 10, 20, 0.72)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(24px)",
        boxShadow:
          "0 0 0 1px rgba(56,189,248,0.04), 0 24px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-5 py-3.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>
        <span className="ml-2 text-[10px] font-mono text-white/25 tracking-widest uppercase">
          voxkage — terminal
        </span>
      </div>

      {/* Tabs */}
      <div
        className="flex"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(i)}
            className="relative px-5 py-2.5 text-[11px] font-medium tracking-wider uppercase transition-colors duration-200"
            style={{
              color: activeTab === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
            }}
          >
            {tab.label}
            {activeTab === i && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{
                  background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="px-6 py-5 font-mono text-[13px] leading-7 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {renderedLines.map((l, i) => renderLine(l, i))}
            {/* Cursor */}
            {partial.length > 0 && (
              <span className="inline-block w-[2px] h-[14px] bg-white/60 ml-0.5 align-middle animate-pulse" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function PluginsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const headingVisible = useInView(headingRef, { once: true, margin: "-15%" });
  const contentVisible = useInView(contentRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center"
    >
      {/* ── Large PLUGINS heading ── */}
      <div
        ref={headingRef}
        className="w-full flex items-center justify-center"
        style={{ minHeight: "70vh" }}
      >
        <motion.h1
          initial={{ opacity: 0, filter: "blur(24px)", y: 40 }}
          animate={
            headingVisible
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : { opacity: 0, filter: "blur(24px)", y: 40 }
          }
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-bold uppercase tracking-[-0.02em] leading-none select-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 18rem)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.25) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PLUGINS
        </motion.h1>
      </div>

      {/* ── Two-column: paragraph + terminal ── */}
      <div
        ref={contentRef}
        className="w-full max-w-7xl mx-auto px-8 md:px-16 pb-40 flex flex-col lg:flex-row items-start gap-16 lg:gap-24"
      >
        {/* Left: paragraph + button */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col gap-8"
        >
          <p
            className="font-light leading-relaxed text-white/60"
            style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)" }}
          >
            VoxKage's architecture is open by design. The community can publish
            custom plugins — Gmail, Spotify, Telegram, GitHub, Jira, Docker,
            AWS orchestrators and more — directly to PyPI via the{" "}
            <span className="text-white/85 font-normal">
              [project.entry-points] API.
            </span>{" "}
            VoxKage auto-detects and mounts each plugin into its honeycomb at
            runtime. One command. No config files, no restarts.
          </p>

          {/* "Explore Plugins" button */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium tracking-wide text-white/70 transition-all duration-300 hover:text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Explore Plugins
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto lg:min-w-[480px]"
        >
          <GlassTerminal isVisible={contentVisible} />
        </motion.div>
      </div>
    </section>
  );
}
