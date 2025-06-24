import React from "react";
import { useNavigate } from "react-router-dom";
import videoframe from './../../../assets/Product/video3.mp4';

const ShoppableVideos = () => {
  const navigate = useNavigate();

  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="w-full max-w-7xl">
        {/* Row 1: Heading Only */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl">Social Live</h2>
          <h2 className="text-3xl md:text-4xl mt-2">Streaming</h2>
        </div>

        {/* Row 2: 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Column 1: Empty */}
          <div></div>

          {/* Column 2: Paragraph + Button */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-base text-gray-800 mb-4">
              Make live streams more engaging with real-time features like chat,
              polls, and Q&As. Turn viewers into active participants and build a
              stronger, more loyal community.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-black text-white px-5 mt-5 py-2 w-fit text-sm hover:bg-gray-800 transition"
            >
              Book Live Demo →
            </button>
          </div>

          {/* Column 3: Second Paragraph */}
          <div>
            <p className="text-base text-gray-800">
              Elevate live streaming with interactive tools from platforms like
              LiveReacting and Livery. Boost audience engagement and retention
              through dynamic, community-driven experiences.
            </p>
          </div>
        </div>

        {/* Autoplay Video Section */}
        <div className="w-full rounded overflow-hidden">
          <video
            src={videoframe}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-160 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ShoppableVideos;
