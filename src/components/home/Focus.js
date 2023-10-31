'use client';

import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { Accordion } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { focus } from '@/constants/data';

const Focus = () => {
  const { width, height } = useViewportSize();

  const isMobile = useMediaQuery('(max-width : 480px)');

  return (
    <div className={`w-full bg-white ${isMobile ? 'py-12' : 'py-30'}`}>
      <div
        className={`grid items-center  ${
          isMobile ? 'grid-rows-2 my-5' : 'grid-cols-2 py-10'
        }`}
      >
        <Image
          src="/images/home/howitworks.jpg"
          alt="focus-2"
          width={isMobile ? width : width / 2}
          height={640}
        />
        <div className="mx-8 sm:mx-20 z-10">
          <div className="flex flex-col items-start space-y-2 sm:space-y-8">
            <h1 className="text-base sm:text-6xl sm:leading-[42px]">
              {focus.title}
            </h1>
            <p className="text-xl sm:text-sm uppercase font-extralight">
              {focus.author}
            </p>
            <Accordion
              className="w-full"
              chevron={<IconPlus size="1.25rem" />}
              styles={{
                chevron: {
                  '&[data-rotate]': {
                    transform: 'rotate(45deg)',
                  },
                },
              }}
            >
              {focus.accordion.map((item) => (
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
    </div>
  );
};

export default Focus;
