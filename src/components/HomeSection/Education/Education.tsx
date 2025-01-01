const Education = () => {
  return (
    <div className="md:pt-28 min-h-[65vh]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="md:text-4xl text-2xl text-center font-bold pb-12">
          Education
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {/* JSC Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-lg p-6 transition-transform duration-300">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                JSC <span className="text-sm">(Junior School Certificate)</span>
              </h2>
              <p className="text-sm">Prijkandi High School, Raipura, Narsingdi</p>
              <div className="flex justify-between items-center text-teal-500">
                <p>2018</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* SSC Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-lg p-6 transition-transform duration-300">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                SSC <span className="text-sm">(Secondary School Certificate)</span>
              </h2>
              <p className="text-sm">Prijkandi High School, Raipura, Narsingdi</p>
              <div className="flex justify-between items-center text-teal-500">
                <p>2020</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* HSC Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-lg p-6 transition-transform duration-300">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                HSC <span className="text-sm">(Higher Secondary Certificate)</span>
              </h2>
              <p className="text-sm">Narsingdi Gov College, Narsingdi, Dhaka</p>
              <div className="flex justify-between items-center text-teal-500">
                <p>2022</p>
                <p>Grade: A+</p>
              </div>
            </div>
          </div>

          {/* CSE Section */}
          <div className="bg-default-100 hover:bg-default-200 hover:scale-105 shadow-lg rounded-lg p-6 transition-transform duration-300">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                CSE <span className="text-sm">(Computer Science and Engineering)</span>
              </h2>
              <p className="text-sm">Tejgaon University, Dhaka</p>
              <p className="text-teal-500 font-medium">Running</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
