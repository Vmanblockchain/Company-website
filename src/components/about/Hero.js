import { about } from '@/constants/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full bg-white p-5 pt-24 sm:p-32">
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col space-y-10">
        <div className="w-full sm:w-1/2 flex flex-col justify-start space-y-2">
          <div>
            <span className="py-2 px-3 rounded-full bg-[#FFDA01] text-xs inline">
              {about.tag}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl">{about.title}</h1>
          <p className="text-sm pt-6">{about.description}</p>
        </div>
        <div className="w-full flex flex-col -space-y-24">
          <div className="flex justify-end">
            <Image
              src="/images/about/hero1.svg"
              width={1000}
              height={600}
              className="bg-gray-300 w-4/5"
            />
          </div>
          <div className="flex-col flex sm:flex-row justify-between items-start relative pb-16 sm:pb-0">
            <div className="flex justify-end w-2/3 sm:w-1/2">
              <Image
                src="/images/about/hero2.svg"
                width={600}
                height={700}
                className="bg-gray-200 z-10"
              />
            </div>
            <div className="w-full sm:w-1/3 flex mt-4 sm:mt-32 text-sm sm:text-base">
              <p>
                With our deep understanding of blockchain and its underlying
                technologies, we empower you to revolutionize the way you do
                business. From decentralized platforms to secure, transparent
                transactions, our team creates custom blockchain solutions that
                are tailored to meet your specific needs.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
