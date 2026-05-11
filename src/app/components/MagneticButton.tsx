"use client";
import { useRef, useEffect } from "react";

/* Magnetic button – pulls toward cursor on hover */
export default function MagneticButton({
  children,
  href,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnter = (e: MouseEvent) => {
      el.style.transition = "transform 0.05s linear";
    };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => {
      el.style.transition = "transform 0.4s cubic-bezier(0.23,1,0.32,1)";
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-pixel)",
    fontSize: "0.55rem",
    letterSpacing: "0.12em",
    padding: "0.85rem 1.8rem",
    borderRadius: 3,
    cursor: "none",
    textDecoration: "none",
    transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s",
    userSelect: "none",
  };

  const primaryStyle: React.CSSProperties = {
    ...base,
    background: "linear-gradient(135deg, #1e6ca8 0%, #38bdf8 60%, #06b6d4 100%)",
    color: "#fff",
    border: "none",
    boxShadow: "0 0 0 1px rgba(56,189,248,0.3), 0 8px 32px rgba(56,189,248,0.2)",
  };

  const ghostStyle: React.CSSProperties = {
    ...base,
    background: "transparent",
    color: "var(--px-sky)",
    border: "1px solid rgba(56,189,248,0.35)",
  };

  const style = variant === "primary" ? primaryStyle : ghostStyle;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
        data-hover
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={style}
      data-hover
      onClick={onClick}
    >
      {children}
    </button>
  );
}
