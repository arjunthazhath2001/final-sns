import React from 'react';
import AccordionDemo from './AccordionDemo';


export default function FaqAcademics() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-extrabold text-yellow-400">FAQs <span className='text-black dark:text-white'>on Academics</span> </span>
      </div>


    {/* CHANGE THE MAIN UI COMPONENT HERE */}

      <div className="w-full max-w-7xl px-10 grid sm:gap-4 grid-cols-1">
      
      <AccordionDemo />
        
      </div>

      </div>
  )
}