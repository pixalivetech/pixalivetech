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
                <h1 className="font-lufga font-normal text-[26px] leading-[130%] sm:text-[32px] sm:leading-[140%] md:text-[40px] md:leading-[150%] lg:text-[52px] lg:leading-[160%] tracking-tight mb-10">
                    An innovative partnership delivering high-performance live streaming, IT infrastructure,
                    and scalable digital solutions tailored for modern businesses.
                </h1>

                {/* Paragraphs */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mt-8 sm:text-[15px] md:text-base">
                    <div className="hidden md:block" /> {/* Empty column for spacing */}

                    <p className="font-normal text-[18px] leading-[170%] tracking-normal">
                        Pixalive Technology Services specializes in building scalable software solutions,
                        cloud systems, and enterprise-grade platforms that empower digital transformation.
                    </p>

                    <p className="font-normal text-[18px] leading-[170%] tracking-normal">
                        {/* This paragraph is intentionally left empty */}
                    </p>
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

                {/* Image - Medium Width */}
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
