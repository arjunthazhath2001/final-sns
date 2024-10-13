import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import { HoverBorderGradient } from './ui/hover-border-gradient';

export default function OurTech() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center sm:mt-44 space-y-4 sm:space-y-8 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-3xl md:text-4xl text-2xl lg:text-5xl xl:text-7xl font-extrabold text-black dark:text-white">
          Our <span className='text-yellow-400'>Tech</span>
        </span>
      </div>

      {/* Main UI Component */}
      <div className="w-full max-w-7xl pt-5 sm:pt-16 px-10 sm:justify-items-center grid sm:gap-24 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
  {/* LEFT COLUMN - Text */}
  <div className="flex flex-col justify-center items-center sm:items-start sm:space-y-2 col-span-2 sm:col-span-1 pb-5 sm:pb-0">
    {/* 100x DASHBOARD Text */}
    <p className="text-black dark:text-white text-lg sm:text-2xl font-bold">
      THE
    </p>
    <p className="text-yellow-400 text-4xl sm:text-8xl font-extrabold">
      100x
    </p>
    <p className="text-black dark:text-white text-lg sm:text-5xl mb-3 font-extrabold">
      DASHBOARD
    </p>
    {/* Description */}
    <p className="text-gray-700 pb-5 text-center sm:text-left dark:text-gray-400 text-[11px] sm:text-sm md:text-base max-w-md">
      One-of-a-kind personalized dashboard that enhances student learning experience like never before.
    </p>

    {/* Button */}
    <div>
      <HoverBorderGradient className="min-w-[190px]">
        <span>Know More</span>
      </HoverBorderGradient>
    </div>
  </div>

  {/* RIGHT COLUMN - Image */}
  <div className="flex justify-center items-center col-span-2">
    {/* Assuming the image is in the public folder under the path 'images/dashboard.png' */}
    <Image
      src="/images/dashboard.png" // Use the correct path from your project
      alt="Dashboard Image"
      width={3200} // Adjust width/height as per your design
      height={1600}
      className="rounded-lg w-full h-auto"
      style={{
        boxShadow: '0 8px 10px rgba(0, 0, 0, 0.7)', // Custom shadow values
      }}
    />
  </div>
</div>

    </div>
  );
}
