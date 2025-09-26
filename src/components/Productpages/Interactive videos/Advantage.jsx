import React from "react";

// Update these imports to match the actual icons
import tailoredIcon from './../../../assets/Product/icon2.3.png';
import analyticsIcon from './../../../assets/Product/icon2.4.png';
import supportIcon from './../../../assets/Product/icon2.5.png';

const PixaliveAdvantage = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        The Pixalive Advantage
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Card 1: Tailored Content */}
       <div className="border border-gray-300 p-6 hover:shadow-lg transition">

          <img src={tailoredIcon} alt="Tailored Content Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Tailored Content</h4>
          <p className="text-sm text-gray-700">
            Craft videos that resonate with your audience by customizing and branding each experience for maximum impact.
          </p>
        </div>

        {/* Card 2: Actionable Analytics */}
  <div className="border border-gray-300 p-6 hover:shadow-lg transition">

          <img src={analyticsIcon} alt="Analytics Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Actionable Analytics</h4>
          <p className="text-sm text-gray-700">
            Gain a deeper understanding of your viewers with insightful data that tracks user interactions and preferences.
          </p>
        </div>

        {/* Card 3: Dedicated Support */}
       <div className="border border-gray-300 p-6 hover:shadow-lg transition">

          <img src={supportIcon} alt="Support Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mb-2">Dedicated Support</h4>
          <p className="text-sm text-gray-700">
            Leverage our expertise to achieve your objectives. Our team is committed to helping you succeed every step of the way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixaliveAdvantage;
