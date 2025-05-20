import React from "react";
import videofile from './../../../assets/Product/video5.1.mp4';

// Updated icons (replace with your actual assets)
import streamIcon from './../../../assets/Product/icon5.png';
import leaderboardIcon from './../../../assets/Product/icon5.1.png';
import analyticsIcon from './../../../assets/Product/icon5.2.png';
import manageIcon from './../../../assets/Product/icon5.3.png';

const VideoCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Boost Your Training <br /> Effectiveness
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
            className="w-full h-120 object-cover"
          />
        </div>

        {/* Text content with icons */}
        <div className="flex flex-col gap-8 items-baseline">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img src={streamIcon} alt="Interactive Live Streams Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Achieve Highly Interactive Live Streams</h4>
              <p className="text-sm text-gray-700 mt-1">
                Create immersive live streaming experiences that captivate your audience and encourage participation throughout the session.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img src={leaderboardIcon} alt="Trivia Leaderboards Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Engage Viewers with Trivia Leaderboards</h4>
              <p className="text-sm text-gray-700 mt-1">
                Ignite a competitive atmosphere by allowing viewers to rise through the ranks in dynamic trivia leaderboards, adding excitement and engagement to every session.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <img src={analyticsIcon} alt="Streaming Analytics Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Simplified Live Streaming Analytics</h4>
              <p className="text-sm text-gray-700 mt-1">
                Effortlessly track and analyze viewer interactions through live polls and trivia, helping you gather valuable insights on audience participation during each stream.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <img src={manageIcon} alt="Platform Management Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Streamlined Platform Management</h4>
              <p className="text-sm text-gray-700 mt-1">
                Manage all your live streams with ease using a user-friendly content management system, designed for anyone to operate without the need for any programming knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCommerceSection;
