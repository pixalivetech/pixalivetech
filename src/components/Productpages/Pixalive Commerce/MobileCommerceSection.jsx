import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './../../../assets/Product1/phone-image.png';

const MobileCommerceSection = () => {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-1 py-16 flex flex-col lg:flex-row items-center lg:items-start gap-1">
        
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:mr-1 mr-0 p-0 lg:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="Mobile Commerce UI"
            className="max-w-full h-auto  object-contain"
            loading='lazy'
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2  text-[#000000]">
          <h2 className="text-3xl lg:text-5xl  font-lufga md:leading-[160%] leading-[170%] mt-7 md:mt-0 md:mb-16 mb-10">
          Pixalive Commerce Mobile Apps — Powering eCommerce On-the-Go
          </h2>

          <p className="text-md lg:text-lg text-[#000000] md:mb-10 mb-6 leading-[180%]">
          Pixalive Commerce offers powerful mobile apps for Android and iOS, built to deliver a smooth shopping and selling experience. Whether you're a buyer or seller, enjoy all the features of your web platform on the go.
          </p>

          <div className="mb-6">
            <h3 className="text-base text-[#000000] lg:text-xl font-medium mt-5  mb-5">Buyer’s App (Android & iOS)</h3>
            <p className="text-md lg:text-base text-[#5D5D5D]">
            Engage your customers with an intuitive interface, fast navigation, real-time offers, and secure checkout — optimized for everything from groceries to fashion.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-base text-[#000000] lg:text-xl font-medium mb-5">Seller’s App (Android & iOS)</h3>
            <p className="text-sm lg:text-base text-[#5D5D5D]">
            Manage products, view orders, track inventory, and respond to customers — all from your phone. Designed to empower local sellers and franchise owners.
            </p>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-sm lg:text-lg font-medium text-[#000000] flex items-center gap-2 hover:underline"
          >
            Explore More <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
      <div className="flex justify-center md:mt-17 mt-2 ">
        <h1 className="text-2xl md:text-4xl font-lufga ">
        Supercharge your Success with Best-in-Class Mobile Apps

        </h1>
      
      </div>
            
      
            {/* CTA */}
      <div className="flex justify-center md:mt-15 mt-2 ">
              
        <button className="bg-[#000000] text-[#FFFFFF] cursor-pointer px-6 py-3 mb-4 md:text-lg text-md font-lufga flex items-center gap-2 hover:bg-gray-900 transition">
        Get in Touch <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default MobileCommerceSection;
