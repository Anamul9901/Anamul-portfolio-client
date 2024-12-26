import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-[60vh] ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex h-[94vh] justify-around items-center gap-4">
          <div className="flex justify-center items-center pb-12 md:w-[40%]">
            <div className="">
              <Image
                src={"https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png"}
                alt=""
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="flex justify-start items-center md:w-[70%]">
            <div className="space-y-3 ">
              <h1 className="text-4xl font-bold">About Me</h1>
              <h1 className="text-2xl font-bold">Full Stack Developer</h1>
              <h1 className="">
                Full-Stack Web Developer with 1+ years of experience in scalable
                web application development, specialising in backend systems.
                Passionate about optimizing web functionalities through
                efficient solutions, solving complex problems, and delivering
                exceptional user experiences.
              </h1>
              <div className="pt-4">
                <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-lg rounded-full md:py-2 md:px-5 py-1 px-3">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
