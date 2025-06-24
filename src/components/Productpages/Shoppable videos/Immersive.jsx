import React from "react";
import videofile from './../../../assets/Product/video1.mp4';

// Custom icon images
import cartIcon from './../../../assets/Product/icon1.png';
import videoIcon from './../../../assets/Product/icon1.1.png';
import insightsIcon from './../../../assets/Product/icon1.2.png';

const VideoCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Immersive & Interactive Video <br /> Commerce
      </h2>

      {/* Main content grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Video player */}
        <div className="w-full overflow-hidden rounded-lg">
          <video
            src={videofile}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>

        {/* Text content with icons */}
        <div className="flex flex-col gap-8">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img src={cartIcon} alt="Cart Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Seamless Video-to-Cart Experience</h4>
              <p className="text-sm text-gray-700 mt-1">
                Let users shop directly from videos without leaving the screen. Turn product views into instant checkouts.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img src={videoIcon} alt="Video Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Immersive & Interactive</h4>
              <p className="text-sm text-gray-700 mt-1">
                Showcase your products in action with engaging, real-life video content that keeps viewers hooked.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img src={insightsIcon} alt="Insights Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Actionable Customer Insights</h4>
              <p className="text-sm text-gray-700 mt-1">
                Understand viewer behavior and preferences with built-in analytics to refine your marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCommerceSection;
