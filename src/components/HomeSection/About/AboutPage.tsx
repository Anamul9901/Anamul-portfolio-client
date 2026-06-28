"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  useScrollAnimation,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import Counter from "@/src/components/UI/Counter";
import myImage from "../../../../public/Anamul-Haque-removebg.png";

const meta = [
  { label: "Location",  value: "Dhaka, Bangladesh" },
  { label: "Focus",     value: "Backend systems" },
  { label: "Stack",     value: "TS · Node · Next" },
  { label: "Available", value: "Select work, 2026" },
];

interface Stat {
  numeric?: number;
  suffix?: string;
  text?: string;
  label: string;
}

const stats: Stat[] = [
  { numeric: 2,  suffix: "+",   label: "Years experience" },
  { numeric: 25, suffix: "+",   label: "Projects shipped" },
  { text: "ICPC",                label: "Regionalist '25" },
  { text: "1st",                 label: "Hackathon win" },
];

const AboutPage = () => {
  const { ref, controls } = useScrollAnimation(0.18);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref as any}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <SectionHeader
            index="01"
            label="About"
            title={<>A quiet build for <span className="text-[--accent]">durable software</span>.</>}
            subtitle="Two years building backends in production. Sharpened on competitive programming, refined by client work."
          />

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">

            {/* Left — portrait + meta */}
            <motion.div variants={fadeInLeft} className="md:col-span-5">
              <motion.div
                style={{ y: portraitY }}
                className="relative aspect-[4/5] surface overflow-hidden will-change-transform"
              >
                <Image
                  src={myImage}
                  alt="Anamul Haque"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-top scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[--bg-0] to-transparent pointer-events-none" />
                {/* Hairline corner accents */}
                <span aria-hidden className="absolute top-2 right-2 w-4 h-4" style={{ borderTop: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }} />
                <span aria-hidden className="absolute bottom-2 left-2 w-4 h-4" style={{ borderBottom: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }} />
              </motion.div>

              <dl className="mt-6 divide-y divide-[--hairline]">
                {meta.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between py-3">
                    <dt className="mono-label">{row.label}</dt>
                    <dd className="text-[14px] text-[--text-0]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            {/* Right — bio + stats + languages */}
            <motion.div variants={fadeInRight} className="md:col-span-7 space-y-7">
              <motion.p variants={fadeInUp} className="text-[--text-1] text-[16px] leading-[1.8]">
                Full-stack web developer focused on{" "}
                <span className="text-[--text-0]">high-performance backend systems</span>.
                Track record of optimizing application speed and shipping scalable architectures
                that survive real traffic.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-[--text-1] text-[15px] leading-[1.8]">
                Currently a Backend Developer at{" "}
                <span className="text-[--text-0]">Strvia</span> — designing and maintaining
                multi-vendor platforms on a microservices stack. Off-hours: ICPC regionalist,
                hackathon winner, and the occasional UI experiment.
              </motion.p>

              {/* Stats strip */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-4 hairline-t hairline-b"
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    variants={staggerItem}
                    className={`group relative py-5 px-1 ${i !== 0 ? "sm:border-l border-[--hairline]" : ""} ${i % 2 === 1 ? "border-l border-[--hairline] sm:border-l" : ""}`}
                  >
                    <div className="mono text-[26px] tracking-tight text-[--text-0]">
                      {s.numeric !== undefined ? (
                        <Counter to={s.numeric} suffix={s.suffix ?? ""} />
                      ) : (
                        s.text
                      )}
                    </div>
                    <div className="mono-label mt-1">{s.label}</div>
                    {/* underline draw on hover */}
                    <span
                      aria-hidden
                      className="absolute left-0 bottom-0 h-px w-0 bg-[--accent] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Languages — single line */}
              <motion.div variants={fadeInUp} className="flex items-baseline gap-3 text-[14px]">
                <span className="mono-label shrink-0">Speaks</span>
                <span className="text-[--text-1]">
                  Bangla <span className="text-[--text-2]">(native)</span>
                  <span className="mx-2 text-[--text-2]">·</span>
                  English <span className="text-[--text-2]">(proficient)</span>
                  <span className="mx-2 text-[--text-2]">·</span>
                  Hindi <span className="text-[--text-2]">(basic)</span>
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
