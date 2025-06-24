import React from "react";
import videofile from './../../../assets/Product/video5.2.mp4';

const PixaliveCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Scalable Live Streaming for <br /> E-Commerce
      </h2>

      {/* Content layout */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <p className="text-gray-800 mb-10 text-xl leading-relaxed">
            Pixalive Technology delivers powerful live streaming and interactive trivia capabilities
            to help large-scale marketplaces connect millions of sellers with their customers.
          </p>

          <ul className="text-sm text-gray-700 space-y-3 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-lg leading-none mt-1">—</span>
              Tailored live streaming solutions to enable millions of sellers to showcase their products to a massive customer base
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg leading-none mt-1">—</span>
              Seamless integration within the existing ecosystem, enhanced with real-time trivia and engagement tools
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg leading-none mt-1">—</span>
              Fully white-labeled platform with custom UI/UX designed to match your brand identity
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg leading-none mt-1">—</span>
              Ongoing post-launch support and maintenance to ensure a smooth and evolving experience
            </li>
          </ul>
        </div>

        {/* Right: Video */}
        <div className="flex-1 w-full overflow-hidden rounded-lg">
          <video
            src={videofile}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-120 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PixaliveCommerceSection;
