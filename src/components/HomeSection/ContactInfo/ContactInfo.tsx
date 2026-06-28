"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
  fadeInUp,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";

const ContactInfo = () => {
  const { ref, controls } = useScrollAnimation(0.18);
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
            toast.success("Message sent.");
            formRef.current?.reset();
          }
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          toast.error("Couldn't send. Try again in a moment.");
        }
      );
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[--hairline] focus:border-[--accent] focus:outline-none transition-colors duration-200 py-3 text-[15px] text-[--text-0] placeholder:text-[--text-2]";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="spotlight spotlight-drift" style={{ bottom: "-10%", left: "30%" }} />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-2xl mx-auto"
        >
          <SectionHeader
            index="07"
            label="Contact"
            title={<>Let&apos;s build something <span className="text-[--accent]">good</span>.</>}
            subtitle="Open to full-time roles, contract work, and the occasional collab."
            align="center"
            className="items-center text-center"
          />

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div>
              <label htmlFor="from_name" className="mono-label block mb-1">
                Name
              </label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                required
                placeholder="What should I call you?"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="from_email" className="mono-label block mb-1">
                Email
              </label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                required
                placeholder="you@somewhere.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mono-label block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about the project, role, or idea."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <span aria-hidden>→</span>
                </>
              )}
            </button>
          </motion.form>

          {/* Direct contact strip */}
          <motion.div
            variants={staggerItem}
            className="mt-14 pt-8 hairline-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]">
              <a href="mailto:anamulhaque9901@gmail.com" className="link-inline">
                anamulhaque9901@gmail.com
              </a>
              <a href="tel:+8801864668089" className="link-inline">
                +880 1864 668089
              </a>
            </div>
            <div className="mono-label">Mirpur, Dhaka — BD</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
