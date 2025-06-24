import React from "react";
import videofile from './../../../assets/Product/video1.2.mp4';

const PixaliveCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      {/* Heading on top */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
         As seen on Pixalive  <br /> Commerce
      </h2>
      
      {/* Main content: text & video side by side */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left content (same height as video) */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="h-full flex flex-col justify-between">
            {/* Paragraph */}
            <p className="text-gray-800 mb-10 text-3xl leading-relaxed">
              Pixalive Technology powers the future of live commerce with seamless
              shoppable video integrations for modern e-commerce platforms.
            </p>

            {/* Bullet list */}
            <ul className="text-sm text-gray-700 space-y-3 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Full integration of live selling and interactive shoppable video features across your e-commerce ecosystem
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Post-launch support and continuous performance optimization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Smart data configuration for live streams to boost customer engagement and sales conversion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Unified content dashboard to manage video commerce, live streams, and interactive product showcases
              </li>
            </ul>
          </div>
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
