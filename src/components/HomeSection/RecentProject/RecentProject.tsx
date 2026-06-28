"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import { mockProjects } from "@/src/data/mockProjects";

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

const RecentProject = () => {
  const { ref, controls } = useScrollAnimation(0.12);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(mockProjects);
    setLoading(false);
  }, []);

  const visible = projects.slice(0, 4);

  return (
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="section-container">
        <motion.div initial="hidden" animate={controls} variants={staggerContainer}>
          <SectionHeader
            index="06"
            label="Projects"
            title={<>Selected <span className="text-[--accent]">work</span>.</>}
            subtitle="Things I shipped — pick any to see it live."
          />

          {loading ? (
            <div className="mono-label text-[--text-2]">Loading…</div>
          ) : visible.length === 0 ? (
            <div className="mono-label text-[--text-2]">No projects yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
              {visible.map((project, index) => (
                <motion.article
                  key={project._id}
                  variants={staggerItem}
                  className="group"
                >
                  <Link
                    href={`/project/${project._id}`}
                    className="block"
                    aria-label={project.name}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl hairline bg-[--bg-2]">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[--bg-0]/40 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 mono-label text-[--text-1]">
                        / {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-4">
                      <h3 className="text-[18px] md:text-[20px] font-medium tracking-tight text-[--text-0] group-hover:text-[--accent] transition-colors duration-200">
                        {project.name}
                      </h3>
                      <span
                        className="text-[--text-2] group-hover:text-[--accent] transition-all duration-200 group-hover:translate-x-0.5 mt-1"
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
              ))}
            </div>
          )}

          {projects.length > visible.length && (
            <motion.div variants={staggerItem} className="mt-14">
              <Link href="/projects" className="link-inline">
                View all {projects.length} projects
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProject;
