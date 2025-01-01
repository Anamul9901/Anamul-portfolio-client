"use client";
import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";
import myImage from "../../../public/Anamul-Haque-removebg.png";

const HeroSection = () => {
  const PhotoSection = () => (
    <div className="flex justify-center items-center animate-slide-right">
      <div className="block items-center justify-center pb-14">
        <Image src={myImage} alt="Photo" height={300} width={300} />
      </div>
    </div>
  );

  const ContentSection = () => {
    useEffect(() => {
      new Typewriter("#typewriter", {
        strings: ["a Full-Stack Developer", "From Bangladesh"],
        autoStart: true,
        loop: true,
        delay: 75,
      });
    }, []);

    return (
      <div className="flex justify-center items-center animate-slide-left">
        <div className="md:space-y-3 space-y-1 text-center md:text-left">
          <h1 className="md:text-3xl text-xl font-bold">{"Hello, It's Me"}</h1>
          <h1 className="md:text-6xl text-4xl font-bold">Anamul Haque</h1>
          <h1 className="md:text-3xl text-xl font-bold text-blue-500">
            {"I'm"} <span> </span>
            <span id="typewriter"></span>
          </h1>
          <div className="flex md:justify-start justify-center items-center gap-4 pt-4">
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
              className="border md:px-3 md:py-3 p-2 rounded-full text-xl hover:bg-default-300"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="pt-4">
            <a href="/Anamul_Resume.pdf" download="Anamul-Resume.pdf">
              <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-lg rounded-full md:py-2 md:px-5 py-2 px-4">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row h-[90vh] md:justify-around justify-center items-center gap-4">
          <ContentSection />
          <PhotoSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
