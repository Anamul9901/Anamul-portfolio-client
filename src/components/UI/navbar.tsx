"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  // { label: "Blogs", to: "blogs" },
  { label: "Contact", to: "contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Anamul9901", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/anamul-haque9901/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/anamul.haque9901", label: "Facebook" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Scroll Spy Logic
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navItems.map(item => item.to);
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is near middle of viewport or mostly visible
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[1000]"
    >
      <div className="glass bg-white/80 dark:bg-black/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NextLink href="/" className="flex items-center gap-2" onClick={handleNavClick}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold"
              >
                <span className="gradient-text">Anamul</span>
                <span className="text-white"> Haque</span>
              </motion.div>
            </NextLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.to}>
                  {isHomePage ? (
                    item.to === 'projects' || item.to === 'blogs' ? (
                      <ScrollLink
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        activeClass="text-teal-500 bg-teal-500/10"
                        className="px-3 py-2 rounded-lg text-sm font-medium text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer block"
                      >
                        {item.label}
                      </ScrollLink>
                    ) : (
                      <ScrollLink
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-2}
                        duration={500}
                        activeClass="text-teal-500 bg-teal-500/10"
                        className="px-3 py-2 rounded-lg text-sm font-medium text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer block"
                      >
                        {item.label}
                      </ScrollLink>
                    )
                  ) : (
                    <NextLink
                      href={item.to === "projects" ? "/projects" : `/#${item.to}`}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer block"
                    >
                      {item.label}
                    </NextLink>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-default-400 hover:text-teal-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed top-0 right-0 bottom-0 w-72 glass bg-white/95 dark:bg-black/95 border-l border-white/5 z-50 flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <motion.div
                    className="text-xl font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="gradient-text">Anamul</span>
                    <span className="text-default-800 dark:text-white"> Haque</span>
                  </motion.div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-default-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-500/10"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const isPageActive = item.to === "projects" && pathname.startsWith("/projects");
                    const isSectionActive = isHomePage && activeSection === item.to;
                    const isActive = isPageActive || isSectionActive;

                    const linkHref = isHomePage
                      ? `#${item.to}`
                      : (item.to === "projects" ? "/projects" : `/#${item.to}`);

                    return (
                      <motion.div
                        key={item.to}
                        custom={index}
                        variants={itemVariants}
                      >
                        <NextLink
                          href={linkHref}
                          className={`block px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer font-medium ${isActive
                              ? "text-teal-500 bg-teal-500/10 translate-x-2"
                              : "text-default-600 dark:text-default-500 hover:text-teal-500 hover:bg-teal-500/5 hover:translate-x-2"
                            }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </NextLink>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Icons Footer */}
                <div className="mt-auto pt-8 border-t border-white/10">
                  <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-default-400 hover:text-teal-500 transition-colors transform hover:scale-110"
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                  <p className="text-center text-xs text-default-400 mt-4">
                    © 2026 Anamul Haque
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
