"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import {
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis, SiMongoose,
  SiAmazon, SiDocker, SiGithubactions, SiVercel, SiNginx,
  SiJest, SiOpenai,
} from "react-icons/si";
import { FaServer, FaDatabase, FaLayerGroup, FaUsers, FaComments, FaSearch, FaCodeBranch, FaTasks, FaNetworkWired } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

interface Category {
  label: string;
  skills: Skill[];
}

const skillCategories: Record<string, Category> = {
  frontend: {
    label: "Frontend",
    skills: [
      { name: "React.js",        Icon: SiReact,        color: "#61DAFB" },
      { name: "Next.js",         Icon: SiNextdotjs,    color: "#FFFFFF" },
      { name: "TypeScript",      Icon: SiTypescript,   color: "#3178C6" },
      { name: "Redux",           Icon: SiRedux,        color: "#764ABC" },
      { name: "HTML5",           Icon: SiHtml5,        color: "#E34F26" },
      { name: "CSS3",            Icon: SiCss3,         color: "#1572B6" },
      { name: "Tailwind CSS",    Icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Responsive",      Icon: FaLayerGroup,   color: "#A78BFA" },
      { name: "Lazy Loading",    Icon: FaServer,       color: "#34D399" },
    ],
  },
  backend: {
    label: "Backend",
    skills: [
      { name: "Node.js",         Icon: SiNodedotjs,     color: "#339933" },
      { name: "Express.js",      Icon: SiExpress,       color: "#FFFFFF" },
      { name: "NestJS",          Icon: SiNestjs,        color: "#E0234E" },
      { name: "Prisma",          Icon: SiPrisma,        color: "#2D3748" },
      { name: "TypeORM",         Icon: FaDatabase,      color: "#FE0902" },
      { name: "Microservices",   Icon: FaNetworkWired,  color: "#F59E0B" },
      { name: "RESTful APIs",    Icon: FaServer,        color: "#10B981" },
      { name: "GraphQL",         Icon: SiGraphql,       color: "#E10098" },
      { name: "AI/LLM",         Icon: SiOpenai,        color: "#74AA9C" },
    ],
  },
  database: {
    label: "Database",
    skills: [
      { name: "MongoDB",         Icon: SiMongodb,       color: "#47A248" },
      { name: "PostgreSQL",      Icon: SiPostgresql,    color: "#336791" },
      { name: "Redis",           Icon: SiRedis,         color: "#DC382D" },
      { name: "Mongoose",        Icon: SiMongoose,      color: "#880000" },
      { name: "DB Indexing",     Icon: FaSearch,        color: "#F59E0B" },
      { name: "Schema Design",   Icon: FaLayerGroup,    color: "#8B5CF6" },
    ],
  },
  devops: {
    label: "DevOps",
    skills: [
      { name: "AWS (S3, EC2)",   Icon: SiAmazon,        color: "#FF9900" },
      { name: "Docker",          Icon: SiDocker,        color: "#2496ED" },
      { name: "GitHub Actions",  Icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel",          Icon: SiVercel,        color: "#FFFFFF" },
      { name: "Nginx",           Icon: SiNginx,         color: "#009639" },
      { name: "PM2",             Icon: FaServer,        color: "#2B037A" },
    ],
  },
  soft: {
    label: "Professional",
    skills: [
      { name: "Unit Testing",    Icon: SiJest,          color: "#C21325" },
      { name: "Team Lead",       Icon: FaUsers,         color: "#F59E0B" },
      { name: "Problem Solving", Icon: FaSearch,        color: "#10B981" },
      { name: "Client Comm.",    Icon: FaComments,      color: "#60A5FA" },
      { name: "Agile/Scrum",     Icon: FaTasks,         color: "#A78BFA" },
      { name: "Code Review",     Icon: FaCodeBranch,    color: "#34D399" },
    ],
  },
};

const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];

const Skills = () => {
  const { ref, controls } = useScrollAnimation(0.2);
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>

          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-medium uppercase tracking-wider text-sm mb-4">
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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
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
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const { Icon, color } = skill;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.06 }}
                  className="glass-card p-4 flex flex-col items-center gap-3 hover:border-teal-500/50 transition-all duration-300 card-hover group cursor-default"
                >
                  {/* Icon container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}18`, boxShadow: `0 0 0 1px ${color}30` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>

                  {/* Skill name */}
                  <span className="text-xs font-medium text-center text-default-500 group-hover:text-teal-400 transition-colors leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer note */}
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
