"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  MousePointer2,
  ImageIcon,
  MonitorCheck,
  Eye,
  ScanLine,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// COORDINATE SYSTEM  (identical to HoneycombSection)
// SVG viewBox "0 0 100 100", preserveAspectRatio="xMidYMid meet"
// Container: absolute div from left:38% to right:0, full height.
// Hub at SVG (50, 50) — centred in the right panel.
// Node x/y % match SVG coords so paths land exactly on icons.
// ─────────────────────────────────────────────────────────────────────────────

const HUB_X = 44;
const HUB_Y = 50;

// Diagonal "scan ray" paths — start directly from the center of the hub for unified scroll animation origin
const NODES = [
  {
    // Upper-left diagonal → GUI Pilot
    path: `M ${HUB_X} ${HUB_Y} L 16 22`,
    x: 16, y: 22,
    label: "GUI PILOT",
    icon: MousePointer2,
    drawStart: 0.15, drawEnd: 0.38,
    align: "right" as const,
    accentColor: "#a78bfa", // violet
  },
  {
    // Right horizontal → Visual Validation
    path: `M ${HUB_X} ${HUB_Y} L 72 50`,
    x: 72, y: 50,
    label: "VISUAL VALIDATION",
    icon: ImageIcon,
    drawStart: 0.38, drawEnd: 0.60,
    align: "left" as const,
    accentColor: "#34d399", // emerald
  },
  {
    // Lower-left diagonal → Visual QA
    path: `M ${HUB_X} ${HUB_Y} L 16 78`,
    x: 16, y: 78,
    label: "VISUAL QA",
    icon: MonitorCheck,
    drawStart: 0.60, drawEnd: 0.82,
    align: "right" as const,
    accentColor: "#f59e0b", // amber
  },
] as const;

