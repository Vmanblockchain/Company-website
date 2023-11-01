'use client';

import { useViewportSize } from '@mantine/hooks';
import Marquee from 'react-fast-marquee';

export default function Headings() {
  const solid = [
    'AMS',
    'IEMS',
    'Air and Mobility',
    'Aviation training',
    'Renting',
    'Leasing',
  ];

  const { width } = useViewportSize();

  const isMobile = width < 768;

  const outline = ['Air Ambulance', 'HEMS', 'FTO', 'Medical transport', 'eVTOL'];

  return (
    <div className="bg-white py-10 text-black">
      <div className="flex flex-col justify-center items-center sm:-space-y-4">
        <Marquee className="overflow-hidden py-4" speed={isMobile ? 100 : 300}>
          {solid.map((item, index) => (
            <div
              key={index}
              className="text-5xl sm:text-[90px] font-bold text-black"
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
              className="text-5xl sm:text-[90px] font-bold text-white text-outline"
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
