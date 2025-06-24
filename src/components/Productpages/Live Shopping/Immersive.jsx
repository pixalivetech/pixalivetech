import React from "react";
import videofile from './../../../assets/Product/video4.mp4';

// Updated icons (use existing or replace paths if needed)
import cartIcon from './../../../assets/Product/icon4.png';
import videoIcon from './../../../assets/Product/icon4.1.png';
import insightsIcon from './../../../assets/Product/icon4.2.png';

const VideoCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Make Live Shopping Seamless and <br /> Interactive
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
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Text content with icons */}
        <div className="flex flex-col gap-8">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img src={cartIcon} alt="Shoppable Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">In-Stream Shoppable Video</h4>
              <p className="text-sm text-gray-700 mt-1">
                Let your audience explore and shop products directly within the live stream through an integrated product catalog—no need to leave the session.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img src={videoIcon} alt="Voucher Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Live-Exclusive Voucher Codes</h4>
              <p className="text-sm text-gray-700 mt-1">
                Boost conversions by offering special voucher codes that can only be accessed during the live stream.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img src={insightsIcon} alt="Replay Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Extend Engagement Beyond Live</h4>
              <p className="text-sm text-gray-700 mt-1">
                Turn your live shopping sessions into lasting content by saving and republishing them across social platforms as on-demand videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCommerceSection;
