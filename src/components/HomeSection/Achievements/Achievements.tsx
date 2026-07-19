"use client";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";

interface Item {
  year: string;
  title: string;
  issuer: string;
  href?: string;
}

const items: Item[] = [
  {
    year: "2025",
    title: "ICPC Asia Dhaka Regional — Finalist",
    issuer: "BUBT University",
    href: "https://drive.google.com/file/d/1LdwOuwgBsdmsvzZ0LiJwx-PFc-m0OHE6/view",
  },
  {
    year: "2024",
    title: "Hackathon — 2nd Place",
    issuer: "Tejgaon College, Dhaka",
    href: "https://drive.google.com/file/d/1AwGPUR8xhLDuA5HyHuojao1EzJQoxce5/view",
  },
  {
    year: "2024",
    title: "Next Level Web Development",
    issuer: "Programming Hero",
    href: "https://web.programming-hero.com/verification?validationNumber=PHlevel2-batch-3-fullstackWEB8-32581068",
  },
  {
    year: "2023",
    title: "Complete Web Development",
    issuer: "Programming Hero",
    href: "https://drive.google.com/file/d/1EnOksrjswUENRzXZMJ1F7l8Z4yjLqmFd/view",
  },
];

const Achievements = () => {
  const { ref, controls } = useScrollAnimation(0.18);

  return (
    <section className="relative section-pad" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="04"
            label="Achievements"
            title={<>Recognition, <span className="text-[--accent]">selected</span>.</>}
            subtitle="Competitions, hackathons, and meaningful certifications."
          />

          <ul className="divide-y divide-[--hairline] hairline-t hairline-b">
            {items.map((item) => (
              <motion.li
                key={item.title}
                variants={staggerItem}
                className="group relative grid grid-cols-12 items-baseline gap-4 py-6 pl-5 transition-transform duration-300 hover:translate-x-1"
              >
                {/* Left-edge mint bar that grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1/4 bottom-1/4 w-0 bg-[--accent] transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[2px]"
                />

                <span className="col-span-2 md:col-span-1 mono-label text-[--text-2] group-hover:text-[--accent] transition-colors duration-300 delay-75">
                  {item.year}
                </span>

                <div className="col-span-7 md:col-span-9">
                  <h3 className="text-[16px] md:text-[17px] font-medium tracking-tight text-[--text-0] group-hover:text-[--accent] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[--text-2] mt-0.5">{item.issuer}</p>
                </div>

                <div className="col-span-3 md:col-span-2 text-right">
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[13px] text-[--text-1] hover:text-[--accent] transition-colors duration-200"
                    >
                      <span className="hidden md:inline">Certificate</span>
                      <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
