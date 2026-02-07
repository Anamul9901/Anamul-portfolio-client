"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";

interface Skill {
  name: string;
  image?: string;
}

const Skills = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      label: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
        { name: "Responsive Design" },
        { name: "Lazy Loading" },
      ],
    },
    backend: {
      label: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "NestJS" },
        { name: "Prisma" },
        { name: "TypeORM" },
        { name: "Microservices" },
        { name: "RESTful APIs" },
        { name: "GraphQL" },
        { name: "AI/LLM Integration" },
      ],
    },
    database: {
      label: "Database",
      skills: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "Mongoose" },
        { name: "Database Indexing" },
        { name: "Schema Optimization" },
      ],
    },
    devops: {
      label: "DevOps",
      skills: [
        { name: "AWS (S3, EC2)" },
        { name: "Docker" },
        { name: "GitHub Actions" },
        { name: "Vercel" },
        { name: "Nginx" },
        { name: "PM2" },
      ],
    },
    soft: {
      label: "Professional",
      skills: [
        { name: "Unit Testing" },
        { name: "Team Leadership" },
        { name: "Problem Solving" },
        { name: "Client Communication" },
        { name: "Agile/Scrum" },
        { name: "Code Review" },
      ],
    },
  };

  const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

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
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
              Technical Arsenal
            </span>
            <h2 className="section-heading mt-2 mb-0">
              My <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30"
                    : "bg-default-100/50 text-default-500 hover:bg-default-200/50"
                  }`}
              >
                {skillCategories[category].label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass-card p-4 text-center hover:border-teal-500/50 transition-all duration-300 card-hover group"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm font-medium text-default-300 group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Skill Level Indicator */}
          <motion.div
            variants={staggerItem}
            className="mt-12 text-center text-default-500 text-sm"
          >
            <p>
              Continuously learning and expanding my skill set •{" "}
              <span className="text-teal-500">Open to new technologies</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
