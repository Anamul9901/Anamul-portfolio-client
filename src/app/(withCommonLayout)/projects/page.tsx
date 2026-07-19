"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { mockProjects } from "@/src/data/mockProjects";
import { useScrollAnimation, staggerContainer, staggerItem, fadeInUp } from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import TiltCard from "@/src/components/UI/TiltCard";

interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  frLive: string;
  frRepo?: string;
  bcRepo?: string;
  technologies?: string[];
}

const ease = [0.22, 1, 0.36, 1] as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.article variants={staggerItem} className="group">
      <TiltCard max={4} className="block will-change-transform">
        <Link href={`/project/${project._id}`} className="block" aria-label={project.name}>
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl hairline bg-[--bg-2]">
            <motion.div
              className="absolute inset-0"
              whileHover={{ y: -14, scale: 1.04 }}
              transition={{ duration: 0.7, ease }}
              style={{ transform: "translateZ(30px)" }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[--bg-0]/60 via-transparent to-transparent pointer-events-none" />

            {/* Project index */}
            <div className="absolute top-3 left-3 mono-label text-[--text-1] group-hover:text-[--accent] group-hover:-translate-y-0.5 transition-all duration-300">
              / {String(index + 1).padStart(2, "0")}
            </div>

            {/* Hairline ring on hover */}
            <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[inset_0_0_0_1px_rgba(245,158,11,0.35)] transition-shadow duration-300" />
          </div>

          {/* Title + meta */}
          <div className="mt-5 flex items-start justify-between gap-4">
            <h3 className="relative text-[18px] md:text-[20px] font-medium tracking-tight text-[--text-0]">
              <span className="relative inline-block">
                {project.name}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-0.5 h-px w-0 bg-[--accent] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                />
              </span>
            </h3>
            <span
              className="text-[--text-2] group-hover:text-[--accent] transition-all duration-300 group-hover:translate-x-0.5 mt-1"
              aria-hidden
            >
              ↗
            </span>
          </div>

          <p className="mt-2 text-[14px] text-[--text-1] leading-[1.7] line-clamp-2">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-3 mono text-[12px] text-[--text-2] tracking-wide">
              {project.technologies.slice(0, 5).join(" · ").toLowerCase()}
            </div>
          )}
        </Link>
      </TiltCard>

      {/* Action links */}
      <div className="mt-3 flex items-center gap-5 text-[13px]">
        <a
          href={project.frLive}
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline"
        >
          Live <span className="text-[--text-2]" aria-hidden>↗</span>
        </a>
        {project.frRepo && (
          <a
            href={project.frRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            Code <span className="text-[--text-2]" aria-hidden>↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
};

const ProjectsPage = () => {
  const { ref, controls } = useScrollAnimation(0.1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProjects(mockProjects);
    setLoading(false);
  }, []);

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="spotlight spotlight-drift" style={{ top: "-10%", right: "-20%", opacity: 0.4 }} />

      <div className="section-container relative z-10 section-pad" ref={ref}>
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="06"
            label="Projects"
            title={<>All <span className="text-[--accent]">work</span>.</>}
            subtitle="A complete collection of shipped projects — from full-stack platforms to experimental prototypes."
            align="center"
            className="items-center text-center"
          />

          {/* Search */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto mb-14 md:mb-16">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[--text-2] group-focus-within:text-[--accent] transition-colors">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search projects…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[--bg-2] hairline text-[--text-0] text-[14px] placeholder:text-[--text-2] focus:outline-none focus:border-[--accent] transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Results */}
          {loading ? (
            <div className="mono-label text-[--text-2] text-center py-20">Loading…</div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[--text-1] mb-4">No projects matching &ldquo;{searchTerm}&rdquo;</p>
              <button
                onClick={() => setSearchTerm("")}
                className="link-inline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
