import React from 'react';

export default function MethodologySection() {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left side - Label */}
        <div className="md:col-span-1">
          <p className="text-sm md:text-base ml-0 md:ml-5 font-medium text-gray-800">Methodology</p>
        </div>

        {/* Right side - Heading and Paragraph */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <h2 className="text-2xl md:text-4xl font-lufga text-black leading-snug mb-4">
            With a team of certified agile developers and right project management tools we provide the best-in-class agile experience. <br className="hidden md:block" />
            Faster delivery and predictable results.
          </h2>
          
          <p className="text-sm md:text-base ml-0 md:ml-145  text-gray-700 max-w-xl md:mt-10 mt-4">
            We at Pixalive follow agile methodology in our DevOps and development services enabling convenient collaboration, non-conflicting cross-team contribution across multiple layers of an enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
