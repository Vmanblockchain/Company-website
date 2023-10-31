'use client';

import { useViewportSize } from '@mantine/hooks';
import Marquee from 'react-fast-marquee';

export default function Headings() {
  const solid = [
    'Development',
    'Blockchain',
    'Strategy',
    'DevOps',
    'Design',
    'Creative',
  ];

  const { width } = useViewportSize();

  const isMobile = width < 768;

  const outline = ['Apps', 'Fintech', 'Web-3', 'Blockchain', 'NFTs'];

  return (
    <div className="bg-white py-10 text-black">
      <div className="flex flex-col justify-center items-center sm:-space-y-4">
        <Marquee className="overflow-hidden py-4" speed={isMobile ? 100 : 300}>
          {solid.map((item, index) => (
            <div
              key={index}
              className="text-6xl sm:text-[160px] font-bold text-black"
            >
              {item}
              {'.'}
            </div>
          ))}
        </Marquee>
        <Marquee
          className="overflow-hidden py-4"
          speed={isMobile ? 100 : 300}
          direction="right"
        >
          {outline.map((item, index) => (
            <div
              key={index}
              className="text-6xl sm:text-[160px] font-bold text-white text-outline"
            >
              {item}
              {'.'}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
