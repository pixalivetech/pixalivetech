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
    title: 'Our Services Drive Your Digital Transformation.',
    subtitle: 'From live streaming to smart video commerce, we help you scale with innovative technology.',
    button: 'Explore Services',
    buttonLink: '/service',
  },
  '/hireus': {
    image: hirebg,
    title: 'Hire Pixalive—Where Innovation Meets Execution.',
    subtitle: 'Partner with us for expert digital solutions tailored to your vision and goals.',
    button: 'Start a Project',
    buttonLink: '/contact',
  },
  '/aboutus': {
    image: aboutbg,
    title: 'Learn About Our Journey and Mission.',
    subtitle: 'Discover the team, values, and vision that drive Pixalive forward.',
    button: 'Meet the Team',
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
      <div className="absolute inset-0  bg-opacity-60 z-0" />

      {/* Content including Header */}
      <div className="relative z-10">
        <Header />

        <div className="flex items-center justify-center h-[calc(100vh-80px)] px-6">
          <div className="max-w-4xl text-center text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {content.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              {content.subtitle}
            </p>
            <Link
              to={content.buttonLink}
              className="inline-block mt-6 px-6 py-3 text-base sm:text-lg bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
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
