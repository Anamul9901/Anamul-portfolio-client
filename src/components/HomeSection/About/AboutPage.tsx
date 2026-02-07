"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "@/src/hooks/useScrollAnimation";
import myImage from "../../../../public/Anamul-Haque-removebg.png";

const AboutPage = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Image Section */}
          <motion.div
            variants={fadeInLeft}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-teal-500/30 rounded-2xl -rotate-6" />
              <div className="absolute -inset-4 border-2 border-purple-500/30 rounded-2xl rotate-3" />

              <div className="relative glass-card overflow-hidden p-4">
                <Image
                  src={myImage}
                  alt="Anamul Haque"
                  height={400}
                  width={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={fadeInRight} className="space-y-6">
            <div>
              <motion.span
                variants={fadeInUp}
                className="text-teal-500 font-medium uppercase tracking-wider text-sm"
              >
                About Me
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mt-2"
              >
                Building Digital{" "}
                <span className="gradient-text">Experiences</span>
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} className="text-default-500 leading-relaxed text-lg">
              Full-stack web developer with <span className="text-teal-500 font-semibold">2 years of experience</span>,
              specializing in high-performance backend systems. Proven track record in optimizing
              application speed and building scalable architectures that maximize user impact.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-default-500 leading-relaxed">
              Currently working as a <span className="text-teal-500 font-semibold">Backend Developer at Strvia</span>,
              where I design and maintain scalable multi-vendor platforms using microservices architecture.
              I&apos;m passionate about clean code, performance optimization, and creating seamless user experiences.
            </motion.p>

            {/* Info cards */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-default-500">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-default-500">Projects Completed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">ICPC</div>
                <div className="text-sm text-default-500">Finalist 2025</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">1st</div>
                <div className="text-sm text-default-500">Hackathon Win</div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeInUp} className="pt-4">
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm">
                  Bangla (Native)
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm">
                  English (Proficient)
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm">
                  Hindi (Basic)
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
