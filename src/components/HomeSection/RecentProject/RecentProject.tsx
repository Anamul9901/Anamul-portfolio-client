"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  useScrollAnimation,
  staggerContainer,
  staggerItem,
} from "@/src/hooks/useScrollAnimation";
import SectionHeader from "@/src/components/UI/SectionHeader";
import TiltCard from "@/src/components/UI/TiltCard";
import MagneticButton from "@/src/components/UI/MagneticButton";
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

const ease = [0.22, 1, 0.36, 1] as const;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const x = useSpring(dotX, { stiffness: 240, damping: 28 });
  const y = useSpring(dotY, { stiffness: 240, damping: 28 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    setEnabled(!noMotion && !isTouch);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    dotX.set(e.clientX - r.left);
    dotY.set(e.clientY - r.top);
  };

  return (
    <motion.article
      variants={staggerItem}
      className="group"
    >
      <TiltCard max={4} className="block will-change-transform">
        <Link href={`/project/${project._id}`} className="block" aria-label={project.name}>
          {/* Image frame with parallax + cursor dot */}
          <div
            ref={wrapRef}
            onMouseMove={onMove}
            className="relative aspect-[16/10] overflow-hidden rounded-xl hairline bg-[--bg-2]"
            style={{ transformStyle: "preserve-3d" }}
          >
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
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Bottom gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[--bg-0]/55 via-transparent to-transparent pointer-events-none" />

            {/* Cursor-follow mint dot (inside image area only) */}
            {enabled && (
              <motion.span
                className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[--accent] mix-blend-screen pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                aria-hidden
              />
            )}

            {/* Project index */}
            <div className="absolute top-3 left-3 mono-label text-[--text-1] group-hover:text-[--accent] group-hover:-translate-y-0.5 transition-all duration-300">
              / {String(index + 1).padStart(2, "0")}
            </div>

            {/* Hairline corner accent */}
            <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[inset_0_0_0_1px_rgba(45,212,191,0.35)] transition-shadow duration-300" />
          </div>

          {/* Title + meta */}
          <div className="mt-5 flex items-start justify-between gap-4">
            <h3 className="relative text-[18px] md:text-[20px] font-medium tracking-tight text-[--text-0]">
              <span className="relative inline-block">
                {project.name}
                {/* underline draw */}
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

const RecentProject = () => {
  const { ref, controls } = useScrollAnimation(0.1);
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
            subtitle="Things I shipped — hover any card, click to dive in."
          />

          {loading ? (
            <div className="mono-label text-[--text-2]">Loading…</div>
          ) : visible.length === 0 ? (
            <div className="mono-label text-[--text-2]">No projects yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
              {visible.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </div>
          )}

          {projects.length > visible.length && (
            <motion.div variants={staggerItem} className="mt-14">
              <MagneticButton strength={5} radius={80}>
                <Link href="/projects" className="link-inline">
                  View all {projects.length} projects
                  <span aria-hidden>→</span>
                </Link>
              </MagneticButton>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProject;
