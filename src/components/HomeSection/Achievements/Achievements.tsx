"use client";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import { FaTrophy, FaMedal, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Achievements = () => {
    const { ref, controls } = useScrollAnimation(0.2);

    const achievements = [
        {
            icon: FaTrophy,
            title: "ICPC Asia Dhaka Regional 2025",
            subtitle: "Finalist",
            description: "Competed at BUBT University in the prestigious ICPC Asia Dhaka Regional Contest.",
            link: "#",
            color: "from-violet-500 to-purple-500",
        },
        {
            icon: FaMedal,
            title: "Hackathon 2024",
            subtitle: "2nd Place",
            description: "Secured second place in an 8-hour hackathon at Tejgaon College, Dhaka.",
            link: "#",
            color: "from-gray-300 to-gray-500",
        },
        {
            icon: FaCertificate,
            title: "Complete Web Development",
            subtitle: "Programming Hero",
            description: "Comprehensive full-stack web development course covering modern technologies.",
            link: "#",
            color: "from-teal-500 to-cyan-500",
        },
        {
            icon: FaCertificate,
            title: "Next Level Web Development",
            subtitle: "Programming Hero",
            description: "Advanced course covering Next.js, TypeScript, and enterprise-level development.",
            link: "#",
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <section className="py-20 md:py-32 relative" ref={ref}>
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
                            Recognition
                        </span>
                        <h2 className="section-heading mt-2 mb-0">
                            Achievements & <span className="gradient-text">Certifications</span>
                        </h2>
                    </motion.div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="glass-card p-6 relative overflow-hidden group card-hover"
                            >
                                {/* Gradient accent */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color}`}
                                />

                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div
                                        className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white text-xl flex-shrink-0`}
                                    >
                                        <achievement.icon />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <h3 className="font-bold text-white group-hover:text-teal-400 transition-colors">
                                                    {achievement.title}
                                                </h3>
                                                <p className="text-teal-500 text-sm font-medium">
                                                    {achievement.subtitle}
                                                </p>
                                            </div>
                                            {achievement.link !== "#" && (
                                                <a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-default-500 hover:text-teal-500 transition-colors"
                                                >
                                                    <FaExternalLinkAlt className="text-sm" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-default-500 text-sm mt-2">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
