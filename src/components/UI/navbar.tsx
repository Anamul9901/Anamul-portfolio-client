"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  { label: "Blogs", to: "blogs" },
  { label: "Contact", to: "contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NextLink href="/" className="flex items-center gap-2">
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
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="text-teal-500 bg-teal-500/10"
                  className="px-3 py-2 rounded-lg text-sm font-medium text-default-400 hover:text-teal-500 hover:bg-teal-500/5 transition-all duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
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
                  <Link
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
