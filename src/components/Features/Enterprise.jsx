import React from "react";
import icon1 from "./../../assets/Features/fea2.png";
import icon2 from "./../../assets/Features/fea3.png";
import icon3 from "./../../assets/Features/fea4.png";
import icon4 from "./../../assets/Features/fea5.png";
import icon5 from "./../../assets/Features/fea6.png";
import icon6 from "./../../assets/Features/fea7.png";
import icon7 from "./../../assets/Features/fea8.png";
import icon8 from "./../../assets/Features/fea9.png";
import icon9 from "./../../assets/Features/fea10.png";

const features = [
  {
    icon: icon1,
    title: "Low Latency Streaming",
    description: "Real-time video delivery with ultra-fast speed and high reliability.",
  },
  {
    icon: icon2,
    title: "Adaptive Video",
    description: "Seamless viewing with auto-adjusted quality for smooth, buffer-free playback.",
  },
  {
    icon: icon3,
    title: "Video-Specific Links",
    description: "Share unique links to instantly direct viewers to your live stream.",
  },
  {
    icon: icon4,
    title: "Beauty Filter",
    description: "Enhance on-screen appearance with real-time filters for a flawless live streaming presence.",
  },
  {
    icon: icon5,
    title: "Face Stickers",
    description: "Add fun and engagement with dynamic, customizable face stickers during live streams.",
  },
  {
    icon: icon6,
    title: "Real-Time Live Chat",
    description: "Boost audience engagement with instant, interactive live chat built right into your streaming experience.",
  },
  {
    icon: icon7,
    title: "Like and Share",
    description: "Drive more interaction and visibility with easy-to-use like and share options, turning every viewer into a promoter.",
  },
  {
    icon: icon8,
    title: "Backend CMS",
    description: "Easily create, manage, and schedule content with our intuitive CMS for seamless live streaming.",
  },
  {
    icon: icon9,
    title: "Basic Analytics",
    description: "Effortlessly manage and schedule content with our streamlined CMS for live streaming.",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" py-20 px-4  max-w-[1280px] mx-auto sm:px-6 lg:px-10 text-black">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-normal leading-[120%] tracking-tight mb-14">
          Core Features for Enterprise-
          <br className="hidden sm:block" />
          Level Live Streaming
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200  p-8  hover:shadow-md transition-shadow"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[48px] h-[48px] mb-5"
              />
              <h3 className="text-[18px] font-normal mb-3">{feature.title}</h3>
              <p className="text-[15px] leading-[1.7] text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
