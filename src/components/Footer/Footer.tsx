"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, controls } = useScrollAnimation(0.2);

  const quickLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/anamul-haque-772264299/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/Anamul9901", icon: FaGithub, label: "GitHub" },
    { href: "https://www.facebook.com/Anamul114", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.codechef.com/users/anamul9901", icon: SiCodechef, label: "CodeChef" },
    { href: "https://codeforces.com/profile/Anamul9901", icon: SiCodeforces, label: "Codeforces" },
  ];

  return (
    <footer className="relative pt-16 pb-8" ref={ref}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={staggerItem} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">
                <span className="gradient-text">Anamul</span> Haque
              </h3>
              <p className="text-default-500 text-sm leading-relaxed">
                Full-stack web developer specializing in high-performance backend systems.
                Building scalable architectures that maximize user impact.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={staggerItem} className="text-center">
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-default-500 hover:text-teal-500 transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="text-center md:text-right">
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-default-100/30 text-default-400 hover:bg-teal-500 hover:text-white transition-all duration-300 text-lg"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={staggerItem}
            className="pt-8 border-t border-default-200/20 text-center"
          >
            <p className="text-default-500 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Anamul Haque. Built with{" "}
              <FaHeart className="text-red-500" /> using Next.js
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
