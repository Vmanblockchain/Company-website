import React from 'react';
import { idea } from '../../constants/data';
import Image from 'next/image';

const Idea = () => {
  const { title, subtitle, blocks } = idea;

  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto px-8 rounded-xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-3xl py-20 flex flex-col space-y-10">
        <div className="text-left sm:w-4/5 flex flex-col space-y-4 sm:space-y-10">
          <h2 className="text-black text-3xl lg:text-4xl xl:text-5xl font-bold leading-8 lg:leading-10 tracking-wide">
            {title}
          </h2>
          <p className="text-gray-500 text-sm lg:text-lg xl:text-xl font-normal leading-tight sm:leading-loose">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-content-center gap-6">
          {blocks.map((block, index) => (
            <div
              key={block.id}
              className="flex flex-col justify-between items-start space-y-7"
            >
              <div className="mr-4 h-12 flex items-center">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={36}
                  height={48}
                  className="first:h-12 first:w-12"
                />
              </div>
              <h3 className="text-xl font-bold leading-5">{block.title}</h3>
              <p className="">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Idea;
