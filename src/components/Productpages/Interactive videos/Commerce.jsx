import React from "react";
import videofile from './../../../assets/Product/video2.2.mp4';

const PixaliveCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      {/* Heading on top */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Create an Immersive Video Journey <br /> for Your Audience
      </h2>
      
      {/* Main content: text & video side by side */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left content (same height as video) */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="h-full flex flex-col justify-between">
            {/* Paragraph */}
            <p className="text-gray-800  text-3xl leading-relaxed">
              Take your content to the next level with interactive branching videos.
              Start your journey today and engage your viewers in a whole new way.
            </p>

            {/* Bullet list */}
            <ul className="text-sm text-gray-700 space-y-3 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Seamless Integration with your existing app or website
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Quick Deployment with lightweight code, ready to launch in hours
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Customizable Hotspots to enhance your interactive video experience
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Comprehensive Content Management System to personalize
                and control your immersive videos
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
