"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
    const { ref, controls } = useScrollAnimation(0.2);
    const [activeTab, setActiveTab] = useState(0);

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
            technologies: ["Node.js", "NestJS", "MongoDB", "TypeScript", "Cache Server", "Redis", "Docker", "AWS"],
        },
        {
            title: "Team Lead - SCIC Program",
            company: "Programming Hero",
            location: "Remote",
            period: "December 2023 - March 2024",
            type: "Team Project",
            responsibilities: [
                "Led a 5-member development team for 4 months to build an online voting and polling system",
                "Designed and implemented core voting logic, poll creation, and real-time result features",
                "Managed team coordination, task distribution, and sprint planning throughout the project",
                "Developed secure authentication and authorization for poll management",
                "Ensured code quality through regular code reviews and best practices enforcement",
                "Received official recommendation letter from Programming Hero for leadership excellence",
            ],
            technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        },
    ];

    return (
        <section className="py-20 md:py-32 relative" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="section-container relative z-10">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto"
                >
                    {/* Section Header */}
                    <motion.div variants={staggerItem} className="text-center mb-12 md:mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-medium uppercase tracking-wider text-sm mb-4">
                            Career Journey
                        </span>
                        <h2 className="section-heading mt-2 mb-0">
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        {/* Tabs List */}
                        <motion.div
                            variants={staggerItem}
                            className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 md:w-64 flex-shrink-0 scrollbar-hide border-b md:border-b-0 md:border-l border-default-200/20"
                        >
                            {experiences.map((exp, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative px-4 py-3 text-left transition-all duration-300 whitespace-nowrap md:whitespace-normal rounded-md md:rounded-r-md md:rounded-l-none
                                        ${activeTab === index
                                            ? "text-teal-500 bg-teal-500/10"
                                            : "text-default-400 hover:text-default-200 hover:bg-default-100/5"
                                        }`}
                                >
                                    {activeTab === index && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 md:bottom-0 md:top-0 md:left-0 md:right-auto md:h-auto md:w-1 bg-teal-500"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="font-medium relative z-10">{exp.company}</span>
                                </button>
                            ))}
                        </motion.div>

                        {/* Content Area */}
                        <div className="flex-1 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card p-6 md:p-8"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {experiences[activeTab].title}
                                            </h3>
                                            <p className="text-teal-500 font-medium text-lg">
                                                @ {experiences[activeTab].company}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm w-fit">
                                            {experiences[activeTab].type}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-sm text-default-400 border-b border-default-200/20 pb-6">
                                        <div className="flex items-center gap-2">
                                            <FaCalendar className="text-teal-500" />
                                            {experiences[activeTab].period}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-teal-500" />
                                            {experiences[activeTab].location}
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {experiences[activeTab].responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-3 text-default-300 text-sm md:text-base leading-relaxed">
                                                <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {experiences[activeTab].technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-md bg-default-100/50 hover:bg-teal-500/10 hover:text-teal-400 transition-colors text-xs text-default-400 border border-transparent hover:border-teal-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
