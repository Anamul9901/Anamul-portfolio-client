"use client";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import {
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiPrisma, SiGraphql,
  SiMongodb, SiPostgresql, SiRedis, SiMongoose,
  SiAmazon, SiDocker, SiGithubactions, SiVercel, SiNginx,
  SiJest, SiOpenai,
} from "react-icons/si";
import {
  FaServer, FaDatabase, FaLayerGroup, FaUsers, FaComments,
  FaSearch, FaCodeBranch, FaTasks, FaNetworkWired,
} from "react-icons/fa";
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
      { name: "CSS3",          Icon: SiCss3,         color: "#1572B6" },
      { name: "Tailwind",      Icon: SiTailwindcss,  color: "#06B6D4" },
      { name: "Responsive",    Icon: FaLayerGroup,   color: "#A78BFA" },
      { name: "Lazy load",     Icon: FaServer,       color: "#34D399" },
    ],
  },
  {
    index: "02",
    label: "Backend",
    skills: [
      { name: "Node.js",       Icon: SiNodedotjs,    color: "#339933" },
      { name: "Express",       Icon: SiExpress,      color: "#FFFFFF" },
      { name: "NestJS",        Icon: SiNestjs,       color: "#E0234E" },
      { name: "Prisma",        Icon: SiPrisma,       color: "#7AB6F7" },
      { name: "TypeORM",       Icon: FaDatabase,     color: "#FE0902" },
      { name: "Microservices", Icon: FaNetworkWired, color: "#F59E0B" },
      { name: "REST",          Icon: FaServer,       color: "#10B981" },
      { name: "GraphQL",       Icon: SiGraphql,      color: "#E10098" },
      { name: "AI / LLM",      Icon: SiOpenai,       color: "#74AA9C" },
    ],
  },
  {
    index: "03",
    label: "Data",
    skills: [
      { name: "MongoDB",       Icon: SiMongodb,      color: "#47A248" },
      { name: "PostgreSQL",    Icon: SiPostgresql,   color: "#5B95C9" },
      { name: "Redis",         Icon: SiRedis,        color: "#DC382D" },
      { name: "Mongoose",      Icon: SiMongoose,     color: "#A02E2E" },
      { name: "Indexing",      Icon: FaSearch,       color: "#F59E0B" },
      { name: "Schema",        Icon: FaLayerGroup,   color: "#8B5CF6" },
    ],
  },
  {
    index: "04",
    label: "DevOps",
    skills: [
      { name: "AWS",           Icon: SiAmazon,        color: "#FF9900" },
      { name: "Docker",        Icon: SiDocker,        color: "#2496ED" },
      { name: "GH Actions",    Icon: SiGithubactions, color: "#2088FF" },
      { name: "Vercel",        Icon: SiVercel,        color: "#FFFFFF" },
      { name: "Nginx",         Icon: SiNginx,         color: "#009639" },
      { name: "PM2",           Icon: FaServer,        color: "#7C5DC1" },
    ],
  },
  {
    index: "05",
    label: "Practice",
    skills: [
      { name: "Unit testing",  Icon: SiJest,         color: "#C21325" },
      { name: "Team lead",     Icon: FaUsers,        color: "#F59E0B" },
      { name: "Problem solving", Icon: FaSearch,     color: "#10B981" },
      { name: "Client comm.",  Icon: FaComments,     color: "#60A5FA" },
      { name: "Agile / Scrum", Icon: FaTasks,        color: "#A78BFA" },
      { name: "Code review",   Icon: FaCodeBranch,   color: "#34D399" },
    ],
  },
];

const Skills = () => {
  const { ref, controls } = useScrollAnimation(0.15);

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="03"
            label="Skills"
            title={<>The toolkit, <span className="text-[--accent]">unhidden</span>.</>}
            subtitle="No tabs to click — everything I work with, at a glance."
          />

          <div className="divide-y divide-[--hairline] hairline-t hairline-b">
            {groups.map((g) => (
              <motion.div
                key={g.label}
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7"
              >
                <div className="md:col-span-3 flex items-baseline gap-3">
                  <span className="mono-label text-[--accent]">{g.index}</span>
                  <span className="text-[18px] font-medium tracking-tight text-[--text-0]">
                    {g.label}
                  </span>
                </div>

                <div className="md:col-span-9 flex flex-wrap gap-2">
                  {g.skills.map(({ name, Icon, color }) => (
                    <span
                      key={name}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline bg-[--bg-2] text-[13px] text-[--text-1] hover:border-[--hairline-strong] hover:text-[--text-0] transition-all duration-200"
                      style={{ ["--icon-color" as any]: color }}
                    >
                      <Icon className="w-[14px] h-[14px] text-[--text-2] group-hover:text-[color:var(--icon-color)] transition-colors duration-200" />
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={staggerItem}
            className="mono-label text-[--text-2] mt-10"
          >
            ↗ Continuously learning — open to new technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
