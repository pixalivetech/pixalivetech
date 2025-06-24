import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'Million-Dollar Tech Ventures',
    description:
      "We’ve helped scale startups into multi-million dollar businesses, driving innovation, efficiency, and market leadership across diverse industries.",
    value: 10,
    suffix: '+',
  },
  {
    title: 'Client Projects Delivered',
    description:
      "Successfully completed projects, delivering tailored tech solutions that enhance business performance and create long-term value for our clients.",
    value: 50,
    suffix: '+',
  },
  {
    title: 'Deployed Applications',
    description:
      'Launched over high-performance mobile and web applications, designed to be scalable, user-friendly, and optimized for growth.',
    value: 30,
    suffix: '+',
  },
  {
    title: 'Global User Engagement',
    description:
      'With over daily active users globally, our platforms provide seamless digital experiences, fostering deeper connections and engagement.',
    value: 100,
    suffix: 'K+',
  },
  {
    title: 'Startup Consultations Delivered',
    description:
      'Consulted with entrepreneurs worldwide, offering strategic guidance to accelerate their digital growth, from concept to execution.',
    value: 500,
    suffix: '+',
  },
  {
    title: 'Transactions Powered Daily',
    description:
      'Processing daily transactions securely, we ensure reliable, real-time operations, building trust and efficiency in every interaction.',
    value: 10,
    suffix: 'K+',
  },
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });

  return (
    <div ref={ref} className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 text-black">
      <h2 className="text-base sm:text-lg md:text-xl font-medium mb-14">
        7 years in, here is what we have achieved
      </h2>
      <div className="space-y-10">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between border-t border-[#E7E7E7] pt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 sm:max-w-[75%] w-full">
              <h3 className="text-xl sm:text-2xl font-normal text-black sm:w-1/2 w-full">
                {item.title}
              </h3>
              <p className="text-[#5D5D5D] text-sm sm:text-base sm:flex-1 mt-2 sm:mt-0">
                {item.description}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-4xl sm:text-5xl font-bold text-black sm:text-right">
              {inView ? (
                <CountUp
                  key={`countup-${index}-${inView}`}
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              ) : (
                `0${item.suffix}`
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;