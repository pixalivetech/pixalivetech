import React from "react";
import service1 from "../../assets/imgs/services/service5.mp4";
import service2 from "../../assets/imgs/services/service6.png";

const ServiceCardsThree = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-8 mt-2 py-8 max-w-[1280px] mx-auto">
      {/* Card 1 - Live Broadcast SDK */}
      <div className="w-full lg:w-[65%] border border-[#B0B0B0] p-4 flex flex-col lg:flex-row min-h-[360px]">
        {/* Video */}
        <div className="w-full lg:w-[40%] mb-4 lg:mb-0 h-full">
          <div className="w-full h-full  overflow-hidden">
            <video
              src={service1}
              className="w-full h-full object-cover loading-lazy"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[60%] lg:pl-6 flex flex-col justify-center">
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal mb-2">
            Live Broadcast SDK
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5D5D5D] leading-relaxed">
            Crafted by developers, for developers. With just a few lines of code, seamlessly integrate robust,
            feature-rich live streaming capabilities into your applications. Our SDK offers ultra-low latency,
            cross-platform support, and interactive features like real-time chat, screen sharing, and adaptive bitrate
            streaming. Whether you're building for web, mobile, or desktop, our solution ensures a scalable,
            high-performance live experience tailored to your needs.
          </p>
        </div>
      </div>

      {/* Card 2 - Blockchain & AI */}
      <div className="w-full lg:w-[30%] border border-[#B0B0B0] p-4 flex flex-col">
        {/* Image */}
        <div className="w-full mb-4">
          <img
            src={service2}
            alt="Blockchain & AI"
            className="w-full h-auto  object-contain loading-lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal mb-1">
            Blockchain & AI Integrations
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5D5D5D] leading-relaxed">
            We leverage blockchain and AI to boost security, automate workflows, and drive innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsThree;
