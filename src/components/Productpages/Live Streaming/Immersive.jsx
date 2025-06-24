import React from "react";
import videofile from './../../../assets/Product/video1.1.mp4';

// Custom icon images
import cartIcon from './../../../assets/Product/icon3.png';
import videoIcon from './../../../assets/Product/icon3.1.png';
import insightsIcon from './../../../assets/Product/icon3.2.png';
import fourthIcon from './../../../assets/Product/icon3.3.png'; // <-- Add this icon

const VideoCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Significantly Enhance Audience <br /> Engagement
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
            className="w-full h-full"
          />
        </div>

        {/* Text content with icons */}
        <div className="flex flex-col gap-8">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img src={cartIcon} alt="Real-Time Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Real-Time Interaction</h4>
              <p className="text-sm text-gray-700 mt-1">
                Ultra-low latency for a smooth, seamless experience.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img src={videoIcon} alt="High Quality Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">High-Quality Video</h4>
              <p className="text-sm text-gray-700 mt-1">
                Scalable resolution up to 1080p for crystal-clear visuals.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img src={insightsIcon} alt="Gamification Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Engage with Gamification</h4>
              <p className="text-sm text-gray-700 mt-1">
                Adding virtual gifting and Player Knock-out to drive viewer interaction.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <img src={fourthIcon} alt="Monetize Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Monetize Your Content</h4>
              <p className="text-sm text-gray-700 mt-1">
                Increase revenue with subscriptions, pay-per-view, and VIP features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCommerceSection;
