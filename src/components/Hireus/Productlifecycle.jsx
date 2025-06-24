import React from 'react';
import LifeCycle from './../../assets/imgs/Hireus/lifecycle.png';

export default function HowWeWork() {
  return (
    <div className=" p-4 w-full max-w-[1200px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between md:mt-23 mt-0 items-start md:items-center">
        <h2 className="text-md font-normal md:mb-23 mb-0  text-[#000000]">How We Work</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-0 font-lufga  max-w-2xl leading-[150%] md:leading-[140%] text-left">
          Here’s a refined and complete version of your statement that improves flow, clarity, and impact:
        </h1>
      </div>
      

      {/* Center Section */}
      <div className="relative mt-10 md:mt-30 w-full max-w-sm md:max-w-5xl h-[500px] mx-auto">
        {/* Center Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <img
            src={LifeCycle}
            alt="Product Life Cycle"
            className="w-41 h-52 md:w-120 md:h-120"
            loading='lazy'
          />
        </div>

        {/* Circular Labels */}
        {/* Left side */}
        <div className="absolute top-[10%] left-[5%] text-left w-40">
          <p className="text-md md:text-lg">UI/UX Prototyping<br />Wireframes</p>
        </div>
        <div className="absolute top-[35%] left-[0%] text-left w-40">
          <p className="text-md md:text-lg">Cost<br />Optimisation</p>
        </div>
        <div className="absolute bottom-[10%] left-[5%] text-left w-40">
          <p className="text-md md:text-lg">Testing and release<br />automation</p>
        </div>

        {/* Right side */}
        <div className="absolute top-[10%] right-[5%] text-right w-40">
          <p className="text-md md:text-lg">Cloud adoption<br />strategy</p>
        </div>
        <div className="absolute top-[35%] right-[0%] text-right w-40">
          <p className="text-md md:text-lg">Applications<br />Development</p>
        </div>
        <div className="absolute bottom-[10%] right-[5%] text-right w-40">
          <p className="text-md md:text-lg">Continuous integration-<br />Delivery/DevOps</p>
        </div>
      </div>
    </div>
  );
}
