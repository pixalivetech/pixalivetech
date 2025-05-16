import React from "react";
import Hero from "./../../assets/imgs/Hireus/heroimage1.png";

const HeroSection = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-4 md:px-8 py-12">
      {/* Main Heading */}
      <h1 className="text-[26px] md:text-[32px] lg:text-[48px] leading-[160%] font-lufga font-medium mb-10 mt-0 md:mt-5 text-[#000000]">
        Empowering Innovation Through IT Services and <br className="hidden md:block" />
        Live Streaming—Let’s Build the Future of Digital <br className="hidden md:block" />
        Together
      </h1>

      {/* Two Column Text */}
      <div className="flex flex-col md:flex-row justify-end gap-10 text-left mb-[72px]">
        <p className="text-[18px] leading-[160%] text-[#000000] max-w-[400px] w-full">
          At Pixalive Technology Services, we craft impactful SaaS and live
          streaming solutions that scale and lead. With user-focused design and
          expert execution, we turn bold ideas into market-ready products
        </p>
        <p className="text-[18px] leading-[160%] text-[#000000] max-w-[400px] w-full">
          Discover the future of digital innovation with smart insights,
          immersive experiences, and scalable tech. We help elevate your brand
          and boost ROI through transformative solutions.
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src={Hero}
          alt="Pixalive Team Collaboration"
          className="w-full h-60 md:h-[650px] object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
