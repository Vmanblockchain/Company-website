const Vision = () => {
  return (
    <div className="bg-white">
      <div className="pb-20">
        <div className="bg-[url('/images/whatwedo/vision.svg')] w-full">
          <div className="flex justify-center sm:justify-end py-10 sm:py-20 xl:max-w-6xl 2xl:max-w-7xl lg:max-w-5xl md:max-w-4xl max-w-3xl mx-auto">
            <div className="bg-white p-4 sm:p-14 rounded w-11/12 sm:w-2/5 flex flex-col justify-between items-start space-y-4">
              <span className="py-2 px-3 bg-black text-white rounded-full text-sm">
                Our Vision
              </span>
              <p className="pb-10 sm:pb-20">
                We believe that designing products and services in close
                partnership with our clients is the only way to have a real
                impact on their business.
              </p>
              <span className="px-3 py-1 border-l-2 border-black">
                Meet the Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
