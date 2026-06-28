"use client";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useScrollAnimation, fadeInUp } from "@/src/hooks/useScrollAnimation";

const socials = [
  { href: "https://github.com/Anamul9901",                       icon: FaGithub,   label: "GitHub" },
  { href: "https://www.linkedin.com/in/anamul-haque9901/",       icon: FaLinkedin, label: "LinkedIn" },
];

const Footer = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <footer className="hairline-t mt-16" ref={ref}>
      <div className="section-container py-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-md hairline flex items-center justify-center mono text-[10px] text-[--accent] bg-[--accent-soft]">
              AH
            </span>
            <span className="text-[13px] text-[--text-1]">
              Anamul Haque · <span className="text-[--text-2]">Engineer, Dhaka</span>
            </span>
          </div>

          <div className="flex items-center gap-6 mono-label">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-[--text-1] hover:text-[--accent] transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
            <ScrollLink
              to="home"
              smooth
              duration={700}
              className="cursor-pointer flex items-center gap-1 text-[--text-1] hover:text-[--accent] transition-colors duration-200"
            >
              <span>Back to top</span>
              <span aria-hidden>↑</span>
            </ScrollLink>
          </div>
        </motion.div>

        <div className="mono-label mt-8 text-[--text-2]">
          © {new Date().getFullYear()} — Designed &amp; built in Dhaka.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
