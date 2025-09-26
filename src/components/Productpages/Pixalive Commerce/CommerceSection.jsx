import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    let duration = 1500;
    let stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
};

export default function WhyChoosePixalive() {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/3">
          <h2 className="text-lg font-lufga tracking-wide">Why Choose Pixalive Commerce</h2>
        </div>
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-3xl md:text-5xl font-lufga leading-[130%]">
            Pixalive Commerce is a next-gen eCommerce platform designed for growth-driven businesses.
          </h1>
          <div className="grid grid-cols-1 text-lg md:grid-cols-2 md:mt-20 mt-4 md:gap-50 gap:6">
            <p>
              From launching your first online store to scaling a national franchise, our platform empowers brands with the tools, insights, and integrations needed to thrive in the digital and retail worlds.
            </p>
            <p className='md:mt-0 mt-8'>
              With deep expertise in commerce technology and part of the Pixalive Ecosystem, we help you simplify operations and maximize reach — all from a single, unified system.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 font-lufga gap-20 mt-40 text-center">
        <div>
          <p className="text-5xl font-bold">
            <Counter target="100" />
          </p>
          <p className="mt-7 text-lg">Successful Projects Delivered</p>
        </div>
        <div>
          <p className="text-5xl font-bold">
            <Counter target="10" />
          </p>
          <p className="mt-7  text-lg">Countries Served</p>
        </div>
        <div>
          <p className="text-5xl font-bold">
            4.9/5
          </p>
          <p className="mt-7 text-lg">Average Client Rating</p>
        </div>
        <div>
          <p className="text-5xl font-bold">
            <Counter target="7" />
          </p>
          <p className="mt-7 text-lg">Years of Commerce & Tech Innovation</p>
        </div>
      </div>
    </section>
  );
}
