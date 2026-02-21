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

const SingleProject = () => {
  const { projectId } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (projectId) {
      const foundProject = mockProjects.find((p) => p._id === projectId);
      setProject(foundProject as unknown as Project || null);
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-teal-500/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 animate-spin" />
          </div>
          <p className="text-default-500 animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="glass-card p-12 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
            <p className="text-default-500 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-white font-medium hover:bg-teal-600 transition-colors"
            >
              <FaArrowLeft />
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
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-default-400 hover:text-teal-500 transition-colors text-sm"
          >
            <FaArrowLeft size={12} />
            Back to Projects
          </button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Image at the Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden mb-10 border border-white/10"
          >
            <div className={`relative aspect-video ${!imageLoaded ? "bg-white/5 animate-pulse" : ""}`}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </motion.div>

          {/* Title & Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {project.name}
            </h1>
            <div className="flex items-center gap-2 text-default-500 text-sm">
              <FaCalendar className="text-teal-500" size={12} />
              {new Date(project.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {project.frLive && (
              <a
                href={project.frLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-white font-medium hover:bg-teal-400 transition-colors text-sm"
              >
                <FaExternalLinkAlt size={12} />
                Live Site
              </a>
            )}
            {project.frRepo && (
              <a
                href={project.frRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-white/10 transition-colors text-sm"
              >
                <FaGithub size={14} />
                Frontend Code
              </a>
            )}
            {project.bcRepo && (
              <a
                href={project.bcRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-white/10 transition-colors text-sm"
              >
                <FaGithub size={14} />
                Backend Code
              </a>
            )}
            {project.bcLive && (
              <a
                href={project.bcLive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-white/10 transition-colors text-sm"
              >
                <FaExternalLinkAlt size={12} />
                API
              </a>
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-default-400 leading-relaxed mb-10"
          >
            {project.description}
          </motion.p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 text-default-400 text-sm leading-relaxed">
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-default-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to All Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="pt-8 border-t border-white/10 text-center"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-default-400 text-sm font-medium hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300"
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
