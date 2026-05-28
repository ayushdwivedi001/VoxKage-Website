"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Monitor, Activity, Folder, Terminal, Cpu } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// COORDINATE SYSTEM
// The SVG viewBox is "0 0 100 100" with preserveAspectRatio="xMidYMid meet"
// The hub center is at SVG coords (65, 50).
// Each node is placed via absolute CSS (left/top %) matching SVG coords.
// Paths terminate exactly at node center so lines land on the icon square.
// ─────────────────────────────────────────────────────────────────────────────

// Hub center in SVG units
const HUB_X = 65;
const HUB_Y = 50;

// Nodes: keep x/y matching the SVG terminal point of their path
const NODES = [
  {
    // top-left branch: enter horizontally from the left at y=50, go left to x=50, then up to y=22, then left to x=30
    path: `M ${HUB_X} ${HUB_Y} L 50 ${HUB_Y} L 50 22 L 30 22`,
    x: 30, y: 22,
    label: "SYSTEM HARDWARE", icon: Monitor,
    drawStart: 0.15, drawEnd: 0.38,
    align: "right" as const,
  },
  {
    // right branch: go right to x=88, staying at y=50
    path: `M ${HUB_X} ${HUB_Y} L 88 ${HUB_Y}`,
    x: 88, y: 50,
    label: "PROCESS MANAGEMENT", icon: Activity,
    drawStart: 0.38, drawEnd: 0.60,
    align: "left" as const,
  },
  {
    // bottom-left branch: enter horizontally from the left at y=50, go left to x=50, then down to y=78, then left to x=35
    path: `M ${HUB_X} ${HUB_Y} L 50 ${HUB_Y} L 50 78 L 35 78`,
    x: 35, y: 78,
    label: "FILESYSTEM MASTERY", icon: Folder,
    drawStart: 0.60, drawEnd: 0.82,
    align: "right" as const,
  },
] as const;

