import Image from 'next/image';
import { work3 } from '@/constants/data';

const Work3 = () => {
  return (
    <div className="bg-white">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto sm:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col items-start justify-center space-y-5 sm:space-y-12 px-4 sm:px-0">
            <div className="flex flex-col space-y-1 sm:space-y-2 items-start">
              <h1 className="text-[10px] sm:text-xs text-neutral-500 uppercase">
                {work3.tagline}
              </h1>
              <h1 className="text-xl sm:text-5xl">{work3.title}</h1>
            </div>
            <p className="text-xs sm:text-sm sm:leading-[25px]">
              {work3.description}
            </p>
            <div className="text-sm sm:text-base grid grid-cols-2 gap-2 font-light w-full">
              {work3.works.map((work3, index) => (
                <span key={index}>{work3}</span>
              ))}
            </div>
          </div>
          <Image
            src="/images/home/work33.jpg"
            alt="work3"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>

  );
};

export default Work3;
