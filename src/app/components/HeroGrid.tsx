"use client";
import { useEffect, useRef } from "react";

/* Draws a reactive dot-grid on canvas that follows mouse */
export default function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    let mx = W / 2, my = H / 2;
    let raf: number;

    const COLS = Math.floor(W / 44);
    const ROWS = Math.floor(H / 44);
    const RADIUS = 180;

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let r = 0; r <= ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const x = c * 44;
          const y = r * 44;
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const influence = Math.max(0, 1 - dist / RADIUS);
          const alpha = 0.08 + influence * 0.55;
          const dotSize = 1 + influence * 2.5;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56,189,248,${alpha.toFixed(3)})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
}
