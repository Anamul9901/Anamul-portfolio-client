"use client";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";

interface Edu {
  period: string;
  level: string;
  title: string;
  institution: string;
  grade?: string;
  status: "Running" | "Completed";
}

const items: Edu[] = [
  {
    period: "2024 — Present",
    level: "BSc",
    title: "Computer Science & Engineering",
    institution: "Tejgaon College, Dhaka",
    status: "Running",
  },
  {
    period: "2020 — 2022",
    level: "HSC",
    title: "Higher Secondary Certificate",
    institution: "Narsingdi Gov College, Narsingdi",
    grade: "A+",
    status: "Completed",
  },
  {
    period: "2018 — 2020",
    level: "SSC",
    title: "Secondary School Certificate",
    institution: "Prijkandi High School, Raipura",
    grade: "A+",
    status: "Completed",
  },
  {
    period: "2016 — 2018",
    level: "JSC",
    title: "Junior School Certificate",
    institution: "Prijkandi High School, Raipura",
    grade: "A+",
    status: "Completed",
  },
];

const Education = () => {
  const { ref, controls } = useScrollAnimation(0.18);

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="05"
            label="Education"
            title={<>Where I was <span className="text-[--accent]">trained</span>.</>}
            subtitle="A complete academic record — formal degree in progress."
          />

          <ul className="divide-y divide-[--hairline] hairline-t hairline-b">
            {items.map((e) => (
              <motion.li
                key={e.level + e.period}
                variants={staggerItem}
                className="group relative grid grid-cols-12 items-baseline gap-4 py-6 pl-5 transition-transform duration-300 hover:translate-x-1"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1/4 bottom-1/4 w-0 bg-[--accent] transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-[2px]"
                />

                <span className="col-span-12 md:col-span-3 mono-label text-[--text-2] group-hover:text-[--accent] transition-colors duration-300 delay-75">
                  {e.period}
                </span>

                <div className="col-span-9 md:col-span-7">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="text-[16px] md:text-[17px] font-medium tracking-tight text-[--text-0] group-hover:text-[--accent] transition-colors duration-300">
                      <span className="text-[--accent] mono mr-2 text-[13px]">{e.level}</span>
                      {e.title}
                    </h3>
                  </div>
                  <p className="text-[13px] text-[--text-2] mt-0.5">{e.institution}</p>
                </div>

                <div className="col-span-3 md:col-span-2 text-right">
                  <span
                    className={`inline-block mono-label ${
                      e.status === "Running" ? "text-[--accent]" : "text-[--text-2]"
                    }`}
                  >
                    {e.grade ? `Grade ${e.grade}` : e.status}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
