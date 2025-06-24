import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import rajasekar from './../../assets/imgs/home/team1.png';
import satish from './../../assets/imgs/home/team2.png';
import murugan from './../../assets/imgs/home/team3.png';


const teamMembers = [
  {
    name: 'Rajaseker Sundaresan',
    role: 'CEO & Founder',
    image: rajasekar,
  },
  {
    name: 'Sathishkumar Annadurai',
    role: 'Chief Product Officer',
    image: satish,
  },
  {
    name: 'Murugan',
    role: 'Lead product Engineer',
    image: murugan,
  },
];

export default function TeamSection() {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex-1">
            <div className="text-sm pl-2 font-medium text-black mb-2">
              OUR TEAM
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <h2 className="text-[28px] md:text-3xl font-normal mb-4 max-w-[790px]">
              Pixalive Technology Services is a dynamic team of innovators, developers, and designers united by a vision to build impactful digital solutions
            </h2>
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[300px] h-[364px] object-cover mb-4 mx-auto"
                    loading='lazy'
                  />
                  <h3 className="font-normal text-[20px]">{member.name}</h3>
                  <p className="text-normal text-[#5D5D5D]">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Explore Link for Mobile */}
          <div className="mt-6 text-center">
            <a
              href="/aboutus"
              className="inline-flex items-center justify-center text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 group"
            >
              Explore our Teams
              <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Desktop static horizontal scroll */}
        <div className="hidden lg:block mt-10">
          <div className="flex gap-4 min-w-[1200px]">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-start p-4 min-w-[280px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[300px] h-[364px] object-cover mb-4"
                  loading='lazy'
                />
                <h3 className="font-normal text-[20px] text-left">{member.name}</h3>
                <p className="text-normal text-[#5D5D5D] text-left">{member.role}</p>
              </div>
            ))}

            {/* Desktop only: Explore More */}
            <div className="flex items-center justify-center p-4 min-w-[240px]">
              <a
                href="/aboutus"
                className="flex items-center justify-center text-sm font-medium text-gray-800 hover:text-black transition-colors duration-200 group h-full w-full text-center"
              >
                Explore our Teams
                <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}