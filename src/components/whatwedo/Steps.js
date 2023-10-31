'use client';

import { steps } from '@/constants/data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Steps = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  console.log(selectedStep);

  const handleStepClick = (step) => {
    setSelectedStep(step);
  };

  return (
    <div className="bg-white py-24">
      <div className="flex-col sm:flex w-full mb-16 sm:mb-32">
        {steps.map((step) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
              zIndex: 10,
            }}
            key={step.id}
            className={`relative flex justify-center items-center basis-1/4 h-[500px] sm:h-[600px] bg-black cursor-pointer`}
            onClick={() => handleStepClick(step)}
          >
            <Image src={`${step.url}`} fill className="opacity-80" />
            <h1 className="absolute top-[80%] font-bold text-white text-2xl w-4/5 mx-auto">
              {step.title}
            </h1>
          </motion.div>
        ))}
      </div>
      <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-6 sm:mx-auto">
        {selectedStep && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-20">
            {selectedStep.steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-start space-y-2"
              >
                <span className="text-sm">Step {step.id}</span>
                <div>
                  <h1 className="text-3xl font-medium mb-4">{step.title}</h1>
                  <p className="">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Steps;
