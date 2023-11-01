'use client';

import { navbar } from '@/constants/data';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ textEnter, textExit }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        closeOnClickOutside
        closeButtonProps={{
          autoFocus: false,
        }}
      >
        <div className="w-full h-full p-[50px] bg-white flex-col justify-start items-start gap-16 sm:gap-[131px] inline-flex">
          <div className="w-[150.40px] h-[83.64px] relative">
            <Image src={navbar.logo} alt="logo" width={60} height={80} />
            <div className="left-[39.40px] top-[7.64px] absolute text-black text-[30px] font-medium">
              Vman
            </div>
          </div>
          <ul className="flex-col justify-start items-start gap-[30px] flex">
            {navbar.links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="relative cursor-none flex justify-start items-center"
              >
                <li>
                  <h1
                    className={`text-lg px-4  hover:font-bold hover:text-black ${
                      link.button
                        ? 'bg-black text-white py-1 px-2  font-light rounded'
                        : ''
                    }`}
                  >
                    {link.name}
                  </h1>
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex-col justify-start items-start gap-[53px] flex">
            <div className="w-[324px] text-gray-500 text-[14px] font-normal leading-tight">
              Looking for collaboration for your next project? Do not hesitate
              to contact us to say hello.
            </div>
            <div className="w-[172px] text-gray-500 text-[19px] font-normal leading-7">
               info@vman.aero            </div>
            <div className="justify-start items-start gap-[47px] inline-flex">
              <div className="w-8 h-[29.77px] relative" />
              <div className="w-8 h-[29.77px] relative" />
              <div className="w-8 h-[31px] relative">
                <div className="w-[32px] h-[22.72px] left-[-0px] top-[3.58px] absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Mobile Navigation */}
      <div
        className="absolute lg:hidden z-50 top-4 left-4 bg-white rounded-lg p-1"
        onClick={open}
      >
        <Image
          src={navbar.hamburger}
          alt="logo"
          width={24}
          height={24}
          color="white"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="w-full hidden lg:flex items-center justify-between py-1 sm:py-2 lg:py-3 xl:py-4 2xl:py-6 bg-white">
        <div
          className="h-full w-[5%] flex items-center justify-center"
          onClick={open}
        >
          <Image src={navbar.hamburger} alt="logo" width={32} height={24} />
        </div>
        <div className="w-full justify-between flex items-center">
          <div className="w-full flex items-end space-x-2">
            <Image src={navbar.logo} alt="logo" width={60} height={80} />
            <h1 className="text-3xl font-medium leading-5">
              Vman
            </h1>
          </div>
          <div className="mr-20 h-8">
            <ul className="flex items-center justify-between relative">
              {navbar.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="relative cursor-none flex justify-start items-center"
                >
                  <li onMouseEnter={textEnter} onMouseLeave={textExit}>
                    <h1
                      className={`text-lg px-4  hover:font-bold hover:text-black ${
                        link.button
                          ? 'bg-black text-white py-1 px-2  font-light rounded'
                          : ''
                      }`}
                    >
                      {link.name}
                    </h1>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
