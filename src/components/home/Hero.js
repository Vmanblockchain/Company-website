'use client';

import { hero } from '@/constants/data';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="w-full h-[60vh] lg:h-[92vh] flex justify-between ">
      <div className="relative bg-white hidden lg:block w-[5%] h-full">
        <div className="w-full absolute flex flex-col items-center justify-around h-full ">
          <h1 className="text-black transform -rotate-90">
             info@vman.aero          </h1>
          <div className="flex items-center justify-center transform -rotate-90 space-x-3">
            <div className="flex items-center justify-center">
              <span className="w-20 bg-black h-[2px]"></span>
              <span className="w-2 h-2 rounded-full bg-black"></span>
            </div>
            <h1 className="text-black">scroll</h1>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[95%] relative h-full">
        <Image
          className="left-0 top-0 absolute -z-10"
          src={hero.bg}
          alt="bg"
          fill={true}
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority={true}
        />
        <motion.div
          initial={{
            x: '-20%',
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 top-16 lg:top-20 flex flex-col items-start space-y-4"
        >
          <h1 className="text-white 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
            {hero.title}
          </h1>
          <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
            {hero.subtitle}
          </h1>
        </motion.div>
        <motion.div className="hidden sm:grid grid-cols-4  h-full w-full z-10">
          {hero.blocks.map((block, index) => (
            <motion.div
              initial={{
                x: '10%',
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.2,
                delay: 1 + index / 2,
              }}
              className="border-r border-neutral-400 flex items-end justify-center last:border-0"
              key={block.id}
            >
              <span className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-light sm:font-normal lg:font-medium mb-9">
                {block.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
        <Carousel
          className="sm:hidden"
          slideSize="40%"
          slideGap={0}
          height="60vh"
          withControls={false}
          dragFree
          align="start"
          classNames="h-full w-full z-10"
        >
          {hero.blocks.map((block) => (
            <Carousel.Slide
              key={block.id}
              className="border-r border-gray-300 flex items-end justify-center last:border-0 h-full w-full px-2"
            >
              <div
                // className="border-r border-white flex items-end justify-center last:border-0 h-full w-full px-2"
                key={block.id}
              >
                <span className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-light sm:font-normal lg:font-medium mb-9">
                  {block.title}
                </span>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
