import React from "react";
import imgSocial from "../../assets/Features/fea11.jpg";
import imgShopping from "../../assets/Features/fea12.jpg";
import imgEntertainment from "../../assets/Features/fea13.jpg";

const features = {
  social: [
    "Tagging", "SNS Login", "SNS Sharing", "Post Short Videos", "Virtual Gifting",
    "Events", "Loyalty points", "Categories", "Profile", "Scheduling",
    "Content Management System", "Social Analytics"
  ],
  shopping: [
    "Proprietary Live Stream Shopping", "Add to Cart", "Product Items Upload",
    "Featured Product Items", "eCommerce Integration", "Reorder Product Catalogue",
    "Payment Integration", "Checkout In-stream", "Promo Code/Voucher Capabilities",
    "Content Management System (CMS)", "Shop Analytics"
  ],
  entertainment: [
    "Multi-host Streaming", "Live Comments", "Live Polls", "Fan Donations",
    "Reward Programs", "Live Chat", "Watch Parties", "Content Moderation Tools",
    "Subscription Management", "Audience Analytics", "Streaming Scheduler", "Interactive Games"
  ]
};

const FeatureList = ({ items }) => (
  <div className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
    {items.map((item, index) => (
      <p
        key={index}
        className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[1px] before:bg-black"
      >
        {item}
      </p>
    ))}
  </div>
);

const Block = ({ title, description, image, features, reverse = false }) => (
  <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} h-auto md:h-[750px]`}>
    <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-10 py-6 flex flex-col justify-between bg-white">
      <div>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <p className="text-2xl sm:text-3xl leading-relaxed mb-4 whitespace-pre-line">{description}</p>
      </div>
      <FeatureList items={features} />
    </div>
    <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-full">
      <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
    </div>
  </div>
);

const IndustrySection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 text-black bg-white ">
      <div className="max-w-[1280px] mx-auto ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10 sm:mb-16 leading-tight">
          Built for the Demands of <br className="hidden sm:block" /> Your Industry
        </h2>

        <Block
          title="Social"
          description={`Empower your brand with
seamless live streaming
that amplifies social
engagement and builds
real-time connections with
your audience.`}
          image={imgSocial}
          features={features.social}
        />

        <Block
          title="Shopping"
          description={`Transform your
e-commerce experience
with interactive live
shopping, driving real-time
purchases and
engagement directly
through your live streams.`}
          image={imgShopping}
          features={features.shopping}
          reverse
        />

        <Block
          title="Entertainment"
          description={`Elevate your live streams
with real-time shows,
interactive features, and
exclusive content that
keeps viewers hooked.`}
          image={imgEntertainment}
          features={features.entertainment}
        />
      </div>
    </section>
  );
};

export default IndustrySection;
