import React from 'react';

const WhoweAre = () => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 text-black">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">

                {/* Left - Section Title */}
                <div className="w-full lg:w-[400px]">
                    <h3 className="text-lg sm:text-[16px] font-normal text-black">
                        Who We Are
                    </h3>
                </div>

                {/* Right - Content */}
                <div className="w-full lg:w-[850px]">
                    <h2 className="text-[18px] sm:text-3xl md:text-4xl lg:text-[39px] font-normal leading-snug text-black">
                        Pixalive Technology Services provides smart software, IT consulting, and digital solutions to empower businesses.
                    </h2>

                    <div className="mt-8 flex flex-col lg:flex-row gap-8">
                        {/* Paragraph Block 1 */}
                        <div className="lg:w-1/2 space-y-4">
                            <p className="text-[18px] text-[#5D5D5D] leading-relaxed">
                                Pixalive Technology Services delivers scalable tech solutions, empowering businesses and driving innovation within the Pixalive Ecosystem.
                            </p>
                            <a
                                href="/aboutus"
                                className="relative inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 group"
                                aria-label="Read more about us"
                            >
                                More About Us
                                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>

                                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>

                        </div>

                        {/* Paragraph Block 2 */}
                        <div className="lg:w-1/2">
                            <p className="text-base text-[#5D5D5D] leading-relaxed">
                                We build smart digital solutions that fuel business growth and transform industries, as part of the Pixalive Ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoweAre;
