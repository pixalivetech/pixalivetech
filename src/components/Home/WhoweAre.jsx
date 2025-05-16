import React from 'react';

const WhoweAre = () => {
    return (
        <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left - Label */}
                <div className="text-sm font-[20px]-medium text-black w-full lg:w-[400px]">
                    Who we are
                </div>

                <div className="w-full lg:w-[850px]">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[39px] font-normal leading-[140%]">
                        Pixalive Technology Services provides smart software, IT consulting, and digital solutions to empower businesses.
                    </h2>

                    <div className="mt-8     flex flex-col lg:flex-row gap-6">
                        <p className="text-[16px] text-[#5D5D5D] leading-[180%] lg:w-1/2">
                            Pixalive Technology Services delivers scalable tech solutions, empowering businesses and driving innovation within the Pixalive Ecosystem.
                        </p>
                        <div className="text-[16px] text-[#5D5D5D] leading-[180%] lg:w-1/2 flex flex-col items-start">
                            <p>
                                We build smart digital solutions that fuel business growth and transform industries, as part of the Pixalive Ecosystem.
                            </p>
                            <a
                                href="/aboutus"
                                className="inline-flex self-end mt-15 items-center gap-2 text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 group"
                            >
                                More About Us
                                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoweAre;
