"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { scrollToTop } from "@/src/lib/lenis";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    // Check initial position (in case page loads mid-scroll)
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[999] w-10 h-10 rounded-full flex items-center justify-center bg-[--bg-2] hairline text-[--accent] hover:bg-[--accent] hover:text-[--accent-contrast] hover:border-[--accent] transition-all duration-200 cursor-pointer shadow-lg"
        >
          <FaArrowUp className="w-3.5 h-3.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
