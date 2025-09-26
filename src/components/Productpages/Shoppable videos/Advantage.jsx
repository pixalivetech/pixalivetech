import React from "react";

// Icon imports (replace these paths with the actual ones)
import interactiveIcon from './../../../assets/Product/icon1.3.png';
import brandIcon from './../../../assets/Product/icon1.4.png';
import platformIcon from './../../../assets/Product/icon1.5.png';

const PixaliveAdvantage = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        The Pixalive Advantage
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Card 1 */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={interactiveIcon} alt="Interactive Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">Interactive & Shoppable Videos</h4>
          <p className="text-sm text-gray-700">
            Revolutionize shopping—let users browse and buy directly from your videos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={brandIcon} alt="Brand Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">Bring Your Brand to Life</h4>
          <p className="text-sm text-gray-700">
            Create deeper connections with interactive content that mirrors the in-store experience online.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={platformIcon} alt="Platform Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">Unified Content Platform</h4>
          <p className="text-sm text-gray-700">
            Easily manage videos, live streams, and shopping features—all in one smart dashboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixaliveAdvantage;
