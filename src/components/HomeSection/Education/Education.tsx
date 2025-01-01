const Education = () => {
  return (
    <div className="min-h-[80vh] md:pt-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl text-center font-bold pb-12">
          Education
        </h1>
        <div className="grid md:grid-cols-2 md:gap-6 gap-4">
          {/* Address Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-md p-5 flex items-center gap-5">
            <div className="space-y-1 px-3">
              <h2 className="text-xl font-bold">
                JSC <span className="text-sm">(Junior School Certificate)</span>
              </h2>
              <p className="text-sm">
                Prijkandi High School, Raipura, Narsingdi
              </p>
              <div className="flex gap-6 text-blue-500">
                <p>2018</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-md p-5 flex items-center gap-5 ">
            <div className="space-y-2 px-3">
              <h2 className="text-xl font-bold">
                SSC{" "}
                <span className="text-sm">(Secondary School Certificate)</span>
              </h2>
              <p className="text-sm">
                Prijkandi High School, Raipura, Narsingdi
              </p>
              <div className="flex gap-6 text-blue-500">
                <p>2020</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-md p-5 flex items-center gap-5">
            <div className="space-y-2 px-3">
              <h2 className="text-xl font-bold">
                HSC{" "}
                <span className="text-sm">(Higher Secondary Certificate)</span>
              </h2>
              <p className="text-sm">Narsingdi Gov Collage, Narsingdi, Dhaka</p>
              <div className="flex gap-6 text-blue-500">
                <p>2022</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-md p-5 flex items-center gap-5">
            <div className="space-y-2 px-3">
              <h2 className="text-xl font-bold">
                CSE{" "}
                <span className="text-sm">
                  (Computer Science and Engineering)
                </span>
              </h2>
              <p className="text-sm">Tejgon University, Dhaka</p>
              <p className="text-blue-500">Running</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
