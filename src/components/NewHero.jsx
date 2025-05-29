import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import homeImage from '../assets/imgs/home/homebg.png';
import feabg from '../assets/Features/feabg.png';
import hirebg from '../assets/imgs/Hireus/hirebg.png';
import aboutbg from '../assets/Aboutus/aboutbg.jpg';
import Header from './Header/Header';

const heroContent = {
  '/': {
    image: homeImage,
    title: 'Pixalive is pioneering live streaming and digital innovation for the future of business.',
    subtitle:
      'We create scalable software, cloud, and consulting solutions that power global brands and the Pixalive Ecosystem—transforming engagement through next-gen live streaming technology.',
    button: 'See What We’re Building',
    buttonLink: '/products',
  },
  '/features': {
    image: feabg,
    title: 'Powering Modern Businesses with Scalable Solutions and Next-Gen Live Streaming',
    subtitle:
      'Pixalive Technology Services builds scalable digital solutions and, with Belive Technology, enhances user engagement through advanced live streaming and interactive tools.',
    button: 'Explore Services',
    buttonLink: '/service',
  },
  '/hireus': {
    image: hirebg,
    title: 'Hire Pixalive—Where Innovation Meets Execution.',
    subtitle: 'Partner with us for expert digital solutions tailored to your vision and goals.',
    button: 'Book Live Demo',
    buttonLink: '/contact',
  },
  '/aboutus': {
    image: aboutbg,
    title:
      'At Pixalive Technology Services, we don’t just build technology—we engineer transformation',
    subtitle:
      'At Pixalive Technology Services, we turn ideas into intelligent, future-ready solutions—reshaping the digital world with innovation, impact, and global ambition.',
    button: 'Know More',
    buttonLink: '/aboutus',
  },
};

const NewHero = () => {
  const location = useLocation();
  const { pathname } = location;
  const content = heroContent[pathname] || heroContent['/'];

  return (
    <section className="relative w-full h-screen min-h-[600px]">
      {/* Background Image */}
      <img
        src={content.image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading='lazy'
      />
      {/* bg-dullness */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Content including Header */}
      <div className="relative z-10">
        <Header />
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 h-[calc(100vh-110px)]">
          <div className="max-w-5xl text-center text-white space-y-6">
            <h1 className="text-[24px] sm:text-[20px] md:text-[28px] lg:text-[40px] font-medium leading-relaxed sm:leading-relaxed lg:leading-tight px-2 sm:px-4">
              {content.title}
            </h1>
            <p className="text-[16px] max-w-[1200px] mt-8 sm:text-lg md:text-xl mx-auto sm:mt-6 px-2 sm:px-4">
              {content.subtitle}
            </p>
            <Link
              to={content.buttonLink}
              className="inline-block mt-6 px-5 py-3 text-sm sm:text-base md:text-lg bg-white text-black font-normal hover:bg-gray-200 transition"
            >
              {content.button} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
