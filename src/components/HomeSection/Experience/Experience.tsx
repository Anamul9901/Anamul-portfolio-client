"use client";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
    const { ref, controls } = useScrollAnimation(0.2);

    const experiences = [
        {
            title: "Backend Developer",
            company: "Strvia",
            location: "Chittagong Hi-Tech Park, 4100",
            period: "April 2024 - Present",
            type: "Full-time",
            responsibilities: [
                "Designed and maintained scalable multi-vendor, multi-role platform architecture supporting users, vendors, admins, and system administrators",
                "Built microservices-based backend ensuring high availability and scalability",
                "Enabled non-technical users to build websites (e-commerce, blogs, portfolios) using drag-and-drop with no coding required",
                "Developed one-click WordPress migration system to transfer complete site data",
                "Implemented high-performance caching server, significantly reducing API load and improving response times",
                "Developed image optimization and upload system for compressed images",
                "Led and guided frontend developers for proper API integration and consistent performance",
            ],
            technologies: ["Node.js", "NestJS", "MongoDB", "Redis", "Docker", "AWS"],
        },
    ];

    return (
        <section className="py-20 md:py-32 relative" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

            <div className="section-container relative z-10">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={staggerContainer}
                >
                    {/* Section Header */}
                    <motion.div variants={staggerItem} className="text-center mb-16">
                        <span className="text-teal-500 font-medium uppercase tracking-wider text-sm">
                            Career Journey
                        </span>
                        <h2 className="section-heading mt-2 mb-0">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                    </motion.div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500 transform md:-translate-x-1/2" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-500 rounded-full transform -translate-x-1/2 mt-8 z-10 animate-pulse-glow" />

                                {/* Content card */}
                                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                    <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 card-hover">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                                <p className="text-teal-500 font-medium">{exp.company}</p>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm">
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-default-500">
                                            <div className="flex items-center gap-2">
                                                <FaCalendar className="text-teal-500" />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-teal-500" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        {/* Responsibilities */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-default-400 text-sm">
                                                    <span className="text-teal-500 mt-1">▹</span>
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-default-200/20">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 rounded-md bg-default-100/50 text-xs text-default-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for timeline alignment */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
