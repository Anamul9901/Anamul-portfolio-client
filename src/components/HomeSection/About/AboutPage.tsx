import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-[90vh] ">
      <div className="max-w-7xl mx-auto ">
        <div className="md:flex h-[94vh] justify-around items-center gap-4">
          <div className="w-[40%]">
            <Image
              src={"https://i.ibb.co/QJ3NGXj/Anamul-Haque-removebg.png"}
              alt=""
              height={400}
              width={400}
            />
          </div>
          <div className="space-y-3 w-[70%]">
            <h1 className="text-4xl font-bold">About Me</h1>
            <h1 className="text-2xl font-bold">Full Stack Developer</h1>
            <h1 className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              dolores fugit voluptates veritatis odit magnam officiis cum soluta
              iste dolor in id ipsa, illo explicabo veniam dignissimos. Facere,
              inventore quia!
            </h1>
            <div className="pt-4">
              <button className="bg-blue-500 font-semibold text-lg rounded-full py-2 px-5">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
