import Image from "next/image";
import Link from "next/link";

const RecentProject = async () => {
  const res = await fetch(
    "https://anamul-portfolio-backend.vercel.app/api/v1/project/all",
    {
      cache: "force-cache",
    }
  );
  const allProjects = await res.json();
  const projects = allProjects?.data;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">Recent Projects</h1>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-4">
            {projects?.map((project: any) => (
              <div
                key={project._id}
                className="relative group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <Image
                    className="w-full h-64 object-cover rounded-t-lg group-hover:blur-sm transition duration-300"
                    src={project?.image}
                    alt="Project"
                    width={300}
                    height={300}
                  />
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h1 className="text-white text-lg font-bold">
                      {project?.name}
                    </h1>
                    <p className="text-gray-200 px-4 text-center">
                      {project?.description?.slice(0, 20)}...
                    </p>
                    <div className="flex gap-4 mt-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project?.frLive}
                        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
                      >
                        Link
                      </a>
                      <Link
                        href={`/project/${project._id}`}
                        className="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
