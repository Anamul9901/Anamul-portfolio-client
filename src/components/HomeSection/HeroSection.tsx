import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const HeroSection = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex h-[94vh] justify-around items-center gap-4 flex-col md:flex-row">
          <div className="flex justify-center items-center">
            <div className="block md:hidden items-center justify-center py-14">
              <Image
                src={"https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png"}
                alt="Photo"
                height={300}
                width={300}
              />
            </div>
          </div>
          {/* content section */}
          <div className="flex justify-center items-center pt-10">
            <div className="md:space-y-3 space-y-1 ">
              <h1 className="md:text-3xl text-xl font-bold">
                {"Hello, It's Me"}
              </h1>
              <h1 className="md:text-6xl text-4xl font-bold">Anamul Haque</h1>
              <h1 className="md:text-3xl text-xl font-bold">
                {"I'm a Full-Stack Developer"}
              </h1>

              <div className="flex justify-start items-center gap-4 pt-4">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/anamul-haque-772264299/"
                  className="border md:px-3 md:py-3 p-2 rounded-full text-xl hover:bg-default-300"
                >
                  <GrLinkedin />
                </a>
                <a
                  target="blank"
                  href="https://github.com/Anamul9901"
                  className="border md:px-3 md:py-3 p-2 rounded-full text-xl hover:bg-default-300"
                >
                  <FaGithub />
                </a>
                <a
                  target="blank"
                  href="https://www.facebook.com/Anamul114"
                  className="border md:px-3 md:py-3 p-2  rounded-full text-xl hover:bg-default-300"
                >
                  <FaFacebook />
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="/Anamul_Resume.pdf" // Replace this with the actual path to your CV
                  download="Anamul-Resume.pdf" // The default file name for the download
                >
                  <button className="bg-blue-500 hover:bg-blue-700  font-semibold text-lg rounded-full md:py-2 md:px-5 py-2 px-4">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* photo section */}
          <div className="md:block hidden">
            <Image
              src={"https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png"}
              alt="Photo"
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
