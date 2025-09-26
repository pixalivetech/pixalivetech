import React from "react";

// Updated icons (replace with your actual icon files)
import whiteLabelIcon from './../../../assets/Product/icon5.4.png';
import endToEndIcon from './../../../assets/Product/icon5.5.png';
import lowLatencyIcon from './../../../assets/Product/icon5.6.png';

const PixaliveAdvantage = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        The Pixalive Advantage
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Card 1: White Label Video Streaming */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={whiteLabelIcon} alt="White Label Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">White Label Video Streaming</h4>
          <p className="text-sm text-gray-700">
            Gain full control over your platform, including code, content, and data analytics.
          </p>
        </div>

        {/* Card 2: End-to-End Live Streaming Solution */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={endToEndIcon} alt="End-to-End Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">End-to-End Live Streaming Solution</h4>
          <p className="text-sm text-gray-700">
            Get end-to-end support for your custom live streaming platform — from design to maintenance.
          </p>
        </div>

        {/* Card 3: Low Latency Live Video Solution */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={lowLatencyIcon} alt="Low Latency Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Low Latency Live Video Solution</h4>
          <p className="text-sm text-gray-700">
            Say goodbye to a lag—experience ultra-low latency live streaming for a flawless and seamless viewing experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixaliveAdvantage;
