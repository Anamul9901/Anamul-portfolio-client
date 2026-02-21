"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/src/hooks/useScrollAnimation";
import { FaClock, FaCalendar } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Blog {
  _id: string;
  name: string;
  description: string;
  image: string;
  readingTime: number;
  createdAt: string;
}

const Blogs = () => {
  const { ref, controls } = useScrollAnimation(0.1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://anamul-portfolio-backend.vercel.app/api/v1/blog/all",
          { cache: "no-cache" }
        );
        const data = await res.json();
        setBlogs(data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-500 font-medium uppercase tracking-wider text-sm mb-4">
              Latest Articles
            </span>
            <h2 className="section-heading mt-2 mb-0">
              My <span className="gradient-text">Blog</span>
            </h2>
          </motion.div>

          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs?.map((blog) => (
              <motion.div key={blog._id} variants={staggerItem}>
                <Link
                  href={`/blog/${blog._id}`}
                  className="block glass-card overflow-hidden group card-hover"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-1">
                      {blog.name}
                    </h3>
                    <p className="text-default-500 text-sm line-clamp-2 mb-4">
                      {blog.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-default-500">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-teal-500" />
                        <span>{blog.readingTime} min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="text-teal-500" />
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
