const Process = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center space-y-10 pb-10">
      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-5">
        <h1 className="text-xl sm:text-5xl">Have an idea?</h1>
        <p className="text-xs sm:text-md  text-opacity-90  text-center">
          Let&apos;s brainstorm and build and together for better <br />{' '}
          tomorrow.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-2 space-x-0 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-[10px] sm:text-sm  text-opacity-70">
            Looking for collaboration?
          </h1>
          <h1 className="text-xs sm:text-base"> info@vman.aero</h1>
        </div>
        <div className="w-[2px] sm:w-52 h-11 sm:h-[2px] bg-black dark:"></div>
        <div className="flex flex-col">
          <h1 className="text-xs sm:text-sm  text-opacity-70  text-center sm:text-left">
            LIG/B67/F3, 4TH PHASE, KPHB <br />
            COLONY, HYDERABAD
          </h1>
        </div>
        <div className="w-[2px] sm:w-52 h-11 sm:h-[2px] bg-black dark:"></div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-[10px] sm:text-sm   text-opacity-70">
            Looking for a job? Send <br /> your resume
          </h1>
          <h1 className="text-xs sm:text-base">hello@primeval.pro</h1>
        </div>
      </div>
    </div>
  );
};

export default Process;
