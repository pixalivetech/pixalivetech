import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceHeading = () => {
    return (
        <div className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
                        Service & <br />
                        Works <span className="text-base font-normal">(5 - 10)</span>
                    </h2>
                </div>
            </div>

            {/* Flex row for content */}
            <div className="flex flex-col lg:flex-row gap-6 mt-8">
                {/* Left content */}
                <div className="w-full lg:w-1/2">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700">

                    </p>
                </div>

                {/* Right content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <p className="text-base sm:text-md md:text-xl text-[#5D5D5D]">
                        We’ve built long-lasting partnerships with the most ambitious brands across the globe.
                    </p>
                   <a
    href="/service"
    className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 group"
>
    <span className="relative inline-block">
        <span className="group-hover:text-black transition-colors duration-200">Explore</span>
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </span>
    <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
</a>
        


                </div>
            </div>
        </div>
    );
};

export default ServiceHeading;
