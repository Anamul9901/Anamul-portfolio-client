"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard from "@/src/components/UI/TiltCard";
import MagneticButton from "@/src/components/UI/MagneticButton";
import { siteConfig } from "@/src/config/site";
import myImage from "../../../public/Anamul-Haque-removebg.png";

const ease = [0.22, 1, 0.36, 1] as const;

const lettersOf = (text: string) =>
  text.split("").map((char, i) => ({ char: char === " " ? " " : char, key: `${char}-${i}` }));

const HeroSection = () => {
  const firstName = lettersOf("Anamul");
  const lastName = lettersOf("Haque");

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Portrait drifts up as section scrolls past
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const letterVariants = {
    hidden: { y: "115%" },
    visible: (i: number) => ({
      y: "0%",
      transition: { duration: 0.75, delay: 0.1 + i * 0.028, ease },
    }),
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24"
    >
      {/* Background — dot grid + drifting spotlights */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="spotlight spotlight-drift" style={{ top: "5%", left: "60%" }} />
      <div className="spotlight spotlight-drift" style={{ bottom: "0%", left: "-15%", opacity: 0.55 }} />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — content */}
          <div className="lg:col-span-7">

            {/* Mono caption */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mono-label flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[--accent] opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[--accent]" />
              </span>
              <span>Available for select work — 2026</span>
            </motion.div>

            {/* Display name with letter stagger */}
            <h1 className="display-heading mb-7">
              <span className="flex flex-wrap" aria-label="Anamul Haque">
                <span className="overflow-hidden inline-flex">
                  {firstName.map((l, i) => (
                    <motion.span
                      key={l.key}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {l.char}
                    </motion.span>
                  ))}
                </span>
                <span className="inline-block w-4 md:w-6" />
                <span className="overflow-hidden inline-flex">
                  {lastName.map((l, i) => (
                    <motion.span
                      key={l.key}
                      custom={i + firstName.length}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block text-[--accent]"
                    >
                      {l.char}
                    </motion.span>
                  ))}
                </span>
              </span>
            </h1>

            {/* Role line */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.75}
              variants={lineVariants}
              className="text-[--text-1] text-[16px] md:text-[17px] leading-snug max-w-xl mb-6"
            >
              Full-stack engineer building backend systems &amp; product UI.
              Currently at <span className="text-[--text-0]">Strvia</span>, Dhaka.
            </motion.p>

            {/* Bio */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.9}
              variants={lineVariants}
              className="text-[--text-1] text-[14.5px] leading-[1.8] max-w-xl mb-10"
            >
              Two years shipping high-performance backends and scalable web apps —
              microservices, multi-vendor platforms, real-time systems. I care about
              performance budgets, clean architecture, and the small details that make
              software feel quiet.
            </motion.p>

            {/* Inline links with magnetic pull */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1.05}
              variants={lineVariants}
              className="flex flex-wrap items-center gap-x-7 gap-y-4 mb-12"
            >
              <MagneticButton strength={4} radius={70}>
                <a
                  href="/Anamul_Haque_Resume_2026.pdf"
                  download="Anamul_Haque_Resume.pdf"
                  className="link-inline"
                >
                  Resume <span className="text-[--text-2]" aria-hidden>↗</span>
                </a>
              </MagneticButton>
              <MagneticButton strength={4} radius={70}>
                <a href={`mailto:${siteConfig.contact.email}`} className="link-inline">
                  Email <span className="text-[--text-2]" aria-hidden>↗</span>
                </a>
              </MagneticButton>
              {siteConfig.socials.map((s) => (
                <MagneticButton key={s.label} strength={4} radius={70}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    {s.label} <span className="text-[--text-2]" aria-hidden>↗</span>
                  </a>
                </MagneticButton>
              ))}
            </motion.div>

            {/* Scroll affordance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.35, ease }}
              className="mono-label flex items-center gap-3 text-[--text-2]"
            >
              <span className="h-px w-10 bg-[--hairline-strong]" aria-hidden />
              <span>Scroll</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                ↓
              </motion.span>
            </motion.div>
          </div>

          {/* RIGHT — portrait */}
          <motion.div
            style={{ y: portraitY, opacity: portraitOpacity }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease }}
              className="relative mx-auto max-w-[420px]"
            >
              {/* Soft mint glow behind */}
              <div
                className="absolute -inset-8 rounded-full opacity-60 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, var(--accent-glow-soft) 0%, transparent 65%)" }}
              />

              {/* L-shape corner accents */}
              <span
                aria-hidden
                className="absolute -top-2 -right-2 w-5 h-5 z-20"
                style={{ borderTop: "1px solid var(--accent)", borderRight: "1px solid var(--accent)" }}
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -left-2 w-5 h-5 z-20"
                style={{ borderBottom: "1px solid var(--accent)", borderLeft: "1px solid var(--accent)" }}
              />

              {/* Tilt portrait */}
              <TiltCard max={5} className="relative aspect-[4/5] rounded-2xl overflow-hidden surface">
                <Image
                  src={myImage}
                  alt="Anamul Haque"
                  fill
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  priority
                  className="object-cover object-top scale-105"
                  style={{ transform: "translateZ(20px)" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[--bg-0]/80 via-[--bg-0]/30 to-transparent" />

                {/* Floating mono tag */}
                <div
                  className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full hairline bg-[--bg-0]/70 backdrop-blur-md flex items-center gap-2 animate-float"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[--accent]" />
                  <span className="mono-label text-[--text-0]">Backend · Dhaka</span>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
