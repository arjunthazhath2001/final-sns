import React from 'react';
import { ExpandableCardDemo2 } from './ExpandableCardDemo2';
import { ExpandableCardDemo1 } from './ExpandableCardDemo1';

export default function Spine() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-3xl md:text-4xl text-xl lg:text-5xl xl:text-7xl font-extrabold text-yellow-400">
          SPINE :
          <span className='text-black dark:text-white'> Our Unique Approach</span>
        </span>

        {/* Small paragraph below title */}
        <p className="text-sm sm:text-base lg:text-md dark:text-gray-400 text-gray-700  mt-5">
          To provide an activity centre that will be user-friendly and open to all groups and members of the community.
        </p>
      </div>

      {/* Main UI Components */}
      <div className="w-full max-w-7xl px-4 md:px-0 grid sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* First column of cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo1 />
        </div>
        {/* Second column of cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo2 />
        </div>
      </div>
    </div>
  );
}
