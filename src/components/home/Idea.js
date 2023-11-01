import React from 'react';
import { idea } from '../../constants/data';
import Image from 'next/image';

const Idea = () => {
  const { title, subtitle, blocks } = idea;

  return (
    <div className="w-full bg-white">
      <div className="w-full mx-auto px-8 rounded-xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-3xl py-20">
        <div className="text-left sm:w-4/5">
          <h3 className="text-black text-3xl lg:text-4xl xl:text-5xl font-bold leading-10 lg:leading-12 tracking-wide custom-line-height-10">
            {title}
          </h3>
          <p className="text-gray-500 text-sm lg:text-lg xl:text-xl font-normal leading-tight sm:leading-loose">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-10">
          {blocks.map((block, index) => (
            <div key={block.id} className={`flex flex-col sm:flex-row items-start space-y-16 sm:space-y-5 ${index % 2 === 0 ? 'sm:space-x-reverse' : ''}`}>
              <div className="w-full sm:w-1/2">
                <h2 className="text-4xl font-bold leading-9 sm:leading-6 mb-4">{block.title}</h2>
                <p className="">{block.description}</p>
              </div>
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <Image
                  alt={block.title}
                  src={block.image}
                  width={300}
                  height={280}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Idea;
