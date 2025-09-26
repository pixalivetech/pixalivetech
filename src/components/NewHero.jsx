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
    buttonLink: '/service',
  },
  '/features': {
    image: feabg,
    title: 'Powering Modern Businesses with Scalable Solutions and Next-Gen Live Streaming',
    subtitle: 'Pixalive Technology Services builds scalable digital solutions and, with Belive Technology, enhances user engagement through advanced live streaming and interactive tools.',
    button: 'Book Live Demo',
    buttonLink: '/service',
  },
  '/hireus': {
    image: hirebg,
    title: 'Empowering Innovation with IT Services & Live Streaming',
    subtitle: 'At Pixalive, we craft scalable SaaS and live streaming solutions that transform bold ideas into market-ready products—boosting your brand and ROI through smart, immersive tech.',
    button: 'Explore Our Solution',
    buttonLink: '/aboutus',
  },
  '/aboutus': {
    image: aboutbg,
    title: 'At Pixalive Technology Services, we don’t just build technology—we engineer transformation',
    subtitle: 'At Pixalive Technology Services, we turn ideas into intelligent, future-ready solutions—reshaping the digital world with innovation, impact, and global ambition.',
    button: 'Know More',
    buttonLink: '/aboutus',
  },
};

const NewHero = () => {
  const location = useLocation();
  const { pathname } = location;

  const content = heroContent[pathname] || heroContent['/'];

  return (
    <section className="relative w-full h-[100vh]">
      {/* Background Image */}
      <img
        src={content.image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0  bg-black/50 z-0" />

      {/* Content including Header */}
      <div className="relative z-10">
        <Header />

        <div className="flex items-center justify-center h-[calc(100vh-80px)] px-6">
          <div className="max-w-4xl text-center text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              {content.title}
            </h1>
            <p className="text-normal sm:text-lg md:text-xl max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <Link
              to={content.buttonLink}
              className="inline-block mt-6 px-6 py-3 text-base sm:text-lg bg-white text-black font-normal hover:bg-gray-200 transition group"
            >
              {content.button}
              <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;