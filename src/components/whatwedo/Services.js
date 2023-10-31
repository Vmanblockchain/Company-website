export default function Services() {
  return (
    <div className="bg-white w-full relative">
      <div className="absolute top-1/3 -left-4 hidden sm:block">
        <h1 className="-rotate-90 text-black flex space-x-2">
          <div className="flex items-center justify-center">
            <span className="w-16 bg-black h-[2px]"></span>
            <span className="w-2 h-2 rounded-full bg-black"></span>
          </div>
          <h1 className="text-black">scroll</h1>
        </h1>
      </div>
      <div className="mx-4 sm:mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl grid grid-cols-1 sm:grid-cols-2 justify-between gap-6 sm:gap-0 items-center py-10 sm:py-16">
        <div className="flex flex-col justify-center items-start space-y-3 w-full sm:w-3/4">
          <h1 className="px-4 py-2 rounded-full bg-black text-white">
            Services
          </h1>
          <h1 className="text-2xl">
            We create world-class digital products that communicate clearly.
          </h1>
        </div>
        <div className="w-full sm:w-3/4">
          <h1>
            We are thriving community of designers, engineers, product managers
            who aim to build and ship great products.
          </h1>
        </div>
      </div>
    </div>
  );
}
