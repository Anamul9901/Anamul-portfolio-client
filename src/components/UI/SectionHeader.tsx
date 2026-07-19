"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/hooks/useScrollAnimation";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({ index, label, title, subtitle, align = "left", className = "" }: Props) => {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      variants={fadeInUp}
      className={`flex flex-col ${alignClass} gap-4 mb-14 md:mb-16 ${className}`}
    >
      <div className="mono-label flex items-center gap-3">
        <span className="text-[--accent]">{index}</span>
        <span className="h-px w-8 bg-[--hairline-strong]" aria-hidden />
        <span>{label}</span>
      </div>
      <h2 className="section-heading max-w-2xl">{title}</h2>
      {subtitle && (
        <p className="text-[--text-1] text-[15px] leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
