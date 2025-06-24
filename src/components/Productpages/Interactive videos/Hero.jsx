import React from "react";
import { useNavigate } from "react-router-dom";
import videoframe from "./../../../assets/Product/video1.mp4";

const InteractiveVideoBranching = () => {
  const navigate = useNavigate();

  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl">Interactive Video</h2>
          <h2 className="text-3xl md:text-4xl mt-2">Branching</h2>
        </div>

        {/* 3-column layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Column 1: Empty */}
          <div></div>

          {/* Column 2: Paragraph + Button */}
          <div className="flex flex-col justify-between h-full">
            <p className="text-base text-gray-800 mb-4">
              Boost engagement with interactive video branching—let viewers make
              choices that shape the story,  in turning passive watching into an
              immersive, personalized experience.
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
              Transform storytelling with interactive branching videos. Ideal for
              training, marketing, and education, this format increases viewer
              participation and content retention.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full rounded overflow-hidden">
          <video
            src={videoframe}
            autoPlay
            muted
            loop
            playsInline
            className="w-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveVideoBranching;
