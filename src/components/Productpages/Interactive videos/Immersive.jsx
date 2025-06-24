import React from "react";
import videofile from './../../../assets/Product/video4.1.mp4';

// Reuse icon placeholders — replace with suitable ones if available
import empowerIcon from './../../../assets/Product/icon2.png';
import transitionIcon from './../../../assets/Product/icon2.1.png';
import qualityIcon from './../../../assets/Product/icon2.2.png';

const VideoCommerceSection = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Unlock the Power of Interactive <br /> Video
      </h2>

      {/* Main content grid */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Video player */}
        <div className="w-full overflow-hidden rounded-lg bg-black aspect-video flex items-center justify-center text-white text-lg">
          {/* Placeholder if video doesn't load */}
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
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <img src={empowerIcon} alt="Viewer Empowerment Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Viewer Empowerment</h4>
              <p className="text-sm text-gray-700 mt-1">
                Give your audience the ability to steer the story, allowing them to decide the direction of their video experience.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <img src={transitionIcon} alt="Flawless Transitions Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Flawless Transitions</h4>
              <p className="text-sm text-gray-700 mt-1">
                Experience seamless, instant transitions between scenes for an immersive and uninterrupted viewing journey.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <img src={qualityIcon} alt="Crystal Clear Video Quality Icon" className="w-10 h-10 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Crystal Clear Video Quality</h4>
              <p className="text-sm text-gray-700 mt-1">
                Enjoy high-quality visuals with scalable resolution up to 1080p for an exceptional, detailed viewing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCommerceSection;
