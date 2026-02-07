"use client";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  const { ref, controls } = useScrollAnimation(0.2);

  const educationData = [
    {
      icon: FaUniversity,
      level: "BSc",
      title: "Computer Science and Engineering",
      institution: "Tejgaon College, Dhaka",
      period: "Currently in 3rd Semester",
      status: "Running",
      grade: null,
    },
    {
      icon: FaGraduationCap,
      level: "HSC",
      title: "Higher Secondary Certificate",
      institution: "Narsingdi Gov College, Narsingdi, Dhaka",
      period: "2022",
      status: "Completed",
      grade: "A+",
    },
    {
      icon: FaSchool,
      level: "SSC",
      title: "Secondary School Certificate",
      institution: "Prijkandi High School, Raipura, Narsingdi",
      period: "2020",
      status: "Completed",
      grade: "A+",
    },
    {
      icon: FaSchool,
      level: "JSC",
      title: "Junior School Certificate",
      institution: "Prijkandi High School, Raipura, Narsingdi",
      period: "2018",
      status: "Completed",
      grade: "A+",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
              Academic Background
            </span>
            <h2 className="section-heading mt-2 mb-0">
              My <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass-card p-6 relative overflow-hidden group card-hover"
              >
                {/* Status indicator */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${edu.status === "Running"
                      ? "bg-teal-500/20 text-teal-400"
                      : "bg-green-500/20 text-green-400"
                    }`}
                >
                  {edu.status}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 text-2xl flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <edu.icon />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-teal-500 font-bold text-lg">
                        {edu.level}
                      </span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-400 text-xs font-medium">
                          Grade: {edu.grade}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-default-500 text-sm">{edu.institution}</p>
                    <p className="text-teal-500 text-sm mt-2 font-medium">
                      {edu.period}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
