import React from "react";
import handshakeImg from "./../../../assets/Product/whychooseus.png"; // update path as needed

const WhyChooseUs = () => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Why Choose Us?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div>
                    <img
                        src={handshakeImg}
                        alt="Why Choose Us"
                        className="w-full h-100 object-fill"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-regular mb-20">
                        "Empowering Businesses <br/> Across the Globe"
                    </h3>

                    <ul className="space-y-4 text-[15px] sm:text-base text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold text-lg">—</span>
                            <span>AI-Powered Automation: Reduce manual tasks and boost productivity.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold text-lg">—</span>
                            <span>Scalability: From startups to enterprises, grow effortlessly with us.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-black font-bold text-lg">—</span>
                            <span>24/7 Support: Dedicated customer support to help you succeed.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
