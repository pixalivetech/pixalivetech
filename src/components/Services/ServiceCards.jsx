import React from "react";
import service1 from "../../assets/imgs/services/servicevid1.mp4";
import service2 from "../../assets/imgs/services/service2.png";

const ServiceCards = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 mt-2 py-8 max-w-[1280px] mx-auto">
      {/* Services Heading */}
      <h1 className="text-3xl font-normal mb-8">Services</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Card 1 - End to End Development */}
        <div className="lg:w-[65%] w-full border border-[#B0B0B0] p-4 flex flex-col lg:flex-row">
          {/* Video */}
          <div className="w-full mb-4 lg:mb-0 lg:w-[40%]">
            <div className="w-full h-full lg:h-[100%] overflow-hidden">
              <video
                src={service1}
                className="w-full h-100 object-cover loading-lazy"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:pl-6 flex flex-col justify-center lg:w-[60%]">
            <h2 className="text-[24px] font-normal mb-2">
              End to End Development
            </h2>
            <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
              We empower you to launch a fully customized live streaming platform
              without any coding expertise. Utilizing advanced no-code
              technologies, we handle everything from design to deployment,
              ensuring your platform is user-friendly, scalable, and tailored to
              your brand. Whether you’re aiming for live broadcasts, on-demand
              content, or interactive features, we deliver a seamless solution
              that brings your vision to life.
            </p>
          </div>
        </div>

        {/* Card 2 - Mobile App Development */}
        <div className="lg:w-[30%] w-full border border-[#B0B0B0] p-4 flex flex-col">
          {/* Image */}
          <div className="w-full mb-4">
            <img
              src={service2}
              alt="Mobile App"
              className="w-full h-auto object-contain loading-lazy"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-normal mb-1">
              Mobile App Development
            </h2>
            <p className="text-[16px] text-[#5D5D5D] leading-relaxed">
              We create high-performance iOS and Android apps with seamless user
              experiences and scalable architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
