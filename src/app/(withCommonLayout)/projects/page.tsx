"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaSearch } from "react-icons/fa";

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

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
                        Portfolio Showcase
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                        All <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-default-500 max-w-2xl mx-auto mb-8">
                        A complete collection of my works, ranging from full-stack applications to experimental prototypes.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-default-400 group-focus-within:text-teal-500 transition-colors">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search projects by name or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-default-100/50 border border-default-200/50 text-default-100 placeholder:text-default-500 focus:outline-none focus:border-teal-500/50 focus:bg-default-100 transition-all duration-300 backdrop-blur-sm"
                        />
                    </div>
                </motion.div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-16 h-16 border-4 border-teal-500/20 border-t-teal-500 rounded-full animate-spin mb-4" />
                        <p className="text-default-500 animate-pulse">Loading projects...</p>
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center py-20 glass-card">
                        <p className="text-default-400 text-lg">No projects found matching "{searchTerm}"</p>
                        <button
                            onClick={() => setSearchTerm("")}
                            className="mt-4 px-6 py-2 text-teal-500 hover:text-teal-400 font-medium hover:underline transition-all"
                        >
                            Clear Search
                        </button>
                    </div>
                ) : (
                    /* Projects Grid */
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-gradient-to-br from-default-100/80 to-default-200/50 backdrop-blur-sm border border-white/5 hover:border-teal-500/30 transition-all duration-500">
                                    {/* Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        {/* Floating Links */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: hoveredIndex === index ? 1 : 0,
                                                y: hoveredIndex === index ? 0 : 20,
                                            }}
                                            className="absolute top-4 right-4 flex gap-2"
                                        >
                                            <a
                                                href={project.frLive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-400 transition-colors"
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
                                                    title="Frontend Code"
                                                >
                                                    <FaGithub size={14} />
                                                </a>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                                                {project.name}
                                            </h3>
                                            <p className="text-default-400 text-sm line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-white/5 flex gap-3">
                                            <a
                                                href={project.frLive}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 py-2 text-center rounded-lg bg-teal-500/10 text-teal-500 text-sm font-medium hover:bg-teal-500 hover:text-white transition-all duration-300"
                                            >
                                                Live Demo
                                            </a>
                                            <Link
                                                href={`/project/${project._id}`}
                                                className="flex-1 py-2 text-center rounded-lg bg-white/5 text-default-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
