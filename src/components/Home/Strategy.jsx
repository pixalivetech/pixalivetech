import React from 'react';

const Strategy = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      <section className="max-w-[1280px] mx-auto py-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left Label */}
          <div className="w-full md:w-1/4">
            <p className="text-sm font-[20px]-medium text-black">
              Our Strategy
            </p>
          </div>

          {/* Right Main Text */}
          <div className="w-full md:flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-snug">
              We drive business transformation<br className="hidden sm:block" />
              through innovative, client-focused, and<br className="hidden sm:block" />
              sustainable solutions
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;
