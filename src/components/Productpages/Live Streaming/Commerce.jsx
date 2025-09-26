import React from "react";
import videofile from './../../../assets/Product/video3.3.mp4';

const PixaliveCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      {/* Heading on top */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Trusted by Leading <br /> Platforms
      </h2>

      {/* Main content: text & video side by side */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="h-full flex flex-col justify-between">
            {/* Paragraph */}
            <p className="text-gray-800 mb-10 text-3xl leading-relaxed">
              Pixalive Technology powers custom live streaming experiences through fully integrated and scalable solutions.
            </p>

            {/* Bullet list */}
            <ul className="text-sm text-gray-700 space-y-3 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                White-Label Live Streaming Platform tailored to your brand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                End-to-End Development including UX/UI design and deployment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Seamless Integration with your app and digital ecosystem
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Interactive Features like virtual gifting to boost engagement
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg leading-none mt-1">—</span>
                Post-Launch Support including app maintenance and operations
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
