"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-[999]"
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
                      // Special case: Projects/Blogs might be actual pages?
                      // Based on "navItems", "projects" is in valid items.
                      // Assuming "projects" links to SECTION on home page OR separate page?
                      // Wait, previous turn created "/projects" page.
                      // If item.to is "projects", we should link to "/projects" PAGE?
                      // Or is there a "projects" section on home? 
                      // "RecentProject" section exists.
                      // Let's assume standard behavior:
                      // If separate page exists, link to it. 
                      // BUT standard nav usually scrolls to section.
                      // The user said "view all projects" page.
                      // If the nav item "Projects" is clicked, does user expect section or page?
                      // Usually section.
                      <ScrollLink
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
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
                        offset={-80}
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
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-16 right-0 bottom-0 w-64 glass border-l border-white/5"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  custom={index}
                  variants={itemVariants}
                >
                  {isHomePage ? (
                    <ScrollLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      activeClass="text-teal-500 bg-teal-500/10"
                      className="block px-4 py-3 rounded-lg text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <NextLink
                      href={item.to === "projects" ? "/projects" : `/#${item.to}`}
                      className="block px-4 py-3 rounded-lg text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NextLink>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
