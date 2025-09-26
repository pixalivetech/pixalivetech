import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../../assets/Product/Works.png";

const Hero = () => {
    const navigate = useNavigate();

    const handleBookDemo = () => {
        navigate("/contact");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="font-lufga font-normal text-[26px] leading-[130%] sm:text-[32px] sm:leading-[140%] md:text-[40px] md:leading-[150%] lg:text-[52px] lg:leading-[160%] tracking-tight mb-10 text-left">
                    Pixalive Grow — Your All-in-One <br /> Business Tool
                </h1>

                {/* Right-aligned Paragraph Section */}
                <div className="flex flex-col md:flex-row md:justify-end gap-6 md:gap-12">
                    <div className="max-w-md">
                        <p className="font-normal text-[18px] leading-[170%] tracking-normal">
                            Pixalive Grow is a powerful business suite developed under Pixalive Technology Services Pvt. Ltd. It brings together CRM, sales automation, client management, invoicing, campaigns, and analytics — all in one intuitive platform.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <p className="font-normal text-[18px] leading-[170%] tracking-normal">
                            Whether you're a freelancer, startup founder, or business owner, Pixalive Grow gives you the tools to build, market, and manage your business with ease.
                        </p>
                    </div>
                </div>

                {/* Button - Always Centered */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={handleBookDemo}
                        className="bg-black text-white px-6 py-3 rounded-md text-base font-medium hover:opacity-90 transition duration-200 cursor-pointer"
                    >
                        Book Live Demo →
                    </button>
                </div>

                {/* Image */}
                <div className="mt-10 flex justify-center">
                    <img
                        className="w-full h-auto sm:h-[350px] md:h-[500px] lg:h-[600px] sm:max-w-[1360px] object-cover"
                        src={hero}
                        alt="hero img"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
