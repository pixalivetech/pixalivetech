import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import demo1 from './../../../assets/Product1/demo1.png'; // replace with actual image paths
import demo2 from './../../../assets/Product1/demo2.png';
import demo3 from './../../../assets/Product1/demo3.png';
import demo4 from './../../../assets/Product1/demo4.png';
import demo11 from './../../../assets/Product1/demo11.png';
import demo22 from './../../../assets/Product1/demo22.png';
import demo33 from './../../../assets/Product1/demo33.png';
import demo44 from './../../../assets/Product1/demo44.png';
const demoData = {
  pixalive: [
    { title: 'Front-End Demo', image: demo11 },
    { title: 'Admin Demo', image: demo22 },
    { title: 'Buyer Demo', image: demo33 },
    { title: 'Seller Demo', image: demo44 },
  ],
  b2b: [
    { title: 'Front-End Demo', image: demo1 },
    { title: 'Admin Demo', image: demo2 },
    { title: 'Buyer Demo', image: demo3 },
    { title: 'Seller Demo', image: demo4 },
  ],
};

const PixaliveDemoSection = () => {
  const [activeTab, setActiveTab] = useState('b2b');

  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Toggle buttons */}
        <div className="bg-[#D1D1D1] md:text-lg text-sm font-semibold py-2   md:w-105 w-85 ml-2 md:ml-100 flex justify-center gap-4">
          <button
            className={`px-6 py-2 cursor-pointer  ${
              activeTab === 'pixalive'
                ? 'bg-[#000000] text-[#FFFFFF] cursor-pointer'
                : 'bg-[#D1D1D1] text-[#3E3E3E] cursor-pointer'
            }`}
            onClick={() => setActiveTab('pixalive')}
          >
            Pixalive Demo
          </button>
          <button
            className={`px-6 py-2 cursor-pointer ${
              activeTab === 'b2b'
                ? 'bg-[#000000] text-[#FFFFFF] cursor-pointer'
                : 'bg-[#D1D1D1] text-[#3E3E3E] cursor-pointer'
            }`}
            onClick={() => setActiveTab('b2b')}
          >
            Pixalive B2B Demo
          </button>
        </div>

        {/* Demo cards */}
        <AnimatePresence mode="wait">
        <div
            key={activeTab}
            className="grid grid-cols-1 md:mt-20 mt-7 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {demoData[activeTab].map((demo, idx) => (
            <motion.div
                key={demo.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative w-full aspect-square overflow-hidden"
            >
                <img
                src={demo.image}
                alt={demo.title}
                className="w-full h-full object-cover"
                loading='lazy'
                />
                <div className="absolute bottom-0 right-18 w-full bg-[#000000] bg-opacity-80 text-[#FFFFFF] px-4 py-2 text-lg">
                {demo.title}
                </div>
            </motion.div>
            ))}
        </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PixaliveDemoSection;