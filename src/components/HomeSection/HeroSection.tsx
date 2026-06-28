"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import myImage from "../../../public/Anamul-Haque-removebg.png";

const ease = [0.22, 1, 0.36, 1] as const;

const lettersOf = (text: string) =>
  text.split("").map((char, i) => ({ char: char === " " ? " " : char, key: `${char}-${i}` }));

const HeroSection = () => {
  const firstName = lettersOf("Anamul");
  const lastName = lettersOf("Haque");

  const letterVariants = {
    hidden: { y: "110%" },
    visible: (i: number) => ({
      y: "0%",
      transition: { duration: 0.7, delay: 0.05 + i * 0.025, ease },
    }),
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background — dot grid + drifting spotlight */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="spotlight spotlight-drift" style={{ top: "10%", left: "55%" }} />
      <div className="spotlight spotlight-drift" style={{ bottom: "5%", left: "-10%", opacity: 0.55 }} />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl">

          {/* Mono caption */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mono-label flex items-center gap-3 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[--accent] animate-pulse" />
            <span>Available for select work — 2026</span>
          </motion.div>

          {/* Display name with letter stagger */}
          <h1 className="display-heading mb-6">
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

          {/* Role line with avatar */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={lineVariants}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-full hairline overflow-hidden shrink-0 bg-[--bg-2]">
              <Image
                src={myImage}
                alt="Anamul Haque"
                width={96}
                height={96}
                priority
                className="object-cover object-top w-full h-full scale-110"
              />
            </div>
            <p className="text-[--text-1] text-[15px] md:text-base leading-snug max-w-xl">
              Full-stack engineer building backend systems &amp; product UI.
              Currently at <span className="text-[--text-0]">Strvia</span>, Dhaka.
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.85}
            variants={lineVariants}
            className="text-[--text-1] text-[15px] leading-[1.75] max-w-xl mb-10"
          >
            Two years shipping high-performance backends and scalable web apps —
            microservices, multi-vendor platforms, real-time systems. I care about
            performance budgets, clean architecture, and the small details that make
            software feel quiet.
          </motion.p>

          {/* Inline links */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1.0}
            variants={lineVariants}
            className="flex flex-wrap items-center gap-x-7 gap-y-4 mb-14"
          >
            <a
              href="/Anamul_Haque_Resume_2026.pdf"
              download="Anamul_Haque_Resume.pdf"
              className="link-inline"
            >
              Resume <span className="text-[--text-2]" aria-hidden>↗</span>
            </a>
            <a href="mailto:anamulhaque9901@gmail.com" className="link-inline">
              Email <span className="text-[--text-2]" aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/Anamul9901"
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline"
            >
              GitHub <span className="text-[--text-2]" aria-hidden>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anamul-haque9901/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-inline"
            >
              LinkedIn <span className="text-[--text-2]" aria-hidden>↗</span>
            </a>
          </motion.div>

          {/* Scroll affordance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3, ease }}
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
      </div>
    </section>
  );
};

export default HeroSection;
