import React from "react";
import service7 from "../../assets/imgs/services/service7.png";
import service8 from "../../assets/imgs/services/service8.png";
import service9 from "../../assets/imgs/services/service9.png";
import service10 from "../../assets/imgs/services/service10.png";

const cardData = [
  {
    title: "UX/UI Design",
    description:
      "We craft user-centric, visually engaging designs that enhance digital experiences and customer retention.",
    image: service7,
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide secure cloud solutions that help businesses scale, cut costs, and boost performance.",
    image: service8,
  },
  {
    title: "Consulting & Strategy",
    description:
      "Our consultants align with your goals to optimize digital strategy for long-term success and competitiveness.",
    image: service9,
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "At Pixalive Technology Services, we ensure your products meet the highest standards of quality with our comprehensive Quality Assurance & Testing services.",
    image: service10,
  },
];

const Servicelastcards = () => {
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-1 md:px-1 py-8 max-w-[1200px] mx-auto">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-[#B0B0B0] p-4 flex flex-col h-full min-h-[390px] justify-between"
        >
          <div className="w-full h-[200px] mb-4 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover loading-lazy"
            />
          </div>

          <div className="text-center lg:text-left flex flex-col justify-between flex-1">
            <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal mb-2">
              {card.title}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#5D5D5D] leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Servicelastcards;
