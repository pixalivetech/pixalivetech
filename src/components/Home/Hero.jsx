import React, { useEffect, useRef, useState } from "react";
import hero from './../../assets/imgs/home/hero.png';

const Hero = () => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger when 20% of the image is visible
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white p-2 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="font-lufga font-normal text-[26px] leading-[130%] sm:text-[32px] sm:leading-[140%] md:text-[40px] md:leading-[150%] lg:text-[52px] lg:leading-[160%] tracking-tight mb-8">
          Pixalive Technology Service is one of the &nbsp;
          <br className="hidden sm:block" />
          India’s fastest growing Software
          <br className="hidden md:block" />
          Development Company.
        </h1>

        {/* Paragraphs */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mt-[50px] sm:text-[15px] md:text-base">
          <p className="font-normal text-[18px] leading-[160%] tracking-normal hidden sm:block"></p>
          <p className="font-normal text-[18px] leading-[170%] tracking-normal">
            Pixalive Technology Services builds smart, scalable tech solutions
            to power businesses and the Pixalive Ecosystem.
          </p>

          <p className="font-normal text-[18px] leading-[170%] tracking-normal">
            Pixalive Technology Services offers innovative software, cloud, and
            consulting solutions. We power the Pixalive Ecosystem and help
            businesses grow through tech.
          </p>
        </div>
        <div className="mt-20 flex justify-center">
          <img
            ref={imgRef}
            className={`w-full sm:max-w-[1260px] h-auto transition-transform duration-[1500ms] ease-in-out transform ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            src={hero}
            alt="hero img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
