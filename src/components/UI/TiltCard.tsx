"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. Default 6. */
  max?: number;
  /** Lift element forward on hover (translateZ in px). Default 0. */
  liftZ?: number;
  /** Wrapper element. Default div. */
  as?: "div" | "article" | "section";
}

/**
 * Wraps children with a subtle mouse-tracking 3D tilt.
 * - Disabled under prefers-reduced-motion
 * - Disabled on touch devices
 * - Resets smoothly on leave
 */
const TiltCard = ({ children, className = "", max = 6, liftZ = 0, as = "div" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Check capability after mount (avoid SSR mismatch)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    setEnabled(!noMotion && !isTouch);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), springCfg);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), springCfg);
  const z = useSpring(0, springCfg);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onMouseEnter = () => { if (enabled) z.set(liftZ); };
  const onMouseLeave = () => {
    if (!enabled) return;
    mx.set(0);
    my.set(0);
    z.set(0);
  };

  const MotionTag = (motion as any)[as];

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={enabled ? {
        rotateX,
        rotateY,
        translateZ: z,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      } : undefined}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default TiltCard;