// ─── Node component ───────────────────────────────────────────────────────────
const TechNode = ({
  x, y, label, icon: Icon, progress, drawStart, drawEnd, align,
}: {
  x: number; y: number; label: string; icon: any;
  progress: any; drawStart: number; drawEnd: number; align: "left" | "right";
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
      {/* Label to the LEFT of the icon (for right-align nodes) */}
      {align === "right" && (
        <div className="flex flex-col items-end shrink-0">
          <span className="text-[8px] font-mono tracking-[0.25em] text-[#00f0ff]/50 uppercase leading-none">
            SYS_{label.split(" ")[0]}
          </span>
          <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase mt-1 leading-none whitespace-nowrap">
            {label}
          </span>
        </div>
      )}

      {/* Icon box */}
      <div className="group relative shrink-0">
        <div className="absolute -inset-3 bg-[#00f0ff]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded" />
        <div className="relative w-11 h-11 bg-[#02040a] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]/80 group-hover:border-[#00f0ff] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
          {/* Tech corners */}
          <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l border-[#00f0ff]" />
          <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b border-r border-[#00f0ff]" />
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>

      {/* Label to the RIGHT of the icon (for left-align nodes) */}
      {align === "left" && (
        <div className="flex flex-col items-start shrink-0">
          <span className="text-[8px] font-mono tracking-[0.25em] text-[#00f0ff]/50 uppercase leading-none">
            SYS_{label.split(" ")[0]}
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
export default function HoneycombSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SCROLL LOCK: do not change these offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <>
      {/* ══ MOBILE LAYOUT (< md) — static, no sticky scroll ══ */}
      <section className="md:hidden relative w-full bg-[#02040a] py-20 px-6">
        {/* Grid bg */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,240,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,#02040a_90%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-lg mx-auto flex flex-col gap-10">
          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#00f0ff]/25 bg-[#00f0ff]/5 px-3 py-1 mb-5">
              <Cpu size={12} className="text-[#00f0ff]" />
              <span className="text-[#00f0ff] text-[9px] font-mono tracking-[0.35em] uppercase">Protocol // III.I</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
              OS CONTROL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500 font-light">NATIVE SHELL</span>
            </h2>
            <div className="border-l-2 border-[#00f0ff]/20 pl-4">
              <p className="text-sm text-white/45 font-light leading-relaxed">
                Complete sovereignty over the operating system. VoxKage bypasses sandboxes, directly hooking into the underlying architecture.
              </p>
              <div className="text-[9px] font-mono text-[#00f0ff]/35 tracking-widest uppercase mt-2">&gt; INITIALIZING_SHELL_LINK</div>
            </div>
          </div>
          {/* Feature nodes as list */}
          <div className="flex flex-col gap-4">
            {NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={i} className="flex items-center gap-4 border border-[#00f0ff]/10 bg-[#00f0ff]/3 px-4 py-3 rounded-lg">
                  <div className="w-10 h-10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]/80 shrink-0 relative">
                    <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-[#00f0ff]" />
                    <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-[#00f0ff]" />
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-[0.2em] text-[#00f0ff]/50 uppercase">SYS_{node.label.split(" ")[0]}</div>
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
        className="hidden md:block relative w-full bg-[#02040a]"
        style={{ height: "300vh" }}
      >
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center">

          {/* Grid background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,240,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Vignette to darken edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_50%,transparent_30%,#02040a_80%)] z-0 pointer-events-none" />

          {/* ── Left text panel ── */}
          <div className="relative z-30 w-[38%] pl-10 md:pl-16 pr-4 pointer-events-none select-none">
            <motion.div
              style={{
                opacity: useTransform(progress, [0, 0.14], [0, 1]),
                x: useTransform(progress, [0, 0.14], [-32, 0]),
              }}
            >
              <div className="inline-flex items-center gap-2 border border-[#00f0ff]/25 bg-[#00f0ff]/5 px-3 py-1 mb-6">
                <Cpu size={12} className="text-[#00f0ff]" />
                <span className="text-[#00f0ff] text-[9px] font-mono tracking-[0.35em] uppercase">
                  Protocol // III.I
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
                OS CONTROL
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-blue-500 font-light">
                  NATIVE SHELL
                </span>
              </h2>

              <div className="border-l-2 border-[#00f0ff]/20 pl-4 flex flex-col gap-3">
                <p className="text-sm text-white/45 font-light leading-relaxed max-w-xs">
                  Complete sovereignty over the operating system. VoxKage
                  bypasses sandboxes, directly hooking into the underlying
                  architecture.
                </p>
                <div className="text-[9px] font-mono text-[#00f0ff]/35 tracking-widest uppercase">
                  &gt; INITIALIZING_SHELL_LINK
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── SVG diagram — fills the right 62% of screen ── */}
          <div className="absolute left-[38%] top-0 right-0 bottom-0 z-10 flex items-center justify-center">
            <div className="relative w-full aspect-square max-h-full max-w-full">

              {/* SVG lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <filter id="hc-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="0.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {NODES.map((node, i) => {
                  const pathDraw = useTransform(
                    progress,
                    [node.drawStart, node.drawEnd],
                    [0, 1]
                  );
                  const pathOp = useTransform(
                    progress,
                    [node.drawStart, node.drawStart + 0.04],
                    [0, 1]
                  );
                  return (
                    <React.Fragment key={i}>
                      {/* Ghost rail — full path always visible, very faint */}
                      <path
                        d={node.path}
                        stroke="rgba(0,240,255,0.06)"
                        strokeWidth="0.25"
                        fill="none"
                        strokeLinecap="square"
                      />
                      {/* Animated draw path */}
                      <motion.path
                        d={node.path}
                        stroke="#00f0ff"
                        strokeWidth="0.35"
                        fill="none"
                        strokeLinecap="square"
                        filter="url(#hc-glow)"
                        style={{ pathLength: pathDraw, opacity: pathOp }}
                      />
                      {/* Data packet square travelling the path */}
                      <motion.rect
                        x="-0.5"
                        y="-0.5"
                        width="1"
                        height="1"
                        fill="#ffffff"
                        style={{
                          offsetPath: `path("${node.path}")`,
                          offsetDistance: useTransform(
                            progress,
                            [node.drawStart, node.drawEnd],
                            ["0%", "100%"]
                          ),
                          opacity: useTransform(
                            progress,
                            [node.drawStart, node.drawStart + 0.06, node.drawEnd - 0.04, node.drawEnd],
                            [0, 1, 1, 0]
                          ),
                        }}
                      />
                    </React.Fragment>
                  );
                })}
              </svg>

              {/* ── Central hub ── positioned at SVG coords (65, 50) i.e. 65% / 50% */}
              <motion.div
                style={{
                  left: "65%",
                  top: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                  opacity: useTransform(progress, [0.05, 0.18], [0, 1]),
                  scale: useTransform(progress, [0.05, 0.18], [0.5, 1]),
                }}
                className="absolute z-20"
              >
                {/* Rings */}
                <div className="absolute w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-[#00f0ff]/10 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-[#00f0ff]/15 border-dashed rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                {/* Diamond box */}
                <div className="relative w-[72px] h-[72px] rotate-45 bg-[#02040a] border border-[#00f0ff]/55 flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.25)] overflow-hidden">
                  <div className="absolute inset-0 bg-[#00f0ff]/5" />
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]/80" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]/80" />
                  <Terminal className="w-8 h-8 text-[#00f0ff] -rotate-45" strokeWidth={1.2} />
                </div>

                {/* Label below */}
                <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="text-[#00f0ff] text-[9px] font-mono tracking-[0.4em] uppercase bg-black/60 px-3 py-1 border border-[#00f0ff]/20">
                    VK_CORE_EXEC
                  </div>
                </div>
              </motion.div>

              {/* ── Peripheral nodes ── */}
              {NODES.map((node, i) => (
                <TechNode
                  key={i}
                  x={node.x}
                  y={node.y}
                  label={node.label}
                  icon={node.icon}
                  progress={progress}
                  drawStart={node.drawStart}
                  drawEnd={node.drawEnd}
                  align={node.align}
                />
              ))}
            </div>
          </div>

          {/* Status readout */}
          <motion.div
            className="absolute bottom-10 right-8 z-30 text-right pointer-events-none"
            style={{ opacity: useTransform(progress, [0.78, 0.9], [0, 1]) }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-end gap-2">
                <span className="text-[9px] font-mono text-white/25 tracking-[0.2em]">
                  SYSTEM_STATUS
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff] animate-pulse" />
              </div>
              <div className="text-[9px] font-mono text-[#00f0ff]/40 uppercase tracking-[0.15em]">
                MCP_PROTOCOLS_SYNCED
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