// ─── Node component ───────────────────────────────────────────────────────────
const VisionNode = ({
  x, y, label, icon: Icon, progress, drawStart, drawEnd, align, accentColor,
}: {
  x: number; y: number; label: string; icon: any;
  progress: any; drawStart: number; drawEnd: number;
  align: "left" | "right"; accentColor: string;
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
      className="z-20 pointer-events-auto w-11 h-11 flex items-center justify-center"
    >
      <div className="group relative w-full h-full shrink-0">
        <div
          className="absolute -inset-3 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
          style={{ backgroundColor: `${accentColor}18` }}
        />
        <div
          className="relative w-full h-full bg-[#02040a] flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-300"
          style={{ border: `1px solid ${accentColor}50`, boxShadow: `0 0 0 0 ${accentColor}00` }}
        >
          {/* Corner brackets in accent color */}
          <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l" style={{ borderColor: accentColor }} />
          <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b border-r" style={{ borderColor: accentColor }} />
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>

      {/* Label positioned absolutely relative to the centered icon */}
      {align === "right" ? (
        <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 flex flex-col items-end text-right select-none pointer-events-none">
          <span className="text-[8px] font-mono tracking-[0.25em] uppercase leading-none" style={{ color: `${accentColor}80` }}>
            VISION_{label.split(" ")[0]}
          </span>
          <span className="text-[11px] font-medium tracking-[0.1em] text-white uppercase mt-1 leading-none whitespace-nowrap">
            {label}
          </span>
        </div>
      ) : (
        <div className="absolute left-[calc(100%+16px)] top-1/2 -translate-y-1/2 flex flex-col items-start text-left select-none pointer-events-none">
          <span className="text-[8px] font-mono tracking-[0.25em] uppercase leading-none" style={{ color: `${accentColor}80` }}>
            VISION_{label.split(" ")[0]}
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
export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── SCROLL LOCK — do not change these offsets ──
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Heading animations
  const headingOp = useTransform(progress, [0, 0.14], [0, 1]);
  const headingX  = useTransform(progress, [0, 0.14], [-32, 0]);

  // Hub animations
  const hubOp    = useTransform(progress, [0.05, 0.18], [0, 1]);
  const hubScale = useTransform(progress, [0.05, 0.18], [0.4, 1]);

  // Status
  const statusOp = useTransform(progress, [0.78, 0.9], [0, 1]);

  // Scan line sweeping across the hub (looped via CSS)
  const scanOp = useTransform(progress, [0.05, 0.2], [0, 1]);

  return (
    <>
      {/* ══ MOBILE LAYOUT (< md) — static, no sticky scroll ══ */}
      <section className="md:hidden relative w-full bg-[#02040a] py-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(167,139,250,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,#02040a_90%)] pointer-events-none" />
        <div className="relative z-10 max-w-lg mx-auto flex flex-col gap-10">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#a78bfa]/25 bg-[#a78bfa]/5 px-3 py-1 mb-5">
              <ScanLine size={12} className="text-[#a78bfa]" />
              <span className="text-[#a78bfa] text-[9px] font-mono tracking-[0.35em] uppercase">Protocol // III.II</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
              MULTI-MODAL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#34d399] font-light">VISION &amp; GUI</span>
            </h2>
            <div className="border-l-2 border-[#a78bfa]/20 pl-4">
              <p className="text-sm text-white/45 font-light leading-relaxed">
                VoxKage doesn&apos;t just read code — It <em className="text-white/70 not-italic">sees</em> your screen. A full vision pipeline lets it perceive, reason about, and interact with any UI element on the desktop.
              </p>
              <div className="text-[9px] font-mono text-[#a78bfa]/35 tracking-widest uppercase mt-2">&gt; BOOTING_VISION_PIPELINE</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {NODES.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={i} className="flex items-center gap-4 border border-white/5 bg-white/3 px-4 py-3 rounded-lg" style={{ borderColor: `${node.accentColor}20` }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 relative" style={{ border: `1px solid ${node.accentColor}50` }}>
                    <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l" style={{ borderColor: node.accentColor }} />
                    <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r" style={{ borderColor: node.accentColor }} />
                    <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: node.accentColor }} />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono tracking-[0.2em] uppercase" style={{ color: `${node.accentColor}70` }}>VISION_{node.label.split(" ")[0]}</div>
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
              "linear-gradient(rgba(167,139,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,transparent_25%,#02040a_75%)] z-0 pointer-events-none" />

        {/* ── Left text panel ── */}
        <div className="relative z-30 w-full md:w-[45%] lg:w-[38%] pl-6 sm:pl-10 md:pl-16 pr-6 md:pr-4 pointer-events-none select-none bg-gradient-to-r from-[#02040a] via-[#02040a]/80 to-transparent md:bg-none py-10 md:py-0">
          <motion.div style={{ opacity: headingOp, x: headingX }}>
            <div className="inline-flex items-center gap-2 border border-[#a78bfa]/25 bg-[#a78bfa]/5 px-3 py-1 mb-6">
              <ScanLine size={12} className="text-[#a78bfa]" />
              <span className="text-[#a78bfa] text-[9px] font-mono tracking-[0.35em] uppercase">
                Protocol // III.II
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-5 uppercase leading-[0.9]">
              MULTI-MODAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#34d399] font-light">
                VISION & GUI
              </span>
            </h2>

            <div className="border-l-2 border-[#a78bfa]/20 pl-4 flex flex-col gap-3">
              <p className="text-sm text-white/45 font-light leading-relaxed max-w-xs">
                VoxKage doesn't just read code — It <em className="text-white/70 not-italic">sees</em> your screen. A full vision
                pipeline lets it perceive, reason about, and interact with any
                UI element on the desktop.
              </p>
              <div className="text-[9px] font-mono text-[#a78bfa]/35 tracking-widest uppercase">
                &gt; BOOTING_VISION_PIPELINE
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Right diagram panel (same layout as HoneycombSection) ── */}
        <div className="absolute inset-0 md:left-[45%] lg:left-[38%] z-10 opacity-60 md:opacity-100 flex items-center justify-center">
          <div className="relative w-full aspect-square max-h-full max-w-full">

            {/* SVG — scan-ray paths */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
            >
              <defs>
                <filter id="vision-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="0.9" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Radial sweep gradient for the "scanning" aura */}
                <radialGradient id="scan-aura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Animated scanning aura behind hub */}
              <motion.circle
                cx={HUB_X} cy={HUB_Y} r="18"
                fill="url(#scan-aura)"
                style={{ opacity: scanOp }}
              />

              {/* Three scan-ray paths */}
              {NODES.map((node, i) => {
                const pathDraw = useTransform(progress, [node.drawStart, node.drawEnd], [0, 1]);
                const pathOp   = useTransform(progress, [node.drawStart, node.drawStart + 0.04], [0, 1]);

                // ─── MATHEMATICAL PACKET MOTION ───
                // Prevents offset-path desync by calculating SVG viewBox coordinates directly!
                let dotCx, dotCy;
                if (i === 0) {
                  // Upper-left diagonal: (44, 50) → (16, 22)
                  dotCx = useTransform(progress, [node.drawStart, node.drawEnd], [44, 16]);
                  dotCy = useTransform(progress, [node.drawStart, node.drawEnd], [50, 22]);
                } else if (i === 1) {
                  // Right horizontal: (44, 50) → (72, 50)
                  dotCx = useTransform(progress, [node.drawStart, node.drawEnd], [44, 72]);
                  dotCy = 50;
                } else {
                  // Lower-left diagonal: (44, 50) → (16, 78)
                  dotCx = useTransform(progress, [node.drawStart, node.drawEnd], [44, 16]);
                  dotCy = useTransform(progress, [node.drawStart, node.drawEnd], [50, 78]);
                }

                return (
                  <React.Fragment key={i}>
                    {/* Ghost rail */}
                    <path
                      d={node.path}
                      stroke={`${node.accentColor}10`}
                      strokeWidth="0.3"
                      fill="none"
                    />
                    {/* Animated draw */}
                    <motion.path
                      d={node.path}
                      stroke={node.accentColor}
                      strokeWidth="0.4"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#vision-glow)"
                      style={{ pathLength: pathDraw, opacity: pathOp }}
                    />
                    {/* Mathematical Data packet */}
                    <motion.circle
                      cx={dotCx}
                      cy={dotCy}
                      r="0.8"
                      fill="#ffffff"
                      style={{
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

              {/* SVG mask to cover lines inside the central octagonal hub */}
              <polygon
                points={`${HUB_X - 3.5} ${HUB_Y - 8.5}, ${HUB_X + 3.5} ${HUB_Y - 8.5}, ${HUB_X + 8.5} ${HUB_Y - 3.5}, ${HUB_X + 8.5} ${HUB_Y + 3.5}, ${HUB_X + 3.5} ${HUB_Y + 8.5}, ${HUB_X - 3.5} ${HUB_Y + 8.5}, ${HUB_X - 8.5} ${HUB_Y + 3.5}, ${HUB_X - 8.5} ${HUB_Y - 3.5}`}
                fill="#02040a"
              />
            </svg>

            {/* ── Central hub — Eye / Vision Core ── */}
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
              {/* Outer sweeping rings */}
              <div className="absolute w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-[#a78bfa]/10 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 border border-[#a78bfa]/15 border-dashed rounded-full animate-[spin_18s_linear_infinite_reverse]" />

              {/* Octagonal hub (clip-path approximation via large border-radius) */}
              <div
                className="relative w-[72px] h-[72px] bg-[#02040a] flex items-center justify-center overflow-hidden"
                style={{
                  border: "1px solid rgba(167,139,250,0.55)",
                  boxShadow: "0 0 40px rgba(167,139,250,0.2), inset 0 0 20px rgba(167,139,250,0.05)",
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <div className="absolute inset-0 bg-[#a78bfa]/5" />
                {/* Horizontal scan sweep */}
                <div className="absolute inset-0 w-full h-[2px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#a78bfa]/60 to-transparent animate-[scanH_2s_ease-in-out_infinite]" />
                <Eye className="w-8 h-8 text-[#a78bfa]" strokeWidth={1.2} />
              </div>

              {/* Label */}
              <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-[#a78bfa] text-[9px] font-mono tracking-[0.4em] uppercase bg-black/60 px-3 py-1 border border-[#a78bfa]/20">
                  VK_VISION_CORE
                </div>
              </div>
            </motion.div>

            {/* ── Peripheral nodes ── */}
            {NODES.map((node, i) => (
              <VisionNode
                key={i}
                x={node.x}
                y={node.y}
                label={node.label}
                icon={node.icon}
                progress={progress}
                drawStart={node.drawStart}
                drawEnd={node.drawEnd}
                align={node.align}
                accentColor={node.accentColor}
              />
            ))}
          </div>
        </div>

        {/* Status readout */}
        <motion.div
          className="absolute bottom-10 right-8 z-30 text-right pointer-events-none"
          style={{ opacity: statusOp }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[9px] font-mono text-white/25 tracking-[0.2em]">
                VISION_PIPELINE
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_6px_#a78bfa] animate-pulse" />
            </div>
            <div className="text-[9px] font-mono text-[#a78bfa]/40 uppercase tracking-[0.15em]">
              GUI_AUTOMATION_READY
            </div>
          </div>
        </motion.div>

      </div>

      </section>
    </>
  );
}

