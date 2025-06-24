import React from 'react';

const services = [
  {
    id: '01',
    title: 'Fintech',
    description:
      'Empowering the financial sector with cutting-edge, secure, and scalable digital solutions that redefine efficiency, enhance trust, and deliver seamless customer experiences.',
  },
  {
    id: '02',
    title: 'Ecommerce',
    description:
      'Transforming online shopping experiences with innovative platforms that drive sales, improve customer engagement, and streamline operations for businesses to thrive in the digital marketplace.',
  },
  {
    id: '03',
    title: 'Healthcare',
    description:
      'Revolutionizing healthcare with data-driven, patient-centric technologies that enhance care delivery, improve outcomes, and streamline operations for a healthier tomorrow.',
  },
  {
    id: '04',
    title: 'Retail',
    description:
      'Transforming the retail experience with integrated digital solutions that boost customer engagement, optimize operations, and drive sales in a competitive marketplace.',
  },
  {
    id: '05',
    title: 'Manufacturing',
    description:
      'Enhancing manufacturing efficiency with smart, automated solutions that streamline processes, increase productivity, and drive operational excellence.',
  },
  {
    id: '06',
    title: 'Education',
    description:
      'Transforming learning experiences with interactive, digital-first tools that empower educators, engage students, and foster a new era of knowledge sharing.',
  },
  {
    id: '07',
    title: 'Real Estate',
    description:
      'Revolutionizing property management and sales with dynamic digital solutions that provide real-time market insights, enhance customer experiences, and streamline operations.',
  },
  {
    id: '08',
    title: 'Agriculture',
    description:
      'Empowering farmers with precision technology that optimizes operations, enhances yield, and drives sustainable practices for a smarter, more productive future in agriculture.',
  },
  {
    id: '09',
    title: 'Social Media',
    description:
      'Creating innovative platforms that drive user engagement, foster connectivity, and enhance the social experience, enabling seamless communication in a digital world',
  },
  {
    id: '10',
    title: 'Hospitality',
    description:
      'Enhancing guest experiences and operational efficiency with intelligent systems that streamline services, improve satisfaction, and drive success in the hospitality industry.',
  },
];

const Services = () => {
  return (
    
    <div className=" p-4 w-full max-w-[1200px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-lufga font-normal leading-tight">
        Industries  <br />
        Worked with 
        </h2>
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-start md:items-center justify-between mt-10 py-6 ${
            index !== services.length - 1 ? 'border-b border-b-[#E7E7E7]' : ''
          }`}
        >
          <div className="flex flex-col items-start space-y-2 md:w-1/2">
            <span className="text-[#B0B0B0] text-1xl sm:text-[26px] md:text-[30px] font-normal">
              {service.id}
            </span>
            <h3
              className="text-black text-lg font-normal sm:text-2xl md:text-[42px]  leading-[130%] capitalize"
              style={{ fontFamily: 'Lufga' }}
            >
              {service.title}
            </h3>
          </div>
          <p className="text-[#5D5D5D] text-base sm:text-[17px] md:text-[18px] w-full md:w-[325px] leading-[150%] mt-4 md:mt-0">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
