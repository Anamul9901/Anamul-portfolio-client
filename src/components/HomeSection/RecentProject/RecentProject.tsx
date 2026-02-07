"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://anamul-portfolio-backend.vercel.app/api/v1/project/all",
          { cache: "no-cache" }
        );
        const data = await res.json();
        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 md:py-32">
        <div className="section-container">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-teal-500/20" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 animate-spin" />
            </div>
            <p className="text-default-500 animate-pulse">Loading amazing projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="section-heading mt-2 mb-8">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="glass-card p-12 max-w-md mx-auto">
            <p className="text-default-500">No projects available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-medium uppercase tracking-wider text-sm mb-4"
          >
            ✨ Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, scalable architectures, and modern design principles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card with gradient border on hover */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-default-100/80 to-default-200/50 backdrop-blur-sm border border-white/5 hover:border-teal-500/30 transition-all duration-500">
                {/* Image Container with aspect ratio */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Floating action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 flex gap-2"
                  >
                    <a
                      href={project.frLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                    {project.frRepo && (
                      <a
                        href={project.frRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                        title="Source Code"
                      >
                        <FaGithub size={14} />
                      </a>
                    )}
                  </motion.div>

                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs font-medium">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title with arrow */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <motion.div
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                        opacity: hoveredIndex === index ? 1 : 0.5,
                      }}
                      className="mt-1 text-teal-500"
                    >
                      <FaArrowRight size={14} />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-default-500 text-sm line-clamp-2 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-default-300/30 to-transparent mb-5" />

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.frLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 text-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Live Demo
                    </a>
                    <Link
                      href={`/project/${project._id}`}
                      className="flex-1 py-2.5 text-center rounded-xl bg-white/5 border border-white/10 text-default-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 60px rgba(20, 184, 166, 0.1)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-default-300 font-medium hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all duration-300"
            >
              View All Projects
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RecentProject;
