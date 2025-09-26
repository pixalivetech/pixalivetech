import React from 'react';

const services = [
  {
    id: '01',
    title: 'End -To-End Development',
    description:
      'We empower you to launch a fully customized live streaming platform without any coding expertise.',
  },
  {
    id: '02',
    title: 'Lora(Live And Video Commerce)',
    description:
      'LORA(Live One-To-Many Retail Application) is a SaaS platform designed to seamlessly integrate live shopping and video marketing into your website, requiring no technical expertise.',
  },
  {
    id: '03',
    title: 'Software Development KIT',
    description:
      'Live Broadcast SDK—crafted by developers, for developers. With just a few lines of code, seamlessly integrate robust, feature-rich live streaming capabilities into your applications.',
  },
  {
    id: '04',
    title: 'Mobile App Development',
    description:
      'We create high-performance iOS and Android apps with seamless user experiences and scalable architecture.',
  },
  {
    id: '05',
    title: 'Software & Web Development',
    description:
      'We build custom software and web solutions to enhance efficiency and fuel business growth.',
  },
  {
    id: '06',
    title: 'Blockchain & AI Integration',
    description:
      'We leverage blockchain and AI to boost security, automate workflows, and drive innovation.',
  },
  {
    id: '07',
    title: 'UX/UI Design',
    description:
      'We craft user-centric, visually engaging designs that enhance digital experiences and customer retention.',
  },
  {
    id: '08',
    title: 'Cloud Solutions',
    description:
      'We provide secure cloud solutions that help businesses scale, cut costs, and boost performance.',
  },
  {
    id: '09',
    title: 'Consulting & Strategy',
    description:
      'Our consultants align with your goals to optimize digital strategy for long-term success and competitiveness.',
  },
  {
    id: '10',
    title: 'Quality Assurance & Testing',
    description:
      'At Pixalive Technology Services, we ensure your products meet the highest standards of quality with our comprehensive Quality Assurance & Testing services.',
  },
];

const Services = () => {
  return (
    <div className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-2 sm:py-2">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-start md:items-center justify-between py-6 ${
            index !== services.length - 1 ? 'border-b border-b-[#E7E7E7]' : ''
          }`}
        >
          <div className="flex flex-col items-start space-y-2 md:w-1/2">
            <span className="text-[#B0B0B0] text-2xl sm:text-[26px] md:text-[30px] font-normal">
              {service.id}
            </span>
            <h3
              className="text-black text-2xl mt-2.5 sm:text-2xl md:text-[30px] font-normal leading-[130%] capitalize"
              style={{ fontFamily: 'Lufga' }}
            >
              {service.title}
            </h3>
          </div>
          <p className="text-[#5D5D5D] text-base sm:text-[17px] md:text-[18px] w-full md:w-[355px] leading-[150%] mt-4 md:mt-0">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
