"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FooterSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const opacity = useMotionValue(0);

  // Smooth physical springs for the mouse position and fade
  const springConfig = { damping: 30, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 80 });

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!textRef.current) return;
    const rect = textRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => opacity.set(1);
  const handleMouseLeave = () => opacity.set(0);

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 1500; // 1.5 seconds for dramatic acceleration
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease-in quartic: t^4 (starts very slow, accelerates aggressively)
      const easeIn = progress * progress * progress * progress;
      const currentY = startY * (1 - easeIn);

      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const bgImage = useMotionTemplate`
    radial-gradient(
      circle 450px at ${smoothX}px ${smoothY}px, 
      rgba(41, 92, 241, ${smoothOpacity}) 0%, 
      rgba(13, 27, 42, calc(${smoothOpacity} * 0.7)) 45%, 
      rgba(255, 255, 255, 0) 100%
    ), 
    linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.1) 100%)
  `;

  return (
    <section className="relative w-full bg-[#02040a] rounded-t-[60px] md:rounded-t-[100px] flex flex-col items-center justify-between overflow-hidden pt-24 pb-8 z-20">
      
      {/* ── Footer Links / Info ── */}
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12 z-10 text-white/50 font-mono text-[11px] tracking-widest uppercase">
        
        {/* Left Side: Copyright */}
        <div className="flex items-center gap-2">
          <span>© 2026 VOXKAGE. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Center/Right Side: Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <a href="#" className="hover:text-white transition-colors duration-300">
            Documentation
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Creator
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Discord
          </a>
        </div>
      </div>

      {/* ── Scroll to Top Button ── */}
      <div className="w-full flex justify-center mt-20 z-10 relative">
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-3 text-white/30 hover:text-[#295cf1] transition-colors duration-500"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#295cf1]/50 group-hover:bg-[#295cf1]/10 transition-all duration-500">
            <ArrowUp size={16} strokeWidth={1.5} className="group-hover:-translate-y-1 transition-transform duration-500" />
          </div>
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/50">
            Return to Top
          </span>
        </button>
      </div>

      {/* ── Massive VOXKAGE Text at Bottom Center ── */}
      <div className="w-full flex justify-center mt-20 select-none relative z-0">
        <motion.h1
          ref={textRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-medium tracking-tighter text-white"
          style={{
            fontSize: "clamp(4rem, 15vw, 11rem)",
            lineHeight: 1,
            backgroundImage: bgImage,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "default"
          }}
        >
          VOXKAGE
        </motion.h1>
      </div>

    </section>
  );
}
