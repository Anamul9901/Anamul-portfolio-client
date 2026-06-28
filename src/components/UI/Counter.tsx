"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  /** Numeric target. */
  to: number;
  /** Optional suffix, e.g. "+". */
  suffix?: string;
  /** Duration in seconds. Default 1.6. */
  duration?: number;
  className?: string;
}

const Counter = ({ to, suffix = "", duration = 1.6, className = "" }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduced) { setValue(to); return; }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

export default Counter;
