"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { toast } from "sonner";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";

const ContactInfo = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_i93d0u4",
        "template_0h2ytja",
        formRef.current!,
        "pbLzIm3Ta3Mtb_nbp"
      )
      .then(
        (result) => {
          setIsLoading(false);
          if (result) {
            toast.success("Message sent successfully!");
            formRef.current?.reset();
          }
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          toast.error("Error sending message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: FaLocationDot,
      title: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      value: "anamulhaque9901@gmail.com",
      href: "mailto:anamulhaque9901@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+8801864668089",
      href: "tel:+8801864668089",
    },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/anamul-haque-772264299/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/Anamul9901", icon: FaGithub, label: "GitHub" },
    { href: "https://www.facebook.com/Anamul114", icon: FaFacebook, label: "Facebook" },
    { href: "https://www.codechef.com/users/anamul9901", icon: SiCodechef, label: "CodeChef" },
    { href: "https://codeforces.com/profile/Anamul9901", icon: SiCodeforces, label: "Codeforces" },
  ];

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-medium uppercase tracking-wider text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="section-heading mt-2 mb-0">
              Contact <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Let&apos;s talk about everything!</h3>
              <p className="text-default-500 mb-8">
                I&apos;m available for freelance projects, full-time positions, and collaborations.
                Feel free to reach out if you have a project in mind or just want to say hi!
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="glass-card p-4 flex items-center gap-4 card-hover"
                  >
                    <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 text-xl">
                      <info.icon />
                    </div>
                    <div>
                      <p className="text-default-500 text-sm">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-white hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={staggerItem} className="pt-6">
                <p className="text-default-500 text-sm mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-default-100/50 text-default-400 hover:bg-teal-500 hover:text-white transition-all duration-300 text-lg"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={staggerItem}>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="glass-card p-8 space-y-6"
              >
                <h3 className="text-xl font-bold text-center mb-6">Send a Message</h3>

                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-default-100/50 border border-default-200/30 rounded-xl focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all text-white placeholder:text-default-500"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-default-100/50 border border-default-200/30 rounded-xl focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all text-white placeholder:text-default-500"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-default-100/50 border border-default-200/30 rounded-xl focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all text-white placeholder:text-default-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
