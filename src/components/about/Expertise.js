'use client';

import { expertise } from '@/constants/data';
import { Accordion } from '@mantine/core';

const Expertise = () => {
  return (
    <div className="bg-white w-full px-5 sm:px-0 py-20">
      <div className="max-w-3xl md:max-w-4xl xl:max-w-6xl lg:max-w-5xl 2xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-betweeneeeè11">
        <div>
          <h1 className="text-6xl">Core Expertise</h1>
        </div>
        <div>
          <Accordion className="w-full" variant="filled">
            {expertise.expertises.map((item) => (
              <Accordion.Item value={item.title} key={item.id}>
                <Accordion.Control className="text-sm py-0 sm:text-lg sm:py-1 focus:bg-inherit hover:bg-inherit">
                  {item.title}
                </Accordion.Control>
                <Accordion.Panel className="text-xs sm:text-base text-opacity-70">
                  {item.description}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
