'use client';

import { services } from '@/constants/data';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const Services = () => {
  const isMobile = useMediaQuery('(max-width : 480px)');

  return (
    <div className="bg-white">
      <div
        className={`items-center grid w-full text-[#080216] bg-white py-20 ${
          isMobile
            ? 'grid-rows-6 px-8'
            : 'grid-cols-6 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto'
        }`}
      >
        {services.map((service, index) => (
          <div
            className={`items-center ${
              isMobile
                ? 'flex space-x-5 space-y-8'
                : 'grid grid-rows-3 gap-2 justify-between h-full'
            }`}
            key={service.id}
          >
            {isMobile ? null : service.id % 2 !== 0 ? (
              <div className="flex flex-col justify-center items-center space-y-3">
                <h1 className="text-3xl ">{service.title}</h1>
                <p className="text-center text-sm text-opacity-70">
                  {service.description}
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <Image
              src={service.img}
              alt={service.title}
              width={isMobile ? 70 : 140}
              height={isMobile ? 70 : 140}
              className="mx-auto"
            />
            {isMobile ? (
              <div className="flex flex-col justify-center items-start sm:items-center space-y-1 sm:space-y-3">
                <h1 className="text-sm sm:text-3xl">{service.title}</h1>
                <p className="text-left sm:text-center text-xs sm:text-sm text-[#5F6973]">
                  {service.description}
                </p>
              </div>
            ) : service.id % 2 === 0 ? (
              <div className="flex flex-col justify-center items-center space-y-3">
                <h1 className="text-3xl">{service.title}</h1>
                <p className="text-center text-sm text-opacity-70 ">
                  {service.description}
                </p>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
