"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Maximum cursor-pull in px. Default 6. */
  strength?: number;
  /** Activation radius from element center in px. Default 100. */
  radius?: number;
}

const MagneticButton = ({ children, className = "", strength = 6, radius = 100 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    setEnabled(!noMotion && !isTouch);
  }, []);

  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy);
      if (d < radius) {
        const f = 1 - d / radius;
        x.set((dx / d || 0) * strength * f);
        y.set((dy / d || 0) * strength * f);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    const onLeave = () => { x.set(0); y.set(0); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, radius, strength, x, y]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={enabled ? { x, y } : undefined}
    >
      {children}
    </motion.span>
  );
};

export default MagneticButton;
