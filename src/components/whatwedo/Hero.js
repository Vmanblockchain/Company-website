'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';

export default function Hero() {
  const isMobile = useMediaQuery('(min-width: 400px)');

  return (
    <div className="relative w-full">
      <Image
        src={
          isMobile
            ? '/images/whatwedo/hero.svg'
            : '/images/whatwedo/hero_mobile.svg'
        }
        width={!isMobile ? 400 : 1920}
        height={!isMobile ? 320 : 500}
        className=""
      />
      <div className="absolute top-1/4 -left-4 hidden sm:block">
        <h1 className="-rotate-90 text-white">hello@primeval.pro</h1>
      </div>
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl sm:text-9xl font-bold text-center text-white">
          Beyond code
        </h1>
      </motion.div>
    </div>
  );
}
