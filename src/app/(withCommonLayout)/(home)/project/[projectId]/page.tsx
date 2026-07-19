"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaCalendar,
} from "react-icons/fa";
import { mockProjects } from "@/src/data/mockProjects";

const ease = [0.22, 1, 0.36, 1] as const;

interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  frLive?: string;
  frRepo?: string;
  bcLive?: string;
  bcRepo?: string;
  technologies?: string[];
  features?: string[];
  createdAt: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  }),
};

const SingleProject = () => {
  const { projectId } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      const found = mockProjects.find((p) => p._id === projectId);
      setProject((found as unknown as Project) || null);
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full hairline-strong" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[--accent] animate-spin" />
          </div>
          <p className="mono-label text-[--text-2]">Loading…</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="surface p-12 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-[--text-0] mb-4">Project Not Found</h2>
            <p className="text-[--text-1] mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
            <button
              onClick={() => router.back()}
              className="btn-primary"
            >
              <FaArrowLeft size={12} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-24">
      <div className="section-container">
        {/* Back Button */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="link-inline text-[13px] flex items-center gap-2"
          >
            <FaArrowLeft size={10} />
            Back to Projects
          </button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeInUp}
            className="relative rounded-2xl overflow-hidden mb-10 hairline"
          >
            <div className="relative aspect-video bg-[--bg-2]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--bg-0]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Title & Date */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeInUp}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[--text-0] mb-3 leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-[--text-2] text-[13px]">
              <FaCalendar className="text-[--accent]" size={11} />
              {new Date(project.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeInUp}
            className="flex flex-wrap gap-3 mb-10"
          >
            {project.frLive && (
              <a
                href={project.frLive}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[13px]"
              >
                <FaExternalLinkAlt size={11} />
                Live Site
              </a>
            )}
            {project.frRepo && (
              <a
                href={project.frRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[13px]"
              >
                <FaGithub size={13} />
                Frontend
              </a>
            )}
            {project.bcRepo && (
              <a
                href={project.bcRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[13px]"
              >
                <FaGithub size={13} />
                Backend
              </a>
            )}
            {project.bcLive && (
              <a
                href={project.bcLive}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-[13px]"
              >
                <FaExternalLinkAlt size={11} />
                API
              </a>
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeInUp}
            className="text-[--text-1] text-[15px] leading-[1.8] mb-10 max-w-3xl"
          >
            {project.description}
          </motion.p>

          {/* Features / Key Highlights */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.25}
              variants={fadeInUp}
              className="mb-10"
            >
              <h3 className="text-[20px] font-semibold tracking-tight text-[--text-0] mb-6">
                Key Highlights
              </h3>
              <ul className="space-y-3 max-w-3xl">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-[14.5px] text-[--text-1] leading-[1.7]">
                    <span className="mono text-[11px] text-[--accent] pt-1.5 shrink-0 opacity-70">
                      0{index + 1}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeInUp}
              className="mb-12"
            >
              <h3 className="text-[20px] font-semibold tracking-tight text-[--text-0] mb-5">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mono text-[11.5px] uppercase tracking-wider px-3 py-1.5 rounded-full hairline text-[--text-2] hover:text-[--accent] hover:border-[--accent] transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to All Projects */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeInUp}
            className="pt-8 hairline-t"
          >
            <Link
              href="/projects"
              className="link-inline text-[13px]"
            >
              <FaArrowLeft size={10} />
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
