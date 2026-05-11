"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BOOT_LINES = [
  "INITIALIZING VOXKAGE KERNEL...",
  "MOUNTING MCP HONEYCOMB [ 18 / 18 ]",
  "LINKING GEMINI FLASH AMPLIFIER...",
  "ACE CODING ENGINE → ONLINE",
  "PLAYWRIGHT DOM ENGINE → ONLINE",
  "TELEGRAM BRIDGE → ONLINE",
  "OS SHELL EXECUTOR → ONLINE",
  "SYSTEM READY. WELCOME TO VOXKAGE.",
];

interface LoaderProps {
  onDone: () => void;
}

export default function Loader({ onDone }: LoaderProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [statusText, setStatusText] = useState(BOOT_LINES[0]);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    const step = 100 / BOOT_LINES.length;

    const tick = () => {
      if (cancelled || lineIdx >= BOOT_LINES.length) {
        if (!cancelled) {
          gsap.to("#loader", {
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            onComplete: onDone,
          });
        }
        return;
      }
      const nextPct = Math.min(100, Math.round(step * (lineIdx + 1)));
      setStatusText(BOOT_LINES[lineIdx]);
      setPct(nextPct);
      lineIdx++;
      setTimeout(tick, 320);
    };

    setTimeout(tick, 200);
    return () => { cancelled = true; };
  }, [onDone]);

  return (
    <div id="loader">
      <div className="loader-scanline" />

      {/* Pixel title */}
      <p className="loader-pixel-title">VOXKAGE</p>

      {/* Progress bar */}
      <div className="loader-bar-wrap">
        <div
          ref={barRef}
          className="loader-bar"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Status */}
      <div ref={statusRef} className="loader-status"
        style={{ minWidth: 280, textAlign: "center" }}>
        {statusText}
      </div>

      {/* Percentage */}
      <p style={{
        fontFamily: "var(--font-code)",
        fontSize: "0.6rem",
        color: "rgba(56,189,248,0.35)",
        letterSpacing: "0.15em",
      }}>
        {pct}%
      </p>
    </div>
  );
}
