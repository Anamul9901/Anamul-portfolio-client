"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Two-layer cursor light system:
 *  - Sharp core dot at exact cursor (no lag)        — the "pointer"
 *  - Mid glow (small spring lag)                    — the "warm halo"
 *  - Diffuse halo with heavier lag                  — the "atmosphere"
 *
 * All layers use mix-blend-mode: plus-lighter so the mint glow is
 * additive — visible on any surface without darkening anything.
 *
 * Hidden on touch + prefers-reduced-motion.
 */
const CursorSpotlight = () => {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  // All hooks must run unconditionally on every render — declare up front.
  const hx = useMotionValue(-1000);
  const hy = useMotionValue(-1000);
  const cx = useMotionValue(-1000);
  const cy = useMotionValue(-1000);

  const haloX = useSpring(hx, { stiffness: 80, damping: 22, mass: 0.7 });
  const haloY = useSpring(hy, { stiffness: 80, damping: 22, mass: 0.7 });
  const midX = useSpring(cx, { stiffness: 220, damping: 24, mass: 0.4 });
  const midY = useSpring(cy, { stiffness: 220, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (noMotion || isTouch) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      hx.set(e.clientX);
      hy.set(e.clientY);
      cx.set(e.clientX);
      cy.set(e.clientY);
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [hx, hy, cx, cy]);

  if (!enabled) return null;

  return (
    <>
      {/* Layer 1 — Diffuse halo (lagged, atmospheric) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[1]"
        style={{
          x: haloX,
          y: haloY,
          opacity: active ? 1 : 0,
          mixBlendMode: "plus-lighter",
          transition: "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          style={{
            width: 760,
            height: 760,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.08) 30%, rgba(245,158,11,0.02) 55%, transparent 75%)",
            filter: "blur(30px)",
          }}
        />
      </motion.div>

      {/* Layer 2 — Mid glow (small lag) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[2]"
        style={{
          x: midX,
          y: midY,
          opacity: active ? 1 : 0,
          mixBlendMode: "plus-lighter",
          transition: "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.26) 0%, rgba(245,158,11,0.08) 40%, transparent 70%)",
            filter: "blur(14px)",
          }}
        />
      </motion.div>

      {/* Layer 3 — Sharp core dot (no lag) */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[3]"
        style={{
          x: cx,
          y: cy,
          opacity: active ? 1 : 0,
          mixBlendMode: "plus-lighter",
          transition: "opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,237,194,0.46) 0%, rgba(245,158,11,0.26) 35%, transparent 70%)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorSpotlight;
