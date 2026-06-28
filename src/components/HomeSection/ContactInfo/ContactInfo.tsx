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
import MagneticButton from "@/src/components/UI/MagneticButton";

const FloatField = ({
  id,
  label,
  type = "text",
  textarea = false,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) => {
  const [val, setVal] = useState("");
  const [focus, setFocus] = useState(false);
  const isUp = focus || val.length > 0;

  const InputEl: any = textarea ? "textarea" : "input";

  return (
    <div className="relative pt-6 pb-2">
      <label
        htmlFor={id}
        className={`absolute left-0 mono-label pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isUp
            ? "top-0 text-[10px] text-[--accent]"
            : "top-7 text-[12px] text-[--text-2]"
        }`}
      >
        {label}
      </label>

      <InputEl
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        required={required}
        value={val}
        onChange={(e: any) => setVal(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`w-full bg-transparent border-0 outline-none text-[15px] text-[--text-0] placeholder:text-transparent py-1.5 ${
          textarea ? "resize-none min-h-[100px]" : ""
        }`}
      />

      {/* Animated underline */}
      <span aria-hidden className="absolute left-0 right-0 bottom-0 h-px bg-[--hairline]" />
      <span
        aria-hidden
        className={`absolute left-0 bottom-0 h-px bg-[--accent] transition-[width] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          focus ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

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
            className="space-y-2"
          >
            <FloatField id="from_name"  label="Name" />
            <FloatField id="from_email" label="Email" type="email" />
            <FloatField id="message"    label="Message" textarea />

            <div className="pt-6 flex justify-center">
              <MagneticButton strength={6} radius={120}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
              </MagneticButton>
            </div>
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
