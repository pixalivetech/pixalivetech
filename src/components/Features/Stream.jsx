import React from "react";
import img1 from "../../assets/Features/fea14.png";
import img2 from "../../assets/Features/fea15.png";
import img3 from "../../assets/Features/fea16.png";

const solutions = [
  {
    title: "User Interface",
    image: img1,
    items: ["Picture-in-Picture (PIP)", "Featured Content", "Wall Feed", "In-App Purchase", "In-App Banner", "Pin Comment", "In-stream Floating Text"],
  },
  {
    title: "Audience Engagement",
    image: img2,
    items: ["Guest Viewing", "Registration & Login", "2D/3D Animated Gifts", "Multi-Guest Live Stream", "In-Stream Video Call", "Private Chat", "In-App Tutorial", "Referral Code"],
  },
  {
    title: "Add-On Technologies",
    image: img3,
    items: ["Video On Demand (VOD)", "External Broadcasting", "Simulcast", "Software Support", "Anti-Spamming System", "Data Analytics", "Profanity Filter", "Push Notifications"],
  },
];

const AdvancedSolutions = () => {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl sm:text-[44px] font-normal mb-20 leading-tight">
          Advanced solutions for immersive <br className="hidden sm:block" /> live streams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((section, index) => (
            <div key={index} className="border border-[#dcdcdc] rounded-md px-8 py-10 flex flex-col items-center">
              <img src={section.image} alt={section.title} loading="lazy" className="w-[60px] h-[60px] object-contain mb-6" />
              <h3 className="text-lg font-normal text-center mb-10">{section.title}</h3>
              <ul className="w-full space-y-5 text-center text-[15px] text-black">
                {section.items.map((item, idx) => (
                  <li key={idx} className="border-b border-gray-200 pb-3 last:border-0">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-24">
          <p className="text-[42px] font-normal mb-6">
            Need other interactive live <br /> stream features for your <br /> platform?
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-800 cursor-pointer">
            Book Live Demo →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSolutions;