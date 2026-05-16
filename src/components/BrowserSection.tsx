"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Layers, GitBranch, Globe, Network } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// COORDINATE SYSTEM  (identical to HoneycombSection & VisionSection)
// SVG viewBox "0 0 100 100", preserveAspectRatio="xMidYMid meet"
// Container: absolute div from left:38% → right:0, full height.
// Hub at SVG (50, 50). Node x/y % match SVG endpoint coords.
// ─────────────────────────────────────────────────────────────────────────────

const HUB_X = 50;
const HUB_Y = 50;

// Bezier arc paths — organic web-crawl feel, not straight or orthogonal
const NODES = [
  {
    // Top-right arc → Live DOM Extraction
    path: `M ${HUB_X} ${HUB_Y} C 62 28, 76 22, 84 22`,
    x: 84, y: 22,
    label: "LIVE DOM EXTRACTION",
    icon: Code2,
    drawStart: 0.15, drawEnd: 0.38,
    align: "left" as const,
    accent: "#22c55e",   // emerald
  },
  {
    // Hard left arc → Frontend Autonomy
    path: `M ${HUB_X} ${HUB_Y} C 36 42, 24 46, 18 50`,
    x: 18, y: 50,
    label: "FRONTEND AUTONOMY",
    icon: Layers,
    drawStart: 0.38, drawEnd: 0.60,
    align: "right" as const,
    accent: "#38bdf8",   // sky
  },
  {
    // Bottom-right arc → Workflow Execution
    path: `M ${HUB_X} ${HUB_Y} C 62 68, 76 76, 84 78`,
    x: 84, y: 78,
    label: "WORKFLOW EXECUTION",
    icon: GitBranch,
    drawStart: 0.60, drawEnd: 0.82,
    align: "left" as const,
    accent: "#f97316",   // orange
  },
] as const;

// ─── Node component ───────────────────────────────────────────────────────────
const BrowserNode = ({
  x, y, label, icon: Icon, progress, drawStart, drawEnd, align, accent,
}: {
  x: number; y: number; label: string; icon: any;
  progress: any; drawStart: number; drawEnd: number;
  align: "left" | "right"; accent: string;
}) => {
  const op = useTransform(progress, [drawStart, drawEnd], [0, 1]);
  const sc = useTransform(progress, [drawStart, drawEnd], [0.7, 1]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        translateX: "-50%",
        translateY: "-50%",
        opacity: op,
        scale: sc,
      }}
      className="flex items-center gap-3 z-20 pointer-events-auto"
    >
      {align === "right" && (
        <div className="flex flex-col items-end shrink-0">
          <span className="text-[8px] font-mono tracking-[0.25em] uppercase leading-none" style={{ color: `${accent}90` }}>
            WEB_{label.split(" ")[0]}
          </span>
          <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase mt-1 leading-none whitespace-nowrap">
            {label}
          </span>
        </div>
      )}

      <div className="group relative shrink-0">
        <div
          className="absolute -inset-3 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          style={{ backgroundColor: `${accent}15` }}
        />
        {/* Hexagonal clip */}
        <div
          className="relative w-11 h-11 bg-[#02040a] flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-300"
          style={{
            border: `1px solid ${accent}50`,
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        {/* Subtle dot at hex center for alignment */}
        <div
          className="absolute inset-0 -z-10 rounded-full blur-sm animate-pulse"
          style={{ backgroundColor: `${accent}08` }}
        />
      </div>

      {align === "left" && (
        <div className="flex flex-col items-start shrink-0">
          <span className="text-[8px] font-mono tracking-[0.25em] uppercase leading-none" style={{ color: `${accent}90` }}>
            WEB_{label.split(" ")[0]}
          </span>
          <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase mt-1 leading-none whitespace-nowrap">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BrowserSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── SCROLL LOCK — do not change ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const headingOp    = useTransform(progress, [0, 0.14], [0, 1]);
  const headingX     = useTransform(progress, [0, 0.14], [-32, 0]);
  const hubOp        = useTransform(progress, [0.05, 0.18], [0, 1]);
  const hubScale     = useTransform(progress, [0.05, 0.18], [0.4, 1]);
  const statusOp     = useTransform(progress, [0.78, 0.9], [0, 1]);

  // Rotating ring around globe to show "crawling"
  const ringRotate   = useTransform(progress, [0, 1], [0, 720]);

  return (
    <>
      {/* ══ MOBILE LAYOUT (< md) — static, no sticky scroll ══ */}
      <section className="md:hidden relative w-full bg-[#02040a] rounded-b-[40px] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,#02040a_90%)] pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#22c55e]/25 bg-[#22c55e]/5 px-3 py-1 mb-5">
              <Network size={12} className="text-[#22c55e]" />
              <span className="text-[#22c55e] text-[9px] font-mono tracking-[0.35em] uppercase">Protocol // III.III</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
              THE BROWSER<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#38bdf8] font-light">ENGINE</span>
            </h2>
            <div className="border-l-2 border-[#22c55e]/20 pl-4">
              <p className="text-sm text-white/45 font-light leading-relaxed">
                VoxKage surfs the web like a human, but with machine precision — navigating, extracting, reverse-engineering and executing multi-step workflows autonomously.
              </p>
              <div className="text-[9px] font-mono text-[#22c55e]/35 tracking-widest uppercase mt-2">&gt; LAUNCHING_BROWSER_AGENT</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={i} className="flex items-center gap-4 border px-4 py-3 rounded-lg" style={{ borderColor: `${node.accent}20`, backgroundColor: `${node.accent}05` }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", border: `1px solid ${node.accent}50`, backgroundColor: "#02040a" }}>
                    <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: node.accent }} />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-[0.2em] uppercase" style={{ color: `${node.accent}70` }}>WEB_{node.label.split(" ")[0]}</div>
                    <div className="text-[11px] font-medium tracking-[0.1em] text-white uppercase">{node.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ DESKTOP LAYOUT (≥ md) — full 300vh sticky animation ══ */}
      <section
        ref={containerRef}
        className="hidden md:block relative w-full bg-[#02040a] rounded-b-[100px] [overflow:clip]"
        style={{ height: "300vh" }}
      >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">

        {/* Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,transparent_25%,#02040a_75%)] z-0 pointer-events-none" />

        {/* ── Left text ── */}
        <div className="relative z-30 w-full md:w-[45%] lg:w-[38%] pl-6 sm:pl-10 md:pl-16 pr-6 md:pr-4 pointer-events-none select-none bg-gradient-to-r from-[#02040a] via-[#02040a]/80 to-transparent md:bg-none py-10 md:py-0">
          <motion.div style={{ opacity: headingOp, x: headingX }}>
            <div className="inline-flex items-center gap-2 border border-[#22c55e]/25 bg-[#22c55e]/5 px-3 py-1 mb-6">
              <Network size={12} className="text-[#22c55e]" />
              <span className="text-[#22c55e] text-[9px] font-mono tracking-[0.35em] uppercase">
                Protocol // III.III
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
              THE BROWSER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#38bdf8] font-light">
                ENGINE
              </span>
            </h2>

            <div className="border-l-2 border-[#22c55e]/20 pl-4 flex flex-col gap-3">
              <p className="text-sm text-white/45 font-light leading-relaxed max-w-xs">
                VoxKage surfs the web like a human, but with machine precision — navigating, extracting, reverse-engineering and executing multi-step workflows autonomously.
              </p>
              <div className="text-[9px] font-mono text-[#22c55e]/35 tracking-widest uppercase">
                &gt; LAUNCHING_BROWSER_AGENT
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Right diagram ── */}
        <div className="absolute inset-0 md:left-[45%] lg:left-[38%] z-10 opacity-60 md:opacity-100">

          {/* SVG bezier web paths */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="web-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="web-aura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Web crawl aura */}
            <motion.circle
              cx={HUB_X} cy={HUB_Y} r="20"
              fill="url(#web-aura)"
              style={{ opacity: hubOp }}
            />

            {/* Concentric orbit circles (decorative — drawn early) */}
            {[14, 22, 30].map((r, i) => (
              <motion.circle
                key={`orbit-${i}`}
                cx={HUB_X} cy={HUB_Y} r={r}
                stroke="#22c55e"
                strokeWidth="0.08"
                fill="none"
                strokeDasharray="1.5 2"
                style={{ opacity: useTransform(progress, [0.05 + i * 0.04, 0.18 + i * 0.04], [0, 0.25]) }}
              />
            ))}

            {/* Bezier arc paths + packets */}
            {NODES.map((node, i) => {
              const pathDraw = useTransform(progress, [node.drawStart, node.drawEnd], [0, 1]);
              const pathOp   = useTransform(progress, [node.drawStart, node.drawStart + 0.04], [0, 1]);
              return (
                <React.Fragment key={i}>
                  <path
                    d={node.path}
                    stroke={`${node.accent}10`}
                    strokeWidth="0.3"
                    fill="none"
                  />
                  <motion.path
                    d={node.path}
                    stroke={node.accent}
                    strokeWidth="0.4"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#web-glow)"
                    style={{ pathLength: pathDraw, opacity: pathOp }}
                  />
                  {/* Travelling packet */}
                  <motion.circle
                    r="0.7"
                    fill="#ffffff"
                    style={{
                      offsetPath: `path("${node.path}")`,
                      offsetDistance: useTransform(progress, [node.drawStart, node.drawEnd], ["0%", "100%"]),
                      opacity: useTransform(
                        progress,
                        [node.drawStart, node.drawStart + 0.05, node.drawEnd - 0.04, node.drawEnd],
                        [0, 1, 1, 0]
                      ),
                    }}
                  />
                </React.Fragment>
              );
            })}
          </svg>

          {/* ── Globe hub ── */}
          <motion.div
            style={{
              left: `${HUB_X}%`,
              top: `${HUB_Y}%`,
              translateX: "-50%",
              translateY: "-50%",
              opacity: hubOp,
              scale: hubScale,
            }}
            className="absolute z-20"
          >
            {/* Orbit ring (scroll-driven rotation) */}
            <motion.div
              style={{ rotate: ringRotate }}
              className="absolute w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="46" stroke="#22c55e" strokeWidth="0.5" fill="none" strokeDasharray="4 6" opacity="0.3" />
                {/* Packet travelling on orbit */}
                <circle cx="96" cy="50" r="2" fill="#22c55e" opacity="0.8" />
              </svg>
            </motion.div>
            {/* Static outer ring */}
            <div className="absolute w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-[#22c55e]/10 rounded-full animate-[spin_60s_linear_infinite_reverse]" />

            {/* Circular hub body */}
            <div
              className="relative w-[68px] h-[68px] rounded-full bg-[#02040a] flex items-center justify-center"
              style={{
                border: "1px solid rgba(34,197,94,0.5)",
                boxShadow: "0 0 40px rgba(34,197,94,0.2), inset 0 0 20px rgba(34,197,94,0.05)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[#22c55e]/5" />
              {/* Vertical equator line (globe aesthetic) */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#22c55e]/20" />
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#22c55e]/20" />
              </div>
              <Globe className="w-8 h-8 text-[#22c55e]" strokeWidth={1.2} />
            </div>

            <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="text-[#22c55e] text-[9px] font-mono tracking-[0.4em] uppercase bg-black/60 px-3 py-1 border border-[#22c55e]/20">
                VK_BROWSER_AGENT
              </div>
            </div>
          </motion.div>

          {/* ── Peripheral nodes ── */}
          {NODES.map((node, i) => (
            <BrowserNode
              key={i}
              x={node.x}
              y={node.y}
              label={node.label}
              icon={node.icon}
              progress={progress}
              drawStart={node.drawStart}
              drawEnd={node.drawEnd}
              align={node.align}
              accent={node.accent}
            />
          ))}
        </div>

        {/* Status */}
        <motion.div
          className="absolute bottom-10 right-8 z-30 text-right pointer-events-none"
          style={{ opacity: statusOp }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[9px] font-mono text-white/25 tracking-[0.2em]">
                BROWSER_ENGINE
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_#22c55e] animate-pulse" />
            </div>
            <div className="text-[9px] font-mono text-[#22c55e]/40 uppercase tracking-[0.15em]">
              DOM_CRAWLER_ACTIVE
            </div>
          </div>
        </motion.div>

      </div>
      </section>
    </>
  );
}
