import React from 'react';
import heroImg from './../../../assets/Product1/hero.png'; // Replace with your image path
import { ArrowRight } from 'lucide-react';


const HeroSection = () => {
  return (
    <section className="w-full max-w-[1230px] font-lufga mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      {/* Left Side - Text Content */}
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-3xl sm:text-5xl font-lufga md:leading-[170%] tracking-tight text-[#000000]">
          Your Brand. One Platform. <br className="hidden sm:block" />
          Limitless Growth.
        </h1>
        <p className="text-base sm:text-lg text-[#000000] font-lufga max-w-xl mx-auto lg:mx-0">
          Launch, manage, and scale your B2B & B2C business with India’s most connected commerce ecosystem — from online storefronts to franchise retail, logistics to billing — all powered by Pixalive.
        </p>
        <div className="flex justify-center md:mt-10 mt-2 lg:justify-start">
          <button className="bg-[#000000] cursor-pointer text-[#FFFFFF] px-6 py-3  text-md font-medium flex items-center gap-2 hover:bg-gray-900 transition">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={heroImg}
          alt="Hero section illustration"
          className="max-w-full h-auto"
          loading='lazy'
        />
      </div>
     
    </section>
    
  );
};

export default HeroSection;
