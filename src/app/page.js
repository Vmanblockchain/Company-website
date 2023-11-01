'use client';

import Cursor from '@/components/common/Cursor';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Focus from '@/components/home/Focus';
import Headings from '@/components/home/Headings';
import Hero from '@/components/home/Hero';
import Idea from '@/components/home/Idea';
import Process from '@/components/home/Process';
import Services from '@/components/home/Service';
import Work from '@/components/home/Work';
import Work2 from '@/components/home/Work2';
import Work3 from '@/components/home/Work3';
import { useMouse, useMove } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const components = [Idea, Focus, Services, Headings, Work, Work2, Work3, Footer];

export default function Home() {
  const { ref: mouseRef, x: left, y: top } = useMouse();
  const [cursorVariant, setCursorVariant] = useState('default');

  const textEnter = (e) => {
    setCursorVariant('text');
  };

  const textExit = (e) => {
    setCursorVariant('default');
  };

  const variants = {
    default: {
      x: left - 8,
      y: top - 8,
    },
    text: {
      x: left - 30,
      y: top - 30,
      backgroundColor: 'white',
      // border: '2px solid #fff',
      mixBlendMode: 'difference',
      height: 75,
      width: 75,
      transition: {
        duration: 0,
        ease: 'linear',
        delay: 0,
      },
    },
  };

  return (
    <div className="w-full min-h-screen relative" ref={mouseRef}>
      <Cursor animate={cursorVariant} variants={variants} />
      <Navbar textEnter={textEnter} textExit={textExit} />
      <Hero />
      <div className="bg-white">
        {components.map((Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.75, y: 200 }}
            exit={{ opacity: 0.75, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Component />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
