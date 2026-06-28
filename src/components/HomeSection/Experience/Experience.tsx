"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
  fadeInUp,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";

const experiences = [
  {
    title: "Backend Developer",
    company: "Strvia",
    companyHref: "#",
    location: "Chittagong Hi-Tech Park",
    period: "Apr 2024 — Present",
    type: "Full-time",
    outcomes: [
      "Designed scalable multi-vendor, multi-role platform — users, vendors, admins, system admins.",
      "Built drag-and-drop no-code site builder + one-click WordPress migration system.",
      "Shipped high-perf cache layer + image pipeline that meaningfully cut API load and response times.",
    ],
    tech: ["node", "nest", "typescript", "mongo", "redis", "docker", "aws"],
  },
  {
    title: "Team Lead — SCIC Program",
    company: "Programming Hero",
    companyHref: "#",
    location: "Remote",
    period: "Dec 2023 — Mar 2024",
    type: "Team Project",
    outcomes: [
      "Led a 5-person team for 4 months to ship an online voting + polling system.",
      "Designed voting logic, poll creation, and real-time result aggregation.",
      "Received a recommendation letter from Programming Hero for leadership.",
    ],
    tech: ["next", "node", "express", "mongo", "jwt", "tailwind"],
  },
];

const Experience = () => {
  const { ref, controls } = useScrollAnimation(0.15);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="02"
            label="Experience"
            title={<>Roles where I shipped <span className="text-[--accent]">real systems</span>.</>}
            subtitle="Two roles, both with production scope. Outcomes over titles."
          />

          {/* Timeline */}
          <div ref={containerRef} className="relative pl-8 md:pl-10">

            {/* Static rail */}
            <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[--hairline]" />
            {/* Mint progress overlay */}
            <motion.div
              className="absolute left-[7px] md:left-[9px] top-2 w-px bg-[--accent]"
              style={{ height: lineHeight }}
              aria-hidden
            />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, i) => (
                <motion.article
                  key={exp.company}
                  variants={staggerItem}
                  className="relative"
                >
                  {/* Dot */}
                  <span className="absolute -left-8 md:-left-10 top-2 flex items-center justify-center w-4 h-4">
                    <span className="w-2 h-2 rounded-full bg-[--accent]" />
                    <span className="absolute inset-0 rounded-full hairline" />
                  </span>

                  <div className="mono-label mb-3">{exp.period}</div>

                  <h3 className="text-[22px] md:text-[26px] font-semibold tracking-tight text-[--text-0] leading-tight">
                    {exp.title}
                  </h3>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[--text-1]">
                    <span className="text-[--text-0]">{exp.company}</span>
                    <span className="text-[--text-2]">·</span>
                    <span>{exp.location}</span>
                    <span className="text-[--text-2]">·</span>
                    <span className="mono text-[12px] text-[--text-2] uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5 max-w-2xl">
                    {exp.outcomes.map((o, j) => (
                      <li key={j} className="flex gap-3 text-[14.5px] text-[--text-1] leading-[1.7]">
                        <span className="mono text-[11px] text-[--text-2] pt-1.5 shrink-0">
                          0{j + 1}
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 mono text-[12.5px] text-[--text-2] tracking-wide">
                    {exp.tech.join(" · ")}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
