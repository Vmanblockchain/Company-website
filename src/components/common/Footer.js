'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Divider } from '@mantine/core';
import { navbar, socialLinks } from '@/constants/data';

const Footer = () => {
  return (
    <div className="pt-12 bg-black w-full">
      <div className="flex flex-col items-center w-4/5 sm:w-[70vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="text-white flex -space-x-12 sm:-space-x-24 mb-5 sm:mb-0">
            <h1 className="text-xs transform -rotate-90">Collaboration</h1>
            <h1 className="text-2xl sm:text-6xl leading-[48px] sm:leading-[85px]">
              We&apos;d like to <br /> talk
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex flex-col space-y-10">
              <p className="text-white text-opacity-50">
                We build and activate brands through cultural insight,
                <br /> strategic vision, and the power of emotion across every
                <br /> element of its expression.
              </p>
              <div>
                <button className="bg-[#FFDA01] px-14 py-1 rounded text-black text-sm">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-24 grid grid-cols-3 w-full">
          <div className="flex justify-between sm:justify-start items-start sm:space-x-10">
            <Image
              src="/images/common/logo.png"
              width={44}
              height={38}
              alt="footer logo"
              className="hidden sm:block"
            />
            <div className="flex flex-col space-y-4">
              <ul className="flex flex-col space-y-2">
                {navbar.links.map((link) => (
                  <Link href={link.url} key={link.id}>
                    <li className="text-xs sm:text-base text-white text-opacity-50 cursor-pointer hover:text-white hover:text-opacity-100">
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <ul className="text-xs flex flex-col items-start justify-start space-y-3 sm:space-y-8">
            <li className="text-white text-xs text-opacity-50 uppercase">
              Need help?
            </li>
            <li className="text-white text-xs sm:text-lg">+91 9908044386</li>
            <li className="text-white text-xs text-opacity-50 uppercase">
              Let&apos;s connect
            </li>
            <li className="text-white text-xs sm:text-lg">
              hello@primeval.pro
            </li>
          </ul>
          <div className="flex flex-col item-start space-y-8">
            <h1 className="text-xs sm:text-sm uppercase text-neutral-500">
              Follow Us
            </h1>
            <div className="flex space-x-0 sm:space-x-8">
              {socialLinks.map((link) => (
                <Link href={link.link} key={link.id}>
                  <div className="cursor-pointer p-1 sm:p-2 rounded-full">
                    <Image
                      src={link.img}
                      width={28}
                      height={28}
                      alt="social link"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Divider my="xs" className="bg-white opacity-20 w-full" />
        <div className="flex w-full justify-between items-center py-8">
          <p className="text-white text-opacity-50 text-xs">
            Primeval Tech Inc. © 2023 All rights Reserved.
          </p>
          <p className="text-white text-opacity-50 text-xs">English / USD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
