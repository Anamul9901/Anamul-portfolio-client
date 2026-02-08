"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import myImage from "../../../public/Anamul-Haque-removebg.png";

const HeroSection = () => {
  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: [
        "Full-Stack Web Developer",
        "Backend Specialist",
        "ICPC Finalist 2025",
        "Problem Solver",
      ],
      autoStart: true,
      loop: true,
      delay: 50,
      deleteSpeed: 30,
    });
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { value: "2+", label: "Years Exp" },
    { value: "25+", label: "Projects" },
    { value: "ICPC", label: "Finalist" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/anamul-haque-772264299/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/Anamul9901", icon: FaGithub, label: "GitHub" },
    { href: "https://www.facebook.com/Anamul114", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.codechef.com/users/anamul9901", icon: SiCodechef, label: "CodeChef" },
    { href: "https://codeforces.com/profile/Anamul9901", icon: SiCodeforces, label: "Codeforces" },
  ];

  return (
    <section className="min-h-screen py-20 md:py-32 relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-teal-500 font-medium mb-2">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            >
              Anamul Haque
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-default-500 mb-6"
            >
              <span className="gradient-text" id="typewriter"></span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-default-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              2 years of experience building high-performance backend systems and scalable web applications.
              Specializing in optimizing application speed and creating architectures that maximize user impact.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-8 mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-default-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              className="flex justify-center lg:justify-start items-center gap-3 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={socialVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-default-300 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300 text-lg hover:text-teal-500 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a href="/Anamul_Haque_Resume_2026.pdf" download="Anamul_Haque_Resume.pdf">
                <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                  <FaDownload />
                  Download CV
                </button>
              </a>
              <a href="#contact">
                <button className="px-6 py-3 rounded-full font-semibold border border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-all duration-300 w-full sm:w-auto">
                  Let&apos;s Talk
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section - Premium Redesign */}
          <motion.div
            className="flex-1 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              {/* <motion.div
                className="absolute inset-0 -m-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="200"
                    cy="200"
                    r="195"
                    fill="none"
                    stroke="url(#heroGradient)"
                    strokeWidth="2"
                    strokeDasharray="20 10"
                  />
                </svg>
              </motion.div> */}

              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute inset-0 -m-1"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    fill="none"
                    stroke="url(#heroGradient)"
                    strokeWidth="1"
                    strokeDasharray="5 15"
                    opacity="0.5"
                  />
                </svg>
              </motion.div>

              {/* Glowing background blur */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-purple-500/20 rounded-full blur-2xl" />

              {/* Main image with hexagon-like shape */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Clip path container */}
                <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
                  {/* Gradient border ring */}
                  <div
                    className="absolute inset-0 rounded-full p-[3px]"
                    style={{
                      background: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 25%, #a855f7 50%, #06b6d4 75%, #14b8a6 100%)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
                  </div>

                  {/* Image */}
                  <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-default-100/80 to-default-200/60">
                    <Image
                      src={myImage}
                      alt="Anamul Haque"
                      fill
                      priority
                      className="object-cover scale-110 object-top"
                    />
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                    }}
                    animate={{
                      backgroundPosition: ["200% 200%", "-200% -200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating particles */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/4 -right-6 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-6 w-2 h-2 bg-teal-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Status badge */}
              {/* <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-default-100/80 backdrop-blur-sm border border-teal-500/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-default-400 font-medium">Available for work</span>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-default-400 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-teal-500 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
