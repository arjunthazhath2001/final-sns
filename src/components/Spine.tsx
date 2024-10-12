import React from 'react';
import { LayoutGridDemo } from './LayoutGridDemo';

export default function Spine() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center space-y-0 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-3xl md:text-4xl text-xl lg:text-5xl xl:text-7xl font-extrabold text-yellow-400">
          SPINE :
          <span className='text-black dark:text-white'> Our Unique Approach</span>
        </span>

        {/* Small paragraph below title */}
        <p className="text-[8px] sm:text-base lg:text-md dark:text-gray-400 text-gray-700 mt:3 sm:mt-5 mx-12 text-center">
          To provide an activity centre that will be user-friendly and open to all groups and members of the community.
          <br/> Click on each image to know more
        </p>
      </div>

      {/* Main UI Components */}

      <div className="w-full max-w-7xl px-4 md:px-0 grid grid-cols-1">    
        <div className="scale-90">  {/* Reduce the layout grid size by 10% */}
          <LayoutGridDemo/>
        </div>
      </div>
    </div>
  );
}

