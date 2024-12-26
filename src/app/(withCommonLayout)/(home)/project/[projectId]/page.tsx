"use client";

import { Spinner } from "@nextui-org/spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  const project = (projectData as any)?.data;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://anamul-portfolio-backend.vercel.app/api/v1/project/${projectId}`,
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading)
    return (
      <div className="min-h-[94vh] pt-20 text-center">
        <Spinner />
      </div>
    );
  if (!project)
    return (
      <div className="min-h-[94vh] pt-32 text-center">
        Project not found.
      </div>
    );

  return (
    <div className="h-[94vh]">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <p className="text-neutral-400 mb-6">{project.description}</p>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold text-lg mb-2">Frontend Links</h2>
            <p>
              <a
                href={project.frLive}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live
              </a>
            </p>
            <p>
              <a
                href={project.frRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Repository
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-2">Backend Links</h2>
            <p>
              <a
                href={project.bcLive}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live
              </a>
            </p>
            <p>
              <a
                href={project.bcRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Repository
              </a>
            </p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Created At: {new Date(project.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
