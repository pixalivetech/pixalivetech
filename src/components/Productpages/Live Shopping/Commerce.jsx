import React from "react";
import videofile from './../../../assets/Product/video4.2.mp4';

const PixaliveCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Powering Seamless Live Commerce Experiences
      </h2>

      {/* Main content: text & video side by side */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="h-full flex flex-col justify-between">
            {/* Paragraph */}
            <p className="text-gray-800 mb-10 text-2xl md:text-3xl leading-relaxed">
              Pixalive Technology delivers complete live streaming and shopping integration for e-commerce platforms, enabling real-time customer engagement and conversions.
            </p>

            {/* Bullet list */}
            <ul className="text-sm text-gray-700 space-y-3 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Full integration of live shopping features within your mobile app
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Custom UI/UX Solutions including tailored home screens for live events
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Ongoing Maintenance & Support to ensure smooth performance post-launch
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Advanced Data Configuration to boost marketing insights and campaign effectiveness
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Scalable Content Management System built to support multi-country operations
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
