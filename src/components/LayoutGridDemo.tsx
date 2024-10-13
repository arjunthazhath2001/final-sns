"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-[600px] w-full py-0 cursor-pointer"> {/* Ensuring the grid takes full viewport height */}
      <LayoutGrid cards={cards} />
    </div>
  );
}


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      SNS SPINE Music Studio
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A creative space for students and staff to play their favorite instruments, collaborate, and relax.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      SNS SPINE Gymnasium
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A dedicated fitness space for students and staff to stay active, improve health, and achieve their fitness goals.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      SNS SPINE Games Center 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A fun spot for students and staff to unwind with billiards, board games, and social activities.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      SNS SPINE Mini Movie Theater 
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A cozy space for students and staff to enjoy films, relax, and experience entertainment together.
      </p>
    </div>
  );
};

const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/thumbnail2.png", // Local image from public/images
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/thumbnail1.png", // Local image from public/images
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/thumbnail3.png", // Local image from public/images
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/thumbnail4.png", // Local image from public/images
    },
  ];
  