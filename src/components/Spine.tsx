import React from 'react';
import { LayoutGridDemo } from './LayoutGridDemo';
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Spine() {
  return (
    <div className="bg-transparent w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 space-y-4 relative">
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-3xl md:text-4xl text-xl lg:text-5xl xl:text-7xl font-extrabold text-yellow-400">
          SPINE : <span className='text-black dark:text-white'> Our Unique Approach</span>
        </span>

        {/* Small paragraph below title */}
        <p className="text-[8px] sm:text-base lg:text-md dark:text-gray-200 text-gray-700 mt-3 sm:mt-5 mx-12 text-center">
          Click on each image to know more
        </p>
      </div>

      {/* Main UI Components */}
      <div className="w-full max-w-7xl px-4 md:px-0 grid grid-cols-1 place-items-center gap-6">
        {/* Layout Grid Demo */}
        <div className="w-full">
          <LayoutGridDemo />
        </div>

        {/* Hover Gradient Button */}
        <HoverBorderGradient className="min-w-[190px]">
          <span>Know More</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
