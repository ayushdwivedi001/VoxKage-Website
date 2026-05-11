"use client";
import { useEffect, useRef, useState } from "react";

const TERMINAL_SEQUENCE = [
  { delay: 400,  text: "> voxkage status", type: "cmd" },
  { delay: 700,  text: "● Mounting MCP Honeycomb…", type: "info" },
  { delay: 900,  text: "  [■■■■■■■■■■■■■■■■■■] 18/18 servers", type: "ok" },
  { delay: 1100, text: "● ACE Coding Engine → ONLINE", type: "ok" },
  { delay: 1300, text: "● Playwright DOM Engine → ONLINE", type: "ok" },
  { delay: 1500, text: "● Telegram Bridge → ONLINE", type: "ok" },
  { delay: 1700, text: "> voxkage run \"fix the CSS bug\"", type: "cmd" },
  { delay: 2100, text: "⟳ Taking screenshot of localhost:3000…", type: "info" },
  { delay: 2400, text: "⟳ Extracting AST skeleton (1,240 → 38 lines)…", type: "info" },
  { delay: 2800, text: "✓ Bug identified: overflow-x on .hero-grid", type: "ok" },
  { delay: 3100, text: "✓ Patch applied & committed: a3f9c12", type: "ok" },
  { delay: 3400, text: "✓ Telegram notification sent.", type: "ok" },
];

export default function TerminalWindow() {
  const [lines, setLines] = useState<typeof TERMINAL_SEQUENCE>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_SEQUENCE.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, line]);
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, line.delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const colorMap: Record<string, string> = {
    cmd:  "var(--px-sky)",
    ok:   "#4ade80",
    info: "rgba(186,230,253,0.7)",
  };

  return (
    <div
      className="glass glow-border"
      style={{
        borderRadius: 6,
        padding: "1.2rem 1.4rem",
        width: "100%",
        maxWidth: 560,
        minHeight: 280,
        fontFamily: "var(--font-code)",
        fontSize: "0.72rem",
        lineHeight: 1.9,
        position: "relative",
      }}
    >
      {/* Window chrome */}
      <div style={{ display: "flex", gap: 6, marginBottom: "1rem" }}>
        {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
          <span key={i} style={{
            width: 10, height: 10, borderRadius: "50%",
            background: c, display: "inline-block",
          }} />
        ))}
        <span style={{
          flex: 1, textAlign: "center", fontSize: "0.6rem",
          color: "rgba(148,163,184,0.5)",
          fontFamily: "var(--font-code)",
          letterSpacing: "0.1em",
          marginRight: "1.5rem",
        }}>
          voxkage — bash
        </span>
      </div>

      {/* Lines */}
      {lines.map((l, i) => (
        <div key={i} style={{ color: colorMap[l.type], whiteSpace: "pre" }}>
          {l.text}
        </div>
      ))}

      {/* Blinking cursor */}
      <span style={{
        display: "inline-block",
        width: 7, height: 13,
        background: "var(--px-sky)",
        animation: "termCursor 1s step-end infinite",
        verticalAlign: "middle",
        marginLeft: 2,
      }} />
      <div ref={bottomRef} />
    </div>
  );
}
