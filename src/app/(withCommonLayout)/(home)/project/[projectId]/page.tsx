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
  FaServer,
  FaDesktop,
  FaCalendar,
  FaCode
} from "react-icons/fa";

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
  createdAt: string;
}

const SingleProject = () => {
  const { projectId } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://anamul-portfolio-backend.vercel.app/api/v1/project/${projectId}`,
          { cache: "force-cache" }
        );
        const data = await res.json();
        setProject(data?.data || null);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-teal-500/20" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 animate-spin" />
          </div>
          <p className="text-default-500 animate-pulse">Loading project details...</p>
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
            <p className="text-default-500 mb-6">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
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
    <div className="min-h-screen pt-20 pb-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-purple-500/5" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-default-400 hover:text-teal-500 hover:border-teal-500/30 transition-all duration-300"
          >
            <FaArrowLeft size={14} />
            Back to Projects
          </button>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Project Title & Meta */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
                >
                  {project.name}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 text-default-500 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-teal-500" />
                    {new Date(project.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </motion.div>
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-3"
              >
                {project.frLive && (
                  <a
                    href={project.frLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
                {project.frRepo && (
                  <a
                    href={project.frRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                )}
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-default-400 text-lg leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden mb-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className={`relative aspect-video ${!imageLoaded ? "bg-default-100 animate-pulse" : ""}`}>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
          </motion.div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Frontend Links */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-cyan-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500">
                  <FaDesktop size={18} />
                </div>
                <h2 className="text-xl font-bold text-white">Frontend</h2>
              </div>
              <div className="space-y-3 pl-1">
                {project.frLive && (
                  <a
                    href={project.frLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-default-400 hover:text-teal-400 transition-colors group/link"
                  >
                    <FaExternalLinkAlt size={12} className="text-teal-500" />
                    <span className="group-hover/link:underline">Live Website</span>
                  </a>
                )}
                {project.frRepo && (
                  <a
                    href={project.frRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-default-400 hover:text-teal-400 transition-colors group/link"
                  >
                    <FaGithub size={14} className="text-teal-500" />
                    <span className="group-hover/link:underline">GitHub Repository</span>
                  </a>
                )}
                {!project.frLive && !project.frRepo && (
                  <p className="text-default-500 text-sm">No frontend links available</p>
                )}
              </div>
            </div>

            {/* Backend Links */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                  <FaServer size={18} />
                </div>
                <h2 className="text-xl font-bold text-white">Backend</h2>
              </div>
              <div className="space-y-3 pl-1">
                {project.bcLive && (
                  <a
                    href={project.bcLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-default-400 hover:text-purple-400 transition-colors group/link"
                  >
                    <FaExternalLinkAlt size={12} className="text-purple-500" />
                    <span className="group-hover/link:underline">API Endpoint</span>
                  </a>
                )}
                {project.bcRepo && (
                  <a
                    href={project.bcRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-default-400 hover:text-purple-400 transition-colors group/link"
                  >
                    <FaGithub size={14} className="text-purple-500" />
                    <span className="group-hover/link:underline">GitHub Repository</span>
                  </a>
                )}
                {!project.bcLive && !project.bcRepo && (
                  <p className="text-default-500 text-sm">No backend links available</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Technologies (if available) */}
          {project.technologies && project.technologies.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500">
                  <FaCode size={18} />
                </div>
                <h2 className="text-xl font-bold text-white">Technologies Used</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-default-300 text-sm font-medium hover:border-teal-500/30 hover:text-teal-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowLeft size={12} />
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
