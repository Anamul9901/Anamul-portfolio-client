"use client";

import { useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const useScrollAnimation = (threshold: number = 0.18) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return { ref, controls, isInView };
};

/* ===== Quiet futurism motion language =====
   - All distance reductions: 40px -> 16px
   - All durations: 0.6s, single easing
   - Stagger: 60ms between children, 80ms initial delay
*/

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* Retired but kept as no-op exports so any stragglers don't break imports */
export const floatAnimation = {
    animate: { y: [0, -6, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
};

export const glowPulse = {
    animate: { opacity: [0.8, 1, 0.8], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
};
