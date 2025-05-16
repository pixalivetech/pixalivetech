import { useEffect, useRef } from "react";
import icon1 from "./../../assets/imgs/Hireus/icon1.png";
import icon2 from "./../../assets/imgs/Hireus/icon2.png";
import icon3 from "./../../assets/imgs/Hireus/icon3.png";
import icon4 from "./../../assets/imgs/Hireus/icon4.png";
import icon5 from "./../../assets/imgs/Hireus/icon5.png";
import icon6 from "./../../assets/imgs/Hireus/icon6.png";

const cards = [
  {
    icon: icon1,
    title: "UI/UX & Prototyping",
    description:
      "We craft seamless user experiences through intuitive UI design, detailed wireframes, and interactive prototypes. Using industry-best tools, we ensure your product not only looks great but feels effortless to use—across all platforms and devices.",
  },
  {
    icon: icon2,
    title: "Cloud Adoption Strategy",
    description:
      "We guide your cloud journey with a strategic approach built on modern architecture, security, and high availability. By choosing the right platform and services, we ensure your SaaS application is scalable, resilient, and ready for growth—powered by Pixalive Technology Services.",
  },
  {
    icon: icon3,
    title: "Application Development",
    description:
      "We build, support, and enhance powerful applications tailored to your business—whether cloud-first, monolithic, or microservices-based. Our cross-platform, responsive solutions ensure seamless performance across web, mobile, and multi-channel environments.",
  },
  {
    icon: icon4,
    title: "DevOps & CI/CD",
    description:
      "Accelerate your product journey with our proven DevOps strategies and CI/CD pipelines for faster, reliable releases and continuous innovation.",
  },
  {
    icon: icon5,
    title: "QA & Release Management",
    description:
      "Deliver flawless user experiences with our intelligent testing and release automation framework that ensures quality and speed.",
  },
  {
    icon: icon6,
    title: "Resource Optimization",
    description:
      "Maximize ROI by optimizing resource use, eliminating waste, and managing infrastructure costs effectively using smart analytics.",
  },
];

const CardSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const nextScroll = scrollLeft + clientWidth;
        containerRef.current.scrollTo({
          left: nextScroll >= scrollWidth ? 8 : nextScroll,
          behavior: "smooth",
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="w-full py-5 px-4 font-lufga md:mt-20">
  <div className="max-w-screen-xl mx-auto relative px-4 lg:px-12 ">
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="snap-start min-w-[60%] sm:min-w-[28%] lg:min-w-[26%] max-w-xs flex-shrink-0 border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
        >
          <img src={card.icon} alt="icon" loading="lazy" className="w-7 h-7 mb-2 " />
          <h3 className="text-base font-semibold leading-[180%] text-[#000000] mb-2">
            {card.title}
          </h3>
          <p className="text-[#5D5D5D] text-sm leading-[170%]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default CardSlider;
