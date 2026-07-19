"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import {
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis, SiMongoose,
  SiDocker, SiGithubactions, SiVercel, SiNginx,
  SiJest,
} from "react-icons/si";
import {
  FaServer, FaDatabase, FaLayerGroup, FaUsers, FaComments,
  FaSearch, FaCodeBranch, FaTasks, FaNetworkWired,
} from "react-icons/fa";
import { FaAws, FaBrain } from "react-icons/fa6";
import { IconType } from "react-icons";

interface Skill { name: string; Icon: IconType; color: string; }
interface Group  { label: string; index: string; skills: Skill[]; }

const groups: Group[] = [
  {
    index: "01",
    label: "Frontend",
    skills: [
      { name: "React",         Icon: SiReact,        color: "#61DAFB" },
      { name: "Next.js",       Icon: SiNextdotjs,    color: "#FFFFFF" },
      { name: "TypeScript",    Icon: SiTypescript,   color: "#3178C6" },
      { name: "Redux",         Icon: SiRedux,        color: "#764ABC" },
      { name: "HTML5",         Icon: SiHtml5,        color: "#E34F26" },
      { name: "CSS3",          Icon: SiCss,          color: "#1572B6" },
      { name: "Tailwind",      Icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Responsive",    Icon: FaLayerGroup,   color: "#A78BFA" },
      { name: "Lazy load",     Icon: FaServer,       color: "#34D399" },
    ],
  },
  {
    index: "02",
    label: "Backend",
    skills: [
      { name: "Node.js",       Icon: SiNodedotjs,    color: "#84CC16" },
      { name: "Express",       Icon: SiExpress,      color: "#FFFFFF" },
      { name: "NestJS",        Icon: SiNestjs,       color: "#E0234E" },
      { name: "Prisma",        Icon: SiPrisma,       color: "#7AB6F7" },
      { name: "TypeORM",       Icon: FaDatabase,     color: "#FE5F4D" },
      { name: "Microservices", Icon: FaNetworkWired, color: "#F59E0B" },
      { name: "REST",          Icon: FaServer,       color: "#10B981" },
      { name: "GraphQL",       Icon: SiGraphql,      color: "#E10098" },
      { name: "AI / LLM",      Icon: FaBrain,        color: "#74AA9C" },
    ],
  },
  {
    index: "03",
    label: "Data",
    skills: [
      { name: "MongoDB",       Icon: SiMongodb,      color: "#47A248" },
      { name: "PostgreSQL",    Icon: SiPostgresql,   color: "#7AB6F7" },
      { name: "Redis",         Icon: SiRedis,        color: "#DC382D" },
      { name: "Mongoose",      Icon: SiMongoose,     color: "#B5403F" },
      { name: "Indexing",      Icon: FaSearch,       color: "#F59E0B" },
      { name: "Schema",        Icon: FaLayerGroup,   color: "#8B5CF6" },
    ],
  },
  {
    index: "04",
    label: "DevOps",
    skills: [
      { name: "AWS",           Icon: FaAws,           color: "#FF9900" },
      { name: "Docker",        Icon: SiDocker,        color: "#2496ED" },
      { name: "GH Actions",    Icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel",        Icon: SiVercel,        color: "#FFFFFF" },
      { name: "Nginx",         Icon: SiNginx,         color: "#009639" },
      { name: "PM2",           Icon: FaServer,        color: "#A78BFA" },
    ],
  },
  {
    index: "05",
    label: "Practice",
    skills: [
      { name: "Unit testing",  Icon: SiJest,         color: "#E53935" },
      { name: "Team lead",     Icon: FaUsers,        color: "#F59E0B" },
      { name: "Problem solving", Icon: FaSearch,     color: "#10B981" },
      { name: "Client comm.",  Icon: FaComments,     color: "#60A5FA" },
      { name: "Agile / Scrum", Icon: FaTasks,        color: "#A78BFA" },
      { name: "Code review",   Icon: FaCodeBranch,   color: "#34D399" },
    ],
  },
];

const containerVar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const tileVar = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 18, stiffness: 220 },
  },
};

const rowVar = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const SkillTile = ({ skill }: { skill: Skill }) => {
  const { name, Icon, color } = skill;
  return (
    <motion.div
      variants={tileVar}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const } }}
      className="group relative aspect-square rounded-2xl hairline bg-[--bg-2] overflow-hidden cursor-default"
      style={{ ["--brand" as any]: color }}
    >
      {/* Tinted background that brightens on hover */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${color}26 0%, transparent 70%)`,
        }}
      />

      {/* Mint border ring on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}55` }}
      />

      {/* Shimmer sweep on hover */}
      <span className="shimmer" aria-hidden />

      <div className="relative h-full flex flex-col items-center justify-center gap-2 px-2">
        <Icon
          className="transition-all duration-300 ease-out text-[--text-1] group-hover:text-[color:var(--brand)] group-hover:scale-110"
          size={34}
        />
        <span className="mono-label text-center text-[--text-2] group-hover:text-[--text-0] transition-colors duration-300 leading-tight px-1">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, controls } = useScrollAnimation(0.12);

  return (
    <section className="relative section-pad" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={containerVar}>
          <SectionHeader
            index="03"
            label="Skills"
            title={<>The toolkit, <span className="text-[--accent]">unhidden</span>.</>}
            subtitle="Every technology I work with, at a glance — hover any tile."
          />

          <div className="space-y-12 md:space-y-16">
            {groups.map((g) => (
              <motion.div
                key={g.label}
                variants={rowVar}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
              >
                {/* Label rail */}
                <div className="md:col-span-2 md:pt-3">
                  <div className="mono-label text-[--accent]">{g.index}</div>
                  <h3 className="text-[18px] md:text-[19px] font-medium tracking-tight text-[--text-0] mt-1">
                    {g.label}
                  </h3>
                </div>

                {/* Tile grid */}
                <motion.div
                  variants={containerVar}
                  className="md:col-span-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
                >
                  {g.skills.map((s) => (
                    <SkillTile key={s.name} skill={s} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.p variants={rowVar} className="mono-label text-[--text-2] mt-12">
            ↗ Continuously learning — open to new technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
