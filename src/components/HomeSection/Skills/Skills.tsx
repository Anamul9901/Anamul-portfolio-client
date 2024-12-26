import Image from "next/image";

const Skills = async () => {
  const res = await fetch(
    "https://anamul-portfolio-backend.vercel.app/api/v1/skill/all",
    {
      cache: "force-cache", // Ensures caching for performance
    }
  );
  const data = await res.json();
  const skills = data?.data;

  if (!skills || skills.length === 0) {
    return <div>No skills found.</div>;
  }

  return (
    <div className="min-h-[60vh]">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-20">Skills</h1>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-6 items-center justify-center">
          {skills.map((skill: any) => (
            <div
              key={skill._id}
              className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 items-center"
            >
              {/* Skill Image and Name */}
              <div className="flex items-center bg-default-100">
                {/* Skill Image (Logo) */}
                <div className="">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    height={100}
                    width={100}
                  />
                </div>

                {/* Skill Name */}
                <div className="ml-4">
                  <h2 className="text-sm">{skill.name}</h2>
                  {/* {skill.title && (
                    <p className="text-sm text-gray-600">{skill.title}</p>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
