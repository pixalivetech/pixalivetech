import React from "react";

// Updated icons (keep your imports as-is if they're correct)
import tailoredIcon from './../../../assets/Product/icon3.4.png';
import analyticsIcon from './../../../assets/Product/icon3.5.png';
import supportIcon from './../../../assets/Product/icon3.6.png';

const PixaliveAdvantage = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        The Pixalive Advantage
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Card 1: Tailored Live Streaming Solutions */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={tailoredIcon} alt="Live Streaming Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Tailored Live Streaming Solutions</h4>
          <p className="text-sm text-gray-700">
            Customize live streaming experiences that align with your brand and cater to your unique audience.
          </p>
        </div>

        {/* Card 2: Insightful Data Access */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={analyticsIcon} alt="Data Access Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Insightful Data Access</h4>
          <p className="text-sm text-gray-700">
            Equip your team with powerful data insights, providing easy access to performance metrics directly from your platform.
          </p>
        </div>

        {/* Card 3: Commitment Beyond Expectations */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={supportIcon} alt="Commitment Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Commitment Beyond Expectations</h4>
          <p className="text-sm text-gray-700">
            We prioritize long-lasting client relationships, going the extra mile to provide the resources and network needed to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixaliveAdvantage;
