"use client";

import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { scrollToSection } from "@/src/lib/lenis";

const navItems = [
  { label: "Home",         to: "home" },
  { label: "About",        to: "about" },
  { label: "Experience",   to: "experience" },
  { label: "Skills",       to: "skills" },
  { label: "Achievements", to: "achievements" },
  { label: "Education",    to: "education" },
  { label: "Projects",     to: "projects" },
  { label: "Contact",      to: "contact" },
];

/**
 * In-app smooth-scroll link. Uses the Lenis singleton (one scroll driver),
 * so it stays in sync with smooth-wheel scrolling instead of fighting it.
 */
const NavLink = ({
  to,
  className,
  onClick,
  children,
}: {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={`#${to}`}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(to);
      onClick?.();
    }}
  >
    {children}
  </a>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!isHomePage) return;
      let current = "";
      for (const { to } of navItems) {
        const el = document.getElementById(to);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom >= 120) current = to;
        }
      }
      if (current) setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[1000]"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[--bg-0]/70 backdrop-blur-xl border-b border-[--hairline]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <NextLink
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-7 h-7 rounded-md hairline flex items-center justify-center mono text-[11px] text-[--accent] bg-[--accent-soft]">
                AH
              </span>
              <span className="text-[14px] font-medium tracking-tight text-[--text-0] hidden sm:inline">
                Anamul Haque
              </span>
            </NextLink>

            {/* Desktop nav — pill with hairline */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-1.5 py-1 rounded-full hairline bg-[--bg-1]/40 backdrop-blur-md">
                {navItems.map((item) => {
                  const isActive =
                    (isHomePage && activeSection === item.to) ||
                    (!isHomePage && item.to === "projects" && pathname.startsWith("/projects"));

                  const className =
                    "group/nav relative px-3 py-1.5 rounded-full text-[12.5px] font-medium transition-colors duration-200 cursor-pointer";
                  const colorClass = isActive
                    ? "text-[--text-0]"
                    : "text-[--text-2] hover:text-[--text-0]";

                  const inner = (
                    <span className="relative z-10 inline-flex items-center">
                      {item.label}
                      {!isActive && (
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px w-0 bg-[--accent] transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:w-3/5"
                        />
                      )}
                    </span>
                  );

                  const pill = isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[--bg-2] hairline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  );

                  return isHomePage ? (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={`${className} ${colorClass}`}
                    >
                      {pill}
                      {inner}
                    </NavLink>
                  ) : (
                    <NextLink
                      key={item.to}
                      href={item.to === "projects" ? "/projects" : `/#${item.to}`}
                      className={`${className} ${colorClass}`}
                    >
                      {pill}
                      {inner}
                    </NextLink>
                  );
                })}
              </div>
            </div>

            {/* CTA + mobile button */}
            <div className="flex items-center gap-2">
              <NavLink
                to="contact"
                className="hidden md:inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[--text-0] hover:text-[--accent] transition-colors duration-200"
              >
                Let&apos;s talk
                <span className="text-[--accent]">→</span>
              </NavLink>
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hairline text-[--text-0]"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-[60] bg-[--bg-0]"
          >
            <div className="h-full flex flex-col px-5 pt-20 pb-10">
              <nav className="flex-1 flex flex-col justify-center gap-1">
                {navItems.map((item, i) => {
                  const isActive = isHomePage && activeSection === item.to;
                  const inner = (
                    <>
                      <span className="mono-label w-8">{String(i + 1).padStart(2, "0")}</span>
                      <span
                        className={`text-[28px] font-semibold tracking-tight transition-colors ${
                          isActive ? "text-[--accent]" : "text-[--text-0]"
                        }`}
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {item.label}
                      </span>
                    </>
                  );
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {isHomePage ? (
                        <NavLink
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="flex items-baseline gap-4 py-3 hairline-b"
                        >
                          {inner}
                        </NavLink>
                      ) : (
                        <NextLink
                          href={item.to === "projects" ? "/projects" : `/#${item.to}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-baseline gap-4 py-3 hairline-b"
                        >
                          {inner}
                        </NextLink>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mono-label flex items-center justify-between">
                <span>© {new Date().getFullYear()}</span>
                <span>Available — 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
