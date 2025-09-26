import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "./../../assets/Features/fea1.png";

const Hero = () => {
  const navigate = useNavigate();
  const handleBookDemo = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="font-lufga font-normal text-[26px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[160%] tracking-tight mb-10">
          An innovative partnership delivering high-performance live streaming, IT infrastructure, and scalable digital solutions tailored for modern businesses.
        </h1>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mt-8 sm:text-[15px] md:text-base">
          <div className="hidden md:block" />
          <p className="font-normal text-[18px] leading-[170%]">Pixalive Technology Services specializes in building scalable software solutions, cloud systems, and enterprise-grade platforms that empower digital transformation.</p>
          <p className="font-normal text-[18px] leading-[170%]">In partnership with Belive Technology, we bring advanced live streaming capabilities, interactive tools, and end-to-end support to maximize user engagement and business growth.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <button onClick={handleBookDemo} className="bg-black text-white px-6 py-3  text-base font-medium hover:opacity-90 transition duration-200 cursor-pointer">
            Book Live Demo →
          </button>
        </div>

        <div className="mt-20 flex justify-center">
          <img className="w-full sm:max-w-[1360px] h-[700px]" src={hero} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;