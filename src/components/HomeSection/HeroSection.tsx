import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const HeroSection = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex h-[94vh] justify-around items-center gap-4">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{"Hello, It's Me"}</h1>
            <h1 className="text-6xl font-bold">Anamul Haque</h1>
            <h1 className="text-3xl font-bold">
              {"I'm a Full-Stack Developer"}
            </h1>

            <div className="flex justify-start items-center gap-4 pt-4">
              <button className="border px-4 py-4  rounded-full">
                <FaFacebook />
              </button>
              <button className="border px-4 py-4 rounded-full">
                <GrLinkedin />
              </button>
              <button className="border px-4 py-4 rounded-full">
                <FaGithub />
              </button>
            </div>
            <div className="pt-4">
              <button className="bg-blue-500 font-semibold text-lg rounded-full py-2 px-5">
                Download CV
              </button>
            </div>
          </div>
          <div>
            <Image
              src={"https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png"}
              alt=""
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
