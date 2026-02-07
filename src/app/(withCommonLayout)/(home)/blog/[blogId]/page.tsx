"use client";

import { Spinner } from "@nextui-org/spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();
  console.log("blogId", blogId);

  const blog = blogData?.data; // Accessing the blog data

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(
          `https://anamul-portfolio-backend.vercel.app/api/v1/blog/${blogId}`,
          {
            cache: "force-cache", // Forces caching for this request
          }
        );
        const data = await res.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  // Show spinner while loading
  if (loading)
    return (
      <div className="min-h-[94vh] pt-20 text-center">
        <Spinner size="lg" /> {/* Optional: Customize size */}
      </div>
    );

  // Show error message if blog not found
  if (!blog)
    return (
      <div className="min-h-[94vh] pt-32 text-center">
        <p>Blog not found.</p>
      </div>
    );

  return (
    <div className="min-h-[100vh] pt-32 px-4 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Blog Image */}
        <div className="relative w-full h-60">
          <img
            src={blog.image}
            alt={blog.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="flex justify-between text-sm text-gray-500 py-4">
          <span>{blog.readingTime} min read</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
        <h2 className="text-3xl font-semibold mb-4">{blog.name}</h2>
        <p className="text-lg text-gray-600 mb-6">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
