import Image from "next/image";
import Link from "next/link";

const Blogs = async () => {
  const res = await fetch(
    "https://anamul-portfolio-backend.vercel.app/api/v1/blog/all",
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  const blogs = data?.data;

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold text-center mb-6 py-10">Our Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog: any) => (
            <Link
            href={`/blog/${blog._id}`}
              key={blog._id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition bg-default-50 hover:bg-default-100 duration-300 hover:cursor-pointer"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog?.image}
                  alt={blog?.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{blog?.name}</h3>
                <p className="text-sm text-default-600 mt-2">
                  {blog?.description?.slice(0,30)}...
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-default-500">
                    {blog?.readingTime} min read
                  </span>
                  <span className="text-sm text-default-500">
                    {new Date(blog?.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
